$(function(){
  $.easing.def = 'easeOutBack';
  
  $('.name').click(function(){
    $('.name').animate({'opacity':0},300)
    setTimeout(animate(),300)
  })

  $('.down').click(function(){
    $('.info').animate({'opacity':0},300)
    setTimeout(animateabout(),300)
  })

  $('.about').click(function(){
    $('.info').animate({'opacity':0},300)
    setTimeout(animateabout(),300)
  })

  var delay = setTimeout(function(){
    $(".hidden").removeClass("hidden");
     }, 2000) 

  $( ".down" ).click(function() {
  $( "#navigation" ).fadeTo( 900, 0.8 );
  });

  animate()
  animateabout()
  function animateabout(){

      $('.info').each(function(i){
        time=200+(50*i)
        icon=Math.floor((Math.random()*16));
        $(this).css({
          'left':'-2000px',
        }).delay(time).animate({
          'opacity':'1',
          'top':'0',
          'left':'0',
        },700)
      })
    }
  function animate(){
  
  $('.name').each(function(i){
    time=200+(20*i)
    icon=Math.floor((Math.random()*16));
    $(this).css({
      'top':'-1000px',
    }).delay(time).animate({
      'opacity':'1',
      'top':'0',
      'left':'0',
    },700)
  })
  }
})
  