/* Author : Kazuhiro Ikeda */

$(function(){


	$('').matchHeight();

	//scroll	
	$( 'a[href^=#]' ).click(function() {
	   	var speed = 400; 
	   	var href= $(this).attr( "href" );
	   	var target = $(href == "#" || href == "" ? 'html' : href);
	   	var position = target.offset().top;
	$( 'body,html' ).animate({scrollTop:position}, speed, 'swing' );
    	return false;
	});

	//toggle	
	$( ".toggle" ).css( "cursor", "pointer" );
	$( ".toggle" ).on( "click", function() {
		var panelId = $(this).attr( "data-title" );
		var panel = "#" + panelId;
		$(this).toggleClass( "active" );//開いた時、ボタンにクラスを追加
		$(panel).fadeToggle( "fast" );//”slow”、”normal”、”fast”
	});

	//anchor click
	$('#drawer a').on('click', function(){
		$('.drawer_button').click();
	});

	//mail-link usage with class="mailtoui"
		window.addEventListener('load', function(){
		if(/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())){
		var script = $('<script>').attr({
		'type': 'text/javascript',
		'src': 'https://cdn.jsdelivr.net/npm/mailtoui@1.0.3/dist/mailtoui-min.js'
	});
		$('body')[0].appendChild(script[0]);
	}
	});
			
			
});// end