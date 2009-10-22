/**
 * Custom jQuery 1.3.2 Plugin
 * Hinty by Diego Salazar, oct. 2009
 * diego at greyrobot dot com
 */
jQuery.fn.hinty = function() {
	// applies a text hint to the text input field by using the input's title attribute
	return this.each(function(){
		var $this = jQuery(this);
		var title = this.title;
		
		$this.addClass('hint_text');
		$this.val(title);
		
		$this.focus(function(){
			if ($this.val() == title) {
				$this.removeClass('hint_text');
				$this.val('');
			}
		});
		
		$this.blur(function(){
			if ($this.val() == '') {
				$this.addClass('hint_text');
				$this.val(title);
			}
		});
	});
}