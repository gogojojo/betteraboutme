$(function(){
  $.easing.def = 'easeOutBack';
  
  $('.name').click(function(){
    $('.name').animate({'opacity':0},300)
    setTimeout(animate(),300)
  })

  animate()
  $('.down').click(function(){
    $('.info').each(function(i){
      time=200+(100*i)
      icon=Math.floor((Math.random()*16));
      $(this).css({
        'left':'-2000px',
      }).delay(time).animate({
        'opacity':'1',
        'top':'0',
        'left':'0',
      },700)
    })
  })
  var delay = setTimeout(function(){
    $(".hidden").removeClass("hidden");
     }, 7500) 

  $( ".down" ).click(function() {
  $( "#navigation" ).fadeTo( 900, 0.8 );
  });

  function animate(){
  
  $('.name').each(function(i){
    time=200+(100*i)
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
  