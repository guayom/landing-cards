$(window).resize(function() {
  var more = document.getElementById("js-navigation-more");
  if ($(more).length > 0) {
    var windowWidth = $(window).width();
    var moreLeftSideToPageLeftSide = $(more).offset().left;
    var moreLeftSideToPageRightSide = windowWidth - moreLeftSideToPageLeftSide;

    if (moreLeftSideToPageRightSide < 330) {
      $("#js-navigation-more .submenu .submenu").removeClass("fly-out-right");
      $("#js-navigation-more .submenu .submenu").addClass("fly-out-left");
    }

    if (moreLeftSideToPageRightSide > 330) {
      $("#js-navigation-more .submenu .submenu").removeClass("fly-out-left");
      $("#js-navigation-more .submenu .submenu").addClass("fly-out-right");
    }
  }
});
$(document).ready(function() {
  var menuToggle = $("#js-mobile-menu").unbind();
  $("#js-navigation-menu").removeClass("show");

  menuToggle.on("click", function(e) {
    e.preventDefault();
    $("#js-navigation-menu").slideToggle(function(){
      if($("#js-navigation-menu").is(":hidden")) {
        $("#js-navigation-menu").removeAttr("style");
      }
    });
  });

  //Change hero text
  $('.filter').click(function(){
    var newText = $(this).data('titulo');
    var newDescription = $(this).data('description');
    $('.fixed-text').html(newText);
    $('.sliding-text').html(newDescription);
  });


  //Botón de más información
  $.fn.toggleHTML = function(a, b) {
    return this.html(function(_, html) {
        return $.trim(html) === a ? b : a;
    });
  }
  $('.mas-info').click(function(){
    var targetDiv = $(this).data('target');
    $('.'+targetDiv).slideToggle();
    $(this).toggleHTML('Ocultar', 'Más información');
  });
});


//Sticky nav
var  mn = $(".navigation");
var header = $(".header");
    mns = "navigation-scrolled";
    hdr = $('.header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr / 2 ) {
    mn.addClass(mns);
    header.addClass(mns);
  } else {
    mn.removeClass(mns);
    header.removeClass(mns);
  }
});
