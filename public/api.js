// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o')
  
  $.getJSON('https://discordbots.org/api/bots/414568996017537044', function(data) {
    console.log(data.server_count);
    console.log(data.points);
    $("strong#votes").text(data.points);
    $("strong#servers").text(data.server_count);
  })

})
