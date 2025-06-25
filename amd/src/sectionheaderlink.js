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
 * Theme Boost Union - make course section headers clickable.
 *
 * @module     theme_boost_union/sectionheaderlink
 * @copyright  2025 ChatGPT
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

define(['jquery'], function($) {
    "use strict";

    return {
        init: function() {
            $(document).on('click', '.course-section-header', function(e) {
                if ($(e.target).closest('a, button').length) {
                    return;
                }
                var link = $(this).find('.sectionname a').get(0);
                if (link) {
                    e.preventDefault();
                    link.click();
                }
            });
        }
    };
});
