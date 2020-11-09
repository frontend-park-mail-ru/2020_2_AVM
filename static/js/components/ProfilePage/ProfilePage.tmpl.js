;(function(){var x=Function('return this')();if(!x.fest)x.fest={};x.fest['js/components/ProfilePage/ProfilePage.tmpl']=function (__fest_context){"use strict";var __fest_self=this,__fest_buf="",__fest_chunks=[],__fest_chunk,__fest_attrs=[],__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn,__fest_html="",__fest_blocks={},__fest_params,__fest_element,__fest_debug_file="",__fest_debug_line="",__fest_debug_block="",__fest_element_stack = [],__fest_short_tags = {"area": true, "base": true, "br": true, "col": true, "command": true, "embed": true, "hr": true, "img": true, "input": true, "keygen": true, "link": true, "meta": true, "param": true, "source": true, "wbr": true},__fest_jschars = /[\\'"\/\n\r\t\b\f<>]/g,__fest_jschars_test = /[\\'"\/\n\r\t\b\f<>]/,__fest_htmlchars = /[&<>"]/g,__fest_htmlchars_test = /[&<>"]/,__fest_jshash = {"\"": "\\\"", "\\": "\\\\", "/": "\\/", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\b": "\\b", "\f": "\\f", "'": "\\'", "<": "\\u003C", ">": "\\u003E"},__fest_htmlhash = {"&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;"},__fest_escapeJS = function __fest_escapeJS(value) {
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
	},i18n=__fest_self && typeof __fest_self.i18n === "function" ? __fest_self.i18n : function (str) {return str;},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}var data=__fest_context;__fest_buf+=("<section class=\"s-content s-styles\"><div class=\"row\"><div class=\"column large-12 intro\"><h1>");try{__fest_buf+=(__fest_escapeHTML(data.login))}catch(e){__fest_log_error(e.message + "5");}__fest_buf+=("</h1></div></div><div class=\"row\"><div class=\"column large-4 tab-12\"><h3 class=\"h-add-bottom\">Аватар</h3>");try{__fest_attrs[0]=__fest_escapeHTML(data.image)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<div style=\"background: url(" + __fest_attrs[0] + ") no-repeat center center;\n                    background-size: cover;\n                    height: 300px;\"></div></div><div class=\"column large-8 tab-12\"><h3>О себе</h3><p class=\"drop-cap\">email:");try{__fest_buf+=(__fest_escapeHTML(data.email))}catch(e){__fest_log_error(e.message + "18");}__fest_buf+=("</p><h3><span style=\"margin-right: 10px;\">Подписка</span><span>");try{__fest_buf+=(__fest_escapeHTML(data.ok))}catch(e){__fest_log_error(e.message + "21");}__fest_buf+=("</span></h3><form id=\"form-add-category\" name=\"cForm\" class=\"s-content__form\"><div class=\"form-field\"><select id=\"categoryTitle\" class=\"select-category\">");var cat,__fest_to0,__fest_iterator0;try{__fest_iterator0=data.categories || [];__fest_to0=__fest_iterator0.length;}catch(e){__fest_iterator0=[];__fest_to0=0;__fest_log_error(e.message);}for(cat=0;cat<__fest_to0;cat++){__fest_buf+=("<option>");try{__fest_buf+=(__fest_escapeHTML(data.categories[cat]))}catch(e){__fest_log_error(e.message + "26");}__fest_buf+=("</option>");}__fest_buf+=("</select></div><button type=\"submit\" class=\"submit btn btn--primary btn--medium h-full-width\">Подписаться</button></form></div></div><div class=\"row\"><div class=\"column large-12\"><h3>Статьи</h3>");try{__fest_if=data.isArticle}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"row\"><div class=\"column large-12\"><div class=\"alert-box alert-box--info \"><p>Пока нет статей</p></div></div></div>");}__fest_buf+=("<div class=\"row half-bottom\">");var i,__fest_to1,__fest_iterator1;try{__fest_iterator1=data.articles || [];__fest_to1=__fest_iterator1.length;}catch(e){__fest_iterator1=[];__fest_to1=0;__fest_log_error(e.message);}for(i=0;i<__fest_to1;i++){__fest_buf+=("<div class=\"column large-6 tab-12\"><h4>");try{__fest_buf+=(__fest_escapeHTML(data.articles[i].article_title))}catch(e){__fest_log_error(e.message + "51");}__fest_buf+=("</h4><p>");try{__fest_buf+=(__fest_escapeHTML(data.articles[i].description))}catch(e){__fest_log_error(e.message + "52");}__fest_buf+=("</p></div>");}__fest_buf+=("</div></div></div></section>");__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}}})();