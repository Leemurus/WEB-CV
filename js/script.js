var SELECTED_BORDER_STYLE = "5px solid #781a2d";
var DEFAULT_BORDER_STYLE = "2px solid lightgray";

var DEFAULT_BACKGROUND_COLOR = "rgba(54, 25, 25, .1)"
var SELECTED_BACKGROUND_COLOR = "rgba(120, 26, 45, .3)"

function unmark_all() {
    $('.about_section').css('border', DEFAULT_BORDER_STYLE);
    $('.experience_section').css('border', DEFAULT_BORDER_STYLE);
    $('.projects_section').css('border', DEFAULT_BORDER_STYLE);
    $('.achievements_section').css('border', DEFAULT_BORDER_STYLE);

    $('.about_section').css('background-color', DEFAULT_BACKGROUND_COLOR);
    $('.experience_section').css('background-color', DEFAULT_BACKGROUND_COLOR);
    $('.projects_section').css('background-color', DEFAULT_BACKGROUND_COLOR);
    $('.achievements_section').css('background-color', DEFAULT_BACKGROUND_COLOR);
}

$('.fixed_head .fixed_center_container .about').click(function () {
    unmark_all();
    $('.about_section').css('border', SELECTED_BORDER_STYLE);
    $('.about_section').css('background-color', SELECTED_BACKGROUND_COLOR);
});

$('.fixed_head .fixed_center_container .experience').click(function () {
    unmark_all();
    $('.experience_section').css('border', SELECTED_BORDER_STYLE);
    $('.experience_section').css('background-color', SELECTED_BACKGROUND_COLOR);
});

$('.fixed_head .fixed_center_container .projects').click(function () {
    unmark_all();
    $('.projects_section').css('border', SELECTED_BORDER_STYLE);
    $('.projects_section').css('background-color', SELECTED_BACKGROUND_COLOR);
});

$('.fixed_head .fixed_center_container .achievements').click(function () {
    unmark_all();
    $('.achievements_section').css('border', SELECTED_BORDER_STYLE);
    $('.achievements_section').css('background-color', SELECTED_BACKGROUND_COLOR);
});
