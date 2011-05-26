/**
 * @license jQuery CSS 3 CustomSelect V.0.1
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * @author 	Daniel Marschner, March 2011
 * @url 	http://likebugs.com
 */
(function($){
    
	$.fn.customSelect = function(options) {
		var options = $.extend({
	        selectId : $(this).attr('id'),
	        color    : 'black',
	        onSelect : function() {} 
	    }, options);
	    
	    var replaceCS = function(selectId, color)
		{
			var input 		= $('#' + selectId);
			var select   	= '';
			var selectClass = input.attr('class');
			var css		 	= selectClass.indexOf('custom-select') != -1 ? selectClass : 'custom-select ' + selectClass;
			var options  	= input.children('option');
			
			select += '<div id="' + selectId + '" class="' + css + '">';
			select += '<div class="select ' + (color != 'black' && color != '' ? ' ' + color : '') + '">';
			select += '<span class="content">' + options.eq(0).text()  + '</span><span class="arrow-down"></span><span class="arrow-up"></span>';
			select += '</div>';		
			select += '<ul' + (color != 'black' && color != '' ? ' class="' + color + '"' : '') + '>';
			
			for(ix = 0; ix < options.length; ix++)
				select += '<li id="' + selectId + '-' + options.eq(ix).val() + '">' + options.eq(ix).text() + '</li>';
			
			select += '</ul>';
			select += '<input type="text" id="' + selectId + '-value" name="' + selectId + '-value" value="' + options.eq(0).val()  + '" />';
			select += '</div>';
			
			input.replaceWith(select);
		}
	    
	    if($(this).is('select'))
        {
			replaceCS(options.selectId, options.color);
		    
		    var timer  = 0;
		    var select = $('div#' + options.selectId + ' div.select');
			var list   = $('div#' + options.selectId + ' ul');
		    
		    select.live('click', function() {
				list.slideToggle('fast');
			});
			
			select.live('mouseout', function() {
				if(list.css('display') != 'none')
				{
					//clearTimeout(timer);
					timer = setTimeout(function (){ list.slideUp('fast'); }, 1000);
				}
			});
					
			list.live('mouseenter', function() {
				clearTimeout(timer);
			});
			
			list.live('mouseleave', function() {
				$(this).slideUp('fast');
			});
					
			$('div#' + options.selectId + ' ul li').live('click', function() {
				var listId = $(this).attr('id').split(options.selectId + '-');
				
				$('div#' + options.selectId + ' div.select span.content').text($(this).text());
				$('input#' + options.selectId + '-value').val(listId[1]);
				
				list.slideUp('fast', function() {
					options.onSelect(listId[1]);	
				});			
			});
		}
	}
    
})(jQuery);		