$(function(){
  $.easing.def = 'easeOutBack';
  
  $('.about').click(function(){
    $('.info').animate({'opacity':0},300)
    setTimeout(animateabout(),300)
  })
  $('.werk').click(function(){
    $('.work').animate({'opacity':0},300)
    setTimeout(animatework(),300)
  })
  $('.skill').click(function(){
    $('.skills').animate({'opacity':0},300)
    setTimeout(animateskills(),300)
  })
  $('.contacts').click(function(){
    $('.contact').animate({'opacity':0},300)
    setTimeout(animatecontact(),300)
  })
  $('.front').click(function(){
    $('.name').animate({'opacity':0},300)
    setTimeout(animate(),300)
  })
  $('.front').click(function(){

    $( "#bar" ).addClass('hidden');
    $( "#navigation" ).fadeTo(400, 0);
  })

  var delay = setTimeout(function(){
    $(".hidden").removeClass("hidden");
     }, 2000) 

  $( ".down" ).click(function() {
    $( "#bar" ).removeClass('hidden');
    $( "#navigation" ).removeClass('hidden');
    $( "#bar" ).fadeTo( 900, 1 );
  });
$("#bar").click(function(){
  $("#navigation").removeClass("hidden");
  $( "#bar" ).fadeTo( 900, 0 );
  $( "#navigation" ).fadeTo( 900, .8 );
  $("#bar").addClass("hidden");
})
$("#close").click(function(){
  $("#navigation").addClass("hidden");
  $("#bar").removeClass("hidden");
  $( "#navigation" ).fadeTo( 900, 0 );
  $( "#bar" ).fadeTo( 900, .8);
})

  animate()
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
    function animatework(){

      $('.work').each(function(i){
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
    function animateskills(){

      $('.skills').each(function(i){
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
    function animatecontact(){

      $('.contact').each(function(i){
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
  