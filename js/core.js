$(window).load(function()
{
	// ADD SPANS AROUND WORDS THAT NEED TO BE RESIZED TO FIT WIDTH
	initFillTextToWidth();
	
	// SET NEW FONT SIZE TO FILL WIDTH
	setFillTextToWidth();
});

$( window ).resize(function()
{
 	setFillTextToWidth();
});

// SETUP JQUERY FILL TEXT TO WIDTH
function initFillTextToWidth()
{
	$('.text-fill').each(function()
	{
		var el = $(this);
		el.wrapInner('<span class="text-fill-inner"></span>');
	});
}

// RESIZE TEXT (CLASS = TEXT-FILL) TO FILL AVAILABLE WIDTH.
function setFillTextToWidth()
{
	$('.text-fill').each(function()
	{
		var el = $(this);
		var sp = $(this).children('.text-fill-inner');

		console.log($(this).children('.text-fill-inner'));

		var scale = el.width() / sp.width();

		console.log(  el.width() + " / " + sp.width() + ": " + scale );

		var newsize = Math.floor(parseInt(sp.css('font-size')) * scale);

		sp.css('font-size', newsize);
		sp.css('line-height', '1em');

		console.log( newsize );
	});
}
