$(document).ready(function(){
  $('.item').each(function(i){
    setTimeout(function(){
      $('.item').eq(i).addClass('is-showing');
    },150*(i+1));
  });
});
