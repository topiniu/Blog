"use strict";

var loaderUtils = require("loader-utils");
var assign = require("object-assign");

var hljs = require('highlight.js');
hljs.configure({useBR: true});

var marked = require("./marked.js");
var renderer = new marked.Renderer();

renderer.code = function(code, language){
  var lang = language || 'nohighlight';

  if (language && language !== 'nohighlight'
    && language !== 'ascii-art' && language !== 'ditaa') {
    code = hljs.highlight(lang, code).value;
  } else {
    code = code.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  return '<pre><code class="hljs ' + lang + '">' +
    code + '</code></pre>';
};

// default option
var options = {
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
};

module.exports = function (markdown) {

    this.cacheable();

    marked.setOptions(options);

    return marked(markdown);
};
