jQuery(document).ready(function(){

  //All the shit to run at the start
  jQuery('body').on('click', 'div.day', function(){
    var dS = '.pub-by-day.' + jQuery(this).data('day');
    jQuery(this).toggleClass('active');
    jQuery(dS).slideToggle();
    jQuery(this).find('i').toggle();
  });

  jQuery('body').on('click', '.footer .collapse', function(){
    jQuery('.pub-by-day').each(function(){
      jQuery(this).slideUp();
      jQuery('div.day i.icon-circle-up').hide();
      jQuery('div.day i.icon-circle-down').show();
    });
  });

  jQuery('body').on('click', '.footer .totop', function(){
    jQuery('html,body').animate({
      scrollTop: 0
    }, 700);
  });

});