$(function() {
  $(document).scroll(function() {
    let $nav = $('#mainNavBar');
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});