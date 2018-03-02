$(window).scroll(() => {
  $('#sticky-nav').css('top', $(window).scrollTop())
})

setInterval(function () {
  $('.carousel').carousel('next')
}, 2000)
