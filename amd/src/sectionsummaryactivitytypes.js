"use strict";

/**
 * Add activity type list to section summaries.
 *
 * @module     theme_boost_union/sectionsummaryactivitytypes
 */
function init() {
    document.querySelectorAll('.section-summary-activities').forEach(function(summary) {
        const section = summary.closest('[data-region="section"], li.section');
        if (!section) {
            return;
        }
        const types = new Set();
        section.querySelectorAll('li.activity').forEach(function(act) {
            act.classList.forEach(function(c) {
                if (c.indexOf('modtype_') === 0) {
                    types.add(c.substring(8));
                }
            });
        });
        if (types.size) {
            const span = document.createElement('span');
            span.className = 'section-activity-types ms-1';
            span.textContent = ' (' + Array.from(types).join(', ') + ')';
            summary.appendChild(span);
        }
    });
}

export {init};
