// PRAVAAH Document Verification Centre - Frontend only demo
// Uses the shared demo dataset (applicationsData) declared in applications.js.

(function () {
    'use strict';

    // Fixed reference date keeps demo verification statuses deterministic.
    const DV_TODAY = new Date('2026-10-30');

    function dvParseDate(str) {
        if (!str) return null;
        const d = new Date(str);
        return isNaN(d.getTime()) ? null : d;
    }

    function dvDaysFromToday(date) {
        return Math.round((date - DV_TODAY) / 86400000);
    }

    function dvDeriveStatus(doc) {
        if (doc.status === 'expired') return { label: 'Invalid', cls: 'bad' };
        if (doc.status === 'pending' || !doc.receivedDate) {
            return { label: 'Pending Verification', cls: 'pending' };
        }
        const exp = dvParseDate(doc.expiry);
        if (exp) {
            const days = dvDaysFromToday(exp);
            if (days < 0) return { label: 'Invalid', cls: 'bad' };
            if (days <= 30) return { label: 'Needs Review', cls: 'review' };
        }
        return { label: 'Verified', cls: 'ok' };
    }

    let dvRecords = [];
    let dvFiltered = [];
    let dvStatusFilter = 'all';
    let dvInstFilter = 'all';
    let dvSort = 'name';
    let dvQuery = '';

    function dvBuildRecords() {
        const apps = (typeof applicationsData !== 'undefined' && Array.isArray(applicationsData))
            ? applicationsData : [];
        const records = [];
        apps.forEach(app => {
            (app.documents || []).forEach(doc => {
                const st = dvDeriveStatus(doc);
                records.push({
                    name: doc.name,
                    institution: app.institution,
                    application: app.id,
                    received: doc.receivedDate || '—',
                    expiry: doc.expiry || '—',
                    expiryDate: dvParseDate(doc.expiry),
                    requirement: (app.checklist && app.checklist.find(c => c.label && doc.name && c.label.toLowerCase().includes('valid'))?.relatedRequirement) || '—',
                    status: st.label,
                    statusCls: st.cls
                });
            });
        });
        return records;
    }

    function dvEsc(v) {
        const d = document.createElement('div');
        d.textContent = v == null ? '' : String(v);
        return d.innerHTML;
    }

    function dvBadge(rec) {
        return `<span class="dv-badge dv-badge--${rec.statusCls}">${dvEsc(rec.status)}</span>`;
    }

    function dvApplyFilters() {
        const q = dvQuery.trim().toLowerCase();
        let list = dvRecords.filter(r => {
            if (dvStatusFilter !== 'all' && r.status !== dvStatusFilter) return false;
            if (dvInstFilter !== 'all' && r.institution !== dvInstFilter) return false;
            if (q) {
                const hay = (r.name + ' ' + r.institution + ' ' + r.application).toLowerCase();
                if (!hay.includes(q)) return false;
            }
            return true;
        });

        list.sort((a, b) => {
            if (dvSort === 'institution') return a.institution.localeCompare(b.institution);
            if (dvSort === 'status') return a.status.localeCompare(b.status);
            if (dvSort === 'expiry') {
                const av = a.expiryDate ? a.expiryDate.getTime() : Infinity;
                const bv = b.expiryDate ? b.expiryDate.getTime() : Infinity;
                return av - bv;
            }
            return a.name.localeCompare(b.name);
        });

        dvFiltered = list;
        dvRenderTable();
    }

    function dvRenderTable() {
        const tbody = document.getElementById('dvTableBody');
        const empty = document.getElementById('dvEmpty');
        const count = document.getElementById('dvCount');
        if (!tbody) return;

        tbody.innerHTML = dvFiltered.map((r, i) => `
            <tr>
                <td class="dv-cell-doc">
                    <span class="dv-doc-icon" aria-hidden="true">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    </span>
                    <span class="dv-doc-name">${dvEsc(r.name)}</span>
                </td>
                <td>${dvEsc(r.institution)}</td>
                <td class="dv-cell-id">${dvEsc(r.application)}</td>
                <td>${dvEsc(r.received)}</td>
                <td>${dvEsc(r.expiry)}</td>
                <td>${dvBadge(r)}</td>
                <td class="dv-col-action">
                    <button type="button" class="dv-analyze-btn" data-dv-analyze="${i}">Analyze</button>
                </td>
            </tr>`).join('');

        if (empty) empty.hidden = dvFiltered.length !== 0;
        if (count) count.textContent = dvFiltered.length + ' document' + (dvFiltered.length === 1 ? '' : 's');

        tbody.querySelectorAll('[data-dv-analyze]').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.getAttribute('data-dv-analyze'), 10);
                dvRenderAnalysis(dvFiltered[idx]);
            });
        });
    }

    function dvRenderAnalysis(rec) {
        const emptyEl = document.getElementById('dvAnalysisEmpty');
        const bodyEl = document.getElementById('dvAnalysisBody');
        if (!bodyEl || !rec) return;

        const missing = rec.status === 'Pending Verification'
            ? 'Document not yet received — verification cannot complete.'
            : rec.status === 'Invalid'
                ? 'Document is expired or invalid — resubmission required.'
                : 'None identified in this demo record.';

        const inconsistency = rec.status === 'Needs Review'
            ? 'Expiry date is within 30 days — reviewer confirmation recommended.'
            : 'No inconsistencies detected in this demo record.';

        const resultTone = rec.statusCls === 'ok' ? 'ok' : (rec.statusCls === 'bad' ? 'bad' : 'review');

        bodyEl.hidden = false;
        if (emptyEl) emptyEl.hidden = true;
        bodyEl.innerHTML = `
            <div class="dv-analysis-head">
                <div>
                    <div class="dv-analysis-name">${dvEsc(rec.name)}</div>
                    <div class="dv-analysis-sub">${dvEsc(rec.institution)} &middot; ${dvEsc(rec.application)}</div>
                </div>
                ${dvBadge(rec)}
            </div>

            <div class="dv-analysis-result dv-analysis-result--${resultTone}">
                <span class="dv-analysis-result__label">Illustrative verification result</span>
                <span class="dv-analysis-result__value">${dvEsc(rec.status)}</span>
                <span class="dv-analysis-result__note">Assistance for human review — not an official regulatory determination.</span>
            </div>

            <div class="dv-analysis-grid">
                <div class="dv-analysis-field"><span class="dv-analysis-field__k">Document name</span><span class="dv-analysis-field__v">${dvEsc(rec.name)}</span></div>
                <div class="dv-analysis-field"><span class="dv-analysis-field__k">Application ID</span><span class="dv-analysis-field__v">${dvEsc(rec.application)}</span></div>
                <div class="dv-analysis-field"><span class="dv-analysis-field__k">Received</span><span class="dv-analysis-field__v">${dvEsc(rec.received)}</span></div>
                <div class="dv-analysis-field"><span class="dv-analysis-field__k">Expiry</span><span class="dv-analysis-field__v">${dvEsc(rec.expiry)}</span></div>
                <div class="dv-analysis-field"><span class="dv-analysis-field__k">Linked requirement</span><span class="dv-analysis-field__v">${dvEsc(rec.requirement)}</span></div>
                <div class="dv-analysis-field"><span class="dv-analysis-field__k">Source</span><span class="dv-analysis-field__v">Demo record</span></div>
            </div>

            <div class="dv-analysis-block">
                <div class="dv-analysis-block__title">Missing information</div>
                <p>${dvEsc(missing)}</p>
            </div>
            <div class="dv-analysis-block">
                <div class="dv-analysis-block__title">Potential inconsistencies</div>
                <p>${dvEsc(inconsistency)}</p>
            </div>
            <p class="dv-note">Extracted fields are sample values, not real OCR output. No document content is processed in this demo.</p>
        `;
    }

    function dvUpdateKpis() {
        const counts = { all: dvRecords.length, Verified: 0, 'Pending Verification': 0, 'Needs Review': 0, Invalid: 0 };
        dvRecords.forEach(r => { if (counts[r.status] != null) counts[r.status]++; });

        const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
        set('dvKpiAll', counts.all);
        set('dvKpiVerified', counts.Verified);
        set('dvKpiPending', counts['Pending Verification']);
        set('dvKpiReview', counts['Needs Review']);
        set('dvKpiInvalid', counts.Invalid);
    }

    function dvBindControls() {
        const search = document.getElementById('dvSearch');
        const statusF = document.getElementById('dvStatusFilter');
        const instF = document.getElementById('dvInstFilter');
        const sortF = document.getElementById('dvSort');

        if (search) search.addEventListener('input', () => { dvQuery = search.value; dvApplyFilters(); });
        if (statusF) statusF.addEventListener('change', () => { dvStatusFilter = statusF.value; dvSyncKpiActive(); dvApplyFilters(); });
        if (instF) instF.addEventListener('change', () => { dvInstFilter = instF.value; dvApplyFilters(); });
        if (sortF) sortF.addEventListener('change', () => { dvSort = sortF.value; dvApplyFilters(); });

        document.querySelectorAll('[data-dv-kpi]').forEach(btn => {
            btn.addEventListener('click', () => {
                const key = btn.getAttribute('data-dv-kpi');
                dvStatusFilter = key === 'all' ? 'all' : (key === 'verified' ? 'Verified'
                    : key === 'pending' ? 'Pending Verification'
                        : key === 'review' ? 'Needs Review' : 'Invalid');
                if (statusF) statusF.value = dvStatusFilter;
                dvSyncKpiActive();
                dvApplyFilters();
            });
        });
    }

    function dvSyncKpiActive() {
        document.querySelectorAll('[data-dv-kpi]').forEach(btn => {
            const key = btn.getAttribute('data-dv-kpi');
            const match = (dvStatusFilter === 'all' && key === 'all')
                || (key === 'verified' && dvStatusFilter === 'Verified')
                || (key === 'pending' && dvStatusFilter === 'Pending Verification')
                || (key === 'review' && dvStatusFilter === 'Needs Review')
                || (key === 'invalid' && dvStatusFilter === 'Invalid');
            btn.classList.toggle('is-active', match);
            btn.setAttribute('aria-pressed', match ? 'true' : 'false');
        });
    }

    function dvBindUpload() {
        const drop = document.getElementById('dvDropzone');
        const input = document.getElementById('dvFileInput');
        const list = document.getElementById('dvUploadList');
        if (!drop || !input || !list) return;

        const addFiles = (files) => {
            Array.from(files).forEach(file => {
                const li = document.createElement('li');
                li.className = 'dv-upload-item';
                const sizeKb = Math.max(1, Math.round(file.size / 1024));
                li.innerHTML = `
                    <span class="dv-upload-item__name">${dvEsc(file.name)}</span>
                    <span class="dv-upload-item__meta">${sizeKb} KB · Pending Verification (demo)</span>
                    <button type="button" class="dv-upload-item__remove" aria-label="Remove ${dvEsc(file.name)}">Remove</button>`;
                li.querySelector('.dv-upload-item__remove').addEventListener('click', () => li.remove());
                list.appendChild(li);
            });
        };

        drop.addEventListener('click', () => input.click());
        drop.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.click(); }
        });
        input.addEventListener('change', () => { if (input.files && input.files.length) addFiles(input.files); input.value = ''; });

        ['dragenter', 'dragover'].forEach(evt => {
            drop.addEventListener(evt, (e) => { e.preventDefault(); drop.classList.add('is-dragover'); });
        });
        ['dragleave', 'drop'].forEach(evt => {
            drop.addEventListener(evt, (e) => { e.preventDefault(); drop.classList.remove('is-dragover'); });
        });
        drop.addEventListener('drop', (e) => {
            if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length) addFiles(e.dataTransfer.files);
        });
    }

    function dvInit() {
        if (!document.getElementById('page-document-verification')) return;
        dvRecords = dvBuildRecords();
        dvUpdateKpis();
        dvBindControls();
        dvBindUpload();

        const instF = document.getElementById('dvInstFilter');
        if (instF) {
            const seen = new Set();
            dvRecords.forEach(r => {
                if (r.institution && !seen.has(r.institution)) {
                    seen.add(r.institution);
                    const opt = document.createElement('option');
                    opt.value = r.institution;
                    opt.textContent = r.institution;
                    instF.appendChild(opt);
                }
            });
        }

        dvApplyFilters();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', dvInit);
    } else {
        dvInit();
    }
})();
