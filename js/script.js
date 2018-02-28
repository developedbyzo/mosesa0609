$(window).scroll(() => {
  $('#sticky-nav').css('top', $(window).scrollTop())
})

$(document).ready(function () {
  $('.carousel').carousel()
})
