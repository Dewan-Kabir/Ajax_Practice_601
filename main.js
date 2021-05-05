

var jqxhr = $.get( "http://zumatra.com/teach/colors.php", function() {
    alert( "success" );
  })
    .done(function() {
      alert( "second success" );
    })
    .fail(function() {
      alert( "error" );
    })
    .always(function() {
      alert( "finished" );
    });