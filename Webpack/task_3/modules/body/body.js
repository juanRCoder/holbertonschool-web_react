import $ from 'jquery';
import _ from 'lodash';
import './body.css';


$(function() {
    $('body').append('<button>Click here to get started</button>');
    $('body').append("<p id='count'></p>");
    
    function updateCounter() {
        let count = 0;
        return function() {
            count += 1;
            $('#count').text(`${count} clicks on the button`);
        }
    }

    $('button').on('click', _.debounce( updateCounter(), 500));
});