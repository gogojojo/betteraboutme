$(function(){
  $.easing.def = 'easeOutBack';
  

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
  $( "#bar" ).fadeTo( 900, 1 );
  });
$("#bar").click(function(){
  $("#navigation").removeClass("hidden");
  $( "#bar" ).fadeTo( 900, 0 );
  $( "#navigation" ).fadeTo( 900, 1 );
  $("#bar").addClass("hidden");
})
$("#close").click(function(){
  $("#navigation").addClass("hidden");
  $("#bar").removeClass("hidden");
  $( "#navigation" ).fadeTo( 900, 0 );
  $( "#bar" ).fadeTo( 900, 1 );
})

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
  