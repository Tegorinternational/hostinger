$('.register_form').hide();
 $('.login_button').click(function(e) {
   e.preventDefault();
   $(this).addClass('open_widget_btn');
   $('.register_button').removeClass('open_widget_btn');
   $('.login_form').show();
   $('.register_form').hide();
   // $('#email').focus();
 });
 $('.register_button').click(function(e) {
   e.preventDefault();
   $(this).addClass('open_widget_btn');
   $('.login_button').removeClass('open_widget_btn');
   $('.register_form').show();
   $('.login_form').hide();
  // $('.r_email').focus();
 });
