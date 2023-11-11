import $ from 'jquery';

$(function() {
    const paragraphs = 
    [
        "Holberton Dashboard",
        "Dashboard data for the students",
        "Copyright - Holberton School"
    ];

    for (const text of paragraphs) {
        $('body').append(`<p>${text}</p>`);
    }
});