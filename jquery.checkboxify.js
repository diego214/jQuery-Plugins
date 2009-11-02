/** 
 * Custom jQuery 1.3.2 Plugin
 * Diego Salazar Nov, 2009
 * diego at greyrobot dot com
 *
 * allows radio buttons to be unchecked while maintain radio group functionality
 */

jQuery.fn.checkboxify = function() {
	return this.each(function() {
		jQuery(this).data('checked', jQuery(this).is(':checked'));
		
		jQuery(this).click(function(){
			var radio = jQuery(this);
			
			if (radio.data('checked')) {
				radio.attr('checked', false).data('checked', false);
			} else {
				jQuery('input[name="' + radio.attr('name') + '"]', radio.parent()).attr('checked', false).data('checked', false);
				radio.attr('checked', true).data('checked', true);
			}
		});
	});
}