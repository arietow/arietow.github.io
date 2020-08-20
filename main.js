$(document).ready(function() {
  $(".scout-performance .scout-performance-item img").mouseover(function() {
    $(this).closest(".scout-performance-item").find(".hover-desc p").toggle()
  }) 
  $(".scout-performance .scout-performance-item img").hover(function(){
     $(this).closest(".scout-performance-item").find(".hover-desc p").show()
  }, function(){
    $(this).closest(".scout-performance-item").find(".hover-desc p").hide()
  });
  
  $('.fade-me.two').hide()
  setInterval(function(){
    $('.fade-me.one').toggle()
    $('.fade-me.two').toggle()

  }, 5000);
  
  $(".bg-checks .bg-check-item").hover(function(){
     $(this).find("h1").animate({top:35}, 100)
     $(this).toggleClass("active")
     $(this).find("p, a").fadeToggle(50)

  }, function(){
     $(this).find("h1").animate({top:95}, 100)
     $(this).toggleClass("active")
     $(this).find("p, a").fadeToggle(50)
  });
  
  $('.nav-links li').on('click', function() {
    $(this).toggleClass('active')
    $(this).find('.sub-nav-links').slideToggle();
  })
})