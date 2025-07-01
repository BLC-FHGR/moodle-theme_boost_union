// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Theme Boost Union - JS code to enhance section activity summaries.
 *
 * @module     theme_boost_union/sectionsummaryactivities
 */

export const init = () => {
    document.querySelectorAll('.section-summary-activities').forEach(summary => {
        const section = summary.closest('.section');
        if (!section) {
            return;
        }

        const counts = {};
        section.querySelectorAll('.activity').forEach(activity => {
            const modclass = Array.from(activity.classList).find(c => c.startsWith('modtype_'));
            if (!modclass) {
                return;
            }
            const modname = modclass.substring('modtype_'.length);
            counts[modname] = (counts[modname] || 0) + 1;
        });

        const parts = [];
        for (const [modname, count] of Object.entries(counts)) {
            parts.push(`${count} ${modname}`);
        }
        if (parts.length) {
            summary.textContent = parts.join(', ');
        }
    });
};
