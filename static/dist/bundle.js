/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 193:
/***/ (() => {

;

(function () {
  var x = Function('return this')();
  if (!x.fest) x.fest = {};

  x.fest['js/components/AddPage/AddPage.tmpl'] = function (__fest_context) {
    "use strict";

    var __fest_self = this,
        __fest_buf = "",
        __fest_chunks = [],
        __fest_chunk,
        __fest_attrs = [],
        __fest_select,
        __fest_if,
        __fest_iterator,
        __fest_to,
        __fest_fn,
        __fest_html = "",
        __fest_blocks = {},
        __fest_params,
        __fest_element,
        __fest_debug_file = "",
        __fest_debug_line = "",
        __fest_debug_block = "",
        __fest_element_stack = [],
        __fest_short_tags = {
      "area": true,
      "base": true,
      "br": true,
      "col": true,
      "command": true,
      "embed": true,
      "hr": true,
      "img": true,
      "input": true,
      "keygen": true,
      "link": true,
      "meta": true,
      "param": true,
      "source": true,
      "wbr": true
    },
        __fest_jschars = /[\\'"\/\n\r\t\b\f<>]/g,
        __fest_jschars_test = /[\\'"\/\n\r\t\b\f<>]/,
        __fest_htmlchars = /[&<>"]/g,
        __fest_htmlchars_test = /[&<>"]/,
        __fest_jshash = {
      "\"": "\\\"",
      "\\": "\\\\",
      "/": "\\/",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\b": "\\b",
      "\f": "\\f",
      "'": "\\'",
      "<": "\\u003C",
      ">": "\\u003E"
    },
        __fest_htmlhash = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;"
    },
        __fest_escapeJS = function __fest_escapeJS(value) {
      if (typeof value === 'string') {
        if (__fest_jschars_test.test(value)) {
          return value.replace(__fest_jschars, __fest_replaceJS);
        }
      }

      return value == null ? '' : value;
    },
        __fest_replaceJS = function __fest_replaceJS(chr) {
      return __fest_jshash[chr];
    },
        __fest_escapeHTML = function __fest_escapeHTML(value) {
      if (typeof value === 'string') {
        if (__fest_htmlchars_test.test(value)) {
          return value.replace(__fest_htmlchars, __fest_replaceHTML);
        }
      }

      return value == null ? '' : value;
    },
        __fest_replaceHTML = function __fest_replaceHTML(chr) {
      return __fest_htmlhash[chr];
    },
        __fest_extend = function __fest_extend(dest, src) {
      for (var key in src) {
        if (src.hasOwnProperty(key)) {
          dest[key] = src[key];
        }
      }
    },
        __fest_param = function __fest_param(fn) {
      fn.param = true;
      return fn;
    },
        i18n = __fest_self && typeof __fest_self.i18n === "function" ? __fest_self.i18n : function (str) {
      return str;
    },
        ___fest_log_error;

    if (typeof __fest_error === "undefined") {
      ___fest_log_error = typeof console !== "undefined" && console.error ? function () {
        return Function.prototype.apply.call(console.error, console, arguments);
      } : function () {};
    } else {
      ___fest_log_error = __fest_error;
    }

    ;

    function __fest_log_error(msg) {
      ___fest_log_error(msg + "\nin block \"" + __fest_debug_block + "\" at line: " + __fest_debug_line + "\nfile: " + __fest_debug_file);
    }

    function __fest_call(fn, params, cp) {
      if (cp) for (var i in params) {
        if (typeof params[i] == "function" && params[i].param) params[i] = params[i]();
      }
      return fn.call(__fest_self, params);
    }

    var data = __fest_context;
    __fest_buf += "<section class=\"s-content site-page\"><div class=\"row\"><div class=\"column large-12\"><div class=\"s-content__primary\">";

    try {
      __fest_if = data.success;
    } catch (e) {
      __fest_if = false;

      __fest_log_error(e.message);
    }

    if (__fest_if) {
      __fest_buf += "<div class=\"row\"><div class=\"column large-12\"><div class=\"alert-box alert-box--error\"><p>Не удалось опубликовать</p></div></div></div>";
    }

    __fest_buf += "<h1 class=\"s-content__title\">Добавьте новость</h1><form id=\"form-add-article\" name=\"cForm\" class=\"s-content__form\"><div class=\"form-field\"><input name=\"postTitle\" type=\"text\" id=\"articleTitle\" class=\"h-full-width\" placeholder=\"Заголовок поста\" value=\"\" required=\"required\"/></div><div class=\"form-field\"><input name=\"postDesc\" type=\"text\" id=\"articleDesc\" class=\"h-full-width\" placeholder=\"Описание\" value=\"\"/></div><div class=\"row\"><div class=\"large-4 mob-12 column\"><select name=\"postCategory\" class=\"select-category\" id=\"articleCategory\" required=\"required\">";

    var cat, __fest_to0, __fest_iterator0;

    try {
      __fest_iterator0 = data.categories || [];
      __fest_to0 = __fest_iterator0.length;
    } catch (e) {
      __fest_iterator0 = [];
      __fest_to0 = 0;

      __fest_log_error(e.message);
    }

    for (cat = 0; cat < __fest_to0; cat++) {
      __fest_buf += "<option>";

      try {
        __fest_buf += __fest_escapeHTML(data.categories[cat]);
      } catch (e) {
        __fest_log_error(e.message + "33");
      }

      __fest_buf += "</option>";
    }

    __fest_buf += "</select></div><div class=\"large-8 mob-12 column\"><input name=\"postTags\" type=\"text\" id=\"articleTags\" class=\"h-full-width\" placeholder=\"Теги\" value=\"\"/></div></div><div class=\"form-field\"><textarea name=\"postBody\" type=\"text\" id=\"articleText\" class=\"h-full-width\" placeholder=\"О чём хотите рассказать?\" value=\"\" required=\"required\"></textarea></div><button type=\"submit\" class=\"submit btn btn--primary btn--medium h-full-width\">Опубликовать</button></form></div></div></div></section>";
    __fest_to = __fest_chunks.length;

    if (__fest_to) {
      __fest_iterator = 0;

      for (; __fest_iterator < __fest_to; __fest_iterator++) {
        __fest_chunk = __fest_chunks[__fest_iterator];

        if (typeof __fest_chunk === "string") {
          __fest_html += __fest_chunk;
        } else {
          __fest_fn = __fest_blocks[__fest_chunk.name];
          if (__fest_fn) __fest_html += __fest_call(__fest_fn, __fest_chunk.params, __fest_chunk.cp);
        }
      }

      return __fest_html + __fest_buf;
    } else {
      return __fest_buf;
    }
  };
})();

/***/ }),

/***/ 394:
/***/ (() => {

;

(function () {
  var x = Function('return this')();
  if (!x.fest) x.fest = {};

  x.fest['js/components/CategoryPage/CategoryPage.tmpl'] = function (__fest_context) {
    "use strict";

    var __fest_self = this,
        __fest_buf = "",
        __fest_chunks = [],
        __fest_chunk,
        __fest_attrs = [],
        __fest_select,
        __fest_if,
        __fest_iterator,
        __fest_to,
        __fest_fn,
        __fest_html = "",
        __fest_blocks = {},
        __fest_params,
        __fest_element,
        __fest_debug_file = "",
        __fest_debug_line = "",
        __fest_debug_block = "",
        __fest_element_stack = [],
        __fest_short_tags = {
      "area": true,
      "base": true,
      "br": true,
      "col": true,
      "command": true,
      "embed": true,
      "hr": true,
      "img": true,
      "input": true,
      "keygen": true,
      "link": true,
      "meta": true,
      "param": true,
      "source": true,
      "wbr": true
    },
        __fest_jschars = /[\\'"\/\n\r\t\b\f<>]/g,
        __fest_jschars_test = /[\\'"\/\n\r\t\b\f<>]/,
        __fest_htmlchars = /[&<>"]/g,
        __fest_htmlchars_test = /[&<>"]/,
        __fest_jshash = {
      "\"": "\\\"",
      "\\": "\\\\",
      "/": "\\/",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\b": "\\b",
      "\f": "\\f",
      "'": "\\'",
      "<": "\\u003C",
      ">": "\\u003E"
    },
        __fest_htmlhash = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;"
    },
        __fest_escapeJS = function __fest_escapeJS(value) {
      if (typeof value === 'string') {
        if (__fest_jschars_test.test(value)) {
          return value.replace(__fest_jschars, __fest_replaceJS);
        }
      }

      return value == null ? '' : value;
    },
        __fest_replaceJS = function __fest_replaceJS(chr) {
      return __fest_jshash[chr];
    },
        __fest_escapeHTML = function __fest_escapeHTML(value) {
      if (typeof value === 'string') {
        if (__fest_htmlchars_test.test(value)) {
          return value.replace(__fest_htmlchars, __fest_replaceHTML);
        }
      }

      return value == null ? '' : value;
    },
        __fest_replaceHTML = function __fest_replaceHTML(chr) {
      return __fest_htmlhash[chr];
    },
        __fest_extend = function __fest_extend(dest, src) {
      for (var key in src) {
        if (src.hasOwnProperty(key)) {
          dest[key] = src[key];
        }
      }
    },
        __fest_param = function __fest_param(fn) {
      fn.param = true;
      return fn;
    },
        i18n = __fest_self && typeof __fest_self.i18n === "function" ? __fest_self.i18n : function (str) {
      return str;
    },
        ___fest_log_error;

    if (typeof __fest_error === "undefined") {
      ___fest_log_error = typeof console !== "undefined" && console.error ? function () {
        return Function.prototype.apply.call(console.error, console, arguments);
      } : function () {};
    } else {
      ___fest_log_error = __fest_error;
    }

    ;

    function __fest_log_error(msg) {
      ___fest_log_error(msg + "\nin block \"" + __fest_debug_block + "\" at line: " + __fest_debug_line + "\nfile: " + __fest_debug_file);
    }

    function __fest_call(fn, params, cp) {
      if (cp) for (var i in params) {
        if (typeof params[i] == "function" && params[i].param) params[i] = params[i]();
      }
      return fn.call(__fest_self, params);
    }

    var data = __fest_context;
    __fest_buf += "<section class=\"s-pageheader\"><div class=\"row current-cat\"><div class=\"column\"><h1 class=\"h2\"><span style=\"margin-right: 6px;\">";

    try {
      __fest_buf += __fest_escapeHTML(data.key);
    } catch (e) {
      __fest_log_error(e.message + "4");
    }

    __fest_buf += "</span>";

    try {
      __fest_buf += __fest_escapeHTML(data.value);
    } catch (e) {
      __fest_log_error(e.message + "4");
    }

    __fest_buf += "</h1><div class=\"row\"><div class=\"large-4 mob-12 column\"><select id=\"select-choose-category\" class=\"select-category\">";

    var cat, __fest_to0, __fest_iterator0;

    try {
      __fest_iterator0 = data.categories || [];
      __fest_to0 = __fest_iterator0.length;
    } catch (e) {
      __fest_iterator0 = [];
      __fest_to0 = 0;

      __fest_log_error(e.message);
    }

    for (cat = 0; cat < __fest_to0; cat++) {
      __fest_buf += "<option>";

      try {
        __fest_buf += __fest_escapeHTML(data.categories[cat]);
      } catch (e) {
        __fest_log_error(e.message + "10");
      }

      __fest_buf += "</option>";
    }

    __fest_buf += "</select></div></div></div></div></section><section class=\"s-bricks with-top-sep\"><div class=\"masonry\"><div class=\"bricks-wrapper h-group\"><div class=\"grid-sizer\"></div>";

    var i, __fest_to1, __fest_iterator1;

    try {
      __fest_iterator1 = data.articles || [];
      __fest_to1 = __fest_iterator1.length;
    } catch (e) {
      __fest_iterator1 = [];
      __fest_to1 = 0;

      __fest_log_error(e.message);
    }

    for (i = 0; i < __fest_to1; i++) {
      __fest_buf += "<article class=\"brick entry format-standard animate-this\"><div class=\"entry__text\"><div class=\"entry__header\"><div class=\"entry__meta\">";

      var j, __fest_to2, __fest_iterator2;

      try {
        __fest_iterator2 = data.articles[i].categories || [];
        __fest_to2 = __fest_iterator2.length;
      } catch (e) {
        __fest_iterator2 = [];
        __fest_to2 = 0;

        __fest_log_error(e.message);
      }

      for (j = 0; j < __fest_to2; j++) {
        __fest_buf += "<span class=\"entry__cat-links\"><a style=\"margin-right: 6px;\" href=\"#\">";

        try {
          __fest_buf += __fest_escapeHTML(data.articles[i].categories[j]);
        } catch (e) {
          __fest_log_error(e.message + "39");
        }

        __fest_buf += "</a></span>";
      }

      __fest_buf += "</div><h1 class=\"entry__title\"><a href=\"#\">";

      try {
        __fest_buf += __fest_escapeHTML(data.articles[i].article_title);
      } catch (e) {
        __fest_log_error(e.message + "44");
      }

      __fest_buf += "</a></h1></div><div class=\"entry__excerpt\"><p>";

      try {
        __fest_buf += __fest_escapeHTML(data.articles[i].description);
      } catch (e) {
        __fest_log_error(e.message + "48");
      }

      __fest_buf += "</p></div></div></article>";
    }

    __fest_buf += "</div></div><div class=\"row\"><div class=\"column large-12\"><nav class=\"pgn\"><ul><li><a class=\"pgn__prev\" href=\"#\"><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12.707 17.293L8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z\"></path></svg></a></li><li><a class=\"pgn__num\" href=\"#\">1</a></li><li><span class=\"pgn__num current\">2</span></li><li><a class=\"pgn__num\" href=\"#\">3</a></li><li><a class=\"pgn__num\" href=\"#\">4</a></li><li><a class=\"pgn__num\" href=\"#\">5</a></li><li><span class=\"pgn__num dots\">…</span></li><li><a class=\"pgn__num\" href=\"#\">8</a></li><li><a class=\"pgn__next\" href=\"#0\"><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z\"></path></svg></a></li></ul></nav></div></div></section>";
    __fest_to = __fest_chunks.length;

    if (__fest_to) {
      __fest_iterator = 0;

      for (; __fest_iterator < __fest_to; __fest_iterator++) {
        __fest_chunk = __fest_chunks[__fest_iterator];

        if (typeof __fest_chunk === "string") {
          __fest_html += __fest_chunk;
        } else {
          __fest_fn = __fest_blocks[__fest_chunk.name];
          if (__fest_fn) __fest_html += __fest_call(__fest_fn, __fest_chunk.params, __fest_chunk.cp);
        }
      }

      return __fest_html + __fest_buf;
    } else {
      return __fest_buf;
    }
  };
})();

/***/ }),

/***/ 142:
/***/ (() => {

;

(function () {
  var x = Function('return this')();
  if (!x.fest) x.fest = {};

  x.fest['js/components/LoginPage/LoginPage.tmpl'] = function (__fest_context) {
    "use strict";

    var __fest_self = this,
        __fest_buf = "",
        __fest_chunks = [],
        __fest_chunk,
        __fest_attrs = [],
        __fest_select,
        __fest_if,
        __fest_iterator,
        __fest_to,
        __fest_fn,
        __fest_html = "",
        __fest_blocks = {},
        __fest_params,
        __fest_element,
        __fest_debug_file = "",
        __fest_debug_line = "",
        __fest_debug_block = "",
        __fest_element_stack = [],
        __fest_short_tags = {
      "area": true,
      "base": true,
      "br": true,
      "col": true,
      "command": true,
      "embed": true,
      "hr": true,
      "img": true,
      "input": true,
      "keygen": true,
      "link": true,
      "meta": true,
      "param": true,
      "source": true,
      "wbr": true
    },
        __fest_jschars = /[\\'"\/\n\r\t\b\f<>]/g,
        __fest_jschars_test = /[\\'"\/\n\r\t\b\f<>]/,
        __fest_htmlchars = /[&<>"]/g,
        __fest_htmlchars_test = /[&<>"]/,
        __fest_jshash = {
      "\"": "\\\"",
      "\\": "\\\\",
      "/": "\\/",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\b": "\\b",
      "\f": "\\f",
      "'": "\\'",
      "<": "\\u003C",
      ">": "\\u003E"
    },
        __fest_htmlhash = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;"
    },
        __fest_escapeJS = function __fest_escapeJS(value) {
      if (typeof value === 'string') {
        if (__fest_jschars_test.test(value)) {
          return value.replace(__fest_jschars, __fest_replaceJS);
        }
      }

      return value == null ? '' : value;
    },
        __fest_replaceJS = function __fest_replaceJS(chr) {
      return __fest_jshash[chr];
    },
        __fest_escapeHTML = function __fest_escapeHTML(value) {
      if (typeof value === 'string') {
        if (__fest_htmlchars_test.test(value)) {
          return value.replace(__fest_htmlchars, __fest_replaceHTML);
        }
      }

      return value == null ? '' : value;
    },
        __fest_replaceHTML = function __fest_replaceHTML(chr) {
      return __fest_htmlhash[chr];
    },
        __fest_extend = function __fest_extend(dest, src) {
      for (var key in src) {
        if (src.hasOwnProperty(key)) {
          dest[key] = src[key];
        }
      }
    },
        __fest_param = function __fest_param(fn) {
      fn.param = true;
      return fn;
    },
        i18n = __fest_self && typeof __fest_self.i18n === "function" ? __fest_self.i18n : function (str) {
      return str;
    },
        ___fest_log_error;

    if (typeof __fest_error === "undefined") {
      ___fest_log_error = typeof console !== "undefined" && console.error ? function () {
        return Function.prototype.apply.call(console.error, console, arguments);
      } : function () {};
    } else {
      ___fest_log_error = __fest_error;
    }

    ;

    function __fest_log_error(msg) {
      ___fest_log_error(msg + "\nin block \"" + __fest_debug_block + "\" at line: " + __fest_debug_line + "\nfile: " + __fest_debug_file);
    }

    function __fest_call(fn, params, cp) {
      if (cp) for (var i in params) {
        if (typeof params[i] == "function" && params[i].param) params[i] = params[i]();
      }
      return fn.call(__fest_self, params);
    }

    var data = __fest_context;
    __fest_buf += "<section class=\"s-content s-styles\"><section class=\"s-content s-content--single\">";

    try {
      __fest_if = data.login;
    } catch (e) {
      __fest_if = false;

      __fest_log_error(e.message);
    }

    if (__fest_if) {
      __fest_buf += "<div class=\"row\"><div class=\"column large-12\"><div class=\"alert-box alert-box--error\"><p>Неверно введён логин или пароль.</p></div></div></div>";
    }

    __fest_buf += "<div class=\"row\"><div class=\"column large-12\"><div class=\"entry__text\"><div class=\"column\"><h2 class=\"s-content__title s-content__title--post\">Вход</h2><form id=\"form-login\"><div><label for=\"sampleInput\">Ваш логин</label><input class=\"h-full-width\" type=\"text\" placeholder=\"test\" id=\"sampleInput\"/></div><div><label for=\"password\">Пароль</label><input class=\"h-full-width\" type=\"password\" placeholder=\"********\" id=\"password\"/></div><input class=\"btn--primary h-full-width\" type=\"submit\" value=\"Войти\"/></form><div><span style=\"margin-right: 10px;\">Ещё нет аккаунта?</span><code><a href=\"\/signup\">Зарегистрируйтесь</a></code></div></div></div></div></div></section></section>";
    __fest_to = __fest_chunks.length;

    if (__fest_to) {
      __fest_iterator = 0;

      for (; __fest_iterator < __fest_to; __fest_iterator++) {
        __fest_chunk = __fest_chunks[__fest_iterator];

        if (typeof __fest_chunk === "string") {
          __fest_html += __fest_chunk;
        } else {
          __fest_fn = __fest_blocks[__fest_chunk.name];
          if (__fest_fn) __fest_html += __fest_call(__fest_fn, __fest_chunk.params, __fest_chunk.cp);
        }
      }

      return __fest_html + __fest_buf;
    } else {
      return __fest_buf;
    }
  };
})();

/***/ }),

/***/ 604:
/***/ (() => {

;

(function () {
  var x = Function('return this')();
  if (!x.fest) x.fest = {};

  x.fest['js/components/LogoutPage/LogoutPage.tmpl'] = function (__fest_context) {
    "use strict";

    var __fest_self = this,
        __fest_buf = "",
        __fest_chunks = [],
        __fest_chunk,
        __fest_attrs = [],
        __fest_select,
        __fest_if,
        __fest_iterator,
        __fest_to,
        __fest_fn,
        __fest_html = "",
        __fest_blocks = {},
        __fest_params,
        __fest_element,
        __fest_debug_file = "",
        __fest_debug_line = "",
        __fest_debug_block = "",
        __fest_element_stack = [],
        __fest_short_tags = {
      "area": true,
      "base": true,
      "br": true,
      "col": true,
      "command": true,
      "embed": true,
      "hr": true,
      "img": true,
      "input": true,
      "keygen": true,
      "link": true,
      "meta": true,
      "param": true,
      "source": true,
      "wbr": true
    },
        __fest_jschars = /[\\'"\/\n\r\t\b\f<>]/g,
        __fest_jschars_test = /[\\'"\/\n\r\t\b\f<>]/,
        __fest_htmlchars = /[&<>"]/g,
        __fest_htmlchars_test = /[&<>"]/,
        __fest_jshash = {
      "\"": "\\\"",
      "\\": "\\\\",
      "/": "\\/",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\b": "\\b",
      "\f": "\\f",
      "'": "\\'",
      "<": "\\u003C",
      ">": "\\u003E"
    },
        __fest_htmlhash = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;"
    },
        __fest_escapeJS = function __fest_escapeJS(value) {
      if (typeof value === 'string') {
        if (__fest_jschars_test.test(value)) {
          return value.replace(__fest_jschars, __fest_replaceJS);
        }
      }

      return value == null ? '' : value;
    },
        __fest_replaceJS = function __fest_replaceJS(chr) {
      return __fest_jshash[chr];
    },
        __fest_escapeHTML = function __fest_escapeHTML(value) {
      if (typeof value === 'string') {
        if (__fest_htmlchars_test.test(value)) {
          return value.replace(__fest_htmlchars, __fest_replaceHTML);
        }
      }

      return value == null ? '' : value;
    },
        __fest_replaceHTML = function __fest_replaceHTML(chr) {
      return __fest_htmlhash[chr];
    },
        __fest_extend = function __fest_extend(dest, src) {
      for (var key in src) {
        if (src.hasOwnProperty(key)) {
          dest[key] = src[key];
        }
      }
    },
        __fest_param = function __fest_param(fn) {
      fn.param = true;
      return fn;
    },
        i18n = __fest_self && typeof __fest_self.i18n === "function" ? __fest_self.i18n : function (str) {
      return str;
    },
        ___fest_log_error;

    if (typeof __fest_error === "undefined") {
      ___fest_log_error = typeof console !== "undefined" && console.error ? function () {
        return Function.prototype.apply.call(console.error, console, arguments);
      } : function () {};
    } else {
      ___fest_log_error = __fest_error;
    }

    ;

    function __fest_log_error(msg) {
      ___fest_log_error(msg + "\nin block \"" + __fest_debug_block + "\" at line: " + __fest_debug_line + "\nfile: " + __fest_debug_file);
    }

    function __fest_call(fn, params, cp) {
      if (cp) for (var i in params) {
        if (typeof params[i] == "function" && params[i].param) params[i] = params[i]();
      }
      return fn.call(__fest_self, params);
    }

    var data = __fest_context;
    __fest_buf += "<section class=\"s-content s-styles\"><section class=\"s-content s-content--single\">";

    try {
      __fest_if = data.success;
    } catch (e) {
      __fest_if = false;

      __fest_log_error(e.message);
    }

    if (__fest_if) {
      __fest_buf += "<div class=\"row\"><div class=\"column large-12\"><div class=\"alert-box alert-box--success\"><p>Вы вышли</p></div></div></div>";
    }

    __fest_buf += "</section></section>";
    __fest_to = __fest_chunks.length;

    if (__fest_to) {
      __fest_iterator = 0;

      for (; __fest_iterator < __fest_to; __fest_iterator++) {
        __fest_chunk = __fest_chunks[__fest_iterator];

        if (typeof __fest_chunk === "string") {
          __fest_html += __fest_chunk;
        } else {
          __fest_fn = __fest_blocks[__fest_chunk.name];
          if (__fest_fn) __fest_html += __fest_call(__fest_fn, __fest_chunk.params, __fest_chunk.cp);
        }
      }

      return __fest_html + __fest_buf;
    } else {
      return __fest_buf;
    }
  };
})();

/***/ }),

/***/ 820:
/***/ (() => {

;

(function () {
  var x = Function('return this')();
  if (!x.fest) x.fest = {};

  x.fest['js/components/MainPage/MainPage.tmpl'] = function (__fest_context) {
    "use strict";

    var __fest_self = this,
        __fest_buf = "",
        __fest_chunks = [],
        __fest_chunk,
        __fest_attrs = [],
        __fest_select,
        __fest_if,
        __fest_iterator,
        __fest_to,
        __fest_fn,
        __fest_html = "",
        __fest_blocks = {},
        __fest_params,
        __fest_element,
        __fest_debug_file = "",
        __fest_debug_line = "",
        __fest_debug_block = "",
        __fest_element_stack = [],
        __fest_short_tags = {
      "area": true,
      "base": true,
      "br": true,
      "col": true,
      "command": true,
      "embed": true,
      "hr": true,
      "img": true,
      "input": true,
      "keygen": true,
      "link": true,
      "meta": true,
      "param": true,
      "source": true,
      "wbr": true
    },
        __fest_jschars = /[\\'"\/\n\r\t\b\f<>]/g,
        __fest_jschars_test = /[\\'"\/\n\r\t\b\f<>]/,
        __fest_htmlchars = /[&<>"]/g,
        __fest_htmlchars_test = /[&<>"]/,
        __fest_jshash = {
      "\"": "\\\"",
      "\\": "\\\\",
      "/": "\\/",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\b": "\\b",
      "\f": "\\f",
      "'": "\\'",
      "<": "\\u003C",
      ">": "\\u003E"
    },
        __fest_htmlhash = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;"
    },
        __fest_escapeJS = function __fest_escapeJS(value) {
      if (typeof value === 'string') {
        if (__fest_jschars_test.test(value)) {
          return value.replace(__fest_jschars, __fest_replaceJS);
        }
      }

      return value == null ? '' : value;
    },
        __fest_replaceJS = function __fest_replaceJS(chr) {
      return __fest_jshash[chr];
    },
        __fest_escapeHTML = function __fest_escapeHTML(value) {
      if (typeof value === 'string') {
        if (__fest_htmlchars_test.test(value)) {
          return value.replace(__fest_htmlchars, __fest_replaceHTML);
        }
      }

      return value == null ? '' : value;
    },
        __fest_replaceHTML = function __fest_replaceHTML(chr) {
      return __fest_htmlhash[chr];
    },
        __fest_extend = function __fest_extend(dest, src) {
      for (var key in src) {
        if (src.hasOwnProperty(key)) {
          dest[key] = src[key];
        }
      }
    },
        __fest_param = function __fest_param(fn) {
      fn.param = true;
      return fn;
    },
        i18n = __fest_self && typeof __fest_self.i18n === "function" ? __fest_self.i18n : function (str) {
      return str;
    },
        ___fest_log_error;

    if (typeof __fest_error === "undefined") {
      ___fest_log_error = typeof console !== "undefined" && console.error ? function () {
        return Function.prototype.apply.call(console.error, console, arguments);
      } : function () {};
    } else {
      ___fest_log_error = __fest_error;
    }

    ;

    function __fest_log_error(msg) {
      ___fest_log_error(msg + "\nin block \"" + __fest_debug_block + "\" at line: " + __fest_debug_line + "\nfile: " + __fest_debug_file);
    }

    function __fest_call(fn, params, cp) {
      if (cp) for (var i in params) {
        if (typeof params[i] == "function" && params[i].param) params[i] = params[i]();
      }
      return fn.call(__fest_self, params);
    }

    var data = __fest_context;
    __fest_buf += "<section class=\"s-bricks\"><div class=\"masonry\"><div class=\"bricks-wrapper h-group\"><div class=\"brick entry featured-grid animate-this\"><div class=\"entry__content\"><div class=\"featured-post-slider\"><div class=\"featured-post-slide\"><div class=\"f-slide\"><div class=\"f-slide__background\" style=\"background-image:url(\'images\/thumbs\/featured\/featured-1.jpg\');\"></div><div class=\"f-slide__overlay\"></div><div class=\"f-slide__content\"><ul class=\"f-slide__meta\"></ul><h1 class=\"f-slide__title\"><a href=\"#\" title=\"\">";

    try {
      __fest_buf += __fest_escapeHTML(data.articles[0].article_title);
    } catch (e) {
      __fest_log_error(e.message + "18");
    }

    __fest_buf += "</a></h1></div></div></div></div></div></div><article class=\"brick entry format-quote animate-this\"><div class=\"entry__thumb\"><blockquote><p>Бывает лед сильней огня, зима — порой длиннее лета, бывает ночь длиннее дня и тьма вдвойне сильнее света. Бывает сад громаден, густ, а вот плодов совсем не снимешь. Так берегись холодных чувств, не то, смотри, совсем застынешь.</p><cite>Иосиф Александрович Бродский</cite></blockquote></div></article></div></div><div class=\"row current-cat\"><div class=\"column\"><h1 class=\"h2\">";

    try {
      __fest_buf += __fest_escapeHTML(data.key);
    } catch (e) {
      __fest_log_error(e.message + "41");
    }

    __fest_buf += "</h1></div></div><div class=\"masonry\"><div class=\"bricks-wrapper h-group\"><div class=\"grid-sizer\"></div>";

    var i, __fest_to0, __fest_iterator0;

    try {
      __fest_iterator0 = data.articles || [];
      __fest_to0 = __fest_iterator0.length;
    } catch (e) {
      __fest_iterator0 = [];
      __fest_to0 = 0;

      __fest_log_error(e.message);
    }

    for (i = 0; i < __fest_to0; i++) {
      __fest_buf += "<article class=\"brick entry format-standard animate-this\"><div class=\"entry__text\"><div class=\"entry__header\"><div class=\"entry__meta\">";

      var j, __fest_to1, __fest_iterator1;

      try {
        __fest_iterator1 = data.articles[i].categories || [];
        __fest_to1 = __fest_iterator1.length;
      } catch (e) {
        __fest_iterator1 = [];
        __fest_to1 = 0;

        __fest_log_error(e.message);
      }

      for (j = 0; j < __fest_to1; j++) {}

      __fest_buf += "</div><h1 class=\"entry__title\"><a href=\"#\">";

      try {
        __fest_buf += __fest_escapeHTML(data.articles[i].article_title);
      } catch (e) {
        __fest_log_error(e.message + "68");
      }

      __fest_buf += "</a></h1></div><div class=\"entry__excerpt\"><p>";

      try {
        __fest_buf += __fest_escapeHTML(data.articles[i].description);
      } catch (e) {
        __fest_log_error(e.message + "72");
      }

      __fest_buf += "</p></div></div></article>";
    }

    __fest_buf += "</div></div><div class=\"row\"><div class=\"column large-12\"><nav class=\"pgn\"><ul><li><a class=\"pgn__prev\" href=\"#\"><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12.707 17.293L8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z\"></path></svg></a></li><li><a class=\"pgn__num\" href=\"#\">1</a></li><li><span class=\"pgn__num current\">2</span></li><li><a class=\"pgn__num\" href=\"#\">3</a></li><li><a class=\"pgn__num\" href=\"#\">4</a></li><li><a class=\"pgn__num\" href=\"#\">5</a></li><li><span class=\"pgn__num dots\">…</span></li><li><a class=\"pgn__num\" href=\"#\">8</a></li><li><a class=\"pgn__next\" href=\"#\"><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z\"></path></svg></a></li></ul></nav></div></div></section>";
    __fest_to = __fest_chunks.length;

    if (__fest_to) {
      __fest_iterator = 0;

      for (; __fest_iterator < __fest_to; __fest_iterator++) {
        __fest_chunk = __fest_chunks[__fest_iterator];

        if (typeof __fest_chunk === "string") {
          __fest_html += __fest_chunk;
        } else {
          __fest_fn = __fest_blocks[__fest_chunk.name];
          if (__fest_fn) __fest_html += __fest_call(__fest_fn, __fest_chunk.params, __fest_chunk.cp);
        }
      }

      return __fest_html + __fest_buf;
    } else {
      return __fest_buf;
    }
  };
})();

/***/ }),

/***/ 498:
/***/ (() => {

;

(function () {
  var x = Function('return this')();
  if (!x.fest) x.fest = {};

  x.fest['js/components/PostPage/PostPage.tmpl'] = function (__fest_context) {
    "use strict";

    var __fest_self = this,
        __fest_buf = "",
        __fest_chunks = [],
        __fest_chunk,
        __fest_attrs = [],
        __fest_select,
        __fest_if,
        __fest_iterator,
        __fest_to,
        __fest_fn,
        __fest_html = "",
        __fest_blocks = {},
        __fest_params,
        __fest_element,
        __fest_debug_file = "",
        __fest_debug_line = "",
        __fest_debug_block = "",
        __fest_element_stack = [],
        __fest_short_tags = {
      "area": true,
      "base": true,
      "br": true,
      "col": true,
      "command": true,
      "embed": true,
      "hr": true,
      "img": true,
      "input": true,
      "keygen": true,
      "link": true,
      "meta": true,
      "param": true,
      "source": true,
      "wbr": true
    },
        __fest_jschars = /[\\'"\/\n\r\t\b\f<>]/g,
        __fest_jschars_test = /[\\'"\/\n\r\t\b\f<>]/,
        __fest_htmlchars = /[&<>"]/g,
        __fest_htmlchars_test = /[&<>"]/,
        __fest_jshash = {
      "\"": "\\\"",
      "\\": "\\\\",
      "/": "\\/",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\b": "\\b",
      "\f": "\\f",
      "'": "\\'",
      "<": "\\u003C",
      ">": "\\u003E"
    },
        __fest_htmlhash = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;"
    },
        __fest_escapeJS = function __fest_escapeJS(value) {
      if (typeof value === 'string') {
        if (__fest_jschars_test.test(value)) {
          return value.replace(__fest_jschars, __fest_replaceJS);
        }
      }

      return value == null ? '' : value;
    },
        __fest_replaceJS = function __fest_replaceJS(chr) {
      return __fest_jshash[chr];
    },
        __fest_escapeHTML = function __fest_escapeHTML(value) {
      if (typeof value === 'string') {
        if (__fest_htmlchars_test.test(value)) {
          return value.replace(__fest_htmlchars, __fest_replaceHTML);
        }
      }

      return value == null ? '' : value;
    },
        __fest_replaceHTML = function __fest_replaceHTML(chr) {
      return __fest_htmlhash[chr];
    },
        __fest_extend = function __fest_extend(dest, src) {
      for (var key in src) {
        if (src.hasOwnProperty(key)) {
          dest[key] = src[key];
        }
      }
    },
        __fest_param = function __fest_param(fn) {
      fn.param = true;
      return fn;
    },
        i18n = __fest_self && typeof __fest_self.i18n === "function" ? __fest_self.i18n : function (str) {
      return str;
    },
        ___fest_log_error;

    if (typeof __fest_error === "undefined") {
      ___fest_log_error = typeof console !== "undefined" && console.error ? function () {
        return Function.prototype.apply.call(console.error, console, arguments);
      } : function () {};
    } else {
      ___fest_log_error = __fest_error;
    }

    ;

    function __fest_log_error(msg) {
      ___fest_log_error(msg + "\nin block \"" + __fest_debug_block + "\" at line: " + __fest_debug_line + "\nfile: " + __fest_debug_file);
    }

    function __fest_call(fn, params, cp) {
      if (cp) for (var i in params) {
        if (typeof params[i] == "function" && params[i].param) params[i] = params[i]();
      }
      return fn.call(__fest_self, params);
    }

    var data = __fest_context;
    __fest_buf += "<section class=\"s-content s-content--single\"><div class=\"row\"><div class=\"column large-12\"><article class=\"entry\"><div class=\"s-content__media\"><div class=\"s-content__post-thumb\"><img src=\"images\/thumbs\/single\/standard\/standard-1050.jpg\" sizes=\"(max-width: 2100px) 100vw, 2100px\" alt=\"\"/></div></div><div class=\"s-content__primary\"><h2 class=\"s-content__title s-content__title--post\">Съешь ещё этих мягких французских булок, да выпей чаю</h2><ul class=\"s-content__post-meta\"><li class=\"date\">September 05, 2020</li></ul><p class=\"lead\">Съешь ещё этих мягких французских булок, да выпей чаю.</p></div></article></div></div></section>";
    __fest_to = __fest_chunks.length;

    if (__fest_to) {
      __fest_iterator = 0;

      for (; __fest_iterator < __fest_to; __fest_iterator++) {
        __fest_chunk = __fest_chunks[__fest_iterator];

        if (typeof __fest_chunk === "string") {
          __fest_html += __fest_chunk;
        } else {
          __fest_fn = __fest_blocks[__fest_chunk.name];
          if (__fest_fn) __fest_html += __fest_call(__fest_fn, __fest_chunk.params, __fest_chunk.cp);
        }
      }

      return __fest_html + __fest_buf;
    } else {
      return __fest_buf;
    }
  };
})();

/***/ }),

/***/ 350:
/***/ (() => {

;

(function () {
  var x = Function('return this')();
  if (!x.fest) x.fest = {};

  x.fest['js/components/ProfilePage/ProfilePage.tmpl'] = function (__fest_context) {
    "use strict";

    var __fest_self = this,
        __fest_buf = "",
        __fest_chunks = [],
        __fest_chunk,
        __fest_attrs = [],
        __fest_select,
        __fest_if,
        __fest_iterator,
        __fest_to,
        __fest_fn,
        __fest_html = "",
        __fest_blocks = {},
        __fest_params,
        __fest_element,
        __fest_debug_file = "",
        __fest_debug_line = "",
        __fest_debug_block = "",
        __fest_element_stack = [],
        __fest_short_tags = {
      "area": true,
      "base": true,
      "br": true,
      "col": true,
      "command": true,
      "embed": true,
      "hr": true,
      "img": true,
      "input": true,
      "keygen": true,
      "link": true,
      "meta": true,
      "param": true,
      "source": true,
      "wbr": true
    },
        __fest_jschars = /[\\'"\/\n\r\t\b\f<>]/g,
        __fest_jschars_test = /[\\'"\/\n\r\t\b\f<>]/,
        __fest_htmlchars = /[&<>"]/g,
        __fest_htmlchars_test = /[&<>"]/,
        __fest_jshash = {
      "\"": "\\\"",
      "\\": "\\\\",
      "/": "\\/",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\b": "\\b",
      "\f": "\\f",
      "'": "\\'",
      "<": "\\u003C",
      ">": "\\u003E"
    },
        __fest_htmlhash = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;"
    },
        __fest_escapeJS = function __fest_escapeJS(value) {
      if (typeof value === 'string') {
        if (__fest_jschars_test.test(value)) {
          return value.replace(__fest_jschars, __fest_replaceJS);
        }
      }

      return value == null ? '' : value;
    },
        __fest_replaceJS = function __fest_replaceJS(chr) {
      return __fest_jshash[chr];
    },
        __fest_escapeHTML = function __fest_escapeHTML(value) {
      if (typeof value === 'string') {
        if (__fest_htmlchars_test.test(value)) {
          return value.replace(__fest_htmlchars, __fest_replaceHTML);
        }
      }

      return value == null ? '' : value;
    },
        __fest_replaceHTML = function __fest_replaceHTML(chr) {
      return __fest_htmlhash[chr];
    },
        __fest_extend = function __fest_extend(dest, src) {
      for (var key in src) {
        if (src.hasOwnProperty(key)) {
          dest[key] = src[key];
        }
      }
    },
        __fest_param = function __fest_param(fn) {
      fn.param = true;
      return fn;
    },
        i18n = __fest_self && typeof __fest_self.i18n === "function" ? __fest_self.i18n : function (str) {
      return str;
    },
        ___fest_log_error;

    if (typeof __fest_error === "undefined") {
      ___fest_log_error = typeof console !== "undefined" && console.error ? function () {
        return Function.prototype.apply.call(console.error, console, arguments);
      } : function () {};
    } else {
      ___fest_log_error = __fest_error;
    }

    ;

    function __fest_log_error(msg) {
      ___fest_log_error(msg + "\nin block \"" + __fest_debug_block + "\" at line: " + __fest_debug_line + "\nfile: " + __fest_debug_file);
    }

    function __fest_call(fn, params, cp) {
      if (cp) for (var i in params) {
        if (typeof params[i] == "function" && params[i].param) params[i] = params[i]();
      }
      return fn.call(__fest_self, params);
    }

    var data = __fest_context;
    __fest_buf += "<section class=\"s-content s-styles\"><div class=\"row\"><div class=\"column large-12 intro\"><h1>";

    try {
      __fest_buf += __fest_escapeHTML(data.login);
    } catch (e) {
      __fest_log_error(e.message + "5");
    }

    __fest_buf += "</h1></div></div><div class=\"row\"><div class=\"column large-4 tab-12\"><h3 class=\"h-add-bottom\">Аватар</h3>";

    try {
      __fest_attrs[0] = __fest_escapeHTML(data.image);
    } catch (e) {
      __fest_attrs[0] = "";

      __fest_log_error(e.message);
    }

    __fest_buf += "<div style=\"background: url(" + __fest_attrs[0] + ") no-repeat center center;\n                    background-size: cover;\n                    height: 300px;\"></div></div><div class=\"column large-8 tab-12\"><h3>О себе</h3><p class=\"drop-cap\">email:";

    try {
      __fest_buf += __fest_escapeHTML(data.email);
    } catch (e) {
      __fest_log_error(e.message + "18");
    }

    __fest_buf += "</p><h3><span style=\"margin-right: 10px;\">Подписка</span><span>";

    try {
      __fest_buf += __fest_escapeHTML(data.ok);
    } catch (e) {
      __fest_log_error(e.message + "21");
    }

    __fest_buf += "</span></h3><form id=\"form-add-category\" name=\"cForm\" class=\"s-content__form\"><div class=\"form-field\"><select id=\"categoryTitle\" class=\"select-category\">";

    var cat, __fest_to0, __fest_iterator0;

    try {
      __fest_iterator0 = data.categories || [];
      __fest_to0 = __fest_iterator0.length;
    } catch (e) {
      __fest_iterator0 = [];
      __fest_to0 = 0;

      __fest_log_error(e.message);
    }

    for (cat = 0; cat < __fest_to0; cat++) {
      __fest_buf += "<option>";

      try {
        __fest_buf += __fest_escapeHTML(data.categories[cat]);
      } catch (e) {
        __fest_log_error(e.message + "26");
      }

      __fest_buf += "</option>";
    }

    __fest_buf += "</select></div><button type=\"submit\" class=\"submit btn btn--primary btn--medium h-full-width\">Подписаться</button></form></div></div><div class=\"row\"><div class=\"column large-12\"><h3>Статьи</h3>";

    try {
      __fest_if = data.isArticle;
    } catch (e) {
      __fest_if = false;

      __fest_log_error(e.message);
    }

    if (__fest_if) {
      __fest_buf += "<div class=\"row\"><div class=\"column large-12\"><div class=\"alert-box alert-box--info \"><p>Пока нет статей</p></div></div></div>";
    }

    __fest_buf += "<div class=\"row half-bottom\">";

    var i, __fest_to1, __fest_iterator1;

    try {
      __fest_iterator1 = data.articles || [];
      __fest_to1 = __fest_iterator1.length;
    } catch (e) {
      __fest_iterator1 = [];
      __fest_to1 = 0;

      __fest_log_error(e.message);
    }

    for (i = 0; i < __fest_to1; i++) {
      __fest_buf += "<div class=\"column large-6 tab-12\"><h4>";

      try {
        __fest_buf += __fest_escapeHTML(data.articles[i].article_title);
      } catch (e) {
        __fest_log_error(e.message + "51");
      }

      __fest_buf += "</h4><p>";

      try {
        __fest_buf += __fest_escapeHTML(data.articles[i].description);
      } catch (e) {
        __fest_log_error(e.message + "52");
      }

      __fest_buf += "</p></div>";
    }

    __fest_buf += "</div></div></div></section>";
    __fest_to = __fest_chunks.length;

    if (__fest_to) {
      __fest_iterator = 0;

      for (; __fest_iterator < __fest_to; __fest_iterator++) {
        __fest_chunk = __fest_chunks[__fest_iterator];

        if (typeof __fest_chunk === "string") {
          __fest_html += __fest_chunk;
        } else {
          __fest_fn = __fest_blocks[__fest_chunk.name];
          if (__fest_fn) __fest_html += __fest_call(__fest_fn, __fest_chunk.params, __fest_chunk.cp);
        }
      }

      return __fest_html + __fest_buf;
    } else {
      return __fest_buf;
    }
  };
})();

/***/ }),

/***/ 344:
/***/ (() => {

;

(function () {
  var x = Function('return this')();
  if (!x.fest) x.fest = {};

  x.fest['js/components/SettingsPage/SettingsPage.tmpl'] = function (__fest_context) {
    "use strict";

    var __fest_self = this,
        __fest_buf = "",
        __fest_chunks = [],
        __fest_chunk,
        __fest_attrs = [],
        __fest_select,
        __fest_if,
        __fest_iterator,
        __fest_to,
        __fest_fn,
        __fest_html = "",
        __fest_blocks = {},
        __fest_params,
        __fest_element,
        __fest_debug_file = "",
        __fest_debug_line = "",
        __fest_debug_block = "",
        __fest_element_stack = [],
        __fest_short_tags = {
      "area": true,
      "base": true,
      "br": true,
      "col": true,
      "command": true,
      "embed": true,
      "hr": true,
      "img": true,
      "input": true,
      "keygen": true,
      "link": true,
      "meta": true,
      "param": true,
      "source": true,
      "wbr": true
    },
        __fest_jschars = /[\\'"\/\n\r\t\b\f<>]/g,
        __fest_jschars_test = /[\\'"\/\n\r\t\b\f<>]/,
        __fest_htmlchars = /[&<>"]/g,
        __fest_htmlchars_test = /[&<>"]/,
        __fest_jshash = {
      "\"": "\\\"",
      "\\": "\\\\",
      "/": "\\/",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\b": "\\b",
      "\f": "\\f",
      "'": "\\'",
      "<": "\\u003C",
      ">": "\\u003E"
    },
        __fest_htmlhash = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;"
    },
        __fest_escapeJS = function __fest_escapeJS(value) {
      if (typeof value === 'string') {
        if (__fest_jschars_test.test(value)) {
          return value.replace(__fest_jschars, __fest_replaceJS);
        }
      }

      return value == null ? '' : value;
    },
        __fest_replaceJS = function __fest_replaceJS(chr) {
      return __fest_jshash[chr];
    },
        __fest_escapeHTML = function __fest_escapeHTML(value) {
      if (typeof value === 'string') {
        if (__fest_htmlchars_test.test(value)) {
          return value.replace(__fest_htmlchars, __fest_replaceHTML);
        }
      }

      return value == null ? '' : value;
    },
        __fest_replaceHTML = function __fest_replaceHTML(chr) {
      return __fest_htmlhash[chr];
    },
        __fest_extend = function __fest_extend(dest, src) {
      for (var key in src) {
        if (src.hasOwnProperty(key)) {
          dest[key] = src[key];
        }
      }
    },
        __fest_param = function __fest_param(fn) {
      fn.param = true;
      return fn;
    },
        i18n = __fest_self && typeof __fest_self.i18n === "function" ? __fest_self.i18n : function (str) {
      return str;
    },
        ___fest_log_error;

    if (typeof __fest_error === "undefined") {
      ___fest_log_error = typeof console !== "undefined" && console.error ? function () {
        return Function.prototype.apply.call(console.error, console, arguments);
      } : function () {};
    } else {
      ___fest_log_error = __fest_error;
    }

    ;

    function __fest_log_error(msg) {
      ___fest_log_error(msg + "\nin block \"" + __fest_debug_block + "\" at line: " + __fest_debug_line + "\nfile: " + __fest_debug_file);
    }

    function __fest_call(fn, params, cp) {
      if (cp) for (var i in params) {
        if (typeof params[i] == "function" && params[i].param) params[i] = params[i]();
      }
      return fn.call(__fest_self, params);
    }

    var data = __fest_context;
    __fest_buf += "<section class=\"s-content s-styles\"><section class=\"s-content s-content--single\"><div class=\"row\"><div class=\"column large-12\"><div class=\"entry__text\"><div class=\"column\"><h2 class=\"s-content__title s-content__title--post\">Обновить профиль</h2>";

    try {
      __fest_if = data.success;
    } catch (e) {
      __fest_if = false;

      __fest_log_error(e.message);
    }

    if (__fest_if) {
      __fest_buf += "<div class=\"row\"><div class=\"column large-12\"><div class=\"alert-box alert-box--error\"><p>Не удалось обновить!</p></div></div></div>";
    }

    try {
      __fest_if = data.settings;
    } catch (e) {
      __fest_if = false;

      __fest_log_error(e.message);
    }

    if (__fest_if) {
      __fest_buf += "<div class=\"row\"><div class=\"column large-12\"><div class=\"alert-box alert-box--success\"><p>Данные обновлены!</p></div></div></div>";
    }

    __fest_buf += "<form id=\"form-update\"><div><label for=\"inputName\">Ваш логин</label>";

    try {
      __fest_attrs[0] = __fest_escapeHTML(data.currentProfileData.login);
    } catch (e) {
      __fest_attrs[0] = "";

      __fest_log_error(e.message);
    }

    __fest_buf += "<input class=\"h-full-width\" type=\"name\" placeholder=\"" + __fest_attrs[0] + "\" id=\"updateLogin\"/></div><div><label for=\"inputEmail\">Ваш email</label>";

    try {
      __fest_attrs[0] = __fest_escapeHTML(data.currentProfileData.email);
    } catch (e) {
      __fest_attrs[0] = "";

      __fest_log_error(e.message);
    }

    __fest_buf += "<input class=\"h-full-width\" type=\"email\" placeholder=\"" + __fest_attrs[0] + "\" id=\"updateEmail\"/></div><div><label for=\"password\">Пароль</label><input class=\"h-full-width\" type=\"password\" placeholder=\"********\" id=\"updatePassword\"/></div><input class=\"btn--primary h-full-width\" type=\"submit\" value=\"Обновить\"/><h2 class=\"s-content__title s-content__title--post\">Обновить аватар</h2>";

    try {
      __fest_if = data.successPhoto;
    } catch (e) {
      __fest_if = false;

      __fest_log_error(e.message);
    }

    if (__fest_if) {
      __fest_buf += "<div class=\"row\"><div class=\"column large-12\"><div class=\"alert-box alert-box--error\"><p>Не удалось обновить!</p></div></div></div>";
    }

    try {
      __fest_if = data.settingsPhoto;
    } catch (e) {
      __fest_if = false;

      __fest_log_error(e.message);
    }

    if (__fest_if) {
      __fest_buf += "<div class=\"row\"><div class=\"column large-12\"><div class=\"alert-box alert-box--success\"><p>Данные обновлены!</p></div></div></div>";
    }

    __fest_buf += "<div><label for=\"inputAvatar\">Аватар</label><input class=\"h-full-width\" name=\"avatar\" type=\"file\" accept=\"image\/jpeg, image\/png, image\/jpg\" id=\"updateAvatar\"/></div></form></div></div></div></div></section></section>";
    __fest_to = __fest_chunks.length;

    if (__fest_to) {
      __fest_iterator = 0;

      for (; __fest_iterator < __fest_to; __fest_iterator++) {
        __fest_chunk = __fest_chunks[__fest_iterator];

        if (typeof __fest_chunk === "string") {
          __fest_html += __fest_chunk;
        } else {
          __fest_fn = __fest_blocks[__fest_chunk.name];
          if (__fest_fn) __fest_html += __fest_call(__fest_fn, __fest_chunk.params, __fest_chunk.cp);
        }
      }

      return __fest_html + __fest_buf;
    } else {
      return __fest_buf;
    }
  };
})();

/***/ }),

/***/ 59:
/***/ (() => {

;

(function () {
  var x = Function('return this')();
  if (!x.fest) x.fest = {};

  x.fest['js/components/SignUpPage/SignUpPage.tmpl'] = function (__fest_context) {
    "use strict";

    var __fest_self = this,
        __fest_buf = "",
        __fest_chunks = [],
        __fest_chunk,
        __fest_attrs = [],
        __fest_select,
        __fest_if,
        __fest_iterator,
        __fest_to,
        __fest_fn,
        __fest_html = "",
        __fest_blocks = {},
        __fest_params,
        __fest_element,
        __fest_debug_file = "",
        __fest_debug_line = "",
        __fest_debug_block = "",
        __fest_element_stack = [],
        __fest_short_tags = {
      "area": true,
      "base": true,
      "br": true,
      "col": true,
      "command": true,
      "embed": true,
      "hr": true,
      "img": true,
      "input": true,
      "keygen": true,
      "link": true,
      "meta": true,
      "param": true,
      "source": true,
      "wbr": true
    },
        __fest_jschars = /[\\'"\/\n\r\t\b\f<>]/g,
        __fest_jschars_test = /[\\'"\/\n\r\t\b\f<>]/,
        __fest_htmlchars = /[&<>"]/g,
        __fest_htmlchars_test = /[&<>"]/,
        __fest_jshash = {
      "\"": "\\\"",
      "\\": "\\\\",
      "/": "\\/",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\b": "\\b",
      "\f": "\\f",
      "'": "\\'",
      "<": "\\u003C",
      ">": "\\u003E"
    },
        __fest_htmlhash = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;"
    },
        __fest_escapeJS = function __fest_escapeJS(value) {
      if (typeof value === 'string') {
        if (__fest_jschars_test.test(value)) {
          return value.replace(__fest_jschars, __fest_replaceJS);
        }
      }

      return value == null ? '' : value;
    },
        __fest_replaceJS = function __fest_replaceJS(chr) {
      return __fest_jshash[chr];
    },
        __fest_escapeHTML = function __fest_escapeHTML(value) {
      if (typeof value === 'string') {
        if (__fest_htmlchars_test.test(value)) {
          return value.replace(__fest_htmlchars, __fest_replaceHTML);
        }
      }

      return value == null ? '' : value;
    },
        __fest_replaceHTML = function __fest_replaceHTML(chr) {
      return __fest_htmlhash[chr];
    },
        __fest_extend = function __fest_extend(dest, src) {
      for (var key in src) {
        if (src.hasOwnProperty(key)) {
          dest[key] = src[key];
        }
      }
    },
        __fest_param = function __fest_param(fn) {
      fn.param = true;
      return fn;
    },
        i18n = __fest_self && typeof __fest_self.i18n === "function" ? __fest_self.i18n : function (str) {
      return str;
    },
        ___fest_log_error;

    if (typeof __fest_error === "undefined") {
      ___fest_log_error = typeof console !== "undefined" && console.error ? function () {
        return Function.prototype.apply.call(console.error, console, arguments);
      } : function () {};
    } else {
      ___fest_log_error = __fest_error;
    }

    ;

    function __fest_log_error(msg) {
      ___fest_log_error(msg + "\nin block \"" + __fest_debug_block + "\" at line: " + __fest_debug_line + "\nfile: " + __fest_debug_file);
    }

    function __fest_call(fn, params, cp) {
      if (cp) for (var i in params) {
        if (typeof params[i] == "function" && params[i].param) params[i] = params[i]();
      }
      return fn.call(__fest_self, params);
    }

    var data = __fest_context;
    __fest_buf += "<section class=\"s-content site-page\">";

    try {
      __fest_if = data.sign;
    } catch (e) {
      __fest_if = false;

      __fest_log_error(e.message);
    }

    if (__fest_if) {
      __fest_buf += "<div class=\"row\"><div class=\"column large-12\"><div class=\"alert-box alert-box--success\"><p>Вы зарегистрированы!</p></div></div></div>";
    }

    try {
      __fest_if = data.success;
    } catch (e) {
      __fest_if = false;

      __fest_log_error(e.message);
    }

    if (__fest_if) {
      __fest_buf += "<div class=\"row\"><div class=\"column large-12\"><div class=\"alert-box alert-box--error\"><p>Не удалось зарегистрироваться</p></div></div></div>";
    }

    __fest_buf += "<section class=\"s-content s-content__primary\"><div class=\"row\"><div class=\"column large-12\"><div class=\"entry__text\"><div class=\"column\"><h2 class=\"s-content__title s-content__title--post\">Регистрация</h2><form id=\"form-sing-up\"><div><label for=\"inputLogin\">Ваш логин</label><label id=\"errorLogin\"></label><input class=\"h-full-width\" type=\"name\" placeholder=\"login\" id=\"inputLogin\" required=\"required\"/></div><div><label for=\"inputEmail\">Ваш email</label><label id=\"errorEmail\"></label><input class=\"h-full-width\" type=\"email\" placeholder=\"test@mail.ru\" id=\"inputEmail\" required=\"required\"/></div><div><label for=\"password\">Пароль</label><label id=\"errorPassword\"></label><input class=\"h-full-width\" type=\"password\" placeholder=\"********\" id=\"inputPassword\" required=\"required\"/></div><input class=\"btn--primary h-full-width\" type=\"submit\" value=\"Зарегистрироваться\"/></form><div><span style=\"margin-right: 10px;\">Уже есть аккаунт? Тогда</span><code><a href=\"\/login\">войдите</a></code></div></div></div></div></div></section></section>";
    __fest_to = __fest_chunks.length;

    if (__fest_to) {
      __fest_iterator = 0;

      for (; __fest_iterator < __fest_to; __fest_iterator++) {
        __fest_chunk = __fest_chunks[__fest_iterator];

        if (typeof __fest_chunk === "string") {
          __fest_html += __fest_chunk;
        } else {
          __fest_fn = __fest_blocks[__fest_chunk.name];
          if (__fest_fn) __fest_html += __fest_call(__fest_fn, __fest_chunk.params, __fest_chunk.cp);
        }
      }

      return __fest_html + __fest_buf;
    } else {
      return __fest_buf;
    }
  };
})();

/***/ }),

/***/ 727:
/***/ (() => {

;

(function () {
  var x = Function('return this')();
  if (!x.fest) x.fest = {};

  x.fest['js/components/TagPage/TagPage.tmpl'] = function (__fest_context) {
    "use strict";

    var __fest_self = this,
        __fest_buf = "",
        __fest_chunks = [],
        __fest_chunk,
        __fest_attrs = [],
        __fest_select,
        __fest_if,
        __fest_iterator,
        __fest_to,
        __fest_fn,
        __fest_html = "",
        __fest_blocks = {},
        __fest_params,
        __fest_element,
        __fest_debug_file = "",
        __fest_debug_line = "",
        __fest_debug_block = "",
        __fest_element_stack = [],
        __fest_short_tags = {
      "area": true,
      "base": true,
      "br": true,
      "col": true,
      "command": true,
      "embed": true,
      "hr": true,
      "img": true,
      "input": true,
      "keygen": true,
      "link": true,
      "meta": true,
      "param": true,
      "source": true,
      "wbr": true
    },
        __fest_jschars = /[\\'"\/\n\r\t\b\f<>]/g,
        __fest_jschars_test = /[\\'"\/\n\r\t\b\f<>]/,
        __fest_htmlchars = /[&<>"]/g,
        __fest_htmlchars_test = /[&<>"]/,
        __fest_jshash = {
      "\"": "\\\"",
      "\\": "\\\\",
      "/": "\\/",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\b": "\\b",
      "\f": "\\f",
      "'": "\\'",
      "<": "\\u003C",
      ">": "\\u003E"
    },
        __fest_htmlhash = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;"
    },
        __fest_escapeJS = function __fest_escapeJS(value) {
      if (typeof value === 'string') {
        if (__fest_jschars_test.test(value)) {
          return value.replace(__fest_jschars, __fest_replaceJS);
        }
      }

      return value == null ? '' : value;
    },
        __fest_replaceJS = function __fest_replaceJS(chr) {
      return __fest_jshash[chr];
    },
        __fest_escapeHTML = function __fest_escapeHTML(value) {
      if (typeof value === 'string') {
        if (__fest_htmlchars_test.test(value)) {
          return value.replace(__fest_htmlchars, __fest_replaceHTML);
        }
      }

      return value == null ? '' : value;
    },
        __fest_replaceHTML = function __fest_replaceHTML(chr) {
      return __fest_htmlhash[chr];
    },
        __fest_extend = function __fest_extend(dest, src) {
      for (var key in src) {
        if (src.hasOwnProperty(key)) {
          dest[key] = src[key];
        }
      }
    },
        __fest_param = function __fest_param(fn) {
      fn.param = true;
      return fn;
    },
        i18n = __fest_self && typeof __fest_self.i18n === "function" ? __fest_self.i18n : function (str) {
      return str;
    },
        ___fest_log_error;

    if (typeof __fest_error === "undefined") {
      ___fest_log_error = typeof console !== "undefined" && console.error ? function () {
        return Function.prototype.apply.call(console.error, console, arguments);
      } : function () {};
    } else {
      ___fest_log_error = __fest_error;
    }

    ;

    function __fest_log_error(msg) {
      ___fest_log_error(msg + "\nin block \"" + __fest_debug_block + "\" at line: " + __fest_debug_line + "\nfile: " + __fest_debug_file);
    }

    function __fest_call(fn, params, cp) {
      if (cp) for (var i in params) {
        if (typeof params[i] == "function" && params[i].param) params[i] = params[i]();
      }
      return fn.call(__fest_self, params);
    }

    var data = __fest_context;
    __fest_buf += "<section class=\"s-pageheader\"><div class=\"row current-cat\"><div class=\"column\"><h1 class=\"h2\"><span style=\"margin-right: 6px;\">";

    try {
      __fest_buf += __fest_escapeHTML(data.key);
    } catch (e) {
      __fest_log_error(e.message + "4");
    }

    __fest_buf += "</span>";

    try {
      __fest_buf += __fest_escapeHTML(data.value);
    } catch (e) {
      __fest_log_error(e.message + "4");
    }

    __fest_buf += "</h1><form id=\"form-tag\"><div class=\"row\"><div class=\"large-6 mob-12 column\"><div class=\"form-field\"><input name=\"postTitle\" type=\"text\" id=\"tagTitle\" class=\"h-full-width\" placeholder=\"тег\" value=\"\" required=\"required\"/></div></div><div class=\"large-6 mob-12 column\"><button type=\"submit\" class=\"submit btn btn--primary btn--medium h-full-width\">Опубликовать</button></div></div></form></div></div></section><section class=\"s-bricks with-top-sep\"><div class=\"masonry\"><div class=\"bricks-wrapper h-group\"><div class=\"grid-sizer\"></div>";

    var i, __fest_to0, __fest_iterator0;

    try {
      __fest_iterator0 = data.articles || [];
      __fest_to0 = __fest_iterator0.length;
    } catch (e) {
      __fest_iterator0 = [];
      __fest_to0 = 0;

      __fest_log_error(e.message);
    }

    for (i = 0; i < __fest_to0; i++) {
      __fest_buf += "<article class=\"brick entry format-standard animate-this\"><div class=\"entry__text\"><div class=\"entry__header\"><div class=\"entry__meta\">";

      var j, __fest_to1, __fest_iterator1;

      try {
        __fest_iterator1 = data.articles[i].categories || [];
        __fest_to1 = __fest_iterator1.length;
      } catch (e) {
        __fest_iterator1 = [];
        __fest_to1 = 0;

        __fest_log_error(e.message);
      }

      for (j = 0; j < __fest_to1; j++) {
        __fest_buf += "<span class=\"entry__cat-links\"><a style=\"margin-right: 6px;\" href=\"#\">";

        try {
          __fest_buf += __fest_escapeHTML(data.articles[i].categories[j]);
        } catch (e) {
          __fest_log_error(e.message + "44");
        }

        __fest_buf += "</a></span>";
      }

      __fest_buf += "</div><h1 class=\"entry__title\"><a href=\"#\">";

      try {
        __fest_buf += __fest_escapeHTML(data.articles[i].article_title);
      } catch (e) {
        __fest_log_error(e.message + "49");
      }

      __fest_buf += "</a></h1></div><div class=\"entry__excerpt\"><p>";

      try {
        __fest_buf += __fest_escapeHTML(data.articles[i].description);
      } catch (e) {
        __fest_log_error(e.message + "53");
      }

      __fest_buf += "</p></div></div></article>";
    }

    __fest_buf += "</div></div><div class=\"row\"><div class=\"column large-12\"><nav class=\"pgn\"><ul><li><a class=\"pgn__prev\" href=\"#\"><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12.707 17.293L8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z\"></path></svg></a></li><li><a class=\"pgn__num\" href=\"#\">1</a></li><li><span class=\"pgn__num current\">2</span></li><li><a class=\"pgn__num\" href=\"#\">3</a></li><li><a class=\"pgn__num\" href=\"#\">4</a></li><li><a class=\"pgn__num\" href=\"#\">5</a></li><li><span class=\"pgn__num dots\">…</span></li><li><a class=\"pgn__num\" href=\"#\">8</a></li><li><a class=\"pgn__next\" href=\"#0\"><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z\"></path></svg></a></li></ul></nav></div></div></section>";
    __fest_to = __fest_chunks.length;

    if (__fest_to) {
      __fest_iterator = 0;

      for (; __fest_iterator < __fest_to; __fest_iterator++) {
        __fest_chunk = __fest_chunks[__fest_iterator];

        if (typeof __fest_chunk === "string") {
          __fest_html += __fest_chunk;
        } else {
          __fest_fn = __fest_blocks[__fest_chunk.name];
          if (__fest_fn) __fest_html += __fest_call(__fest_fn, __fest_chunk.params, __fest_chunk.cp);
        }
      }

      return __fest_html + __fest_buf;
    } else {
      return __fest_buf;
    }
  };
})();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
"use strict";

// EXTERNAL MODULE: ./static/js/components/LogoutPage/LogoutPage.tmpl.js
var LogoutPage_tmpl = __webpack_require__(604);
// EXTERNAL MODULE: ./static/js/components/SettingsPage/SettingsPage.tmpl.js
var SettingsPage_tmpl = __webpack_require__(344);
// EXTERNAL MODULE: ./static/js/components/LoginPage/LoginPage.tmpl.js
var LoginPage_tmpl = __webpack_require__(142);
// EXTERNAL MODULE: ./static/js/components/SignUpPage/SignUpPage.tmpl.js
var SignUpPage_tmpl = __webpack_require__(59);
// EXTERNAL MODULE: ./static/js/components/AddPage/AddPage.tmpl.js
var AddPage_tmpl = __webpack_require__(193);
// EXTERNAL MODULE: ./static/js/components/PostPage/PostPage.tmpl.js
var PostPage_tmpl = __webpack_require__(498);
// EXTERNAL MODULE: ./static/js/components/ProfilePage/ProfilePage.tmpl.js
var ProfilePage_tmpl = __webpack_require__(350);
// EXTERNAL MODULE: ./static/js/components/MainPage/MainPage.tmpl.js
var MainPage_tmpl = __webpack_require__(820);
// EXTERNAL MODULE: ./static/js/components/CategoryPage/CategoryPage.tmpl.js
var CategoryPage_tmpl = __webpack_require__(394);
// EXTERNAL MODULE: ./static/js/components/TagPage/TagPage.tmpl.js
var TagPage_tmpl = __webpack_require__(727);
// CONCATENATED MODULE: ./static/js/components/Header/header.js
function headerView(header, config) {
  header.innerHTML = "\n    \n    <header class=\"s-header\">\n            <div class=\"row s-header__content\">\n                <div class=\"s-header__logo\">\n                    <a class=\"logo\" href=\"/\">\n                        <img src=\"images/logo.svg\" alt=\"Homepage\">\n                    </a>\n                </div>\n                <nav class=\"s-header__nav-wrap\">\n                    <h2 class=\"s-header__nav-heading h6\">\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F</h2>\n                    <ul class=\"s-header__nav\">\n                    </ul>\n                    <a href=\"#\" title=\"Close Menu\" class=\"s-header__overlay-close close-mobile-menu\"></a>\n                </nav>\n                <a class=\"s-header__toggle-menu\" href=\"#\" title=\"Menu\"><span>\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F</span></a>\n                <div class=\"s-header__search\">\n                    <form role=\"search\" method=\"get\" class=\"s-header__search-form\" action=\"#\">\n                        <label>\n                            <span class=\"hide-content\">\u0418\u0441\u043A\u0430\u0442\u044C \u0434\u043B\u044F:</span>\n                            <input type=\"search\" class=\"s-header__search-field\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\" value=\"\" name=\"s\" title=\"Search for:\" autocomplete=\"off\">\n                        </label>\n                        <input type=\"submit\" class=\"s-header__search-submit\" value=\"Search\">\n                    </form>\n                    <a href=\"#\" title=\"Close Search\" class=\"s-header__overlay-close\"></a>\n                </div>\n                <a class=\"s-header__search-trigger\" href=\"#\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M10 18a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z\"></path></svg>\n                </a>\n            </div>\n        </header>\n    ";
  var menuFooter = document.getElementsByClassName('s-header__nav')[0];
  Object.keys(config).map(function (menuKey) {
    var _config$menuKey = config[menuKey],
        href = _config$menuKey.href,
        text = _config$menuKey.text;
    var menuItem = document.createElement('li');
    var menuLink = document.createElement('a');
    menuItem.appendChild(menuLink);
    menuLink.href = href;
    menuLink.textContent = text;
    menuLink.dataset.section = menuKey;
    return menuItem;
  }).forEach(function (element) {
    menuFooter.appendChild(element);
  });
}
// CONCATENATED MODULE: ./static/js/components/Footer/footer.js
function footerView(footer, config) {
  footer.innerHTML = "\n        <footer class=\"s-footer\">\n            <div class=\"s-footer__main\">\n                <div class=\"row\">\n                    <div class=\"column large-4 medium-6 tab-12 s-footer__info\">\n                        <h5>\u041E \u043F\u0440\u043E\u0435\u043A\u0442\u0435</h5>\n                        <p>\n                           Untitled: \u0440\u0430\u0434\u0443\u0439\u0442\u0435 \u0441\u0432\u043E\u0438\u0445 \u0447\u0438\u0442\u0430\u0442\u0435\u043B\u0435\u0439 \u0441\u0442\u0430\u0442\u044C\u044F\u043C\u0438, \u043D\u043E \u043D\u0435 \u0437\u0430\u0431\u044B\u0432\u0430\u0439\u0442\u0435 \u043F\u0440\u0438\u0434\u0443\u043C\u044B\u0432\u0430\u0442\u044C \n                           \u0434\u043B\u044F \u043D\u0438\u0445 \u043A\u0440\u0430\u0441\u0438\u0432\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435...\n                        </p>\n                    </div> \n                    <div class=\"column large-2 medium-3 tab-6 s-footer__site-links\">\n                        <h5>\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F</h5>\n                        <ul class=\"footer__menu\">\n                        </ul>\n                    </div>\n                    <div class=\"column large-2 medium-3 tab-6 s-footer__social-links\">\n                        <h5>\u0421\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0435\u0442\u0438</h5>\n                        <ul>\n                            <li><a target=\"_blank\" href=\"https://vk.com/markssu\">\u0412\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0435</a></li>\n                            <li><a target=\"_blank\" href=\"https://www.facebook.com/sadykovmark/\">\u0424\u0435\u0439\u0441\u0431\u0443\u043A</a></li>\n                            <li><a target=\"_blank\" href=\"https://www.instagram.com/mark_sadykov/\">\u0418\u043D\u0441\u0442\u0430\u0433\u0440\u0430\u043C</a></li>\n                            <li><a target=\"_blank\" href=\"https://twitter.com/mark_sadykov/\">\u0422\u0432\u0438\u0442\u0442\u0435\u0440</a></li>\n                        </ul>\n                    </div>\n                    <div class=\"column large-4 medium-12 s-footer__subscribe\">\n                        <h5>\u041F\u043E\u0438\u0441\u043A</h5>\n                        <div class=\"subscribe-form\">\n                            <form id=\"mc-form\" class=\"group\" novalidate=\"true\">\n                                <input type=\"text\" value=\"\" name=\"dEmail\" class=\"email\" id=\"mc-email\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\" required=\"\">\n                                    <input type=\"submit\" name=\"subscribe\" >\n                                    <label for=\"mc-email\" class=\"subscribe-message\"></label>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"s-footer__bottom\">\n                <div class=\"row\">\n                    <div class=\"column\">\n                        <div class=\"ss-copyright\">\n                            <span>2020</span>\n                            <span>AVM</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </footer>\n    ";
  var menuFooter = document.getElementsByClassName('footer__menu')[0];
  Object.keys(config).map(function (menuKey) {
    var _config$menuKey = config[menuKey],
        href = _config$menuKey.href,
        text = _config$menuKey.text;
    var menuItem = document.createElement('li');
    var menuLink = document.createElement('a');
    menuItem.appendChild(menuLink);
    menuLink.href = href;
    menuLink.textContent = text;
    menuLink.dataset.section = menuKey;
    return menuItem;
  }).forEach(function (element) {
    menuFooter.appendChild(element);
  });
}
// CONCATENATED MODULE: ./static/js/components/MobileMenu/usingMobileMenu.js
function mobileMenu() {
  var navWrap = document.querySelector('.s-header__nav-wrap');
  var closeNavWrap = navWrap.querySelectorAll('.s-header__overlay-close');
  var menuToggle = document.querySelector('.s-header__toggle-menu');
  var siteBody = document.querySelector('body');

  menuToggle.onclick = function (e) {
    e.preventDefault();
    e.stopPropagation();
    siteBody.classList.add('nav-wrap-is-visible');
  };

  closeNavWrap.forEach(function (item) {
    return item.onclick = function (e) {
      e.preventDefault();
      e.stopPropagation();

      if (siteBody.classList.contains('nav-wrap-is-visible')) {
        siteBody.classList.remove('nav-wrap-is-visible');
      }
    };
  });
  document.querySelector('.s-header__nav').querySelectorAll('.has-children').forEach(function (item) {
    item.querySelectorAll('a').onclick = function (e) {
      e.preventDefault();
    };
  });
}
;
// CONCATENATED MODULE: ./static/js/components/Search/search.js
function search() {
  var searchWrap = document.querySelector('.s-header__search');
  var searchTrigger = document.querySelector('.s-header__search-trigger');
  if (!(searchWrap && searchTrigger)) return;
  var searchField = searchWrap.querySelector('.s-header__search-field');
  var closeSearch = searchWrap.querySelector('.s-header__overlay-close');
  var siteBody = document.querySelector('body');
  searchTrigger.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    siteBody.classList.add('search-is-visible');
  });
  closeSearch.addEventListener('click', function (e) {
    e.stopPropagation();

    if (siteBody.classList.contains('search-is-visible')) {
      siteBody.classList.remove('search-is-visible');
    }
  });
  searchWrap.addEventListener('click', function (e) {
    if (!e.target.matches('.s-header__search-field')) {
      closeSearch.dispatchEvent(new Event('click'));
    }
  });
  searchField.addEventListener('click', function (e) {
    e.stopPropagation();
  });
  searchField.setAttribute('placeholder', 'Введите запрос');
  searchField.setAttribute('autocomplete', 'off');
}
;
// CONCATENATED MODULE: ./static/js/api/router.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var loginUrls = ['/', '/category', '/tags', '/logout', '/profile', '/settings', '/add'];
var NotLoginUrls = ['/', '/category', '/tags', '/login', '/signup'];

var Router = /*#__PURE__*/function () {
  /**
   * constructor of router
   */
  function Router(login) {
    _classCallCheck(this, Router);

    this.currentController = null;
    this.controllersMap = new Map();
    this.login = login;
  }
  /**
   * adding route of controller
   * @param  {string} url - url of route
   * @param  {function} controller - controller of page
   */


  _createClass(Router, [{
    key: "addRoute",
    value: function addRoute(url, controller) {
      this.controllersMap.set(url, controller);
    }
    /**
     * route of controller
     */

  }, {
    key: "route",
    value: function route() {
      var _this = this;

      window.addEventListener('popstate', function () {
        var path = window.location.pathname;

        _this.handleRoute(path);
      });
      this.handleRoute(window.location.pathname);
    }
    /**
     * handle of route
     * @param  {string} url - url of route
     */

  }, {
    key: "handleRoute",
    value: function handleRoute(url) {
      console.log(url);

      if (this.login && loginUrls.includes(url, 0) || !this.login && NotLoginUrls.includes(url, 0)) {
        var activeController = this.controllersMap.get(url);
        this.currentController = activeController;
        this.currentController.action();
      } else {
        window.history.pushState({}, '', '/');
        window.history.pushState({}, '', '/');
        window.history.back();
      }
    }
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event
     * Note that just calling history.pushState() or history.replaceState() 
     * won't trigger a popstate event. 
     * The popstate event will be triggered by doing 
     * a browser action such as a click on the back or forward button 
     * (or calling history.back() or history.forward() in JavaScript).
     */

    /**
     * redirect of route
     * @param  {string} url - url of route
     */

  }, {
    key: "redirect",
    value: function redirect(url) {
      if (this.login && loginUrls.includes(url, 0) || !this.login && NotLoginUrls.includes(url, 0)) {
        window.history.pushState({}, '', url);
        window.history.pushState({}, '', url);
        window.history.back();
      } else {
        window.history.pushState({}, '', '/');
        window.history.pushState({}, '', '/');
        window.history.back();
      }
    }
  }, {
    key: "isLogin",
    value: function isLogin(state) {
      this.login = state;
    }
  }]);

  return Router;
}();


// CONCATENATED MODULE: ./static/js/api/model.js
function model_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function Model() {
  model_classCallCheck(this, Model);
};


// CONCATENATED MODULE: ./static/js/api/fetch.js
function fetch_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function fetch_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function fetch_createClass(Constructor, protoProps, staticProps) { if (protoProps) fetch_defineProperties(Constructor.prototype, protoProps); if (staticProps) fetch_defineProperties(Constructor, staticProps); return Constructor; }

var serverAddress = 'http://95.163.250.127:1323'; // const serverAddress = 'http://localhost:1323'

var Fetching = /*#__PURE__*/function () {
  function Fetching() {
    fetch_classCallCheck(this, Fetching);
  }

  fetch_createClass(Fetching, null, [{
    key: "queryGet",

    /**
     * This is a get query.
     *
     * @param {string} host - host of API
     * @param {string} url - query url
     * @return {function} - call of fetch
     *
     * @example
     *
     *     queryGet('http://localhost:1323', '/')
     */
    value: function queryGet() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$host = _ref.host,
          host = _ref$host === void 0 ? serverAddress : _ref$host,
          _ref$url = _ref.url,
          url = _ref$url === void 0 ? '/' : _ref$url;

      return fetch(host + url, {
        method: 'GET',
        credentials: 'include'
      })["catch"](function (err) {
        console.log('get error');
      });
    }
    /**
     * This is a post query.
     *
     * @param {string} host - host of API
     * @param {string} url - query url
     * @param {string} body - json body of query
     * @param {object} headers - headers of query
     * @return {function} - call of fetch
     *
     * @example
     *
     *     queryPost('http://localhost:1323', '/', '"id": "1"', {})
     */

  }, {
    key: "queryPost",
    value: function queryPost() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$host = _ref2.host,
          host = _ref2$host === void 0 ? serverAddress : _ref2$host,
          _ref2$url = _ref2.url,
          url = _ref2$url === void 0 ? '/' : _ref2$url,
          _ref2$body = _ref2.body,
          body = _ref2$body === void 0 ? '' : _ref2$body,
          _ref2$headers = _ref2.headers,
          headers = _ref2$headers === void 0 ? {} : _ref2$headers;

      return fetch(host + url, {
        method: 'POST',
        credentials: 'include',
        headers: headers,
        body: body
      })["catch"](function (err) {
        console.log('post error');
      });
    }
    /**
     * This is a update query.
     *
     * @param {string} host - host of API
     * @param {string} url - query url
     * @param {string} body - json body of query
     * @param {object} headers - headers of query
     * @return {function} - call of fetch
     *
     * @example
     *
     *     queryUpdate('http://localhost:1323', '/', '"id": "1"', {})
     */

  }, {
    key: "queryUpdate",
    value: function queryUpdate() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$host = _ref3.host,
          host = _ref3$host === void 0 ? serverAddress : _ref3$host,
          _ref3$url = _ref3.url,
          url = _ref3$url === void 0 ? '/' : _ref3$url,
          _ref3$body = _ref3.body,
          body = _ref3$body === void 0 ? {} : _ref3$body,
          _ref3$headers = _ref3.headers,
          headers = _ref3$headers === void 0 ? {} : _ref3$headers;

      return fetch(host + url, {
        method: 'PUT',
        credentials: 'include',
        headers: headers,
        body: body
      })["catch"](function (err) {
        if (!navigator.onLine) {
          location.reload();
        }
      });
    }
    /**
     * This is a delete query.
     *
     * @param {string} host - host of API
     * @param {string} url - query url
     * @param {object} headers - headers of query
     * @return {function} - call of fetch
     *
     * @example
     *
     *     queryDelete('http://localhost:1323', '/', {})
     */

  }, {
    key: "queryDelete",
    value: function queryDelete() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$host = _ref4.host,
          host = _ref4$host === void 0 ? serverAddress : _ref4$host,
          _ref4$url = _ref4.url,
          url = _ref4$url === void 0 ? '/' : _ref4$url,
          _ref4$headers = _ref4.headers,
          headers = _ref4$headers === void 0 ? {} : _ref4$headers;

      return fetch(host + url, {
        method: 'DELETE',
        credentials: 'include',
        headers: headers
      })["catch"](function (err) {
        if (!navigator.onLine) {
          location.reload();
        }
      });
    }
    /**
     * This is a delete query.
     *
     * @param {string} name - name of user
     * @return {string} - cookie
     *
     * @example
     *
     *     getCookie('mark')
     */

  }, {
    key: "getCookie",
    value: function getCookie(name) {
      var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
      return match ? match[2] : '';
    }
  }]);

  return Fetching;
}();


// CONCATENATED MODULE: ./static/js/settings/config.js
var URLS = {
  getUserDataUrl: '/api/profile',
  getUserArticles: '/api/article/author/',
  makeLogin: '/api/signin',
  makeSignUp: '/api/signup',
  updateUser: '/api/setting',
  makeLogout: '/api/logout',
  makeArticle: '/api/article',
  getAvatar: '/api/avatar',
  upAvatar: '/api/setting/avatar',
  getArticlesByCategory: '/api/article/category/',
  getArticlesBySubscribe: '/api/article/subscribe/',
  addSubscribe: '/api/subscribe',
  getArticlesByTag: '/api/article/tag/'
};
// CONCATENATED MODULE: ./static/js/utils/xss.js
function xss_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function xss_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function xss_createClass(Constructor, protoProps, staticProps) { if (protoProps) xss_defineProperties(Constructor.prototype, protoProps); if (staticProps) xss_defineProperties(Constructor, staticProps); return Constructor; }

var Xss = /*#__PURE__*/function () {
  function Xss() {
    xss_classCallCheck(this, Xss);
  }

  xss_createClass(Xss, null, [{
    key: "removeScript",
    value: function removeScript(string) {
      var div = document.createElement("div");
      div.innerHTML = string;
      var scripts = div.getElementsByTagName("script");
      var i = scripts.length;

      while (i--) {
        scripts[i].parentNode.removeChild(scripts[i]);
      }

      return div.innerHTML;
    }
  }]);

  return Xss;
}();


// CONCATENATED MODULE: ./static/js/models/user-model.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function user_model_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function user_model_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function user_model_createClass(Constructor, protoProps, staticProps) { if (protoProps) user_model_defineProperties(Constructor.prototype, protoProps); if (staticProps) user_model_defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
headers.append('Access-Control-Allow-Credentials', 'true');
/**
 * TODO:
 * перенести часть логики обработки запросов
 * из соответствубщих компонентов (контроллеров)
 */

var UserModel = /*#__PURE__*/function (_Model) {
  _inherits(UserModel, _Model);

  var _super = _createSuper(UserModel);

  function UserModel() {
    var _this;

    user_model_classCallCheck(this, UserModel);

    _this = _super.call(this);
    _this.user = null;
    return _this;
  }
  /**
   * This is a request to get user avatar.
   *
   * @param {string} author - name of user
   * @return {function} - call of fetch method
   *
   * @example
   *
   *     getUserAvatar('mark')
   */


  user_model_createClass(UserModel, null, [{
    key: "getUserAvatar",
    value: function getUserAvatar() {
      var author = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      author = Xss.removeScript(author);

      if (author !== '') {
        author = '/title/' + author;
      }

      return Fetching.queryGet({
        url: URLS.getAvatar + author
      });
    }
    /**
     * This is a request to get user data.
     *
     * @return {function} - call of fetch method
     *
     * @example
     *
     *     getUserAvatar()
     */

  }, {
    key: "getUserData",
    value: function getUserData() {
      return Fetching.queryGet({
        url: URLS.getUserDataUrl
      });
    }
    /**
     * This is a authorization request.
     *
     * @param {string} login - login  of user
     * @param {string} password - password of user
     * @return {function} - call of fetch method
     *
     * @example
     *
     *     makeLogin('mark', 'secret')
     */

  }, {
    key: "makeLogin",
    value: function makeLogin(_ref) {
      var _ref$login = _ref.login,
          login = _ref$login === void 0 ? '' : _ref$login,
          _ref$password = _ref.password,
          password = _ref$password === void 0 ? '' : _ref$password;
      login = Xss.removeScript(login);
      password = Xss.removeScript(password);
      return Fetching.queryPost({
        url: URLS.makeLogin,
        body: JSON.stringify({
          'Login': login,
          'Password': password
        }),
        headers: {
          'X-CSRF-TOKEN': Fetching.getCookie('X-CSRF-TOKEN'),
          'Content-Type': 'application/json'
        }
      });
    }
    /**
     * This is a registration request.
     *
     * @param {string} login - login  of user
     * @param {string} email - email  of user
     * @param {string} password - password of user
     * @return {function} - call of fetch method
     *
     * @example
     *
     *     makeSignUp('mark', 'email@mail.ru', 'secret')
     */

  }, {
    key: "makeSignUp",
    value: function makeSignUp(_ref2) {
      var _ref2$login = _ref2.login,
          login = _ref2$login === void 0 ? '' : _ref2$login,
          _ref2$email = _ref2.email,
          email = _ref2$email === void 0 ? '' : _ref2$email,
          _ref2$password = _ref2.password,
          password = _ref2$password === void 0 ? '' : _ref2$password;
      login = Xss.removeScript(login);
      email = Xss.removeScript(email);
      password = Xss.removeScript(password);
      return Fetching.queryPost({
        url: URLS.makeSignUp,
        body: JSON.stringify({
          'Login': login,
          'Email': email,
          'Password': password
        }),
        headers: {
          'X-CSRF-TOKEN': Fetching.getCookie('X-CSRF-TOKEN'),
          'Content-Type': 'application/json'
        }
      });
    }
    /**
     * This is a profile data update request.
     *
     * @param {string} login - login  of user
     * @param {string} email - email  of user
     * @param {string} password - password of user
     * @return {function} - call of fetch method
     *
     * @example
     *
     *     updateUser('mark', 'email@mail.ru', 'secret')
     */

  }, {
    key: "updateUser",
    value: function updateUser() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$login = _ref3.login,
          login = _ref3$login === void 0 ? '' : _ref3$login,
          _ref3$email = _ref3.email,
          email = _ref3$email === void 0 ? '' : _ref3$email,
          _ref3$password = _ref3.password,
          password = _ref3$password === void 0 ? '' : _ref3$password;

      login = Xss.removeScript(login);
      email = Xss.removeScript(email);
      password = Xss.removeScript(password);
      return Fetching.queryUpdate({
        url: URLS.updateUser,
        body: JSON.stringify({
          'login': login,
          'email': email,
          'password': password
        }),
        headers: {
          'X-CSRF-TOKEN': Fetching.getCookie('X-CSRF-TOKEN'),
          'Content-Type': 'application/json'
        }
      });
    }
    /**
     * This is a request to update user avatar.
     *
     * @param {FormData} data - FormData with image of user
     * @return {function} - call of fetch method
     *
     * @example
     *
     *     updateUserAvatar(new FormData(form))
     */

  }, {
    key: "updateUserAvatar",
    value: function updateUserAvatar(data) {
      return Fetching.queryUpdate({
        url: URLS.upAvatar,
        body: data,
        headers: {
          'X-CSRF-TOKEN': Fetching.getCookie('X-CSRF-TOKEN')
        }
      });
    }
    /**
     * This is a request to leave.
     *
     * @return {function} - call of fetch method
     *
     * @example
     *
     *     makeLogout()
     */

  }, {
    key: "makeLogout",
    value: function makeLogout() {
      return Fetching.queryPost({
        url: URLS.makeLogout,
        headers: {
          'X-CSRF-TOKEN': Fetching.getCookie('X-CSRF-TOKEN')
        }
      });
    }
  }]);

  return UserModel;
}(Model);


// CONCATENATED MODULE: ./static/js/api/controller.js
function controller_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function Controller() {
  controller_classCallCheck(this, Controller);

  this.data = {};
  this.config = {
    main: {
      href: '/',
      text: 'Главная'
    },
    category: {
      href: '/category',
      text: 'Категории'
    },
    tag: {
      href: '/tags',
      text: 'Теги'
    },
    profile: {
      href: '/profile',
      text: 'Профиль'
    },
    settings: {
      href: '/settings',
      text: 'Настройки'
    },
    add: {
      href: '/add',
      text: 'Добавить'
    },
    logout: {
      href: '/logout',
      text: 'Выйти'
    }
  };
  this.configLogout = {
    main: {
      href: '/',
      text: 'Главная'
    },
    category: {
      href: '/category',
      text: 'Категории'
    },
    tag: {
      href: '/tags',
      text: 'Теги'
    },
    signup: {
      href: '/signup',
      text: 'Зарегистрироваться'
    },
    login: {
      href: '/login',
      text: 'Авторизоваться'
    }
  };
};


// CONCATENATED MODULE: ./static/js/utils/validation.js
function validation_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function validation_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function validation_createClass(Constructor, protoProps, staticProps) { if (protoProps) validation_defineProperties(Constructor.prototype, protoProps); if (staticProps) validation_defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* 
TODO: 
сообщения об ошибке (некоторые поля проверяются по нескольким параметрам)
использовать регулярные выражения
что является логином (почта, никнейм, телефон)
*/
var Validation = /*#__PURE__*/function () {
  function Validation() {
    validation_classCallCheck(this, Validation);
  }

  validation_createClass(Validation, null, [{
    key: "validatePassword",

    /**
     * This is validation of length of Login.
     *
     * @param {string} login - login of user
     * @return {boolean} - result of validation
     *
     * @example
     *
     *     validateLoginLength('smtlogin')
     */

    /**
     * This is validation of right of Login.
     *
     * @param {string} login - login of user
     * @return {string} - result of validation
     *
     * @example
     *
     *     validateLogin('smtlogin')
     */

    /**
     * This is validation of right of email.
     *
     * @param {string} email - email of user
     * @return {string} - result of validation
     *
     * @example
     *
     *     validateEmail('smtemail')
     */

    /**
     * This is a string check.
     *
     * @param {string} input - input from form
     * @return {boolean} - result of checking
     *
     * @example
     *
     *     isString('input')
     */

    /**
     * This is a empty check.
     *
     * @param {string} input - input from form
     * @return {boolean} - result of checking
     *
     * @example
     *
     *     isEmpty('input')
     */

    /**
     * This is a password check.
     *
     * @param {string} password - password of user
     * @return {Array} - result of checking
     *
     * @example
     *
     *     validatePassword('wjfkljweflj434340')
     */
    value: function validatePassword(password) {
      // const re = /^[a-z+A-Z+\d+[\-_!@#$%\^&*]+]{8,}$/;
      // return re.test(password);
      var errors = [];

      if (this.isEmpty(password) || !this.isString(password)) {
        errors.push('empty or invalid');
      }

      if (password.length < 8) {
        errors.push('short');
      }

      if (!/[0-9]/.test(password)) {
        errors.push('no nums');
      }

      if (password.match(/\d+/g)) {
        if (password.match(/\d+/g).join('').length < 2) {
          errors.push('few nums');
        }
      }

      if (!/[A-z]/.test(password)) {
        errors.push('no latin');
      }

      if (!/^[\w\dA-z]+$/.test(password)) {
        errors.push('nums and latin');
      }

      return errors;
    }
    /**
     * This is a password equality check.
     *
     * @param {string} pass - password of user
     * @param {string} repPass - repeated password of user
     * @return {boolean} - result of checking
     *
     * @example
     *
     *     validatePasswordRepeat('wjfkljweflj434340', 'wjfkljweflj434340')
     */

  }, {
    key: "validatePasswordRepeat",
    value: function validatePasswordRepeat(pass, repPass) {
      if (pass !== repPass) {
        return false;
      }

      return true;
    }
  }]);

  return Validation;
}();

_defineProperty(Validation, "validateLoginLength", function (login) {
  if (login.length < 8) {
    return false;
  }

  return true;
});

_defineProperty(Validation, "validateLogin", function (login) {
  var re = /^[a-zA-Z][a-zA-Z0-9\-_]{7,}$/;
  return re.test(login);
});

_defineProperty(Validation, "validateEmail", function (email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
});

_defineProperty(Validation, "isString", function (input) {
  return typeof input === 'string' || input instanceof String;
});

_defineProperty(Validation, "isEmpty", function (input) {
  return !input;
});


// CONCATENATED MODULE: ./static/js/api/view.js
function view_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function view_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function view_createClass(Constructor, protoProps, staticProps) { if (protoProps) view_defineProperties(Constructor.prototype, protoProps); if (staticProps) view_defineProperties(Constructor, staticProps); return Constructor; }

var View = /*#__PURE__*/function () {
  function View() {
    view_classCallCheck(this, View);

    this.parent = {};
    this.template = '';
  }

  view_createClass(View, [{
    key: "render",
    value: function render(data) {
      this.parent.innerHTML = window.fest[this.template](data);
    }
  }]);

  return View;
}();


// CONCATENATED MODULE: ./static/js/views/login-view.js
function login_view_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { login_view_typeof = function _typeof(obj) { return typeof obj; }; } else { login_view_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return login_view_typeof(obj); }

function login_view_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function login_view_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) login_view_setPrototypeOf(subClass, superClass); }

function login_view_setPrototypeOf(o, p) { login_view_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return login_view_setPrototypeOf(o, p); }

function login_view_createSuper(Derived) { var hasNativeReflectConstruct = login_view_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = login_view_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = login_view_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return login_view_possibleConstructorReturn(this, result); }; }

function login_view_possibleConstructorReturn(self, call) { if (call && (login_view_typeof(call) === "object" || typeof call === "function")) { return call; } return login_view_assertThisInitialized(self); }

function login_view_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function login_view_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function login_view_getPrototypeOf(o) { login_view_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return login_view_getPrototypeOf(o); }



var LoginView = /*#__PURE__*/function (_View) {
  login_view_inherits(LoginView, _View);

  var _super = login_view_createSuper(LoginView);

  /**
   * constructor description
   * @param  {HTMLElement} parent - HTML container
   */
  function LoginView(parent) {
    var _this;

    login_view_classCallCheck(this, LoginView);

    _this = _super.call(this);
    _this.parent = parent;
    _this.template = 'js/components/LoginPage/LoginPage.tmpl';
    return _this;
  }

  return LoginView;
}(View);


// CONCATENATED MODULE: ./static/js/controllers/login-controller.js
function login_controller_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { login_controller_typeof = function _typeof(obj) { return typeof obj; }; } else { login_controller_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return login_controller_typeof(obj); }

function login_controller_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function login_controller_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function login_controller_createClass(Constructor, protoProps, staticProps) { if (protoProps) login_controller_defineProperties(Constructor.prototype, protoProps); if (staticProps) login_controller_defineProperties(Constructor, staticProps); return Constructor; }

function login_controller_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) login_controller_setPrototypeOf(subClass, superClass); }

function login_controller_setPrototypeOf(o, p) { login_controller_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return login_controller_setPrototypeOf(o, p); }

function login_controller_createSuper(Derived) { var hasNativeReflectConstruct = login_controller_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = login_controller_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = login_controller_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return login_controller_possibleConstructorReturn(this, result); }; }

function login_controller_possibleConstructorReturn(self, call) { if (call && (login_controller_typeof(call) === "object" || typeof call === "function")) { return call; } return login_controller_assertThisInitialized(self); }

function login_controller_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function login_controller_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function login_controller_getPrototypeOf(o) { login_controller_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return login_controller_getPrototypeOf(o); }








var LoginController = /*#__PURE__*/function (_Controller) {
  login_controller_inherits(LoginController, _Controller);

  var _super = login_controller_createSuper(LoginController);

  /**
   * constructor of controller
   * @param  {HTMLElement} parent - HTML container
   */
  function LoginController(parent, header, footer, router) {
    var _this;

    login_controller_classCallCheck(this, LoginController);

    _this = _super.call(this);
    _this.parent = parent;
    _this.headerContainer = header;
    _this.footerContainer = footer;
    _this.router = router;
    _this.view = new LoginView(_this.parent);
    return _this;
  }
  /**
   * error processing
   * @param  {HTMLElement} divMsgError - HTML container
   */


  login_controller_createClass(LoginController, [{
    key: "addErrorMsg",
    value: function addErrorMsg(divMsgError) {
      var msgLabel = document.createElement("Label");
      msgLabel.innerHTML = 'Длина логина должна быть не менее 8 символов';
      msgLabel.style.color = 'red';
      divMsgError.appendChild(msgLabel);
    }
    /**
     * check login processing
     * @param  {HTMLElement} divMsgError - HTML container
     * @param  {object} loginInput - HTML input
     * @param  {object} passwordInput - HTML input
     * @return {object} - login, password after checking
     */

  }, {
    key: "checkLogin",
    value: function checkLogin(divMsgError, loginInput, passwordInput) {
      var login = loginInput.value.trim();
      var password = passwordInput.value.trim();
      var checkLoginLength = Validation.validateLoginLength(login);

      if (!checkLoginLength) {
        this.addErrorMsg(divMsgError);
        return void 0;
      }

      return {
        login: login,
        password: password
      };
    }
    /**
     * action of controller, logic of login
     */

  }, {
    key: "action",
    value: function action() {
      var _this2 = this;

      this.view.render(this.data);
      var form = document.querySelector('form#form-login');
      var loginInput = form.querySelector('input[type="text"]');
      console.log("LI: ", loginInput);
      var passwordInput = form.querySelector('input[type="password"]');
      var divMsgError = document.createElement('div');
      form.parentNode.insertBefore(divMsgError, form);
      form.addEventListener('submit', function (evt) {
        evt.preventDefault();

        while (divMsgError.firstChild) {
          divMsgError.removeChild(divMsgError.lastChild);
        }

        var authData = _this2.checkLogin(divMsgError, loginInput, passwordInput);

        if (authData === undefined) {
          return;
        }

        var login = authData.login,
            password = authData.password; // TODO: вынести часть логики в модель

        UserModel.makeLogin({
          login: login,
          password: password
        }).then(function (_ref) {
          var status = _ref.status;

          if (status === 200) {
            _this2.router.isLogin(true);

            _this2.router.redirect('/profile');

            headerView(_this2.headerContainer, _this2.config);
            footerView(_this2.footerContainer, _this2.config);
          }

          if (status === 400) {
            _this2.data.login = true;

            _this2.action();
          }
        })["catch"](function (err) {
          if (err instanceof Error) {
            console.log(err);
          }

          _this2.data.login = true;

          _this2.action();
        });
      });
      loginInput.addEventListener('blur', function (evt) {
        evt.preventDefault();

        while (divMsgError.firstChild) {
          divMsgError.removeChild(divMsgError.lastChild);
        }

        _this2.checkLogin(divMsgError, loginInput, passwordInput);
      });
      passwordInput.addEventListener('blur', function (evt) {
        evt.preventDefault();

        while (divMsgError.firstChild) {
          divMsgError.removeChild(divMsgError.lastChild);
        }

        _this2.checkLogin(divMsgError, loginInput, passwordInput);
      });
    }
  }]);

  return LoginController;
}(Controller);


// CONCATENATED MODULE: ./static/js/views/logout-view.js
function logout_view_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { logout_view_typeof = function _typeof(obj) { return typeof obj; }; } else { logout_view_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return logout_view_typeof(obj); }

function logout_view_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function logout_view_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) logout_view_setPrototypeOf(subClass, superClass); }

function logout_view_setPrototypeOf(o, p) { logout_view_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return logout_view_setPrototypeOf(o, p); }

function logout_view_createSuper(Derived) { var hasNativeReflectConstruct = logout_view_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = logout_view_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = logout_view_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return logout_view_possibleConstructorReturn(this, result); }; }

function logout_view_possibleConstructorReturn(self, call) { if (call && (logout_view_typeof(call) === "object" || typeof call === "function")) { return call; } return logout_view_assertThisInitialized(self); }

function logout_view_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function logout_view_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function logout_view_getPrototypeOf(o) { logout_view_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return logout_view_getPrototypeOf(o); }



var SettingsView = /*#__PURE__*/function (_View) {
  logout_view_inherits(SettingsView, _View);

  var _super = logout_view_createSuper(SettingsView);

  /**
   * constructor description
   * @param  {HTMLElement} parent - HTML container
   */
  function SettingsView(parent) {
    var _this;

    logout_view_classCallCheck(this, SettingsView);

    _this = _super.call(this);
    _this.parent = parent;
    _this.template = 'js/components/LogoutPage/LogoutPage.tmpl';
    return _this;
  }

  return SettingsView;
}(View);


// CONCATENATED MODULE: ./static/js/controllers/logout-controller.js
function logout_controller_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { logout_controller_typeof = function _typeof(obj) { return typeof obj; }; } else { logout_controller_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return logout_controller_typeof(obj); }

function logout_controller_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function logout_controller_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function logout_controller_createClass(Constructor, protoProps, staticProps) { if (protoProps) logout_controller_defineProperties(Constructor.prototype, protoProps); if (staticProps) logout_controller_defineProperties(Constructor, staticProps); return Constructor; }

function logout_controller_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) logout_controller_setPrototypeOf(subClass, superClass); }

function logout_controller_setPrototypeOf(o, p) { logout_controller_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return logout_controller_setPrototypeOf(o, p); }

function logout_controller_createSuper(Derived) { var hasNativeReflectConstruct = logout_controller_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = logout_controller_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = logout_controller_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return logout_controller_possibleConstructorReturn(this, result); }; }

function logout_controller_possibleConstructorReturn(self, call) { if (call && (logout_controller_typeof(call) === "object" || typeof call === "function")) { return call; } return logout_controller_assertThisInitialized(self); }

function logout_controller_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function logout_controller_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function logout_controller_getPrototypeOf(o) { logout_controller_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return logout_controller_getPrototypeOf(o); }








var LogOutController = /*#__PURE__*/function (_Controller) {
  logout_controller_inherits(LogOutController, _Controller);

  var _super = logout_controller_createSuper(LogOutController);

  /**
   * constructor of controller
   * @param  {HTMLElement} parent - HTML container
   */
  function LogOutController(parent, header, footer, router) {
    var _this;

    logout_controller_classCallCheck(this, LogOutController);

    _this = _super.call(this);
    _this.parent = parent;
    _this.headerContainer = header;
    _this.footerContainer = footer;
    _this.router = router;
    _this.view = new SettingsView(parent);
    return _this;
  }
  /**
   * action of controller, logic of logout
   */


  logout_controller_createClass(LogOutController, [{
    key: "action",
    value: function action() {
      var _this2 = this;

      this.view.render(this.data);
      UserModel.makeLogout().then(function (_ref) {
        var status = _ref.status;

        if (status === 200) {
          _this2.router.redirect('/');

          headerView(_this2.headerContainer, _this2.configLogout);
          footerView(_this2.footerContainer, _this2.configLogout);
        } else {
          console.log('no logout');
        }
      })["catch"](function (err) {
        if (err instanceof Error) {
          console.log(err);
        }
      });
    }
  }]);

  return LogOutController;
}(Controller);


// CONCATENATED MODULE: ./static/js/views/signup-view.js
function signup_view_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { signup_view_typeof = function _typeof(obj) { return typeof obj; }; } else { signup_view_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return signup_view_typeof(obj); }

function signup_view_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function signup_view_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) signup_view_setPrototypeOf(subClass, superClass); }

function signup_view_setPrototypeOf(o, p) { signup_view_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return signup_view_setPrototypeOf(o, p); }

function signup_view_createSuper(Derived) { var hasNativeReflectConstruct = signup_view_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = signup_view_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = signup_view_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return signup_view_possibleConstructorReturn(this, result); }; }

function signup_view_possibleConstructorReturn(self, call) { if (call && (signup_view_typeof(call) === "object" || typeof call === "function")) { return call; } return signup_view_assertThisInitialized(self); }

function signup_view_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function signup_view_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function signup_view_getPrototypeOf(o) { signup_view_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return signup_view_getPrototypeOf(o); }



var SignUpView = /*#__PURE__*/function (_View) {
  signup_view_inherits(SignUpView, _View);

  var _super = signup_view_createSuper(SignUpView);

  /**
   * constructor description
   * @param  {HTMLElement} parent - HTML container
   */
  function SignUpView(parent) {
    var _this;

    signup_view_classCallCheck(this, SignUpView);

    _this = _super.call(this);
    _this.parent = parent;
    _this.template = 'js/components/SignUpPage/SignUpPage.tmpl';
    return _this;
  }

  return SignUpView;
}(View);


// CONCATENATED MODULE: ./static/js/controllers/signup-controller.js
function signup_controller_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { signup_controller_typeof = function _typeof(obj) { return typeof obj; }; } else { signup_controller_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return signup_controller_typeof(obj); }

function signup_controller_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function signup_controller_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function signup_controller_createClass(Constructor, protoProps, staticProps) { if (protoProps) signup_controller_defineProperties(Constructor.prototype, protoProps); if (staticProps) signup_controller_defineProperties(Constructor, staticProps); return Constructor; }

function signup_controller_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) signup_controller_setPrototypeOf(subClass, superClass); }

function signup_controller_setPrototypeOf(o, p) { signup_controller_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return signup_controller_setPrototypeOf(o, p); }

function signup_controller_createSuper(Derived) { var hasNativeReflectConstruct = signup_controller_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = signup_controller_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = signup_controller_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return signup_controller_possibleConstructorReturn(this, result); }; }

function signup_controller_possibleConstructorReturn(self, call) { if (call && (signup_controller_typeof(call) === "object" || typeof call === "function")) { return call; } return signup_controller_assertThisInitialized(self); }

function signup_controller_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function signup_controller_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function signup_controller_getPrototypeOf(o) { signup_controller_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return signup_controller_getPrototypeOf(o); }








var SignUpController = /*#__PURE__*/function (_Controller) {
  signup_controller_inherits(SignUpController, _Controller);

  var _super = signup_controller_createSuper(SignUpController);

  /**
   * constructor of controller
   * @param  {HTMLElement} parent - HTML container
   */
  function SignUpController(parent, header, footer, router) {
    var _this;

    signup_controller_classCallCheck(this, SignUpController);

    _this = _super.call(this);
    _this.parent = parent;
    _this.headerContainer = header;
    _this.footerContainer = footer;
    _this.router = router;
    _this.view = new SignUpView(_this.parent);
    return _this;
  }
  /**
   * error processing
   * @param  {HTMLElement} divMsgError - HTML container
   * @param  {Object} inputError - input element
   */


  signup_controller_createClass(SignUpController, [{
    key: "addErrorMsgLogin",
    value: function addErrorMsgLogin(form) {
      var errorLogin = form.querySelector('label#errorLogin');
      errorLogin.style.color = 'red';
      errorLogin.innerHTML = 'Длина логина должна быть не менее 8 символов, логин не может содержать специальные символы';
    }
  }, {
    key: "addErrorMsgEmail",
    value: function addErrorMsgEmail(form) {
      var errorEmail = form.querySelector('label#errorEmail');
      errorEmail.style.color = 'red';
      errorEmail.innerHTML = 'Неверно введена почта';
    }
  }, {
    key: "addErrorMsgPassword",
    value: function addErrorMsgPassword(form) {
      var errorPassword = form.querySelector('label#errorPassword');
      errorPassword.style.color = 'red';
      errorPassword.innerHTML = 'В пароле должны содержатся латинские буквы и десятичные цифры, ' + 'длина не менее 8 символов';
    }
    /**
     * check signup processing
     * @param  {HTMLElement} divMsgError - HTML container
     * @param  {object} loginInput - HTML input
     * @param  {object} emailInput - HTML input
     * @param  {object} passwordInput - HTML input
     * @return {object} - login, email, password after checking
     */

  }, {
    key: "checkSignup",
    value: function checkSignup(form, loginInput, emailInput, passwordInput) {
      var login = loginInput.value.trim();
      var email = emailInput.value.trim();
      var password = passwordInput.value.trim();
      var checkLogin = Validation.validateLogin(login);
      var notValidated = false;

      if (!checkLogin) {
        this.addErrorMsgLogin(form);
        notValidated = true;
      } else {
        var errorLogin = form.querySelector('label#errorLogin');
        errorLogin.innerHTML = '';
      }

      var checkEmail = Validation.validateEmail(email);

      if (!checkEmail) {
        this.addErrorMsgEmail(form);
        notValidated = true;
      } else {
        var errorEmail = form.querySelector('label#errorEmail');
        errorEmail.innerHTML = '';
      }

      var checkPass = Validation.validatePassword(password);

      if (typeof checkPass !== 'undefined' && checkPass.length > 0) {
        this.addErrorMsgPassword(form);
        notValidated = true;
      } else {
        var errorPassword = form.querySelector('label#errorPassword');
        errorPassword.innerHTML = '';
      }

      if (notValidated) {
        return void 0;
      }

      return {
        login: login,
        email: email,
        password: password
      };
    }
    /**
     * action of controller, logic of signup
     */

  }, {
    key: "action",
    value: function action() {
      var _this2 = this;

      this.view.render(this.data);
      var form = document.querySelector('form#form-sing-up');
      var loginInput = form.querySelector('input#inputLogin');
      var emailInput = form.querySelector('input#inputEmail');
      var passwordInput = form.querySelector('input#inputPassword');
      form.addEventListener('submit', function (evt) {
        evt.preventDefault();

        var regData = _this2.checkSignup(form, loginInput, emailInput, passwordInput);

        if (!regData) {
          return;
        }

        var login = regData.login,
            email = regData.email,
            password = regData.password;
        UserModel.makeSignUp({
          login: login,
          email: email,
          password: password
        }).then(function (_ref) {
          var status = _ref.status;

          if (status === 201) {
            _this2.data.sign = true;
            _this2.data.success = false;

            _this2.action();

            UserModel.makeLogin({
              login: login,
              password: password
            }).then(function (_ref2) {
              var status = _ref2.status;

              if (status === 200) {
                _this2.router.isLogin(true);

                _this2.router.redirect('/profile');

                headerView(_this2.headerContainer, _this2.config);
                footerView(_this2.footerContainer, _this2.config);
              }

              if (status === 400) {
                _this2.data.sign = false;
                _this2.data.success = true;

                _this2.action();
              }
            })["catch"](function (err) {
              if (err instanceof Error) {
                console.log(err);
              }

              _this2.data.sign = false;
              _this2.data.success = true;

              _this2.action();
            });
          } else {
            console.log('no sign');
            _this2.data.sign = false;
            _this2.data.success = true;

            _this2.action();
          }
        })["catch"](function (err) {
          if (err instanceof Error) {
            console.log(err);
          }

          _this2.data.sign = false;
          _this2.data.success = true;

          _this2.action();
        });
      });
      loginInput.addEventListener('blur', function (evt) {
        evt.preventDefault();

        _this2.checkSignup(form, loginInput, emailInput, passwordInput);
      });
      emailInput.addEventListener('blur', function (evt) {
        evt.preventDefault();

        _this2.checkSignup(form, loginInput, emailInput, passwordInput);
      });
      passwordInput.addEventListener('blur', function (evt) {
        evt.preventDefault();

        _this2.checkSignup(form, loginInput, emailInput, passwordInput);
      });
    }
  }]);

  return SignUpController;
}(Controller);


// CONCATENATED MODULE: ./static/js/settings/categories.js
var categories = ['фотография', 'дизайн', 'искусство', 'поэзия', 'проза'];
// CONCATENATED MODULE: ./static/js/views/addpage-view.js
function addpage_view_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { addpage_view_typeof = function _typeof(obj) { return typeof obj; }; } else { addpage_view_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return addpage_view_typeof(obj); }

function addpage_view_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function addpage_view_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) addpage_view_setPrototypeOf(subClass, superClass); }

function addpage_view_setPrototypeOf(o, p) { addpage_view_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return addpage_view_setPrototypeOf(o, p); }

function addpage_view_createSuper(Derived) { var hasNativeReflectConstruct = addpage_view_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = addpage_view_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = addpage_view_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return addpage_view_possibleConstructorReturn(this, result); }; }

function addpage_view_possibleConstructorReturn(self, call) { if (call && (addpage_view_typeof(call) === "object" || typeof call === "function")) { return call; } return addpage_view_assertThisInitialized(self); }

function addpage_view_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function addpage_view_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function addpage_view_getPrototypeOf(o) { addpage_view_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return addpage_view_getPrototypeOf(o); }



var AddPageView = /*#__PURE__*/function (_View) {
  addpage_view_inherits(AddPageView, _View);

  var _super = addpage_view_createSuper(AddPageView);

  /**
   * constructor description
   * @param  {HTMLElement} parent - HTML container
   */
  function AddPageView(parent) {
    var _this;

    addpage_view_classCallCheck(this, AddPageView);

    _this = _super.call(this);
    _this.parent = parent;
    _this.template = 'js/components/AddPage/AddPage.tmpl';
    return _this;
  }

  return AddPageView;
}(View);


// CONCATENATED MODULE: ./static/js/models/article-model.js
function article_model_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { article_model_typeof = function _typeof(obj) { return typeof obj; }; } else { article_model_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return article_model_typeof(obj); }

function article_model_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function article_model_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function article_model_createClass(Constructor, protoProps, staticProps) { if (protoProps) article_model_defineProperties(Constructor.prototype, protoProps); if (staticProps) article_model_defineProperties(Constructor, staticProps); return Constructor; }

function article_model_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) article_model_setPrototypeOf(subClass, superClass); }

function article_model_setPrototypeOf(o, p) { article_model_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return article_model_setPrototypeOf(o, p); }

function article_model_createSuper(Derived) { var hasNativeReflectConstruct = article_model_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = article_model_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = article_model_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return article_model_possibleConstructorReturn(this, result); }; }

function article_model_possibleConstructorReturn(self, call) { if (call && (article_model_typeof(call) === "object" || typeof call === "function")) { return call; } return article_model_assertThisInitialized(self); }

function article_model_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function article_model_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function article_model_getPrototypeOf(o) { article_model_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return article_model_getPrototypeOf(o); }





var article_model_headers = new Headers();
article_model_headers.append('Content-Type', 'application/json');
article_model_headers.append('Accept', 'application/json');
article_model_headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
article_model_headers.append('Access-Control-Allow-Credentials', 'true');
/**
 * TODO:
 * перенести часть логики обработки запросов
 * из соответствубщих компонентов (контроллеров)
 */

var ArticleModel = /*#__PURE__*/function (_Model) {
  article_model_inherits(ArticleModel, _Model);

  var _super = article_model_createSuper(ArticleModel);

  function ArticleModel() {
    article_model_classCallCheck(this, ArticleModel);

    return _super.call(this);
  }
  /**
   * This is a user articles request.
   *
   * @param {string} author - id of user
   * @return {function} - call of fetch method
   *
   * @example
   *
   *     getUserArticles('1')
   */


  article_model_createClass(ArticleModel, null, [{
    key: "getUserArticles",
    value: function getUserArticles(author) {
      return Fetching.queryGet({
        url: URLS.getUserArticles + author
      });
    }
    /**
     * This is a request to publish an article.
     *
     * @param {string} title - title of article
     * @param {string} desc - desc of article
     * @param {string} content - content of article
     * @return {function} - call of fetch method
     *
     * @example
     *
     *     getUserArticles('hello', 'world', 'bro')
     */

  }, {
    key: "makeArticle",
    value: function makeArticle(formData) {
      return Fetching.queryPost({
        url: URLS.makeArticle,
        body: formData,
        headers: {
          'X-CSRF-TOKEN': Fetching.getCookie('X-CSRF-TOKEN')
        }
      });
    }
  }, {
    key: "getArticlesByCategory",
    value: function getArticlesByCategory() {
      var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      category = Xss.removeScript(category);
      return Fetching.queryGet({
        url: URLS.getArticlesByCategory + category
      });
    }
  }, {
    key: "getArticlesByTag",
    value: function getArticlesByTag() {
      var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      tag = Xss.removeScript(tag);
      return Fetching.queryGet({
        url: URLS.getArticlesByTag + tag
      });
    }
  }, {
    key: "getArticlesBySubscribe",
    value: function getArticlesBySubscribe() {
      return Fetching.queryGet({
        url: URLS.getArticlesBySubscribe
      });
    }
  }, {
    key: "addSubcribe",
    value: function addSubcribe(formData) {
      return Fetching.queryPost({
        url: URLS.addSubscribe,
        body: formData,
        headers: {
          'X-CSRF-TOKEN': Fetching.getCookie('X-CSRF-TOKEN')
        }
      });
    }
  }]);

  return ArticleModel;
}(Model);


// CONCATENATED MODULE: ./static/js/controllers/addpage-controller.js
function addpage_controller_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { addpage_controller_typeof = function _typeof(obj) { return typeof obj; }; } else { addpage_controller_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return addpage_controller_typeof(obj); }

function addpage_controller_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function addpage_controller_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function addpage_controller_createClass(Constructor, protoProps, staticProps) { if (protoProps) addpage_controller_defineProperties(Constructor.prototype, protoProps); if (staticProps) addpage_controller_defineProperties(Constructor, staticProps); return Constructor; }

function addpage_controller_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) addpage_controller_setPrototypeOf(subClass, superClass); }

function addpage_controller_setPrototypeOf(o, p) { addpage_controller_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return addpage_controller_setPrototypeOf(o, p); }

function addpage_controller_createSuper(Derived) { var hasNativeReflectConstruct = addpage_controller_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = addpage_controller_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = addpage_controller_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return addpage_controller_possibleConstructorReturn(this, result); }; }

function addpage_controller_possibleConstructorReturn(self, call) { if (call && (addpage_controller_typeof(call) === "object" || typeof call === "function")) { return call; } return addpage_controller_assertThisInitialized(self); }

function addpage_controller_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function addpage_controller_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function addpage_controller_getPrototypeOf(o) { addpage_controller_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return addpage_controller_getPrototypeOf(o); }








var AddPageController = /*#__PURE__*/function (_Controller) {
  addpage_controller_inherits(AddPageController, _Controller);

  var _super = addpage_controller_createSuper(AddPageController);

  /**
   * constructor of controller
   * @param  {HTMLElement} parent - HTML container
   */
  function AddPageController(parent, header, footer, router) {
    var _this;

    addpage_controller_classCallCheck(this, AddPageController);

    _this = _super.call(this);
    _this.parent = parent;
    _this.headerContainer = header;
    _this.footerContainer = footer;
    _this.router = router;
    _this.view = new AddPageView(_this.parent);
    _this.data.categories = categories;
    return _this;
  }
  /**
   * action of controller, logic of add
   */


  addpage_controller_createClass(AddPageController, [{
    key: "action",
    value: function action() {
      var _this2 = this;

      this.view.render(this.data);
      var form = document.querySelector('form#form-add-article');
      var articleTitleInput = form.querySelector('input#articleTitle');
      var articleDescInput = form.querySelector('input#articleDesc');
      var articleTextInput = form.querySelector('textarea#articleText');
      var articleTextCategory = form.querySelector('select#articleCategory');
      var articleArrayTags = form.querySelector('input#articleTags');
      form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        var title = articleTitleInput.value.trim();
        var desc = articleDescInput.value.trim();
        var content = articleTextInput.value.trim();
        var category_title = articleTextCategory.value.trim();
        var tagsSlice = articleArrayTags.value.trim();
        var formData = new FormData();
        formData.append('article_title', title);
        formData.append('description', desc);
        formData.append('content', content);
        formData.append('category_title', category_title);
        formData.append('tags', tagsSlice);
        ArticleModel.makeArticle(formData).then(function (_ref) {
          var status = _ref.status;

          if (status === 201) {
            _this2.router.redirect('/profile');

            headerView(_this2.headerContainer, _this2.config);
            footerView(_this2.footerContainer, _this2.config);
          } else {
            console.log("error add");
            _this2.data.success = true;

            _this2.view.render(_this2.data);
          }
        })["catch"](function (err) {
          if (err instanceof Error) {
            console.log(err);
          }

          _this2.data.success = true;

          _this2.view.render(_this2.data);
        });
      });
    }
  }]);

  return AddPageController;
}(Controller);


// CONCATENATED MODULE: ./static/js/views/settings-view.js
function settings_view_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { settings_view_typeof = function _typeof(obj) { return typeof obj; }; } else { settings_view_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return settings_view_typeof(obj); }

function settings_view_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function settings_view_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) settings_view_setPrototypeOf(subClass, superClass); }

function settings_view_setPrototypeOf(o, p) { settings_view_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return settings_view_setPrototypeOf(o, p); }

function settings_view_createSuper(Derived) { var hasNativeReflectConstruct = settings_view_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = settings_view_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = settings_view_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return settings_view_possibleConstructorReturn(this, result); }; }

function settings_view_possibleConstructorReturn(self, call) { if (call && (settings_view_typeof(call) === "object" || typeof call === "function")) { return call; } return settings_view_assertThisInitialized(self); }

function settings_view_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function settings_view_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function settings_view_getPrototypeOf(o) { settings_view_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return settings_view_getPrototypeOf(o); }



var settings_view_SettingsView = /*#__PURE__*/function (_View) {
  settings_view_inherits(SettingsView, _View);

  var _super = settings_view_createSuper(SettingsView);

  /**
   * constructor description
   * @param  {HTMLElement} parent - HTML container
   */
  function SettingsView(parent) {
    var _this;

    settings_view_classCallCheck(this, SettingsView);

    _this = _super.call(this);
    _this.parent = parent;
    _this.template = 'js/components/SettingsPage/SettingsPage.tmpl';
    return _this;
  }

  return SettingsView;
}(View);


// CONCATENATED MODULE: ./static/js/controllers/settings-controller.js
function settings_controller_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { settings_controller_typeof = function _typeof(obj) { return typeof obj; }; } else { settings_controller_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return settings_controller_typeof(obj); }

function settings_controller_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function settings_controller_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function settings_controller_createClass(Constructor, protoProps, staticProps) { if (protoProps) settings_controller_defineProperties(Constructor.prototype, protoProps); if (staticProps) settings_controller_defineProperties(Constructor, staticProps); return Constructor; }

function settings_controller_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) settings_controller_setPrototypeOf(subClass, superClass); }

function settings_controller_setPrototypeOf(o, p) { settings_controller_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return settings_controller_setPrototypeOf(o, p); }

function settings_controller_createSuper(Derived) { var hasNativeReflectConstruct = settings_controller_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = settings_controller_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = settings_controller_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return settings_controller_possibleConstructorReturn(this, result); }; }

function settings_controller_possibleConstructorReturn(self, call) { if (call && (settings_controller_typeof(call) === "object" || typeof call === "function")) { return call; } return settings_controller_assertThisInitialized(self); }

function settings_controller_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function settings_controller_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function settings_controller_getPrototypeOf(o) { settings_controller_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return settings_controller_getPrototypeOf(o); }







var SettingsPageController = /*#__PURE__*/function (_Controller) {
  settings_controller_inherits(SettingsPageController, _Controller);

  var _super = settings_controller_createSuper(SettingsPageController);

  /**
   * constructor of controller
   * @param  {HTMLElement} parent - HTML container
   */
  function SettingsPageController(parent) {
    var _this;

    settings_controller_classCallCheck(this, SettingsPageController);

    _this = _super.call(this);
    _this.parent = parent;
    _this.view = new settings_view_SettingsView(parent);
    return _this;
  }
  /**
   * action of controller, logic of settings
   */


  settings_controller_createClass(SettingsPageController, [{
    key: "action",
    value: function action() {
      var _this2 = this;

      //
      var currentProfileData = {};
      UserModel.getUserData().then(function (res) {
        if (res.status !== 201) {
          return Promise.reject(res);
        }

        res.json().then(function (res) {
          currentProfileData.login = res.login;
          currentProfileData.email = res.email;
          currentProfileData.password = res.password;
          _this2.data.currentProfileData = currentProfileData;

          _this2.view.render(_this2.data);

          var form = document.querySelector('form#form-update');
          var loginInput = form.querySelector('input#updateLogin');
          var emailInput = form.querySelector('input#updateEmail');
          var passwordInput = form.querySelector('input#updatePassword');
          var fileInput = form.querySelector('input#updateAvatar');
          var imageData = new FormData();
          form.addEventListener('submit', function (evt) {
            evt.preventDefault();
            var login = loginInput.value.trim();
            var email = emailInput.value.trim();
            var password = passwordInput.value.trim();

            if (login === '') {
              login = _this2.data.currentProfileData.login;
            }

            if (email === '') {
              email = _this2.data.currentProfileData.email;
            }

            if (password === '') {
              password = _this2.data.currentProfileData.password;
            }

            UserModel.updateUser({
              login: login,
              email: email,
              password: password
            }).then(function (_ref) {
              var status = _ref.status;
              console.log(status);

              if (status === 200) {
                _this2.data.settings = true;
                _this2.data.success = false;

                _this2.action();
              } else {
                console.log('error');
                _this2.data.settings = false;
                _this2.data.success = true;

                _this2.action();
              }
            })["catch"](function (err) {
              if (err instanceof Error) {
                console.log(err);
              }

              _this2.data.success = true;
              _this2.data.settings = false;

              _this2.action();
            });
          });
          fileInput.addEventListener('change', function (evt) {
            imageData.append("avatar", fileInput.files[0], fileInput.files[0].name);
            UserModel.updateUserAvatar(imageData).then(function (_ref2) {
              var status = _ref2.status;
              console.log(status);

              if (status === 200) {
                _this2.data.settingsPhoto = true;
                _this2.data.successPhoto = false;

                _this2.action();
              } else {
                console.log('error');
                _this2.data.successPhoto = true;
                _this2.data.settingsPhoto = false;

                _this2.action();
              }
            })["catch"](function (err) {
              if (err instanceof Error) {
                console.log(err);
              }

              _this2.data.successPhoto = true;
              _this2.data.settingsPhoto = false;

              _this2.action();
            });
          });
        })["catch"](function (err) {
          console.log('error');

          _this2.action();
        });
      });
    }
  }]);

  return SettingsPageController;
}(Controller);


// CONCATENATED MODULE: ./static/js/views/profile-view.js
function profile_view_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { profile_view_typeof = function _typeof(obj) { return typeof obj; }; } else { profile_view_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return profile_view_typeof(obj); }

function profile_view_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function profile_view_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) profile_view_setPrototypeOf(subClass, superClass); }

function profile_view_setPrototypeOf(o, p) { profile_view_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return profile_view_setPrototypeOf(o, p); }

function profile_view_createSuper(Derived) { var hasNativeReflectConstruct = profile_view_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = profile_view_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = profile_view_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return profile_view_possibleConstructorReturn(this, result); }; }

function profile_view_possibleConstructorReturn(self, call) { if (call && (profile_view_typeof(call) === "object" || typeof call === "function")) { return call; } return profile_view_assertThisInitialized(self); }

function profile_view_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function profile_view_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function profile_view_getPrototypeOf(o) { profile_view_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return profile_view_getPrototypeOf(o); }



var ProfileView = /*#__PURE__*/function (_View) {
  profile_view_inherits(ProfileView, _View);

  var _super = profile_view_createSuper(ProfileView);

  /**
   * constructor description
   * @param  {HTMLElement} parent - HTML container
   */
  function ProfileView(parent) {
    var _this;

    profile_view_classCallCheck(this, ProfileView);

    _this = _super.call(this);
    _this.parent = parent;
    _this.template = 'js/components/ProfilePage/ProfilePage.tmpl';
    return _this;
  }

  return ProfileView;
}(View);


// CONCATENATED MODULE: ./static/js/controllers/profile-controller.js
function profile_controller_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { profile_controller_typeof = function _typeof(obj) { return typeof obj; }; } else { profile_controller_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return profile_controller_typeof(obj); }

function profile_controller_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function profile_controller_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function profile_controller_createClass(Constructor, protoProps, staticProps) { if (protoProps) profile_controller_defineProperties(Constructor.prototype, protoProps); if (staticProps) profile_controller_defineProperties(Constructor, staticProps); return Constructor; }

function profile_controller_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) profile_controller_setPrototypeOf(subClass, superClass); }

function profile_controller_setPrototypeOf(o, p) { profile_controller_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return profile_controller_setPrototypeOf(o, p); }

function profile_controller_createSuper(Derived) { var hasNativeReflectConstruct = profile_controller_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = profile_controller_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = profile_controller_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return profile_controller_possibleConstructorReturn(this, result); }; }

function profile_controller_possibleConstructorReturn(self, call) { if (call && (profile_controller_typeof(call) === "object" || typeof call === "function")) { return call; } return profile_controller_assertThisInitialized(self); }

function profile_controller_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function profile_controller_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function profile_controller_getPrototypeOf(o) { profile_controller_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return profile_controller_getPrototypeOf(o); }








var ok = '';

var ProfilePageController = /*#__PURE__*/function (_Controller) {
  profile_controller_inherits(ProfilePageController, _Controller);

  var _super = profile_controller_createSuper(ProfilePageController);

  /**
   * constructor of controller
   * @param {HTMLElement} parent - HTML container
   * @param {HTMLElement} header - HTML container
   * @param {Object} config - list menu
   */
  function ProfilePageController(parent, header, footer) {
    var _this;

    profile_controller_classCallCheck(this, ProfilePageController);

    _this = _super.call(this);
    _this.parent = parent;
    _this.data = {
      login: 'Вы не вошли'
    };
    _this.headerContainer = header;
    _this.footerContainer = footer;
    _this.data.categories = categories;
    _this.view = new ProfileView(_this.parent);
    return _this;
  }
  /**
   * action of controller, logic of profile
   */


  profile_controller_createClass(ProfilePageController, [{
    key: "action",
    value: function action() {
      var _this2 = this;

      // this.view.render(this.data);
      UserModel.getUserData().then(function (res) {
        if (res.status !== 201) {
          return Promise.reject(res);
        }

        res.json().then(function (res) {
          var profileData = {
            id: res.id,
            login: res.login,
            email: res.email,
            avatar: res.avatar
          };
          _this2.data = profileData;
          UserModel.getUserAvatar(_this2.data.avatar).then(function (res) {
            _this2.data.image = res.url; // this.view.render(this.data);

            ArticleModel.getUserArticles(_this2.data.id).then(function (res) {
              if (res.status === 200) {
                res.json().then(function (res) {
                  _this2.data.categories = categories;

                  if (res === null) {
                    _this2.data.isArticle = true;
                    _this2.data.ok = ok;

                    _this2.view.render(_this2.data);

                    headerView(_this2.headerContainer, _this2.config);
                    footerView(_this2.footerContainer, _this2.config);

                    _this2.addSub();
                  } else {
                    _this2.data.articles = res;
                    _this2.data.ok = ok;

                    _this2.view.render(_this2.data);

                    headerView(_this2.headerContainer, _this2.config);
                    footerView(_this2.footerContainer, _this2.config);

                    _this2.addSub();
                  }
                });
              }
            })["catch"](function (err) {
              if (err.status === 500) {
                console.error('failed to fetch articles');
              }
            })["catch"](function (err) {
              if (err.status === 500) {
                console.error('failed to fetch avatar');
              }
            });
          })["catch"](function (err) {
            if (err.status === 500) {
              console.error('fail to fetch profile');

              _this2.action();
            }
          });
        });
      });
    }
  }, {
    key: "addSub",
    value: function addSub() {
      var _this3 = this;

      var form = document.querySelector('form#form-add-category');
      var category_titleInput = form.querySelector('select#categoryTitle.select-category');
      form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        var category_title = category_titleInput.value.trim();
        var formData = new FormData();
        formData.append('category_title', category_title);
        ArticleModel.addSubcribe(formData).then(function (_ref) {
          var status = _ref.status;

          if (status === 200) {
            console.log("done");
            ok = 'оформлена';

            _this3.action();
          } else {
            console.log("error add");
            _this3.data.success = true;

            _this3.action();
          }
        })["catch"](function (err) {
          if (err instanceof Error) {
            console.log(err);
          }

          _this3.action();
        });
      });
    }
  }]);

  return ProfilePageController;
}(Controller);


// CONCATENATED MODULE: ./static/js/views/main-view.js
function main_view_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { main_view_typeof = function _typeof(obj) { return typeof obj; }; } else { main_view_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return main_view_typeof(obj); }

function main_view_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function main_view_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) main_view_setPrototypeOf(subClass, superClass); }

function main_view_setPrototypeOf(o, p) { main_view_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return main_view_setPrototypeOf(o, p); }

function main_view_createSuper(Derived) { var hasNativeReflectConstruct = main_view_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = main_view_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = main_view_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return main_view_possibleConstructorReturn(this, result); }; }

function main_view_possibleConstructorReturn(self, call) { if (call && (main_view_typeof(call) === "object" || typeof call === "function")) { return call; } return main_view_assertThisInitialized(self); }

function main_view_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function main_view_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function main_view_getPrototypeOf(o) { main_view_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return main_view_getPrototypeOf(o); }



var MainView = /*#__PURE__*/function (_View) {
  main_view_inherits(MainView, _View);

  var _super = main_view_createSuper(MainView);

  /**
   * constructor description
   * @param  {HTMLElement} parent - HTML container
   */
  function MainView(parent) {
    var _this;

    main_view_classCallCheck(this, MainView);

    _this = _super.call(this);
    _this.parent = parent;
    _this.template = 'js/components/MainPage/MainPage.tmpl';
    return _this;
  }

  return MainView;
}(View);


// CONCATENATED MODULE: ./static/js/controllers/main-controller.js
function main_controller_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { main_controller_typeof = function _typeof(obj) { return typeof obj; }; } else { main_controller_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return main_controller_typeof(obj); }

function main_controller_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function main_controller_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function main_controller_createClass(Constructor, protoProps, staticProps) { if (protoProps) main_controller_defineProperties(Constructor.prototype, protoProps); if (staticProps) main_controller_defineProperties(Constructor, staticProps); return Constructor; }

function main_controller_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) main_controller_setPrototypeOf(subClass, superClass); }

function main_controller_setPrototypeOf(o, p) { main_controller_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return main_controller_setPrototypeOf(o, p); }

function main_controller_createSuper(Derived) { var hasNativeReflectConstruct = main_controller_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = main_controller_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = main_controller_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return main_controller_possibleConstructorReturn(this, result); }; }

function main_controller_possibleConstructorReturn(self, call) { if (call && (main_controller_typeof(call) === "object" || typeof call === "function")) { return call; } return main_controller_assertThisInitialized(self); }

function main_controller_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function main_controller_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function main_controller_getPrototypeOf(o) { main_controller_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return main_controller_getPrototypeOf(o); }






var main_controller_ProfilePageController = /*#__PURE__*/function (_Controller) {
  main_controller_inherits(ProfilePageController, _Controller);

  var _super = main_controller_createSuper(ProfilePageController);

  /**
   * constructor of controller
   * @param {HTMLElement} parent - HTML container
   * @param {HTMLElement} header - HTML container
   * @param {Object} config - list menu
   */
  function ProfilePageController(parent) {
    var _this;

    main_controller_classCallCheck(this, ProfilePageController);

    _this = _super.call(this);
    _this.parent = parent;
    _this.data = {
      login: 'Вы не вошли'
    };
    _this.view = new MainView(_this.parent);
    _this.data.key = 'Популярные';
    return _this;
  }
  /**
   * action of controller, logic of profile
   */


  main_controller_createClass(ProfilePageController, [{
    key: "action",
    value: function action() {
      var _this2 = this;

      var articles = [{
        article_title: "Первый заголовок",
        author: "Автор 1",
        categories: ["Дизайн", "Фотографии"],
        description: "Описание к статье 1"
      }, {
        article_title: "Второй заголовок",
        author: "Автор 2",
        categories: ["Дизайн", "Фотографии"],
        description: "Описание к статье 2"
      }, {
        article_title: "Третий заголовок",
        date: "1 сентября 2020",
        author: "Автор 3",
        categories: ["Дизайн", "Фотографии"],
        description: "Описание к статье 3"
      }, {
        article_title: "Четвертый заголовок",
        author: "Автор 4",
        categories: ["Дизайн", "Фотографии"],
        description: "Описание к статье 4"
      }, {
        article_title: "Четвертый заголовок",
        date: "1 сентября 2020",
        author: "Автор 4",
        categories: ["Дизайн", "Фотографии"],
        description: "Описание к статье 4"
      }, {
        article_title: "Четвертый заголовок",
        author: "Автор 4",
        categories: ["Дизайн", "Фотографии"],
        description: "Описание к статье 4"
      }, {
        article_title: "Четвертый заголовок",
        date: "1 сентября 2020",
        author: "Автор 4",
        categories: ["Дизайн", "Фотографии"],
        description: "Описание к статье 4"
      }, {
        article_title: "Четвертый заголовок",
        author: "Автор 4",
        categories: ["Дизайн", "Фотографии"],
        description: "Описание к статье 4"
      }, {
        article_title: "Четвертый заголовок",
        date: "1 сентября 2020",
        author: "Автор 4",
        categories: ["Дизайн", "Фотографии"],
        description: "Описание к статье 4"
      }, {
        article_title: "Четвертый заголовок",
        author: "Автор 4",
        categories: ["Дизайн", "Фотографии"],
        description: "Описание к статье 4"
      }, {
        article_title: "Четвертый заголовок",
        author: "Автор 4",
        categories: ["Дизайн", "Фотографии"],
        description: "Описание к статье 4"
      }, {
        article_title: "Четвертый заголовок",
        author: "Автор 4",
        categories: ["Дизайн", "Фотографии"],
        description: "Описание к статье 4"
      }, {
        article_title: "Четвертый заголовок",
        author: "Автор 4",
        categories: ["Дизайн", "Фотографии"],
        description: "Описание к статье 4"
      }, {
        article_title: "Четвертый заголовок",
        author: "Автор 4",
        categories: ["Дизайн", "Фотографии"],
        description: "Описание к статье 4"
      }, {
        article_title: "Четвертый заголовок",
        author: "Автор 4",
        categories: ["Дизайн", "Фотографии"],
        description: "Описание к статье 4"
      }];
      UserModel.getUserData().then(function (res) {
        if (res.status !== 201) {
          _this2.data.articles = articles;
          _this2.data.key = 'Популярные';

          _this2.view.render(_this2.data);
        } else {
          ArticleModel.getArticlesBySubscribe().then(function (res) {
            if (res.status === 200) {
              res.json().then(function (res) {
                _this2.data.articles = res;
                _this2.data.articles = _this2.data.articles.reverse();
                _this2.data.key = 'Подписки';

                _this2.view.render(_this2.data);
              });
            } else {
              console.log('error');
              _this2.data.articles = articles;
              _this2.data.key = 'Популярные';

              _this2.view.render(_this2.data);
            }
          })["catch"](function (err) {
            if (err instanceof Error) {
              console.log(err);
            }

            _this2.data.articles = articles;
            _this2.data.key = 'Популярные';

            _this2.view.render(_this2.data);
          });
        }
      })["catch"](function (err) {
        _this2.data.articles = articles;
        _this2.data.key = 'Популярные';

        _this2.view.render(_this2.data);
      });
    }
  }]);

  return ProfilePageController;
}(Controller);


// CONCATENATED MODULE: ./static/js/views/category-view.js
function category_view_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { category_view_typeof = function _typeof(obj) { return typeof obj; }; } else { category_view_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return category_view_typeof(obj); }

function category_view_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function category_view_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) category_view_setPrototypeOf(subClass, superClass); }

function category_view_setPrototypeOf(o, p) { category_view_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return category_view_setPrototypeOf(o, p); }

function category_view_createSuper(Derived) { var hasNativeReflectConstruct = category_view_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = category_view_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = category_view_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return category_view_possibleConstructorReturn(this, result); }; }

function category_view_possibleConstructorReturn(self, call) { if (call && (category_view_typeof(call) === "object" || typeof call === "function")) { return call; } return category_view_assertThisInitialized(self); }

function category_view_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function category_view_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function category_view_getPrototypeOf(o) { category_view_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return category_view_getPrototypeOf(o); }



var CategoryView = /*#__PURE__*/function (_View) {
  category_view_inherits(CategoryView, _View);

  var _super = category_view_createSuper(CategoryView);

  /**
   * constructor description
   * @param  {HTMLElement} parent - HTML container
   */
  function CategoryView(parent) {
    var _this;

    category_view_classCallCheck(this, CategoryView);

    _this = _super.call(this);
    _this.parent = parent;
    _this.template = 'js/components/CategoryPage/CategoryPage.tmpl';
    return _this;
  }

  return CategoryView;
}(View);


// CONCATENATED MODULE: ./static/js/controllers/category-controller.js
function category_controller_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { category_controller_typeof = function _typeof(obj) { return typeof obj; }; } else { category_controller_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return category_controller_typeof(obj); }

function category_controller_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function category_controller_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function category_controller_createClass(Constructor, protoProps, staticProps) { if (protoProps) category_controller_defineProperties(Constructor.prototype, protoProps); if (staticProps) category_controller_defineProperties(Constructor, staticProps); return Constructor; }

function category_controller_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) category_controller_setPrototypeOf(subClass, superClass); }

function category_controller_setPrototypeOf(o, p) { category_controller_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return category_controller_setPrototypeOf(o, p); }

function category_controller_createSuper(Derived) { var hasNativeReflectConstruct = category_controller_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = category_controller_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = category_controller_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return category_controller_possibleConstructorReturn(this, result); }; }

function category_controller_possibleConstructorReturn(self, call) { if (call && (category_controller_typeof(call) === "object" || typeof call === "function")) { return call; } return category_controller_assertThisInitialized(self); }

function category_controller_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function category_controller_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function category_controller_getPrototypeOf(o) { category_controller_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return category_controller_getPrototypeOf(o); }






var CategoryPageController = /*#__PURE__*/function (_Controller) {
  category_controller_inherits(CategoryPageController, _Controller);

  var _super = category_controller_createSuper(CategoryPageController);

  /**
   * constructor of controller
   * @param {HTMLElement} parent - HTML container
   * @param {HTMLElement} header - HTML container
   * @param {Object} config - list menu
   */
  function CategoryPageController(parent) {
    var _this;

    category_controller_classCallCheck(this, CategoryPageController);

    _this = _super.call(this);
    _this.parent = parent;
    _this.view = new CategoryView(_this.parent);
    _this.data.currentId = -1;
    _this.data.categories = categories;
    return _this;
  }
  /**
   * action of controller, logic of profile
   */


  category_controller_createClass(CategoryPageController, [{
    key: "action",
    value: function action() {
      this.data.key = "Категория:";
      this.data.value = "фотография";
      this.getAritcles('фотография');
    }
  }, {
    key: "getAritcles",
    value: function getAritcles(category) {
      var _this2 = this;

      ArticleModel.getArticlesByCategory(category).then(function (res) {
        if (res.status === 200) {
          res.json().then(function (res) {
            console.log(res);
            _this2.data.articles = res;
            _this2.data.articles = _this2.data.articles.reverse();

            _this2.view.render(_this2.data);

            var categorySelect = document.querySelector('select#select-choose-category.select-category');
            categorySelect.addEventListener('change', function (evt) {
              console.log('change');
              var category = categorySelect.value;
              _this2.data.category = category;
              _this2.data.currentId = _this2.data.categories.indexOf(category);
              var category0 = _this2.data.categories[0];
              _this2.data.categories[0] = category;
              _this2.data.categories[_this2.data.currentId] = category0;
              _this2.data.value = category;

              _this2.getAritcles(category);
            });
          });
        } else {
          console.log('error');
          _this2.data.categories = categories;
          _this2.data.value = "фотография";

          _this2.getAritcles('фотография');
        }
      })["catch"](function (err) {
        if (err instanceof Error) {
          console.log(err);
          _this2.data.categories = categories;
          _this2.data.value = "фотография";

          _this2.getAritcles('фотография');
        }

        _this2.data.categories = categories;
        _this2.data.value = "фотография";

        _this2.getAritcles('фотография');
      });
    }
  }]);

  return CategoryPageController;
}(Controller);


// CONCATENATED MODULE: ./static/js/views/tag-view.js
function tag_view_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { tag_view_typeof = function _typeof(obj) { return typeof obj; }; } else { tag_view_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return tag_view_typeof(obj); }

function tag_view_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function tag_view_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) tag_view_setPrototypeOf(subClass, superClass); }

function tag_view_setPrototypeOf(o, p) { tag_view_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return tag_view_setPrototypeOf(o, p); }

function tag_view_createSuper(Derived) { var hasNativeReflectConstruct = tag_view_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = tag_view_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = tag_view_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return tag_view_possibleConstructorReturn(this, result); }; }

function tag_view_possibleConstructorReturn(self, call) { if (call && (tag_view_typeof(call) === "object" || typeof call === "function")) { return call; } return tag_view_assertThisInitialized(self); }

function tag_view_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function tag_view_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function tag_view_getPrototypeOf(o) { tag_view_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return tag_view_getPrototypeOf(o); }



var TagView = /*#__PURE__*/function (_View) {
  tag_view_inherits(TagView, _View);

  var _super = tag_view_createSuper(TagView);

  /**
   * constructor description
   * @param  {HTMLElement} parent - HTML container
   */
  function TagView(parent) {
    var _this;

    tag_view_classCallCheck(this, TagView);

    _this = _super.call(this);
    _this.parent = parent;
    _this.template = 'js/components/TagPage/TagPage.tmpl';
    return _this;
  }

  return TagView;
}(View);


// CONCATENATED MODULE: ./static/js/controllers/tag-controller.js
function tag_controller_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { tag_controller_typeof = function _typeof(obj) { return typeof obj; }; } else { tag_controller_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return tag_controller_typeof(obj); }

function tag_controller_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function tag_controller_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function tag_controller_createClass(Constructor, protoProps, staticProps) { if (protoProps) tag_controller_defineProperties(Constructor.prototype, protoProps); if (staticProps) tag_controller_defineProperties(Constructor, staticProps); return Constructor; }

function tag_controller_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) tag_controller_setPrototypeOf(subClass, superClass); }

function tag_controller_setPrototypeOf(o, p) { tag_controller_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return tag_controller_setPrototypeOf(o, p); }

function tag_controller_createSuper(Derived) { var hasNativeReflectConstruct = tag_controller_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = tag_controller_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = tag_controller_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return tag_controller_possibleConstructorReturn(this, result); }; }

function tag_controller_possibleConstructorReturn(self, call) { if (call && (tag_controller_typeof(call) === "object" || typeof call === "function")) { return call; } return tag_controller_assertThisInitialized(self); }

function tag_controller_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function tag_controller_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function tag_controller_getPrototypeOf(o) { tag_controller_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return tag_controller_getPrototypeOf(o); }





var value = 'test';

var TagPageController = /*#__PURE__*/function (_Controller) {
  tag_controller_inherits(TagPageController, _Controller);

  var _super = tag_controller_createSuper(TagPageController);

  /**
   * constructor of controller
   * @param {HTMLElement} parent - HTML container
   * @param {HTMLElement} header - HTML container
   * @param {Object} config - list menu
   */
  function TagPageController(parent) {
    var _this;

    tag_controller_classCallCheck(this, TagPageController);

    _this = _super.call(this);
    _this.parent = parent;
    _this.view = new TagView(_this.parent);
    _this.data.currentId = -1;
    _this.data.categories = categories;
    return _this;
  }
  /**
   * action of controller, logic of profile
   */


  tag_controller_createClass(TagPageController, [{
    key: "action",
    value: function action() {
      this.data.key = "Тег:";
      this.data.value = '';
      this.getAritcles('test');
    }
  }, {
    key: "getAritcles",
    value: function getAritcles(tag) {
      var _this2 = this;

      ArticleModel.getArticlesByTag(tag).then(function (res) {
        if (res.status === 200) {
          res.json().then(function (res) {
            if (res === null) {
              _this2.data.articles = [{
                article_title: 'Статей нет',
                description: ''
              }];
              _this2.data.value = value;

              _this2.view.render(_this2.data);
            } else {
              _this2.data.articles = res;
              _this2.data.articles = _this2.data.articles.reverse();
              _this2.data.value = value;

              _this2.view.render(_this2.data);
            }

            var form = document.querySelector('form#form-tag');
            var input = form.querySelector('input#tagTitle');
            form.addEventListener('submit', function (evt) {
              evt.preventDefault();
              var tagName = input.value.trim();
              value = tagName;

              _this2.getAritcles(tagName);
            });
          });
        } else {
          console.log('error');
          value = 'test';

          _this2.action();
        }
      })["catch"](function (err) {
        if (err instanceof Error) {
          console.log(err);
          value = 'test';

          _this2.action();
        }
      });
    }
  }]);

  return TagPageController;
}(Controller);


// CONCATENATED MODULE: ./static/js/main.js
 // import '../styles.scss';
















/* Base init */

var application = document.getElementById('app');
var header = document.createElement('div');
header.id = 'header';
var container = document.createElement('div');
container.id = 'container';
var footer = document.createElement('div');
application.appendChild(header);
application.appendChild(container);
application.appendChild(footer);
var config = {};
var stateLogin = false;
/************* Router */
// TODO: избавиться от относительных путей во всём проекте
// доделать остальные контроллеры, модели, представления












UserModel.getUserData().then(function (res) {
  if (res.status !== 201) {
    stateLogin = false;
    config = {
      main: {
        href: '/',
        text: 'Главная'
      },
      category: {
        href: '/category',
        text: 'Категории'
      },
      tag: {
        href: '/tags',
        text: 'Теги'
      },
      signup: {
        href: '/signup',
        text: 'Зарегистрироваться'
      },
      login: {
        href: '/login',
        text: 'Авторизоваться'
      }
    };
  } else {
    stateLogin = true;
    config = {
      main: {
        href: '/',
        text: 'Главная'
      },
      category: {
        href: '/category',
        text: 'Категории'
      },
      tag: {
        href: '/tags',
        text: 'Теги'
      },
      profile: {
        href: '/profile',
        text: 'Профиль'
      },
      settings: {
        href: '/settings',
        text: 'Настройки'
      },
      add: {
        href: '/add',
        text: 'Добавить'
      },
      logout: {
        href: '/logout',
        text: 'Выйти'
      }
    };
  }

  headerView(header, config);
  mobileMenu();
  search();
  footerView(footer, config);
  var router = new Router(stateLogin);
  router.addRoute('/', new main_controller_ProfilePageController(container));
  router.addRoute('/category', new CategoryPageController(container));
  router.addRoute('/tags', new TagPageController(container));
  router.addRoute('/login', new LoginController(container, header, footer, router));
  router.addRoute('/logout', new LogOutController(container, header, footer, router));
  router.addRoute('/signup', new SignUpController(container, header, footer, router));
  router.addRoute('/profile', new ProfilePageController(container, header, footer));
  router.addRoute('/settings', new SettingsPageController(container));
  router.addRoute('/add', new AddPageController(container, header, footer, router));
  router.route();
})["catch"](function (err) {
  if (err instanceof Error) {
    console.log(err);
    console.log("no internet");
  }

  container.innerHTML = "\n        <section class=\"s-content s-styles\">\n         <div class=\"row\">\n            <div class=\"column large-12 intro\">\n                <h1>\u0421\u0435\u0440\u0432\u0438\u0441 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D</h1>\n            </div>\n     </section>\n    ";
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map