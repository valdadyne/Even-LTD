$(document).ready(function(){
  $("#gallery > div:gt(0)").hide();

  setInterval(function() {
    $('#gallery > div:first')
      .fadeOut(2000)
      .next()
      .fadeIn(2000)
      .end()
      .appendTo('#gallery');
  },  5000);

  });
