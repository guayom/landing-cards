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

function scrollToTop() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
};

//show rotator text in hero
function rotatorToHero(){
  var targetDiv = $( ".sliding-text" );
  var originalDiv = $( ".rotatorText" ).find('span');
  $(targetDiv).empty();
  $( originalDiv ).clone().appendTo(targetDiv);
  var newDiv = $( ".sliding-text > span" );
  $(newDiv).addClass("rotate");

  //Simple text rotator
  $(".rotate").textrotator({
    animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
    separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
    speed: 6000 // How many milliseconds until the next word show.
  });
}

$(document).ready(function() {
  rotatorToHero();

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
    var filter = $(this).data('filter');

    if(filter == 'all'){
      $('.fixed-text').html(newText);
      rotatorToHero()
    }else{
      $('.fixed-text').html(newText);
      $('.sliding-text').html(newDescription);
    }

    scrollToTop();
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
