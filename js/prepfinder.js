// JavaScript Document

(function( $ ) {
	
	$.fn.findBe = function( listaControls ) {
		
		var input = this.html();
		
		var pattern = new RegExp(/(\b(about|above|according to|across|after|against|ahead of|along( with(out)?)?|among|apart from|around|as( (far|well) as| for| of| per| regards)?|aside from|at|because of|before|behind|below|beneath|beside(s)?|between|beyond|by( means of)?|close to|concerning|despite|down|due to|during|except( for|ing)?|(far )?from|for|in( accordance with|( addition)? to| (back|case|front|lieu|place|point|spite) of)?|inside( of)?|instead of|into|left of|(un)?like|near( to)?|next( to)?|of(f)?|on( (account|behalf|top) of| to)?|onto|out( from| of|side( of)?)?|over|owing to|past|prior to|pursuant to|regarding|regardless of|right of|round|since|subsequent to|thanks to|that of|through(out)?|till|to(ward)?|under(neath)?|until|up( to|on)?|with( (regard(s)?|respect(s)?) to|in|out)?)\b)/gi);		
		
		var result = input.replace(pattern, replacer);
		
		function replacer (str, p1, offset, s) {
			return "<strong class=\"bee\">" + p1/*.toUpperCase()*/ + "</strong>";
		}
			
		$("#destination").val(result).wysiwyg({ controls : listaControls });
		$(".loading").remove();
	}
		
})( jQuery );

$(document).ready(function(){
		
	/* Hide everything but the basic box. Thanks, Kevin Baugh! */
	var listaControls = {
		 bold: { visible : false },
		 italic: { visible : false },
		 strikeThrough: { visible : false },
		 underline: { visible : false },
		 justifyLeft: { visible : false },
		 justifyCenter: { visible : false },
		 justifyRight: { visible : false },
		 justifyFull: { visible : false },
		 indent: { visible : false },
		 outdent: { visible : false },
		 subscript: { visible : false },
		 superscript: { visible : false },
		 undo: { visible : false },
		 redo: { visible : false },
		 insertOrderedList: { visible : false },
		 insertUnorderedList: { visible : false },
		 insertHorizontalRule: { visible : false },
		 createLink: { visible : false },
		 insertImage: { visible : false },
		 h1: { visible : false },
		 h2: { visible : false },
		 h3: { visible : false },
		 paragraph: { visible : false },
		 cut: { visible : false },
		 copy: { visible : false },
		 paste: { visible : false },
		 increaseFontSize: { visible : false },
		 decreaseFontSize: { visible : false },
		 html: { visible : false },
		 removeFormat: { visible : false },
		 insertTable: { visible : false },
		 code: { visible : false }
    };
	
	/*** INITIALIZE ***/
	$("#source").wysiwyg({ controls : listaControls });
	$("#input, #result").width($("div.wysiwyg").width());
	
	
	/*** LISTENERS ***/	
	$(".submit").mousedown(function(){
		$(this).css("background-position", "0 -51px");
		$("<div class='loading' />").insertAfter("#result h2");
		$("#destination").wysiwyg("destroy");
	});
	$(".submit").mouseup(function(){
		$(this).css("background-position", "0 0");
	});
	$(".submit").click(function(e){			
		$("div.wysiwyg iframe").contents().find('body.wysiwyg').findBe( listaControls );				
		e.preventDefault();
	});
		
	$(".reset").mousedown(function(){
		$(this).css("background-position", "0 -23px");
	});
	$(".reset").mouseup(function(){
		$(this).css("background-position", "0 0");
	});
	$(".reset").click(function(e){
		$("#source").wysiwyg("clear");
		$("#destination").wysiwyg("clear");
		e.preventDefault();
	});
	
});