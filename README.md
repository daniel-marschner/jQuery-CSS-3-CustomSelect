# jQuery CSS 3 CustomSelect #

This is a small and easy custom select jQuery plugin, which I have done with CSS 3 and without using any images. It's tested with jQuery 1.5.2

## Basics ##

The first step to use this jQuery Plugin is to create the HTML code for a normal select box like the following example demonstrate:

    <select class="custom-select" id="food">
		<option value="0">What do you want to eat?</option>
		<option value="Banana">Banana</option>
		<option value="Steak">Steak</option>
		<option value="Apple ;)">Apple ;)</option>
		<option value="Bread">Bread</option>
		<option value="Something else...">Something else...</option>
	</select>
	
After this define the javascript code to render the select box. Use the attribute `id` of your HTML select to focus the right element:

	// Without any options
	$('#food').customSelect();
	
	// Define a callback function for the select event
	$('#food').customSelect({
		onSelect : function(value) {
			alert('Select value: ' + value);
		}
	});
	
	// Change the color to gray
	$('#food').customSelect({
		color : 'gray'
	});
	
You can define your own color set in the css file. The only classes you have to modify are the following:

    /* Your Color Select Box */
    .custom-select .select.yourcolor {}
    .custom-select .select.yourcolor .arrow-up {}
    .custom-select .select.yourcolor .arrow-down {}
    .custom-select ul.yourcolor {}
    .custom-select ul.yourcolor li {}

You can see this jQuery Plugin in action on: http://jsfiddle.net/dmarschner/Rrv9Y/

***

Daniel Marschner, March 2011