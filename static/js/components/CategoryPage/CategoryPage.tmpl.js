;(function(){var x=Function('return this')();if(!x.fest)x.fest={};x.fest['js/components/CategoryPage/CategoryPage.tmpl']=function (__fest_context){"use strict";var __fest_self=this,__fest_buf="",__fest_chunks=[],__fest_chunk,__fest_attrs=[],__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn,__fest_html="",__fest_blocks={},__fest_params,__fest_element,__fest_debug_file="",__fest_debug_line="",__fest_debug_block="",__fest_element_stack = [],__fest_short_tags = {"area": true, "base": true, "br": true, "col": true, "command": true, "embed": true, "hr": true, "img": true, "input": true, "keygen": true, "link": true, "meta": true, "param": true, "source": true, "wbr": true},__fest_jschars = /[\\'"\/\n\r\t\b\f<>]/g,__fest_jschars_test = /[\\'"\/\n\r\t\b\f<>]/,__fest_htmlchars = /[&<>"]/g,__fest_htmlchars_test = /[&<>"]/,__fest_jshash = {"\"": "\\\"", "\\": "\\\\", "/": "\\/", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\b": "\\b", "\f": "\\f", "'": "\\'", "<": "\\u003C", ">": "\\u003E"},__fest_htmlhash = {"&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;"},__fest_escapeJS = function __fest_escapeJS(value) {
		if (typeof value === 'string') {
			if (__fest_jschars_test.test(value)) {
				return value.replace(__fest_jschars, __fest_replaceJS);
			}
		}

		return value == null ? '' : value;
	},__fest_replaceJS = function __fest_replaceJS(chr) {
		return __fest_jshash[chr];
	},__fest_escapeHTML = function __fest_escapeHTML(value) {
		if (typeof value === 'string') {
			if (__fest_htmlchars_test.test(value)) {
				return value.replace(__fest_htmlchars, __fest_replaceHTML);
			}
		}

		return value == null ? '' : value;
	},__fest_replaceHTML = function __fest_replaceHTML(chr) {
		return __fest_htmlhash[chr];
	},__fest_extend = function __fest_extend(dest, src) {
		for (var key in src) {
			if (src.hasOwnProperty(key)) {
				dest[key] = src[key];
			}
		}
	},__fest_param = function __fest_param(fn) {
		fn.param = true;
		return fn;
	},i18n=__fest_self && typeof __fest_self.i18n === "function" ? __fest_self.i18n : function (str) {return str;},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}var data=__fest_context;__fest_buf+=("<section class=\"s-pageheader\"><div class=\"row current-cat\"><div class=\"column\"><h1 class=\"h2\"><span style=\"margin-right: 6px;\">");try{__fest_buf+=(__fest_escapeHTML(data.key))}catch(e){__fest_log_error(e.message + "4");}__fest_buf+=("</span>");try{__fest_buf+=(__fest_escapeHTML(data.value))}catch(e){__fest_log_error(e.message + "4");}__fest_buf+=("</h1><div class=\"row\"><div class=\"large-4 mob-12 column\"><select id=\"select-choose-category\" class=\"select-category\">");var cat,__fest_to0,__fest_iterator0;try{__fest_iterator0=data.categories || [];__fest_to0=__fest_iterator0.length;}catch(e){__fest_iterator0=[];__fest_to0=0;__fest_log_error(e.message);}for(cat=0;cat<__fest_to0;cat++){__fest_buf+=("<option>");try{__fest_buf+=(__fest_escapeHTML(data.categories[cat]))}catch(e){__fest_log_error(e.message + "10");}__fest_buf+=("</option>");}__fest_buf+=("</select></div></div></div></div></section><section class=\"s-bricks with-top-sep\"><div class=\"masonry\"><div class=\"bricks-wrapper h-group\"><div class=\"grid-sizer\"></div>");var i,__fest_to1,__fest_iterator1;try{__fest_iterator1=data.articles || [];__fest_to1=__fest_iterator1.length;}catch(e){__fest_iterator1=[];__fest_to1=0;__fest_log_error(e.message);}for(i=0;i<__fest_to1;i++){__fest_buf+=("<article class=\"brick entry format-standard animate-this\"><div class=\"entry__text\"><div class=\"entry__header\"><div class=\"entry__meta\">");var j,__fest_to2,__fest_iterator2;try{__fest_iterator2=data.articles[i].categories || [];__fest_to2=__fest_iterator2.length;}catch(e){__fest_iterator2=[];__fest_to2=0;__fest_log_error(e.message);}for(j=0;j<__fest_to2;j++){__fest_buf+=("<span class=\"entry__cat-links\"><a style=\"margin-right: 6px;\" href=\"#\">");try{__fest_buf+=(__fest_escapeHTML(data.articles[i].categories[j]))}catch(e){__fest_log_error(e.message + "39");}__fest_buf+=("</a></span>");}__fest_buf+=("</div><h1 class=\"entry__title\"><a href=\"#\">");try{__fest_buf+=(__fest_escapeHTML(data.articles[i].article_title))}catch(e){__fest_log_error(e.message + "44");}__fest_buf+=("</a></h1></div><div class=\"entry__excerpt\"><p>");try{__fest_buf+=(__fest_escapeHTML(data.articles[i].description))}catch(e){__fest_log_error(e.message + "48");}__fest_buf+=("</p></div></div></article>");}__fest_buf+=("</div></div><div class=\"row\"><div class=\"column large-12\"><nav class=\"pgn\"><ul><li><a class=\"pgn__prev\" href=\"#\"><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12.707 17.293L8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z\"></path></svg></a></li><li><a class=\"pgn__num\" href=\"#\">1</a></li><li><span class=\"pgn__num current\">2</span></li><li><a class=\"pgn__num\" href=\"#\">3</a></li><li><a class=\"pgn__num\" href=\"#\">4</a></li><li><a class=\"pgn__num\" href=\"#\">5</a></li><li><span class=\"pgn__num dots\">…</span></li><li><a class=\"pgn__num\" href=\"#\">8</a></li><li><a class=\"pgn__next\" href=\"#0\"><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z\"></path></svg></a></li></ul></nav></div></div></section>");__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}}})();