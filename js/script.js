$(document).ready(function () {
    $('.about_section').show();
});

$('.fixed_head .fixed_center_container .about').click(function () {
    $('.about_section').show();
    $('.experience_section').hide();
    $('.projects_section').hide();
    $('.achievements_section').hide();
});

$('.fixed_head .fixed_center_container .experience').click(function () {
    $('.about_section').hide();
    $('.experience_section').show();
    $('.projects_section').hide();
    $('.achievements_section').hide();
});

$('.fixed_head .fixed_center_container .projects').click(function () {
    $('.about_section').hide();
    $('.experience_section').hide();
    $('.projects_section').show();
    $('.achievements_section').hide();
}) ;

$('.fixed_head .fixed_center_container .achievements').click(function () {
    $('.about_section').hide();
    $('.experience_section').hide();
    $('.projects_section').hide();
    $('.achievements_section').show();
}) ;