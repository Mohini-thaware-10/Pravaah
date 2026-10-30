(function () {
    'use strict';

    var MAX_OPEN_GROUPS = 2;

    var GROUP_ICONS = {
        overview: '<rect x="2" y="2" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="2" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="2" y="10" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="10" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"/>',
        applications: '<path d="M5 3h8l2 2v10H5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M7 8h5M7 11h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
        shield: '<path d="M9 2l6 3v5c0 3.5-2.5 6-6 7-3.5-1-6-3.5-6-7V5l6-3z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M6 9l2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
        network: '<circle cx="9" cy="9" r="2.5" stroke="currentColor" stroke-width="1.5"/><circle cx="3" cy="4" r="1.5" stroke="currentColor" stroke-width="1.5"/><circle cx="15" cy="4" r="1.5" stroke="currentColor" stroke-width="1.5"/><circle cx="3" cy="14" r="1.5" stroke="currentColor" stroke-width="1.5"/><circle cx="15" cy="14" r="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M4.2 5.1l3 2.3M13.8 5.1l-3 2.3M4.2 12.9l3-2.3M13.8 12.9l-3-2.3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
        clock: '<circle cx="9" cy="9" r="7" stroke="currentColor" stroke-width="1.5"/><path d="M9 5v4l2.5 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
        chart: '<path d="M3 15V4M7.5 15V8M12 15V6M16 15V2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
        users: '<circle cx="7" cy="6" r="2.5" stroke="currentColor" stroke-width="1.5"/><path d="M2.5 15c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="13" cy="7" r="1.8" stroke="currentColor" stroke-width="1.5"/><path d="M11.5 10.8c2.2 0 4 1.7 4 3.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
        support: '<path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="7" cy="5" r="1.6" fill="currentColor"/><circle cx="11" cy="9" r="1.6" fill="currentColor"/><circle cx="6" cy="13" r="1.6" fill="currentColor"/>'
    };

    var NAV_GROUPS = [
        {
            key: 'overview',
            label: 'Overview',
            icon: 'overview',
            items: [
                { page: 'overview', label: 'Overview' },
                { page: 'approval-dashboard', label: 'Approval Dashboard' }
            ]
        },
        {
            key: 'applications',
            label: 'Applications',
            icon: 'applications',
            items: [
                { page: 'applications', label: 'Applications' },
                { page: 'workflow-tracking', label: 'Workflow Tracking' },
                { page: 'approval-stages', label: 'Approval Stages' }
            ]
        },
        {
            key: 'documents',
            label: 'Documents & Compliance',
            icon: 'shield',
            items: [
                { page: 'document-verification', label: 'Document Verification' },
                { page: 'compliance-monitoring', label: 'Compliance Monitoring' },
                { page: 'approval-to-compliance', label: 'Approval-to-Compliance' },
                { page: 'pre-submission-simulator', label: 'Pre-Submission Simulator' }
            ]
        },
        {
            key: 'intelligence',
            label: 'Intelligence',
            icon: 'network',
            items: [
                { page: 'trace-graph', label: 'Evidence-to-Decision Trace Graph' },
                { page: 'impact-map', label: 'Regulatory Change Impact' }
            ]
        },
        {
            key: 'tasks',
            label: 'Tasks & Alerts',
            icon: 'clock',
            items: [
                { page: 'deadline-alerts', label: 'Deadline & Alerts' },
                { page: 'notifications', label: 'Notifications' },
                { page: 'my-tasks', label: 'My Tasks' }
            ]
        },
        {
            key: 'analytics',
            label: 'Analytics',
            icon: 'chart',
            items: [
                { page: 'reports-analytics', label: 'Reports & Analytics' },
                { page: 'audit-trail', label: 'Audit Trail' }
            ]
        },
        {
            key: 'administration',
            label: 'Administration',
            icon: 'users',
            items: [
                { page: 'user-role-management', label: 'User & Role Management' }
            ]
        },
        {
            key: 'support',
            label: 'Support & Preferences',
            icon: 'support',
            items: [
                { page: 'help', label: 'Help & Guidelines' },
                { page: 'settings', label: 'Settings' }
            ]
        }
    ];

    var sidebar = document.getElementById('sidebar');
    var nav = document.getElementById('sidebarNav');
    var backdrop = document.getElementById('sidebarBackdrop');
    var collapseBtn = document.getElementById('sidebarCollapse');
    if (!sidebar || !nav) return;

    var openOrder = [];

    function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, function (ch) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
        });
    }

    function groupIcon(key) {
        return '<svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' + (GROUP_ICONS[key] || GROUP_ICONS.overview) + '</svg>';
    }

    function renderGroups() {
        nav.innerHTML = NAV_GROUPS.map(function (group) {
            var items = group.items.map(function (item) {
                var active = item.page === 'overview' ? ' active' : '';
                return '<button class="nav__item' + active + '" type="button" data-page="' + escapeHtml(item.page) + '" title="' + escapeHtml(item.label) + '">' +
                    '<span class="nav__text">' + escapeHtml(item.label) + '</span>' +
                    '</button>';
            }).join('');
            return '<div class="sidebar__group" data-group="' + escapeHtml(group.key) + '">' +
                '<button class="sidebar__group-toggle" type="button" aria-expanded="false" aria-controls="group-' + escapeHtml(group.key) + '" data-tooltip="' + escapeHtml(group.label) + '" aria-label="' + escapeHtml(group.label) + '">' +
                    '<span class="sidebar__group-icon" aria-hidden="true">' + groupIcon(group.icon) + '</span>' +
                    '<span class="sidebar__group-label">' + escapeHtml(group.label) + '</span>' +
                    '<span class="sidebar__group-chevron" aria-hidden="true"><svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>' +
                '</button>' +
                '<div class="sidebar__submenu" id="group-' + escapeHtml(group.key) + '" role="group" aria-label="' + escapeHtml(group.label) + '">' +
                    '<div class="sidebar__submenu-inner">' + items + '</div>' +
                '</div>' +
            '</div>';
        }).join('');
    }

    function getGroup(key) {
        return nav.querySelector('.sidebar__group[data-group="' + key + '"]');
    }

    function getToggle(group) {
        return group ? group.querySelector('.sidebar__group-toggle') : null;
    }

    function isCollapsed() {
        return sidebar.classList.contains('collapsed');
    }

    function markOpen(group) {
        if (!group) return;
        var key = group.getAttribute('data-group');
        group.classList.add('open');
        var toggle = getToggle(group);
        if (toggle) toggle.setAttribute('aria-expanded', 'true');
        var existing = openOrder.indexOf(key);
        if (existing !== -1) openOrder.splice(existing, 1);
        openOrder.push(key);
        while (openOrder.length > MAX_OPEN_GROUPS) {
            var oldKey = openOrder.shift();
            if (oldKey === key) continue;
            var oldGroup = getGroup(oldKey);
            if (oldGroup) {
                oldGroup.classList.remove('open');
                var oldToggle = getToggle(oldGroup);
                if (oldToggle) oldToggle.setAttribute('aria-expanded', 'false');
            }
        }
    }

    function markClosed(group) {
        if (!group) return;
        var key = group.getAttribute('data-group');
        group.classList.remove('open');
        var toggle = getToggle(group);
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
        var index = openOrder.indexOf(key);
        if (index !== -1) openOrder.splice(index, 1);
    }

    function toggleGroup(group) {
        if (!group) return;
        if (isCollapsed()) {
            sidebar.classList.remove('collapsed');
            markOpen(group);
            return;
        }
        if (group.classList.contains('open')) markClosed(group);
        else markOpen(group);
    }

    function syncActive() {
        var activeItem = null;
        nav.querySelectorAll('.nav__item[data-page]').forEach(function (item) {
            if (item.classList.contains('active')) {
                item.setAttribute('aria-current', 'page');
                activeItem = item;
            } else if (item.getAttribute('aria-current') === 'page') {
                item.removeAttribute('aria-current');
            }
        });
        nav.querySelectorAll('.sidebar__group').forEach(function (group) {
            var hasActive = !!group.querySelector('.nav__item.active');
            group.classList.toggle('has-active', hasActive);
        });
        if (activeItem) markOpen(activeItem.closest('.sidebar__group'));
    }

    function syncCollapse() {
        if (!collapseBtn) return;
        var collapsed = isCollapsed();
        collapseBtn.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
        collapseBtn.setAttribute('aria-label', collapsed ? 'Expand sidebar' : 'Collapse sidebar');
        collapseBtn.setAttribute('title', collapsed ? 'Expand sidebar' : 'Collapse sidebar');
        sidebar.setAttribute('data-collapsed', collapsed ? 'true' : 'false');
    }

    function syncDrawer() {
        var mobile = window.innerWidth <= 768;
        var open = sidebar.classList.contains('mobile-open');
        if (backdrop) backdrop.classList.toggle('active', mobile && open);
        document.body.classList.toggle('sidebar-open', mobile && open);
        if (mobile && !open) sidebar.setAttribute('aria-hidden', 'true');
        else sidebar.removeAttribute('aria-hidden');
    }

    function closeDrawer() {
        sidebar.classList.remove('mobile-open');
    }

    function applyResponsive() {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('collapsed');
        } else if (window.innerWidth <= 1024) {
            sidebar.classList.add('collapsed');
        }
        syncDrawer();
    }

    renderGroups();

    nav.addEventListener('click', function (event) {
        var toggle = event.target.closest('.sidebar__group-toggle');
        if (toggle) {
            event.preventDefault();
            toggleGroup(toggle.closest('.sidebar__group'));
        }
    });

    if (backdrop) backdrop.addEventListener('click', closeDrawer);

    var sidebarObserver = new MutationObserver(function () {
        syncCollapse();
        syncDrawer();
    });
    sidebarObserver.observe(sidebar, { attributes: true, attributeFilter: ['class'] });

    var navObserver = new MutationObserver(function () {
        syncActive();
    });
    nav.querySelectorAll('.nav__item[data-page]').forEach(function (item) {
        navObserver.observe(item, { attributes: true, attributeFilter: ['class'] });
    });

    window.addEventListener('resize', function () {
        applyResponsive();
    });

    window.PRAVAAH_SIDEBAR = {
        groups: NAV_GROUPS,
        syncActive: syncActive,
        toggleCollapse: function () { sidebar.classList.toggle('collapsed'); },
        openMobile: function () { sidebar.classList.add('mobile-open'); },
        closeMobile: closeDrawer
    };

    applyResponsive();
    syncCollapse();
    syncDrawer();
    syncActive();

    document.addEventListener('DOMContentLoaded', function () {
        applyResponsive();
        syncActive();
        setTimeout(syncActive, 0);
        setTimeout(syncActive, 120);
    });

    window.addEventListener('load', function () {
        syncActive();
    });
})();
