jQuery(document).ready(function($){
    $("#mediajourn_cb").change(function() {
        if(this.checked) {
            $(".mediajourn").each(function( index ) {
                $( this ).show();
            });
        } else {
            $(".mediajourn").each(function( index ) {
                $( this ).hide();
            });
        }
    });
    $("#sociohum_cb").change(function() {
        if(this.checked) {
            $(".sociohum").each(function( index ) {
                $( this ).show();
            });
        } else {
            $(".sociohum").each(function( index ) {
                $( this ).hide();
            });
        }
    });
    $("#dev_cb").change(function() {
        if(this.checked) {
            $(".dev").each(function( index ) {
                $( this ).show();
            });
        } else {
            $(".dev").each(function( index ) {
                $( this ).hide();
            });
        }
    });
    $("#datastat_cb").change(function() {
        if(this.checked) {
            $(".datastat").each(function( index ) {
                $( this ).show();
            });
        } else {
            $(".datastat").each(function( index ) {
                $( this ).hide();
            });
        }
    });
    $("#design_cb").change(function() {
        if(this.checked) {
            $(".design").each(function( index ) {
                $( this ).show();
            });
        } else {
            $(".design").each(function( index ) {
                $( this ).hide();
            });
        }
    });
    $("#leadership_cb").change(function() {
        if(this.checked) {
            $(".leadership").each(function( index ) {
                $( this ).show();
            });
        } else {
            $(".leadership").each(function( index ) {
                $( this ).hide();
            });
        }
    });
    $("#marketing_cb").change(function() {
        if(this.checked) {
            $(".marketing").each(function( index ) {
                $( this ).show();
            });
        } else {
            $(".marketing").each(function( index ) {
                $( this ).hide();
            });
        }
    });
    $("#citizen_cb").change(function() {
        if(this.checked) {
            $(".citizen").each(function( index ) {
                $( this ).show();
            });
        } else {
            $(".citizen").each(function( index ) {
                $( this ).hide();
            });
        }
    });


    $(".dash_click").click(function () {
        var value = $(this).data("value");
        console.log(value);
        $("#"+value).toggleClass("closed");
    });

  // add stuck class to nav
  var sticky = new Waypoint.Sticky({
    element: $('.main-nav')[0]
  })

  // run test on initial page load
  checkSize();
  // run test on resize of the window
  $(window).resize(checkSize);

  function checkSize(){

    // smoothscroll
    if ($(".menu").css("display") == "none" ){
      $('.main-nav a, .banner a').smoothScroll({
        offset: -20,
        preventDefault: false
      });
    }
    else {
      $('.main-nav a, .banner a').smoothScroll({
        offset: -90,
        preventDefault: false
      });
    }

  }

  //external links
  $('a[rel*=external]').click( function() {
    window.open(this.href);
    return false;
  });

});


