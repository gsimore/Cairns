$(document).ready(function(){
  // Invert scrolling to the .scroll class
  $.jInvertScroll(['.scroll']);

    function pageScroll() {
        window.scrollBy(0,1);
        scrolldelay = setTimeout(pageScroll,8);
    }

    $(document).ready(function(){
      pageScroll();
    });

  // Ensure we are at to top of the page.
  $('html, body').animate({scrollTop: 0}, 20);
});
