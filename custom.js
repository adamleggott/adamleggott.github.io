jQuery(document).ready(function(){

  //All the shit to run at the start
  jQuery('body').on('click', 'div.day', function(){
    var dS = '.pub-by-day.' + jQuery(this).data('day');
    jQuery(this).toggleClass('active');
    jQuery(dS).slideToggle();
    jQuery(this).find('i').toggle();
  });

});