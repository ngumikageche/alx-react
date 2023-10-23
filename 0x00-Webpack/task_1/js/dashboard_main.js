import $ from "jquery";
import debounce from 'lodash/debounce';

$(document).ready(function() {
    // Create and append the specified elements to the body of the page
    $('body').append(
      $('<p>').text('Holberton Dashboard'),
      $('<p>').text('Dashboard data for the students'),
      $('<button>').text('Click here to get started').on('click', debounce(updateCounter, 1000)),
      $('<p id="count"></p>'),
      $('<p>').text('Copyright - Holberton School')
    );
  });
  let count = 0;
    
  function updateCounter() {
    count = count + 1;
    $('#count').text(`${count} click${count === 1 ? '' : 's'} on the button`);
  }