// PRAVAAH Deadline & Alerts Centre - Frontend only, illustrative demo data

const DA_TODAY = new Date(2026, 9, 23);
const DA_MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const daAlerts = [
    { id: 'DA-0001', title: 'Supporting document review is approaching its due date.', appId: 'APP-2026-0238', institution: 'Sahyadri Institute of Technology', category: 'Documents', priority: 'High', date: '23 Oct 2026', time: '09:15', description: 'Illustrative supporting document requires review before the approaching demo due date.', action: 'Review the associated supporting document list in this sample record.', due: '26 Oct 2026', related: 'REQ-2026-0101', read: false, dismissed: false },
    { id: 'DA-0002', title: 'Compliance response remains pending in the demo record.', appId: 'APP-2026-0251', institution: 'Central Institute of Engineering', category: 'Compliance', priority: 'High', date: '23 Oct 2026', time: '10:20', description: 'Sample compliance response is awaiting review in the demonstration record.', action: 'Review the pending compliance item and request clarification if needed.', due: '30 Oct 2026', related: 'REQ-2026-0104', read: false, dismissed: false },
    { id: 'DA-0003', title: 'A document validity review requires attention.', appId: 'APP-2026-0142', institution: 'Western Institute of Technology', category: 'Documents', priority: 'Medium', date: '23 Oct 2026', time: '11:05', description: 'Illustrative document date requires review for this sample application.', action: 'Check document validity details for this demo record.', due: '28 Oct 2026', related: 'REQ-2026-0102', read: false, dismissed: false },
    { id: 'DA-0004', title: 'Application workflow has a sample pending action.', appId: 'APP-2026-0214', institution: 'National Technical Institute', category: 'Workflow', priority: 'Medium', date: '22 Oct 2026', time: '16:40', description: 'Workflow review indicates a pending action in this illustrative record.', action: 'Review the workflow stage and suggested follow-up.', due: '31 Oct 2026', related: 'REQ-2026-0108', read: false, dismissed: false },
    { id: 'DA-0005', title: 'An illustrative follow-up date has passed.', appId: 'APP-2026-0302', institution: 'Southern Technical Institute', category: 'Follow-up', priority: 'High', date: '22 Oct 2026', time: '14:25', description: 'A demo follow-up item is overdue by illustration.', action: 'Review the overdue sample item and track follow-up status.', due: '21 Oct 2026', related: 'REQ-2026-0106', read: false, dismissed: false },
    { id: 'DA-0006', title: 'A sample compliance item has been marked for review.', appId: 'APP-2026-0187', institution: 'Deccan College of Engineering', category: 'Compliance', priority: 'Medium', date: '22 Oct 2026', time: '12:10', description: 'Undertaking follow-up is marked for review in this demo record.', action: 'Check the undertaking status through the appropriate sample flow.', due: '29 Oct 2026', related: 'REQ-2026-0103', read: false, dismissed: false },
    { id: 'DA-0007', title: 'Supporting evidence follow-up is due soon.', appId: 'APP-2026-0278', institution: 'Western Technical Campus', category: 'Documents', priority: 'Medium', date: '22 Oct 2026', time: '09:55', description: 'Illustrative supporting evidence requires attention before the demo due date.', action: 'Review supporting evidence for this sample application.', due: '31 Oct 2026', related: 'REQ-2026-0105', read: false, dismissed: false },
    { id: 'DA-0008', title: 'Deadline approaching for compliance response.', appId: 'APP-2026-0251', institution: 'Central Institute of Engineering', category: 'Deadlines', priority: 'Medium', date: '21 Oct 2026', time: '15:30', description: 'Sample deadline reminder for compliance response review.', action: 'Review timeline and prepare demo follow-up.', due: '30 Oct 2026', related: 'REQ-2026-0104', read: true, dismissed: false },
    { id: 'DA-0009', title: 'Pending clarification requires attention.', appId: 'APP-2026-0302', institution: 'Southern Technical Institute', category: 'Follow-up', priority: 'High', date: '21 Oct 2026', time: '13:15', description: 'Illustrative clarification request remains open in demo record.', action: 'Track clarification follow-up for this sample item.', due: '21 Oct 2026', related: 'REQ-2026-0106', read: true, dismissed: false },
    { id: 'DA-0010', title: 'Checklist review pending in workflow.', appId: 'APP-2026-0278', institution: 'Western Technical Campus', category: 'Workflow', priority: 'Routine', date: '21 Oct 2026', time: '11:20', description: 'Sample checklist review is pending in the demonstration workflow.', action: 'Review pending checklist items for this record.', due: '01 Nov 2026', related: 'REQ-2026-0114', read: true, dismissed: false },
    { id: 'DA-0011', title: 'Document review item marked resolved (demo).', appId: 'APP-2026-0142', institution: 'Western Institute of Technology', category: 'Documents', priority: 'Routine', date: '20 Oct 2026', time: '16:00', description: 'Illustrative document item shown as resolved in this demo snapshot.', action: 'No further action suggested for this sample resolved item.', due: '28 Oct 2026', related: 'REQ-2026-0110', read: true, dismissed: false },
    { id: 'DA-0012', title: 'Compliance item marked resolved (demo).', appId: 'APP-2026-0187', institution: 'Deccan College of Engineering', category: 'Compliance', priority: 'Routine', date: '20 Oct 2026', time: '14:45', description: 'Sample compliance item shown as resolved for demonstration.', action: 'No further action suggested for this sample resolved item.', due: '19 Oct 2026', related: 'REQ-2026-0111', read: true, dismissed: false }
];

const daCalendarEvents = {
    '2026-10-26': [{ title: 'Supporting document review', appId: 'APP-2026-0238' }],
    '2026-10-28': [{ title: 'Document validity review', appId: 'APP-2026-0142' }],
    '2026-10-29': [{ title: 'Undertaking follow-up', appId: 'APP-2026-0187' }],
    '2026-10-30': [{ title: 'Compliance response review', appId: 'APP-2026-0251' }],
    '2026-10-31': [{ title: 'Supporting evidence follow-up', appId: 'APP-2026-0278' }]
};

let daTab = 'all';
let daActiveKpi = 'all';
let daLastFocus = null;
let daCalView = 'calendar';
let daCalMonth = 9; // Oct
let daCalYear = 2026;
let daCalSelected = '2026-10-23';
let daQueueSort = 'due-asc';
let daQueueStatus = 'all';
let daAlertDrawerId = null;

function daEsc(text) {
    const div = document.createElement('div');
    div.textContent = String(text);
    return div.innerHTML;
}

function daParseDate(str) {
    if (typeof parseAppDate === 'function') return parseAppDate(str);
    const p = String(str).trim().split(' ');
    if (p.length !== 3) return null;
    return new Date(parseInt(p[2], 10), DA_MONTHS.indexOf(p[1]), parseInt(p[0], 10));
}

function daDaysUntil(dueStr) {
    const due = daParseDate(dueStr);
    if (!due) return null;
    return Math.round((due - DA_TODAY) / 86400000);
}

function daRelativeLabel(dueStr) {
    const days = daDaysUntil(dueStr);
    if (days === null) return '-';
    if (days < 0) return Math.abs(days) + ' days overdue';
    if (days === 0) return 'Due today';
    if (days === 1) return 'Due tomorrow';
    return 'Due in ' + days + ' days';
}

function daFilteredAlerts() {
    const search = (document.getElementById('daSearchInput')?.value || '').toLowerCase();
    const category = document.getElementById('daCategoryFilter')?.value || 'all';
    const priority = document.getElementById('daPriorityFilter')?.value || 'all';
    const range = document.getElementById('daDateRange')?.value || 'all';

    return daAlerts.filter(alert => {
        if (alert.dismissed) return false;
        if (daTab !== 'all' && alert.category !== daTab) return false;
        if (daActiveKpi === 'high' && alert.priority !== 'High') return false;
        if (daActiveKpi === 'due7') {
            const days = daDaysUntil(alert.due);
            if (days === null || days < 0 || days > 7) return false;
        }
        if (daActiveKpi === 'overdue') {
            const days = daDaysUntil(alert.due);
            if (days === null || days >= 0) return false;
        }
        if (daActiveKpi === 'resolved') {
            if (!(alert.title.toLowerCase().includes('resolved'))) return false;
        }
        if (category !== 'all' && alert.category !== category) return false;
        if (priority !== 'all' && alert.priority !== priority) return false;
        if (range !== 'all') {
            const days = daDaysUntil(alert.due);
            if (days === null) return false;
            if (range === 'today' && days !== 0) return false;
            if (range === '7days' && (days < 0 || days > 7)) return false;
            if (range === '30days' && (days < 0 || days > 30)) return false;
            if (range === 'overdue' && days >= 0) return false;
        }
        if (search) {
            const hay = [alert.title, alert.appId, alert.institution, alert.id].join(' ').toLowerCase();
            if (!hay.includes(search)) return false;
        }
        return true;
    }).sort((a, b) => (daParseDate(b.date) || 0) - (daParseDate(a.date) || 0));
}

function daRenderAlerts() {
    const list = document.getElementById('daAlertList');
    const empty = document.getElementById('daFeedEmpty');
    const count = document.getElementById('daFeedCount');
    if (!list) return;
    const alerts = daFilteredAlerts();
    if (count) count.textContent = `Showing ${alerts.length} alert${alerts.length !== 1 ? 's' : ''}`;
    list.innerHTML = '';
    if (alerts.length === 0) {
        if (empty) empty.hidden = false;
        return;
    }
    if (empty) empty.hidden = true;
    alerts.forEach(alert => {
        const item = document.createElement('article');
        item.className = 'da-alert-item' + (alert.read ? '' : ' da-alert-item--unread');
        item.setAttribute('data-alert', alert.id);
        const days = daDaysUntil(alert.due);
        const overdue = days !== null && days < 0;
        const dueSoon = days !== null && days >= 0 && days <= 7;
        item.innerHTML = `
            <div class="da-alert-item__head">
                <div class="da-alert-item__title-row">
                    <button type="button" class="da-alert-item__title" data-da-view="${alert.id}">${daEsc(alert.title)}</button>
                    <span class="da-alert-item__unread" aria-label="Unread"></span>
                </div>
                <div class="da-alert-item__meta">
                    <span>${alert.appId}</span>
                    <span>&middot;</span>
                    <span>${daEsc(alert.institution)}</span>
                </div>
            </div>
            <div class="da-alert-item__body">
                <p class="da-alert-item__desc">${daEsc(alert.description)}</p>
                <div class="da-alert-item__tags">
                    <span class="da-badge da-badge--${alert.category === 'Deadlines' ? 'amber' : alert.category === 'Compliance' ? 'navy' : alert.category === 'Documents' ? 'saffron' : alert.category === 'Follow-up' ? 'green' : 'muted'}">${alert.category}</span>
                    <span class="da-badge da-badge--${alert.priority === 'High' ? 'red' : alert.priority === 'Medium' ? 'amber' : 'muted'}">Priority: ${alert.priority}</span>
                    <span class="da-badge da-badge--time">${alert.date} ${alert.time}</span>
                    <span class="da-badge ${overdue ? 'da-badge--red' : dueSoon ? 'da-badge--amber' : 'da-badge--muted'}">${daRelativeLabel(alert.due)} (Due ${alert.due})</span>
                </div>
            </div>
            <div class="da-alert-item__footer">
                <button type="button" class="da-link-btn" data-da-view="${alert.id}">View Details</button>
                <div class="da-alert-menu">
                    <button type="button" class="da-alert-menu__btn" aria-haspopup="menu" aria-expanded="false" data-da-menu="${alert.id}">⋮</button>
                    <div class="da-alert-menu__panel" data-da-menu-panel="${alert.id}" role="menu">
                        <button type="button" role="menuitem" data-da-action="read" data-id="${alert.id}">${alert.read ? 'Mark Unread (Demo)' : 'Mark Read'}</button>
                        <button type="button" role="menuitem" data-da-action="dismiss" data-id="${alert.id}">Dismiss Demo Alert</button>
                    </div>
                </div>
            </div>
        `;
        list.appendChild(item);
    });
}

function daRenderTabs() {
    document.querySelectorAll('.da-tab').forEach(btn => {
        const on = btn.getAttribute('data-da-tab') === daTab;
        btn.classList.toggle('active', on);
        btn.setAttribute('aria-selected', on ? 'true' : 'false');
    });
}

function daUpdateKpiState() {
    document.querySelectorAll('.da-kpi').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-da-kpi') === daActiveKpi);
    });
}

function daQueueData() {
    const rows = daAlerts.filter(a => !a.dismissed).map(alert => ({
        appId: alert.appId,
        institution: alert.institution,
        action: alert.title.replace(/ is approaching| remains pending| requires attention| has a sample| has passed| has been marked| due soon| approaching| requires| pending in the demo record\.| in the demo record\.| for review\.| attention\.| follow-up\./gi, '').trim(),
        due: alert.due,
        priority: alert.priority,
        status: daQueueStatusFor(alert)
    }));
    rows.sort((a, b) => {
        if (daQueueSort === 'due-desc') return (daParseDate(b.due) || 0) - (daParseDate(a.due) || 0);
        if (daQueueSort === 'priority-desc') {
            const r = { High: 0, Medium: 1, Routine: 2 };
            return r[a.priority] - r[b.priority];
        }
        if (daQueueSort === 'app-asc') return a.appId.localeCompare(b.appId);
        return (daParseDate(a.due) || 0) - (daParseDate(b.due) || 0);
    });
    return rows.filter(r => {
        if (daQueueStatus === 'all') return true;
        if (daQueueStatus === 'Overdue') return daRelativeLabel(r.due).includes('overdue');
        if (daQueueStatus === 'Due Today') return daRelativeLabel(r.due) === 'Due today';
        return r.status === daQueueStatus;
    });
}

function daQueueStatusFor(alert) {
    const days = daDaysUntil(alert.due);
    if (days !== null && days < 0) return 'Overdue';
    if (days === 0) return 'Due Today';
    if (days !== null && days <= 3) return 'Due Soon';
    if (alert.priority === 'High') return 'Action Required';
    return 'Due Soon';
}

function daRenderQueue() {
    const body = document.getElementById('daQueueBody');
    if (!body) return;
    body.innerHTML = daQueueData().map(row => {
        const days = daDaysUntil(row.due);
        const overdue = days !== null && days < 0;
        return `
            <tr>
                <td><button class="da-link-btn" data-app="${row.appId}">${row.appId}</button></td>
                <td>${daEsc(row.institution)}</td>
                <td>${daEsc(row.action)}</td>
                <td>${row.due}</td>
                <td class="${overdue ? 'da-queue-overdue' : ''}">${daRelativeLabel(row.due)}</td>
                <td><span class="da-badge da-badge--${row.priority === 'High' ? 'red' : row.priority === 'Medium' ? 'amber' : 'muted'}">${row.priority}</span></td>
                <td><span class="da-badge da-badge--${row.status === 'Overdue' ? 'red' : row.status === 'Due Today' ? 'amber' : row.status === 'Action Required' ? 'navy' : 'muted'}">${row.status}</span></td>
                <td><button class="da-queue-view" data-app="${row.appId}">View</button></td>
            </tr>
        `;
    }).join('');
}

function daRenderCalendar() {
    const grid = document.getElementById('daCalGrid');
    const monthEl = document.getElementById('daCalMonth');
    const list = document.getElementById('daCalList');
    if (!grid) return;
    monthEl.textContent = DA_MONTHS[daCalMonth] + ' ' + daCalYear;
    const first = new Date(daCalYear, daCalMonth, 1);
    const last = new Date(daCalYear, daCalMonth + 1, 0);
    const startDay = first.getDay();
    grid.innerHTML = '';
    for (let i = 0; i < startDay; i++) {
        const blank = document.createElement('div');
        blank.className = 'da-cal-cell da-cal-cell--blank';
        grid.appendChild(blank);
    }
    for (let day = 1; day <= last.getDate(); day++) {
        const key = daCalYear + '-' + String(daCalMonth + 1).padStart(2, '0') + '-' + String(day).padStart(2, '0');
        const has = !!daCalendarEvents[key];
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'da-cal-cell' + (has ? ' da-cal-cell--has' : '') + (key === daCalSelected ? ' da-cal-cell--selected' : '');
        btn.setAttribute('data-cal-date', key);
        btn.innerHTML = '<span class="da-cal-day">' + day + '</span>' + (has ? '<span class="da-cal-dot"></span>' : '');
        grid.appendChild(btn);
    }
    if (list) {
        list.innerHTML = Object.entries(daCalendarEvents).map(([key, events]) => {
            const p = key.split('-');
            return `<li class="da-cal-list__item"><span class="da-cal-list__date">${p[2]} ${DA_MONTHS[parseInt(p[1],10)-1]} ${p[0]}</span><div class="da-cal-list__events">${events.map(e => `<div>${daEsc(e.title)} <span>(${e.appId})</span></div>`).join('')}</div></li>`;
        }).join('');
    }
    daRenderCalEvents();
}

function daRenderCalEvents() {
    const dateEl = document.getElementById('daCalSelectedDate');
    const list = document.getElementById('daCalEventsList');
    const empty = document.getElementById('daCalEventsEmpty');
    if (dateEl) {
        const p = daCalSelected.split('-');
        dateEl.textContent = p[2] + ' ' + DA_MONTHS[parseInt(p[1],10)-1] + ' ' + p[0];
    }
    const events = daCalendarEvents[daCalSelected] || [];
    if (!list) return;
    if (empty) empty.hidden = events.length > 0;
    list.innerHTML = events.map(e => `
        <div class="da-cal-event">
            <div class="da-cal-event__title">${daEsc(e.title)}</div>
            <button type="button" class="da-cal-event__app" data-app="${e.appId}">${e.appId}</button>
        </div>
    `).join('');
}

function daOpenAlertDrawer(id) {
    const alert = daAlerts.find(a => a.id === id);
    if (!alert) return;
    daAlertDrawerId = id;
    daLastFocus = document.activeElement;
    document.getElementById('daDrawerTitle').textContent = alert.title;
    document.getElementById('daDrawerMeta').textContent = alert.date + ' ' + alert.time + ' · ' + alert.category + ' · Priority: ' + alert.priority;
    document.getElementById('daDrawerId').textContent = alert.id;
    document.getElementById('daDrawerInst').textContent = alert.institution;
    document.getElementById('daDrawerRel').textContent = alert.related || '-';
    document.getElementById('daDrawerCreated').textContent = alert.date + ' ' + alert.time;
    document.getElementById('daDrawerDue').textContent = alert.due;
    document.getElementById('daDrawerDesc').textContent = alert.description;
    document.getElementById('daDrawerAction').textContent = alert.action;
    const appBtn = document.getElementById('daDrawerApp');
    appBtn.textContent = alert.appId;
    appBtn.setAttribute('data-app', alert.appId);
    const priority = document.getElementById('daDrawerPriority');
    priority.className = 'da-badge da-badge--' + (alert.priority === 'High' ? 'red' : alert.priority === 'Medium' ? 'amber' : 'muted');
    priority.textContent = 'Priority: ' + alert.priority;
    document.getElementById('daDrawerCategory').textContent = alert.category;
    const status = document.getElementById('daDrawerStatus');
    if (alert.dismissed) { status.textContent = 'Dismissed'; status.className = 'da-badge da-badge--muted'; }
    else if (alert.read) { status.textContent = 'Read'; status.className = 'da-badge da-badge--green'; }
    else { status.textContent = 'Unread'; status.className = 'da-badge da-badge--navy'; }
    document.getElementById('daDrawerMarkRead').textContent = alert.read ? 'Mark Unread (Demo)' : 'Mark as Read';
    document.getElementById('daDrawerViewReq').setAttribute('data-req', alert.related || '');
    const drawer = document.getElementById('daAlertDrawer');
    if (drawer) {
        drawer.classList.add('active');
        drawer.setAttribute('aria-hidden', 'false');
    }
    if (!alert.read && !alert.dismissed) { alert.read = true; daRenderAlerts(); }
    document.getElementById('daDrawerClose').focus();
}

function daCloseAlertDrawer() {
    const drawer = document.getElementById('daAlertDrawer');
    if (!drawer || !drawer.classList.contains('active')) return;
    drawer.classList.remove('active');
    drawer.setAttribute('aria-hidden', 'true');
    if (daLastFocus && typeof daLastFocus.focus === 'function') daLastFocus.focus();
}

function daToast(msg) {
    const t = document.getElementById('daToast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('active');
    setTimeout(() => t.classList.remove('active'), 2400);
}

document.addEventListener('DOMContentLoaded', function() {
    // Tabs
    document.querySelectorAll('.da-tab').forEach(btn => {
        btn.addEventListener('click', function() {
            daTab = this.getAttribute('data-da-tab');
            daRenderTabs();
            daRenderAlerts();
        });
    });

    // Controls
    document.getElementById('daSearchInput')?.addEventListener('input', daRenderAlerts);
    ['daCategoryFilter','daPriorityFilter','daDateRange'].forEach(id => {
        document.getElementById(id)?.addEventListener('change', daRenderAlerts);
    });
    document.getElementById('daResetFilters')?.addEventListener('click', function() {
        document.getElementById('daSearchInput').value = '';
        document.getElementById('daCategoryFilter').value = 'all';
        document.getElementById('daPriorityFilter').value = 'all';
        document.getElementById('daDateRange').value = 'all';
        daTab = 'all';
        daActiveKpi = 'all';
        daRenderTabs();
        daUpdateKpiState();
        daRenderAlerts();
    });

    // KPI
    document.querySelectorAll('.da-kpi').forEach(btn => {
        btn.addEventListener('click', function() {
            daActiveKpi = this.getAttribute('data-da-kpi');
            daUpdateKpiState();
            daRenderAlerts();
            document.querySelector('.da-feed')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Alert actions
    document.getElementById('daAlertList')?.addEventListener('click', function(e) {
        const view = e.target.closest('[data-da-view]');
        if (view) {
            daOpenAlertDrawer(view.getAttribute('data-da-view'));
            return;
        }
        const menuBtn = e.target.closest('[data-da-menu]');
        if (menuBtn) {
            const id = menuBtn.getAttribute('data-da-menu');
            const panel = document.querySelector('[data-da-menu-panel="' + id + '"]');
            document.querySelectorAll('.da-alert-menu__panel').forEach(p => p.classList.remove('active'));
            if (panel) panel.classList.toggle('active');
            menuBtn.setAttribute('aria-expanded', panel && panel.classList.contains('active') ? 'true' : 'false');
            return;
        }
        const action = e.target.closest('[data-da-action]');
        if (action) {
            const id = action.getAttribute('data-id');
            const alert = daAlerts.find(a => a.id === id);
            if (!alert) return;
            if (action.getAttribute('data-da-action') === 'read') {
                alert.read = !alert.read;
                daToast(alert.read ? 'Alert marked as read (demo).' : 'Alert marked as unread (demo).');
                if (daAlertDrawerId === id) daOpenAlertDrawer(id);
            }
            if (action.getAttribute('data-da-action') === 'dismiss') {
                alert.dismissed = true;
                daToast('Demo alert dismissed.');
                if (daAlertDrawerId === id) daCloseAlertDrawer();
            }
            document.querySelectorAll('.da-alert-menu__panel').forEach(p => p.classList.remove('active'));
            daRenderAlerts();
            return;
        }
    });
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.da-alert-menu')) {
            document.querySelectorAll('.da-alert-menu__panel').forEach(p => p.classList.remove('active'));
            document.querySelectorAll('.da-alert-menu__btn').forEach(b => b.setAttribute('aria-expanded', 'false'));
        }
    });
    document.getElementById('daFeedClear')?.addEventListener('click', function() {
        document.getElementById('daResetFilters').click();
    });

    // Queue
    document.getElementById('daQueueStatus')?.addEventListener('change', function() { daQueueStatus = this.value; daRenderQueue(); });
    document.getElementById('daQueueSort')?.addEventListener('change', function() { daQueueSort = this.value; daRenderQueue(); });
    document.querySelector('.da-queue')?.addEventListener('click', function(e) {
        const app = e.target.closest('[data-app]');
        if (app && (e.target.classList.contains('da-link-btn') || e.target.classList.contains('da-queue-view'))) {
            daOpenApp(app.getAttribute('data-app'));
        }
    });

    // Calendar
    document.querySelectorAll('.da-cal-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.da-cal-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
            this.classList.add('active');
            this.setAttribute('aria-pressed', 'true');
            daCalView = this.getAttribute('data-cal-view');
            document.getElementById('daCalView').hidden = daCalView !== 'calendar';
            document.getElementById('daCalListView').hidden = daCalView !== 'list';
            daRenderCalendar();
        });
    });
    document.getElementById('daCalPrev')?.addEventListener('click', function() { daCalMonth--; if (daCalMonth < 0) { daCalMonth = 11; daCalYear--; } daRenderCalendar(); });
    document.getElementById('daCalNext')?.addEventListener('click', function() { daCalMonth++; if (daCalMonth > 11) { daCalMonth = 0; daCalYear++; } daRenderCalendar(); });
    document.getElementById('daCalGrid')?.addEventListener('click', function(e) {
        const cell = e.target.closest('.da-cal-cell[data-cal-date]');
        if (!cell) return;
        document.querySelectorAll('.da-cal-cell').forEach(c => c.classList.remove('da-cal-cell--selected'));
        cell.classList.add('da-cal-cell--selected');
        daCalSelected = cell.getAttribute('data-cal-date');
        daRenderCalEvents();
    });
    document.getElementById('daCalEventsList')?.addEventListener('click', function(e) {
        const app = e.target.closest('[data-app]');
        if (app) daOpenApp(app.getAttribute('data-app'));
    });

    // Escalation
    document.querySelector('.da-escal-table')?.addEventListener('click', function(e) {
        const btn = e.target.closest('.da-link-btn[data-app]');
        if (btn) daOpenApp(btn.getAttribute('data-app'));
    });

    // Preferences
    document.getElementById('daSavePrefs')?.addEventListener('click', function() {
        const msg = document.getElementById('daPrefsMsg');
        if (msg) { msg.textContent = 'Demo preferences updated for the current UI demonstration only.'; setTimeout(() => msg.textContent = '', 2600); }
        daToast('Demo preferences saved locally.');
    });

    // Drawer
    document.getElementById('daDrawerClose')?.addEventListener('click', daCloseAlertDrawer);
    document.getElementById('daDrawerCloseBtn')?.addEventListener('click', daCloseAlertDrawer);
    document.querySelector('#daAlertDrawer .da-drawer__backdrop')?.addEventListener('click', daCloseAlertDrawer);
    document.getElementById('daDrawerMarkRead')?.addEventListener('click', function() {
        if (daAlertDrawerId) {
            const alert = daAlerts.find(a => a.id === daAlertDrawerId);
            if (alert) {
                alert.read = !alert.read;
                daRenderAlerts();
                daOpenAlertDrawer(daAlertDrawerId);
                daToast(alert.read ? 'Alert marked as read (demo).' : 'Alert marked as unread (demo).');
            }
        }
    });
    document.getElementById('daDrawerApp')?.addEventListener('click', function() {
        daOpenApp(this.getAttribute('data-app'));
        daCloseAlertDrawer();
    });
    document.getElementById('daDrawerViewApp')?.addEventListener('click', function() {
        if (daAlertDrawerId) {
            const alert = daAlerts.find(a => a.id === daAlertDrawerId);
            if (alert) { daOpenApp(alert.appId); daCloseAlertDrawer(); }
        }
    });
    document.getElementById('daDrawerViewReq')?.addEventListener('click', function() {
        daToast('Related compliance item is shown in demo records (Compliance Monitoring).');
    });
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') daCloseAlertDrawer(); });

    function daOpenApp(appId) {
        if (!appId) return;
        const nav = document.querySelector('.nav__item[data-page="applications"]');
        if (nav) nav.click();
        setTimeout(() => {
            if (typeof openAppDrawer === 'function') openAppDrawer(appId);
        }, 60);
    }

    // Initial
    daRenderTabs();
    daUpdateKpiState();
    daRenderAlerts();
    daRenderQueue();
    daRenderCalendar();
});
