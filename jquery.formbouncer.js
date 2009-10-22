/**
 * Custom jQuery 1.3.2 plugin
 * formBouncer by Diego Salazar, Oct. 2009
 * diego at greyrobot dot com
 * 
 */

jQuery.fn.formBouncer = function(){
	var valid_email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	
	function password_input_exists(form) {
		return jQuery('input[type=password]', form).length > 0
	}
	
	function markInvalid(input) {
		if (!input.hasClass('invalid')) input.addClass('invalid');
	}
	
	return this.each(function(){
		var form = jQuery(this);
		
		form.submit(function(){
			var error = '';
			
			jQuery('input, select, textarea', form).each(function(){
				var input = jQuery(this);

				if (input.hasClass('required') && (input.val() == '' || input.val() == input.attr('title')) ) {
					error += '<p>' + input.attr('id').replace('_', ' ') + ' is required.</p>';
					markInvalid(input);
				} else input.removeClass('invalid');

				if (input.hasClass('email') && valid_email.test(input.val()) == false) {
					error += '<p>' + input.attr('id').replace('_', ' ') + ' is not a valid email.</p>';
					markInvalid(input);
				} else input.removeClass('invalid');

				if (input.hasClass('numeric') && isNaN(input.val())) {
					error += '<p>' + input.attr('id').replace('_', ' ') + ' must be numeric.</p>';
					markInvalid(input);
				} else input.removeClass('invalid');
				
				if (input.hasClass('confirm') && password_input_exists(form) && jQuery('input[type=password]', form)[0].value != input.val() ) {
					error += '<p>Passwords do not match.</p>';
					markInvalid(input);
				} else input.removeClass('invalid');
				
			});

			if (error != '') {
				form.data('valid', false);
				jQuery('.flash-error', form).remove();
				form.prepend('<div class=\'flash-error\'>' + error + '</div>');
				jQuery('.flash-error', form).hide().slideDown();
				return false;
			}
			
			form.data('valid', true);
			return true;
		});
	});
}