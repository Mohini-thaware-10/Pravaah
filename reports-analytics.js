// PRAVAAH Reports & Analytics - Frontend only, illustrative demo data

const RPT_TODAY = new Date(2026, 9, 23);
const RPT_MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const rptKpi = [
    { id: 'processed', label: 'Total Applications Processed', value: 1248, delta: '+5.2%', trend: 'up', icon: 'apps', note: 'Illustrative vs previous demo period' },
    { id: 'pending', label: 'Currently Pending', value: 186, delta: '-3.8%', trend: 'down', icon: 'clock', note: 'Illustrative vs previous demo period' },
    { id: 'avg', label: 'Average Processing Time', value: '18.4 Days', delta: '-1.7 days', trend: 'down', icon: 'time', note: 'Illustrative comparison' },
    { id: 'compliance', label: 'Compliance Reviews Pending', value: 72, delta: '+6.0%', trend: 'up', icon: 'shield', note: 'Illustrative vs previous demo period' },
    { id: 'overdue', label: 'Overdue Workflow Actions', value: 18, delta: '-12.0%', trend: 'down', icon: 'alert', note: 'Illustrative vs previous demo period' }
];

const rptTrend = [
    { period: 'Day', data: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], submitted: [42, 38, 46, 39, 51, 12, 18], processed: [35, 41, 38, 44, 47, 14, 16] } },
    { period: 'Week', data: { labels: ['Week 1','Week 2','Week 3','Week 4'], submitted: [198, 212, 206, 224], processed: [186, 198, 194, 206] } },
    { period: 'Month', data: { labels: ['Jun','Jul','Aug','Sep','Oct'], submitted: [782, 806, 824, 842, 876], processed: [734, 762, 784, 802, 832] } }
];

const rptStage = [
    { stage: 'Application Submitted', count: 126 },
    { stage: 'Initial Scrutiny', count: 324 },
    { stage: 'Document Review', count: 278 },
    { stage: 'Compliance Review', count: 186 },
    { stage: 'Awaiting Final Decision', count: 94 },
    { stage: 'Completed', count: 518 }
];

const rptPendency = [
    { stage: 'Initial Scrutiny', pending: 324 },
    { stage: 'Document Review', pending: 278 },
    { stage: 'Compliance Review', pending: 186 },
    { stage: 'Awaiting Final Decision', pending: 94 },
    { stage: 'Application Submitted', pending: 42 }
];

const rptTime = [
    { stage: 'Application Submitted', days: 2.4 },
    { stage: 'Initial Scrutiny', days: 6.8 },
    { stage: 'Document Review', days: 7.6 },
    { stage: 'Compliance Review', days: 9.4 },
    { stage: 'Awaiting Final Decision', days: 4.2 }
];

const rptAge = [
    { label: '0–7 days', count: 86 },
    { label: '8–15 days', count: 62 },
    { label: '16–30 days', count: 28 },
    { label: 'More than 30 days', count: 10 }
];

const rptCompliance = [
    { label: 'Marked Complete (Demo)', value: 371 },
    { label: 'Awaiting Review', value: 72 },
    { label: 'Requiring Attention', value: 24 },
    { label: 'Upcoming Deadlines', value: 19 },
    { label: 'Overdue Actions', value: 12 }
];

const rptDeadlineTrend = [
    { month: 'Jun', upcoming: 14, overdue: 9 },
    { month: 'Jul', upcoming: 16, overdue: 11 },
    { month: 'Aug', upcoming: 18, overdue: 12 },
    { month: 'Sep', upcoming: 19, overdue: 13 },
    { month: 'Oct', upcoming: 22, overdue: 12 }
];

const rptInstitutions = [
    { id: 'INST-001', name: 'Western Institute of Technology', total: 248, pending: 38, completed: 210, compliance: 6, oldest: '18 Oct 2026', status: 'Active (Demo)' },
    { id: 'INST-002', name: 'Deccan College of Engineering', total: 214, pending: 32, completed: 182, compliance: 4, oldest: '19 Oct 2026', status: 'Active (Demo)' },
    { id: 'INST-003', name: 'National Technical Institute', total: 198, pending: 28, completed: 170, compliance: 5, oldest: '20 Oct 2026', status: 'Active (Demo)' },
    { id: 'INST-004', name: 'Sahyadri Institute of Technology', total: 186, pending: 26, completed: 160, compliance: 7, oldest: '17 Oct 2026', status: 'Active (Demo)' },
    { id: 'INST-005', name: 'Central Institute of Engineering', total: 164, pending: 24, completed: 140, compliance: 4, oldest: '21 Oct 2026', status: 'Active (Demo)' },
    { id: 'INST-006', name: 'Eastern Polytechnic College', total: 142, pending: 18, completed: 124, compliance: 2, oldest: '22 Oct 2026', status: 'Active (Demo)' },
    { id: 'INST-007', name: 'Western Technical Campus', total: 128, pending: 16, completed: 112, compliance: 3, oldest: '23 Oct 2026', status: 'Active (Demo)' },
    { id: 'INST-008', name: 'Coastal Institute of Technology', total: 116, pending: 14, completed: 102, compliance: 2, oldest: '15 Oct 2026', status: 'Active (Demo)' }
];

const rptLibrary = [
    { id: 'LIB-001', name: 'Application Processing Summary', desc: 'Overview of submissions, processing and turnaround in demo data.', generated: '23 Oct 2026 09:15' },
    { id: 'LIB-002', name: 'Workflow Pendency Report', desc: 'Stage-wise pendency and bottleneck identification for sample records.', generated: '23 Oct 2026 09:18' },
    { id: 'LIB-003', name: 'Compliance Monitoring Summary', desc: 'Illustrative compliance activity and items requiring attention.', generated: '23 Oct 2026 09:22' },
    { id: 'LIB-004', name: 'Deadline & Overdue Actions Report', desc: 'Upcoming deadlines and overdue sample actions.', generated: '23 Oct 2026 09:26' },
    { id: 'LIB-005', name: 'Institution-wise Summary', desc: 'Fictional institution performance snapshot from mock data.', generated: '23 Oct 2026 09:30' },
    { id: 'LIB-006', name: 'Monthly Administrative Overview', desc: 'Aggregated monthly trend for demo reporting.', generated: '23 Oct 2026 09:34' }
];

let rptTrendPeriod = 'Day';
let rptInstSort = 'name-asc';
let rptInstPage = 1;
let rptInstPerPage = 5;
let rptInstSearch = '';
let rptDetailLibId = null;

function rptEsc(text) {
    const div = document.createElement('div');
    div.textContent = String(text);
    return div.innerHTML;
}

function rptFormatNum(n) {
    if (typeof n === 'number') return n.toLocaleString();
    return n;
}

function rptRenderKpi() {
    const grid = document.getElementById('rptKpiGrid');
    if (!grid) return;
    grid.innerHTML = rptKpi.map(k => {
        const icon = k.icon === 'apps' ? '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 4h10M3 8h7M3 12h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'
            : k.icon === 'clock' ? '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/><path d="M8 4.5v3.8l2.2 1.3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'
            : k.icon === 'time' ? '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/><path d="M8 5v3l1.8 1.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'
            : k.icon === 'shield' ? '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2.5L3 4v4.5c0 3 2.1 5.8 5 6.5 2.9-.7 5-3.5 5-6.5V4L8 2.5z" stroke="currentColor" stroke-width="1.5"/><path d="M6.5 8l1.2 1.2L10 6.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
            : '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/><path d="M8 5v3.5M8 10.8v.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
        const trendClass = k.trend === 'up' ? 'up' : k.trend === 'down' ? 'down' : 'neutral';
        const arrow = k.trend === 'up' ? '↑' : k.trend === 'down' ? '↓' : '—';
        return `
            <article class="rpt-kpi">
                <div class="rpt-kpi__head">
                    <span class="rpt-kpi__icon">${icon}</span>
                    <span class="rpt-kpi__demo">Illustrative</span>
                </div>
                <div class="rpt-kpi__value">${rptFormatNum(k.value)}</div>
                <div class="rpt-kpi__label">${k.label}</div>
                <div class="rpt-kpi__footer">
                    <span class="rpt-kpi__delta rpt-kpi__delta--${trendClass}">${arrow} ${k.delta}</span>
                    <span class="rpt-kpi__note">${k.note}</span>
                </div>
            </article>
        `;
    }).join('');
}

function rptRenderTrend() {
    const period = rptTrend.find(p => p.period === rptTrendPeriod);
    if (!period) return;
    const bars = document.getElementById('rptTrendBars');
    const legend = document.getElementById('rptTrendLegend');
    if (bars) {
        const max = Math.max(...period.data.submitted, ...period.data.processed);
        bars.innerHTML = period.data.labels.map((label, i) => {
            const s = period.data.submitted[i];
            const p = period.data.processed[i];
            return `
                <div class="rpt-trend-row">
                    <div class="rpt-trend-row__label">${label}</div>
                    <div class="rpt-trend-row__bars">
                        <div class="rpt-trend-bar"><span class="rpt-trend-bar__fill rpt-trend-bar__fill--submitted" style="width: ${(s/max)*100}%"></span><span class="rpt-trend-bar__count">${s}</span></div>
                        <div class="rpt-trend-bar"><span class="rpt-trend-bar__fill rpt-trend-bar__fill--processed" style="width: ${(p/max)*100}%"></span><span class="rpt-trend-bar__count">${p}</span></div>
                    </div>
                </div>
            `;
        }).join('');
    }
    if (legend) legend.innerHTML = `<span class="rpt-legend-item"><span class="rpt-swatch rpt-swatch--submitted"></span>Submitted</span><span class="rpt-legend-item"><span class="rpt-swatch rpt-swatch--processed"></span>Processed</span>`;
}

function rptRenderStage() {
    const list = document.getElementById('rptStageList');
    if (!list) return;
    const max = Math.max(...rptStage.map(s => s.count));
    list.innerHTML = rptStage.map(s => `
        <div class="rpt-bar-row">
            <div class="rpt-bar-row__label">${s.stage}</div>
            <div class="rpt-bar-row__track"><div class="rpt-bar-row__fill" style="width: ${(s.count/max)*100}%"></div></div>
            <div class="rpt-bar-row__count">${s.count}</div>
        </div>
    `).join('');
}

function rptRenderPendency() {
    const list = document.getElementById('rptPendencyList');
    if (!list) return;
    const max = Math.max(...rptPendency.map(s => s.pending));
    list.innerHTML = rptPendency.map(s => `
        <div class="rpt-bar-row">
            <div class="rpt-bar-row__label">${s.stage}</div>
            <div class="rpt-bar-row__track"><div class="rpt-bar-row__fill rpt-bar-row__fill--pending" style="width: ${(s.pending/max)*100}%"></div></div>
            <div class="rpt-bar-row__count">${s.pending}</div>
        </div>
    `).join('');
}

function rptRenderTime() {
    const list = document.getElementById('rptTimeList');
    if (!list) return;
    const max = Math.max(...rptTime.map(s => s.days));
    list.innerHTML = rptTime.map(s => `
        <div class="rpt-bar-row">
            <div class="rpt-bar-row__label">${s.stage}</div>
            <div class="rpt-bar-row__track"><div class="rpt-bar-row__fill rpt-bar-row__fill--time" style="width: ${(s.days/max)*100}%"></div></div>
            <div class="rpt-bar-row__count">${s.days} d</div>
        </div>
    `).join('');
}

function rptRenderAge() {
    const list = document.getElementById('rptAgeList');
    if (!list) return;
    const max = Math.max(...rptAge.map(s => s.count));
    list.innerHTML = rptAge.map(s => `
        <div class="rpt-bar-row">
            <div class="rpt-bar-row__label">${s.label}</div>
            <div class="rpt-bar-row__track"><div class="rpt-bar-row__fill rpt-bar-row__fill--age" style="width: ${(s.count/max)*100}%"></div></div>
            <div class="rpt-bar-row__count">${s.count}</div>
        </div>
    `).join('');
}

function rptRenderCompliance() {
    const list = document.getElementById('rptComplianceList');
    if (!list) return;
    const max = Math.max(...rptCompliance.map(s => s.value));
    list.innerHTML = rptCompliance.map(s => `
        <div class="rpt-bar-row">
            <div class="rpt-bar-row__label">${s.label}</div>
            <div class="rpt-bar-row__track"><div class="rpt-bar-row__fill" style="width: ${(s.value/max)*100}%"></div></div>
            <div class="rpt-bar-row__count">${s.value}</div>
        </div>
    `).join('');
}

function rptRenderDeadlineTrend() {
    const list = document.getElementById('rptDeadlineTrend');
    if (!list) return;
    const max = Math.max(...rptDeadlineTrend.flatMap(s => [s.upcoming, s.overdue]));
    list.innerHTML = rptDeadlineTrend.map(s => `
        <div class="rpt-bar-row">
            <div class="rpt-bar-row__label">${s.month}</div>
            <div class="rpt-trend-row__bars">
                <div class="rpt-trend-bar"><span class="rpt-trend-bar__fill rpt-trend-bar__fill--submitted" style="width: ${(s.upcoming/max)*100}%"></span><span class="rpt-trend-bar__count">${s.upcoming}</span></div>
                <div class="rpt-trend-bar"><span class="rpt-trend-bar__fill rpt-trend-bar__fill--overdue" style="width: ${(s.overdue/max)*100}%"></span><span class="rpt-trend-bar__count">${s.overdue}</span></div>
            </div>
        </div>
    `).join('');
    const leg = document.getElementById('rptDeadlineLegend');
    if (leg) leg.innerHTML = `<span class="rpt-legend-item"><span class="rpt-swatch rpt-swatch--submitted"></span>Upcoming</span><span class="rpt-legend-item"><span class="rpt-swatch rpt-swatch--overdue"></span>Overdue</span>`;
}

function rptGetInstitutions() {
    let data = rptInstitutions.slice();
    if (rptInstSearch) {
        const s = rptInstSearch.toLowerCase();
        data = data.filter(i => i.name.toLowerCase().includes(s));
    }
    data.sort((a, b) => {
        if (rptInstSort === 'name-desc') return b.name.localeCompare(a.name);
        if (rptInstSort === 'total-desc') return b.total - a.total;
        if (rptInstSort === 'pending-desc') return b.pending - a.pending;
        if (rptInstSort === 'completed-desc') return b.completed - a.completed;
        if (rptInstSort === 'compliance-desc') return b.compliance - a.compliance;
        if (rptInstSort === 'oldest-asc') return (parseAppDate ? parseAppDate(a.oldest) - parseAppDate(b.oldest) : a.oldest.localeCompare(b.oldest));
        return a.name.localeCompare(b.name);
    });
    return data;
}

function rptRenderInstitutions() {
    const data = rptGetInstitutions();
    const total = data.length;
    const pages = Math.max(1, Math.ceil(total / rptInstPerPage));
    if (rptInstPage > pages) rptInstPage = pages;
    const start = (rptInstPage - 1) * rptInstPerPage;
    const pageData = data.slice(start, start + rptInstPerPage);
    const tbody = document.getElementById('rptInstBody');
    if (!tbody) return;
    tbody.innerHTML = pageData.map(inst => `
        <tr data-inst="${inst.id}">
            <td><button class="rpt-inst-btn" data-inst="${inst.id}">${rptEsc(inst.name)}</button></td>
            <td>${inst.total}</td>
            <td>${inst.pending}</td>
            <td>${inst.completed}</td>
            <td>${inst.compliance}</td>
            <td>${inst.oldest}</td>
            <td><span class="rpt-badge rpt-badge--demo">${inst.status}</span></td>
        </tr>
    `).join('');
    const pageInfo = document.getElementById('rptInstPageInfo');
    if (pageInfo) pageInfo.textContent = `Page ${rptInstPage} of ${pages} (${total} institutions)`;
    const prev = document.getElementById('rptInstPrev');
    const next = document.getElementById('rptInstNext');
    if (prev) prev.disabled = rptInstPage <= 1;
    if (next) next.disabled = rptInstPage >= pages;
}

function rptRenderLibrary() {
    const grid = document.getElementById('rptLibraryGrid');
    if (!grid) return;
    grid.innerHTML = rptLibrary.map(lib => `
        <article class="rpt-lib-card">
            <div class="rpt-lib-card__head">
                <div class="rpt-lib-card__title">${rptEsc(lib.name)}</div>
                <span class="rpt-demo-tag">Illustrative</span>
            </div>
            <p class="rpt-lib-card__desc">${rptEsc(lib.desc)}</p>
            <div class="rpt-lib-card__meta">Last generated: <span class="rpt-illust">${lib.generated}</span></div>
            <div class="rpt-lib-card__actions">
                <button type="button" class="rpt-btn rpt-btn--secondary" data-lib-preview="${lib.id}">Preview Report</button>
                <button type="button" class="rpt-btn rpt-btn--ghost" data-lib-export="${lib.id}">Export CSV (Demo)</button>
            </div>
        </article>
    `).join('');
}

function rptOpenInstDrawer(id) {
    const inst = rptInstitutions.find(i => i.id === id);
    if (!inst) return;
    document.getElementById('rptInstDrawerTitle').textContent = inst.name;
    document.getElementById('rptInstDrawerId').textContent = inst.id;
    document.getElementById('rptInstDrawerTotal').textContent = inst.total;
    document.getElementById('rptInstDrawerPending').textContent = inst.pending;
    document.getElementById('rptInstDrawerCompleted').textContent = inst.completed;
    document.getElementById('rptInstDrawerCompliance').textContent = inst.compliance;
    document.getElementById('rptInstDrawerOldest').textContent = inst.oldest;
    document.getElementById('rptInstDrawerStatus').textContent = inst.status;
    const drawer = document.getElementById('rptInstDrawer');
    if (drawer) { drawer.classList.add('active'); drawer.setAttribute('aria-hidden', 'false'); }
}

function rptCloseInstDrawer() {
    const drawer = document.getElementById('rptInstDrawer');
    if (drawer) { drawer.classList.remove('active'); drawer.setAttribute('aria-hidden', 'true'); }
}

function rptOpenPreview(id) {
    const lib = rptLibrary.find(l => l.id === id);
    if (!lib) return;
    document.getElementById('rptModalTitle').textContent = lib.name;
    document.getElementById('rptModalGen').textContent = lib.generated;
    const range = document.getElementById('rptDateRange').value === 'custom' 
        ? (document.getElementById('rptDateStart').value || '-') + ' to ' + (document.getElementById('rptDateEnd').value || '-')
        : document.getElementById('rptDateRange').value.replace('Last ', 'Last ').replace('Days', ' Days');
    document.getElementById('rptModalRange').textContent = range;
    document.getElementById('rptModalFilters').textContent = 'Type: ' + (document.getElementById('rptAppType').value === 'all' ? 'All' : document.getElementById('rptAppType').value) + ' | Stage: ' + document.getElementById('rptStageFilter').value + ' | Status: ' + document.getElementById('rptStatusFilter').value;
    document.getElementById('rptModalTableBody').innerHTML = `
        <tr><td>Total Applications Processed</td><td>1,248</td><td>Illustrative</td></tr>
        <tr><td>Currently Pending</td><td>186</td><td>Illustrative</td></tr>
        <tr><td>Average Processing Time</td><td>18.4 Days</td><td>Illustrative</td></tr>
        <tr><td>Compliance Reviews Pending</td><td>72</td><td>Illustrative</td></tr>
        <tr><td>Overdue Workflow Actions</td><td>18</td><td>Illustrative</td></tr>
    `;
    const modal = document.getElementById('rptPreviewModal');
    if (modal) { modal.classList.add('active'); modal.setAttribute('aria-hidden', 'false'); }
    const dl = document.getElementById('rptModalDownload');
    if (dl) {
        dl.onclick = function() {
            const csv = 'Metric,Value,Note\nTotal Applications Processed,1248,Illustrative\nCurrently Pending,186,Illustrative\nAverage Processing Time,18.4 Days,Illustrative\nCompliance Reviews Pending,72,Illustrative\nOverdue Workflow Actions,18,Illustrative\n';
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = lib.name.replace(/[^a-z0-9]+/gi, '_') + '_demo.csv';
            a.click();
            URL.revokeObjectURL(url);
        };
    }
}

function rptClosePreview() {
    const modal = document.getElementById('rptPreviewModal');
    if (modal) { modal.classList.remove('active'); modal.setAttribute('aria-hidden', 'true'); }
}

function rptToast(msg) {
    const t = document.getElementById('rptToast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('active');
    setTimeout(() => t.classList.remove('active'), 2400);
}

document.addEventListener('DOMContentLoaded', function() {
    rptRenderKpi();
    rptRenderTrend();
    rptRenderStage();
    rptRenderPendency();
    rptRenderTime();
    rptRenderAge();
    rptRenderCompliance();
    rptRenderDeadlineTrend();
    rptRenderInstitutions();
    rptRenderLibrary();

    document.querySelectorAll('.rpt-trend-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.rpt-trend-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
            this.classList.add('active');
            this.setAttribute('aria-pressed', 'true');
            rptTrendPeriod = this.getAttribute('data-period');
            rptRenderTrend();
        });
    });

    document.getElementById('rptDateRange')?.addEventListener('change', function() {
        document.getElementById('rptCustomRange').hidden = this.value !== 'custom';
    });

    document.getElementById('rptResetFilters')?.addEventListener('click', function() {
        document.getElementById('rptDateRange').value = 'Last 30 Days';
        document.getElementById('rptCustomRange').hidden = true;
        document.getElementById('rptAppType').value = 'all';
        document.getElementById('rptStageFilter').value = 'all';
        document.getElementById('rptInstSearch').value = '';
        document.getElementById('rptStatusFilter').value = 'all';
        rptToast('Filters reset to defaults (demo).');
    });

    document.getElementById('rptGenerate')?.addEventListener('click', function() {
        const btn = this;
        btn.disabled = true;
        btn.textContent = 'Generating...';
        setTimeout(() => {
            btn.disabled = false;
            btn.textContent = 'Generate Report';
            rptToast('Report generated (illustrative demo).');
            rptRenderTrend();
            rptRenderStage();
            rptRenderPendency();
        }, 600);
    });

    document.getElementById('rptViewCompliance')?.addEventListener('click', function() {
        const nav = document.querySelector('.nav__item[data-page="compliance-monitoring"]');
        if (nav) nav.click();
    });
    document.getElementById('rptViewDeadline')?.addEventListener('click', function() {
        const nav = document.querySelector('.nav__item[data-page="deadline-alerts"]');
        if (nav) nav.click();
    });

    document.getElementById('rptInstSearch')?.addEventListener('input', function() { rptInstSearch = this.value; rptInstPage = 1; rptRenderInstitutions(); });
    document.getElementById('rptInstSort')?.addEventListener('change', function() { rptInstSort = this.value; rptInstPage = 1; rptRenderInstitutions(); });
    document.getElementById('rptInstPerPage')?.addEventListener('change', function() { rptInstPerPage = parseInt(this.value) || 5; rptInstPage = 1; rptRenderInstitutions(); });
    document.getElementById('rptInstPrev')?.addEventListener('click', function() { if (rptInstPage > 1) { rptInstPage--; rptRenderInstitutions(); } });
    document.getElementById('rptInstNext')?.addEventListener('click', function() { rptInstPage++; rptRenderInstitutions(); });

    document.getElementById('rptInstBody')?.addEventListener('click', function(e) {
        const btn = e.target.closest('.rpt-inst-btn');
        if (btn) rptOpenInstDrawer(btn.getAttribute('data-inst'));
    });
    document.getElementById('rptInstDrawerClose')?.addEventListener('click', rptCloseInstDrawer);
    document.getElementById('rptInstDrawerCloseBtn')?.addEventListener('click', rptCloseInstDrawer);
    document.querySelector('#rptInstDrawer .rpt-drawer__backdrop')?.addEventListener('click', rptCloseInstDrawer);

    document.getElementById('rptLibraryGrid')?.addEventListener('click', function(e) {
        const prev = e.target.closest('[data-lib-preview]');
        if (prev) { rptOpenPreview(prev.getAttribute('data-lib-preview')); return; }
        const exp = e.target.closest('[data-lib-export]');
        if (exp) {
            const csv = 'Report,Generated,Status\n' + rptLibrary.map(l => l.name + ',' + l.generated + ',Illustrative Demo').join('\n') + '\n';
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'PRAVAAH_Report_Library_demo.csv';
            a.click();
            URL.revokeObjectURL(url);
            rptToast('CSV exported (demo).');
        }
    });

    document.getElementById('rptModalClose')?.addEventListener('click', rptClosePreview);
    document.getElementById('rptModalCloseBtn')?.addEventListener('click', rptClosePreview);
    document.querySelector('#rptPreviewModal .rpt-modal__backdrop')?.addEventListener('click', rptClosePreview);
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') { rptCloseInstDrawer(); rptClosePreview(); } });
});
