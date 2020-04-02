webpackJsonp([1],{

/***/ "+XaC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"base"},[_c('img',{staticClass:"bgimg",attrs:{"src":_vm.bgurl,"alt":""}}),_vm._v(" "),(_vm.pagetype==1)?_c('main',{staticClass:"type1"},[_c('ul',[_c('li',[_c('span',[_vm._v("收货人")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formLabelAlign.name),expression:"formLabelAlign.name"}],attrs:{"type":"text","placeholder":"请填写收货人姓名","disabled":_vm.buildSuccess},domProps:{"value":(_vm.formLabelAlign.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formLabelAlign, "name", $event.target.value)}}})]),_vm._v(" "),_c('li',[_c('span',[_vm._v("手机号码")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formLabelAlign.phone),expression:"formLabelAlign.phone"}],attrs:{"type":"number","placeholder":"请填写收货人手机号","disabled":_vm.buildSuccess},domProps:{"value":(_vm.formLabelAlign.phone)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formLabelAlign, "phone", $event.target.value)}}})]),_vm._v(" "),_c('li',{attrs:{"id":"select_contact"},on:{"click":_vm.choose_area}},[_c('span',[_vm._v("所在地区")]),_vm._v(" "),_c('div',{staticClass:"pc-box"},[_c('input',{attrs:{"type":"hidden","name":"contact_province_code","data-id":"0001","id":"contact_province_code","value":"","data-province-name":""}}),_vm._v(" "),_c('input',{attrs:{"type":"hidden","name":"contact_city_code","id":"contact_city_code","value":"","data-city-name":""}}),_vm._v(" "),_c('span',{attrs:{"data-city-code":"510100","data-province-code":"510000","data-district-code":"510105","id":"show_contact"}},[_vm._v(_vm._s(_vm.formLabelAlign.region))])])]),_vm._v(" "),_c('li',[_c('span',[_vm._v("详细地址")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formLabelAlign.address),expression:"formLabelAlign.address"}],attrs:{"type":"text","placeholder":"街道，楼牌号等","disabled":_vm.buildSuccess},domProps:{"value":(_vm.formLabelAlign.address)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formLabelAlign, "address", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"saveaddress",style:({'background':_vm.buildSuccess?'rgb(189,189,189)':'rgb(207,164,81)'}),on:{"click":_vm.savedata}},[_vm._v("提交")])]):(_vm.pagetype==2)?_c('main',{staticClass:"type2"},[_c('div',{staticClass:"box"},[_c('img',{attrs:{"src":__webpack_require__("q6r7"),"alt":""},on:{"click":_vm.backto1}}),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.errorMSG))]),_vm._v(" "),(_vm.errorMSG1)?_c('p',[_vm._v(_vm._s(_vm.errorMSG1))]):_vm._e(),_vm._v(" "),(_vm.errorMSG2)?_c('p',[_vm._v(_vm._s(_vm.errorMSG2))]):_vm._e()])]):_vm._e(),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"commitscreen"}),_vm._v(" "),_c('img',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"loading",attrs:{"src":__webpack_require__("du88"),"alt":""}})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "+cgv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "+skl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "3f40":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "4qOc":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "BIzB":
/***/ (function(module, exports) {

/* Zepto v1.1.6 - zepto event ajax form ie - zeptojs.com/license */
var Zepto = function () {
    var undefined;
    var key;
    var $;
    var classList;
    var emptyArray = [];
    var slice = emptyArray.slice;
    var filter = emptyArray.filter;
    var document = window.document;
    var elementDisplay = {};
    var classCache = {};
    var cssNumber = {
        'column-count': 1,
        'columns': 1,
        'font-weight': 1,
        'line-height': 1,
        'opacity': 1,
        'z-index': 1,
        'zoom': 1

    };
    var fragmentRE = /^\s*<(\w+|!)[^>]*>/;
    var singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
    var tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig;
    var rootNodeRE = /^(?:body|html)$/i;
    var capitalRE = /([A-Z])/g;

    // special attributes that should be get/set via method calls
    var methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'];

    var adjacencyOperators = ['after', 'prepend', 'before', 'append'];
    var table = document.createElement('table');
    var tableRow = document.createElement('tr');
    var containers = {
        'tr': document.createElement('tbody'),
        'tbody': table,
        'thead': table,
        'tfoot': table,
        'td': tableRow,
        'th': tableRow,
        '*': document.createElement('div')

    };
    var readyRE = /complete|loaded|interactive/;
    var simpleSelectorRE = /^[\w-]*$/;
    var class2type = {};
    var toString = class2type.toString;
    var zepto = {};
    var camelize;
    var uniq;
    var tempParent = document.createElement('div');
    var propMap = {
        'tabindex': 'tabIndex',
        'readonly': 'readOnly',
        'for': 'htmlFor',
        'class': 'className',
        'maxlength': 'maxLength',
        'cellspacing': 'cellSpacing',
        'cellpadding': 'cellPadding',
        'rowspan': 'rowSpan',
        'colspan': 'colSpan',
        'usemap': 'useMap',
        'frameborder': 'frameBorder',
        'contenteditable': 'contentEditable'

    };
    var isArray = Array.isArray || function (object) {
        return object instanceof Array;
    };

    zepto.matches = function (element, selector) {
        if (!selector || !element || element.nodeType !== 1) return false;
        var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector || element.matchesSelector;
        if (matchesSelector) return matchesSelector.call(element, selector);
        // fall back to performing a selector:
        var match;
        var parent = element.parentNode;
        var temp = !parent;
        if (temp) (parent = tempParent).appendChild(element);
        match = ~zepto.qsa(parent, selector).indexOf(element);
        temp && tempParent.removeChild(element);
        return match;
    };

    function type(obj) {
        return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";
    }

    function isFunction(value) {
        return type(value) == "function";
    }
    function isWindow(obj) {
        return obj != null && obj == obj.window;
    }
    function isDocument(obj) {
        return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
    }
    function isObject(obj) {
        return type(obj) == "object";
    }
    function isPlainObject(obj) {
        return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype;
    }
    function likeArray(obj) {
        return typeof obj.length == 'number';
    }

    function compact(array) {
        return filter.call(array, function (item) {
            return item != null;
        });
    }
    function flatten(array) {
        return array.length > 0 ? $.fn.concat.apply([], array) : array;
    }
    camelize = function (str) {
        return str.replace(/-+(.)?/g, function (match, chr) {
            return chr ? chr.toUpperCase() : '';
        });
    };
    function dasherize(str) {
        return str.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/_/g, '-').toLowerCase();
    }
    uniq = function (array) {
        return filter.call(array, function (item, idx) {
            return array.indexOf(item) == idx;
        });
    };

    function classRE(name) {
        return name in classCache ? classCache[name] : classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)');
    }

    function maybeAddPx(name, value) {
        return typeof value == "number" && !cssNumber[dasherize(name)] ? value + "px" : value;
    }

    function defaultDisplay(nodeName) {
        var element;
        var display;
        if (!elementDisplay[nodeName]) {
            element = document.createElement(nodeName);
            document.body.appendChild(element);
            display = getComputedStyle(element, '').getPropertyValue("display");
            element.parentNode.removeChild(element);
            display == "none" && (display = "block");
            elementDisplay[nodeName] = display;
        }
        return elementDisplay[nodeName];
    }

    function children(element) {
        return 'children' in element ? slice.call(element.children) : $.map(element.childNodes, function (node) {
            if (node.nodeType == 1) return node;
        });
    }

    // `$.zepto.fragment` takes a html string and an optional tag name
    // to generate DOM nodes nodes from the given html string.
    // The generated DOM nodes are returned as an array.
    // This function can be overriden in plugins for example to make
    // it compatible with browsers that don't support the DOM fully.
    zepto.fragment = function (html, name, properties) {
        var dom;
        var nodes;
        var container;

        // A special case optimization for a single tag
        if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1));

        if (!dom) {
            if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>");
            if (name === undefined) name = fragmentRE.test(html) && RegExp.$1;
            if (!(name in containers)) name = '*';

            container = containers[name];
            container.innerHTML = '' + html;
            dom = $.each(slice.call(container.childNodes), function () {
                container.removeChild(this);
            });
        }

        if (isPlainObject(properties)) {
            nodes = $(dom);
            $.each(properties, function (key, value) {
                if (methodAttributes.indexOf(key) > -1) nodes[key](value);else nodes.attr(key, value);
            });
        }

        return dom;
    };

    // `$.zepto.Z` swaps out the prototype of the given `dom` array
    // of nodes with `$.fn` and thus supplying all the Zepto functions
    // to the array. Note that `__proto__` is not supported on Internet
    // Explorer. This method can be overriden in plugins.
    zepto.Z = function (dom, selector) {
        dom = dom || [];
        dom.__proto__ = $.fn;
        dom.selector = selector || '';
        return dom;
    };

    // `$.zepto.isZ` should return `true` if the given object is a Zepto
    // collection. This method can be overriden in plugins.
    zepto.isZ = function (object) {
        return object instanceof zepto.Z;
    };

    // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
    // takes a CSS selector and an optional context (and handles various
    // special cases).
    // This method can be overriden in plugins.
    zepto.init = function (selector, context) {
        var dom;
        // If nothing given, return an empty Zepto collection
        if (!selector) return zepto.Z();
        // Optimize for string selectors
        else if (typeof selector == 'string') {
                selector = selector.trim();
                // If it's a html fragment, create nodes from it
                // Note: In both Chrome 21 and Firefox 15, DOM error 12
                // is thrown if the fragment doesn't begin with <
                if (selector[0] == '<' && fragmentRE.test(selector)) dom = zepto.fragment(selector, RegExp.$1, context), selector = null;
                // If there's a context, create a collection on that context first, and select
                // nodes from there
                else if (context !== undefined) return $(context).find(selector);
                    // If it's a CSS selector, use it to select nodes.
                    else dom = zepto.qsa(document, selector);
            }
            // If a function is given, call it when the DOM is ready
            else if (isFunction(selector)) return $(document).ready(selector);
                // If a Zepto collection is given, just return it
                else if (zepto.isZ(selector)) return selector;else {
                        // normalize array if an array of nodes is given
                        if (isArray(selector)) dom = compact(selector);
                        // Wrap DOM nodes.
                        else if (isObject(selector)) dom = [selector], selector = null;
                            // If it's a html fragment, create nodes from it
                            else if (fragmentRE.test(selector)) dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null;
                                // If there's a context, create a collection on that context first, and select
                                // nodes from there
                                else if (context !== undefined) return $(context).find(selector);
                                    // And last but no least, if it's a CSS selector, use it to select nodes.
                                    else dom = zepto.qsa(document, selector);
                    }
        // create a new Zepto collection from the nodes found
        return zepto.Z(dom, selector);
    };

    // `$` will be the base `Zepto` object. When calling this
    // function just call `$.zepto.init, which makes the implementation
    // details of selecting nodes and creating Zepto collections
    // patchable in plugins.
    $ = function (selector, context) {
        return zepto.init(selector, context);
    };

    function extend(target, source, deep) {
        for (key in source) if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
            if (isPlainObject(source[key]) && !isPlainObject(target[key])) target[key] = {};
            if (isArray(source[key]) && !isArray(target[key])) target[key] = [];
            extend(target[key], source[key], deep);
        } else if (source[key] !== undefined) target[key] = source[key];
    }

    // Copy all but undefined properties from one or more
    // objects to the `target` object.
    $.extend = function (target) {
        var deep;
        var args = slice.call(arguments, 1);
        if (typeof target == 'boolean') {
            deep = target;
            target = args.shift();
        }
        args.forEach(function (arg) {
            extend(target, arg, deep);
        });
        return target;
    };

    // `$.zepto.qsa` is Zepto's CSS selector implementation which
    // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
    // This method can be overriden in plugins.
    zepto.qsa = function (element, selector) {
        var found;
        var maybeID = selector[0] == '#';
        var maybeClass = !maybeID && selector[0] == '.';
        var nameOnly = maybeID || maybeClass ? selector.slice(1) : selector; // Ensure that a 1 char tag name still gets checked
        var isSimple = simpleSelectorRE.test(nameOnly);
        return isDocument(element) && isSimple && maybeID ? (found = element.getElementById(nameOnly)) ? [found] : [] : element.nodeType !== 1 && element.nodeType !== 9 ? [] : slice.call(isSimple && !maybeID ? maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
        element.getElementsByTagName(selector) : // Or a tag
        element.querySelectorAll(selector) // Or it's not simple, and we need to query all
        );
    };

    function filtered(nodes, selector) {
        return selector == null ? $(nodes) : $(nodes).filter(selector);
    }

    $.contains = document.documentElement.contains ? function (parent, node) {
        return parent !== node && parent.contains(node);
    } : function (parent, node) {
        while (node && (node = node.parentNode)) if (node === parent) return true;
        return false;
    };

    function funcArg(context, arg, idx, payload) {
        return isFunction(arg) ? arg.call(context, idx, payload) : arg;
    }

    function setAttribute(node, name, value) {
        value == null ? node.removeAttribute(name) : node.setAttribute(name, value);
    }

    // access className property while respecting SVGAnimatedString
    function className(node, value) {
        var klass = node.className || '';
        var svg = klass && klass.baseVal !== undefined;

        if (value === undefined) return svg ? klass.baseVal : klass;
        svg ? klass.baseVal = value : node.className = value;
    }

    // "true"  => true
    // "false" => false
    // "null"  => null
    // "42"    => 42
    // "42.5"  => 42.5
    // "08"    => "08"
    // JSON    => parse if valid
    // String  => self
    function deserializeValue(value) {
        try {
            return value ? value == "true" || (value == "false" ? false : value == "null" ? null : +value + "" == value ? +value : /^[\[\{]/.test(value) ? $.parseJSON(value) : value) : value;
        } catch (e) {
            return value;
        }
    }

    $.type = type;
    $.isFunction = isFunction;
    $.isWindow = isWindow;
    $.isArray = isArray;
    $.isPlainObject = isPlainObject;

    $.isEmptyObject = function (obj) {
        var name;
        for (name in obj) return false;
        return true;
    };

    $.inArray = function (elem, array, i) {
        return emptyArray.indexOf.call(array, elem, i);
    };

    $.camelCase = camelize;
    $.trim = function (str) {
        return str == null ? "" : String.prototype.trim.call(str);
    };

    // plugin compatibility
    $.uuid = 0;
    $.support = {};
    $.expr = {};

    $.map = function (elements, callback) {
        var value;
        var values = [];
        var i;
        var key;
        if (likeArray(elements)) for (i = 0; i < elements.length; i++) {
            value = callback(elements[i], i);
            if (value != null) values.push(value);
        } else for (key in elements) {
            value = callback(elements[key], key);
            if (value != null) values.push(value);
        }
        return flatten(values);
    };

    $.each = function (elements, callback) {
        var i;
        var key;
        if (likeArray(elements)) {
            for (i = 0; i < elements.length; i++) if (callback.call(elements[i], i, elements[i]) === false) return elements;
        } else {
            for (key in elements) if (callback.call(elements[key], key, elements[key]) === false) return elements;
        }

        return elements;
    };

    $.grep = function (elements, callback) {
        return filter.call(elements, callback);
    };

    if (window.JSON) $.parseJSON = JSON.parse;

    // Populate the class2type map
    $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });

    // Define methods that will be available on all
    // Zepto collections
    $.fn = {
        // Because a collection acts like an array
        // copy over these useful array functions.
        forEach: emptyArray.forEach,
        reduce: emptyArray.reduce,
        push: emptyArray.push,
        sort: emptyArray.sort,
        indexOf: emptyArray.indexOf,
        concat: emptyArray.concat,
        // `map` and `slice` in the jQuery API work differently
        // from their array counterparts
        map: function (fn) {
            return $($.map(this, function (el, i) {
                return fn.call(el, i, el);
            }));
        },
        slice: function () {
            return $(slice.apply(this, arguments));
        },

        ready: function (callback) {
            // need to check if document.body exists for IE as that browser reports
            // document ready when it hasn't yet created the body element
            if (readyRE.test(document.readyState) && document.body) callback($);else document.addEventListener('DOMContentLoaded', function () {
                callback($);
            }, false);
            return this;
        },
        get: function (idx) {
            return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length];
        },
        toArray: function () {
            return this.get();
        },
        size: function () {
            return this.length;
        },
        remove: function () {
            return this.each(function () {
                if (this.parentNode != null) this.parentNode.removeChild(this);
            });
        },
        each: function (callback) {
            emptyArray.every.call(this, function (el, idx) {
                return callback.call(el, idx, el) !== false;
            });
            return this;
        },
        filter: function (selector) {
            if (isFunction(selector)) return this.not(this.not(selector));
            return $(filter.call(this, function (element) {
                return zepto.matches(element, selector);
            }));
        },
        add: function (selector, context) {
            return $(uniq(this.concat($(selector, context))));
        },
        is: function (selector) {
            return this.length > 0 && zepto.matches(this[0], selector);
        },
        not: function (selector) {
            var nodes = [];
            if (isFunction(selector) && selector.call !== undefined) this.each(function (idx) {
                if (!selector.call(this, idx)) nodes.push(this);
            });else {
                var excludes = typeof selector == 'string' ? this.filter(selector) : likeArray(selector) && isFunction(selector.item) ? slice.call(selector) : $(selector);
                this.forEach(function (el) {
                    if (excludes.indexOf(el) < 0) nodes.push(el);
                });
            }
            return $(nodes);
        },
        has: function (selector) {
            return this.filter(function () {
                return isObject(selector) ? $.contains(this, selector) : $(this).find(selector).size();
            });
        },
        eq: function (idx) {
            return idx === -1 ? this.slice(idx) : this.slice(idx, +idx + 1);
        },
        first: function () {
            var el = this[0];
            return el && !isObject(el) ? el : $(el);
        },
        last: function () {
            var el = this[this.length - 1];
            return el && !isObject(el) ? el : $(el);
        },
        find: function (selector) {
            var result;
            var $this = this;
            if (!selector) result = $();else if (typeof selector == 'object') result = $(selector).filter(function () {
                var node = this;
                return emptyArray.some.call($this, function (parent) {
                    return $.contains(parent, node);
                });
            });else if (this.length == 1) result = $(zepto.qsa(this[0], selector));else result = this.map(function () {
                return zepto.qsa(this, selector);
            });
            return result;
        },
        closest: function (selector, context) {
            var node = this[0];
            var collection = false;
            if (typeof selector == 'object') collection = $(selector);
            while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector))) node = node !== context && !isDocument(node) && node.parentNode;
            return $(node);
        },
        parents: function (selector) {
            var ancestors = [];
            var nodes = this;
            while (nodes.length > 0) nodes = $.map(nodes, function (node) {
                if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
                    ancestors.push(node);
                    return node;
                }
            });
            return filtered(ancestors, selector);
        },
        parent: function (selector) {
            return filtered(uniq(this.pluck('parentNode')), selector);
        },
        children: function (selector) {
            return filtered(this.map(function () {
                return children(this);
            }), selector);
        },
        contents: function () {
            return this.map(function () {
                return slice.call(this.childNodes);
            });
        },
        siblings: function (selector) {
            return filtered(this.map(function (i, el) {
                return filter.call(children(el.parentNode), function (child) {
                    return child !== el;
                });
            }), selector);
        },
        empty: function () {
            return this.each(function () {
                this.innerHTML = '';
            });
        },
        // `pluck` is borrowed from Prototype.js
        pluck: function (property) {
            return $.map(this, function (el) {
                return el[property];
            });
        },
        show: function () {
            return this.each(function () {
                this.style.display == "none" && (this.style.display = '');
                if (getComputedStyle(this, '').getPropertyValue("display") == "none") this.style.display = defaultDisplay(this.nodeName);
            });
        },
        replaceWith: function (newContent) {
            return this.before(newContent).remove();
        },
        wrap: function (structure) {
            var func = isFunction(structure);
            if (this[0] && !func) var dom = $(structure).get(0);
            var clone = dom.parentNode || this.length > 1;

            return this.each(function (index) {
                $(this).wrapAll(func ? structure.call(this, index) : clone ? dom.cloneNode(true) : dom);
            });
        },
        wrapAll: function (structure) {
            if (this[0]) {
                $(this[0]).before(structure = $(structure));
                var children;
                // drill down to the inmost element
                while ((children = structure.children()).length) structure = children.first();
                $(structure).append(this);
            }
            return this;
        },
        wrapInner: function (structure) {
            var func = isFunction(structure);
            return this.each(function (index) {
                var self = $(this);
                var contents = self.contents();
                var dom = func ? structure.call(this, index) : structure;
                contents.length ? contents.wrapAll(dom) : self.append(dom);
            });
        },
        unwrap: function () {
            this.parent().each(function () {
                $(this).replaceWith($(this).children());
            });
            return this;
        },
        clone: function () {
            return this.map(function () {
                return this.cloneNode(true);
            });
        },
        hide: function () {
            return this.css("display", "none");
        },
        toggle: function (setting) {
            return this.each(function () {
                var el = $(this);
                (setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide();
            });
        },
        prev: function (selector) {
            return $(this.pluck('previousElementSibling')).filter(selector || '*');
        },
        next: function (selector) {
            return $(this.pluck('nextElementSibling')).filter(selector || '*');
        },
        html: function (html) {
            return 0 in arguments ? this.each(function (idx) {
                var originHtml = this.innerHTML;
                $(this).empty().append(funcArg(this, html, idx, originHtml));
            }) : 0 in this ? this[0].innerHTML : null;
        },
        text: function (text) {
            return 0 in arguments ? this.each(function (idx) {
                var newText = funcArg(this, text, idx, this.textContent);
                this.textContent = newText == null ? '' : '' + newText;
            }) : 0 in this ? this[0].textContent : null;
        },
        attr: function (name, value) {
            var result;
            return typeof name == 'string' && !(1 in arguments) ? !this.length || this[0].nodeType !== 1 ? undefined : !(result = this[0].getAttribute(name)) && name in this[0] ? this[0][name] : result : this.each(function (idx) {
                if (this.nodeType !== 1) return;
                if (isObject(name)) for (key in name) setAttribute(this, key, name[key]);else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)));
            });
        },
        removeAttr: function (name) {
            return this.each(function () {
                this.nodeType === 1 && name.split(' ').forEach(function (attribute) {
                    setAttribute(this, attribute);
                }, this);
            });
        },
        prop: function (name, value) {
            name = propMap[name] || name;
            return 1 in arguments ? this.each(function (idx) {
                this[name] = funcArg(this, value, idx, this[name]);
            }) : this[0] && this[0][name];
        },
        data: function (name, value) {
            var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase();

            var data = 1 in arguments ? this.attr(attrName, value) : this.attr(attrName);

            return data !== null ? deserializeValue(data) : undefined;
        },
        val: function (value) {
            return 0 in arguments ? this.each(function (idx) {
                this.value = funcArg(this, value, idx, this.value);
            }) : this[0] && (this[0].multiple ? $(this[0]).find('option').filter(function () {
                return this.selected;
            }).pluck('value') : this[0].value);
        },
        offset: function (coordinates) {
            if (coordinates) return this.each(function (index) {
                var $this = $(this);
                var coords = funcArg(this, coordinates, index, $this.offset());
                var parentOffset = $this.offsetParent().offset();
                var props = {
                    top: coords.top - parentOffset.top,
                    left: coords.left - parentOffset.left

                };

                if ($this.css('position') == 'static') props['position'] = 'relative';
                $this.css(props);
            });
            if (!this.length) return null;
            var obj = this[0].getBoundingClientRect();
            return {
                left: obj.left + window.pageXOffset,
                top: obj.top + window.pageYOffset,
                width: Math.round(obj.width),
                height: Math.round(obj.height)

            };
        },
        css: function (property, value) {
            if (arguments.length < 2) {
                var computedStyle;
                var element = this[0];
                if (!element) return;
                computedStyle = getComputedStyle(element, '');
                if (typeof property == 'string') return element.style[camelize(property)] || computedStyle.getPropertyValue(property);else if (isArray(property)) {
                    var props = {};
                    $.each(property, function (_, prop) {
                        props[prop] = element.style[camelize(prop)] || computedStyle.getPropertyValue(prop);
                    });
                    return props;
                }
            }

            var css = '';
            if (type(property) == 'string') {
                if (!value && value !== 0) this.each(function () {
                    this.style.removeProperty(dasherize(property));
                });else css = dasherize(property) + ":" + maybeAddPx(property, value);
            } else {
                for (key in property) if (!property[key] && property[key] !== 0) this.each(function () {
                    this.style.removeProperty(dasherize(key));
                });else css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';';
            }

            return this.each(function () {
                this.style.cssText += ';' + css;
            });
        },
        index: function (element) {
            return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0]);
        },
        hasClass: function (name) {
            if (!name) return false;
            return emptyArray.some.call(this, function (el) {
                return this.test(className(el));
            }, classRE(name));
        },
        addClass: function (name) {
            if (!name) return this;
            return this.each(function (idx) {
                if (!('className' in this)) return;
                classList = [];
                var cls = className(this);
                var newName = funcArg(this, name, idx, cls);
                newName.split(/\s+/g).forEach(function (klass) {
                    if (!$(this).hasClass(klass)) classList.push(klass);
                }, this);
                classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "));
            });
        },
        removeClass: function (name) {
            return this.each(function (idx) {
                if (!('className' in this)) return;
                if (name === undefined) return className(this, '');
                classList = className(this);
                funcArg(this, name, idx, classList).split(/\s+/g).forEach(function (klass) {
                    classList = classList.replace(classRE(klass), " ");
                });
                className(this, classList.trim());
            });
        },
        toggleClass: function (name, when) {
            if (!name) return this;
            return this.each(function (idx) {
                var $this = $(this);
                var names = funcArg(this, name, idx, className(this));
                names.split(/\s+/g).forEach(function (klass) {
                    (when === undefined ? !$this.hasClass(klass) : when) ? $this.addClass(klass) : $this.removeClass(klass);
                });
            });
        },
        scrollTop: function (value) {
            if (!this.length) return;
            var hasScrollTop = 'scrollTop' in this[0];
            if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset;
            return this.each(hasScrollTop ? function () {
                this.scrollTop = value;
            } : function () {
                this.scrollTo(this.scrollX, value);
            });
        },
        scrollLeft: function (value) {
            if (!this.length) return;
            var hasScrollLeft = 'scrollLeft' in this[0];
            if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset;
            return this.each(hasScrollLeft ? function () {
                this.scrollLeft = value;
            } : function () {
                this.scrollTo(value, this.scrollY);
            });
        },
        position: function () {
            if (!this.length) return;

            var elem = this[0];
            // Get *real* offsetParent
            var offsetParent = this.offsetParent();
            // Get correct offsets
            var offset = this.offset();
            var parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? {
                top: 0,
                left: 0

            } : offsetParent.offset();

            // Subtract element margins
            // note: when an element has margin: auto the offsetLeft and marginLeft
            // are the same in Safari causing offset.left to incorrectly be 0
            offset.top -= parseFloat($(elem).css('margin-top')) || 0;
            offset.left -= parseFloat($(elem).css('margin-left')) || 0;

            // Add offsetParent borders
            parentOffset.top += parseFloat($(offsetParent[0]).css('border-top-width')) || 0;
            parentOffset.left += parseFloat($(offsetParent[0]).css('border-left-width')) || 0;

            // Subtract the two offsets
            return {
                top: offset.top - parentOffset.top,
                left: offset.left - parentOffset.left

            };
        },
        offsetParent: function () {
            return this.map(function () {
                var parent = this.offsetParent || document.body;
                while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static") parent = parent.offsetParent;
                return parent;
            });
        }

    };

    // for now
    $.fn.detach = $.fn.remove
    // Generate the `width` and `height` functions
    ;
    ['width', 'height'].forEach(function (dimension) {
        var dimensionProperty = dimension.replace(/./, function (m) {
            return m[0].toUpperCase();
        });

        $.fn[dimension] = function (value) {
            var offset;
            var el = this[0];
            if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] : isDocument(el) ? el.documentElement['scroll' + dimensionProperty] : (offset = this.offset()) && offset[dimension];else return this.each(function (idx) {
                el = $(this);
                el.css(dimension, funcArg(this, value, idx, el[dimension]()));
            });
        };
    });

    function traverseNode(node, fun) {
        fun(node);
        for (var i = 0, len = node.childNodes.length; i < len; i++) traverseNode(node.childNodes[i], fun);
    }

    // Generate the `after`, `prepend`, `before`, `append`,
    // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
    adjacencyOperators.forEach(function (operator, operatorIndex) {
        var inside = operatorIndex % 2; // => prepend, append
        $.fn[operator] = function () {
            // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
            var argType;
            var nodes = $.map(arguments, function (arg) {
                argType = type(arg);
                return argType == "object" || argType == "array" || arg == null ? arg : zepto.fragment(arg);
            });
            var parent;
            var copyByClone = this.length > 1;
            if (nodes.length < 1) return this;

            return this.each(function (_, target) {
                parent = inside ? target : target.parentNode;

                // convert all methods to a "before" operation
                target = operatorIndex == 0 ? target.nextSibling : operatorIndex == 1 ? target.firstChild : operatorIndex == 2 ? target : null;

                var parentInDocument = $.contains(document.documentElement, parent);

                nodes.forEach(function (node) {
                    if (copyByClone) node = node.cloneNode(true);else if (!parent) return $(node).remove();

                    parent.insertBefore(node, target);
                    if (parentInDocument) traverseNode(node, function (el) {
                        if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' && (!el.type || el.type === 'text/javascript') && !el.src) window['eval'].call(window, el.innerHTML);
                    });
                });
            });
        };

        // after    => insertAfter
        // prepend  => prependTo
        // before   => insertBefore
        // append   => appendTo
        $.fn[inside ? operator + 'To' : 'insert' + (operatorIndex ? 'Before' : 'After')] = function (html) {
            $(html)[operator](this);
            return this;
        };
    });

    zepto.Z.prototype = $.fn;

    // Export internal API functions in the `$.zepto` namespace
    zepto.uniq = uniq;
    zepto.deserializeValue = deserializeValue;
    $.zepto = zepto;

    return $;
}();

window.Zepto = Zepto;
window.$ === undefined && (window.$ = Zepto);
(function ($) {
    var _zid = 1;
    var undefined;
    var slice = Array.prototype.slice;
    var isFunction = $.isFunction;
    var isString = function (obj) {
        return typeof obj == 'string';
    };
    var handlers = {};
    var specialEvents = {};
    var focusinSupported = 'onfocusin' in window;
    var focus = {
        focus: 'focusin',
        blur: 'focusout'

    };
    var hover = {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout'

    };

    specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents';

    function zid(element) {
        return element._zid || (element._zid = _zid++);
    }
    function findHandlers(element, event, fn, selector) {
        event = parse(event);
        if (event.ns) var matcher = matcherFor(event.ns);
        return (handlers[zid(element)] || []).filter(function (handler) {
            return handler && (!event.e || handler.e == event.e) && (!event.ns || matcher.test(handler.ns)) && (!fn || zid(handler.fn) === zid(fn)) && (!selector || handler.sel == selector);
        });
    }
    function parse(event) {
        var parts = ('' + event).split('.');
        return {
            e: parts[0],
            ns: parts.slice(1).sort().join(' ')

        };
    }
    function matcherFor(ns) {
        return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)');
    }

    function eventCapture(handler, captureSetting) {
        return handler.del && !focusinSupported && handler.e in focus || !!captureSetting;
    }

    function realEvent(type) {
        return hover[type] || focusinSupported && focus[type] || type;
    }

    function add(element, events, fn, data, selector, delegator, capture) {
        var id = zid(element);
        var set = handlers[id] || (handlers[id] = []);
        events.split(/\s/).forEach(function (event) {
            if (event == 'ready') return $(document).ready(fn);
            var handler = parse(event);
            handler.fn = fn;
            handler.sel = selector;
            // emulate mouseenter, mouseleave
            if (handler.e in hover) fn = function (e) {
                var related = e.relatedTarget;
                if (!related || related !== this && !$.contains(this, related)) return handler.fn.apply(this, arguments);
            };
            handler.del = delegator;
            var callback = delegator || fn;
            handler.proxy = function (e) {
                e = compatible(e);
                if (e.isImmediatePropagationStopped()) return;
                e.data = data;
                var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args));
                if (result === false) e.preventDefault(), e.stopPropagation();
                return result;
            };
            handler.i = set.length;
            set.push(handler);
            if ('addEventListener' in element) element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
        });
    }
    function remove(element, events, fn, selector, capture) {
        var id = zid(element);
        (events || '').split(/\s/).forEach(function (event) {
            findHandlers(element, event, fn, selector).forEach(function (handler) {
                delete handlers[id][handler.i];
                if ('removeEventListener' in element) element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
            });
        });
    }

    $.event = {
        add: add,
        remove: remove

    };

    $.proxy = function (fn, context) {
        var args = 2 in arguments && slice.call(arguments, 2);
        if (isFunction(fn)) {
            var proxyFn = function () {
                return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments);
            };
            proxyFn._zid = zid(fn);
            return proxyFn;
        } else if (isString(context)) {
            if (args) {
                args.unshift(fn[context], fn);
                return $.proxy.apply(null, args);
            } else {
                return $.proxy(fn[context], fn);
            }
        } else {
            throw new TypeError("expected function");
        }
    };

    $.fn.bind = function (event, data, callback) {
        return this.on(event, data, callback);
    };
    $.fn.unbind = function (event, callback) {
        return this.off(event, callback);
    };
    $.fn.one = function (event, selector, data, callback) {
        return this.on(event, selector, data, callback, 1);
    };

    var returnTrue = function () {
        return true;
    };
    var returnFalse = function () {
        return false;
    };
    var ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$)/;
    var eventMethods = {
        preventDefault: 'isDefaultPrevented',
        stopImmediatePropagation: 'isImmediatePropagationStopped',
        stopPropagation: 'isPropagationStopped'

    };

    function compatible(event, source) {
        if (source || !event.isDefaultPrevented) {
            source || (source = event);

            $.each(eventMethods, function (name, predicate) {
                var sourceMethod = source[name];
                event[name] = function () {
                    this[predicate] = returnTrue;
                    return sourceMethod && sourceMethod.apply(source, arguments);
                };
                event[predicate] = returnFalse;
            });

            if (source.defaultPrevented !== undefined ? source.defaultPrevented : 'returnValue' in source ? source.returnValue === false : source.getPreventDefault && source.getPreventDefault()) event.isDefaultPrevented = returnTrue;
        }
        return event;
    }

    function createProxy(event) {
        var key;
        var proxy = {
            originalEvent: event

        };
        for (key in event) if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key];

        return compatible(proxy, event);
    }

    $.fn.delegate = function (selector, event, callback) {
        return this.on(event, selector, callback);
    };
    $.fn.undelegate = function (selector, event, callback) {
        return this.off(event, selector, callback);
    };

    $.fn.live = function (event, callback) {
        $(document.body).delegate(this.selector, event, callback);
        return this;
    };
    $.fn.die = function (event, callback) {
        $(document.body).undelegate(this.selector, event, callback);
        return this;
    };

    $.fn.on = function (event, selector, data, callback, one) {
        var autoRemove;
        var delegator;
        var $this = this;
        if (event && !isString(event)) {
            $.each(event, function (type, fn) {
                $this.on(type, selector, data, fn, one);
            });
            return $this;
        }

        if (!isString(selector) && !isFunction(callback) && callback !== false) callback = data, data = selector, selector = undefined;
        if (isFunction(data) || data === false) callback = data, data = undefined;

        if (callback === false) callback = returnFalse;

        return $this.each(function (_, element) {
            if (one) autoRemove = function (e) {
                remove(element, e.type, callback);
                return callback.apply(this, arguments);
            };

            if (selector) delegator = function (e) {
                var evt;
                var match = $(e.target).closest(selector, element).get(0);
                if (match && match !== element) {
                    evt = $.extend(createProxy(e), {
                        currentTarget: match,
                        liveFired: element

                    });
                    return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)));
                }
            };

            add(element, event, callback, data, selector, delegator || autoRemove);
        });
    };
    $.fn.off = function (event, selector, callback) {
        var $this = this;
        if (event && !isString(event)) {
            $.each(event, function (type, fn) {
                $this.off(type, selector, fn);
            });
            return $this;
        }

        if (!isString(selector) && !isFunction(callback) && callback !== false) callback = selector, selector = undefined;

        if (callback === false) callback = returnFalse;

        return $this.each(function () {
            remove(this, event, callback, selector);
        });
    };

    $.fn.trigger = function (event, args) {
        event = isString(event) || $.isPlainObject(event) ? $.Event(event) : compatible(event);
        event._args = args;
        return this.each(function () {
            // handle focus(), blur() by calling them directly
            if (event.type in focus && typeof this[event.type] == "function") this[event.type]();
            // items in the collection might not be DOM elements
            else if ('dispatchEvent' in this) this.dispatchEvent(event);else $(this).triggerHandler(event, args);
        });
    };

    // triggers event handlers on current element just as if an event occurred,
    // doesn't trigger an actual event, doesn't bubble
    $.fn.triggerHandler = function (event, args) {
        var e;
        var result;
        this.each(function (i, element) {
            e = createProxy(isString(event) ? $.Event(event) : event);
            e._args = args;
            e.target = element;
            $.each(findHandlers(element, event.type || event), function (i, handler) {
                result = handler.proxy(e);
                if (e.isImmediatePropagationStopped()) return false;
            });
        });
        return result;
    }
    // shortcut methods for `.bind(event, fn)` for each event type
    ;
    ('focusin focusout focus blur load resize scroll unload click dblclick ' + 'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave ' + 'change select keydown keypress keyup error').split(' ').forEach(function (event) {
        $.fn[event] = function (callback) {
            return 0 in arguments ? this.bind(event, callback) : this.trigger(event);
        };
    });

    $.Event = function (type, props) {
        if (!isString(type)) props = type, type = props.type;
        var event = document.createEvent(specialEvents[type] || 'Events');
        var bubbles = true;
        if (props) for (var name in props) name == 'bubbles' ? bubbles = !!props[name] : event[name] = props[name];
        event.initEvent(type, bubbles, true);
        return compatible(event);
    };
})(Zepto);
(function ($) {
    var jsonpID = 0;
    var document = window.document;
    var key;
    var name;
    var rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    var scriptTypeRE = /^(?:text|application)\/javascript/i;
    var xmlTypeRE = /^(?:text|application)\/xml/i;
    var jsonType = 'application/json';
    var htmlType = 'text/html';
    var blankRE = /^\s*$/;
    var originAnchor = document.createElement('a');

    originAnchor.href = window.location.href;

    // trigger a custom event and return false if it was cancelled
    function triggerAndReturn(context, eventName, data) {
        var event = $.Event(eventName);
        $(context).trigger(event, data);
        return !event.isDefaultPrevented();
    }

    // trigger an Ajax "global" event
    function triggerGlobal(settings, context, eventName, data) {
        if (settings.global) return triggerAndReturn(context || document, eventName, data);
    }

    // Number of active Ajax requests
    $.active = 0;

    function ajaxStart(settings) {
        if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart');
    }
    function ajaxStop(settings) {
        if (settings.global && ! --$.active) triggerGlobal(settings, null, 'ajaxStop');
    }

    // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
    function ajaxBeforeSend(xhr, settings) {
        var context = settings.context;
        if (settings.beforeSend.call(context, xhr, settings) === false || triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false) return false;

        triggerGlobal(settings, context, 'ajaxSend', [xhr, settings]);
    }
    function ajaxSuccess(data, xhr, settings, deferred) {
        var context = settings.context;
        var status = 'success';
        settings.success.call(context, data, status, xhr);
        if (deferred) deferred.resolveWith(context, [data, status, xhr]);
        triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data]);
        ajaxComplete(status, xhr, settings);
    }
    // type: "timeout", "error", "abort", "parsererror"
    function ajaxError(error, type, xhr, settings, deferred) {
        var context = settings.context;
        settings.error.call(context, xhr, type, error);
        if (deferred) deferred.rejectWith(context, [xhr, type, error]);
        triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type]);
        ajaxComplete(type, xhr, settings);
    }
    // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
    function ajaxComplete(status, xhr, settings) {
        var context = settings.context;
        settings.complete.call(context, xhr, status);
        triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings]);
        ajaxStop(settings);
    }

    // Empty function, used as default callback
    function empty() {}

    $.ajaxJSONP = function (options, deferred) {
        if (!('type' in options)) return $.ajax(options);

        var _callbackName = options.jsonpCallback;
        var callbackName = ($.isFunction(_callbackName) ? _callbackName() : _callbackName) || 'jsonp' + ++jsonpID;
        var script = document.createElement('script');
        var originalCallback = window[callbackName];
        var responseData;
        var abort = function (errorType) {
            $(script).triggerHandler('error', errorType || 'abort');
        };
        var xhr = {
            abort: abort

        };
        var abortTimeout;

        if (deferred) deferred.promise(xhr);

        $(script).on('load error', function (e, errorType) {
            clearTimeout(abortTimeout);
            $(script).off().remove();

            if (e.type == 'error' || !responseData) {
                ajaxError(null, errorType || 'error', xhr, options, deferred);
            } else {
                ajaxSuccess(responseData[0], xhr, options, deferred);
            }

            window[callbackName] = originalCallback;
            if (responseData && $.isFunction(originalCallback)) originalCallback(responseData[0]);

            originalCallback = responseData = undefined;
        });

        if (ajaxBeforeSend(xhr, options) === false) {
            abort('abort');
            return xhr;
        }

        window[callbackName] = function () {
            responseData = arguments;
        };

        script.src = options.url.replace(/\?(.+)=\?/, '?$1=' + callbackName);
        document.head.appendChild(script);

        if (options.timeout > 0) abortTimeout = setTimeout(function () {
            abort('timeout');
        }, options.timeout);

        return xhr;
    };

    $.ajaxSettings = {
        // Default type of request
        type: 'GET',
        // Callback that is executed before request
        beforeSend: empty,
        // Callback that is executed if the request succeeds
        success: empty,
        // Callback that is executed the the server drops error
        error: empty,
        // Callback that is executed on request complete (both: error and success)
        complete: empty,
        // The context for the callbacks
        context: null,
        // Whether to trigger "global" Ajax events
        global: true,
        // Transport
        xhr: function () {
            return new window.XMLHttpRequest();
        },
        // MIME types mapping
        // IIS returns Javascript as "application/x-javascript"
        accepts: {
            script: 'text/javascript, application/javascript, application/x-javascript',
            json: jsonType,
            xml: 'application/xml, text/xml',
            html: htmlType,
            text: 'text/plain'

        },
        // Whether the request is to another domain
        crossDomain: false,
        // Default timeout
        timeout: 0,
        // Whether data should be serialized to string
        processData: true,
        // Whether the browser should be allowed to cache GET responses
        cache: true

    };

    function mimeToDataType(mime) {
        if (mime) mime = mime.split(';', 2)[0];
        return mime && (mime == htmlType ? 'html' : mime == jsonType ? 'json' : scriptTypeRE.test(mime) ? 'script' : xmlTypeRE.test(mime) && 'xml') || 'text';
    }

    function appendQuery(url, query) {
        if (query == '') return url;
        return (url + '&' + query).replace(/[&?]{1,2}/, '?');
    }

    // serialize payload and append it to the URL for GET requests
    function serializeData(options) {
        if (options.processData && options.data && $.type(options.data) != "string") options.data = $.param(options.data, options.traditional);
        if (options.data && (!options.type || options.type.toUpperCase() == 'GET')) options.url = appendQuery(options.url, options.data), options.data = undefined;
    }

    $.ajax = function (options) {
        var settings = $.extend({}, options || {});
        var deferred = $.Deferred && $.Deferred();
        var urlAnchor;
        for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key];

        ajaxStart(settings);

        if (!settings.crossDomain) {
            urlAnchor = document.createElement('a');
            urlAnchor.href = settings.url;
            urlAnchor.href = urlAnchor.href;
            settings.crossDomain = originAnchor.protocol + '//' + originAnchor.host !== urlAnchor.protocol + '//' + urlAnchor.host;
        }

        if (!settings.url) settings.url = window.location.toString();
        serializeData(settings);

        var dataType = settings.dataType;
        var hasPlaceholder = /\?.+=\?/.test(settings.url);
        if (hasPlaceholder) dataType = 'jsonp';

        if (settings.cache === false || (!options || options.cache !== true) && ('script' == dataType || 'jsonp' == dataType)) settings.url = appendQuery(settings.url, '_=' + Date.now());

        if ('jsonp' == dataType) {
            if (!hasPlaceholder) settings.url = appendQuery(settings.url, settings.jsonp ? settings.jsonp + '=?' : settings.jsonp === false ? '' : 'callback=?');
            return $.ajaxJSONP(settings, deferred);
        }

        var mime = settings.accepts[dataType];
        var headers = {};
        var setHeader = function (name, value) {
            headers[name.toLowerCase()] = [name, value];
        };
        var protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol;
        var xhr = settings.xhr();
        var nativeSetHeader = xhr.setRequestHeader;
        var abortTimeout;

        if (deferred) deferred.promise(xhr);

        if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest');
        setHeader('Accept', mime || '*/*');
        if (mime = settings.mimeType || mime) {
            if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0];
            xhr.overrideMimeType && xhr.overrideMimeType(mime);
        }
        if (settings.contentType || settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET') setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded');

        if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name]);
        xhr.setRequestHeader = setHeader;

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                xhr.onreadystatechange = empty;
                clearTimeout(abortTimeout);
                var result;
                var error = false;
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == 'file:') {
                    dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'));
                    result = xhr.responseText;

                    try {
                        // http://perfectionkills.com/global-eval-what-are-the-options/
                        if (dataType == 'script') (1, eval)(result);else if (dataType == 'xml') result = xhr.responseXML;else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result);
                    } catch (e) {
                        error = e;
                    }

                    if (error) ajaxError(error, 'parsererror', xhr, settings, deferred);else ajaxSuccess(result, xhr, settings, deferred);
                } else {
                    ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred);
                }
            }
        };

        if (ajaxBeforeSend(xhr, settings) === false) {
            xhr.abort();
            ajaxError(null, 'abort', xhr, settings, deferred);
            return xhr;
        }

        if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name];

        var async = 'async' in settings ? settings.async : true;
        xhr.open(settings.type, settings.url, async, settings.username, settings.password);

        for (name in headers) nativeSetHeader.apply(xhr, headers[name]);

        if (settings.timeout > 0) abortTimeout = setTimeout(function () {
            xhr.onreadystatechange = empty;
            xhr.abort();
            ajaxError(null, 'timeout', xhr, settings, deferred);
        }, settings.timeout);

        // avoid sending empty string (#319)
        xhr.send(settings.data ? settings.data : null);
        return xhr;
    };

    // handle optional data/success arguments
    function parseArguments(url, data, success, dataType) {
        if ($.isFunction(data)) dataType = success, success = data, data = undefined;
        if (!$.isFunction(success)) dataType = success, success = undefined;
        return {
            url: url,
            data: data,
            success: success,
            dataType: dataType

        };
    }

    $.get = function ()
    /* url, data, success, dataType */{
        return $.ajax(parseArguments.apply(null, arguments));
    };

    $.post = function ()
    /* url, data, success, dataType */{
        var options = parseArguments.apply(null, arguments);
        options.type = 'POST';
        return $.ajax(options);
    };

    $.getJSON = function ()
    /* url, data, success */{
        var options = parseArguments.apply(null, arguments);
        options.dataType = 'json';
        return $.ajax(options);
    };

    $.fn.load = function (url, data, success) {
        if (!this.length) return this;
        var self = this;
        var parts = url.split(/\s/);
        var selector;
        var options = parseArguments(url, data, success);
        var callback = options.success;
        if (parts.length > 1) options.url = parts[0], selector = parts[1];
        options.success = function (response) {
            self.html(selector ? $('<div>').html(response.replace(rscript, "")).find(selector) : response);
            callback && callback.apply(self, arguments);
        };
        $.ajax(options);
        return this;
    };

    var escape = encodeURIComponent;

    function serialize(params, obj, traditional, scope) {
        var type;
        var array = $.isArray(obj);
        var hash = $.isPlainObject(obj);
        $.each(obj, function (key, value) {
            type = $.type(value);
            if (scope) key = traditional ? scope : scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']';
            // handle data in serializeArray() format
            if (!scope && array) params.add(value.name, value.value);
            // recurse into nested objects
            else if (type == "array" || !traditional && type == "object") serialize(params, value, traditional, key);else params.add(key, value);
        });
    }

    $.param = function (obj, traditional) {
        var params = [];
        params.add = function (key, value) {
            if ($.isFunction(value)) value = value();
            if (value == null) value = "";
            this.push(escape(key) + '=' + escape(value));
        };
        serialize(params, obj, traditional);
        return params.join('&').replace(/%20/g, '+');
    };
})(Zepto);
(function ($) {
    $.fn.serializeArray = function () {
        var name;
        var type;
        var result = [];
        var add = function (value) {
            if (value.forEach) return value.forEach(add);
            result.push({
                name: name,
                value: value

            });
        };
        if (this[0]) $.each(this[0].elements, function (_, field) {
            type = field.type, name = field.name;
            if (name && field.nodeName.toLowerCase() != 'fieldset' && !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' && (type != 'radio' && type != 'checkbox' || field.checked)) add($(field).val());
        });
        return result;
    };

    $.fn.serialize = function () {
        var result = [];
        this.serializeArray().forEach(function (elm) {
            result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value));
        });
        return result.join('&');
    };

    $.fn.submit = function (callback) {
        if (0 in arguments) this.bind('submit', callback);else if (this.length) {
            var event = $.Event('submit');
            this.eq(0).trigger(event);
            if (!event.isDefaultPrevented()) this.get(0).submit();
        }
        return this;
    };
})(Zepto);
(function ($) {
    // __proto__ doesn't exist on IE<11, so redefine
    // the Z function to use object extension instead
    if (!('__proto__' in {})) {
        $.extend($.zepto, {
            Z: function (dom, selector) {
                dom = dom || [];
                $.extend(dom, $.fn);
                dom.selector = selector || '';
                dom.__Z = true;
                return dom;
            },
            // this is a kludge but works
            isZ: function (object) {
                return $.type(object) === 'array' && '__Z' in object;
            }

        });
    }

    // getComputedStyle shouldn't freak out when called
    // without a valid element as argument
    try {
        getComputedStyle(undefined);
    } catch (e) {
        var nativeGetComputedStyle = getComputedStyle;
        window.getComputedStyle = function (element) {
            try {
                return nativeGetComputedStyle(element);
            } catch (e) {
                return null;
            }
        };
    }
})(Zepto);

/***/ }),

/***/ "EDgR":
/***/ (function(module, exports) {

(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if (clientWidth >= 320) {
            // 这里的640 取决于设计稿的宽度
            docEl.style.fontSize = '100px';
        } else {
            docEl.style.fontSize = 100 * (clientWidth / 320) + 'px';
        }
    };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b229436e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("swFp");
function injectStyle (ssrContext) {
  __webpack_require__("QW2p")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b229436e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "MiD0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__("P9l9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clipboard__ = __webpack_require__("TQvf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_clipboard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_js_iosSelect_js__ = __webpack_require__("QIPB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_js_iosSelect_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_js_iosSelect_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_js_zepto_js__ = __webpack_require__("BIzB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_js_zepto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_js_zepto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_js_areaData_v2_js__ = __webpack_require__("w5PK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_css_iosSelect_css__ = __webpack_require__("RKNJ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_css_iosSelect_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__assets_css_iosSelect_css__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'index',
  data() {
    return {
      sysWidth: '', timeData: '获取验证码', eventId: '', id: '', isCode: true, //验证码按钮是否可点击
      timeInt: 60, bgurl: '', pagetype: 1, message: '', copyurl: '', verification: false, loading: true,
      appKey: 'FFFF00000000017A69F4', remark: '', couponname: [], iscopyTwice: false, code: '', errorMSG2: '',
      modelName: 'no-captcha', errorMSG: '', buildSuccess: false,
      nc_token: null, errorMSG1: '',
      lang: 'cn',
      NC_Opt: null,
      ruleForm: {
        account: '',
        code: '',
        mobile: ''
      }, area: '', oneLevelId: 'contact_province_code', twoLevelId: 'contact_city_code', threeLevelId: 'show_contact',
      labelPosition: 'left',
      formLabelAlign: {
        name: '',
        region: '',
        phone: '',
        address: ''
      }
    };
  },
  components: {},
  created() {
    this.sysWidth = document.body.clientWidth;
    this.iscopyTwice = false;
    this.UrlSearch();
  },

  mounted() {
    // 链接阿里云
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = '//g.alicdn.com/sd/nch5/index.js?t=2015052012';
    document.body.appendChild(s);
  },
  methods: {
    backto1() {
      this.pagetype = 1;
      this.ruleForm.account = '';
      this.ruleForm.code = '';
      this.$parent.$el.scrollTop = 0;
    },
    choose_area() {
      if (this.buildSuccess) {
        return;
      }
      let that = this;
      var iosSelect = new IosSelect(3, [__WEBPACK_IMPORTED_MODULE_6__assets_js_areaData_v2_js__["a" /* default */].iosProvinces, __WEBPACK_IMPORTED_MODULE_6__assets_js_areaData_v2_js__["a" /* default */].iosCitys, __WEBPACK_IMPORTED_MODULE_6__assets_js_areaData_v2_js__["a" /* default */].iosCountys], {
        title: "选择省份、城市",
        closeText: '',
        sureText: '',
        itemHeight: 35,
        itemShowCount: 5,
        relation: [1, 1],
        container: '.container',
        oneLevelId: this.oneLevelId,
        twoLevelId: this.twoLevelId,
        threeLevelId: this.threeLevelId,
        callback: function (selectOneObj, selectTwoObj, selectThreeObj) {
          that.oneLevelId = selectOneObj.id;
          that.twoLevelId = selectTwoObj.id;
          that.threeLevelId = selectThreeObj.id;
          that.returnprovince = selectOneObj.value;
          that.returncity = selectTwoObj.value;
          that.returnregion = selectThreeObj.value;
          that.formLabelAlign.region = that.returnprovince + "-" + that.returncity + "-" + that.returnregion;
        }
      });
    },
    UrlSearch() {
      var name, value;
      var str = location.href; //取得整个地址栏
      this.copyurl = str;
      var num = str.indexOf("?");
      str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]
      var arr = str.split("&"); //各个参数放到数组里
      console.log(arr);
      for (var i = 0; i < arr.length; i++) {
        num = arr[i].indexOf("=");
        if (num > 0) {
          name = arr[i].substring(0, num);
          value = arr[i].substr(num + 1);
          this[name] = value;
        }
        if (this[name].indexOf('#') != -1) {
          var ss = this[name].indexOf('#');
          this[name] = this[name].substring(0, ss);
        }
      }
      console.log(this.eventId, this.code);
      this.getdata();
    },
    getdata() {
      console.log(this.eventId, this.code);
      fetch(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* default */].baseUrl + '/webapi/exchangeEvents/get/' + this.eventId + '/' + this.code, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(r => r.json()).then(d => {
        this.loading = false;
        console.log(d);
        // d.data.imgUrl='https://merchants.oss-cn-hangzhou.aliyuncs.com/409/store/41984b5bbe483df1e252fceb2530978e.png'
        this.bgurl = d.data.imgUrl ? d.data.imgUrl : '';
        if (d.code == 200) {
          this.pagetype = 1;
          document.title = d.data.title;
        } else {
          this.pagetype = 2;
          this.errorMSG = d.message;
          this.errorMSG2 = '';
          if (d.data.exchangeId) {
            this.errorMSG1 = '订单编号：' + d.data.exchangeId;
          } else {
            this.errorMSG1 = '';
          }
        }
      });
    },
    savedata() {
      if (this.buildSuccess) {
        return;
      }
      if (!this.formLabelAlign.region) {
        this.$message.error('请填写所在地区');
        return;
      } else {
        var arr = this.formLabelAlign.region.split("-"); //各个参数放到数组里
        console.log(arr);
        var province = arr[0];
        var city = arr[1];
        var county = arr[2];
      }
      if (!this.formLabelAlign.name) {
        this.$message.error('请填写收货人姓名');
        return;
      }
      if (!this.formLabelAlign.phone) {
        this.$message.error('请填写手机号');
        return;
      }

      if (!this.formLabelAlign.address) {
        this.$message.error('请填写详细地址');
        return;
      }
      this.loading = true;
      var params = { 'eventId': this.eventId, 'code': this.code, 'name': this.formLabelAlign.name, 'mobile': this.formLabelAlign.phone, 'province': province, 'city': city, 'county': county, 'address': this.formLabelAlign.address };
      fetch(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* default */].baseUrl + '/webapi/exchangeEvents/exchange', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }).then(r => r.json()).then(d => {
        this.loading = false;
        this.$parent.$el.scrollTop = 0;
        this.pagetype = 1;
        if (d.code == 200) {
          this.pagetype = 2;
          this.buildSuccess = true;
          this.errorMSG = `恭喜您兑换成功 `;
          this.errorMSG1 = `请等待邮寄给您哦`;
          this.errorMSG2 = '订单编号：' + d.data;
        } else {
          this.pagetype = 2;
          this.errorMSG = d.message;
          this.errorMSG1 = '';
          this.errorMSG2 = '';
        }
      });
    },
    q(c, o) {
      console.log(c);
    }
  }
});

/***/ }),

/***/ "NFeX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_js_iosSelect_js__ = __webpack_require__("QIPB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_js_iosSelect_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_js_iosSelect_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_js_zepto_js__ = __webpack_require__("BIzB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_js_zepto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_js_zepto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_js_areaData_v2_js__ = __webpack_require__("w5PK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_css_iosSelect_css__ = __webpack_require__("RKNJ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_css_iosSelect_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_css_iosSelect_css__);
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'area',
    data() {
        return {
            area: '', oneLevelId: 'contact_province_code', twoLevelId: 'contact_city_code', threeLevelId: 'show_contact'
        };
    },
    created() {},
    mounted() {},
    methods: {
        choose_area() {
            let that = this;
            var iosSelect = new IosSelect(3, [__WEBPACK_IMPORTED_MODULE_2__assets_js_areaData_v2_js__["a" /* default */].iosProvinces, __WEBPACK_IMPORTED_MODULE_2__assets_js_areaData_v2_js__["a" /* default */].iosCitys, __WEBPACK_IMPORTED_MODULE_2__assets_js_areaData_v2_js__["a" /* default */].iosCountys], {
                title: "选择省份、城市",
                closeText: '',
                sureText: '',
                itemHeight: 35,
                itemShowCount: 5,
                relation: [1, 1],
                container: '.container',
                oneLevelId: this.oneLevelId,
                twoLevelId: this.twoLevelId,
                threeLevelId: this.threeLevelId,
                callback: function (selectOneObj, selectTwoObj, selectThreeObj) {
                    that.oneLevelId = selectOneObj.id;
                    that.twoLevelId = selectTwoObj.id;
                    that.threeLevelId = selectThreeObj.id;
                    that.returnprovince = selectOneObj.value;
                    that.returncity = selectTwoObj.value;
                    that.returnregion = selectThreeObj.value;
                    that.area = that.returnprovince + "-" + that.returncity + "-" + that.returnregion;
                }
            });
        }
    }

});

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__("YaEn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui__ = __webpack_require__("zL8q");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_chalk_index_css__ = __webpack_require__("tvR6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_chalk_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_chalk_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_iview__ = __webpack_require__("BTaQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_iview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_iview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_iview_dist_styles_iview_css__ = __webpack_require__("+skl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_iview_dist_styles_iview_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_iview_dist_styles_iview_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_quill_editor__ = __webpack_require__("G0J2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_quill_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vue_quill_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_quill_dist_quill_core_css__ = __webpack_require__("3f40");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_quill_dist_quill_core_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_quill_dist_quill_core_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_quill_dist_quill_snow_css__ = __webpack_require__("4qOc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_quill_dist_quill_snow_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_quill_dist_quill_snow_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_quill_dist_quill_bubble_css__ = __webpack_require__("+cgv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_quill_dist_quill_bubble_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_quill_dist_quill_bubble_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_v_distpicker__ = __webpack_require__("95YI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_v_distpicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_v_distpicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__assets_js_rem_js__ = __webpack_require__("EDgR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__assets_js_rem_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__assets_js_rem_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_vue_wechat_title__ = __webpack_require__("YqKu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_vue_wechat_title___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_vue_wechat_title__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_axios__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.















__WEBPACK_IMPORTED_MODULE_0_vue__["default"].component('v-distpicker', __WEBPACK_IMPORTED_MODULE_11_v_distpicker___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_element_ui___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_13_vue_wechat_title___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].http.options.emulateJSON = true;
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_5_iview___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_7_vue_quill_editor___default.a);
__WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */].beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  render: h => h(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]),
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),

/***/ "NsXK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-item item-line",attrs:{"id":"select_contact"},on:{"click":_vm.choose_area}},[_c('label',[_vm._v("省、市")]),_vm._v(" "),_c('div',{staticClass:"pc-box"},[_c('input',{attrs:{"type":"hidden","name":"contact_province_code","data-id":"0001","id":"contact_province_code","value":"","data-province-name":""}}),_vm._v(" "),_c('input',{attrs:{"type":"hidden","name":"contact_city_code","id":"contact_city_code","value":"","data-city-name":""}}),_vm._v(" "),_c('span',{attrs:{"data-city-code":"510100","data-province-code":"510000","data-district-code":"510105","id":"show_contact"}},[_vm._v(_vm._s(_vm.area))])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "P9l9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 *
 */
// let baseUrl = 'https://api.v-ka.com';
let baseUrl = 'https://api.vi-ni.com'; //打包测试地址
let accessToken = '';
let routerMode = 'history';
let baseImgPath = '';
let warm = '您长时间未操作，需要重新登录';
let obj = {};
let isweixn = 1;
/* harmony default export */ __webpack_exports__["a"] = ({
  baseUrl,
  routerMode,
  baseImgPath,
  accessToken,
  warm,
  obj,
  isweixn
});

/***/ }),

/***/ "QIPB":
/***/ (function(module, exports) {

/**
 * IosSelect
 * @param {number} level 选择的层级 1 2 3 4 5 6 最多支持6层
 * @param {...Array} data [oneLevelData[, twoLevelData[, threeLevelData[, fourLevelData[, fiveLevelData[, sixLevelData]]]]]] 可以用数组，也可以用方法
 * @param {Object} options
 * @param {string=} options.container 组件插入到该元素下 可选
 * @param {Function} options.callback 选择完毕后的回调函数
 * @param {Function} options.fallback 选择取消后的回调函数
 * @param {Function} options.maskCallback 点击背景层关闭组件时触发的方法
 * @param {string=} options.title 选择框title
 * @param {number=} options.itemHeight 每一项的高度，默认 35
 * @param {number=} options.itemShowCount 组件展示的项数，默认 7，可选3,5,7,9，不过不是3,5,7,9则展示7项
 * @param {number=} options.headerHeight 组件标题栏高度 默认 44
 * @param {css=} options.cssUnit px或者rem 默认是px
 * @param {string=} options.addClassName 组件额外类名 用于自定义样式
 * @param {...Array=} options.relation 数组 [oneTwoRelation, twoThreeRelation, threeFourRelation, fourFiveRelation] 默认值：[0, 0, 0, 0, 0, 0]
 * @param {number=} options.relation.oneTwoRelation 第一列和第二列是否通过parentId关联
 * @param {number=} options.relation.twoThreeRelation 第二列和第三列是否通过parentId关联
 * @param {number=} options.relation.threeFourRelation 第三列和第四列是否通过parentId关联
 * @param {number=} options.relation.fourFiveRelation 第四列和第五列是否通过parentId关联
 * @param {number=} options.relation.fiveSixRelation 第五列和第六列是否通过parentId关联
 * @param {string=} options.oneLevelId 第一级选中id
 * @param {string=} options.twoLevelId 第二级选中id
 * @param {string=} options.threeLevelId 第三级选中id
 * @param {string=} options.fourLevelId 第四级选中id
 * @param {string=} options.fiveLevelId 第五级选中id
 * @param {string=} options.sixLevelId 第六级选中id
 * @param {boolean=} options.showLoading 如果你的数据是异步加载的，可以使用该参数设置为true，下拉菜单会有加载中的效果
 * @param {boolean=} options.showAnimate 是否需要入场动画和退场动画，如需自定义动画效果，请修改css
 */
(function () {
	/* modify by zhoushengmufc,based on iScroll v5.2.0 */
	var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
		window.setTimeout(callback, 1000 / 60);
	};

	var utils = function () {
		var me = {};

		var _elementStyle = document.createElement('div').style;
		var _vendor = function () {
			var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
			    transform,
			    i = 0,
			    l = vendors.length;

			for (; i < l; i++) {
				transform = vendors[i] + 'ransform';
				if (transform in _elementStyle) return vendors[i].substr(0, vendors[i].length - 1);
			}

			return false;
		}();

		function _prefixStyle(style) {
			if (_vendor === false) return false;
			if (_vendor === '') return style;
			return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
		}

		me.getTime = Date.now || function getTime() {
			return new Date().getTime();
		};

		me.extend = function (target, obj) {
			for (var i in obj) {
				target[i] = obj[i];
			}
		};

		me.addEvent = function (el, type, fn, capture) {
			el.addEventListener(type, fn, !!capture);
		};

		me.removeEvent = function (el, type, fn, capture) {
			el.removeEventListener(type, fn, !!capture);
		};

		me.prefixPointerEvent = function (pointerEvent) {
			return window.MSPointerEvent ? 'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8) : pointerEvent;
		};

		me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
			var distance = current - start,
			    speed = Math.abs(distance) / time,
			    destination,
			    duration;

			deceleration = deceleration === undefined ? 0.0006 : deceleration;

			destination = current + speed * speed / (2 * deceleration) * (distance < 0 ? -1 : 1);
			duration = speed / deceleration;

			if (destination < lowerMargin) {
				destination = wrapperSize ? lowerMargin - wrapperSize / 2.5 * (speed / 8) : lowerMargin;
				distance = Math.abs(destination - current);
				duration = distance / speed;
			} else if (destination > 0) {
				destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
				distance = Math.abs(current) + destination;
				duration = distance / speed;
			}

			return {
				destination: Math.round(destination),
				duration: duration
			};
		};

		var _transform = _prefixStyle('transform');

		me.extend(me, {
			hasTransform: _transform != false,
			hasPerspective: _prefixStyle('perspective') in _elementStyle,
			hasTouch: 'ontouchstart' in window,
			hasPointer: !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
			hasTransition: _prefixStyle('transition') in _elementStyle
		});

		/*
  This should find all Android browsers lower than build 535.19 (both stock browser and webview)
  - galaxy S2 is ok
  - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
  - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
  - galaxy S3 is badAndroid (stock brower, webview)
   `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
  - galaxy S4 is badAndroid (stock brower, webview)
   `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
  - galaxy S5 is OK
   `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
  - galaxy S6 is OK
   `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
  */
		me.isBadAndroid = function () {
			var appVersion = window.navigator.appVersion;
			// Android browser is not a chrome browser.
			if (/Android/.test(appVersion) && !/Chrome\/\d/.test(appVersion)) {
				var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
				if (safariVersion && typeof safariVersion === "object" && safariVersion.length >= 2) {
					return parseFloat(safariVersion[1]) < 535.19;
				} else {
					return true;
				}
			} else {
				return false;
			}
		}();

		me.extend(me.style = {}, {
			transform: _transform,
			transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
			transitionDuration: _prefixStyle('transitionDuration'),
			transitionDelay: _prefixStyle('transitionDelay'),
			transformOrigin: _prefixStyle('transformOrigin')
		});

		me.hasClass = function (e, c) {
			var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
			return re.test(e.className);
		};

		me.addClass = function (e, c) {
			if (me.hasClass(e, c)) {
				return;
			}

			var newclass = e.className.split(' ');
			newclass.push(c);
			e.className = newclass.join(' ');
		};

		me.removeClass = function (e, c) {
			if (!me.hasClass(e, c)) {
				return;
			}

			var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
			e.className = e.className.replace(re, ' ');
		};

		me.offset = function (el) {
			var left = -el.offsetLeft,
			    top = -el.offsetTop;

			// jshint -W084
			while (el = el.offsetParent) {
				left -= el.offsetLeft;
				top -= el.offsetTop;
			}
			// jshint +W084

			return {
				left: left,
				top: top
			};
		};

		me.preventDefaultException = function (el, exceptions) {
			for (var i in exceptions) {
				if (exceptions[i].test(el[i])) {
					return true;
				}
			}

			return false;
		};

		me.extend(me.eventType = {}, {
			touchstart: 1,
			touchmove: 1,
			touchend: 1,

			mousedown: 2,
			mousemove: 2,
			mouseup: 2,

			pointerdown: 3,
			pointermove: 3,
			pointerup: 3,

			MSPointerDown: 3,
			MSPointerMove: 3,
			MSPointerUp: 3
		});

		me.extend(me.ease = {}, {
			quadratic: {
				style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				fn: function (k) {
					return k * (2 - k);
				}
			},
			circular: {
				style: 'cubic-bezier(0.1, 0.57, 0.1, 1)', // Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
				fn: function (k) {
					return Math.sqrt(1 - --k * k);
				}
			},
			back: {
				style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				fn: function (k) {
					var b = 4;
					return (k = k - 1) * k * ((b + 1) * k + b) + 1;
				}
			},
			bounce: {
				style: '',
				fn: function (k) {
					if ((k /= 1) < 1 / 2.75) {
						return 7.5625 * k * k;
					} else if (k < 2 / 2.75) {
						return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
					} else if (k < 2.5 / 2.75) {
						return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
					} else {
						return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
					}
				}
			},
			elastic: {
				style: '',
				fn: function (k) {
					var f = 0.22,
					    e = 0.4;

					if (k === 0) {
						return 0;
					}
					if (k == 1) {
						return 1;
					}

					return e * Math.pow(2, -10 * k) * Math.sin((k - f / 4) * (2 * Math.PI) / f) + 1;
				}
			}
		});

		me.tap = function (e, eventName) {
			var ev = document.createEvent('Event');
			ev.initEvent(eventName, true, true);
			ev.pageX = e.pageX;
			ev.pageY = e.pageY;
			e.target.dispatchEvent(ev);
		};

		me.click = function (e) {
			var target = e.target,
			    ev;

			if (!/(SELECT|INPUT|TEXTAREA)/i.test(target.tagName)) {
				// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/initMouseEvent
				// initMouseEvent is deprecated.
				ev = document.createEvent(window.MouseEvent ? 'MouseEvents' : 'Event');
				ev.initEvent('click', true, true);
				ev.view = e.view || window;
				ev.detail = 1;
				ev.screenX = target.screenX || 0;
				ev.screenY = target.screenY || 0;
				ev.clientX = target.clientX || 0;
				ev.clientY = target.clientY || 0;
				ev.ctrlKey = !!e.ctrlKey;
				ev.altKey = !!e.altKey;
				ev.shiftKey = !!e.shiftKey;
				ev.metaKey = !!e.metaKey;
				ev.button = 0;
				ev.relatedTarget = null;
				ev._constructed = true;
				target.dispatchEvent(ev);
			}
		};

		return me;
	}();
	function IScrollForIosSelect(el, options) {
		this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
		this.scroller = this.wrapper.children[0];
		this.scrollerStyle = this.scroller.style; // cache style for better performance

		this.options = {
			disablePointer: true,
			disableTouch: !utils.hasTouch,
			disableMouse: utils.hasTouch,
			startX: 0,
			startY: 0,
			scrollY: true,
			directionLockThreshold: 5,
			momentum: true,

			bounce: true,
			bounceTime: 600,
			bounceEasing: '',

			preventDefault: true,
			preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },

			HWCompositing: true,
			useTransition: true,
			useTransform: true,
			bindToWrapper: typeof window.onmousedown === "undefined"
		};

		for (var i in options) {
			this.options[i] = options[i];
		}

		// Normalize options
		this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

		this.options.useTransition = utils.hasTransition && this.options.useTransition;
		this.options.useTransform = utils.hasTransform && this.options.useTransform;

		this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
		this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

		// If you want eventPassthrough I have to lock one of the axes
		this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
		this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

		// With eventPassthrough we also need lockDirection mechanism
		this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
		this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

		this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

		this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

		if (this.options.tap === true) {
			this.options.tap = 'tap';
		}

		// https://github.com/cubiq/iscrollForIosSelect/issues/1029
		if (!this.options.useTransition && !this.options.useTransform) {
			if (!/relative|absolute/i.test(this.scrollerStyle.position)) {
				this.scrollerStyle.position = "relative";
			}
		}

		if (this.options.shrinkScrollbars == 'scale') {
			this.options.useTransition = false;
		}

		this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

		if (this.options.probeType == 3) {
			this.options.useTransition = false;
		}
		this.x = 0;
		this.y = 0;
		this.directionX = 0;
		this.directionY = 0;
		this._events = {};
		this._init();
		this.refresh();

		this.scrollTo(this.options.startX, this.options.startY);
		this.enable();
	}

	IScrollForIosSelect.prototype = {
		version: '1.0.0',

		_init: function () {
			this._initEvents();
		},

		destroy: function () {
			this._initEvents(true);
			clearTimeout(this.resizeTimeout);
			this.resizeTimeout = null;
			this._execEvent('destroy');
		},

		_transitionEnd: function (e) {
			if (e.target != this.scroller || !this.isInTransition) {
				return;
			}

			this._transitionTime();
			if (!this.resetPosition(this.options.bounceTime)) {
				this.isInTransition = false;
				this._execEvent('scrollEnd');
			}
		},

		_start: function (e) {
			// React to left mouse button only
			if (utils.eventType[e.type] != 1) {
				// for button property
				// http://unixpapa.com/js/mouse.html
				var button;
				if (!e.which) {
					/* IE case */
					button = e.button < 2 ? 0 : e.button == 4 ? 1 : 2;
				} else {
					/* All others */
					button = e.button;
				}
				if (button != 0) {
					return;
				}
			}

			if (!this.enabled || this.initiated && utils.eventType[e.type] != this.initiated) {
				return;
			}

			if (this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
				e.preventDefault();
			}

			var point = e.touches ? e.touches[0] : e,
			    pos;

			this.initiated = utils.eventType[e.type];
			this.moved = false;
			this.distX = 0;
			this.distY = 0;
			this.directionX = 0;
			this.directionY = 0;
			this.directionLocked = 0;

			this.startTime = utils.getTime();

			if (this.options.useTransition && this.isInTransition) {
				this._transitionTime();
				this.isInTransition = false;
				pos = this.getComputedPosition();
				this._translate(Math.round(pos.x), Math.round(pos.y));
				this._execEvent('scrollEnd');
			} else if (!this.options.useTransition && this.isAnimating) {
				this.isAnimating = false;
				this._execEvent('scrollEnd');
			}

			this.startX = this.x;
			this.startY = this.y;
			this.absStartX = this.x;
			this.absStartY = this.y;
			this.pointX = point.pageX;
			this.pointY = point.pageY;

			this._execEvent('beforeScrollStart');
		},

		_move: function (e) {
			if (!this.enabled || utils.eventType[e.type] != this.initiated) {
				return;
			}

			if (this.options.preventDefault) {// increases performance on Android? TODO: check!
				// e.preventDefault();
			}

			var point = e.touches ? e.touches[0] : e,
			    deltaX = point.pageX - this.pointX,
			    deltaY = point.pageY - this.pointY,
			    timestamp = utils.getTime(),
			    newX,
			    newY,
			    absDistX,
			    absDistY;

			this.pointX = point.pageX;
			this.pointY = point.pageY;

			this.distX += deltaX;
			this.distY += deltaY;
			absDistX = Math.abs(this.distX);
			absDistY = Math.abs(this.distY);

			// We need to move at least 10 pixels for the scrolling to initiate
			if (timestamp - this.endTime > 300 && absDistX < 10 && absDistY < 10) {
				return;
			}

			// If you are scrolling in one direction lock the other
			if (!this.directionLocked && !this.options.freeScroll) {
				if (absDistX > absDistY + this.options.directionLockThreshold) {
					this.directionLocked = 'h'; // lock horizontally
				} else if (absDistY >= absDistX + this.options.directionLockThreshold) {
					this.directionLocked = 'v'; // lock vertically
				} else {
					this.directionLocked = 'n'; // no lock
				}
			}

			if (this.directionLocked == 'h') {
				if (this.options.eventPassthrough == 'vertical') {
					e.preventDefault();
				} else if (this.options.eventPassthrough == 'horizontal') {
					this.initiated = false;
					return;
				}

				deltaY = 0;
			} else if (this.directionLocked == 'v') {
				if (this.options.eventPassthrough == 'horizontal') {
					e.preventDefault();
				} else if (this.options.eventPassthrough == 'vertical') {
					this.initiated = false;
					return;
				}

				deltaX = 0;
			}

			deltaX = this.hasHorizontalScroll ? deltaX : 0;
			deltaY = this.hasVerticalScroll ? deltaY : 0;

			newX = this.x + deltaX;
			newY = this.y + deltaY;

			// Slow down if outside of the boundaries
			if (newX > 0 || newX < this.maxScrollX) {
				newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
			}
			if (newY > 0 || newY < this.maxScrollY) {
				newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
			}

			this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
			this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

			if (!this.moved) {
				this._execEvent('scrollStart');
			}

			this.moved = true;

			this._translate(newX, newY);
			if (timestamp - this.startTime > 300) {
				this.startTime = timestamp;
				this.startX = this.x;
				this.startY = this.y;

				if (this.options.probeType == 1) {
					this._execEvent('scroll');
				}
			}

			if (this.options.probeType > 1) {
				this._execEvent('scroll');
			}
		},

		_end: function (e) {
			if (!this.enabled || utils.eventType[e.type] != this.initiated) {
				return;
			}

			if (this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
				e.preventDefault();
			}

			var point = e.changedTouches ? e.changedTouches[0] : e,
			    momentumX,
			    momentumY,
			    duration = utils.getTime() - this.startTime,
			    newX = Math.round(this.x),
			    newY = Math.round(this.y),
			    distanceX = Math.abs(newX - this.startX),
			    distanceY = Math.abs(newY - this.startY),
			    time = 0,
			    easing = '';

			this.isInTransition = 0;
			this.initiated = 0;
			this.endTime = utils.getTime();

			// reset if we are outside of the boundaries
			if (this.resetPosition(this.options.bounceTime)) {
				return;
			}

			this.scrollTo(newX, newY); // ensures that the last position is rounded

			// we scrolled less than 10 pixels
			if (!this.moved) {
				if (this.options.tap) {
					utils.tap(e, this.options.tap);
				}

				if (this.options.click) {
					utils.click(e);
				}

				this._execEvent('scrollCancel');
				return;
			}

			if (this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100) {
				this._execEvent('flick');
				return;
			}

			// start momentum animation if needed
			if (this.options.momentum && duration < 300) {
				momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
				momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
				newX = momentumX.destination;
				newY = momentumY.destination;
				time = Math.max(momentumX.duration, momentumY.duration);
				this.isInTransition = 1;
			}

			if (this.options.snap) {
				var snap = this._nearestSnap(newX, newY);
				this.currentPage = snap;
				time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
				newX = snap.x;
				newY = snap.y;

				this.directionX = 0;
				this.directionY = 0;
				easing = this.options.bounceEasing;
			}

			if (newX != this.x || newY != this.y) {
				// change easing function when scroller goes out of the boundaries
				if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
					easing = utils.ease.quadratic;
				}

				this.scrollTo(newX, newY, time, easing);
				return;
			}

			this._execEvent('scrollEnd');
		},

		_resize: function () {
			var that = this;

			clearTimeout(this.resizeTimeout);

			this.resizeTimeout = setTimeout(function () {
				that.refresh();
			}, this.options.resizePolling);
		},

		resetPosition: function (time) {
			var x = this.x,
			    y = this.y;

			time = time || 0;

			if (!this.hasHorizontalScroll || this.x > 0) {
				x = 0;
			} else if (this.x < this.maxScrollX) {
				x = this.maxScrollX;
			}

			if (!this.hasVerticalScroll || this.y > 0) {
				y = 0;
			} else if (this.y < this.maxScrollY) {
				y = this.maxScrollY;
			}

			if (x == this.x && y == this.y) {
				return false;
			}

			this.scrollTo(x, y, time, this.options.bounceEasing);

			return true;
		},

		disable: function () {
			this.enabled = false;
		},

		enable: function () {
			this.enabled = true;
		},

		refresh: function () {
			var rf = this.wrapper.offsetHeight; // Force reflow

			this.wrapperWidth = this.wrapper.clientWidth;
			this.wrapperHeight = this.wrapper.clientHeight;

			this.scrollerWidth = this.scroller.offsetWidth;
			this.scrollerHeight = this.scroller.offsetHeight;

			this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
			this.maxScrollY = this.wrapperHeight - this.scrollerHeight;

			this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
			this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;

			if (!this.hasHorizontalScroll) {
				this.maxScrollX = 0;
				this.scrollerWidth = this.wrapperWidth;
			}

			if (!this.hasVerticalScroll) {
				this.maxScrollY = 0;
				this.scrollerHeight = this.wrapperHeight;
			}

			this.endTime = 0;
			this.directionX = 0;
			this.directionY = 0;

			this.wrapperOffset = utils.offset(this.wrapper);

			this._execEvent('refresh');

			this.resetPosition();
		},

		on: function (type, fn) {
			if (!this._events[type]) {
				this._events[type] = [];
			}

			this._events[type].push(fn);
		},

		off: function (type, fn) {
			if (!this._events[type]) {
				return;
			}

			var index = this._events[type].indexOf(fn);

			if (index > -1) {
				this._events[type].splice(index, 1);
			}
		},

		_execEvent: function (type) {
			if (!this._events[type]) {
				return;
			}

			var i = 0,
			    l = this._events[type].length;

			if (!l) {
				return;
			}

			for (; i < l; i++) {
				this._events[type][i].apply(this, [].slice.call(arguments, 1));
			}
		},

		scrollTo: function (x, y, time, easing) {
			easing = easing || utils.ease.circular;

			this.isInTransition = this.options.useTransition && time > 0;
			var transitionType = this.options.useTransition && easing.style;
			if (!time || transitionType) {
				if (transitionType) {
					this._transitionTimingFunction(easing.style);
					this._transitionTime(time);
				}
				this._translate(x, y);
			} else {
				this._animate(x, y, time, easing.fn);
			}
		},

		scrollToElement: function (el, time, offsetX, offsetY, easing) {
			el = el.nodeType ? el : this.scroller.querySelector(el);

			if (!el) {
				return;
			}

			var pos = utils.offset(el);

			pos.left -= this.wrapperOffset.left;
			pos.top -= this.wrapperOffset.top;

			// if offsetX/Y are true we center the element to the screen
			if (offsetX === true) {
				offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
			}
			if (offsetY === true) {
				offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
			}

			pos.left -= offsetX || 0;
			pos.top -= offsetY || 0;

			pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
			pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;

			time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time;

			this.scrollTo(pos.left, pos.top, time, easing);
		},

		_transitionTime: function (time) {
			if (!this.options.useTransition) {
				return;
			}
			time = time || 0;
			var durationProp = utils.style.transitionDuration;
			if (!durationProp) {
				return;
			}

			this.scrollerStyle[durationProp] = time + 'ms';

			if (!time && utils.isBadAndroid) {
				this.scrollerStyle[durationProp] = '0.0001ms';
				// remove 0.0001ms
				var self = this;
				rAF(function () {
					if (self.scrollerStyle[durationProp] === '0.0001ms') {
						self.scrollerStyle[durationProp] = '0s';
					}
				});
			}
		},

		_transitionTimingFunction: function (easing) {
			this.scrollerStyle[utils.style.transitionTimingFunction] = easing;
		},

		_translate: function (x, y) {
			if (this.options.useTransform) {

				this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;
			} else {
				x = Math.round(x);
				y = Math.round(y);
				this.scrollerStyle.left = x + 'px';
				this.scrollerStyle.top = y + 'px';
			}

			this.x = x;
			this.y = y;
		},

		_initEvents: function (remove) {
			var eventType = remove ? utils.removeEvent : utils.addEvent,
			    target = this.options.bindToWrapper ? this.wrapper : window;

			eventType(window, 'orientationchange', this);
			eventType(window, 'resize', this);

			if (this.options.click) {
				eventType(this.wrapper, 'click', this, true);
			}

			if (!this.options.disableMouse) {
				eventType(this.wrapper, 'mousedown', this);
				eventType(target, 'mousemove', this);
				eventType(target, 'mousecancel', this);
				eventType(target, 'mouseup', this);
			}

			if (utils.hasPointer && !this.options.disablePointer) {
				eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
				eventType(target, utils.prefixPointerEvent('pointermove'), this);
				eventType(target, utils.prefixPointerEvent('pointercancel'), this);
				eventType(target, utils.prefixPointerEvent('pointerup'), this);
			}

			if (utils.hasTouch && !this.options.disableTouch) {
				eventType(this.wrapper, 'touchstart', this);
				eventType(target, 'touchmove', this);
				eventType(target, 'touchcancel', this);
				eventType(target, 'touchend', this);
			}

			eventType(this.scroller, 'transitionend', this);
			eventType(this.scroller, 'webkitTransitionEnd', this);
			eventType(this.scroller, 'oTransitionEnd', this);
			eventType(this.scroller, 'MSTransitionEnd', this);
		},

		getComputedPosition: function () {
			var matrix = window.getComputedStyle(this.scroller, null),
			    x,
			    y;

			if (this.options.useTransform) {
				matrix = matrix[utils.style.transform].split(')')[0].split(', ');
				x = +(matrix[12] || matrix[4]);
				y = +(matrix[13] || matrix[5]);
			} else {
				x = +matrix.left.replace(/[^-\d.]/g, '');
				y = +matrix.top.replace(/[^-\d.]/g, '');
			}

			return { x: x, y: y };
		},

		_animate: function (destX, destY, duration, easingFn) {
			var that = this,
			    startX = this.x,
			    startY = this.y,
			    startTime = utils.getTime(),
			    destTime = startTime + duration;

			function step() {
				var now = utils.getTime(),
				    newX,
				    newY,
				    easing;

				if (now >= destTime) {
					that.isAnimating = false;
					that._translate(destX, destY);

					if (!that.resetPosition(that.options.bounceTime)) {
						that._execEvent('scrollEnd');
					}

					return;
				}

				now = (now - startTime) / duration;
				easing = easingFn(now);
				newX = (destX - startX) * easing + startX;
				newY = (destY - startY) * easing + startY;
				that._translate(newX, newY);

				if (that.isAnimating) {
					rAF(step);
				}

				if (that.options.probeType == 3) {
					that._execEvent('scroll');
				}
			}

			this.isAnimating = true;
			step();
		},

		handleEvent: function (e) {
			switch (e.type) {
				case 'touchstart':
				case 'pointerdown':
				case 'MSPointerDown':
				case 'mousedown':
					this._start(e);
					break;
				case 'touchmove':
				case 'pointermove':
				case 'MSPointerMove':
				case 'mousemove':
					this._move(e);
					break;
				case 'touchend':
				case 'pointerup':
				case 'MSPointerUp':
				case 'mouseup':
				case 'touchcancel':
				case 'pointercancel':
				case 'MSPointerCancel':
				case 'mousecancel':
					this._end(e);
					break;
				case 'orientationchange':
				case 'resize':
					this._resize();
					break;
				case 'transitionend':
				case 'webkitTransitionEnd':
				case 'oTransitionEnd':
				case 'MSTransitionEnd':
					this._transitionEnd(e);
					break;
				case 'click':
					if (this.enabled && !e._constructed) {
						e.preventDefault();
						e.stopPropagation();
					}
					break;
			}
		}
	};
	IScrollForIosSelect.utils = utils;

	var iosSelectUtil = {
		isArray: function (arg1) {
			return Object.prototype.toString.call(arg1) === '[object Array]';
		},
		isFunction: function (arg1) {
			return typeof arg1 === 'function';
		},
		attrToData: function (dom, index) {
			var obj = {};
			for (var p in dom.dataset) {
				obj[p] = dom.dataset[p];
			}
			obj['dom'] = dom;
			obj['atindex'] = index;
			return obj;
		},
		attrToHtml: function (obj) {
			var html = '';
			for (var p in obj) {
				html += 'data-' + p + '="' + obj[p] + '"';
			}
			return html;
		}
	};
	/*function preventEventFun(e) {
 	e.preventDefault();
 }*/
	// Layer
	function Layer(html, opts) {
		if (!(this instanceof Layer)) {
			return new Layer(html, opts);
		}
		this.html = html;
		this.opts = opts;
		var el = document.createElement('div');
		el.className = 'olay';
		var layer_el = document.createElement('div');
		layer_el.className = 'layer';
		this.el = el;
		this.layer_el = layer_el;
		this.init();
	}
	Layer.prototype = {
		init: function () {
			this.layer_el.innerHTML = this.html;
			if (this.opts.container && document.querySelector(this.opts.container)) {
				document.querySelector(this.opts.container).appendChild(this.el);
			} else {
				document.body.appendChild(this.el);
			}
			this.el.appendChild(this.layer_el);
			this.el.style.height = Math.max(document.documentElement.getBoundingClientRect().height, window.innerHeight);
			if (this.opts.className) {
				this.el.className += ' ' + this.opts.className;
			}
			this.bindEvent();
		},
		bindEvent: function () {
			var sureDom = this.el.querySelectorAll('.sure');
			var closeDom = this.el.querySelectorAll('.close');
			var self = this;
			this.el.addEventListener('click', function (e) {
				self.close();
				self.opts.maskCallback && self.opts.maskCallback();
			});
			this.layer_el.addEventListener('click', function (e) {
				e.stopPropagation();
			});
			Array.prototype.slice.call(sureDom).forEach(function (item, index) {
				item.addEventListener('click', function () {
					self.close();
				});
			});
			Array.prototype.slice.call(closeDom).forEach(function (item, index) {
				item.addEventListener('click', function () {
					self.close();
					self.opts.fallback && self.opts.fallback();
				});
			});
		},
		close: function () {
			var self = this;
			if (self.el) {
				if (self.opts.showAnimate) {
					self.el.className += ' fadeOutDown';
					setTimeout(function () {
						self.removeDom();
					}, 500);
				} else {
					self.removeDom();
				}
			}
		},
		removeDom: function () {
			this.el.parentNode.removeChild(this.el);
			this.el = null;
			if (document.documentElement.classList.contains('ios-select-body-class')) {
				document.documentElement.classList.remove('ios-select-body-class');
				/*document.body.removeEventListener('touchmove', preventEventFun, {
    	passive: false
    });*/
			}
		}
	};
	function IosSelect(level, data, options) {
		if (!iosSelectUtil.isArray(data) || data.length === 0) {
			throw new TypeError('the data must be a non-empty array!');
			return;
		}
		if ([1, 2, 3, 4, 5, 6].indexOf(level) == -1) {
			throw new RangeError('the level parameter must be one of 1,2,3,4,5,6!');
			return;
		}
		this.data = data;
		this.level = level || 1;
		this.options = options;
		this.typeBox = 'one-level-box';
		if (this.level === 1) {
			this.typeBox = 'one-level-box';
		} else if (this.level === 2) {
			this.typeBox = 'two-level-box';
		} else if (this.level === 3) {
			this.typeBox = 'three-level-box';
		} else if (this.level === 4) {
			this.typeBox = 'four-level-box';
		} else if (this.level === 5) {
			this.typeBox = 'five-level-box';
		} else if (this.level === 6) {
			this.typeBox = 'six-level-box';
		}
		this.title = options.title || '';
		this.options.itemHeight = options.itemHeight || 35;
		this.options.itemShowCount = [3, 5, 7, 9].indexOf(options.itemShowCount) != -1 ? options.itemShowCount : 7;
		this.options.coverArea1Top = Math.floor(this.options.itemShowCount / 2);
		this.options.coverArea2Top = Math.ceil(this.options.itemShowCount / 2);
		this.options.headerHeight = options.headerHeight || 44;
		this.options.relation = iosSelectUtil.isArray(this.options.relation) ? this.options.relation : [];
		this.options.oneTwoRelation = this.options.relation[0];
		this.options.twoThreeRelation = this.options.relation[1];
		this.options.threeFourRelation = this.options.relation[2];
		this.options.fourFiveRelation = this.options.relation[3];
		this.options.fiveSixRelation = this.options.relation[4];
		if (this.options.cssUnit != 'px' && this.options.cssUnit != 'rem') {
			this.options.cssUnit = 'px';
		}
		var self = this;
		// 选中元素的信息
		this.selectOneObj = {
			id: self.options.oneLevelId
		};
		this.selectTwoObj = {
			id: self.options.twoLevelId
		};
		this.selectThreeObj = {
			id: self.options.threeLevelId
		};
		this.selectFourObj = {
			id: self.options.fourLevelId
		};
		this.selectFiveObj = {
			id: self.options.fiveLevelId
		};
		this.selectSixObj = {
			id: self.options.sixLevelId
		};
		this.setBase();
		this.init();
	};

	IosSelect.prototype = {
		init: function () {
			this.initLayer();
			this.setLevelData(1, this.options.oneLevelId, this.options.twoLevelId, this.options.threeLevelId, this.options.fourLevelId, this.options.fiveLevelId, this.options.sixLevelId);
		},
		initLayer: function () {
			var self = this;
			var sureText = this.options.sureText || '确定';
			var closeText = this.options.closeText || '取消';
			var headerHeightCss = this.options.headerHeight + this.options.cssUnit;
			var all_html = ['<header style="height: ' + headerHeightCss + '; line-height: ' + headerHeightCss + '" class="iosselect-header">', '<a style="height: ' + headerHeightCss + '; line-height: ' + headerHeightCss + '" href="javascript:void(0)" class="close">' + closeText + '</a>', '<a style="height: ' + headerHeightCss + '; line-height: ' + headerHeightCss + '" href="javascript:void(0)" class="sure">' + sureText + '</a>', '<h2 id="iosSelectTitle"></h2>', '</header>', '<section class="iosselect-box">', '<div class="one-level-contain" id="oneLevelContain">', '<ul class="select-one-level">', '</ul>', '</div>', '<div class="two-level-contain" id="twoLevelContain">', '<ul class="select-two-level">', '</ul>', '</div>', '<div class="three-level-contain" id="threeLevelContain">', '<ul class="select-three-level">', '</ul>', '</div>', '<div class="four-level-contain" id="fourLevelContain">', '<ul class="select-four-level">', '</ul>', '</div>', '<div class="five-level-contain" id="fiveLevelContain">', '<ul class="select-five-level">', '</ul>', '</div>', '<div class="six-level-contain" id="sixLevelContain">', '<ul class="select-six-level">', '</ul>', '</div>', '</section>', '<hr class="cover-area1"/>', '<hr class="cover-area2"/>', '<div class="ios-select-loading-box" id="iosSelectLoadingBox">', '<div class="ios-select-loading"></div>', '</div>'].join('\r\n');
			this.iosSelectLayer = new Layer(all_html, {
				className: 'ios-select-widget-box ' + this.typeBox + (this.options.addClassName ? ' ' + this.options.addClassName : '') + (this.options.showAnimate ? ' fadeInUp' : ''),
				container: this.options.container || '',
				showAnimate: this.options.showAnimate,
				fallback: this.options.fallback,
				maskCallback: this.options.maskCallback
			});

			this.iosSelectTitleDom = this.iosSelectLayer.el.querySelector('#iosSelectTitle');
			this.iosSelectLoadingBoxDom = this.iosSelectLayer.el.querySelector('#iosSelectLoadingBox');
			this.iosSelectTitleDom.innerHTML = this.title;
			if (this.options.headerHeight && this.options.itemHeight) {
				this.coverArea1Dom = this.iosSelectLayer.el.querySelector('.cover-area1');
				this.coverArea1Dom.style.top = this.options.headerHeight + this.options.itemHeight * this.options.coverArea1Top + this.options.cssUnit;
				this.coverArea2Dom = this.iosSelectLayer.el.querySelector('.cover-area2');
				this.coverArea2Dom.style.top = this.options.headerHeight + this.options.itemHeight * this.options.coverArea2Top + this.options.cssUnit;
			}

			this.oneLevelContainDom = this.iosSelectLayer.el.querySelector('#oneLevelContain');
			this.twoLevelContainDom = this.iosSelectLayer.el.querySelector('#twoLevelContain');
			this.threeLevelContainDom = this.iosSelectLayer.el.querySelector('#threeLevelContain');
			this.fourLevelContainDom = this.iosSelectLayer.el.querySelector('#fourLevelContain');
			this.fiveLevelContainDom = this.iosSelectLayer.el.querySelector('#fiveLevelContain');
			this.sixLevelContainDom = this.iosSelectLayer.el.querySelector('#sixLevelContain');

			this.oneLevelUlContainDom = this.iosSelectLayer.el.querySelector('.select-one-level');
			this.twoLevelUlContainDom = this.iosSelectLayer.el.querySelector('.select-two-level');
			this.threeLevelUlContainDom = this.iosSelectLayer.el.querySelector('.select-three-level');
			this.fourLevelUlContainDom = this.iosSelectLayer.el.querySelector('.select-four-level');
			this.fiveLevelUlContainDom = this.iosSelectLayer.el.querySelector('.select-five-level');
			this.sixLevelUlContainDom = this.iosSelectLayer.el.querySelector('.select-six-level');

			this.iosSelectLayer.el.querySelector('.layer').style.height = this.options.itemHeight * this.options.itemShowCount + this.options.headerHeight + this.options.cssUnit;

			this.oneLevelContainDom.style.height = this.options.itemHeight * this.options.itemShowCount + this.options.cssUnit;
			document.documentElement.classList.add('ios-select-body-class');
			/*document.body.addEventListener('touchmove', preventEventFun, {
   	passive: false
   });*/

			this.scrollOne = new IScrollForIosSelect('#oneLevelContain', {
				probeType: 3,
				bounce: false
			});
			this.setScorllEvent(this.scrollOne, 1);

			if (this.level >= 2) {
				this.twoLevelContainDom.style.height = this.options.itemHeight * this.options.itemShowCount + this.options.cssUnit;
				this.scrollTwo = new IScrollForIosSelect('#twoLevelContain', {
					probeType: 3,
					bounce: false
				});
				this.setScorllEvent(this.scrollTwo, 2);
			}
			if (this.level >= 3) {
				this.threeLevelContainDom.style.height = this.options.itemHeight * this.options.itemShowCount + this.options.cssUnit;
				this.scrollThree = new IScrollForIosSelect('#threeLevelContain', {
					probeType: 3,
					bounce: false
				});
				this.setScorllEvent(this.scrollThree, 3);
			}
			if (this.level >= 4) {
				this.fourLevelContainDom.style.height = this.options.itemHeight * this.options.itemShowCount + this.options.cssUnit;
				this.scrollFour = new IScrollForIosSelect('#fourLevelContain', {
					probeType: 3,
					bounce: false
				});
				this.setScorllEvent(this.scrollFour, 4);
			}
			if (this.level >= 5) {
				this.fiveLevelContainDom.style.height = this.options.itemHeight * this.options.itemShowCount + this.options.cssUnit;
				this.scrollFive = new IScrollForIosSelect('#fiveLevelContain', {
					probeType: 3,
					bounce: false
				});
				this.setScorllEvent(this.scrollFive, 5);
			}
			if (this.level >= 6) {
				this.sixLevelContainDom.style.height = this.options.itemHeight * this.options.itemShowCount + this.options.cssUnit;
				this.scrollSix = new IScrollForIosSelect('#sixLevelContain', {
					probeType: 3,
					bounce: false
				});
				this.setScorllEvent(this.scrollSix, 6);
			}

			// 确认
			this.selectBtnDom = this.iosSelectLayer.el.querySelector('.sure');
			this.selectBtnDom.addEventListener('click', function (e) {
				self.options.callback && self.options.callback(self.selectOneObj, self.selectTwoObj, self.selectThreeObj, self.selectFourObj, self.selectFiveObj, self.selectSixObj);
			});
		},
		mapKeyByIndex: function (index) {
			var self = this;
			var map = {
				index: 1,
				levelContain: self.oneLevelContainDom,
				relation: self.options.oneTwoRelation
			};
			if (index === 2) {
				map = {
					index: 2,
					levelContain: self.twoLevelContainDom,
					relation: self.options.twoThreeRelation
				};
			} else if (index === 3) {
				map = {
					index: 3,
					levelContain: self.threeLevelContainDom,
					relation: self.options.threeFourRelation
				};
			} else if (index === 4) {
				map = {
					index: 4,
					levelContain: self.fourLevelContainDom,
					relation: self.options.fourFiveRelation
				};
			} else if (index === 5) {
				map = {
					index: 5,
					levelContain: self.fiveLevelContainDom,
					relation: self.options.fiveSixRelation
				};
			} else if (index === 6) {
				map = {
					index: 6,
					levelContain: self.sixLevelContainDom,
					relation: 0
				};
			}
			return map;
		},
		setScorllEvent: function (scrollInstance, index) {
			var self = this;
			var mapKey = self.mapKeyByIndex(index);
			scrollInstance.on('scrollStart', function () {
				self.toggleClassList(mapKey.levelContain);
			});
			scrollInstance.on('scroll', function () {
				if (isNaN(this.y)) {
					return;
				}
				var pa = Math.abs(this.y / self.baseSize) / self.options.itemHeight;
				var plast = 1;
				plast = Math.round(pa) + 1;
				self.toggleClassList(mapKey.levelContain);
				self.changeClassName(mapKey.levelContain, plast);
			});
			scrollInstance.on('scrollEnd', function () {
				var pa = Math.abs(this.y / self.baseSize) / self.options.itemHeight;
				var plast = 1;
				var to = 0;
				if (Math.ceil(pa) === Math.round(pa)) {
					to = Math.ceil(pa) * self.options.itemHeight * self.baseSize;
					plast = Math.ceil(pa) + 1;
				} else {
					to = Math.floor(pa) * self.options.itemHeight * self.baseSize;
					plast = Math.floor(pa) + 1;
				}
				scrollInstance.scrollTo(0, -to, 0);

				self.toggleClassList(mapKey.levelContain);

				var pdom = self.changeClassName(mapKey.levelContain, plast);
				var obj = iosSelectUtil.attrToData(pdom, plast);
				self.setSelectObj(index, obj);

				if (self.level > index) {
					if (mapKey.relation === 1 && iosSelectUtil.isArray(self.data[index]) || iosSelectUtil.isFunction(self.data[index])) {
						self.setLevelData(index + 1, self.selectOneObj.id, self.selectTwoObj.id, self.selectThreeObj.id, self.selectFourObj.id, self.selectFiveObj.id, self.selectSixObj.id);
					}
				}
			});
			scrollInstance.on('scrollCancel', function () {
				var pa = Math.abs(this.y / self.baseSize) / self.options.itemHeight;
				var plast = 1;
				var to = 0;
				if (Math.ceil(pa) === Math.round(pa)) {
					to = Math.ceil(pa) * self.options.itemHeight * self.baseSize;
					plast = Math.ceil(pa) + 1;
				} else {
					to = Math.floor(pa) * self.options.itemHeight * self.baseSize;
					plast = Math.floor(pa) + 1;
				}
				scrollInstance.scrollTo(0, -to, 0);

				self.toggleClassList(mapKey.levelContain);

				var pdom = self.changeClassName(mapKey.levelContain, plast);
				var obj = iosSelectUtil.attrToData(pdom, plast);
				self.setSelectObj(index, obj);

				if (self.level > index) {
					if (mapKey.relation === 1 && iosSelectUtil.isArray(self.data[index]) || iosSelectUtil.isFunction(self.data[index])) {
						self.setLevelData(index + 1, self.selectOneObj.id, self.selectTwoObj.id, self.selectThreeObj.id, self.selectFourObj.id, self.selectFiveObj.id, self.selectSixObj.id);
					}
				}
			});
		},
		loadingShow: function () {
			this.options.showLoading && (this.iosSelectLoadingBoxDom.style.display = 'block');
		},
		loadingHide: function () {
			this.iosSelectLoadingBoxDom.style.display = 'none';
		},
		mapRenderByIndex: function (index) {
			var self = this;
			var map = {
				index: 1,
				relation: 0,
				levelUlContainDom: self.oneLevelUlContainDom,
				scrollInstance: self.scrollOne,
				levelContainDom: self.oneLevelContainDom
			};
			if (index === 2) {
				map = {
					index: 2,
					relation: self.options.oneTwoRelation,
					levelUlContainDom: self.twoLevelUlContainDom,
					scrollInstance: self.scrollTwo,
					levelContainDom: self.twoLevelContainDom
				};
			} else if (index === 3) {
				map = {
					index: 3,
					relation: self.options.twoThreeRelation,
					levelUlContainDom: self.threeLevelUlContainDom,
					scrollInstance: self.scrollThree,
					levelContainDom: self.threeLevelContainDom
				};
			} else if (index === 4) {
				map = {
					index: 4,
					relation: self.options.threeFourRelation,
					levelUlContainDom: self.fourLevelUlContainDom,
					scrollInstance: self.scrollFour,
					levelContainDom: self.fourLevelContainDom
				};
			} else if (index === 5) {
				map = {
					index: 5,
					relation: self.options.fourFiveRelation,
					levelUlContainDom: self.fiveLevelUlContainDom,
					scrollInstance: self.scrollFive,
					levelContainDom: self.fiveLevelContainDom
				};
			} else if (index === 6) {
				map = {
					index: 6,
					relation: self.options.fiveSixRelation,
					levelUlContainDom: self.sixLevelUlContainDom,
					scrollInstance: self.scrollSix,
					levelContainDom: self.sixLevelContainDom
				};
			}
			return map;
		},
		getLevelData: function (index, oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId) {
			var levelData = [];
			var renderMap = this.mapRenderByIndex(index);
			if (index === 1) {
				levelData = this.data[0];
			} else if (renderMap.relation === 1) {
				var pid = arguments[index - 1];
				this.data[index - 1].forEach(function (v, i, o) {
					if (v['parentId'] == pid) {
						levelData.push(v);
					}
				});
			} else {
				levelData = this.data[index - 1];
			}
			return levelData;
		},
		setLevelData: function (index, oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId, sixLevelId) {
			if (iosSelectUtil.isArray(this.data[index - 1])) {
				var levelData = this.getLevelData(index, oneLevelId, twoLevelId, threeLevelId, fourLevelId);
				this.renderLevel(index, oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId, sixLevelId, levelData);
			} else if (iosSelectUtil.isFunction(this.data[index - 1])) {
				this.loadingShow();
				this.data[index - 1].apply(this, [oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId].slice(0, index - 1).concat(function (levelData) {
					this.loadingHide();
					this.renderLevel(index, oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId, sixLevelId, levelData);
				}.bind(this)));
			} else {
				throw new Error('data format error');
			}
		},
		renderLevel: function (index, oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId, sixLevelId, levelData) {
			var plast = 0;
			var curLevelId = arguments[index];
			var hasAtId = levelData.some(function (v, i, o) {
				return v.id == curLevelId;
			});
			if (!hasAtId) {
				curLevelId = levelData[0]['id'];
			}
			var tmpHtml = '';
			var itemHeightStyle = this.options.itemHeight + this.options.cssUnit;
			tmpHtml += this.getWhiteItem();
			levelData.forEach(function (v, i, o) {
				if (v.id == curLevelId) {
					tmpHtml += '<li style="height: ' + itemHeightStyle + '; line-height: ' + itemHeightStyle + ';"' + iosSelectUtil.attrToHtml(v) + ' class="at">' + v.value + '</li>';
					plast = i + 1;
				} else {
					tmpHtml += '<li style="height: ' + itemHeightStyle + '; line-height: ' + itemHeightStyle + ';"' + iosSelectUtil.attrToHtml(v) + '>' + v.value + '</li>';
				}
			});
			tmpHtml += this.getWhiteItem();
			var renderMap = this.mapRenderByIndex(index);
			renderMap.levelUlContainDom.innerHTML = tmpHtml;
			renderMap.scrollInstance.refresh();
			renderMap.scrollInstance.scrollToElement(':nth-child(' + plast + ')', 0);
			var pdom = this.changeClassName(renderMap.levelContainDom, plast);
			var obj = iosSelectUtil.attrToData(pdom, plast);
			this.setSelectObj(index, obj);
			if (this.level > index) {
				this.setLevelData(index + 1, this.selectOneObj.id, this.selectTwoObj.id, this.selectThreeObj.id, this.selectFourObj.id, this.selectFiveObj.id, this.selectSixObj.id);
			}
		},
		setSelectObj: function (index, obj) {
			if (index === 1) {
				this.selectOneObj = obj;
			} else if (index === 2) {
				this.selectTwoObj = obj;
			} else if (index === 3) {
				this.selectThreeObj = obj;
			} else if (index === 4) {
				this.selectFourObj = obj;
			} else if (index === 5) {
				this.selectFiveObj = obj;
			} else if (index === 6) {
				this.selectSixObj = obj;
			}
		},
		getWhiteItem: function () {
			var whiteItemHtml = '';
			var itemHeightStyle = this.options.itemHeight + this.options.cssUnit;
			var itemLi = '<li style="height: ' + itemHeightStyle + '; line-height: ' + itemHeightStyle + '"></li>';
			whiteItemHtml += itemLi;
			if (this.options.itemShowCount > 3) {
				whiteItemHtml += itemLi;
			}
			if (this.options.itemShowCount > 5) {
				whiteItemHtml += itemLi;
			}
			if (this.options.itemShowCount > 7) {
				whiteItemHtml += itemLi;
			}
			return whiteItemHtml;
		},
		changeClassName: function (levelContainDom, plast) {
			var pdom;
			if (this.options.itemShowCount === 3) {
				pdom = levelContainDom.querySelector('li:nth-child(' + (plast + 1) + ')');
				pdom.classList.add('at');
			} else if (this.options.itemShowCount === 5) {
				pdom = levelContainDom.querySelector('li:nth-child(' + (plast + 2) + ')');
				pdom.classList.add('at');
				levelContainDom.querySelector('li:nth-child(' + (plast + 1) + ')').classList.add('side1');
				levelContainDom.querySelector('li:nth-child(' + (plast + 3) + ')').classList.add('side1');
			} else if (this.options.itemShowCount === 7) {
				pdom = levelContainDom.querySelector('li:nth-child(' + (plast + 3) + ')');
				pdom.classList.add('at');
				levelContainDom.querySelector('li:nth-child(' + (plast + 2) + ')').classList.add('side1');
				levelContainDom.querySelector('li:nth-child(' + (plast + 1) + ')').classList.add('side2');
				levelContainDom.querySelector('li:nth-child(' + (plast + 4) + ')').classList.add('side1');
				levelContainDom.querySelector('li:nth-child(' + (plast + 5) + ')').classList.add('side2');
			} else if (this.options.itemShowCount === 9) {
				pdom = levelContainDom.querySelector('li:nth-child(' + (plast + 4) + ')');
				pdom.classList.add('at');
				levelContainDom.querySelector('li:nth-child(' + (plast + 3) + ')').classList.add('side1');
				levelContainDom.querySelector('li:nth-child(' + (plast + 2) + ')').classList.add('side2');
				levelContainDom.querySelector('li:nth-child(' + (plast + 5) + ')').classList.add('side1');
				levelContainDom.querySelector('li:nth-child(' + (plast + 6) + ')').classList.add('side2');
			}
			return pdom;
		},
		setBase: function () {
			if (this.options.cssUnit === 'rem') {
				var dltDom = document.documentElement;
				var dltStyle = window.getComputedStyle(dltDom, null);
				var dltFontSize = dltStyle.fontSize;
				try {
					this.baseSize = /\d+(?:\.\d+)?/.exec(dltFontSize)[0];
				} catch (e) {
					this.baseSize = 1;
				}
			} else {
				this.baseSize = 1;
			}
		},
		toggleClassList: function (dom) {
			Array.prototype.slice.call(dom.querySelectorAll('li')).forEach(function (v) {
				if (v.classList.contains('at')) {
					v.classList.remove('at');
				} else if (v.classList.contains('side1')) {
					v.classList.remove('side1');
				} else if (v.classList.contains('side2')) {
					v.classList.remove('side2');
				}
			});
		}
	};

	window.IosSelect = IosSelect;
})();

/***/ }),

/***/ "QW2p":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "RKNJ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_iscroll_view__ = __webpack_require__("j1M6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_iscroll_view___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_iscroll_view__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_iscroll__ = __webpack_require__("bHfy");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_iscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_iscroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_clipboard2__ = __webpack_require__("wvfG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_clipboard2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_clipboard2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_index__ = __webpack_require__("dAjm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_area__ = __webpack_require__("vOUe");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_resource__ = __webpack_require__("ORbq");










__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_7_vue_resource__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_vue_iscroll_view___default.a, __WEBPACK_IMPORTED_MODULE_3_iscroll___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_vue_clipboard2___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_6__components_area__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{ path: '/', name: 'index', component: __WEBPACK_IMPORTED_MODULE_5__components_index__["a" /* default */] }, { path: '/area', name: 'area', component: __WEBPACK_IMPORTED_MODULE_6__components_area__["a" /* default */] }]
}));

/***/ }),

/***/ "dAjm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("MiD0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_29b7683e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("+XaC");
function injectStyle (ssrContext) {
  __webpack_require__("lo5B")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_29b7683e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "du88":
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhIAAgALMAAP///7Ozs/v7+9bW1uHh4fLy8rq6uoGBgTQ0NAEBARsbG8TExJeXl/39/VRUVAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQAAACwAAAAAIAAgAAAE5xDISSlLrOrNp0pKNRCdFhxVolJLEJQUoSgOpSYT4RowNSsvyW1icA16k8MMMRkCBjskBTFDAZyuAEkqCfxIQ2hgQRFvAQEEIjNxVDW6XNE4YagRjuBCwe60smQUDnd4Rz1ZAQZnFAGDd0hihh12CEE9kjAEVlycXIg7BAsMB6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YEvpJivxNaGmLHT0VnOgGYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHQjYKhKP1oZmADdEAAAh+QQFBQAAACwAAAAAGAAXAAAEchDISasKNeuJFKoHs4mUYlJIkmjIV54Soypsa0wmLSnqoTEtBw52mG0AjhYpBxioEqRNy8V0qFzNw+GGwlJki4lBqx1IBgjMkRIghwjrzcDti2/Gh7D9qN774wQGAYOEfwCChIV/gYmDho+QkZKTR3p7EQAh+QQFBQAAACwBAAAAHQAOAAAEchDISWdANesNHHJZwE2DUSEo5SjKKB2HOKGYFLD1CB/DnEoIlkti2PlyuKGEATMBaAACSyGbEDYD4zN1YIEmh0SCQQgYehNmTNNaKsQJXmBuuEYPi9ECAU/UFnNzeUp9VBQEBoFOLmFxWHNoQw6RWEocEQAh+QQFBQAAACwHAAAAGQARAAAEaRDICdZZNOvNDsvfBhBDdpwZgohBgE3nQaki0AYEjEqOGmqDlkEnAzBUjhrA0CoBYhLVSkm4SaAAWkahCFAWTU0A4RxzFWJnzXFWJJWb9pTihRu5dvghl+/7NQmBggo/fYKHCX8AiAmEEQAh+QQFBQAAACwOAAAAEgAYAAAEZXCwAaq9ODAMDOUAI17McYDhWA3mCYpb1RooXBktmsbt944BU6zCQCBQiwPB4jAihiCK86irTB20qvWp7Xq/FYV4TNWNz4oqWoEIgL0HX/eQSLi69boCikTkE2VVDAp5d1p0CW4RACH5BAUFAAAALA4AAAASAB4AAASAkBgCqr3YBIMXvkEIMsxXhcFFpiZqBaTXisBClibgAnd+ijYGq2I4HAamwXBgNHJ8BEbzgPNNjz7LwpnFDLvgLGJMdnw/5DRCrHaE3xbKm6FQwOt1xDnpwCvcJgcJMgEIeCYOCQlrF4YmBIoJVV2CCXZvCooHbwGRcAiKcmFUJhEAIfkEBQUAAAAsDwABABEAHwAABHsQyAkGoRivELInnOFlBjeM1BCiFBdcbMUtKQdTN0CUJru5NJQrYMh5VIFTTKJcOj2HqJQRhEqvqGuU+uw6AwgEwxkOO55lxIihoDjKY8pBoThPxmpAYi+hKzoeewkTdHkZghMIdCOIhIuHfBMOjxiNLR4KCW1ODAlxSxEAIfkEBQUAAAAsCAAOABgAEgAABGwQyEkrCDgbYvvMoOF5ILaNaIoGKroch9hacD3MFMHUBzMHiBtgwJMBFolDB4GoGGBCACKRcAAUWAmzOWJQExysQsJgWj0KqvKalTiYPhp1LBFTtp10Is6mT5gdVFx1bRN8FTsVCAqDOB9+KhEAIfkEBQUAAAAsAgASAB0ADgAABHgQyEmrBePS4bQdQZBdR5IcHmWEgUFQgWKaKbWwwSIhc4LonsXhBSCsQoOSScGQDJiWwOHQnAxWBIYJNXEoFCiEWDI9jCzESey7GwMM5doEwW4jJoypQQ743u1WcTV0CgFzbhJ5XClfHYd/EwZnHoYVDgiOfHKQNREAIfkEBQUAAAAsAAAPABkAEQAABGeQqUQruDjrW3vaYCZ5X2ie6EkcKaooTAsi7ytnTq046BBsNcTvItz4AotMwKZBIC6H6CVAJaCcT0CUBTgaTg5nTCu9GKiDEMPJg5YBBOpwlnVzLwtqyKnZagZWahoMB2M3GgsHSRsRACH5BAUFAAAALAEACAARABgAAARcMKR0gL34npkUyyCAcAmyhBijkGi2UW02VHFt33iu7yiDIDaD4/erEYGDlu/nuBAOJ9Dvc2EcDgFAYIuaXS3bbOh6MIC5IAP5Eh5fk2exC4tpgwZyiyFgvhEMBBEAIfkEBQUAAAAsAAACAA4AHQAABHMQyAnYoViSlFDGXBJ808Ep5KRwV8qEg+pRCOeoioKMwJK0Ekcu54h9AoghKgXIMZgAApQZcCCu2Ax2O6NUud2pmJcyHA4L0uDM/ljYDCnGfGakJQE5YH0wUBYBAUYfBIFkHwaBgxkDgX5lgXpHAXcpBIsRADs="

/***/ }),

/***/ "lo5B":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "q6r7":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABbCAIAAABxiHW3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY1QTlDOUE0N0EwOTExRTk4MTk0ODBBNzM1N0FBMjNEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY1QTlDOUE1N0EwOTExRTk4MTk0ODBBNzM1N0FBMjNEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjVBMzM1N0Y3QTA5MTFFOTgxOTQ4MEE3MzU3QUEyM0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjVBMzM1ODA3QTA5MTFFOTgxOTQ4MEE3MzU3QUEyM0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz57zGhUAAALlUlEQVR42uycCVfiShbHSUBBEERFEAFxX0Fkc5kvOJ9hvtC0DWFTRHaRTRYBd9FmmVsJBrT7vQeSBJlDnT59OGm6KH65VXf7Byz1n3/LVnZ4o/E+3u7KAgzj43zBiAU9MD4fH1H4fYygjKCMoIygjKCMoIygjKAMO5R6vf76+gp/D+OXbDabv379gvV3+f6uAvx6o565znr9Zwtqtdmwx+fzh4tIoVh0n3onJZMHFqtQKGQASqPRyGavTwjn/cMD/Gk2mpY907BwASL5QuHE5bwplcbGxjAMP7BYxsfH+9o+aNIimhThaDZfXl5CkbDL563VakNBJJfP/yAcQARev729xROXhM9bbzT6goJhmEQsUSmVMCl15aVaDUUjhNcLu/Q7EwEDv87lgEipXKYXPzExoVaq+Dje7/aRTk6ado1AJxSJULNXq9VILNLkNWwmM9jkNyWSz8GWr9ze0kTkcjksWK/TMXCmAA6ZVEpywYPhUIvL62skFoPXtn3z+Nj4dyOSvb6GLX97d0cTmZmehqXqNFocxxmAQnFB9rKzi2NYIBSkPgk8XBS4NJo2s0U4/l24wHmRyWZ/upx39/c0kdnpGbvZrAEiGMaYS6a4TE5OGnd2wV7Og4EWl7e36GUcXtuBSxeujnUi9ToQ+UE4Hx4f2kRmZsATa9QLWHdEeoDS4iKRGHe2MZznD7S4wJEeS1w2mk1wdSKhaLBEUpkM2MjD4yO1NoyHzc4iIgvz6u6J9AaFdkbGrR0cw88C5w3St1GuDvYRcIHjfVBEkuk0EHl8emoRwTDF7OyhxTqvmu+JSM9QqA8TSyS7W9s4jp36/ZTPB/d8mUzAag6sVjHnXGpAJJUCIk9A5H2RcwrFodWmmlP2SuQrUEiz5EnE4p2NLThffP4zKiECLgnEpXFgtcG/ckekVrtKJX+6XUCEvm1KxRwQUc7NfYHIF6FQQywWb29s8jHcfeZrcanVEqkk2AssSCKRcEAEfWLyyuF2PT8/00Qg1IQFzM0qvkakLyiIy8TE5sY6D8c8pz4q8Ef3LZ2Cc/fIagNvxS4RtGcREUg+aCLzStWhzaaYmf0ykX6hoMBZNLG1tg4r8Pi8v965pDLpJg9xkU5K2SMSv0o4gUi1ShNRq+aPbHaI0/ohwgAUGCKRaHNtDdbh9rUSIsQlnQZ/BFxkMhnjRN6AyOWl0+uuvhOBOBW8zLHNNi3vlwhjlTeIUDZW1+wo5B+jfWQ6m4E46vb+jmEiEDHGYw6Pq5MIRCL/sh8wQoTHYDlSJBSura7aO6oVKL68zp44nbe3t0x9CsTQkXjM6XHTZTQgollYOLbb5VNTjBDhMVujFY4L15ZXIYSjQ37gArnZD5ezfFthgAjKQqOExwPGQl3h43ztgubYdjAlY4wIj/HCNZjJ6tIKGfIL6VImylmdzlK53M/MkJcHoxGX1/P2650In6/VaI7tB5DEM0iEx0Y1H7isABerbUIk+lDdIGuCXyRSrQYjYXD8b++VLSCi02jB10D6ziwRHkstDjhuV/RLEEHRqRBwyeXzJ4SzcHPT62zgdC8iYe/ZKV3rE/D5ep0ObIQNIjz2+j5jY2NLi/qjjpAfuOQLhZ8EkS8WeiDy8hIIBT8QEQj0i4tHVjuk7GwQ4bHaDKO4dIb8jWYjX8z/dBFgNd3M8PzyfB4KQtpJ18mBCDmnndU0gt0OIbqrOuqutkJ+qgsD+Vs2l/sHIs/P/ouL03N/rd4iMiYYWyZ3JdsJJ+ttU+CyqNUekycizaV4U3S4iUw2+1f/6+n56ewi4L8I0D1JsLvlJUSEg9IEF71k4KJDXMB3ymgu4IkcHnc6k/n9/Y9PT2eB8/PgRSeR1aXlQ4uV9mhDD6UjprBPydpcSuUSxKbJdOoDkcdH2DLnwSBNBHz82sqK3WIViTgqd3KnOgAuGjXE4wfyKXmbS6VMeD2JZJK68vD46D0/uwiHGu9NPERkecW+344G/6+gUFwW1Go4X6blbS7lSsXl81xeJe4fHsD1hiIRmgikCyjP5LxVwLWsGLIVtVp9ZD8Ax1wmA3/gUrm9/a/TIRaL4conIhbT/jjnTcgBiHb4kOmr5iGuU8zM0vYCDrhUKtFERELR5vrGQIjwBqVkgnyfqpLNKRT0Rbp9hapWGxsW4974gBrVA5N3AReVUmnZM32KOwQo09OYDcYBtu4HqXm7u78PRiJ0kZUatXo9ly9E43HacLgfA3t+A5yO0+tOpzO/f/nHp0dfwA/Xtzc3WUr5vqOllMplCPNT6TSkiHTUK54Q04cLCuECEMJdDMReuLaUJq9JEnFnr7P0F56USAxbO3DEuHzedDbT4oKC/UCz0TTs7HBsL5xCQSlPueRwua7zuQ4ik3s7u9ROgTgNx7FkOk29+Qm4BAP1ZgPe0I3YZvigkMnxjcPtyhXyNBFInfd2DVvrG9R3np2Zse1bMAy/SiUpswIuAXITmXYNnHERcEikeOIiCsVim4hUum8wbKyu098WjIXUYe3Di0Ty6r2M8BwIBXmN5p7BwI1UVcANEVSIdBHF0g1NRCaVmY3GtZXVT/cfcEzLERe4Hk9c0gWnQDhY5zW4kTbj3BA5cTk7iUzJZBC2/U6E5gKZNLxhdWWlXYh7eQmGw+5THwdSeAHbRKgifqlS7iAyZTGZVvRLf3NGkFymLEYTjmGRWIy6SEmbYR+ZTSZw4UMJhWxr5H64iEql0hazTk1ZTftLi/p/PDWBCxiU2biHY3goGmlxqVaDsQj4I5iEvTxAwB6RbO76hCBu79ry3mm53LZvXtTquvQjpIRXtm8wYvgHaXM4FqUkvCxxEbBEBLXWCeLu/pO816LTauDOdz8VkvCS0mb4Xxfv0mbUVI6T0mYzK9Jm5qH8Wd47MwOBmWZBg/cem1LS5r3dXeyTtDneknwzXpdjGAopSwEbcXwQswIRi6Unee/vXKjAF/ad/4J1abOAWSKpTBrikTYRDIjMkvLe+T7zFyThhRRpG+VBZ4HztrT5Mg671c5o90PAIJFkOgUx69Nnea9tXqViJKMjuYgN29tgL6fn/pa0mRS/IQkvcGGoT8YMlFqtlkylTtxEp5i1H3nvX3LhIcn37uYWzAlcaAnvZfKKlDYz0z8UMEIkkUxCpvf03CHvnSPlvYo5NrJ+sVi8s7nFx3CP/7RD2kxxsQK1AUNB8t6rK4ebeO4Qs6qUyiOrHfYOe3UQsIitjQ1KwtspbW6Q0ubJ/jQJfUFBdntFynurHfJelQqIgMdhuzIEJ8jW+gaS8HZIm+Fca/YtbRb0QySeSDg9bXkvKWZFRPqX93bLRST6g7QZcWkcWu0yqZRTKG+/3kh5r6dTzEq1ciCW57J6SEqb1+F8IXyelrSZfPAHHOCXpc1fKR2Q8t64w/NB8IyaxEjeK+e+/i4SCtdXV+37FqakzT1DeX17DcWjnfJePo5rFxaObQcMynt7HcKWtNkq/Cht/uF0VHqXNvcGBWVi0Zjb423Le/l8DSlmhTR/UERaXCjRRseD+8Dl+hoydUe5UmELSkve6/sg79VpkOBZOikdLBFqkNLmZQht6acZ66iCgR5Q7kna3C0UUt4b+iTvXdSyJe/tk8uhzdop4aUe3L4p3TAJBZxuIBz2np19kvce2Q4gef0+RKiBJIOLS4cdTzOiGmAhf0IQhZsiM1CeSXmvz/9J3qtnVd7bP5clnf7wj9LmQqFfKJTMKByN0vLeMYFgmZJSc/KUYF9cFvWHNnuntBlOlnAsxsCvYigVCovJRB3pyDJJea+Yw+dJvx6tg0Vrdcc2OxXyU4q7faORgV/FILeoHgJnz+mZRq22cyVmZYqLTqPFeBgE3xD1g1voJlfsKsxHT6vol1VzKsAhGh4ibS5aLSSoTbJ13c0h2G3uA1zIn+/BeEM4YONIpVI4H7tcf2/dBt4wj+7XP/qdtxGUEZQRlBGUEZQRlBGUEZQhGv8TYADrKLeauFTiwgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "qu2n":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "swFp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view',{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:(_vm.$route.meta.title),expression:"$route.meta.title"}]})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "tvR6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "vOUe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_area_vue__ = __webpack_require__("NFeX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a9c4577e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_area_vue__ = __webpack_require__("NsXK");
function injectStyle (ssrContext) {
  __webpack_require__("qu2n")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_area_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a9c4577e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_area_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "w5PK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 省份列表
var iosProvinces = [
/*******华北五省********/
{ 'id': '110000', 'value': '北京市', 'parentId': '0' }, { 'id': '120000', 'value': '天津市', 'parentId': '0' }, { 'id': '130000', 'value': '河北省', 'parentId': '0' }, { 'id': '140000', 'value': '山西省', 'parentId': '0' }, { 'id': '150000', 'value': '内蒙古自治区', 'parentId': '0' },
/*******东北三省********/
{ 'id': '210000', 'value': '辽宁省', 'parentId': '0' }, { 'id': '220000', 'value': '吉林省', 'parentId': '0' }, { 'id': '230000', 'value': '黑龙江省', 'parentId': '0' },
/*******华东省********/
{ 'id': '310000', 'value': '上海市', 'parentId': '0' }, { 'id': '320000', 'value': '江苏省', 'parentId': '0' }, { 'id': '330000', 'value': '浙江省', 'parentId': '0' }, { 'id': '340000', 'value': '安徽省', 'parentId': '0' }, { 'id': '350000', 'value': '福建省', 'parentId': '0' }, { 'id': '360000', 'value': '江西省', 'parentId': '0' }, { 'id': '370000', 'value': '山东省', 'parentId': '0' },
/****华中、华南六省******/
{ 'id': '410000', 'value': '河南省', 'parentId': '0' }, { 'id': '420000', 'value': '湖北省', 'parentId': '0' }, { 'id': '430000', 'value': '湖南省', 'parentId': '0' }, { 'id': '440000', 'value': '广东省', 'parentId': '0' }, { 'id': '450000', 'value': '广西壮族自治区', 'parentId': '0' }, { 'id': '460000', 'value': '海南省', 'parentId': '0' },
/****西南五省******/
{ 'id': '500000', 'value': '重庆市', 'parentId': '0' }, { 'id': '510000', 'value': '四川省', 'parentId': '0' }, { 'id': '520000', 'value': '贵州省', 'parentId': '0' }, { 'id': '530000', 'value': '云南省', 'parentId': '0' }, { 'id': '540000', 'value': '西藏自治区', 'parentId': '0' },
/****西北五省******/
{ 'id': '610000', 'value': '陕西省', 'parentId': '0' }, { 'id': '620000', 'value': '甘肃省', 'parentId': '0' }, { 'id': '630000', 'value': '青海省', 'parentId': '0' }, { 'id': '640000', 'value': '宁夏回族自治区', 'parentId': '0' }, { 'id': '650000', 'value': '新疆维吾尔族自治区', 'parentId': '0' }];

// 城市列表
var iosCitys = [
/**********北京市********/
{ "id": "110100", "value": "北京市", "parentId": "110000" },
/**********天津市********/
{ "id": "120100", "value": "天津市", "parentId": "120000" },
/**********河北省********/
{ "id": "130100", "value": "石家庄市", "parentId": "130000" }, { "id": "130200", "value": "唐山市", "parentId": "130000" }, { "id": "130300", "value": "秦皇岛市", "parentId": "130000" }, { "id": "130400", "value": "邯郸市", "parentId": "130000" }, { "id": "130500", "value": "邢台市", "parentId": "130000" }, { "id": "130600", "value": "保定市", "parentId": "130000" }, { "id": "130700", "value": "张家口市", "parentId": "130000" }, { "id": "130800", "value": "承德市", "parentId": "130000" }, { "id": "130900", "value": "沧州市", "parentId": "130000" }, { "id": "131000", "value": "廊坊市", "parentId": "130000" }, { "id": "131100", "value": "衡水市", "parentId": "130000" },
/**********山西省********/
{ "id": "140100", "value": "太原市", "parentId": "140000" }, { "id": "140200", "value": "大同市", "parentId": "140000" }, { "id": "140300", "value": "阳泉市", "parentId": "140000" }, { "id": "140400", "value": "长治市", "parentId": "140000" }, { "id": "140500", "value": "晋城市", "parentId": "140000" }, { "id": "140600", "value": "朔州市", "parentId": "140000" }, { "id": "140700", "value": "晋中市", "parentId": "140000" }, { "id": "140800", "value": "运城市", "parentId": "140000" }, { "id": "140900", "value": "忻州市", "parentId": "140000" }, { "id": "141000", "value": "临汾市", "parentId": "140000" }, { "id": "141100", "value": "吕梁市", "parentId": "140000" },
/**********内蒙古自治区********/
{ "id": "150100", "value": "呼和浩特市", "parentId": "150000" }, { "id": "150200", "value": "包头市", "parentId": "150000" }, { "id": "150300", "value": "乌海市", "parentId": "150000" }, { "id": "150400", "value": "赤峰市", "parentId": "150000" }, { "id": "150500", "value": "通辽市", "parentId": "150000" }, { "id": "150600", "value": "鄂尔多斯市", "parentId": "150000" }, { "id": "150700", "value": "呼伦贝尔市", "parentId": "150000" }, { "id": "150800", "value": "巴彦淖尔市", "parentId": "150000" }, { "id": "150900", "value": "乌兰察布市", "parentId": "150000" }, { "id": "152200", "value": "兴安盟", "parentId": "150000" }, { "id": "152500", "value": "锡林郭勒盟", "parentId": "150000" }, { "id": "152900", "value": "阿拉善盟", "parentId": "150000" },
/**********辽宁省********/
{ "id": "210100", "value": "沈阳市", "parentId": "210000" }, { "id": "210200", "value": "大连市", "parentId": "210000" }, { "id": "210300", "value": "鞍山市", "parentId": "210000" }, { "id": "210400", "value": "抚顺市", "parentId": "210000" }, { "id": "210500", "value": "本溪市", "parentId": "210000" }, { "id": "210600", "value": "丹东市", "parentId": "210000" }, { "id": "210700", "value": "锦州市", "parentId": "210000" }, { "id": "210800", "value": "营口市", "parentId": "210000" }, { "id": "210900", "value": "阜新市", "parentId": "210000" }, { "id": "211000", "value": "辽阳市", "parentId": "210000" }, { "id": "211100", "value": "盘锦市", "parentId": "210000" }, { "id": "211200", "value": "铁岭市", "parentId": "210000" }, { "id": "211300", "value": "朝阳市", "parentId": "210000" }, { "id": "211400", "value": "葫芦岛市", "parentId": "210000" },
/**********吉林省********/
{ "id": "220100", "value": "长春市", "parentId": "220000" }, { "id": "220200", "value": "吉林市", "parentId": "220000" }, { "id": "220300", "value": "四平市", "parentId": "220000" }, { "id": "220400", "value": "辽源市", "parentId": "220000" }, { "id": "220500", "value": "通化市", "parentId": "220000" }, { "id": "220600", "value": "白山市", "parentId": "220000" }, { "id": "220700", "value": "松原市", "parentId": "220000" }, { "id": "220800", "value": "白城市", "parentId": "220000" }, { "id": "222400", "value": "延边朝鲜族自治州", "parentId": "220000" },
/**********黑龙江省********/
{ "id": "230100", "value": "哈尔滨市", "parentId": "230000" }, { "id": "230200", "value": "齐齐哈尔市", "parentId": "230000" }, { "id": "230300", "value": "鸡西市", "parentId": "230000" }, { "id": "230400", "value": "鹤岗市", "parentId": "230000" }, { "id": "230500", "value": "双鸭山市", "parentId": "230000" }, { "id": "230600", "value": "大庆市", "parentId": "230000" }, { "id": "230700", "value": "伊春市", "parentId": "230000" }, { "id": "230800", "value": "佳木斯市", "parentId": "230000" }, { "id": "230900", "value": "七台河市", "parentId": "230000" }, { "id": "231000", "value": "牡丹江市", "parentId": "230000" }, { "id": "231100", "value": "黑河市", "parentId": "230000" }, { "id": "231200", "value": "绥化市", "parentId": "230000" }, { "id": "232700", "value": "大兴安岭地区", "parentId": "230000" },
/**********上海市********/
{ "id": "310100", "value": "上海市", "parentId": "310000" },
/**********江苏省********/
{ "id": "320100", "value": "南京市", "parentId": "320000" }, { "id": "320200", "value": "无锡市", "parentId": "320000" }, { "id": "320300", "value": "徐州市", "parentId": "320000" }, { "id": "320400", "value": "常州市", "parentId": "320000" }, { "id": "320500", "value": "苏州市", "parentId": "320000" }, { "id": "320600", "value": "南通市", "parentId": "320000" }, { "id": "320700", "value": "连云港市", "parentId": "320000" }, { "id": "320800", "value": "淮安市", "parentId": "320000" }, { "id": "320900", "value": "盐城市", "parentId": "320000" }, { "id": "321000", "value": "扬州市", "parentId": "320000" }, { "id": "321100", "value": "镇江市", "parentId": "320000" }, { "id": "321200", "value": "泰州市", "parentId": "320000" }, { "id": "321300", "value": "宿迁市", "parentId": "320000" },
/**********浙江省********/
{ "id": "330100", "value": "杭州市", "parentId": "330000" }, { "id": "330200", "value": "宁波市", "parentId": "330000" }, { "id": "330300", "value": "温州市", "parentId": "330000" }, { "id": "330400", "value": "嘉兴市", "parentId": "330000" }, { "id": "330500", "value": "湖州市", "parentId": "330000" }, { "id": "330600", "value": "绍兴市", "parentId": "330000" }, { "id": "330700", "value": "金华市", "parentId": "330000" }, { "id": "330800", "value": "衢州市", "parentId": "330000" }, { "id": "330900", "value": "舟山市", "parentId": "330000" }, { "id": "331000", "value": "台州市", "parentId": "330000" }, { "id": "331100", "value": "丽水市", "parentId": "330000" },
/**********安徽省********/
{ "id": "340100", "value": "合肥市", "parentId": "340000" }, { "id": "340200", "value": "芜湖市", "parentId": "340000" }, { "id": "340300", "value": "蚌埠市", "parentId": "340000" }, { "id": "340400", "value": "淮南市", "parentId": "340000" }, { "id": "340500", "value": "马鞍山市", "parentId": "340000" }, { "id": "340600", "value": "淮北市", "parentId": "340000" }, { "id": "340700", "value": "铜陵市", "parentId": "340000" }, { "id": "340800", "value": "安庆市", "parentId": "340000" }, { "id": "341000", "value": "黄山市", "parentId": "340000" }, { "id": "341100", "value": "滁州市", "parentId": "340000" }, { "id": "341200", "value": "阜阳市", "parentId": "340000" }, { "id": "341300", "value": "宿州市", "parentId": "340000" }, { "id": "341500", "value": "六安市", "parentId": "340000" }, { "id": "341600", "value": "亳州市", "parentId": "340000" }, { "id": "341700", "value": "池州市", "parentId": "340000" }, { "id": "341800", "value": "宣城市", "parentId": "340000" },
/**********福建省********/
{ "id": "350100", "value": "福州市", "parentId": "350000" }, { "id": "350200", "value": "厦门市", "parentId": "350000" }, { "id": "350300", "value": "莆田市", "parentId": "350000" }, { "id": "350400", "value": "三明市", "parentId": "350000" }, { "id": "350500", "value": "泉州市", "parentId": "350000" }, { "id": "350600", "value": "漳州市", "parentId": "350000" }, { "id": "350700", "value": "南平市", "parentId": "350000" }, { "id": "350800", "value": "龙岩市", "parentId": "350000" }, { "id": "350900", "value": "宁德市", "parentId": "350000" },
/**********江西省********/
{ "id": "360100", "value": "南昌市", "parentId": "360000" }, { "id": "360200", "value": "景德镇市", "parentId": "360000" }, { "id": "360300", "value": "萍乡市", "parentId": "360000" }, { "id": "360400", "value": "九江市", "parentId": "360000" }, { "id": "360500", "value": "新余市", "parentId": "360000" }, { "id": "360600", "value": "鹰潭市", "parentId": "360000" }, { "id": "360700", "value": "赣州市", "parentId": "360000" }, { "id": "360800", "value": "吉安市", "parentId": "360000" }, { "id": "360900", "value": "宜春市", "parentId": "360000" }, { "id": "361000", "value": "抚州市", "parentId": "360000" }, { "id": "361100", "value": "上饶市", "parentId": "360000" },
/**********山东省********/
{ "id": "370100", "value": "济南市", "parentId": "370000" }, { "id": "370200", "value": "青岛市", "parentId": "370000" }, { "id": "370300", "value": "淄博市", "parentId": "370000" }, { "id": "370400", "value": "枣庄市", "parentId": "370000" }, { "id": "370500", "value": "东营市", "parentId": "370000" }, { "id": "370600", "value": "烟台市", "parentId": "370000" }, { "id": "370700", "value": "潍坊市", "parentId": "370000" }, { "id": "370800", "value": "济宁市", "parentId": "370000" }, { "id": "370900", "value": "泰安市", "parentId": "370000" }, { "id": "371000", "value": "威海市", "parentId": "370000" }, { "id": "371100", "value": "日照市", "parentId": "370000" }, { "id": "371200", "value": "莱芜市", "parentId": "370000" }, { "id": "371300", "value": "临沂市", "parentId": "370000" }, { "id": "371400", "value": "德州市", "parentId": "370000" }, { "id": "371500", "value": "聊城市", "parentId": "370000" }, { "id": "371600", "value": "滨州市", "parentId": "370000" }, { "id": "371700", "value": "菏泽市", "parentId": "370000" },
/**********河南省********/
{ "id": "410100", "value": "郑州市", "parentId": "410000" }, { "id": "410200", "value": "开封市", "parentId": "410000" }, { "id": "410300", "value": "洛阳市", "parentId": "410000" }, { "id": "410400", "value": "平顶山市", "parentId": "410000" }, { "id": "410500", "value": "安阳市", "parentId": "410000" }, { "id": "410600", "value": "鹤壁市", "parentId": "410000" }, { "id": "410700", "value": "新乡市", "parentId": "410000" }, { "id": "410800", "value": "焦作市", "parentId": "410000" }, { "id": "410900", "value": "濮阳市", "parentId": "410000" }, { "id": "411000", "value": "许昌市", "parentId": "410000" }, { "id": "411100", "value": "漯河市", "parentId": "410000" }, { "id": "411200", "value": "三门峡市", "parentId": "410000" }, { "id": "411300", "value": "南阳市", "parentId": "410000" }, { "id": "411400", "value": "商丘市", "parentId": "410000" }, { "id": "411500", "value": "信阳市", "parentId": "410000" }, { "id": "411600", "value": "周口市", "parentId": "410000" }, { "id": "411700", "value": "驻马店市", "parentId": "410000" },
/**省直辖市**/
{ "id": "419001", "value": "济源市", "parentId": "410000" },
/**********湖北省********/
{ "id": "420100", "value": "武汉市", "parentId": "420000" }, { "id": "420200", "value": "黄石市", "parentId": "420000" }, { "id": "420300", "value": "十堰市", "parentId": "420000" }, { "id": "420500", "value": "宜昌市", "parentId": "420000" }, { "id": "420600", "value": "襄阳市", "parentId": "420000" }, { "id": "420700", "value": "鄂州市", "parentId": "420000" }, { "id": "420800", "value": "荆门市", "parentId": "420000" }, { "id": "420900", "value": "孝感市", "parentId": "420000" }, { "id": "421000", "value": "荆州市", "parentId": "420000" }, { "id": "421100", "value": "黄冈市", "parentId": "420000" }, { "id": "421200", "value": "咸宁市", "parentId": "420000" }, { "id": "421300", "value": "随州市", "parentId": "420000" }, { "id": "422800", "value": "恩施土家族苗族自治州", "parentId": "420000" },

/**省直辖市**/
{ "id": "429004", "value": "仙桃市", "parentId": "420000" }, { "id": "429005", "value": "潜江市", "parentId": "420000" }, { "id": "429006", "value": "天门市", "parentId": "420000" }, { "id": "429021", "value": "神农架林区", "parentId": "420000" },
/**********湖南省********/
{ "id": "430100", "value": "长沙市", "parentId": "430000" }, { "id": "430200", "value": "株洲市", "parentId": "430000" }, { "id": "430300", "value": "湘潭市", "parentId": "430000" }, { "id": "430400", "value": "衡阳市", "parentId": "430000" }, { "id": "430500", "value": "邵阳市", "parentId": "430000" }, { "id": "430600", "value": "岳阳市", "parentId": "430000" }, { "id": "430700", "value": "常德市", "parentId": "430000" }, { "id": "430800", "value": "张家界市", "parentId": "430000" }, { "id": "430900", "value": "益阳市", "parentId": "430000" }, { "id": "431000", "value": "郴州市", "parentId": "430000" }, { "id": "431100", "value": "永州市", "parentId": "430000" }, { "id": "431200", "value": "怀化市", "parentId": "430000" }, { "id": "431300", "value": "娄底市", "parentId": "430000" }, { "id": "433100", "value": "湘西土家族苗族自治州", "parentId": "430000" },
/**********广东省********/
{ "id": "440100", "value": "广州市", "parentId": "440000" }, { "id": "440200", "value": "韶关市", "parentId": "440000" }, { "id": "440300", "value": "深圳市", "parentId": "440000" }, { "id": "440400", "value": "珠海市", "parentId": "440000" }, { "id": "440500", "value": "汕头市", "parentId": "440000" }, { "id": "440600", "value": "佛山市", "parentId": "440000" }, { "id": "440700", "value": "江门市", "parentId": "440000" }, { "id": "440800", "value": "湛江市", "parentId": "440000" }, { "id": "440900", "value": "茂名市", "parentId": "440000" }, { "id": "441200", "value": "肇庆市", "parentId": "440000" }, { "id": "441300", "value": "惠州市", "parentId": "440000" }, { "id": "441400", "value": "梅州市", "parentId": "440000" }, { "id": "441500", "value": "汕尾市", "parentId": "440000" }, { "id": "441600", "value": "河源市", "parentId": "440000" }, { "id": "441700", "value": "阳江市", "parentId": "440000" }, { "id": "441800", "value": "清远市", "parentId": "440000" }, { "id": "441900", "value": "东莞市", "parentId": "440000" }, { "id": "442000", "value": "中山市", "parentId": "440000" }, { "id": "445100", "value": "潮州市", "parentId": "440000" }, { "id": "445200", "value": "揭阳市", "parentId": "440000" }, { "id": "445300", "value": "云浮市", "parentId": "440000" },
/**********广西壮族自治区********/
{ "id": "450100", "value": "南宁市", "parentId": "450000" }, { "id": "450200", "value": "柳州市", "parentId": "450000" }, { "id": "450300", "value": "桂林市", "parentId": "450000" }, { "id": "450400", "value": "梧州市", "parentId": "450000" }, { "id": "450500", "value": "北海市", "parentId": "450000" }, { "id": "450600", "value": "防城港市", "parentId": "450000" }, { "id": "450700", "value": "钦州市", "parentId": "450000" }, { "id": "450800", "value": "贵港市", "parentId": "450000" }, { "id": "450900", "value": "玉林市", "parentId": "450000" }, { "id": "451000", "value": "百色市", "parentId": "450000" }, { "id": "451100", "value": "贺州市", "parentId": "450000" }, { "id": "451200", "value": "河池市", "parentId": "450000" }, { "id": "451300", "value": "来宾市", "parentId": "450000" }, { "id": "451400", "value": "崇左市", "parentId": "450000" },
/**********海南省********/
{ "id": "460100", "value": "海口市", "parentId": "460000" }, { "id": "460200", "value": "三亚市", "parentId": "460000" }, { "id": "460300", "value": "三沙市", "parentId": "460000" },
/**海南省直辖**/
{ "id": "469001", "value": "五指山市", "parentId": "460000" }, { "id": "469002", "value": "琼海市", "parentId": "460000" }, { "id": "469003", "value": "儋州市", "parentId": "460000" }, { "id": "469005", "value": "文昌市", "parentId": "460000" }, { "id": "469006", "value": "万宁市", "parentId": "460000" }, { "id": "469007", "value": "东方市", "parentId": "460000" }, { "id": "469021", "value": "定安县", "parentId": "460000" }, { "id": "469022", "value": "屯昌县", "parentId": "460000" }, { "id": "469023", "value": "澄迈县", "parentId": "460000" }, { "id": "469024", "value": "临高县", "parentId": "460000" }, { "id": "469025", "value": "白沙黎族自治县", "parentId": "460000" }, { "id": "469026", "value": "昌江黎族自治县", "parentId": "460000" }, { "id": "469027", "value": "乐东黎族自治县", "parentId": "460000" }, { "id": "469028", "value": "陵水黎族自治县", "parentId": "460000" }, { "id": "469029", "value": "保亭黎族苗族自治县", "parentId": "460000" }, { "id": "469030", "value": "琼中黎族苗族自治县", "parentId": "460000" },
/**********重庆市********/
{ "id": "500100", "value": "重庆市", "parentId": "500000" },
/**********四川省********/
{ "id": "510100", "value": "成都市", "parentId": "510000" }, { "id": "510300", "value": "自贡市", "parentId": "510000" }, { "id": "510400", "value": "攀枝花市", "parentId": "510000" }, { "id": "510500", "value": "泸州市", "parentId": "510000" }, { "id": "510600", "value": "德阳市", "parentId": "510000" }, { "id": "510700", "value": "绵阳市", "parentId": "510000" }, { "id": "510800", "value": "广元市", "parentId": "510000" }, { "id": "510900", "value": "遂宁市", "parentId": "510000" }, { "id": "511000", "value": "内江市", "parentId": "510000" }, { "id": "511100", "value": "乐山市", "parentId": "510000" }, { "id": "511300", "value": "南充市", "parentId": "510000" }, { "id": "511400", "value": "眉山市", "parentId": "510000" }, { "id": "511500", "value": "宜宾市", "parentId": "510000" }, { "id": "511600", "value": "广安市", "parentId": "510000" }, { "id": "511700", "value": "达州市", "parentId": "510000" }, { "id": "511800", "value": "雅安市", "parentId": "510000" }, { "id": "511900", "value": "巴中市", "parentId": "510000" }, { "id": "512000", "value": "资阳市", "parentId": "510000" }, { "id": "513200", "value": "阿坝藏族羌族自治州", "parentId": "510000" }, { "id": "513300", "value": "甘孜藏族自治州", "parentId": "510000" }, { "id": "513400", "value": "凉山彝族自治州", "parentId": "510000" },
/**********贵州省********/
{ "id": "520100", "value": "贵阳市", "parentId": "520000" }, { "id": "520200", "value": "六盘水市", "parentId": "520000" }, { "id": "520300", "value": "遵义市", "parentId": "520000" }, { "id": "520400", "value": "安顺市", "parentId": "520000" }, { "id": "522200", "value": "铜仁市", "parentId": "520000" }, { "id": "522300", "value": "黔西南布依族苗族自治州", "parentId": "520000" }, { "id": "522400", "value": "毕节市", "parentId": "520000" }, { "id": "522600", "value": "黔东南苗族侗族自治州", "parentId": "520000" }, { "id": "522700", "value": "黔南布依族苗族自治州", "parentId": "520000" },
/**********云南省********/
{ "id": "530100", "value": "昆明市", "parentId": "530000" }, { "id": "530300", "value": "曲靖市", "parentId": "530000" }, { "id": "530400", "value": "玉溪市", "parentId": "530000" }, { "id": "530500", "value": "保山市", "parentId": "530000" }, { "id": "530600", "value": "昭通市", "parentId": "530000" }, { "id": "530700", "value": "丽江市", "parentId": "530000" }, { "id": "530800", "value": "普洱市", "parentId": "530000" }, { "id": "530900", "value": "临沧市", "parentId": "530000" }, { "id": "532300", "value": "楚雄彝族自治州", "parentId": "530000" }, { "id": "532500", "value": "红河哈尼族彝族自治州", "parentId": "530000" }, { "id": "532600", "value": "文山壮族苗族自治州", "parentId": "530000" }, { "id": "532800", "value": "西双版纳傣族自治州", "parentId": "530000" }, { "id": "532900", "value": "大理白族自治州", "parentId": "530000" }, { "id": "533100", "value": "德宏傣族景颇族自治州", "parentId": "530000" }, { "id": "533300", "value": "怒江傈僳族自治州", "parentId": "530000" }, { "id": "533400", "value": "迪庆藏族自治州", "parentId": "530000" },
/**********西藏自治区********/
{ "id": "540100", "value": "拉萨市", "parentId": "540000" }, { "id": "542100", "value": "昌都地区", "parentId": "540000" }, { "id": "542200", "value": "山南地区", "parentId": "540000" }, { "id": "542300", "value": "日喀则地区", "parentId": "540000" }, { "id": "542400", "value": "那曲地区", "parentId": "540000" }, { "id": "542500", "value": "阿里地区", "parentId": "540000" }, { "id": "542600", "value": "林芝地区", "parentId": "540000" },
/**********陕西省********/
{ "id": "610100", "value": "西安市", "parentId": "610000" }, { "id": "610200", "value": "铜川市", "parentId": "610000" }, { "id": "610300", "value": "宝鸡市", "parentId": "610000" }, { "id": "610400", "value": "咸阳市", "parentId": "610000" }, { "id": "610500", "value": "渭南市", "parentId": "610000" }, { "id": "610600", "value": "延安市", "parentId": "610000" }, { "id": "610700", "value": "汉中市", "parentId": "610000" }, { "id": "610800", "value": "榆林市", "parentId": "610000" }, { "id": "610900", "value": "安康市", "parentId": "610000" }, { "id": "611000", "value": "商洛市", "parentId": "610000" },
/**********甘肃省********/
{ "id": "620100", "value": "兰州市", "parentId": "620000" }, { "id": "620200", "value": "嘉峪关市", "parentId": "620000" }, { "id": "620300", "value": "金昌市", "parentId": "620000" }, { "id": "620400", "value": "白银市", "parentId": "620000" }, { "id": "620500", "value": "天水市", "parentId": "620000" }, { "id": "620600", "value": "武威市", "parentId": "620000" }, { "id": "620700", "value": "张掖市", "parentId": "620000" }, { "id": "620800", "value": "平凉市", "parentId": "620000" }, { "id": "620900", "value": "酒泉市", "parentId": "620000" }, { "id": "621000", "value": "庆阳市", "parentId": "620000" }, { "id": "621100", "value": "定西市", "parentId": "620000" }, { "id": "621200", "value": "陇南市", "parentId": "620000" }, { "id": "622900", "value": "临夏回族自治州", "parentId": "620000" }, { "id": "623000", "value": "甘南藏族自治州", "parentId": "620000" },
/**********青海省********/
{ "id": "630100", "value": "西宁市", "parentId": "630000" }, { "id": "632100", "value": "海东地区", "parentId": "630000" }, { "id": "632200", "value": "海北藏族自治州", "parentId": "630000" }, { "id": "632300", "value": "黄南藏族自治州", "parentId": "630000" }, { "id": "632500", "value": "海南藏族自治州", "parentId": "630000" }, { "id": "632600", "value": "果洛藏族自治州", "parentId": "630000" }, { "id": "632700", "value": "玉树藏族自治州", "parentId": "630000" }, { "id": "632800", "value": "海西蒙古族藏族自治州", "parentId": "630000" },
/**********宁夏回族自治区********/
{ "id": "640100", "value": "银川市", "parentId": "640000" }, { "id": "640200", "value": "石嘴山市", "parentId": "640000" }, { "id": "640300", "value": "吴忠市", "parentId": "640000" }, { "id": "640400", "value": "固原市", "parentId": "640000" }, { "id": "640500", "value": "中卫市", "parentId": "640000" },
/**********新疆维吾尔族自治区********/
{ "id": "650100", "value": "乌鲁木齐市", "parentId": "650000" }, { "id": "650200", "value": "克拉玛依市", "parentId": "650000" }, { "id": "652100", "value": "吐鲁番地区", "parentId": "650000" }, { "id": "652200", "value": "哈密地区", "parentId": "650000" }, { "id": "652300", "value": "昌吉回族自治州", "parentId": "650000" }, { "id": "652700", "value": "博尔塔拉蒙古自治州", "parentId": "650000" }, { "id": "652800", "value": "巴音郭楞蒙古自治州", "parentId": "650000" }, { "id": "652900", "value": "阿克苏地区", "parentId": "650000" }, { "id": "653000", "value": "克孜勒苏柯尔克孜自治州", "parentId": "650000" }, { "id": "653100", "value": "喀什地区", "parentId": "650000" }, { "id": "653200", "value": "和田地区", "parentId": "650000" }, { "id": "654000", "value": "伊犁哈萨克自治州", "parentId": "650000" }, { "id": "654200", "value": "塔城地区", "parentId": "650000" }, { "id": "654300", "value": "阿勒泰地区", "parentId": "650000" },
/**********自治区直辖********/
{ "id": "659001", "value": "石河子市", "parentId": "650000" }, { "id": "659002", "value": "阿拉尔市", "parentId": "650000" }, { "id": "659003", "value": "图木舒克市", "parentId": "650000" }, { "id": "659004", "value": "五家渠市", "parentId": "650000" }];

// 区县列表
var iosCountys = [

/**********北京市********/
{ "id": "110101", "value": "东城区", "parentId": "110100" }, { "id": "110102", "value": "西城区", "parentId": "110100" }, { "id": "110105", "value": "朝阳区", "parentId": "110100" }, { "id": "110106", "value": "丰台区", "parentId": "110100" }, { "id": "110107", "value": "石景山区", "parentId": "110100" }, { "id": "110108", "value": "海淀区", "parentId": "110100" }, { "id": "110109", "value": "门头沟区", "parentId": "110100" }, { "id": "110111", "value": "房山区", "parentId": "110100" }, { "id": "110112", "value": "通州区", "parentId": "110100" }, { "id": "110113", "value": "顺义区", "parentId": "110100" }, { "id": "110114", "value": "昌平区", "parentId": "110100" }, { "id": "110115", "value": "大兴区", "parentId": "110100" }, { "id": "110116", "value": "怀柔区", "parentId": "110100" }, { "id": "110117", "value": "平谷区", "parentId": "110100" }, { "id": "110228", "value": "密云县", "parentId": "110100" }, { "id": "110229", "value": "延庆县", "parentId": "110100" },
/**********天津市********/
{ "id": "120101", "value": "和平区", "parentId": "120100" }, { "id": "120102", "value": "河东区", "parentId": "120100" }, { "id": "120103", "value": "河西区", "parentId": "120100" }, { "id": "120104", "value": "南开区", "parentId": "120100" }, { "id": "120105", "value": "河北区", "parentId": "120100" }, { "id": "120106", "value": "红桥区", "parentId": "120100" }, { "id": "120110", "value": "东丽区", "parentId": "120100" }, { "id": "120111", "value": "西青区", "parentId": "120100" }, { "id": "120112", "value": "津南区", "parentId": "120100" }, { "id": "120113", "value": "北辰区", "parentId": "120100" }, { "id": "120114", "value": "武清区", "parentId": "120100" }, { "id": "120115", "value": "宝坻区", "parentId": "120100" }, { "id": "120116", "value": "滨海新区", "parentId": "120100" },
/**********石家庄市********/
{ "id": "130102", "value": "长安区", "parentId": "130100" }, { "id": "130103", "value": "桥东区", "parentId": "130100" }, { "id": "130104", "value": "桥西区", "parentId": "130100" }, { "id": "130105", "value": "新华区", "parentId": "130100" }, { "id": "130107", "value": "井陉矿区", "parentId": "130100" }, { "id": "130108", "value": "裕华区", "parentId": "130100" }, { "id": "130121", "value": "井陉县", "parentId": "130100" }, { "id": "130123", "value": "正定县", "parentId": "130100" }, { "id": "130124", "value": "栾城县", "parentId": "130100" }, { "id": "130125", "value": "行唐县", "parentId": "130100" }, { "id": "130126", "value": "灵寿县", "parentId": "130100" }, { "id": "130127", "value": "高邑县", "parentId": "130100" }, { "id": "130128", "value": "深泽县", "parentId": "130100" }, { "id": "130129", "value": "赞皇县", "parentId": "130100" }, { "id": "130130", "value": "无极县", "parentId": "130100" }, { "id": "130131", "value": "平山县", "parentId": "130100" }, { "id": "130132", "value": "元氏县", "parentId": "130100" }, { "id": "130133", "value": "赵县", "parentId": "130100" }, { "id": "130181", "value": "辛集市", "parentId": "130100" }, { "id": "130182", "value": "藁城市", "parentId": "130100" }, { "id": "130183", "value": "晋州市", "parentId": "130100" }, { "id": "130184", "value": "新乐市", "parentId": "130100" }, { "id": "130185", "value": "鹿泉市", "parentId": "130100" },
/**********唐山市********/
{ "id": "130202", "value": "路南区", "parentId": "130200" }, { "id": "130203", "value": "路北区", "parentId": "130200" }, { "id": "130204", "value": "古冶区", "parentId": "130200" }, { "id": "130205", "value": "开平区", "parentId": "130200" }, { "id": "130207", "value": "丰南区", "parentId": "130200" }, { "id": "130208", "value": "丰润区", "parentId": "130200" }, { "id": "130223", "value": "滦县", "parentId": "130200" }, { "id": "130224", "value": "滦南县", "parentId": "130200" }, { "id": "130225", "value": "乐亭县", "parentId": "130200" }, { "id": "130227", "value": "迁西县", "parentId": "130200" }, { "id": "130229", "value": "玉田县", "parentId": "130200" }, { "id": "130230", "value": "曹妃甸区", "parentId": "130200" }, { "id": "130281", "value": "遵化市", "parentId": "130200" }, { "id": "130283", "value": "迁安市", "parentId": "130200" },
/**********秦皇岛市********/
{ "id": "130302", "value": "海港区", "parentId": "130300" }, { "id": "130303", "value": "山海关区", "parentId": "130300" }, { "id": "130304", "value": "北戴河区", "parentId": "130300" }, { "id": "130321", "value": "青龙满族自治县", "parentId": "130300" }, { "id": "130322", "value": "昌黎县", "parentId": "130300" }, { "id": "130323", "value": "抚宁县", "parentId": "130300" }, { "id": "130324", "value": "卢龙县", "parentId": "130300" },
/**********邯郸市********/
{ "id": "130402", "value": "邯山区", "parentId": "130400" }, { "id": "130403", "value": "丛台区", "parentId": "130400" }, { "id": "130404", "value": "复兴区", "parentId": "130400" }, { "id": "130406", "value": "峰峰矿区", "parentId": "130400" }, { "id": "130421", "value": "邯郸县", "parentId": "130400" }, { "id": "130423", "value": "临漳县", "parentId": "130400" }, { "id": "130424", "value": "成安县", "parentId": "130400" }, { "id": "130425", "value": "大名县", "parentId": "130400" }, { "id": "130426", "value": "涉县", "parentId": "130400" }, { "id": "130427", "value": "磁县", "parentId": "130400" }, { "id": "130428", "value": "肥乡县", "parentId": "130400" }, { "id": "130429", "value": "永年县", "parentId": "130400" }, { "id": "130430", "value": "邱县", "parentId": "130400" }, { "id": "130431", "value": "鸡泽县", "parentId": "130400" }, { "id": "130432", "value": "广平县", "parentId": "130400" }, { "id": "130433", "value": "馆陶县", "parentId": "130400" }, { "id": "130434", "value": "魏县", "parentId": "130400" }, { "id": "130435", "value": "曲周县", "parentId": "130400" }, { "id": "130481", "value": "武安市", "parentId": "130400" },
/**********邢台市********/
{ "id": "130502", "value": "桥东区", "parentId": "130500" }, { "id": "130503", "value": "桥西区", "parentId": "130500" }, { "id": "130521", "value": "邢台县", "parentId": "130500" }, { "id": "130522", "value": "临城县", "parentId": "130500" }, { "id": "130523", "value": "内丘县", "parentId": "130500" }, { "id": "130524", "value": "柏乡县", "parentId": "130500" }, { "id": "130525", "value": "隆尧县", "parentId": "130500" }, { "id": "130526", "value": "任县", "parentId": "130500" }, { "id": "130527", "value": "南和县", "parentId": "130500" }, { "id": "130528", "value": "宁晋县", "parentId": "130500" }, { "id": "130529", "value": "巨鹿县", "parentId": "130500" }, { "id": "130530", "value": "新河县", "parentId": "130500" }, { "id": "130531", "value": "广宗县", "parentId": "130500" }, { "id": "130532", "value": "平乡县", "parentId": "130500" }, { "id": "130533", "value": "威县", "parentId": "130500" }, { "id": "130534", "value": "清河县", "parentId": "130500" }, { "id": "130535", "value": "临西县", "parentId": "130500" }, { "id": "130581", "value": "南宫市", "parentId": "130500" }, { "id": "130582", "value": "沙河市", "parentId": "130500" },
/**********保定市********/
{ "id": "130602", "value": "新市区", "parentId": "130600" }, { "id": "130603", "value": "北市区", "parentId": "130600" }, { "id": "130604", "value": "南市区", "parentId": "130600" }, { "id": "130621", "value": "满城县", "parentId": "130600" }, { "id": "130622", "value": "清苑县", "parentId": "130600" }, { "id": "130623", "value": "涞水县", "parentId": "130600" }, { "id": "130624", "value": "阜平县", "parentId": "130600" }, { "id": "130625", "value": "徐水县", "parentId": "130600" }, { "id": "130626", "value": "定兴县", "parentId": "130600" }, { "id": "130627", "value": "唐县", "parentId": "130600" }, { "id": "130628", "value": "高阳县", "parentId": "130600" }, { "id": "130629", "value": "容城县", "parentId": "130600" }, { "id": "130630", "value": "涞源县", "parentId": "130600" }, { "id": "130631", "value": "望都县", "parentId": "130600" }, { "id": "130632", "value": "安新县", "parentId": "130600" }, { "id": "130633", "value": "易县", "parentId": "130600" }, { "id": "130634", "value": "曲阳县", "parentId": "130600" }, { "id": "130635", "value": "蠡县", "parentId": "130600" }, { "id": "130636", "value": "顺平县", "parentId": "130600" }, { "id": "130637", "value": "博野县", "parentId": "130600" }, { "id": "130638", "value": "雄县", "parentId": "130600" }, { "id": "130681", "value": "涿州市", "parentId": "130600" }, { "id": "130682", "value": "定州市", "parentId": "130600" }, { "id": "130683", "value": "安国市", "parentId": "130600" }, { "id": "130684", "value": "高碑店市", "parentId": "130600" },
/**********张家口市********/
{ "id": "130702", "value": "桥东区", "parentId": "130700" }, { "id": "130703", "value": "桥西区", "parentId": "130700" }, { "id": "130705", "value": "宣化区", "parentId": "130700" }, { "id": "130706", "value": "下花园区", "parentId": "130700" }, { "id": "130721", "value": "宣化县", "parentId": "130700" }, { "id": "130722", "value": "张北县", "parentId": "130700" }, { "id": "130723", "value": "康保县", "parentId": "130700" }, { "id": "130724", "value": "沽源县", "parentId": "130700" }, { "id": "130725", "value": "尚义县", "parentId": "130700" }, { "id": "130726", "value": "蔚县", "parentId": "130700" }, { "id": "130727", "value": "阳原县", "parentId": "130700" }, { "id": "130728", "value": "怀安县", "parentId": "130700" }, { "id": "130729", "value": "万全县", "parentId": "130700" }, { "id": "130730", "value": "怀来县", "parentId": "130700" }, { "id": "130731", "value": "涿鹿县", "parentId": "130700" }, { "id": "130732", "value": "赤城县", "parentId": "130700" }, { "id": "130733", "value": "崇礼县", "parentId": "130700" },
/**********承德市********/
{ "id": "130802", "value": "双桥区", "parentId": "130800" }, { "id": "130803", "value": "双滦区", "parentId": "130800" }, { "id": "130804", "value": "鹰手营子矿区", "parentId": "130800" }, { "id": "130821", "value": "承德县", "parentId": "130800" }, { "id": "130822", "value": "兴隆县", "parentId": "130800" }, { "id": "130823", "value": "平泉县", "parentId": "130800" }, { "id": "130824", "value": "滦平县", "parentId": "130800" }, { "id": "130825", "value": "隆化县", "parentId": "130800" }, { "id": "130826", "value": "丰宁满族自治县", "parentId": "130800" }, { "id": "130827", "value": "宽城满族自治县", "parentId": "130800" }, { "id": "130828", "value": "围场满族蒙古族自治县", "parentId": "130800" },
/**********沧州市********/
{ "id": "130902", "value": "新华区", "parentId": "130900" }, { "id": "130903", "value": "运河区", "parentId": "130900" }, { "id": "130921", "value": "沧县", "parentId": "130900" }, { "id": "130922", "value": "青县", "parentId": "130900" }, { "id": "130923", "value": "东光县", "parentId": "130900" }, { "id": "130924", "value": "海兴县", "parentId": "130900" }, { "id": "130925", "value": "盐山县", "parentId": "130900" }, { "id": "130926", "value": "肃宁县", "parentId": "130900" }, { "id": "130927", "value": "南皮县", "parentId": "130900" }, { "id": "130928", "value": "吴桥县", "parentId": "130900" }, { "id": "130929", "value": "献县", "parentId": "130900" }, { "id": "130930", "value": "孟村回族自治县", "parentId": "130900" }, { "id": "130981", "value": "泊头市", "parentId": "130900" }, { "id": "130982", "value": "任丘市", "parentId": "130900" }, { "id": "130983", "value": "黄骅市", "parentId": "130900" }, { "id": "130984", "value": "河间市", "parentId": "130900" },
/**********廊坊市********/
{ "id": "131002", "value": "安次区", "parentId": "131000" }, { "id": "131003", "value": "广阳区", "parentId": "131000" }, { "id": "131022", "value": "固安县", "parentId": "131000" }, { "id": "131023", "value": "永清县", "parentId": "131000" }, { "id": "131024", "value": "香河县", "parentId": "131000" }, { "id": "131025", "value": "大城县", "parentId": "131000" }, { "id": "131026", "value": "文安县", "parentId": "131000" }, { "id": "131028", "value": "大厂回族自治县", "parentId": "131000" }, { "id": "131081", "value": "霸州市", "parentId": "131000" }, { "id": "131082", "value": "三河市", "parentId": "131000" },
/**********衡水市********/
{ "id": "131102", "value": "桃城区", "parentId": "131100" }, { "id": "131121", "value": "枣强县", "parentId": "131100" }, { "id": "131122", "value": "武邑县", "parentId": "131100" }, { "id": "131123", "value": "武强县", "parentId": "131100" }, { "id": "131124", "value": "饶阳县", "parentId": "131100" }, { "id": "131125", "value": "安平县", "parentId": "131100" }, { "id": "131126", "value": "故城县", "parentId": "131100" }, { "id": "131127", "value": "景县", "parentId": "131100" }, { "id": "131128", "value": "阜城县", "parentId": "131100" }, { "id": "131181", "value": "冀州市", "parentId": "131100" }, { "id": "131182", "value": "深州市", "parentId": "131100" },
/**********太原市********/
{ "id": "140105", "value": "小店区", "parentId": "140100" }, { "id": "140106", "value": "迎泽区", "parentId": "140100" }, { "id": "140107", "value": "杏花岭区", "parentId": "140100" }, { "id": "140108", "value": "尖草坪区", "parentId": "140100" }, { "id": "140109", "value": "万柏林区", "parentId": "140100" }, { "id": "140110", "value": "晋源区", "parentId": "140100" }, { "id": "140121", "value": "清徐县", "parentId": "140100" }, { "id": "140122", "value": "阳曲县", "parentId": "140100" }, { "id": "140123", "value": "娄烦县", "parentId": "140100" }, { "id": "140181", "value": "古交市", "parentId": "140100" },
/**********大同市********/
{ "id": "140202", "value": "城区", "parentId": "140200" }, { "id": "140203", "value": "矿区", "parentId": "140200" }, { "id": "140211", "value": "南郊区", "parentId": "140200" }, { "id": "140212", "value": "新荣区", "parentId": "140200" }, { "id": "140221", "value": "阳高县", "parentId": "140200" }, { "id": "140222", "value": "天镇县", "parentId": "140200" }, { "id": "140223", "value": "广灵县", "parentId": "140200" }, { "id": "140224", "value": "灵丘县", "parentId": "140200" }, { "id": "140225", "value": "浑源县", "parentId": "140200" }, { "id": "140226", "value": "左云县", "parentId": "140200" }, { "id": "140227", "value": "大同县", "parentId": "140200" },
/**********阳泉市********/
{ "id": "140302", "value": "城区", "parentId": "140300" }, { "id": "140303", "value": "矿区", "parentId": "140300" }, { "id": "140311", "value": "郊区", "parentId": "140300" }, { "id": "140321", "value": "平定县", "parentId": "140300" }, { "id": "140322", "value": "盂县", "parentId": "140300" },
/**********长治市********/
{ "id": "140402", "value": "城区", "parentId": "140400" }, { "id": "140411", "value": "郊区", "parentId": "140400" }, { "id": "140421", "value": "长治县", "parentId": "140400" }, { "id": "140423", "value": "襄垣县", "parentId": "140400" }, { "id": "140424", "value": "屯留县", "parentId": "140400" }, { "id": "140425", "value": "平顺县", "parentId": "140400" }, { "id": "140426", "value": "黎城县", "parentId": "140400" }, { "id": "140427", "value": "壶关县", "parentId": "140400" }, { "id": "140428", "value": "长子县", "parentId": "140400" }, { "id": "140429", "value": "武乡县", "parentId": "140400" }, { "id": "140430", "value": "沁县", "parentId": "140400" }, { "id": "140431", "value": "沁源县", "parentId": "140400" }, { "id": "140481", "value": "潞城市", "parentId": "140400" },
/**********晋城市********/
{ "id": "140502", "value": "城区", "parentId": "140500" }, { "id": "140521", "value": "沁水县", "parentId": "140500" }, { "id": "140522", "value": "阳城县", "parentId": "140500" }, { "id": "140524", "value": "陵川县", "parentId": "140500" }, { "id": "140525", "value": "泽州县", "parentId": "140500" }, { "id": "140581", "value": "高平市", "parentId": "140500" },
/**********朔州市********/
{ "id": "140602", "value": "朔城区", "parentId": "140600" }, { "id": "140603", "value": "平鲁区", "parentId": "140600" }, { "id": "140621", "value": "山阴县", "parentId": "140600" }, { "id": "140622", "value": "应县", "parentId": "140600" }, { "id": "140623", "value": "右玉县", "parentId": "140600" }, { "id": "140624", "value": "怀仁县", "parentId": "140600" },
/**********晋中市********/
{ "id": "140702", "value": "榆次区", "parentId": "140700" }, { "id": "140721", "value": "榆社县", "parentId": "140700" }, { "id": "140722", "value": "左权县", "parentId": "140700" }, { "id": "140723", "value": "和顺县", "parentId": "140700" }, { "id": "140724", "value": "昔阳县", "parentId": "140700" }, { "id": "140725", "value": "寿阳县", "parentId": "140700" }, { "id": "140726", "value": "太谷县", "parentId": "140700" }, { "id": "140727", "value": "祁县", "parentId": "140700" }, { "id": "140728", "value": "平遥县", "parentId": "140700" }, { "id": "140729", "value": "灵石县", "parentId": "140700" }, { "id": "140781", "value": "介休市", "parentId": "140700" },
/**********运城市********/
{ "id": "140802", "value": "盐湖区", "parentId": "140800" }, { "id": "140821", "value": "临猗县", "parentId": "140800" }, { "id": "140822", "value": "万荣县", "parentId": "140800" }, { "id": "140823", "value": "闻喜县", "parentId": "140800" }, { "id": "140824", "value": "稷山县", "parentId": "140800" }, { "id": "140825", "value": "新绛县", "parentId": "140800" }, { "id": "140826", "value": "绛县", "parentId": "140800" }, { "id": "140827", "value": "垣曲县", "parentId": "140800" }, { "id": "140828", "value": "夏县", "parentId": "140800" }, { "id": "140829", "value": "平陆县", "parentId": "140800" }, { "id": "140830", "value": "芮城县", "parentId": "140800" }, { "id": "140881", "value": "永济市", "parentId": "140800" }, { "id": "140882", "value": "河津市", "parentId": "140800" },
/**********忻州市********/
{ "id": "140902", "value": "忻府区", "parentId": "140900" }, { "id": "140921", "value": "定襄县", "parentId": "140900" }, { "id": "140922", "value": "五台县", "parentId": "140900" }, { "id": "140923", "value": "代县", "parentId": "140900" }, { "id": "140924", "value": "繁峙县", "parentId": "140900" }, { "id": "140925", "value": "宁武县", "parentId": "140900" }, { "id": "140926", "value": "静乐县", "parentId": "140900" }, { "id": "140927", "value": "神池县", "parentId": "140900" }, { "id": "140928", "value": "五寨县", "parentId": "140900" }, { "id": "140929", "value": "岢岚县", "parentId": "140900" }, { "id": "140930", "value": "河曲县", "parentId": "140900" }, { "id": "140931", "value": "保德县", "parentId": "140900" }, { "id": "140932", "value": "偏关县", "parentId": "140900" }, { "id": "140981", "value": "原平市", "parentId": "140900" },
/**********临汾市********/
{ "id": "141002", "value": "尧都区", "parentId": "141000" }, { "id": "141021", "value": "曲沃县", "parentId": "141000" }, { "id": "141022", "value": "翼城县", "parentId": "141000" }, { "id": "141023", "value": "襄汾县", "parentId": "141000" }, { "id": "141024", "value": "洪洞县", "parentId": "141000" }, { "id": "141025", "value": "古县", "parentId": "141000" }, { "id": "141026", "value": "安泽县", "parentId": "141000" }, { "id": "141027", "value": "浮山县", "parentId": "141000" }, { "id": "141028", "value": "吉县", "parentId": "141000" }, { "id": "141029", "value": "乡宁县", "parentId": "141000" }, { "id": "141030", "value": "大宁县", "parentId": "141000" }, { "id": "141031", "value": "隰县", "parentId": "141000" }, { "id": "141032", "value": "永和县", "parentId": "141000" }, { "id": "141033", "value": "蒲县", "parentId": "141000" }, { "id": "141034", "value": "汾西县", "parentId": "141000" }, { "id": "141081", "value": "侯马市", "parentId": "141000" }, { "id": "141082", "value": "霍州市", "parentId": "141000" },
/**********吕梁市********/
{ "id": "141102", "value": "离石区", "parentId": "141100" }, { "id": "141121", "value": "文水县", "parentId": "141100" }, { "id": "141122", "value": "交城县", "parentId": "141100" }, { "id": "141123", "value": "兴县", "parentId": "141100" }, { "id": "141124", "value": "临县", "parentId": "141100" }, { "id": "141125", "value": "柳林县", "parentId": "141100" }, { "id": "141126", "value": "石楼县", "parentId": "141100" }, { "id": "141127", "value": "岚县", "parentId": "141100" }, { "id": "141128", "value": "方山县", "parentId": "141100" }, { "id": "141129", "value": "中阳县", "parentId": "141100" }, { "id": "141130", "value": "交口县", "parentId": "141100" }, { "id": "141181", "value": "孝义市", "parentId": "141100" }, { "id": "141182", "value": "汾阳市", "parentId": "141100" },
/**********呼和浩特市********/
{ "id": "150102", "value": "新城区", "parentId": "150100" }, { "id": "150103", "value": "回民区", "parentId": "150100" }, { "id": "150104", "value": "玉泉区", "parentId": "150100" }, { "id": "150105", "value": "赛罕区", "parentId": "150100" }, { "id": "150121", "value": "土默特左旗", "parentId": "150100" }, { "id": "150122", "value": "托克托县", "parentId": "150100" }, { "id": "150123", "value": "和林格尔县", "parentId": "150100" }, { "id": "150124", "value": "清水河县", "parentId": "150100" }, { "id": "150125", "value": "武川县", "parentId": "150100" },
/**********包头市********/
{ "id": "150202", "value": "东河区", "parentId": "150200" }, { "id": "150203", "value": "昆都仑区", "parentId": "150200" }, { "id": "150204", "value": "青山区", "parentId": "150200" }, { "id": "150205", "value": "石拐区", "parentId": "150200" }, { "id": "150206", "value": "白云鄂博矿区", "parentId": "150200" }, { "id": "150207", "value": "九原区", "parentId": "150200" }, { "id": "150221", "value": "土默特右旗", "parentId": "150200" }, { "id": "150222", "value": "固阳县", "parentId": "150200" }, { "id": "150223", "value": "达尔罕茂明安联合旗", "parentId": "150200" },
/**********乌海市********/
{ "id": "150302", "value": "海勃湾区", "parentId": "150300" }, { "id": "150303", "value": "海南区", "parentId": "150300" }, { "id": "150304", "value": "乌达区", "parentId": "150300" },
/**********赤峰市********/
{ "id": "150402", "value": "红山区", "parentId": "150400" }, { "id": "150403", "value": "元宝山区", "parentId": "150400" }, { "id": "150404", "value": "松山区", "parentId": "150400" }, { "id": "150421", "value": "阿鲁科尔沁旗", "parentId": "150400" }, { "id": "150422", "value": "巴林左旗", "parentId": "150400" }, { "id": "150423", "value": "巴林右旗", "parentId": "150400" }, { "id": "150424", "value": "林西县", "parentId": "150400" }, { "id": "150425", "value": "克什克腾旗", "parentId": "150400" }, { "id": "150426", "value": "翁牛特旗", "parentId": "150400" }, { "id": "150428", "value": "喀喇沁旗", "parentId": "150400" }, { "id": "150429", "value": "宁城县", "parentId": "150400" }, { "id": "150430", "value": "敖汉旗", "parentId": "150400" },
/**********通辽市********/
{ "id": "150502", "value": "科尔沁区", "parentId": "150500" }, { "id": "150521", "value": "科尔沁左翼中旗", "parentId": "150500" }, { "id": "150522", "value": "科尔沁左翼后旗", "parentId": "150500" }, { "id": "150523", "value": "开鲁县", "parentId": "150500" }, { "id": "150524", "value": "库伦旗", "parentId": "150500" }, { "id": "150525", "value": "奈曼旗", "parentId": "150500" }, { "id": "150526", "value": "扎鲁特旗", "parentId": "150500" }, { "id": "150581", "value": "霍林郭勒市", "parentId": "150500" },
/**********鄂尔多斯市********/
{ "id": "150602", "value": "东胜区", "parentId": "150600" }, { "id": "150621", "value": "达拉特旗", "parentId": "150600" }, { "id": "150622", "value": "准格尔旗", "parentId": "150600" }, { "id": "150623", "value": "鄂托克前旗", "parentId": "150600" }, { "id": "150624", "value": "鄂托克旗", "parentId": "150600" }, { "id": "150625", "value": "杭锦旗", "parentId": "150600" }, { "id": "150626", "value": "乌审旗", "parentId": "150600" }, { "id": "150627", "value": "伊金霍洛旗", "parentId": "150600" },
/**********呼伦贝尔市********/
{ "id": "150702", "value": "海拉尔区", "parentId": "150700" }, { "id": "150721", "value": "阿荣旗", "parentId": "150700" }, { "id": "150722", "value": "莫力达瓦达斡尔族自治旗", "parentId": "150700" }, { "id": "150723", "value": "鄂伦春自治旗", "parentId": "150700" }, { "id": "150724", "value": "鄂温克族自治旗", "parentId": "150700" }, { "id": "150725", "value": "陈巴尔虎旗", "parentId": "150700" }, { "id": "150726", "value": "新巴尔虎左旗", "parentId": "150700" }, { "id": "150727", "value": "新巴尔虎右旗", "parentId": "150700" }, { "id": "150781", "value": "满洲里市", "parentId": "150700" }, { "id": "150782", "value": "牙克石市", "parentId": "150700" }, { "id": "150783", "value": "扎兰屯市", "parentId": "150700" }, { "id": "150784", "value": "额尔古纳市", "parentId": "150700" }, { "id": "150785", "value": "根河市", "parentId": "150700" },
/**********巴彦淖尔市********/
{ "id": "150802", "value": "临河区", "parentId": "150800" }, { "id": "150821", "value": "五原县", "parentId": "150800" }, { "id": "150822", "value": "磴口县", "parentId": "150800" }, { "id": "150823", "value": "乌拉特前旗", "parentId": "150800" }, { "id": "150824", "value": "乌拉特中旗", "parentId": "150800" }, { "id": "150825", "value": "乌拉特后旗", "parentId": "150800" }, { "id": "150826", "value": "杭锦后旗", "parentId": "150800" },
/**********乌兰察布市********/
{ "id": "150902", "value": "集宁区", "parentId": "150900" }, { "id": "150921", "value": "卓资县", "parentId": "150900" }, { "id": "150922", "value": "化德县", "parentId": "150900" }, { "id": "150923", "value": "商都县", "parentId": "150900" }, { "id": "150924", "value": "兴和县", "parentId": "150900" }, { "id": "150925", "value": "凉城县", "parentId": "150900" }, { "id": "150926", "value": "察哈尔右翼前旗", "parentId": "150900" }, { "id": "150927", "value": "察哈尔右翼中旗", "parentId": "150900" }, { "id": "150928", "value": "察哈尔右翼后旗", "parentId": "150900" }, { "id": "150929", "value": "四子王旗", "parentId": "150900" }, { "id": "150981", "value": "丰镇市", "parentId": "150900" },
/**********兴安盟********/
{ "id": "152201", "value": "乌兰浩特市", "parentId": "152200" }, { "id": "152202", "value": "阿尔山市", "parentId": "152200" }, { "id": "152221", "value": "科尔沁右翼前旗", "parentId": "152200" }, { "id": "152222", "value": "科尔沁右翼中旗", "parentId": "152200" }, { "id": "152223", "value": "扎赉特旗", "parentId": "152200" }, { "id": "152224", "value": "突泉县", "parentId": "152200" },
/**********锡林郭勒盟********/
{ "id": "152501", "value": "二连浩特市", "parentId": "152500" }, { "id": "152502", "value": "锡林浩特市", "parentId": "152500" }, { "id": "152522", "value": "阿巴嘎旗", "parentId": "152500" }, { "id": "152523", "value": "苏尼特左旗", "parentId": "152500" }, { "id": "152524", "value": "苏尼特右旗", "parentId": "152500" }, { "id": "152525", "value": "东乌珠穆沁旗", "parentId": "152500" }, { "id": "152526", "value": "西乌珠穆沁旗", "parentId": "152500" }, { "id": "152527", "value": "太仆寺旗", "parentId": "152500" }, { "id": "152528", "value": "镶黄旗", "parentId": "152500" }, { "id": "152529", "value": "正镶白旗", "parentId": "152500" }, { "id": "152530", "value": "正蓝旗", "parentId": "152500" }, { "id": "152531", "value": "多伦县", "parentId": "152500" },
/**********阿拉善盟********/
{ "id": "152921", "value": "阿拉善左旗", "parentId": "152900" }, { "id": "152922", "value": "阿拉善右旗", "parentId": "152900" }, { "id": "152923", "value": "额济纳旗", "parentId": "152900" },
/**********沈阳市********/
{ "id": "210102", "value": "和平区", "parentId": "210100" }, { "id": "210103", "value": "沈河区", "parentId": "210100" }, { "id": "210104", "value": "大东区", "parentId": "210100" }, { "id": "210105", "value": "皇姑区", "parentId": "210100" }, { "id": "210106", "value": "铁西区", "parentId": "210100" }, { "id": "210111", "value": "苏家屯区", "parentId": "210100" }, { "id": "210112", "value": "东陵区", "parentId": "210100" }, { "id": "210113", "value": "沈北新区", "parentId": "210100" }, { "id": "210114", "value": "于洪区", "parentId": "210100" }, { "id": "210122", "value": "辽中县", "parentId": "210100" }, { "id": "210123", "value": "康平县", "parentId": "210100" }, { "id": "210124", "value": "法库县", "parentId": "210100" }, { "id": "210181", "value": "新民市", "parentId": "210100" },
/**********大连市********/
{ "id": "210202", "value": "中山区", "parentId": "210200" }, { "id": "210203", "value": "西岗区", "parentId": "210200" }, { "id": "210204", "value": "沙河口区", "parentId": "210200" }, { "id": "210211", "value": "甘井子区", "parentId": "210200" }, { "id": "210212", "value": "旅顺口区", "parentId": "210200" }, { "id": "210213", "value": "金州区", "parentId": "210200" }, { "id": "210224", "value": "长海县", "parentId": "210200" }, { "id": "210281", "value": "瓦房店市", "parentId": "210200" }, { "id": "210282", "value": "普兰店市", "parentId": "210200" }, { "id": "210283", "value": "庄河市", "parentId": "210200" },
/**********鞍山市********/
{ "id": "210302", "value": "铁东区", "parentId": "210300" }, { "id": "210303", "value": "铁西区", "parentId": "210300" }, { "id": "210304", "value": "立山区", "parentId": "210300" }, { "id": "210311", "value": "千山区", "parentId": "210300" }, { "id": "210321", "value": "台安县", "parentId": "210300" }, { "id": "210323", "value": "岫岩满族自治县", "parentId": "210300" }, { "id": "210381", "value": "海城市", "parentId": "210300" },
/**********抚顺市********/
{ "id": "210402", "value": "新抚区", "parentId": "210400" }, { "id": "210403", "value": "东洲区", "parentId": "210400" }, { "id": "210404", "value": "望花区", "parentId": "210400" }, { "id": "210411", "value": "顺城区", "parentId": "210400" }, { "id": "210421", "value": "抚顺县", "parentId": "210400" }, { "id": "210422", "value": "新宾满族自治县", "parentId": "210400" }, { "id": "210423", "value": "清原满族自治县", "parentId": "210400" },
/**********本溪市********/
{ "id": "210502", "value": "平山区", "parentId": "210500" }, { "id": "210503", "value": "溪湖区", "parentId": "210500" }, { "id": "210504", "value": "明山区", "parentId": "210500" }, { "id": "210505", "value": "南芬区", "parentId": "210500" }, { "id": "210521", "value": "本溪满族自治县", "parentId": "210500" }, { "id": "210522", "value": "桓仁满族自治县", "parentId": "210500" },
/**********丹东市********/
{ "id": "210602", "value": "元宝区", "parentId": "210600" }, { "id": "210603", "value": "振兴区", "parentId": "210600" }, { "id": "210604", "value": "振安区", "parentId": "210600" }, { "id": "210624", "value": "宽甸满族自治县", "parentId": "210600" }, { "id": "210681", "value": "东港市", "parentId": "210600" }, { "id": "210682", "value": "凤城市", "parentId": "210600" },
/**********锦州市********/
{ "id": "210702", "value": "古塔区", "parentId": "210700" }, { "id": "210703", "value": "凌河区", "parentId": "210700" }, { "id": "210711", "value": "太和区", "parentId": "210700" }, { "id": "210726", "value": "黑山县", "parentId": "210700" }, { "id": "210727", "value": "义县", "parentId": "210700" }, { "id": "210781", "value": "凌海市", "parentId": "210700" }, { "id": "210782", "value": "北镇市", "parentId": "210700" },
/**********营口市********/
{ "id": "210802", "value": "站前区", "parentId": "210800" }, { "id": "210803", "value": "西市区", "parentId": "210800" }, { "id": "210804", "value": "鲅鱼圈区", "parentId": "210800" }, { "id": "210811", "value": "老边区", "parentId": "210800" }, { "id": "210881", "value": "盖州市", "parentId": "210800" }, { "id": "210882", "value": "大石桥市", "parentId": "210800" },
/**********阜新市********/
{ "id": "210902", "value": "海州区", "parentId": "210900" }, { "id": "210903", "value": "新邱区", "parentId": "210900" }, { "id": "210904", "value": "太平区", "parentId": "210900" }, { "id": "210905", "value": "清河门区", "parentId": "210900" }, { "id": "210911", "value": "细河区", "parentId": "210900" }, { "id": "210921", "value": "阜新蒙古族自治县", "parentId": "210900" }, { "id": "210922", "value": "彰武县", "parentId": "210900" },
/**********辽阳市********/
{ "id": "211002", "value": "白塔区", "parentId": "211000" }, { "id": "211003", "value": "文圣区", "parentId": "211000" }, { "id": "211004", "value": "宏伟区", "parentId": "211000" }, { "id": "211005", "value": "弓长岭区", "parentId": "211000" }, { "id": "211011", "value": "太子河区", "parentId": "211000" }, { "id": "211021", "value": "辽阳县", "parentId": "211000" }, { "id": "211081", "value": "灯塔市", "parentId": "211000" },
/**********盘锦市********/
{ "id": "211102", "value": "双台子区", "parentId": "211100" }, { "id": "211103", "value": "兴隆台区", "parentId": "211100" }, { "id": "211121", "value": "大洼县", "parentId": "211100" }, { "id": "211122", "value": "盘山县", "parentId": "211100" },
/**********铁岭市********/
{ "id": "211202", "value": "银州区", "parentId": "211200" }, { "id": "211204", "value": "清河区", "parentId": "211200" }, { "id": "211221", "value": "铁岭县", "parentId": "211200" }, { "id": "211223", "value": "西丰县", "parentId": "211200" }, { "id": "211224", "value": "昌图县", "parentId": "211200" }, { "id": "211281", "value": "调兵山市", "parentId": "211200" }, { "id": "211282", "value": "开原市", "parentId": "211200" },
/**********朝阳市********/
{ "id": "211302", "value": "双塔区", "parentId": "211300" }, { "id": "211303", "value": "龙城区", "parentId": "211300" }, { "id": "211321", "value": "朝阳县", "parentId": "211300" }, { "id": "211322", "value": "建平县", "parentId": "211300" }, { "id": "211324", "value": "喀喇沁左翼蒙古族自治县", "parentId": "211300" }, { "id": "211381", "value": "北票市", "parentId": "211300" }, { "id": "211382", "value": "凌源市", "parentId": "211300" },
/**********葫芦岛市********/
{ "id": "211402", "value": "连山区", "parentId": "211400" }, { "id": "211403", "value": "龙港区", "parentId": "211400" }, { "id": "211404", "value": "南票区", "parentId": "211400" }, { "id": "211421", "value": "绥中县", "parentId": "211400" }, { "id": "211422", "value": "建昌县", "parentId": "211400" }, { "id": "211481", "value": "兴城市", "parentId": "211400" },
/**********长春市********/
{ "id": "220102", "value": "南关区", "parentId": "220100" }, { "id": "220103", "value": "宽城区", "parentId": "220100" }, { "id": "220104", "value": "朝阳区", "parentId": "220100" }, { "id": "220105", "value": "二道区", "parentId": "220100" }, { "id": "220106", "value": "绿园区", "parentId": "220100" }, { "id": "220112", "value": "双阳区", "parentId": "220100" }, { "id": "220122", "value": "农安县", "parentId": "220100" }, { "id": "220181", "value": "九台市", "parentId": "220100" }, { "id": "220182", "value": "榆树市", "parentId": "220100" }, { "id": "220183", "value": "德惠市", "parentId": "220100" },
/**********吉林市********/
{ "id": "220202", "value": "昌邑区", "parentId": "220200" }, { "id": "220203", "value": "龙潭区", "parentId": "220200" }, { "id": "220204", "value": "船营区", "parentId": "220200" }, { "id": "220211", "value": "丰满区", "parentId": "220200" }, { "id": "220221", "value": "永吉县", "parentId": "220200" }, { "id": "220281", "value": "蛟河市", "parentId": "220200" }, { "id": "220282", "value": "桦甸市", "parentId": "220200" }, { "id": "220283", "value": "舒兰市", "parentId": "220200" }, { "id": "220284", "value": "磐石市", "parentId": "220200" },
/**********四平市********/
{ "id": "220302", "value": "铁西区", "parentId": "220300" }, { "id": "220303", "value": "铁东区", "parentId": "220300" }, { "id": "220322", "value": "梨树县", "parentId": "220300" }, { "id": "220323", "value": "伊通满族自治县", "parentId": "220300" }, { "id": "220381", "value": "公主岭市", "parentId": "220300" }, { "id": "220382", "value": "双辽市", "parentId": "220300" },
/**********辽源市********/
{ "id": "220402", "value": "龙山区", "parentId": "220400" }, { "id": "220403", "value": "西安区", "parentId": "220400" }, { "id": "220421", "value": "东丰县", "parentId": "220400" }, { "id": "220422", "value": "东辽县", "parentId": "220400" },
/**********通化市********/
{ "id": "220502", "value": "东昌区", "parentId": "220500" }, { "id": "220503", "value": "二道江区", "parentId": "220500" }, { "id": "220521", "value": "通化县", "parentId": "220500" }, { "id": "220523", "value": "辉南县", "parentId": "220500" }, { "id": "220524", "value": "柳河县", "parentId": "220500" }, { "id": "220581", "value": "梅河口市", "parentId": "220500" }, { "id": "220582", "value": "集安市", "parentId": "220500" },
/**********白山市********/
{ "id": "220602", "value": "浑江区", "parentId": "220600" }, { "id": "220605", "value": "江源区", "parentId": "220600" }, { "id": "220621", "value": "抚松县", "parentId": "220600" }, { "id": "220622", "value": "靖宇县", "parentId": "220600" }, { "id": "220623", "value": "长白朝鲜族自治县", "parentId": "220600" }, { "id": "220681", "value": "临江市", "parentId": "220600" },
/**********松原市********/
{ "id": "220702", "value": "宁江区", "parentId": "220700" }, { "id": "220721", "value": "前郭尔罗斯蒙古族自治县", "parentId": "220700" }, { "id": "220722", "value": "长岭县", "parentId": "220700" }, { "id": "220723", "value": "乾安县", "parentId": "220700" }, { "id": "220724", "value": "扶余县", "parentId": "220700" },
/**********白城市********/
{ "id": "220802", "value": "洮北区", "parentId": "220800" }, { "id": "220821", "value": "镇赉县", "parentId": "220800" }, { "id": "220822", "value": "通榆县", "parentId": "220800" }, { "id": "220881", "value": "洮南市", "parentId": "220800" }, { "id": "220882", "value": "大安市", "parentId": "220800" },
/**********延边朝鲜族自治州********/
{ "id": "222401", "value": "延吉市", "parentId": "222400" }, { "id": "222402", "value": "图们市", "parentId": "222400" }, { "id": "222403", "value": "敦化市", "parentId": "222400" }, { "id": "222404", "value": "珲春市", "parentId": "222400" }, { "id": "222405", "value": "龙井市", "parentId": "222400" }, { "id": "222406", "value": "和龙市", "parentId": "222400" }, { "id": "222424", "value": "汪清县", "parentId": "222400" }, { "id": "222426", "value": "安图县", "parentId": "222400" },
/**********哈尔滨市********/
{ "id": "230102", "value": "道里区", "parentId": "230100" }, { "id": "230103", "value": "南岗区", "parentId": "230100" }, { "id": "230104", "value": "道外区", "parentId": "230100" }, { "id": "230108", "value": "平房区", "parentId": "230100" }, { "id": "230109", "value": "松北区", "parentId": "230100" }, { "id": "230110", "value": "香坊区", "parentId": "230100" }, { "id": "230111", "value": "呼兰区", "parentId": "230100" }, { "id": "230112", "value": "阿城区", "parentId": "230100" }, { "id": "230123", "value": "依兰县", "parentId": "230100" }, { "id": "230124", "value": "方正县", "parentId": "230100" }, { "id": "230125", "value": "宾县", "parentId": "230100" }, { "id": "230126", "value": "巴彦县", "parentId": "230100" }, { "id": "230127", "value": "木兰县", "parentId": "230100" }, { "id": "230128", "value": "通河县", "parentId": "230100" }, { "id": "230129", "value": "延寿县", "parentId": "230100" }, { "id": "230182", "value": "双城市", "parentId": "230100" }, { "id": "230183", "value": "尚志市", "parentId": "230100" }, { "id": "230184", "value": "五常市", "parentId": "230100" },
/**********齐齐哈尔市********/
{ "id": "230202", "value": "龙沙区", "parentId": "230200" }, { "id": "230203", "value": "建华区", "parentId": "230200" }, { "id": "230204", "value": "铁锋区", "parentId": "230200" }, { "id": "230205", "value": "昂昂溪区", "parentId": "230200" }, { "id": "230206", "value": "富拉尔基区", "parentId": "230200" }, { "id": "230207", "value": "碾子山区", "parentId": "230200" }, { "id": "230208", "value": "梅里斯达斡尔族区", "parentId": "230200" }, { "id": "230221", "value": "龙江县", "parentId": "230200" }, { "id": "230223", "value": "依安县", "parentId": "230200" }, { "id": "230224", "value": "泰来县", "parentId": "230200" }, { "id": "230225", "value": "甘南县", "parentId": "230200" }, { "id": "230227", "value": "富裕县", "parentId": "230200" }, { "id": "230229", "value": "克山县", "parentId": "230200" }, { "id": "230230", "value": "克东县", "parentId": "230200" }, { "id": "230231", "value": "拜泉县", "parentId": "230200" }, { "id": "230281", "value": "讷河市", "parentId": "230200" },
/**********鸡西市********/
{ "id": "230302", "value": "鸡冠区", "parentId": "230300" }, { "id": "230303", "value": "恒山区", "parentId": "230300" }, { "id": "230304", "value": "滴道区", "parentId": "230300" }, { "id": "230305", "value": "梨树区", "parentId": "230300" }, { "id": "230306", "value": "城子河区", "parentId": "230300" }, { "id": "230307", "value": "麻山区", "parentId": "230300" }, { "id": "230321", "value": "鸡东县", "parentId": "230300" }, { "id": "230381", "value": "虎林市", "parentId": "230300" }, { "id": "230382", "value": "密山市", "parentId": "230300" },
/**********鹤岗市********/
{ "id": "230402", "value": "向阳区", "parentId": "230400" }, { "id": "230403", "value": "工农区", "parentId": "230400" }, { "id": "230404", "value": "南山区", "parentId": "230400" }, { "id": "230405", "value": "兴安区", "parentId": "230400" }, { "id": "230406", "value": "东山区", "parentId": "230400" }, { "id": "230407", "value": "兴山区", "parentId": "230400" }, { "id": "230421", "value": "萝北县", "parentId": "230400" }, { "id": "230422", "value": "绥滨县", "parentId": "230400" },
/**********双鸭山市********/
{ "id": "230502", "value": "尖山区", "parentId": "230500" }, { "id": "230503", "value": "岭东区", "parentId": "230500" }, { "id": "230505", "value": "四方台区", "parentId": "230500" }, { "id": "230506", "value": "宝山区", "parentId": "230500" }, { "id": "230521", "value": "集贤县", "parentId": "230500" }, { "id": "230522", "value": "友谊县", "parentId": "230500" }, { "id": "230523", "value": "宝清县", "parentId": "230500" }, { "id": "230524", "value": "饶河县", "parentId": "230500" },
/**********大庆市********/
{ "id": "230602", "value": "萨尔图区", "parentId": "230600" }, { "id": "230603", "value": "龙凤区", "parentId": "230600" }, { "id": "230604", "value": "让胡路区", "parentId": "230600" }, { "id": "230605", "value": "红岗区", "parentId": "230600" }, { "id": "230606", "value": "大同区", "parentId": "230600" }, { "id": "230621", "value": "肇州县", "parentId": "230600" }, { "id": "230622", "value": "肇源县", "parentId": "230600" }, { "id": "230623", "value": "林甸县", "parentId": "230600" }, { "id": "230624", "value": "杜尔伯特蒙古族自治县", "parentId": "230600" },
/**********伊春市********/
{ "id": "230702", "value": "伊春区", "parentId": "230700" }, { "id": "230703", "value": "南岔区", "parentId": "230700" }, { "id": "230704", "value": "友好区", "parentId": "230700" }, { "id": "230705", "value": "西林区", "parentId": "230700" }, { "id": "230706", "value": "翠峦区", "parentId": "230700" }, { "id": "230707", "value": "新青区", "parentId": "230700" }, { "id": "230708", "value": "美溪区", "parentId": "230700" }, { "id": "230709", "value": "金山屯区", "parentId": "230700" }, { "id": "230710", "value": "五营区", "parentId": "230700" }, { "id": "230711", "value": "乌马河区", "parentId": "230700" }, { "id": "230712", "value": "汤旺河区", "parentId": "230700" }, { "id": "230713", "value": "带岭区", "parentId": "230700" }, { "id": "230714", "value": "乌伊岭区", "parentId": "230700" }, { "id": "230715", "value": "红星区", "parentId": "230700" }, { "id": "230716", "value": "上甘岭区", "parentId": "230700" }, { "id": "230722", "value": "嘉荫县", "parentId": "230700" }, { "id": "230781", "value": "铁力市", "parentId": "230700" },
/**********佳木斯市********/
{ "id": "230803", "value": "向阳区", "parentId": "230800" }, { "id": "230804", "value": "前进区", "parentId": "230800" }, { "id": "230805", "value": "东风区", "parentId": "230800" }, { "id": "230811", "value": "郊区", "parentId": "230800" }, { "id": "230822", "value": "桦南县", "parentId": "230800" }, { "id": "230826", "value": "桦川县", "parentId": "230800" }, { "id": "230828", "value": "汤原县", "parentId": "230800" }, { "id": "230833", "value": "抚远县", "parentId": "230800" }, { "id": "230881", "value": "同江市", "parentId": "230800" }, { "id": "230882", "value": "富锦市", "parentId": "230800" },
/**********七台河市********/
{ "id": "230902", "value": "新兴区", "parentId": "230900" }, { "id": "230903", "value": "桃山区", "parentId": "230900" }, { "id": "230904", "value": "茄子河区", "parentId": "230900" }, { "id": "230921", "value": "勃利县", "parentId": "230900" },
/**********牡丹江市********/
{ "id": "231002", "value": "东安区", "parentId": "231000" }, { "id": "231003", "value": "阳明区", "parentId": "231000" }, { "id": "231004", "value": "爱民区", "parentId": "231000" }, { "id": "231005", "value": "西安区", "parentId": "231000" }, { "id": "231024", "value": "东宁县", "parentId": "231000" }, { "id": "231025", "value": "林口县", "parentId": "231000" }, { "id": "231081", "value": "绥芬河市", "parentId": "231000" }, { "id": "231083", "value": "海林市", "parentId": "231000" }, { "id": "231084", "value": "宁安市", "parentId": "231000" }, { "id": "231085", "value": "穆棱市", "parentId": "231000" },
/**********黑河市********/
{ "id": "231102", "value": "爱辉区", "parentId": "231100" }, { "id": "231121", "value": "嫩江县", "parentId": "231100" }, { "id": "231123", "value": "逊克县", "parentId": "231100" }, { "id": "231124", "value": "孙吴县", "parentId": "231100" }, { "id": "231181", "value": "北安市", "parentId": "231100" }, { "id": "231182", "value": "五大连池市", "parentId": "231100" },
/**********绥化市********/
{ "id": "231202", "value": "北林区", "parentId": "231200" }, { "id": "231221", "value": "望奎县", "parentId": "231200" }, { "id": "231222", "value": "兰西县", "parentId": "231200" }, { "id": "231223", "value": "青冈县", "parentId": "231200" }, { "id": "231224", "value": "庆安县", "parentId": "231200" }, { "id": "231225", "value": "明水县", "parentId": "231200" }, { "id": "231226", "value": "绥棱县", "parentId": "231200" }, { "id": "231281", "value": "安达市", "parentId": "231200" }, { "id": "231282", "value": "肇东市", "parentId": "231200" }, { "id": "231283", "value": "海伦市", "parentId": "231200" },
/**********大兴安岭地区********/
{ "id": "232701", "value": "加格达奇区", "parentId": "232700" }, { "id": "232702", "value": "松岭区", "parentId": "232700" }, { "id": "232703", "value": "新林区", "parentId": "232700" }, { "id": "232704", "value": "呼中区", "parentId": "232700" }, { "id": "232721", "value": "呼玛县", "parentId": "232700" }, { "id": "232722", "value": "塔河县", "parentId": "232700" }, { "id": "232723", "value": "漠河县", "parentId": "232700" },
/**********上海市********/
{ "id": "310101", "value": "黄浦区", "parentId": "310100" }, { "id": "310104", "value": "徐汇区", "parentId": "310100" }, { "id": "310105", "value": "长宁区", "parentId": "310100" }, { "id": "310106", "value": "静安区", "parentId": "310100" }, { "id": "310107", "value": "普陀区", "parentId": "310100" }, { "id": "310108", "value": "闸北区", "parentId": "310100" }, { "id": "310109", "value": "虹口区", "parentId": "310100" }, { "id": "310110", "value": "杨浦区", "parentId": "310100" }, { "id": "310112", "value": "闵行区", "parentId": "310100" }, { "id": "310113", "value": "宝山区", "parentId": "310100" }, { "id": "310114", "value": "嘉定区", "parentId": "310100" }, { "id": "310115", "value": "浦东新区", "parentId": "310100" }, { "id": "310116", "value": "金山区", "parentId": "310100" }, { "id": "310117", "value": "松江区", "parentId": "310100" }, { "id": "310118", "value": "青浦区", "parentId": "310100" }, { "id": "310120", "value": "奉贤区", "parentId": "310100" }, { "id": "310230", "value": "崇明县", "parentId": "310100" },
/**********南京市********/
{ "id": "320102", "value": "玄武区", "parentId": "320100" }, { "id": "320103", "value": "白下区", "parentId": "320100" }, { "id": "320104", "value": "秦淮区", "parentId": "320100" }, { "id": "320105", "value": "建邺区", "parentId": "320100" }, { "id": "320106", "value": "鼓楼区", "parentId": "320100" }, { "id": "320107", "value": "下关区", "parentId": "320100" }, { "id": "320111", "value": "浦口区", "parentId": "320100" }, { "id": "320113", "value": "栖霞区", "parentId": "320100" }, { "id": "320114", "value": "雨花台区", "parentId": "320100" }, { "id": "320115", "value": "江宁区", "parentId": "320100" }, { "id": "320116", "value": "六合区", "parentId": "320100" }, { "id": "320124", "value": "溧水县", "parentId": "320100" }, { "id": "320125", "value": "高淳县", "parentId": "320100" },
/**********无锡市********/
{ "id": "320202", "value": "崇安区", "parentId": "320200" }, { "id": "320203", "value": "南长区", "parentId": "320200" }, { "id": "320204", "value": "北塘区", "parentId": "320200" }, { "id": "320205", "value": "锡山区", "parentId": "320200" }, { "id": "320206", "value": "惠山区", "parentId": "320200" }, { "id": "320211", "value": "滨湖区", "parentId": "320200" }, { "id": "320281", "value": "江阴市", "parentId": "320200" }, { "id": "320282", "value": "宜兴市", "parentId": "320200" },
/**********徐州市********/
{ "id": "320302", "value": "鼓楼区", "parentId": "320300" }, { "id": "320303", "value": "云龙区", "parentId": "320300" }, { "id": "320305", "value": "贾汪区", "parentId": "320300" }, { "id": "320311", "value": "泉山区", "parentId": "320300" }, { "id": "320312", "value": "铜山区", "parentId": "320300" }, { "id": "320321", "value": "丰县", "parentId": "320300" }, { "id": "320322", "value": "沛县", "parentId": "320300" }, { "id": "320324", "value": "睢宁县", "parentId": "320300" }, { "id": "320381", "value": "新沂市", "parentId": "320300" }, { "id": "320382", "value": "邳州市", "parentId": "320300" },
/**********常州市********/
{ "id": "320402", "value": "天宁区", "parentId": "320400" }, { "id": "320404", "value": "钟楼区", "parentId": "320400" }, { "id": "320405", "value": "戚墅堰区", "parentId": "320400" }, { "id": "320411", "value": "新北区", "parentId": "320400" }, { "id": "320412", "value": "武进区", "parentId": "320400" }, { "id": "320481", "value": "溧阳市", "parentId": "320400" }, { "id": "320482", "value": "金坛市", "parentId": "320400" },
/**********苏州市********/
{ "id": "320503", "value": "姑苏区", "parentId": "320500" }, { "id": "320505", "value": "虎丘区", "parentId": "320500" }, { "id": "320506", "value": "吴中区", "parentId": "320500" }, { "id": "320507", "value": "相城区", "parentId": "320500" }, { "id": "320581", "value": "常熟市", "parentId": "320500" }, { "id": "320582", "value": "张家港市", "parentId": "320500" }, { "id": "320583", "value": "昆山市", "parentId": "320500" }, { "id": "320584", "value": "吴江区", "parentId": "320500" }, { "id": "320585", "value": "太仓市", "parentId": "320500" },
/**********南通市********/
{ "id": "320602", "value": "崇川区", "parentId": "320600" }, { "id": "320611", "value": "港闸区", "parentId": "320600" }, { "id": "320612", "value": "通州区", "parentId": "320600" }, { "id": "320621", "value": "海安县", "parentId": "320600" }, { "id": "320623", "value": "如东县", "parentId": "320600" }, { "id": "320681", "value": "启东市", "parentId": "320600" }, { "id": "320682", "value": "如皋市", "parentId": "320600" }, { "id": "320684", "value": "海门市", "parentId": "320600" },
/**********连云港市********/
{ "id": "320703", "value": "连云区", "parentId": "320700" }, { "id": "320705", "value": "新浦区", "parentId": "320700" }, { "id": "320706", "value": "海州区", "parentId": "320700" }, { "id": "320721", "value": "赣榆县", "parentId": "320700" }, { "id": "320722", "value": "东海县", "parentId": "320700" }, { "id": "320723", "value": "灌云县", "parentId": "320700" }, { "id": "320724", "value": "灌南县", "parentId": "320700" },
/**********淮安市********/
{ "id": "320802", "value": "清河区", "parentId": "320800" }, { "id": "320803", "value": "淮安区", "parentId": "320800" }, { "id": "320804", "value": "淮阴区", "parentId": "320800" }, { "id": "320811", "value": "青浦区", "parentId": "320800" }, { "id": "320826", "value": "涟水县", "parentId": "320800" }, { "id": "320829", "value": "洪泽县", "parentId": "320800" }, { "id": "320830", "value": "盱眙县", "parentId": "320800" }, { "id": "320831", "value": "金湖县", "parentId": "320800" },
/**********盐城市********/
{ "id": "320902", "value": "亭湖区", "parentId": "320900" }, { "id": "320903", "value": "盐都区", "parentId": "320900" }, { "id": "320921", "value": "响水县", "parentId": "320900" }, { "id": "320922", "value": "滨海县", "parentId": "320900" }, { "id": "320923", "value": "阜宁县", "parentId": "320900" }, { "id": "320924", "value": "射阳县", "parentId": "320900" }, { "id": "320925", "value": "建湖县", "parentId": "320900" }, { "id": "320981", "value": "东台市", "parentId": "320900" }, { "id": "320982", "value": "大丰市", "parentId": "320900" },
/**********扬州市********/
{ "id": "321002", "value": "广陵区", "parentId": "321000" }, { "id": "321003", "value": "邗江区", "parentId": "321000" }, { "id": "321023", "value": "宝应县", "parentId": "321000" }, { "id": "321081", "value": "仪征市", "parentId": "321000" }, { "id": "321084", "value": "高邮市", "parentId": "321000" }, { "id": "321088", "value": "江都市", "parentId": "321000" },
/**********镇江市********/
{ "id": "321102", "value": "京口区", "parentId": "321100" }, { "id": "321111", "value": "润州区", "parentId": "321100" }, { "id": "321112", "value": "丹徒区", "parentId": "321100" }, { "id": "321181", "value": "丹阳市", "parentId": "321100" }, { "id": "321182", "value": "扬中市", "parentId": "321100" }, { "id": "321183", "value": "句容市", "parentId": "321100" },
/**********泰州市********/
{ "id": "321202", "value": "海陵区", "parentId": "321200" }, { "id": "321203", "value": "高港区", "parentId": "321200" }, { "id": "321281", "value": "兴化市", "parentId": "321200" }, { "id": "321282", "value": "靖江市", "parentId": "321200" }, { "id": "321283", "value": "泰兴市", "parentId": "321200" }, { "id": "321284", "value": "姜堰市", "parentId": "321200" },
/**********宿迁市********/
{ "id": "321302", "value": "宿城区", "parentId": "321300" }, { "id": "321311", "value": "宿豫区", "parentId": "321300" }, { "id": "321322", "value": "沭阳县", "parentId": "321300" }, { "id": "321323", "value": "泗阳县", "parentId": "321300" }, { "id": "321324", "value": "泗洪县", "parentId": "321300" },
/**********杭州市********/
{ "id": "330102", "value": "上城区", "parentId": "330100" }, { "id": "330103", "value": "下城区", "parentId": "330100" }, { "id": "330104", "value": "江干区", "parentId": "330100" }, { "id": "330105", "value": "拱墅区", "parentId": "330100" }, { "id": "330106", "value": "西湖区", "parentId": "330100" }, { "id": "330108", "value": "滨江区", "parentId": "330100" }, { "id": "330109", "value": "萧山区", "parentId": "330100" }, { "id": "330110", "value": "余杭区", "parentId": "330100" }, { "id": "330122", "value": "桐庐县", "parentId": "330100" }, { "id": "330127", "value": "淳安县", "parentId": "330100" }, { "id": "330182", "value": "建德市", "parentId": "330100" }, { "id": "330183", "value": "富阳市", "parentId": "330100" }, { "id": "330185", "value": "临安市", "parentId": "330100" },
/**********宁波市********/
{ "id": "330203", "value": "海曙区", "parentId": "330200" }, { "id": "330204", "value": "江东区", "parentId": "330200" }, { "id": "330205", "value": "江北区", "parentId": "330200" }, { "id": "330206", "value": "北仑区", "parentId": "330200" }, { "id": "330211", "value": "镇海区", "parentId": "330200" }, { "id": "330212", "value": "鄞州区", "parentId": "330200" }, { "id": "330225", "value": "象山县", "parentId": "330200" }, { "id": "330226", "value": "宁海县", "parentId": "330200" }, { "id": "330281", "value": "余姚市", "parentId": "330200" }, { "id": "330282", "value": "慈溪市", "parentId": "330200" }, { "id": "330283", "value": "奉化市", "parentId": "330200" },
/**********温州市********/
{ "id": "330302", "value": "鹿城区", "parentId": "330300" }, { "id": "330303", "value": "龙湾区", "parentId": "330300" }, { "id": "330304", "value": "瓯海区", "parentId": "330300" }, { "id": "330322", "value": "洞头县", "parentId": "330300" }, { "id": "330324", "value": "永嘉县", "parentId": "330300" }, { "id": "330326", "value": "平阳县", "parentId": "330300" }, { "id": "330327", "value": "苍南县", "parentId": "330300" }, { "id": "330328", "value": "文成县", "parentId": "330300" }, { "id": "330329", "value": "泰顺县", "parentId": "330300" }, { "id": "330381", "value": "瑞安市", "parentId": "330300" }, { "id": "330382", "value": "乐清市", "parentId": "330300" },
/**********嘉兴市********/
{ "id": "330402", "value": "南湖区", "parentId": "330400" }, { "id": "330411", "value": "秀洲区", "parentId": "330400" }, { "id": "330421", "value": "嘉善县", "parentId": "330400" }, { "id": "330424", "value": "海盐县", "parentId": "330400" }, { "id": "330481", "value": "海宁市", "parentId": "330400" }, { "id": "330482", "value": "平湖市", "parentId": "330400" }, { "id": "330483", "value": "桐乡市", "parentId": "330400" },
/**********湖州市********/
{ "id": "330502", "value": "吴兴区", "parentId": "330500" }, { "id": "330503", "value": "南浔区", "parentId": "330500" }, { "id": "330521", "value": "德清县", "parentId": "330500" }, { "id": "330522", "value": "长兴县", "parentId": "330500" }, { "id": "330523", "value": "安吉县", "parentId": "330500" },
/**********绍兴市********/
{ "id": "330602", "value": "越城区", "parentId": "330600" }, { "id": "330621", "value": "绍兴县", "parentId": "330600" }, { "id": "330624", "value": "新昌县", "parentId": "330600" }, { "id": "330681", "value": "诸暨市", "parentId": "330600" }, { "id": "330682", "value": "上虞市", "parentId": "330600" }, { "id": "330683", "value": "嵊州市", "parentId": "330600" },
/**********金华市********/
{ "id": "330702", "value": "婺城区", "parentId": "330700" }, { "id": "330703", "value": "金东区", "parentId": "330700" }, { "id": "330723", "value": "武义县", "parentId": "330700" }, { "id": "330726", "value": "浦江县", "parentId": "330700" }, { "id": "330727", "value": "磐安县", "parentId": "330700" }, { "id": "330781", "value": "兰溪市", "parentId": "330700" }, { "id": "330782", "value": "义乌市", "parentId": "330700" }, { "id": "330783", "value": "东阳市", "parentId": "330700" }, { "id": "330784", "value": "永康市", "parentId": "330700" },
/**********衢州市********/
{ "id": "330802", "value": "柯城区", "parentId": "330800" }, { "id": "330803", "value": "衢江区", "parentId": "330800" }, { "id": "330822", "value": "常山县", "parentId": "330800" }, { "id": "330824", "value": "开化县", "parentId": "330800" }, { "id": "330825", "value": "龙游县", "parentId": "330800" }, { "id": "330881", "value": "江山市", "parentId": "330800" },
/**********舟山市********/
{ "id": "330902", "value": "定海区", "parentId": "330900" }, { "id": "330903", "value": "普陀区", "parentId": "330900" }, { "id": "330921", "value": "岱山县", "parentId": "330900" }, { "id": "330922", "value": "嵊泗县", "parentId": "330900" },
/**********台州市********/
{ "id": "331002", "value": "椒江区", "parentId": "331000" }, { "id": "331003", "value": "黄岩区", "parentId": "331000" }, { "id": "331004", "value": "路桥区", "parentId": "331000" }, { "id": "331021", "value": "玉环县", "parentId": "331000" }, { "id": "331022", "value": "三门县", "parentId": "331000" }, { "id": "331023", "value": "天台县", "parentId": "331000" }, { "id": "331024", "value": "仙居县", "parentId": "331000" }, { "id": "331081", "value": "温岭市", "parentId": "331000" }, { "id": "331082", "value": "临海市", "parentId": "331000" },
/**********丽水市********/
{ "id": "331102", "value": "莲都区", "parentId": "331100" }, { "id": "331121", "value": "青田县", "parentId": "331100" }, { "id": "331122", "value": "缙云县", "parentId": "331100" }, { "id": "331123", "value": "遂昌县", "parentId": "331100" }, { "id": "331124", "value": "松阳县", "parentId": "331100" }, { "id": "331125", "value": "云和县", "parentId": "331100" }, { "id": "331126", "value": "庆元县", "parentId": "331100" }, { "id": "331127", "value": "景宁畲族自治县", "parentId": "331100" }, { "id": "331181", "value": "龙泉市", "parentId": "331100" },
/**********合肥市********/
{ "id": "340102", "value": "瑶海区", "parentId": "340100" }, { "id": "340103", "value": "庐阳区", "parentId": "340100" }, { "id": "340104", "value": "蜀山区", "parentId": "340100" }, { "id": "340111", "value": "包河区", "parentId": "340100" }, { "id": "340121", "value": "长丰县", "parentId": "340100" }, { "id": "340122", "value": "肥东县", "parentId": "340100" }, { "id": "340123", "value": "肥西县", "parentId": "340100" }, { "id": "340124", "value": "庐江县", "parentId": "340100" }, { "id": "340181", "value": "巢湖市", "parentId": "340100" },
/**********芜湖市********/
{ "id": "340202", "value": "镜湖区", "parentId": "340200" }, { "id": "340203", "value": "弋江区", "parentId": "340200" }, { "id": "340207", "value": "鸠江区", "parentId": "340200" }, { "id": "340208", "value": "三山区", "parentId": "340200" }, { "id": "340221", "value": "芜湖县", "parentId": "340200" }, { "id": "340222", "value": "繁昌县", "parentId": "340200" }, { "id": "340223", "value": "南陵县", "parentId": "340200" }, { "id": "340225", "value": "无为县", "parentId": "340200" },
/**********蚌埠市********/
{ "id": "340302", "value": "龙子湖区", "parentId": "340300" }, { "id": "340303", "value": "蚌山区", "parentId": "340300" }, { "id": "340304", "value": "禹会区", "parentId": "340300" }, { "id": "340311", "value": "淮上区", "parentId": "340300" }, { "id": "340321", "value": "怀远县", "parentId": "340300" }, { "id": "340322", "value": "五河县", "parentId": "340300" }, { "id": "340323", "value": "固镇县", "parentId": "340300" },
/**********淮南市********/
{ "id": "340402", "value": "大通区", "parentId": "340400" }, { "id": "340403", "value": "田家庵区", "parentId": "340400" }, { "id": "340404", "value": "谢家集区", "parentId": "340400" }, { "id": "340405", "value": "八公山区", "parentId": "340400" }, { "id": "340406", "value": "潘集区", "parentId": "340400" }, { "id": "340421", "value": "凤台县", "parentId": "340400" },
/**********马鞍山市********/
{ "id": "340503", "value": "花山区", "parentId": "340500" }, { "id": "340504", "value": "雨山区", "parentId": "340500" }, { "id": "340521", "value": "当涂县", "parentId": "340500" }, { "id": "340522", "value": "含山县", "parentId": "340500" }, { "id": "340523", "value": "和县", "parentId": "340500" }, { "id": "340596", "value": "博望区", "parentId": "340500" },
/**********淮北市********/
{ "id": "340602", "value": "杜集区", "parentId": "340600" }, { "id": "340603", "value": "相山区", "parentId": "340600" }, { "id": "340604", "value": "烈山区", "parentId": "340600" }, { "id": "340621", "value": "濉溪县", "parentId": "340600" },
/**********铜陵市********/
{ "id": "340702", "value": "铜官山区", "parentId": "340700" }, { "id": "340703", "value": "狮子山区", "parentId": "340700" }, { "id": "340711", "value": "郊区", "parentId": "340700" }, { "id": "340721", "value": "铜陵县", "parentId": "340700" },
/**********安庆市********/
{ "id": "340802", "value": "迎江区", "parentId": "340800" }, { "id": "340803", "value": "大观区", "parentId": "340800" }, { "id": "340811", "value": "宜秀区", "parentId": "340800" }, { "id": "340822", "value": "怀宁县", "parentId": "340800" }, { "id": "340823", "value": "枞阳县", "parentId": "340800" }, { "id": "340824", "value": "潜山县", "parentId": "340800" }, { "id": "340825", "value": "太湖县", "parentId": "340800" }, { "id": "340826", "value": "宿松县", "parentId": "340800" }, { "id": "340827", "value": "望江县", "parentId": "340800" }, { "id": "340828", "value": "岳西县", "parentId": "340800" }, { "id": "340881", "value": "桐城市", "parentId": "340800" },
/**********黄山市********/
{ "id": "341002", "value": "屯溪区", "parentId": "341000" }, { "id": "341003", "value": "黄山区", "parentId": "341000" }, { "id": "341004", "value": "徽州区", "parentId": "341000" }, { "id": "341021", "value": "歙县", "parentId": "341000" }, { "id": "341022", "value": "休宁县", "parentId": "341000" }, { "id": "341023", "value": "黟县", "parentId": "341000" }, { "id": "341024", "value": "祁门县", "parentId": "341000" },
/**********滁州市********/
{ "id": "341102", "value": "琅琊区", "parentId": "341100" }, { "id": "341103", "value": "南谯区", "parentId": "341100" }, { "id": "341122", "value": "来安县", "parentId": "341100" }, { "id": "341124", "value": "全椒县", "parentId": "341100" }, { "id": "341125", "value": "定远县", "parentId": "341100" }, { "id": "341126", "value": "凤阳县", "parentId": "341100" }, { "id": "341181", "value": "天长市", "parentId": "341100" }, { "id": "341182", "value": "明光市", "parentId": "341100" },
/**********阜阳市********/
{ "id": "341202", "value": "颍州区", "parentId": "341200" }, { "id": "341203", "value": "颍东区", "parentId": "341200" }, { "id": "341204", "value": "颍泉区", "parentId": "341200" }, { "id": "341221", "value": "临泉县", "parentId": "341200" }, { "id": "341222", "value": "太和县", "parentId": "341200" }, { "id": "341225", "value": "阜南县", "parentId": "341200" }, { "id": "341226", "value": "颍上县", "parentId": "341200" }, { "id": "341282", "value": "界首市", "parentId": "341200" },
/**********宿州市********/
{ "id": "341302", "value": "埇桥区", "parentId": "341300" }, { "id": "341321", "value": "砀山县", "parentId": "341300" }, { "id": "341322", "value": "萧县", "parentId": "341300" }, { "id": "341323", "value": "灵璧县", "parentId": "341300" }, { "id": "341324", "value": "泗县", "parentId": "341300" },
/**********六安市********/
{ "id": "341502", "value": "金安区", "parentId": "341500" }, { "id": "341503", "value": "裕安区", "parentId": "341500" }, { "id": "341521", "value": "寿县", "parentId": "341500" }, { "id": "341522", "value": "霍邱县", "parentId": "341500" }, { "id": "341523", "value": "舒城县", "parentId": "341500" }, { "id": "341524", "value": "金寨县", "parentId": "341500" }, { "id": "341525", "value": "霍山县", "parentId": "341500" },
/**********亳州市********/
{ "id": "341602", "value": "谯城区", "parentId": "341600" }, { "id": "341621", "value": "涡阳县", "parentId": "341600" }, { "id": "341622", "value": "蒙城县", "parentId": "341600" }, { "id": "341623", "value": "利辛县", "parentId": "341600" },
/**********池州市********/
{ "id": "341702", "value": "贵池区", "parentId": "341700" }, { "id": "341721", "value": "东至县", "parentId": "341700" }, { "id": "341722", "value": "石台县", "parentId": "341700" }, { "id": "341723", "value": "青阳县", "parentId": "341700" },
/**********宣城市********/
{ "id": "341802", "value": "宣州区", "parentId": "341800" }, { "id": "341821", "value": "郎溪县", "parentId": "341800" }, { "id": "341822", "value": "广德县", "parentId": "341800" }, { "id": "341823", "value": "泾县", "parentId": "341800" }, { "id": "341824", "value": "绩溪县", "parentId": "341800" }, { "id": "341825", "value": "旌德县", "parentId": "341800" }, { "id": "341881", "value": "宁国市", "parentId": "341800" },
/**********福州市********/
{ "id": "350102", "value": "鼓楼区", "parentId": "350100" }, { "id": "350103", "value": "台江区", "parentId": "350100" }, { "id": "350104", "value": "仓山区", "parentId": "350100" }, { "id": "350105", "value": "马尾区", "parentId": "350100" }, { "id": "350111", "value": "晋安区", "parentId": "350100" }, { "id": "350121", "value": "闽侯县", "parentId": "350100" }, { "id": "350122", "value": "连江县", "parentId": "350100" }, { "id": "350123", "value": "罗源县", "parentId": "350100" }, { "id": "350124", "value": "闽清县", "parentId": "350100" }, { "id": "350125", "value": "永泰县", "parentId": "350100" }, { "id": "350128", "value": "平潭县", "parentId": "350100" }, { "id": "350181", "value": "福清市", "parentId": "350100" }, { "id": "350182", "value": "长乐市", "parentId": "350100" },
/**********厦门市********/
{ "id": "350203", "value": "思明区", "parentId": "350200" }, { "id": "350205", "value": "海沧区", "parentId": "350200" }, { "id": "350206", "value": "湖里区", "parentId": "350200" }, { "id": "350211", "value": "集美区", "parentId": "350200" }, { "id": "350212", "value": "同安区", "parentId": "350200" }, { "id": "350213", "value": "翔安区", "parentId": "350200" },
/**********莆田市********/
{ "id": "350302", "value": "城厢区", "parentId": "350300" }, { "id": "350303", "value": "涵江区", "parentId": "350300" }, { "id": "350304", "value": "荔城区", "parentId": "350300" }, { "id": "350305", "value": "秀屿区", "parentId": "350300" }, { "id": "350322", "value": "仙游县", "parentId": "350300" },
/**********三明市********/
{ "id": "350402", "value": "梅列区", "parentId": "350400" }, { "id": "350403", "value": "三元区", "parentId": "350400" }, { "id": "350421", "value": "明溪县", "parentId": "350400" }, { "id": "350423", "value": "清流县", "parentId": "350400" }, { "id": "350424", "value": "宁化县", "parentId": "350400" }, { "id": "350425", "value": "大田县", "parentId": "350400" }, { "id": "350426", "value": "尤溪县", "parentId": "350400" }, { "id": "350427", "value": "沙县", "parentId": "350400" }, { "id": "350428", "value": "将乐县", "parentId": "350400" }, { "id": "350429", "value": "泰宁县", "parentId": "350400" }, { "id": "350430", "value": "建宁县", "parentId": "350400" }, { "id": "350481", "value": "永安市", "parentId": "350400" },
/**********泉州市********/
{ "id": "350502", "value": "鲤城区", "parentId": "350500" }, { "id": "350503", "value": "丰泽区", "parentId": "350500" }, { "id": "350504", "value": "洛江区", "parentId": "350500" }, { "id": "350505", "value": "泉港区", "parentId": "350500" }, { "id": "350521", "value": "惠安县", "parentId": "350500" }, { "id": "350524", "value": "安溪县", "parentId": "350500" }, { "id": "350525", "value": "永春县", "parentId": "350500" }, { "id": "350526", "value": "德化县", "parentId": "350500" }, { "id": "350527", "value": "金门县", "parentId": "350500" }, { "id": "350581", "value": "石狮市", "parentId": "350500" }, { "id": "350582", "value": "晋江市", "parentId": "350500" }, { "id": "350583", "value": "南安市", "parentId": "350500" },
/**********漳州市********/
{ "id": "350602", "value": "芗城区", "parentId": "350600" }, { "id": "350603", "value": "龙文区", "parentId": "350600" }, { "id": "350622", "value": "云霄县", "parentId": "350600" }, { "id": "350623", "value": "漳浦县", "parentId": "350600" }, { "id": "350624", "value": "诏安县", "parentId": "350600" }, { "id": "350625", "value": "长泰县", "parentId": "350600" }, { "id": "350626", "value": "东山县", "parentId": "350600" }, { "id": "350627", "value": "南靖县", "parentId": "350600" }, { "id": "350628", "value": "平和县", "parentId": "350600" }, { "id": "350629", "value": "华安县", "parentId": "350600" }, { "id": "350681", "value": "龙海市", "parentId": "350600" },
/**********南平市********/
{ "id": "350702", "value": "延平区", "parentId": "350700" }, { "id": "350721", "value": "顺昌县", "parentId": "350700" }, { "id": "350722", "value": "浦城县", "parentId": "350700" }, { "id": "350723", "value": "光泽县", "parentId": "350700" }, { "id": "350724", "value": "松溪县", "parentId": "350700" }, { "id": "350725", "value": "政和县", "parentId": "350700" }, { "id": "350781", "value": "邵武市", "parentId": "350700" }, { "id": "350782", "value": "武夷山市", "parentId": "350700" }, { "id": "350783", "value": "建瓯市", "parentId": "350700" }, { "id": "350784", "value": "建阳市", "parentId": "350700" },
/**********龙岩市********/
{ "id": "350802", "value": "新罗区", "parentId": "350800" }, { "id": "350821", "value": "长汀县", "parentId": "350800" }, { "id": "350822", "value": "永定县", "parentId": "350800" }, { "id": "350823", "value": "上杭县", "parentId": "350800" }, { "id": "350824", "value": "武平县", "parentId": "350800" }, { "id": "350825", "value": "连城县", "parentId": "350800" }, { "id": "350881", "value": "漳平市", "parentId": "350800" },
/**********宁德市********/
{ "id": "350902", "value": "蕉城区", "parentId": "350900" }, { "id": "350921", "value": "霞浦县", "parentId": "350900" }, { "id": "350922", "value": "古田县", "parentId": "350900" }, { "id": "350923", "value": "屏南县", "parentId": "350900" }, { "id": "350924", "value": "寿宁县", "parentId": "350900" }, { "id": "350925", "value": "周宁县", "parentId": "350900" }, { "id": "350926", "value": "柘荣县", "parentId": "350900" }, { "id": "350981", "value": "福安市", "parentId": "350900" }, { "id": "350982", "value": "福鼎市", "parentId": "350900" },
/**********南昌市********/
{ "id": "360102", "value": "东湖区", "parentId": "360100" }, { "id": "360103", "value": "西湖区", "parentId": "360100" }, { "id": "360104", "value": "青云谱区", "parentId": "360100" }, { "id": "360105", "value": "湾里区", "parentId": "360100" }, { "id": "360111", "value": "青山湖区", "parentId": "360100" }, { "id": "360121", "value": "南昌县", "parentId": "360100" }, { "id": "360122", "value": "新建县", "parentId": "360100" }, { "id": "360123", "value": "安义县", "parentId": "360100" }, { "id": "360124", "value": "进贤县", "parentId": "360100" },
/**********景德镇市********/
{ "id": "360202", "value": "昌江区", "parentId": "360200" }, { "id": "360203", "value": "珠山区", "parentId": "360200" }, { "id": "360222", "value": "浮梁县", "parentId": "360200" }, { "id": "360281", "value": "乐平市", "parentId": "360200" },
/**********萍乡市********/
{ "id": "360302", "value": "安源区", "parentId": "360300" }, { "id": "360313", "value": "湘东区", "parentId": "360300" }, { "id": "360321", "value": "莲花县", "parentId": "360300" }, { "id": "360322", "value": "上栗县", "parentId": "360300" }, { "id": "360323", "value": "芦溪县", "parentId": "360300" },
/**********九江市********/
{ "id": "360402", "value": "庐山区", "parentId": "360400" }, { "id": "360403", "value": "浔阳区", "parentId": "360400" }, { "id": "360421", "value": "九江县", "parentId": "360400" }, { "id": "360423", "value": "武宁县", "parentId": "360400" }, { "id": "360424", "value": "修水县", "parentId": "360400" }, { "id": "360425", "value": "永修县", "parentId": "360400" }, { "id": "360426", "value": "德安县", "parentId": "360400" }, { "id": "360427", "value": "星子县", "parentId": "360400" }, { "id": "360428", "value": "都昌县", "parentId": "360400" }, { "id": "360429", "value": "湖口县", "parentId": "360400" }, { "id": "360430", "value": "彭泽县", "parentId": "360400" }, { "id": "360481", "value": "瑞昌市", "parentId": "360400" }, { "id": "360482", "value": "共青城市", "parentId": "360400" },
/**********新余市********/
{ "id": "360502", "value": "渝水区", "parentId": "360500" }, { "id": "360521", "value": "分宜县", "parentId": "360500" },
/**********鹰潭市********/
{ "id": "360602", "value": "月湖区", "parentId": "360600" }, { "id": "360622", "value": "余江县", "parentId": "360600" }, { "id": "360681", "value": "贵溪市", "parentId": "360600" },
/**********赣州市********/
{ "id": "360702", "value": "章贡区", "parentId": "360700" }, { "id": "360721", "value": "赣县", "parentId": "360700" }, { "id": "360722", "value": "信丰县", "parentId": "360700" }, { "id": "360723", "value": "大余县", "parentId": "360700" }, { "id": "360724", "value": "上犹县", "parentId": "360700" }, { "id": "360725", "value": "崇义县", "parentId": "360700" }, { "id": "360726", "value": "安远县", "parentId": "360700" }, { "id": "360727", "value": "龙南县", "parentId": "360700" }, { "id": "360728", "value": "定南县", "parentId": "360700" }, { "id": "360729", "value": "全南县", "parentId": "360700" }, { "id": "360730", "value": "宁都县", "parentId": "360700" }, { "id": "360731", "value": "于都县", "parentId": "360700" }, { "id": "360732", "value": "兴国县", "parentId": "360700" }, { "id": "360733", "value": "会昌县", "parentId": "360700" }, { "id": "360734", "value": "寻乌县", "parentId": "360700" }, { "id": "360735", "value": "石城县", "parentId": "360700" }, { "id": "360781", "value": "瑞金市", "parentId": "360700" }, { "id": "360782", "value": "南康市", "parentId": "360700" },
/**********吉安市********/
{ "id": "360802", "value": "吉州区", "parentId": "360800" }, { "id": "360803", "value": "青原区", "parentId": "360800" }, { "id": "360821", "value": "吉安县", "parentId": "360800" }, { "id": "360822", "value": "吉水县", "parentId": "360800" }, { "id": "360823", "value": "峡江县", "parentId": "360800" }, { "id": "360824", "value": "新干县", "parentId": "360800" }, { "id": "360825", "value": "永丰县", "parentId": "360800" }, { "id": "360826", "value": "泰和县", "parentId": "360800" }, { "id": "360827", "value": "遂川县", "parentId": "360800" }, { "id": "360828", "value": "万安县", "parentId": "360800" }, { "id": "360829", "value": "安福县", "parentId": "360800" }, { "id": "360830", "value": "永新县", "parentId": "360800" }, { "id": "360881", "value": "井冈山市", "parentId": "360800" },
/**********宜春市********/
{ "id": "360902", "value": "袁州区", "parentId": "360900" }, { "id": "360921", "value": "奉新县", "parentId": "360900" }, { "id": "360922", "value": "万载县", "parentId": "360900" }, { "id": "360923", "value": "上高县", "parentId": "360900" }, { "id": "360924", "value": "宜丰县", "parentId": "360900" }, { "id": "360925", "value": "靖安县", "parentId": "360900" }, { "id": "360926", "value": "铜鼓县", "parentId": "360900" }, { "id": "360981", "value": "丰城市", "parentId": "360900" }, { "id": "360982", "value": "樟树市", "parentId": "360900" }, { "id": "360983", "value": "高安市", "parentId": "360900" },
/**********抚州市********/
{ "id": "361002", "value": "临川区", "parentId": "361000" }, { "id": "361021", "value": "南城县", "parentId": "361000" }, { "id": "361022", "value": "黎川县", "parentId": "361000" }, { "id": "361023", "value": "南丰县", "parentId": "361000" }, { "id": "361024", "value": "崇仁县", "parentId": "361000" }, { "id": "361025", "value": "乐安县", "parentId": "361000" }, { "id": "361026", "value": "宜黄县", "parentId": "361000" }, { "id": "361027", "value": "金溪县", "parentId": "361000" }, { "id": "361028", "value": "资溪县", "parentId": "361000" }, { "id": "361029", "value": "东乡县", "parentId": "361000" }, { "id": "361030", "value": "广昌县", "parentId": "361000" },
/**********上饶市********/
{ "id": "361102", "value": "信州区", "parentId": "361100" }, { "id": "361121", "value": "上饶县", "parentId": "361100" }, { "id": "361122", "value": "广丰县", "parentId": "361100" }, { "id": "361123", "value": "玉山县", "parentId": "361100" }, { "id": "361124", "value": "铅山县", "parentId": "361100" }, { "id": "361125", "value": "横峰县", "parentId": "361100" }, { "id": "361126", "value": "弋阳县", "parentId": "361100" }, { "id": "361127", "value": "余干县", "parentId": "361100" }, { "id": "361128", "value": "鄱阳县", "parentId": "361100" }, { "id": "361129", "value": "万年县", "parentId": "361100" }, { "id": "361130", "value": "婺源县", "parentId": "361100" }, { "id": "361181", "value": "德兴市", "parentId": "361100" },
/**********济南市********/
{ "id": "370102", "value": "历下区", "parentId": "370100" }, { "id": "370103", "value": "市中区", "parentId": "370100" }, { "id": "370104", "value": "槐荫区", "parentId": "370100" }, { "id": "370105", "value": "天桥区", "parentId": "370100" }, { "id": "370112", "value": "历城区", "parentId": "370100" }, { "id": "370113", "value": "长清区", "parentId": "370100" }, { "id": "370124", "value": "平阴县", "parentId": "370100" }, { "id": "370125", "value": "济阳县", "parentId": "370100" }, { "id": "370126", "value": "商河县", "parentId": "370100" }, { "id": "370181", "value": "章丘市", "parentId": "370100" },
/**********青岛市********/
{ "id": "370202", "value": "市南区", "parentId": "370200" }, { "id": "370203", "value": "市北区", "parentId": "370200" }, { "id": "370205", "value": "四方区", "parentId": "370200" }, { "id": "370211", "value": "黄岛区", "parentId": "370200" }, { "id": "370212", "value": "崂山区", "parentId": "370200" }, { "id": "370213", "value": "李沧区", "parentId": "370200" }, { "id": "370214", "value": "城阳区", "parentId": "370200" }, { "id": "370281", "value": "胶州市", "parentId": "370200" }, { "id": "370282", "value": "即墨市", "parentId": "370200" }, { "id": "370283", "value": "平度市", "parentId": "370200" }, { "id": "370284", "value": "胶南市", "parentId": "370200" }, { "id": "370285", "value": "莱西市", "parentId": "370200" },
/**********淄博市********/
{ "id": "370302", "value": "淄川区", "parentId": "370300" }, { "id": "370303", "value": "张店区", "parentId": "370300" }, { "id": "370304", "value": "博山区", "parentId": "370300" }, { "id": "370305", "value": "临淄区", "parentId": "370300" }, { "id": "370306", "value": "周村区", "parentId": "370300" }, { "id": "370321", "value": "桓台县", "parentId": "370300" }, { "id": "370322", "value": "高青县", "parentId": "370300" }, { "id": "370323", "value": "沂源县", "parentId": "370300" },
/**********枣庄市********/
{ "id": "370402", "value": "市中区", "parentId": "370400" }, { "id": "370403", "value": "薛城区", "parentId": "370400" }, { "id": "370404", "value": "峄城区", "parentId": "370400" }, { "id": "370405", "value": "台儿庄区", "parentId": "370400" }, { "id": "370406", "value": "山亭区", "parentId": "370400" }, { "id": "370481", "value": "滕州市", "parentId": "370400" },
/**********东营市********/
{ "id": "370502", "value": "东营区", "parentId": "370500" }, { "id": "370503", "value": "河口区", "parentId": "370500" }, { "id": "370521", "value": "垦利县", "parentId": "370500" }, { "id": "370522", "value": "利津县", "parentId": "370500" }, { "id": "370523", "value": "广饶县", "parentId": "370500" },
/**********烟台市********/
{ "id": "370602", "value": "芝罘区", "parentId": "370600" }, { "id": "370611", "value": "福山区", "parentId": "370600" }, { "id": "370612", "value": "牟平区", "parentId": "370600" }, { "id": "370613", "value": "莱山区", "parentId": "370600" }, { "id": "370634", "value": "长岛县", "parentId": "370600" }, { "id": "370681", "value": "龙口市", "parentId": "370600" }, { "id": "370682", "value": "莱阳市", "parentId": "370600" }, { "id": "370683", "value": "莱州市", "parentId": "370600" }, { "id": "370684", "value": "蓬莱市", "parentId": "370600" }, { "id": "370685", "value": "招远市", "parentId": "370600" }, { "id": "370686", "value": "栖霞市", "parentId": "370600" }, { "id": "370687", "value": "海阳市", "parentId": "370600" },
/**********潍坊市********/
{ "id": "370702", "value": "潍城区", "parentId": "370700" }, { "id": "370703", "value": "寒亭区", "parentId": "370700" }, { "id": "370704", "value": "坊子区", "parentId": "370700" }, { "id": "370705", "value": "奎文区", "parentId": "370700" }, { "id": "370724", "value": "临朐县", "parentId": "370700" }, { "id": "370725", "value": "昌乐县", "parentId": "370700" }, { "id": "370781", "value": "青州市", "parentId": "370700" }, { "id": "370782", "value": "诸城市", "parentId": "370700" }, { "id": "370783", "value": "寿光市", "parentId": "370700" }, { "id": "370784", "value": "安丘市", "parentId": "370700" }, { "id": "370785", "value": "高密市", "parentId": "370700" }, { "id": "370786", "value": "昌邑市", "parentId": "370700" },
/**********济宁市********/
{ "id": "370802", "value": "市中区", "parentId": "370800" }, { "id": "370811", "value": "任城区", "parentId": "370800" }, { "id": "370826", "value": "微山县", "parentId": "370800" }, { "id": "370827", "value": "鱼台县", "parentId": "370800" }, { "id": "370828", "value": "金乡县", "parentId": "370800" }, { "id": "370829", "value": "嘉祥县", "parentId": "370800" }, { "id": "370830", "value": "汶上县", "parentId": "370800" }, { "id": "370831", "value": "泗水县", "parentId": "370800" }, { "id": "370832", "value": "梁山县", "parentId": "370800" }, { "id": "370881", "value": "曲阜市", "parentId": "370800" }, { "id": "370882", "value": "兖州市", "parentId": "370800" }, { "id": "370883", "value": "邹城市", "parentId": "370800" },
/**********泰安市********/
{ "id": "370902", "value": "泰山区", "parentId": "370900" }, { "id": "370911", "value": "岱岳区", "parentId": "370900" }, { "id": "370921", "value": "宁阳县", "parentId": "370900" }, { "id": "370923", "value": "东平县", "parentId": "370900" }, { "id": "370982", "value": "新泰市", "parentId": "370900" }, { "id": "370983", "value": "肥城市", "parentId": "370900" },
/**********威海市********/
{ "id": "371002", "value": "环翠区", "parentId": "371000" }, { "id": "371081", "value": "文登市", "parentId": "371000" }, { "id": "371082", "value": "荣成市", "parentId": "371000" }, { "id": "371083", "value": "乳山市", "parentId": "371000" },
/**********日照市********/
{ "id": "371102", "value": "东港区", "parentId": "371100" }, { "id": "371103", "value": "岚山区", "parentId": "371100" }, { "id": "371121", "value": "五莲县", "parentId": "371100" }, { "id": "371122", "value": "莒县", "parentId": "371100" },
/**********莱芜市********/
{ "id": "371202", "value": "莱城区", "parentId": "371200" }, { "id": "371203", "value": "钢城区", "parentId": "371200" },
/**********临沂市********/
{ "id": "371302", "value": "兰山区", "parentId": "371300" }, { "id": "371311", "value": "罗庄区", "parentId": "371300" }, { "id": "371312", "value": "河东区", "parentId": "371300" }, { "id": "371321", "value": "沂南县", "parentId": "371300" }, { "id": "371322", "value": "郯城县", "parentId": "371300" }, { "id": "371323", "value": "沂水县", "parentId": "371300" }, { "id": "371324", "value": "苍山县", "parentId": "371300" }, { "id": "371325", "value": "费县", "parentId": "371300" }, { "id": "371326", "value": "平邑县", "parentId": "371300" }, { "id": "371327", "value": "莒南县", "parentId": "371300" }, { "id": "371328", "value": "蒙阴县", "parentId": "371300" }, { "id": "371329", "value": "临沭县", "parentId": "371300" },
/**********德州市********/
{ "id": "371402", "value": "德城区", "parentId": "371400" }, { "id": "371421", "value": "陵县", "parentId": "371400" }, { "id": "371422", "value": "宁津县", "parentId": "371400" }, { "id": "371423", "value": "庆云县", "parentId": "371400" }, { "id": "371424", "value": "临邑县", "parentId": "371400" }, { "id": "371425", "value": "齐河县", "parentId": "371400" }, { "id": "371426", "value": "平原县", "parentId": "371400" }, { "id": "371427", "value": "夏津县", "parentId": "371400" }, { "id": "371428", "value": "武城县", "parentId": "371400" }, { "id": "371481", "value": "乐陵市", "parentId": "371400" }, { "id": "371482", "value": "禹城市", "parentId": "371400" },
/**********聊城市********/
{ "id": "371502", "value": "东昌府区", "parentId": "371500" }, { "id": "371521", "value": "阳谷县", "parentId": "371500" }, { "id": "371522", "value": "莘县", "parentId": "371500" }, { "id": "371523", "value": "茌平县", "parentId": "371500" }, { "id": "371524", "value": "东阿县", "parentId": "371500" }, { "id": "371525", "value": "冠县", "parentId": "371500" }, { "id": "371526", "value": "高唐县", "parentId": "371500" }, { "id": "371581", "value": "临清市", "parentId": "371500" },
/**********滨州市********/
{ "id": "371602", "value": "滨城区", "parentId": "371600" }, { "id": "371621", "value": "惠民县", "parentId": "371600" }, { "id": "371622", "value": "阳信县", "parentId": "371600" }, { "id": "371623", "value": "无棣县", "parentId": "371600" }, { "id": "371624", "value": "沾化县", "parentId": "371600" }, { "id": "371625", "value": "博兴县", "parentId": "371600" }, { "id": "371626", "value": "邹平县", "parentId": "371600" },
/**********菏泽市********/
{ "id": "371702", "value": "牡丹区", "parentId": "371700" }, { "id": "371721", "value": "曹县", "parentId": "371700" }, { "id": "371722", "value": "单县", "parentId": "371700" }, { "id": "371723", "value": "成武县", "parentId": "371700" }, { "id": "371724", "value": "巨野县", "parentId": "371700" }, { "id": "371725", "value": "郓城县", "parentId": "371700" }, { "id": "371726", "value": "鄄城县", "parentId": "371700" }, { "id": "371727", "value": "定陶县", "parentId": "371700" }, { "id": "371728", "value": "东明县", "parentId": "371700" },
/**********郑州市********/
{ "id": "410102", "value": "中原区", "parentId": "410100" }, { "id": "410103", "value": "二七区", "parentId": "410100" }, { "id": "410104", "value": "管城回族区", "parentId": "410100" }, { "id": "410105", "value": "金水区", "parentId": "410100" }, { "id": "410106", "value": "上街区", "parentId": "410100" }, { "id": "410108", "value": "惠济区", "parentId": "410100" }, { "id": "410122", "value": "中牟县", "parentId": "410100" }, { "id": "410181", "value": "巩义市", "parentId": "410100" }, { "id": "410182", "value": "荥阳市", "parentId": "410100" }, { "id": "410183", "value": "新密市", "parentId": "410100" }, { "id": "410184", "value": "新郑市", "parentId": "410100" }, { "id": "410185", "value": "登封市", "parentId": "410100" },
/**********开封市********/
{ "id": "410202", "value": "龙亭区", "parentId": "410200" }, { "id": "410203", "value": "顺河回族区", "parentId": "410200" }, { "id": "410204", "value": "鼓楼区", "parentId": "410200" }, { "id": "410205", "value": "禹王台区", "parentId": "410200" }, { "id": "410211", "value": "金明区", "parentId": "410200" }, { "id": "410221", "value": "杞县", "parentId": "410200" }, { "id": "410222", "value": "通许县", "parentId": "410200" }, { "id": "410223", "value": "尉氏县", "parentId": "410200" }, { "id": "410224", "value": "开封县", "parentId": "410200" }, { "id": "410225", "value": "兰考县", "parentId": "410200" },
/**********洛阳市********/
{ "id": "410302", "value": "老城区", "parentId": "410300" }, { "id": "410303", "value": "西工区", "parentId": "410300" }, { "id": "410304", "value": "瀍河回族区", "parentId": "410300" }, { "id": "410305", "value": "涧西区", "parentId": "410300" }, { "id": "410306", "value": "吉利区", "parentId": "410300" }, { "id": "410311", "value": "洛龙区", "parentId": "410300" }, { "id": "410322", "value": "孟津县", "parentId": "410300" }, { "id": "410323", "value": "新安县", "parentId": "410300" }, { "id": "410324", "value": "栾川县", "parentId": "410300" }, { "id": "410325", "value": "嵩县", "parentId": "410300" }, { "id": "410326", "value": "汝阳县", "parentId": "410300" }, { "id": "410327", "value": "宜阳县", "parentId": "410300" }, { "id": "410328", "value": "洛宁县", "parentId": "410300" }, { "id": "410329", "value": "伊川县", "parentId": "410300" }, { "id": "410381", "value": "偃师市", "parentId": "410300" },
/**********平顶山市********/
{ "id": "410402", "value": "新华区", "parentId": "410400" }, { "id": "410403", "value": "卫东区", "parentId": "410400" }, { "id": "410404", "value": "石龙区", "parentId": "410400" }, { "id": "410411", "value": "湛河区", "parentId": "410400" }, { "id": "410421", "value": "宝丰县", "parentId": "410400" }, { "id": "410422", "value": "叶县", "parentId": "410400" }, { "id": "410423", "value": "鲁山县", "parentId": "410400" }, { "id": "410425", "value": "郏县", "parentId": "410400" }, { "id": "410481", "value": "舞钢市", "parentId": "410400" }, { "id": "410482", "value": "汝州市", "parentId": "410400" },
/**********安阳市********/
{ "id": "410502", "value": "文峰区", "parentId": "410500" }, { "id": "410503", "value": "北关区", "parentId": "410500" }, { "id": "410505", "value": "殷都区", "parentId": "410500" }, { "id": "410506", "value": "龙安区", "parentId": "410500" }, { "id": "410522", "value": "安阳县", "parentId": "410500" }, { "id": "410523", "value": "汤阴县", "parentId": "410500" }, { "id": "410526", "value": "滑县", "parentId": "410500" }, { "id": "410527", "value": "内黄县", "parentId": "410500" }, { "id": "410581", "value": "林州市", "parentId": "410500" },
/**********鹤壁市********/
{ "id": "410602", "value": "鹤山区", "parentId": "410600" }, { "id": "410603", "value": "山城区", "parentId": "410600" }, { "id": "410611", "value": "淇滨区", "parentId": "410600" }, { "id": "410621", "value": "浚县", "parentId": "410600" }, { "id": "410622", "value": "淇县", "parentId": "410600" },
/**********新乡市********/
{ "id": "410702", "value": "红旗区", "parentId": "410700" }, { "id": "410703", "value": "卫滨区", "parentId": "410700" }, { "id": "410704", "value": "凤泉区", "parentId": "410700" }, { "id": "410711", "value": "牧野区", "parentId": "410700" }, { "id": "410721", "value": "新乡县", "parentId": "410700" }, { "id": "410724", "value": "获嘉县", "parentId": "410700" }, { "id": "410725", "value": "原阳县", "parentId": "410700" }, { "id": "410726", "value": "延津县", "parentId": "410700" }, { "id": "410727", "value": "封丘县", "parentId": "410700" }, { "id": "410728", "value": "长垣县", "parentId": "410700" }, { "id": "410781", "value": "卫辉市", "parentId": "410700" }, { "id": "410782", "value": "辉县市", "parentId": "410700" },
/**********焦作市********/
{ "id": "410802", "value": "解放区", "parentId": "410800" }, { "id": "410803", "value": "中站区", "parentId": "410800" }, { "id": "410804", "value": "马村区", "parentId": "410800" }, { "id": "410811", "value": "山阳区", "parentId": "410800" }, { "id": "410821", "value": "修武县", "parentId": "410800" }, { "id": "410822", "value": "博爱县", "parentId": "410800" }, { "id": "410823", "value": "武陟县", "parentId": "410800" }, { "id": "410825", "value": "温县", "parentId": "410800" }, { "id": "410882", "value": "沁阳市", "parentId": "410800" }, { "id": "410883", "value": "孟州市", "parentId": "410800" },
/**********濮阳市********/
{ "id": "410902", "value": "华龙区", "parentId": "410900" }, { "id": "410922", "value": "清丰县", "parentId": "410900" }, { "id": "410923", "value": "南乐县", "parentId": "410900" }, { "id": "410926", "value": "范县", "parentId": "410900" }, { "id": "410927", "value": "台前县", "parentId": "410900" }, { "id": "410928", "value": "濮阳县", "parentId": "410900" },
/**********许昌市********/
{ "id": "411002", "value": "魏都区", "parentId": "411000" }, { "id": "411023", "value": "许昌县", "parentId": "411000" }, { "id": "411024", "value": "鄢陵县", "parentId": "411000" }, { "id": "411025", "value": "襄城县", "parentId": "411000" }, { "id": "411081", "value": "禹州市", "parentId": "411000" }, { "id": "411082", "value": "长葛市", "parentId": "411000" },
/**********漯河市********/
{ "id": "411102", "value": "源汇区", "parentId": "411100" }, { "id": "411103", "value": "郾城区", "parentId": "411100" }, { "id": "411104", "value": "召陵区", "parentId": "411100" }, { "id": "411121", "value": "舞阳县", "parentId": "411100" }, { "id": "411122", "value": "临颍县", "parentId": "411100" },
/**********三门峡市********/
{ "id": "411202", "value": "湖滨区", "parentId": "411200" }, { "id": "411221", "value": "渑池县", "parentId": "411200" }, { "id": "411222", "value": "陕县", "parentId": "411200" }, { "id": "411224", "value": "卢氏县", "parentId": "411200" }, { "id": "411281", "value": "义马市", "parentId": "411200" }, { "id": "411282", "value": "灵宝市", "parentId": "411200" },
/**********南阳市********/
{ "id": "411302", "value": "宛城区", "parentId": "411300" }, { "id": "411303", "value": "卧龙区", "parentId": "411300" }, { "id": "411321", "value": "南召县", "parentId": "411300" }, { "id": "411322", "value": "方城县", "parentId": "411300" }, { "id": "411323", "value": "西峡县", "parentId": "411300" }, { "id": "411324", "value": "镇平县", "parentId": "411300" }, { "id": "411325", "value": "内乡县", "parentId": "411300" }, { "id": "411326", "value": "淅川县", "parentId": "411300" }, { "id": "411327", "value": "社旗县", "parentId": "411300" }, { "id": "411328", "value": "唐河县", "parentId": "411300" }, { "id": "411329", "value": "新野县", "parentId": "411300" }, { "id": "411330", "value": "桐柏县", "parentId": "411300" }, { "id": "411381", "value": "邓州市", "parentId": "411300" },
/**********商丘市********/
{ "id": "411402", "value": "梁园区", "parentId": "411400" }, { "id": "411403", "value": "睢阳区", "parentId": "411400" }, { "id": "411421", "value": "民权县", "parentId": "411400" }, { "id": "411422", "value": "睢县", "parentId": "411400" }, { "id": "411423", "value": "宁陵县", "parentId": "411400" }, { "id": "411424", "value": "柘城县", "parentId": "411400" }, { "id": "411425", "value": "虞城县", "parentId": "411400" }, { "id": "411426", "value": "夏邑县", "parentId": "411400" }, { "id": "411481", "value": "永城市", "parentId": "411400" },
/**********信阳市********/
{ "id": "411502", "value": "浉河区", "parentId": "411500" }, { "id": "411503", "value": "平桥区", "parentId": "411500" }, { "id": "411521", "value": "罗山县", "parentId": "411500" }, { "id": "411522", "value": "光山县", "parentId": "411500" }, { "id": "411523", "value": "新县", "parentId": "411500" }, { "id": "411524", "value": "商城县", "parentId": "411500" }, { "id": "411525", "value": "固始县", "parentId": "411500" }, { "id": "411526", "value": "潢川县", "parentId": "411500" }, { "id": "411527", "value": "淮滨县", "parentId": "411500" }, { "id": "411528", "value": "息县", "parentId": "411500" },
/**********周口市********/
{ "id": "411602", "value": "川汇区", "parentId": "411600" }, { "id": "411621", "value": "扶沟县", "parentId": "411600" }, { "id": "411622", "value": "西华县", "parentId": "411600" }, { "id": "411623", "value": "商水县", "parentId": "411600" }, { "id": "411624", "value": "沈丘县", "parentId": "411600" }, { "id": "411625", "value": "郸城县", "parentId": "411600" }, { "id": "411626", "value": "淮阳县", "parentId": "411600" }, { "id": "411627", "value": "太康县", "parentId": "411600" }, { "id": "411628", "value": "鹿邑县", "parentId": "411600" }, { "id": "411681", "value": "项城市", "parentId": "411600" },
/**********驻马店市********/
{ "id": "411702", "value": "驿城区", "parentId": "411700" }, { "id": "411721", "value": "西平县", "parentId": "411700" }, { "id": "411722", "value": "上蔡县", "parentId": "411700" }, { "id": "411723", "value": "平舆县", "parentId": "411700" }, { "id": "411724", "value": "正阳县", "parentId": "411700" }, { "id": "411725", "value": "确山县", "parentId": "411700" }, { "id": "411726", "value": "泌阳县", "parentId": "411700" }, { "id": "411727", "value": "汝南县", "parentId": "411700" }, { "id": "411728", "value": "遂平县", "parentId": "411700" }, { "id": "411729", "value": "新蔡县", "parentId": "411700" },
/**********省直辖********/
{ "id": "419001", "value": "济源市", "parentId": "419001" },
/**********武汉市********/
{ "id": "420102", "value": "江岸区", "parentId": "420100" }, { "id": "420103", "value": "江汉区", "parentId": "420100" }, { "id": "420104", "value": "硚口区", "parentId": "420100" }, { "id": "420105", "value": "汉阳区", "parentId": "420100" }, { "id": "420106", "value": "武昌区", "parentId": "420100" }, { "id": "420107", "value": "青山区", "parentId": "420100" }, { "id": "420111", "value": "洪山区", "parentId": "420100" }, { "id": "420112", "value": "东西湖区", "parentId": "420100" }, { "id": "420113", "value": "汉南区", "parentId": "420100" }, { "id": "420114", "value": "蔡甸区", "parentId": "420100" }, { "id": "420115", "value": "江夏区", "parentId": "420100" }, { "id": "420116", "value": "黄陂区", "parentId": "420100" }, { "id": "420117", "value": "新洲区", "parentId": "420100" },
/**********黄石市********/
{ "id": "420202", "value": "黄石港区", "parentId": "420200" }, { "id": "420203", "value": "西塞山区", "parentId": "420200" }, { "id": "420204", "value": "下陆区", "parentId": "420200" }, { "id": "420205", "value": "铁山区", "parentId": "420200" }, { "id": "420222", "value": "阳新县", "parentId": "420200" }, { "id": "420281", "value": "大冶市", "parentId": "420200" },
/**********十堰市********/
{ "id": "420302", "value": "茅箭区", "parentId": "420300" }, { "id": "420303", "value": "张湾区", "parentId": "420300" }, { "id": "420321", "value": "郧县", "parentId": "420300" }, { "id": "420322", "value": "郧西县", "parentId": "420300" }, { "id": "420323", "value": "竹山县", "parentId": "420300" }, { "id": "420324", "value": "竹溪县", "parentId": "420300" }, { "id": "420325", "value": "房县", "parentId": "420300" }, { "id": "420381", "value": "丹江口市", "parentId": "420300" },
/**********宜昌市********/
{ "id": "420502", "value": "西陵区", "parentId": "420500" }, { "id": "420503", "value": "伍家岗区", "parentId": "420500" }, { "id": "420504", "value": "点军区", "parentId": "420500" }, { "id": "420505", "value": "猇亭区", "parentId": "420500" }, { "id": "420506", "value": "夷陵区", "parentId": "420500" }, { "id": "420525", "value": "远安县", "parentId": "420500" }, { "id": "420526", "value": "兴山县", "parentId": "420500" }, { "id": "420527", "value": "秭归县", "parentId": "420500" }, { "id": "420528", "value": "长阳土家族自治县", "parentId": "420500" }, { "id": "420529", "value": "五峰土家族自治县", "parentId": "420500" }, { "id": "420581", "value": "宜都市", "parentId": "420500" }, { "id": "420582", "value": "当阳市", "parentId": "420500" }, { "id": "420583", "value": "枝江市", "parentId": "420500" },
/**********襄阳市********/
{ "id": "420602", "value": "襄城区", "parentId": "420600" }, { "id": "420606", "value": "樊城区", "parentId": "420600" }, { "id": "420607", "value": "襄州区", "parentId": "420600" }, { "id": "420624", "value": "南漳县", "parentId": "420600" }, { "id": "420625", "value": "谷城县", "parentId": "420600" }, { "id": "420626", "value": "保康县", "parentId": "420600" }, { "id": "420682", "value": "老河口市", "parentId": "420600" }, { "id": "420683", "value": "枣阳市", "parentId": "420600" }, { "id": "420684", "value": "宜城市", "parentId": "420600" },
/**********鄂州市********/
{ "id": "420702", "value": "梁子湖区", "parentId": "420700" }, { "id": "420703", "value": "华容区", "parentId": "420700" }, { "id": "420704", "value": "鄂城区", "parentId": "420700" },
/**********荆门市********/
{ "id": "420802", "value": "东宝区", "parentId": "420800" }, { "id": "420804", "value": "掇刀区", "parentId": "420800" }, { "id": "420821", "value": "京山县", "parentId": "420800" }, { "id": "420822", "value": "沙洋县", "parentId": "420800" }, { "id": "420881", "value": "钟祥市", "parentId": "420800" },
/**********孝感市********/
{ "id": "420902", "value": "孝南区", "parentId": "420900" }, { "id": "420921", "value": "孝昌县", "parentId": "420900" }, { "id": "420922", "value": "大悟县", "parentId": "420900" }, { "id": "420923", "value": "云梦县", "parentId": "420900" }, { "id": "420981", "value": "应城市", "parentId": "420900" }, { "id": "420982", "value": "安陆市", "parentId": "420900" }, { "id": "420984", "value": "汉川市", "parentId": "420900" },
/**********荆州市********/
{ "id": "421002", "value": "沙市区", "parentId": "421000" }, { "id": "421003", "value": "荆州区", "parentId": "421000" }, { "id": "421022", "value": "公安县", "parentId": "421000" }, { "id": "421023", "value": "监利县", "parentId": "421000" }, { "id": "421024", "value": "江陵县", "parentId": "421000" }, { "id": "421081", "value": "石首市", "parentId": "421000" }, { "id": "421083", "value": "洪湖市", "parentId": "421000" }, { "id": "421087", "value": "松滋市", "parentId": "421000" },
/**********黄冈市********/
{ "id": "421102", "value": "黄州区", "parentId": "421100" }, { "id": "421121", "value": "团风县", "parentId": "421100" }, { "id": "421122", "value": "红安县", "parentId": "421100" }, { "id": "421123", "value": "罗田县", "parentId": "421100" }, { "id": "421124", "value": "英山县", "parentId": "421100" }, { "id": "421125", "value": "浠水县", "parentId": "421100" }, { "id": "421126", "value": "蕲春县", "parentId": "421100" }, { "id": "421127", "value": "黄梅县", "parentId": "421100" }, { "id": "421181", "value": "麻城市", "parentId": "421100" }, { "id": "421182", "value": "武穴市", "parentId": "421100" },
/**********咸宁市********/
{ "id": "421202", "value": "咸安区", "parentId": "421200" }, { "id": "421221", "value": "嘉鱼县", "parentId": "421200" }, { "id": "421222", "value": "通城县", "parentId": "421200" }, { "id": "421223", "value": "崇阳县", "parentId": "421200" }, { "id": "421224", "value": "通山县", "parentId": "421200" }, { "id": "421281", "value": "赤壁市", "parentId": "421200" },
/**********随州市********/
{ "id": "421303", "value": "曾都区", "parentId": "421300" }, { "id": "421321", "value": "随县", "parentId": "421300" }, { "id": "421381", "value": "广水市", "parentId": "421300" },
/**********恩施土家族苗族自治州********/
{ "id": "422801", "value": "恩施市", "parentId": "422800" }, { "id": "422802", "value": "利川市", "parentId": "422800" }, { "id": "422822", "value": "建始县", "parentId": "422800" }, { "id": "422823", "value": "巴东县", "parentId": "422800" }, { "id": "422825", "value": "宣恩县", "parentId": "422800" }, { "id": "422826", "value": "咸丰县", "parentId": "422800" }, { "id": "422827", "value": "来凤县", "parentId": "422800" }, { "id": "422828", "value": "鹤峰县", "parentId": "422800" },
/**********省直辖********/
{ "id": "429004", "value": "仙桃市", "parentId": "429004" }, { "id": "429005", "value": "潜江市", "parentId": "429005" }, { "id": "429006", "value": "天门市", "parentId": "429006" }, { "id": "429021", "value": "神农架林区", "parentId": "429021" },
/**********长沙市********/
{ "id": "430102", "value": "芙蓉区", "parentId": "430100" }, { "id": "430103", "value": "天心区", "parentId": "430100" }, { "id": "430104", "value": "岳麓区", "parentId": "430100" }, { "id": "430105", "value": "开福区", "parentId": "430100" }, { "id": "430111", "value": "雨花区", "parentId": "430100" }, { "id": "430112", "value": "望城区", "parentId": "430100" }, { "id": "430121", "value": "长沙县", "parentId": "430100" }, { "id": "430124", "value": "宁乡县", "parentId": "430100" }, { "id": "430181", "value": "浏阳市", "parentId": "430100" },
/**********株洲市********/
{ "id": "430202", "value": "荷塘区", "parentId": "430200" }, { "id": "430203", "value": "芦淞区", "parentId": "430200" }, { "id": "430204", "value": "石峰区", "parentId": "430200" }, { "id": "430211", "value": "天元区", "parentId": "430200" }, { "id": "430221", "value": "株洲县", "parentId": "430200" }, { "id": "430223", "value": "攸县", "parentId": "430200" }, { "id": "430224", "value": "茶陵县", "parentId": "430200" }, { "id": "430225", "value": "炎陵县", "parentId": "430200" }, { "id": "430281", "value": "醴陵市", "parentId": "430200" },
/**********湘潭市********/
{ "id": "430302", "value": "雨湖区", "parentId": "430300" }, { "id": "430304", "value": "岳塘区", "parentId": "430300" }, { "id": "430321", "value": "湘潭县", "parentId": "430300" }, { "id": "430381", "value": "湘乡市", "parentId": "430300" }, { "id": "430382", "value": "韶山市", "parentId": "430300" },
/**********衡阳市********/
{ "id": "430405", "value": "珠晖区", "parentId": "430400" }, { "id": "430406", "value": "雁峰区", "parentId": "430400" }, { "id": "430407", "value": "石鼓区", "parentId": "430400" }, { "id": "430408", "value": "蒸湘区", "parentId": "430400" }, { "id": "430412", "value": "南岳区", "parentId": "430400" }, { "id": "430421", "value": "衡阳县", "parentId": "430400" }, { "id": "430422", "value": "衡南县", "parentId": "430400" }, { "id": "430423", "value": "衡山县", "parentId": "430400" }, { "id": "430424", "value": "衡东县", "parentId": "430400" }, { "id": "430426", "value": "祁东县", "parentId": "430400" }, { "id": "430481", "value": "耒阳市", "parentId": "430400" }, { "id": "430482", "value": "常宁市", "parentId": "430400" },
/**********邵阳市********/
{ "id": "430502", "value": "双清区", "parentId": "430500" }, { "id": "430503", "value": "大祥区", "parentId": "430500" }, { "id": "430511", "value": "北塔区", "parentId": "430500" }, { "id": "430521", "value": "邵东县", "parentId": "430500" }, { "id": "430522", "value": "新邵县", "parentId": "430500" }, { "id": "430523", "value": "邵阳县", "parentId": "430500" }, { "id": "430524", "value": "隆回县", "parentId": "430500" }, { "id": "430525", "value": "洞口县", "parentId": "430500" }, { "id": "430527", "value": "绥宁县", "parentId": "430500" }, { "id": "430528", "value": "新宁县", "parentId": "430500" }, { "id": "430529", "value": "城步苗族自治县", "parentId": "430500" }, { "id": "430581", "value": "武冈市", "parentId": "430500" },
/**********岳阳市********/
{ "id": "430602", "value": "岳阳楼区", "parentId": "430600" }, { "id": "430603", "value": "云溪区", "parentId": "430600" }, { "id": "430611", "value": "君山区", "parentId": "430600" }, { "id": "430621", "value": "岳阳县", "parentId": "430600" }, { "id": "430623", "value": "华容县", "parentId": "430600" }, { "id": "430624", "value": "湘阴县", "parentId": "430600" }, { "id": "430626", "value": "平江县", "parentId": "430600" }, { "id": "430681", "value": "汨罗市", "parentId": "430600" }, { "id": "430682", "value": "临湘市", "parentId": "430600" },
/**********常德市********/
{ "id": "430702", "value": "武陵区", "parentId": "430700" }, { "id": "430703", "value": "鼎城区", "parentId": "430700" }, { "id": "430721", "value": "安乡县", "parentId": "430700" }, { "id": "430722", "value": "汉寿县", "parentId": "430700" }, { "id": "430723", "value": "澧县", "parentId": "430700" }, { "id": "430724", "value": "临澧县", "parentId": "430700" }, { "id": "430725", "value": "桃源县", "parentId": "430700" }, { "id": "430726", "value": "石门县", "parentId": "430700" }, { "id": "430781", "value": "津市市", "parentId": "430700" },
/**********张家界市********/
{ "id": "430802", "value": "永定区", "parentId": "430800" }, { "id": "430811", "value": "武陵源区", "parentId": "430800" }, { "id": "430821", "value": "慈利县", "parentId": "430800" }, { "id": "430822", "value": "桑植县", "parentId": "430800" },
/**********益阳市********/
{ "id": "430902", "value": "资阳区", "parentId": "430900" }, { "id": "430903", "value": "赫山区", "parentId": "430900" }, { "id": "430921", "value": "南县", "parentId": "430900" }, { "id": "430922", "value": "桃江县", "parentId": "430900" }, { "id": "430923", "value": "安化县", "parentId": "430900" }, { "id": "430981", "value": "沅江市", "parentId": "430900" },
/**********郴州市********/
{ "id": "431002", "value": "北湖区", "parentId": "431000" }, { "id": "431003", "value": "苏仙区", "parentId": "431000" }, { "id": "431021", "value": "桂阳县", "parentId": "431000" }, { "id": "431022", "value": "宜章县", "parentId": "431000" }, { "id": "431023", "value": "永兴县", "parentId": "431000" }, { "id": "431024", "value": "嘉禾县", "parentId": "431000" }, { "id": "431025", "value": "临武县", "parentId": "431000" }, { "id": "431026", "value": "汝城县", "parentId": "431000" }, { "id": "431027", "value": "桂东县", "parentId": "431000" }, { "id": "431028", "value": "安仁县", "parentId": "431000" }, { "id": "431081", "value": "资兴市", "parentId": "431000" },
/**********永州市********/
{ "id": "431102", "value": "零陵区", "parentId": "431100" }, { "id": "431103", "value": "冷水滩区", "parentId": "431100" }, { "id": "431121", "value": "祁阳县", "parentId": "431100" }, { "id": "431122", "value": "东安县", "parentId": "431100" }, { "id": "431123", "value": "双牌县", "parentId": "431100" }, { "id": "431124", "value": "道县", "parentId": "431100" }, { "id": "431125", "value": "江永县", "parentId": "431100" }, { "id": "431126", "value": "宁远县", "parentId": "431100" }, { "id": "431127", "value": "蓝山县", "parentId": "431100" }, { "id": "431128", "value": "新田县", "parentId": "431100" }, { "id": "431129", "value": "江华瑶族自治县", "parentId": "431100" },
/**********怀化市********/
{ "id": "431202", "value": "鹤城区", "parentId": "431200" }, { "id": "431221", "value": "中方县", "parentId": "431200" }, { "id": "431222", "value": "沅陵县", "parentId": "431200" }, { "id": "431223", "value": "辰溪县", "parentId": "431200" }, { "id": "431224", "value": "溆浦县", "parentId": "431200" }, { "id": "431225", "value": "会同县", "parentId": "431200" }, { "id": "431226", "value": "麻阳苗族自治县", "parentId": "431200" }, { "id": "431227", "value": "新晃侗族自治县", "parentId": "431200" }, { "id": "431228", "value": "芷江侗族自治县", "parentId": "431200" }, { "id": "431229", "value": "靖州苗族侗族自治县", "parentId": "431200" }, { "id": "431230", "value": "通道侗族自治县", "parentId": "431200" }, { "id": "431281", "value": "洪江市", "parentId": "431200" },
/**********娄底市********/
{ "id": "431302", "value": "娄星区", "parentId": "431300" }, { "id": "431321", "value": "双峰县", "parentId": "431300" }, { "id": "431322", "value": "新化县", "parentId": "431300" }, { "id": "431381", "value": "冷水江市", "parentId": "431300" }, { "id": "431382", "value": "涟源市", "parentId": "431300" },
/**********湘西土家族苗族自治州********/
{ "id": "433101", "value": "吉首市", "parentId": "433100" }, { "id": "433122", "value": "泸溪县", "parentId": "433100" }, { "id": "433123", "value": "凤凰县", "parentId": "433100" }, { "id": "433124", "value": "花垣县", "parentId": "433100" }, { "id": "433125", "value": "保靖县", "parentId": "433100" }, { "id": "433126", "value": "古丈县", "parentId": "433100" }, { "id": "433127", "value": "永顺县", "parentId": "433100" }, { "id": "433130", "value": "龙山县", "parentId": "433100" },
/**********广州市********/
{ "id": "440103", "value": "荔湾区", "parentId": "440100" }, { "id": "440104", "value": "越秀区", "parentId": "440100" }, { "id": "440105", "value": "海珠区", "parentId": "440100" }, { "id": "440106", "value": "天河区", "parentId": "440100" }, { "id": "440111", "value": "白云区", "parentId": "440100" }, { "id": "440112", "value": "黄埔区", "parentId": "440100" }, { "id": "440113", "value": "番禺区", "parentId": "440100" }, { "id": "440114", "value": "花都区", "parentId": "440100" }, { "id": "440115", "value": "南沙区", "parentId": "440100" }, { "id": "440116", "value": "萝岗区", "parentId": "440100" }, { "id": "440183", "value": "增城市", "parentId": "440100" }, { "id": "440184", "value": "从化市", "parentId": "440100" },
/**********韶关市********/
{ "id": "440203", "value": "武江区", "parentId": "440200" }, { "id": "440204", "value": "浈江区", "parentId": "440200" }, { "id": "440205", "value": "曲江区", "parentId": "440200" }, { "id": "440222", "value": "始兴县", "parentId": "440200" }, { "id": "440224", "value": "仁化县", "parentId": "440200" }, { "id": "440229", "value": "翁源县", "parentId": "440200" }, { "id": "440232", "value": "乳源瑶族自治县", "parentId": "440200" }, { "id": "440233", "value": "新丰县", "parentId": "440200" }, { "id": "440281", "value": "乐昌市", "parentId": "440200" }, { "id": "440282", "value": "南雄市", "parentId": "440200" },
/**********深圳市********/
{ "id": "440303", "value": "罗湖区", "parentId": "440300" }, { "id": "440304", "value": "福田区", "parentId": "440300" }, { "id": "440305", "value": "南山区", "parentId": "440300" }, { "id": "440306", "value": "宝安区", "parentId": "440300" }, { "id": "440307", "value": "龙岗区", "parentId": "440300" }, { "id": "440308", "value": "盐田区", "parentId": "440300" },
/**********珠海市********/
{ "id": "440402", "value": "香洲区", "parentId": "440400" }, { "id": "440403", "value": "斗门区", "parentId": "440400" }, { "id": "440404", "value": "金湾区", "parentId": "440400" },
/**********汕头市********/
{ "id": "440507", "value": "龙湖区", "parentId": "440500" }, { "id": "440511", "value": "金平区", "parentId": "440500" }, { "id": "440512", "value": "濠江区", "parentId": "440500" }, { "id": "440513", "value": "潮阳区", "parentId": "440500" }, { "id": "440514", "value": "潮南区", "parentId": "440500" }, { "id": "440515", "value": "澄海区", "parentId": "440500" }, { "id": "440523", "value": "南澳县", "parentId": "440500" },
/**********佛山市********/
{ "id": "440604", "value": "禅城区", "parentId": "440600" }, { "id": "440605", "value": "南海区", "parentId": "440600" }, { "id": "440606", "value": "顺德区", "parentId": "440600" }, { "id": "440607", "value": "三水区", "parentId": "440600" }, { "id": "440608", "value": "高明区", "parentId": "440600" },
/**********江门市********/
{ "id": "440703", "value": "蓬江区", "parentId": "440700" }, { "id": "440704", "value": "江海区", "parentId": "440700" }, { "id": "440705", "value": "新会区", "parentId": "440700" }, { "id": "440781", "value": "台山市", "parentId": "440700" }, { "id": "440783", "value": "开平市", "parentId": "440700" }, { "id": "440784", "value": "鹤山市", "parentId": "440700" }, { "id": "440785", "value": "恩平市", "parentId": "440700" },
/**********湛江市********/
{ "id": "440802", "value": "赤坎区", "parentId": "440800" }, { "id": "440803", "value": "霞山区", "parentId": "440800" }, { "id": "440804", "value": "坡头区", "parentId": "440800" }, { "id": "440811", "value": "麻章区", "parentId": "440800" }, { "id": "440823", "value": "遂溪县", "parentId": "440800" }, { "id": "440825", "value": "徐闻县", "parentId": "440800" }, { "id": "440881", "value": "廉江市", "parentId": "440800" }, { "id": "440882", "value": "雷州市", "parentId": "440800" }, { "id": "440883", "value": "吴川市", "parentId": "440800" },
/**********茂名市********/
{ "id": "440902", "value": "茂南区", "parentId": "440900" }, { "id": "440903", "value": "茂港区", "parentId": "440900" }, { "id": "440923", "value": "电白县", "parentId": "440900" }, { "id": "440981", "value": "高州市", "parentId": "440900" }, { "id": "440982", "value": "化州市", "parentId": "440900" }, { "id": "440983", "value": "信宜市", "parentId": "440900" },
/**********肇庆市********/
{ "id": "441202", "value": "端州区", "parentId": "441200" }, { "id": "441203", "value": "鼎湖区", "parentId": "441200" }, { "id": "441223", "value": "广宁县", "parentId": "441200" }, { "id": "441224", "value": "怀集县", "parentId": "441200" }, { "id": "441225", "value": "封开县", "parentId": "441200" }, { "id": "441226", "value": "德庆县", "parentId": "441200" }, { "id": "441283", "value": "高要市", "parentId": "441200" }, { "id": "441284", "value": "四会市", "parentId": "441200" },
/**********惠州市********/
{ "id": "441302", "value": "惠城区", "parentId": "441300" }, { "id": "441303", "value": "惠阳区", "parentId": "441300" }, { "id": "441322", "value": "博罗县", "parentId": "441300" }, { "id": "441323", "value": "惠东县", "parentId": "441300" }, { "id": "441324", "value": "龙门县", "parentId": "441300" },
/**********梅州市********/
{ "id": "441402", "value": "梅江区", "parentId": "441400" }, { "id": "441421", "value": "梅县", "parentId": "441400" }, { "id": "441422", "value": "大埔县", "parentId": "441400" }, { "id": "441423", "value": "丰顺县", "parentId": "441400" }, { "id": "441424", "value": "五华县", "parentId": "441400" }, { "id": "441426", "value": "平远县", "parentId": "441400" }, { "id": "441427", "value": "蕉岭县", "parentId": "441400" }, { "id": "441481", "value": "兴宁市", "parentId": "441400" },
/**********汕尾市********/
{ "id": "441502", "value": "城区", "parentId": "441500" }, { "id": "441521", "value": "海丰县", "parentId": "441500" }, { "id": "441523", "value": "陆河县", "parentId": "441500" }, { "id": "441581", "value": "陆丰市", "parentId": "441500" },
/**********河源市********/
{ "id": "441602", "value": "源城区", "parentId": "441600" }, { "id": "441621", "value": "紫金县", "parentId": "441600" }, { "id": "441622", "value": "龙川县", "parentId": "441600" }, { "id": "441623", "value": "连平县", "parentId": "441600" }, { "id": "441624", "value": "和平县", "parentId": "441600" }, { "id": "441625", "value": "东源县", "parentId": "441600" },
/**********阳江市********/
{ "id": "441702", "value": "江城区", "parentId": "441700" }, { "id": "441721", "value": "阳西县", "parentId": "441700" }, { "id": "441723", "value": "阳东县", "parentId": "441700" }, { "id": "441781", "value": "阳春市", "parentId": "441700" },
/**********清远市********/
{ "id": "441802", "value": "清城区", "parentId": "441800" }, { "id": "441821", "value": "佛冈县", "parentId": "441800" }, { "id": "441823", "value": "阳山县", "parentId": "441800" }, { "id": "441825", "value": "连山壮族瑶族自治县", "parentId": "441800" }, { "id": "441826", "value": "连南瑶族自治县", "parentId": "441800" }, { "id": "441827", "value": "清新县", "parentId": "441800" }, { "id": "441881", "value": "英德市", "parentId": "441800" }, { "id": "441882", "value": "连州市", "parentId": "441800" },
/**********东莞市********/
{ "id": "441901", "value": "东莞市", "parentId": "441900" },
/**********中山市********/
{ "id": "442001", "value": "中山市", "parentId": "442000" },
/**********潮州市********/
{ "id": "445102", "value": "湘桥区", "parentId": "445100" }, { "id": "445121", "value": "潮安县", "parentId": "445100" }, { "id": "445122", "value": "饶平县", "parentId": "445100" },
/**********揭阳市********/
{ "id": "445202", "value": "榕城区", "parentId": "445200" }, { "id": "445221", "value": "揭东县", "parentId": "445200" }, { "id": "445222", "value": "揭西县", "parentId": "445200" }, { "id": "445224", "value": "惠来县", "parentId": "445200" }, { "id": "445281", "value": "普宁市", "parentId": "445200" },
/**********云浮市********/
{ "id": "445302", "value": "云城区", "parentId": "445300" }, { "id": "445321", "value": "新兴县", "parentId": "445300" }, { "id": "445322", "value": "郁南县", "parentId": "445300" }, { "id": "445323", "value": "云安县", "parentId": "445300" }, { "id": "445381", "value": "罗定市", "parentId": "445300" },
/**********南宁市********/
{ "id": "450102", "value": "兴宁区", "parentId": "450100" }, { "id": "450103", "value": "青秀区", "parentId": "450100" }, { "id": "450105", "value": "江南区", "parentId": "450100" }, { "id": "450107", "value": "西乡塘区", "parentId": "450100" }, { "id": "450108", "value": "良庆区", "parentId": "450100" }, { "id": "450109", "value": "邕宁区", "parentId": "450100" }, { "id": "450122", "value": "武鸣县", "parentId": "450100" }, { "id": "450123", "value": "隆安县", "parentId": "450100" }, { "id": "450124", "value": "马山县", "parentId": "450100" }, { "id": "450125", "value": "上林县", "parentId": "450100" }, { "id": "450126", "value": "宾阳县", "parentId": "450100" }, { "id": "450127", "value": "横县", "parentId": "450100" },
/**********柳州市********/
{ "id": "450202", "value": "城中区", "parentId": "450200" }, { "id": "450203", "value": "鱼峰区", "parentId": "450200" }, { "id": "450204", "value": "柳南区", "parentId": "450200" }, { "id": "450205", "value": "柳北区", "parentId": "450200" }, { "id": "450221", "value": "柳江县", "parentId": "450200" }, { "id": "450222", "value": "柳城县", "parentId": "450200" }, { "id": "450223", "value": "鹿寨县", "parentId": "450200" }, { "id": "450224", "value": "融安县", "parentId": "450200" }, { "id": "450225", "value": "融水苗族自治县", "parentId": "450200" }, { "id": "450226", "value": "三江侗族自治县", "parentId": "450200" },
/**********桂林市********/
{ "id": "450302", "value": "秀峰区", "parentId": "450300" }, { "id": "450303", "value": "叠彩区", "parentId": "450300" }, { "id": "450304", "value": "象山区", "parentId": "450300" }, { "id": "450305", "value": "七星区", "parentId": "450300" }, { "id": "450311", "value": "雁山区", "parentId": "450300" }, { "id": "450321", "value": "阳朔县", "parentId": "450300" }, { "id": "450322", "value": "临桂县", "parentId": "450300" }, { "id": "450323", "value": "灵川县", "parentId": "450300" }, { "id": "450324", "value": "全州县", "parentId": "450300" }, { "id": "450325", "value": "兴安县", "parentId": "450300" }, { "id": "450326", "value": "永福县", "parentId": "450300" }, { "id": "450327", "value": "灌阳县", "parentId": "450300" }, { "id": "450328", "value": "龙胜各族自治县", "parentId": "450300" }, { "id": "450329", "value": "资源县", "parentId": "450300" }, { "id": "450330", "value": "平乐县", "parentId": "450300" }, { "id": "450331", "value": "荔蒲县", "parentId": "450300" }, { "id": "450332", "value": "恭城瑶族自治县", "parentId": "450300" },
/**********梧州市********/
{ "id": "450403", "value": "万秀区", "parentId": "450400" }, { "id": "450404", "value": "蝶山区", "parentId": "450400" }, { "id": "450405", "value": "长洲区", "parentId": "450400" }, { "id": "450421", "value": "苍梧县", "parentId": "450400" }, { "id": "450422", "value": "藤县", "parentId": "450400" }, { "id": "450423", "value": "蒙山县", "parentId": "450400" }, { "id": "450481", "value": "岑溪市", "parentId": "450400" },
/**********北海市********/
{ "id": "450502", "value": "海城区", "parentId": "450500" }, { "id": "450503", "value": "银海区", "parentId": "450500" }, { "id": "450512", "value": "铁山港区", "parentId": "450500" }, { "id": "450521", "value": "合浦县", "parentId": "450500" },
/**********防城港市********/
{ "id": "450602", "value": "港口区", "parentId": "450600" }, { "id": "450603", "value": "防城区", "parentId": "450600" }, { "id": "450621", "value": "上思县", "parentId": "450600" }, { "id": "450681", "value": "东兴市", "parentId": "450600" },
/**********钦州市********/
{ "id": "450702", "value": "钦南区", "parentId": "450700" }, { "id": "450703", "value": "钦北区", "parentId": "450700" }, { "id": "450721", "value": "灵山县", "parentId": "450700" }, { "id": "450722", "value": "浦北县", "parentId": "450700" },
/**********贵港市********/
{ "id": "450802", "value": "港北区", "parentId": "450800" }, { "id": "450803", "value": "港南区", "parentId": "450800" }, { "id": "450804", "value": "覃塘区", "parentId": "450800" }, { "id": "450821", "value": "平南县", "parentId": "450800" }, { "id": "450881", "value": "桂平市", "parentId": "450800" },
/**********玉林市********/
{ "id": "450902", "value": "玉州区", "parentId": "450900" }, { "id": "450921", "value": "容县", "parentId": "450900" }, { "id": "450922", "value": "陆川县", "parentId": "450900" }, { "id": "450923", "value": "博白县", "parentId": "450900" }, { "id": "450924", "value": "兴业县", "parentId": "450900" }, { "id": "450981", "value": "北流市", "parentId": "450900" },
/**********百色市********/
{ "id": "451002", "value": "右江区", "parentId": "451000" }, { "id": "451021", "value": "田阳县", "parentId": "451000" }, { "id": "451022", "value": "田东县", "parentId": "451000" }, { "id": "451023", "value": "平果县", "parentId": "451000" }, { "id": "451024", "value": "德保县", "parentId": "451000" }, { "id": "451025", "value": "靖西县", "parentId": "451000" }, { "id": "451026", "value": "那坡县", "parentId": "451000" }, { "id": "451027", "value": "凌云县", "parentId": "451000" }, { "id": "451028", "value": "乐业县", "parentId": "451000" }, { "id": "451029", "value": "田林县", "parentId": "451000" }, { "id": "451030", "value": "西林县", "parentId": "451000" }, { "id": "451031", "value": "隆林各族自治县", "parentId": "451000" },
/**********贺州市********/
{ "id": "451102", "value": "八步区", "parentId": "451100" }, { "id": "451119", "value": "平桂管理区", "parentId": "451100" }, { "id": "451121", "value": "昭平县", "parentId": "451100" }, { "id": "451122", "value": "钟山县", "parentId": "451100" }, { "id": "451123", "value": "富川瑶族自治县", "parentId": "451100" },
/**********河池市********/
{ "id": "451202", "value": "金城江区", "parentId": "451200" }, { "id": "451221", "value": "南丹县", "parentId": "451200" }, { "id": "451222", "value": "天峨县", "parentId": "451200" }, { "id": "451223", "value": "凤山县", "parentId": "451200" }, { "id": "451224", "value": "东兰县", "parentId": "451200" }, { "id": "451225", "value": "罗城仫佬族自治县", "parentId": "451200" }, { "id": "451226", "value": "环江毛南族自治县", "parentId": "451200" }, { "id": "451227", "value": "巴马瑶族自治县", "parentId": "451200" }, { "id": "451228", "value": "都安瑶族自治县", "parentId": "451200" }, { "id": "451229", "value": "大化瑶族自治县", "parentId": "451200" }, { "id": "451281", "value": "宜州市", "parentId": "451200" },
/**********来宾市********/
{ "id": "451302", "value": "兴宾区", "parentId": "451300" }, { "id": "451321", "value": "忻城县", "parentId": "451300" }, { "id": "451322", "value": "象州县", "parentId": "451300" }, { "id": "451323", "value": "武宣县", "parentId": "451300" }, { "id": "451324", "value": "金秀瑶族自治县", "parentId": "451300" }, { "id": "451381", "value": "合山市", "parentId": "451300" },
/**********崇左市********/
{ "id": "451402", "value": "江洲区", "parentId": "451400" }, { "id": "451421", "value": "扶绥县", "parentId": "451400" }, { "id": "451422", "value": "宁明县", "parentId": "451400" }, { "id": "451423", "value": "龙州县", "parentId": "451400" }, { "id": "451424", "value": "大新县", "parentId": "451400" }, { "id": "451425", "value": "天等县", "parentId": "451400" }, { "id": "451481", "value": "凭祥市", "parentId": "451400" },
/**********海口市********/
{ "id": "460105", "value": "秀英区", "parentId": "460100" }, { "id": "460106", "value": "龙华区", "parentId": "460100" }, { "id": "460107", "value": "琼山区", "parentId": "460100" }, { "id": "460108", "value": "美兰区", "parentId": "460100" },
/**********三亚市********/
{ "id": "460201", "value": "三亚市", "parentId": "460200" },
/**********三沙市********/
{ "id": "460301", "value": "三沙市", "parentId": "460300" },
/**********省直辖********/
{ "id": "469001", "value": "五指山市", "parentId": "469001" }, { "id": "469002", "value": "琼海市", "parentId": "469002" }, { "id": "469003", "value": "儋州市", "parentId": "469003" }, { "id": "469005", "value": "文昌市", "parentId": "469005" }, { "id": "469006", "value": "万宁市", "parentId": "469006" }, { "id": "469007", "value": "东方市", "parentId": "469007" }, { "id": "469021", "value": "定安县", "parentId": "469021" }, { "id": "469022", "value": "屯昌县", "parentId": "469022" }, { "id": "469023", "value": "澄迈县", "parentId": "469023" }, { "id": "469024", "value": "临高县", "parentId": "469024" }, { "id": "469025", "value": "白沙黎族自治县", "parentId": "469025" }, { "id": "469026", "value": "昌江黎族自治县", "parentId": "469026" }, { "id": "469027", "value": "乐东黎族自治县", "parentId": "469027" }, { "id": "469028", "value": "陵水黎族自治县", "parentId": "469028" }, { "id": "469029", "value": "保亭黎族苗族自治县", "parentId": "469029" }, { "id": "469030", "value": "琼中黎族苗族自治县", "parentId": "469030" },
/**********重庆市********/
{ "id": "500101", "value": "万州区", "parentId": "500100" }, { "id": "500102", "value": "涪陵区", "parentId": "500100" }, { "id": "500103", "value": "渝中区", "parentId": "500100" }, { "id": "500104", "value": "大渡口区", "parentId": "500100" }, { "id": "500105", "value": "江北区", "parentId": "500100" }, { "id": "500106", "value": "沙坪坝区", "parentId": "500100" }, { "id": "500107", "value": "九龙坡区", "parentId": "500100" }, { "id": "500108", "value": "南岸区", "parentId": "500100" }, { "id": "500109", "value": "北碚区", "parentId": "500100" }, { "id": "500110", "value": "綦江区", "parentId": "500100" }, { "id": "500111", "value": "大足区", "parentId": "500100" }, { "id": "500112", "value": "渝北区", "parentId": "500100" }, { "id": "500113", "value": "巴南区", "parentId": "500100" }, { "id": "500114", "value": "黔江区", "parentId": "500100" }, { "id": "500115", "value": "长寿区", "parentId": "500100" }, { "id": "500116", "value": "江津区", "parentId": "500100" }, { "id": "500117", "value": "合川区", "parentId": "500100" }, { "id": "500118", "value": "永川区", "parentId": "500100" }, { "id": "500119", "value": "南川区", "parentId": "500100" },
/**********成都市********/
{ "id": "510104", "value": "锦江区", "parentId": "510100" }, { "id": "510105", "value": "青羊区", "parentId": "510100" }, { "id": "510106", "value": "金牛区", "parentId": "510100" }, { "id": "510107", "value": "武侯区", "parentId": "510100" }, { "id": "510108", "value": "成华区", "parentId": "510100" }, { "id": "510112", "value": "龙泉驿区", "parentId": "510100" }, { "id": "510113", "value": "青白江区", "parentId": "510100" }, { "id": "510114", "value": "新都区", "parentId": "510100" }, { "id": "510115", "value": "温江区", "parentId": "510100" }, { "id": "510121", "value": "金堂县", "parentId": "510100" }, { "id": "510122", "value": "双流县", "parentId": "510100" }, { "id": "510124", "value": "郫县", "parentId": "510100" }, { "id": "510129", "value": "大邑县", "parentId": "510100" }, { "id": "510131", "value": "蒲江县", "parentId": "510100" }, { "id": "510132", "value": "新津县", "parentId": "510100" }, { "id": "510181", "value": "都江堰市", "parentId": "510100" }, { "id": "510182", "value": "彭州市", "parentId": "510100" }, { "id": "510183", "value": "邛崃市", "parentId": "510100" }, { "id": "510184", "value": "崇州市", "parentId": "510100" },
/**********自贡市********/
{ "id": "510302", "value": "自流井区", "parentId": "510300" }, { "id": "510303", "value": "贡井区", "parentId": "510300" }, { "id": "510304", "value": "大安区", "parentId": "510300" }, { "id": "510311", "value": "沿滩区", "parentId": "510300" }, { "id": "510321", "value": "荣县", "parentId": "510300" }, { "id": "510322", "value": "富顺县", "parentId": "510300" },
/**********攀枝花市********/
{ "id": "510402", "value": "东区", "parentId": "510400" }, { "id": "510403", "value": "西区", "parentId": "510400" }, { "id": "510411", "value": "仁和区", "parentId": "510400" }, { "id": "510421", "value": "米易县", "parentId": "510400" }, { "id": "510422", "value": "盐边县", "parentId": "510400" },
/**********泸州市********/
{ "id": "510502", "value": "江阳区", "parentId": "510500" }, { "id": "510503", "value": "纳溪区", "parentId": "510500" }, { "id": "510504", "value": "龙马潭区", "parentId": "510500" }, { "id": "510521", "value": "泸县", "parentId": "510500" }, { "id": "510522", "value": "合江县", "parentId": "510500" }, { "id": "510524", "value": "叙永县", "parentId": "510500" }, { "id": "510525", "value": "古蔺县", "parentId": "510500" },
/**********德阳市********/
{ "id": "510603", "value": "旌阳区", "parentId": "510600" }, { "id": "510623", "value": "中江县", "parentId": "510600" }, { "id": "510626", "value": "罗江县", "parentId": "510600" }, { "id": "510681", "value": "广汉市", "parentId": "510600" }, { "id": "510682", "value": "什邡市", "parentId": "510600" }, { "id": "510683", "value": "绵竹市", "parentId": "510600" },
/**********绵阳市********/
{ "id": "510703", "value": "涪城区", "parentId": "510700" }, { "id": "510704", "value": "游仙区", "parentId": "510700" }, { "id": "510722", "value": "三台县", "parentId": "510700" }, { "id": "510723", "value": "盐亭县", "parentId": "510700" }, { "id": "510724", "value": "安县", "parentId": "510700" }, { "id": "510725", "value": "梓潼县", "parentId": "510700" }, { "id": "510726", "value": "北川羌族自治县", "parentId": "510700" }, { "id": "510727", "value": "平武县", "parentId": "510700" }, { "id": "510781", "value": "江油市", "parentId": "510700" },
/**********广元市********/
{ "id": "510802", "value": "利州区", "parentId": "510800" }, { "id": "510811", "value": "元坝区", "parentId": "510800" }, { "id": "510812", "value": "朝天区", "parentId": "510800" }, { "id": "510821", "value": "旺苍县", "parentId": "510800" }, { "id": "510822", "value": "青川县", "parentId": "510800" }, { "id": "510823", "value": "剑阁县", "parentId": "510800" }, { "id": "510824", "value": "苍溪县", "parentId": "510800" },
/**********遂宁市********/
{ "id": "510903", "value": "船山区", "parentId": "510900" }, { "id": "510904", "value": "安居区", "parentId": "510900" }, { "id": "510921", "value": "蓬溪县", "parentId": "510900" }, { "id": "510922", "value": "射洪县", "parentId": "510900" }, { "id": "510923", "value": "大英县", "parentId": "510900" },
/**********内江市********/
{ "id": "511002", "value": "市中区", "parentId": "511000" }, { "id": "511011", "value": "东兴区", "parentId": "511000" }, { "id": "511024", "value": "威远县", "parentId": "511000" }, { "id": "511025", "value": "资中县", "parentId": "511000" }, { "id": "511028", "value": "隆昌县", "parentId": "511000" },
/**********乐山市********/
{ "id": "511102", "value": "市中区", "parentId": "511100" }, { "id": "511111", "value": "沙湾区", "parentId": "511100" }, { "id": "511112", "value": "五通桥区", "parentId": "511100" }, { "id": "511113", "value": "金口河区", "parentId": "511100" }, { "id": "511123", "value": "犍为县", "parentId": "511100" }, { "id": "511124", "value": "井研县", "parentId": "511100" }, { "id": "511126", "value": "夹江县", "parentId": "511100" }, { "id": "511129", "value": "沐川县", "parentId": "511100" }, { "id": "511132", "value": "峨边彝族自治县", "parentId": "511100" }, { "id": "511133", "value": "马边彝族自治县", "parentId": "511100" }, { "id": "511181", "value": "峨眉山市", "parentId": "511100" },
/**********南充市********/
{ "id": "511302", "value": "顺庆区", "parentId": "511300" }, { "id": "511303", "value": "高坪区", "parentId": "511300" }, { "id": "511304", "value": "嘉陵区", "parentId": "511300" }, { "id": "511321", "value": "南部县", "parentId": "511300" }, { "id": "511322", "value": "营山县", "parentId": "511300" }, { "id": "511323", "value": "蓬安县", "parentId": "511300" }, { "id": "511324", "value": "仪陇县", "parentId": "511300" }, { "id": "511325", "value": "西充县", "parentId": "511300" }, { "id": "511381", "value": "阆中市", "parentId": "511300" },
/**********眉山市********/
{ "id": "511402", "value": "东坡区", "parentId": "511400" }, { "id": "511421", "value": "仁寿县", "parentId": "511400" }, { "id": "511422", "value": "彭山县", "parentId": "511400" }, { "id": "511423", "value": "洪雅县", "parentId": "511400" }, { "id": "511424", "value": "丹棱县", "parentId": "511400" }, { "id": "511425", "value": "青神县", "parentId": "511400" },
/**********宜宾市********/
{ "id": "511502", "value": "翠屏区", "parentId": "511500" }, { "id": "511521", "value": "宜宾县", "parentId": "511500" }, { "id": "511522", "value": "南溪区", "parentId": "511500" }, { "id": "511523", "value": "江安县", "parentId": "511500" }, { "id": "511524", "value": "长宁县", "parentId": "511500" }, { "id": "511525", "value": "高县", "parentId": "511500" }, { "id": "511526", "value": "珙县", "parentId": "511500" }, { "id": "511527", "value": "筠连县", "parentId": "511500" }, { "id": "511528", "value": "兴文县", "parentId": "511500" }, { "id": "511529", "value": "屏山县", "parentId": "511500" },
/**********广安市********/
{ "id": "511602", "value": "广安区", "parentId": "511600" }, { "id": "511621", "value": "岳池县", "parentId": "511600" }, { "id": "511622", "value": "武胜县", "parentId": "511600" }, { "id": "511623", "value": "邻水县", "parentId": "511600" }, { "id": "511681", "value": "华蓥市", "parentId": "511600" },
/**********达州市********/
{ "id": "511702", "value": "通川区", "parentId": "511700" }, { "id": "511721", "value": "达县", "parentId": "511700" }, { "id": "511722", "value": "宣汉县", "parentId": "511700" }, { "id": "511723", "value": "开江县", "parentId": "511700" }, { "id": "511724", "value": "大竹县", "parentId": "511700" }, { "id": "511725", "value": "渠县", "parentId": "511700" }, { "id": "511781", "value": "万源市", "parentId": "511700" },
/**********雅安市********/
{ "id": "511802", "value": "雨城区", "parentId": "511800" }, { "id": "511821", "value": "名山县", "parentId": "511800" }, { "id": "511822", "value": "荥经县", "parentId": "511800" }, { "id": "511823", "value": "汉源县", "parentId": "511800" }, { "id": "511824", "value": "石棉县", "parentId": "511800" }, { "id": "511825", "value": "天全县", "parentId": "511800" }, { "id": "511826", "value": "芦山县", "parentId": "511800" }, { "id": "511827", "value": "宝兴县", "parentId": "511800" },
/**********巴中市********/
{ "id": "511902", "value": "巴州区", "parentId": "511900" }, { "id": "511921", "value": "通江县", "parentId": "511900" }, { "id": "511922", "value": "南江县", "parentId": "511900" }, { "id": "511923", "value": "平昌县", "parentId": "511900" },
/**********资阳市********/
{ "id": "512002", "value": "雁江区", "parentId": "512000" }, { "id": "512021", "value": "安岳县", "parentId": "512000" }, { "id": "512022", "value": "乐至县", "parentId": "512000" }, { "id": "512081", "value": "简阳市", "parentId": "512000" },
/**********阿坝藏族羌族自治州********/
{ "id": "513221", "value": "汶川县", "parentId": "513200" }, { "id": "513222", "value": "理县", "parentId": "513200" }, { "id": "513223", "value": "茂县", "parentId": "513200" }, { "id": "513224", "value": "松潘县", "parentId": "513200" }, { "id": "513225", "value": "九寨沟县", "parentId": "513200" }, { "id": "513226", "value": "金川县", "parentId": "513200" }, { "id": "513227", "value": "小金县", "parentId": "513200" }, { "id": "513228", "value": "黑水县", "parentId": "513200" }, { "id": "513229", "value": "马尔康县", "parentId": "513200" }, { "id": "513230", "value": "壤塘县", "parentId": "513200" }, { "id": "513231", "value": "阿坝县", "parentId": "513200" }, { "id": "513232", "value": "若尔盖县", "parentId": "513200" }, { "id": "513233", "value": "红原县", "parentId": "513200" },
/**********甘孜藏族自治州********/
{ "id": "513321", "value": "康定县", "parentId": "513300" }, { "id": "513322", "value": "泸定县", "parentId": "513300" }, { "id": "513323", "value": "丹巴县", "parentId": "513300" }, { "id": "513324", "value": "九龙县", "parentId": "513300" }, { "id": "513325", "value": "雅江县", "parentId": "513300" }, { "id": "513326", "value": "道孚县", "parentId": "513300" }, { "id": "513327", "value": "炉霍县", "parentId": "513300" }, { "id": "513328", "value": "甘孜县", "parentId": "513300" }, { "id": "513329", "value": "新龙县", "parentId": "513300" }, { "id": "513330", "value": "德格县", "parentId": "513300" }, { "id": "513331", "value": "白玉县", "parentId": "513300" }, { "id": "513332", "value": "石渠县", "parentId": "513300" }, { "id": "513333", "value": "色达县", "parentId": "513300" }, { "id": "513334", "value": "理塘县", "parentId": "513300" }, { "id": "513335", "value": "巴塘县", "parentId": "513300" }, { "id": "513336", "value": "乡城县", "parentId": "513300" }, { "id": "513337", "value": "稻城县", "parentId": "513300" }, { "id": "513338", "value": "得荣县", "parentId": "513300" },
/**********凉山彝族自治州********/
{ "id": "513401", "value": "西昌市", "parentId": "513400" }, { "id": "513422", "value": "木里藏族自治县", "parentId": "513400" }, { "id": "513423", "value": "盐源县", "parentId": "513400" }, { "id": "513424", "value": "德昌县", "parentId": "513400" }, { "id": "513425", "value": "会理县", "parentId": "513400" }, { "id": "513426", "value": "会东县", "parentId": "513400" }, { "id": "513427", "value": "宁南县", "parentId": "513400" }, { "id": "513428", "value": "普格县", "parentId": "513400" }, { "id": "513429", "value": "布拖县", "parentId": "513400" }, { "id": "513430", "value": "金阳县", "parentId": "513400" }, { "id": "513431", "value": "昭觉县", "parentId": "513400" }, { "id": "513432", "value": "喜德县", "parentId": "513400" }, { "id": "513433", "value": "冕宁县", "parentId": "513400" }, { "id": "513434", "value": "越西县", "parentId": "513400" }, { "id": "513435", "value": "甘洛县", "parentId": "513400" }, { "id": "513436", "value": "美姑县", "parentId": "513400" }, { "id": "513437", "value": "雷波县", "parentId": "513400" },
/**********贵阳市********/
{ "id": "520102", "value": "南明区", "parentId": "520100" }, { "id": "520103", "value": "云岩区", "parentId": "520100" }, { "id": "520111", "value": "花溪区", "parentId": "520100" }, { "id": "520112", "value": "乌当区", "parentId": "520100" }, { "id": "520113", "value": "白云区", "parentId": "520100" }, { "id": "520114", "value": "小河区", "parentId": "520100" }, { "id": "520121", "value": "开阳县", "parentId": "520100" }, { "id": "520122", "value": "息烽县", "parentId": "520100" }, { "id": "520123", "value": "修文县", "parentId": "520100" }, { "id": "520181", "value": "清镇市", "parentId": "520100" },
/**********六盘水市********/
{ "id": "520201", "value": "钟山区", "parentId": "520200" }, { "id": "520203", "value": "六枝特区", "parentId": "520200" }, { "id": "520221", "value": "水城县", "parentId": "520200" }, { "id": "520222", "value": "盘县", "parentId": "520200" },
/**********遵义市********/
{ "id": "520302", "value": "红花岗区", "parentId": "520300" }, { "id": "520303", "value": "汇川区", "parentId": "520300" }, { "id": "520321", "value": "遵义县", "parentId": "520300" }, { "id": "520322", "value": "桐梓县", "parentId": "520300" }, { "id": "520323", "value": "绥阳县", "parentId": "520300" }, { "id": "520324", "value": "正安县", "parentId": "520300" }, { "id": "520325", "value": "道真仡佬族苗族自治县", "parentId": "520300" }, { "id": "520326", "value": "务川仡佬族苗族自治县", "parentId": "520300" }, { "id": "520327", "value": "凤冈县", "parentId": "520300" }, { "id": "520328", "value": "湄潭县", "parentId": "520300" }, { "id": "520329", "value": "余庆县", "parentId": "520300" }, { "id": "520330", "value": "习水县", "parentId": "520300" }, { "id": "520381", "value": "赤水市", "parentId": "520300" }, { "id": "520382", "value": "仁怀市", "parentId": "520300" },
/**********安顺市********/
{ "id": "520402", "value": "西秀区", "parentId": "520400" }, { "id": "520421", "value": "平坝县", "parentId": "520400" }, { "id": "520422", "value": "普定县", "parentId": "520400" }, { "id": "520423", "value": "镇宁布依族苗族自治县", "parentId": "520400" }, { "id": "520424", "value": "关岭布依族苗族自治县", "parentId": "520400" }, { "id": "520425", "value": "紫云苗族布依族自治县", "parentId": "520400" },
/**********铜仁市********/
{ "id": "522201", "value": "铜仁市", "parentId": "522200" },
/**********黔西南布依族苗族自治州********/
{ "id": "522301", "value": "兴义市", "parentId": "522300" }, { "id": "522322", "value": "兴仁县", "parentId": "522300" }, { "id": "522323", "value": "普安县", "parentId": "522300" }, { "id": "522324", "value": "晴隆县", "parentId": "522300" }, { "id": "522325", "value": "贞丰县", "parentId": "522300" }, { "id": "522326", "value": "望谟县", "parentId": "522300" }, { "id": "522327", "value": "册亨县", "parentId": "522300" }, { "id": "522328", "value": "安龙县", "parentId": "522300" },
/**********毕节市********/
{ "id": "522401", "value": "毕节市", "parentId": "522400" },
/**********黔东南苗族侗族自治州********/
{ "id": "522601", "value": "凯里市", "parentId": "522600" }, { "id": "522622", "value": "黄平县", "parentId": "522600" }, { "id": "522623", "value": "施秉县", "parentId": "522600" }, { "id": "522624", "value": "三穗县", "parentId": "522600" }, { "id": "522625", "value": "镇远县", "parentId": "522600" }, { "id": "522626", "value": "岑巩县", "parentId": "522600" }, { "id": "522627", "value": "天柱县", "parentId": "522600" }, { "id": "522628", "value": "锦屏县", "parentId": "522600" }, { "id": "522629", "value": "剑河县", "parentId": "522600" }, { "id": "522630", "value": "台江县", "parentId": "522600" }, { "id": "522631", "value": "黎平县", "parentId": "522600" }, { "id": "522632", "value": "榕江县", "parentId": "522600" }, { "id": "522633", "value": "从江县", "parentId": "522600" }, { "id": "522634", "value": "雷山县", "parentId": "522600" }, { "id": "522635", "value": "麻江县", "parentId": "522600" }, { "id": "522636", "value": "丹寨县", "parentId": "522600" },
/**********黔南布依族苗族自治州********/
{ "id": "522701", "value": "都匀市", "parentId": "522700" }, { "id": "522702", "value": "福泉市", "parentId": "522700" }, { "id": "522722", "value": "荔波县", "parentId": "522700" }, { "id": "522723", "value": "贵定县", "parentId": "522700" }, { "id": "522725", "value": "瓮安县", "parentId": "522700" }, { "id": "522726", "value": "独山县", "parentId": "522700" }, { "id": "522727", "value": "平塘县", "parentId": "522700" }, { "id": "522728", "value": "罗甸县", "parentId": "522700" }, { "id": "522729", "value": "长顺县", "parentId": "522700" }, { "id": "522730", "value": "龙里县", "parentId": "522700" }, { "id": "522731", "value": "惠水县", "parentId": "522700" }, { "id": "522732", "value": "三都水族自治县", "parentId": "522700" },
/**********昆明市********/
{ "id": "530102", "value": "五华区", "parentId": "530100" }, { "id": "530103", "value": "盘龙区", "parentId": "530100" }, { "id": "530111", "value": "官渡区", "parentId": "530100" }, { "id": "530112", "value": "西山区", "parentId": "530100" }, { "id": "530113", "value": "东川区", "parentId": "530100" }, { "id": "530121", "value": "呈贡区", "parentId": "530100" }, { "id": "530122", "value": "晋宁县", "parentId": "530100" }, { "id": "530124", "value": "富民县", "parentId": "530100" }, { "id": "530125", "value": "宜良县", "parentId": "530100" }, { "id": "530126", "value": "石林彝族自治县", "parentId": "530100" }, { "id": "530127", "value": "嵩明县", "parentId": "530100" }, { "id": "530128", "value": "禄劝彝族苗族自治县", "parentId": "530100" }, { "id": "530129", "value": "寻甸回族彝族自治县", "parentId": "530100" }, { "id": "530181", "value": "安宁市", "parentId": "530100" },
/**********曲靖市********/
{ "id": "530302", "value": "麒麟区", "parentId": "530300" }, { "id": "530321", "value": "马龙县", "parentId": "530300" }, { "id": "530322", "value": "陆良县", "parentId": "530300" }, { "id": "530323", "value": "师宗县", "parentId": "530300" }, { "id": "530324", "value": "罗平县", "parentId": "530300" }, { "id": "530325", "value": "富源县", "parentId": "530300" }, { "id": "530326", "value": "会泽县", "parentId": "530300" }, { "id": "530328", "value": "沾益县", "parentId": "530300" }, { "id": "530381", "value": "宣威市", "parentId": "530300" },
/**********玉溪市********/
{ "id": "530402", "value": "红塔区", "parentId": "530400" }, { "id": "530421", "value": "江川县", "parentId": "530400" }, { "id": "530422", "value": "澄江县", "parentId": "530400" }, { "id": "530423", "value": "通海县", "parentId": "530400" }, { "id": "530424", "value": "华宁县", "parentId": "530400" }, { "id": "530425", "value": "易门县", "parentId": "530400" }, { "id": "530426", "value": "峨山彝族自治县", "parentId": "530400" }, { "id": "530427", "value": "新平彝族傣族自治县", "parentId": "530400" }, { "id": "530428", "value": "元江哈尼族彝族傣族自治县", "parentId": "530400" },
/**********保山市********/
{ "id": "530502", "value": "隆阳区", "parentId": "530500" }, { "id": "530521", "value": "施甸县", "parentId": "530500" }, { "id": "530522", "value": "腾冲县", "parentId": "530500" }, { "id": "530523", "value": "龙陵县", "parentId": "530500" }, { "id": "530524", "value": "昌宁县", "parentId": "530500" },
/**********昭通市********/
{ "id": "530602", "value": "昭阳区", "parentId": "530600" }, { "id": "530621", "value": "鲁甸县", "parentId": "530600" }, { "id": "530622", "value": "巧家县", "parentId": "530600" }, { "id": "530623", "value": "盐津县", "parentId": "530600" }, { "id": "530624", "value": "大关县", "parentId": "530600" }, { "id": "530625", "value": "永善县", "parentId": "530600" }, { "id": "530626", "value": "绥江县", "parentId": "530600" }, { "id": "530627", "value": "镇雄县", "parentId": "530600" }, { "id": "530628", "value": "彝良县", "parentId": "530600" }, { "id": "530629", "value": "威信县", "parentId": "530600" }, { "id": "530630", "value": "水富县", "parentId": "530600" },
/**********丽江市********/
{ "id": "530702", "value": "古城区", "parentId": "530700" }, { "id": "530721", "value": "玉龙纳西族自治县", "parentId": "530700" }, { "id": "530722", "value": "永胜县", "parentId": "530700" }, { "id": "530723", "value": "华坪县", "parentId": "530700" }, { "id": "530724", "value": "宁蒗彝族自治县", "parentId": "530700" },
/**********普洱市********/
{ "id": "530802", "value": "思茅区", "parentId": "530800" }, { "id": "530821", "value": "宁洱哈尼族彝族自治县", "parentId": "530800" }, { "id": "530822", "value": "墨江哈尼族自治县", "parentId": "530800" }, { "id": "530823", "value": "景东彝族自治县", "parentId": "530800" }, { "id": "530824", "value": "景谷傣族彝族自治县", "parentId": "530800" }, { "id": "530825", "value": "镇沅彝族哈尼族拉祜族自治县", "parentId": "530800" }, { "id": "530826", "value": "江城哈尼族彝族自治县", "parentId": "530800" }, { "id": "530827", "value": "孟连傣族拉祜族佤族自治县", "parentId": "530800" }, { "id": "530828", "value": "澜沧拉祜族自治县", "parentId": "530800" }, { "id": "530829", "value": "西盟佤族自治县", "parentId": "530800" },
/**********临沧市********/
{ "id": "530902", "value": "临翔区", "parentId": "530900" }, { "id": "530921", "value": "凤庆县", "parentId": "530900" }, { "id": "530922", "value": "云县", "parentId": "530900" }, { "id": "530923", "value": "永德县", "parentId": "530900" }, { "id": "530924", "value": "镇康县", "parentId": "530900" }, { "id": "530925", "value": "双江拉祜族佤族布朗族傣族自治县", "parentId": "530900" }, { "id": "530926", "value": "耿马傣族佤族自治县", "parentId": "530900" }, { "id": "530927", "value": "沧源佤族自治县", "parentId": "530900" },
/**********楚雄彝族自治州********/
{ "id": "532301", "value": "楚雄市", "parentId": "532300" }, { "id": "532322", "value": "双柏县", "parentId": "532300" }, { "id": "532323", "value": "牟定县", "parentId": "532300" }, { "id": "532324", "value": "南华县", "parentId": "532300" }, { "id": "532325", "value": "姚安县", "parentId": "532300" }, { "id": "532326", "value": "大姚县", "parentId": "532300" }, { "id": "532327", "value": "永仁县", "parentId": "532300" }, { "id": "532328", "value": "元谋县", "parentId": "532300" }, { "id": "532329", "value": "武定县", "parentId": "532300" }, { "id": "532331", "value": "禄丰县", "parentId": "532300" },
/**********红河哈尼族彝族自治州********/
{ "id": "532501", "value": "个旧市", "parentId": "532500" }, { "id": "532502", "value": "开远市", "parentId": "532500" }, { "id": "532503", "value": "蒙自市", "parentId": "532500" }, { "id": "532523", "value": "屏边苗族自治县", "parentId": "532500" }, { "id": "532524", "value": "建水县", "parentId": "532500" }, { "id": "532525", "value": "石屏县", "parentId": "532500" }, { "id": "532526", "value": "弥勒县", "parentId": "532500" }, { "id": "532527", "value": "泸西县", "parentId": "532500" }, { "id": "532528", "value": "元阳县", "parentId": "532500" }, { "id": "532529", "value": "红河县", "parentId": "532500" }, { "id": "532530", "value": "金平苗族瑶族傣族自治县", "parentId": "532500" }, { "id": "532531", "value": "绿春县", "parentId": "532500" }, { "id": "532532", "value": "河口瑶族自治县", "parentId": "532500" },
/**********文山壮族苗族自治州********/
{ "id": "532621", "value": "文山市", "parentId": "532600" }, { "id": "532622", "value": "砚山县", "parentId": "532600" }, { "id": "532623", "value": "西畴县", "parentId": "532600" }, { "id": "532624", "value": "麻栗坡县", "parentId": "532600" }, { "id": "532625", "value": "马关县", "parentId": "532600" }, { "id": "532626", "value": "丘北县", "parentId": "532600" }, { "id": "532627", "value": "广南县", "parentId": "532600" }, { "id": "532628", "value": "富宁县", "parentId": "532600" },
/**********西双版纳傣族自治州********/
{ "id": "532801", "value": "景洪市", "parentId": "532800" }, { "id": "532822", "value": "勐海县", "parentId": "532800" }, { "id": "532823", "value": "勐腊县", "parentId": "532800" },
/**********大理白族自治州********/
{ "id": "532901", "value": "大理市", "parentId": "532900" }, { "id": "532922", "value": "漾濞彝族自治县", "parentId": "532900" }, { "id": "532923", "value": "祥云县", "parentId": "532900" }, { "id": "532924", "value": "宾川县", "parentId": "532900" }, { "id": "532925", "value": "弥渡县", "parentId": "532900" }, { "id": "532926", "value": "南涧彝族自治县", "parentId": "532900" }, { "id": "532927", "value": "巍山彝族回族自治县", "parentId": "532900" }, { "id": "532928", "value": "永平县", "parentId": "532900" }, { "id": "532929", "value": "云龙县", "parentId": "532900" }, { "id": "532930", "value": "洱源县", "parentId": "532900" }, { "id": "532931", "value": "剑川县", "parentId": "532900" }, { "id": "532932", "value": "鹤庆县", "parentId": "532900" },
/**********德宏傣族景颇族自治州********/
{ "id": "533102", "value": "瑞丽市", "parentId": "533100" }, { "id": "533103", "value": "芒市", "parentId": "533100" }, { "id": "533122", "value": "梁河县", "parentId": "533100" }, { "id": "533123", "value": "盈江县", "parentId": "533100" }, { "id": "533124", "value": "陇川县", "parentId": "533100" },
/**********怒江傈僳族自治州********/
{ "id": "533321", "value": "泸水县", "parentId": "533300" }, { "id": "533323", "value": "福贡县", "parentId": "533300" }, { "id": "533324", "value": "贡山独龙族怒族自治县", "parentId": "533300" }, { "id": "533325", "value": "兰坪白族普米族自治县", "parentId": "533300" },
/**********迪庆藏族自治州********/
{ "id": "533421", "value": "香格里拉县", "parentId": "533400" }, { "id": "533422", "value": "德钦县", "parentId": "533400" }, { "id": "533423", "value": "维西傈僳族自治县", "parentId": "533400" },
/**********拉萨市********/
{ "id": "540102", "value": "城关区", "parentId": "540100" }, { "id": "540121", "value": "林周县", "parentId": "540100" }, { "id": "540122", "value": "当雄县", "parentId": "540100" }, { "id": "540123", "value": "尼木县", "parentId": "540100" }, { "id": "540124", "value": "曲水县", "parentId": "540100" }, { "id": "540125", "value": "堆龙德庆县", "parentId": "540100" }, { "id": "540126", "value": "达孜县", "parentId": "540100" }, { "id": "540127", "value": "墨竹工卡县", "parentId": "540100" },
/**********昌都地区********/
{ "id": "542121", "value": "昌都县", "parentId": "542100" }, { "id": "542122", "value": "江达县", "parentId": "542100" }, { "id": "542123", "value": "贡觉县", "parentId": "542100" }, { "id": "542124", "value": "类乌齐县", "parentId": "542100" }, { "id": "542125", "value": "丁青县", "parentId": "542100" }, { "id": "542126", "value": "察雅县", "parentId": "542100" }, { "id": "542127", "value": "八宿县", "parentId": "542100" }, { "id": "542128", "value": "左贡县", "parentId": "542100" }, { "id": "542129", "value": "芒康县", "parentId": "542100" }, { "id": "542132", "value": "洛隆县", "parentId": "542100" }, { "id": "542133", "value": "边坝县", "parentId": "542100" },
/**********山南地区********/
{ "id": "542221", "value": "乃东县", "parentId": "542200" }, { "id": "542222", "value": "扎囊县", "parentId": "542200" }, { "id": "542223", "value": "贡嘎县", "parentId": "542200" }, { "id": "542224", "value": "桑日县", "parentId": "542200" }, { "id": "542225", "value": "琼结县", "parentId": "542200" }, { "id": "542226", "value": "曲松县", "parentId": "542200" }, { "id": "542227", "value": "措美县", "parentId": "542200" }, { "id": "542228", "value": "洛扎县", "parentId": "542200" }, { "id": "542229", "value": "加查县", "parentId": "542200" }, { "id": "542231", "value": "隆子县", "parentId": "542200" }, { "id": "542232", "value": "错那县", "parentId": "542200" }, { "id": "542233", "value": "浪卡子县", "parentId": "542200" },
/**********日喀则地区********/
{ "id": "542301", "value": "日喀则市", "parentId": "542300" }, { "id": "542322", "value": "南木林县", "parentId": "542300" }, { "id": "542323", "value": "江孜县", "parentId": "542300" }, { "id": "542324", "value": "定日县", "parentId": "542300" }, { "id": "542325", "value": "萨迦县", "parentId": "542300" }, { "id": "542326", "value": "拉孜县", "parentId": "542300" }, { "id": "542327", "value": "昂仁县", "parentId": "542300" }, { "id": "542328", "value": "谢通门县", "parentId": "542300" }, { "id": "542329", "value": "白朗县", "parentId": "542300" }, { "id": "542330", "value": "仁布县", "parentId": "542300" }, { "id": "542331", "value": "康马县", "parentId": "542300" }, { "id": "542332", "value": "定结县", "parentId": "542300" }, { "id": "542333", "value": "仲巴县", "parentId": "542300" }, { "id": "542334", "value": "亚东县", "parentId": "542300" }, { "id": "542335", "value": "吉隆县", "parentId": "542300" }, { "id": "542336", "value": "聂拉木县", "parentId": "542300" }, { "id": "542337", "value": "萨嘎县", "parentId": "542300" }, { "id": "542338", "value": "岗巴县", "parentId": "542300" },
/**********那曲地区********/
{ "id": "542421", "value": "那曲县", "parentId": "542400" }, { "id": "542422", "value": "嘉黎县", "parentId": "542400" }, { "id": "542423", "value": "比如县", "parentId": "542400" }, { "id": "542424", "value": "聂荣县", "parentId": "542400" }, { "id": "542425", "value": "安多县", "parentId": "542400" }, { "id": "542426", "value": "申扎县", "parentId": "542400" }, { "id": "542427", "value": "索县", "parentId": "542400" }, { "id": "542428", "value": "班戈县", "parentId": "542400" }, { "id": "542429", "value": "巴青县", "parentId": "542400" }, { "id": "542430", "value": "尼玛县", "parentId": "542400" },
/**********阿里地区********/
{ "id": "542521", "value": "普兰县", "parentId": "542500" }, { "id": "542522", "value": "札达县", "parentId": "542500" }, { "id": "542523", "value": "噶尔县", "parentId": "542500" }, { "id": "542524", "value": "日土县", "parentId": "542500" }, { "id": "542525", "value": "革吉县", "parentId": "542500" }, { "id": "542526", "value": "改则县", "parentId": "542500" }, { "id": "542527", "value": "措勤县", "parentId": "542500" },
/**********林芝地区********/
{ "id": "542621", "value": "林芝县", "parentId": "542600" }, { "id": "542622", "value": "工布江达县", "parentId": "542600" }, { "id": "542623", "value": "米林县", "parentId": "542600" }, { "id": "542624", "value": "墨脱县", "parentId": "542600" }, { "id": "542625", "value": "波密县", "parentId": "542600" }, { "id": "542626", "value": "察隅县", "parentId": "542600" }, { "id": "542627", "value": "朗县", "parentId": "542600" },
/**********西安市********/
{ "id": "610102", "value": "新城区", "parentId": "610100" }, { "id": "610103", "value": "碑林区", "parentId": "610100" }, { "id": "610104", "value": "莲湖区", "parentId": "610100" }, { "id": "610111", "value": "灞桥区", "parentId": "610100" }, { "id": "610112", "value": "未央区", "parentId": "610100" }, { "id": "610113", "value": "雁塔区", "parentId": "610100" }, { "id": "610114", "value": "阎良区", "parentId": "610100" }, { "id": "610115", "value": "临潼区", "parentId": "610100" }, { "id": "610116", "value": "长安区", "parentId": "610100" }, { "id": "610122", "value": "蓝田县", "parentId": "610100" }, { "id": "610124", "value": "周至县", "parentId": "610100" }, { "id": "610125", "value": "户县", "parentId": "610100" }, { "id": "610126", "value": "高陵县", "parentId": "610100" },
/**********铜川市********/
{ "id": "610202", "value": "王益区", "parentId": "610200" }, { "id": "610203", "value": "印台区", "parentId": "610200" }, { "id": "610204", "value": "耀州区", "parentId": "610200" }, { "id": "610222", "value": "宜君县", "parentId": "610200" },
/**********宝鸡市********/
{ "id": "610302", "value": "渭滨区", "parentId": "610300" }, { "id": "610303", "value": "金台区", "parentId": "610300" }, { "id": "610304", "value": "陈仓区", "parentId": "610300" }, { "id": "610322", "value": "凤翔县", "parentId": "610300" }, { "id": "610323", "value": "岐山县", "parentId": "610300" }, { "id": "610324", "value": "扶风县", "parentId": "610300" }, { "id": "610326", "value": "眉县", "parentId": "610300" }, { "id": "610327", "value": "陇县", "parentId": "610300" }, { "id": "610328", "value": "千阳县", "parentId": "610300" }, { "id": "610329", "value": "麟游县", "parentId": "610300" }, { "id": "610330", "value": "凤县", "parentId": "610300" }, { "id": "610331", "value": "太白县", "parentId": "610300" },
/**********咸阳市********/
{ "id": "610402", "value": "秦都区", "parentId": "610400" }, { "id": "610403", "value": "杨陵区", "parentId": "610400" }, { "id": "610404", "value": "渭城区", "parentId": "610400" }, { "id": "610422", "value": "三原县", "parentId": "610400" }, { "id": "610423", "value": "泾阳县", "parentId": "610400" }, { "id": "610424", "value": "乾县", "parentId": "610400" }, { "id": "610425", "value": "礼泉县", "parentId": "610400" }, { "id": "610426", "value": "永寿县", "parentId": "610400" }, { "id": "610427", "value": "彬县", "parentId": "610400" }, { "id": "610428", "value": "长武县", "parentId": "610400" }, { "id": "610429", "value": "旬邑县", "parentId": "610400" }, { "id": "610430", "value": "淳化县", "parentId": "610400" }, { "id": "610431", "value": "武功县", "parentId": "610400" }, { "id": "610481", "value": "兴平市", "parentId": "610400" },
/**********渭南市********/
{ "id": "610502", "value": "临渭区", "parentId": "610500" }, { "id": "610521", "value": "华县", "parentId": "610500" }, { "id": "610522", "value": "潼关县", "parentId": "610500" }, { "id": "610523", "value": "大荔县", "parentId": "610500" }, { "id": "610524", "value": "合阳县", "parentId": "610500" }, { "id": "610525", "value": "澄城县", "parentId": "610500" }, { "id": "610526", "value": "蒲城县", "parentId": "610500" }, { "id": "610527", "value": "白水县", "parentId": "610500" }, { "id": "610528", "value": "富平县", "parentId": "610500" }, { "id": "610581", "value": "韩城市", "parentId": "610500" }, { "id": "610582", "value": "华阴市", "parentId": "610500" },
/**********延安市********/
{ "id": "610602", "value": "宝塔区", "parentId": "610600" }, { "id": "610621", "value": "延长县", "parentId": "610600" }, { "id": "610622", "value": "延川县", "parentId": "610600" }, { "id": "610623", "value": "子长县", "parentId": "610600" }, { "id": "610624", "value": "安塞县", "parentId": "610600" }, { "id": "610625", "value": "志丹县", "parentId": "610600" }, { "id": "610626", "value": "吴起县", "parentId": "610600" }, { "id": "610627", "value": "甘泉县", "parentId": "610600" }, { "id": "610628", "value": "富县", "parentId": "610600" }, { "id": "610629", "value": "洛川县", "parentId": "610600" }, { "id": "610630", "value": "宜川县", "parentId": "610600" }, { "id": "610631", "value": "黄龙县", "parentId": "610600" }, { "id": "610632", "value": "黄陵县", "parentId": "610600" },
/**********汉中市********/
{ "id": "610702", "value": "汉台区", "parentId": "610700" }, { "id": "610721", "value": "南郑县", "parentId": "610700" }, { "id": "610722", "value": "城固县", "parentId": "610700" }, { "id": "610723", "value": "洋县", "parentId": "610700" }, { "id": "610724", "value": "西乡县", "parentId": "610700" }, { "id": "610725", "value": "勉县", "parentId": "610700" }, { "id": "610726", "value": "宁强县", "parentId": "610700" }, { "id": "610727", "value": "略阳县", "parentId": "610700" }, { "id": "610728", "value": "镇巴县", "parentId": "610700" }, { "id": "610729", "value": "留坝县", "parentId": "610700" }, { "id": "610730", "value": "佛坪县", "parentId": "610700" },
/**********榆林市********/
{ "id": "610802", "value": "榆阳区", "parentId": "610800" }, { "id": "610821", "value": "神木县", "parentId": "610800" }, { "id": "610822", "value": "府谷县", "parentId": "610800" }, { "id": "610823", "value": "横山县", "parentId": "610800" }, { "id": "610824", "value": "靖边县", "parentId": "610800" }, { "id": "610825", "value": "定边县", "parentId": "610800" }, { "id": "610826", "value": "绥德县", "parentId": "610800" }, { "id": "610827", "value": "米脂县", "parentId": "610800" }, { "id": "610828", "value": "佳县", "parentId": "610800" }, { "id": "610829", "value": "吴堡县", "parentId": "610800" }, { "id": "610830", "value": "清涧县", "parentId": "610800" }, { "id": "610831", "value": "子洲县", "parentId": "610800" },
/**********安康市********/
{ "id": "610902", "value": "汉滨区", "parentId": "610900" }, { "id": "610921", "value": "汉阴县", "parentId": "610900" }, { "id": "610922", "value": "石泉县", "parentId": "610900" }, { "id": "610923", "value": "宁陕县", "parentId": "610900" }, { "id": "610924", "value": "紫阳县", "parentId": "610900" }, { "id": "610925", "value": "岚皋县", "parentId": "610900" }, { "id": "610926", "value": "平利县", "parentId": "610900" }, { "id": "610927", "value": "镇坪县", "parentId": "610900" }, { "id": "610928", "value": "旬阳县", "parentId": "610900" }, { "id": "610929", "value": "白河县", "parentId": "610900" },
/**********商洛市********/
{ "id": "611002", "value": "商州区", "parentId": "611000" }, { "id": "611021", "value": "洛南县", "parentId": "611000" }, { "id": "611022", "value": "丹凤县", "parentId": "611000" }, { "id": "611023", "value": "商南县", "parentId": "611000" }, { "id": "611024", "value": "山阳县", "parentId": "611000" }, { "id": "611025", "value": "镇安县", "parentId": "611000" }, { "id": "611026", "value": "柞水县", "parentId": "611000" },
/**********兰州市********/
{ "id": "620102", "value": "城关区", "parentId": "620100" }, { "id": "620103", "value": "七里河区", "parentId": "620100" }, { "id": "620104", "value": "西固区", "parentId": "620100" }, { "id": "620105", "value": "安宁区", "parentId": "620100" }, { "id": "620111", "value": "红古区", "parentId": "620100" }, { "id": "620121", "value": "永登县", "parentId": "620100" }, { "id": "620122", "value": "皋兰县", "parentId": "620100" }, { "id": "620123", "value": "榆中县", "parentId": "620100" },
/**********嘉峪关市********/
{ "id": "620201", "value": "嘉峪关市", "parentId": "620200" },
/**********金昌市********/
{ "id": "620302", "value": "金川区", "parentId": "620300" }, { "id": "620321", "value": "永昌县", "parentId": "620300" },
/**********白银市********/
{ "id": "620402", "value": "白银区", "parentId": "620400" }, { "id": "620403", "value": "平川区", "parentId": "620400" }, { "id": "620421", "value": "靖远县", "parentId": "620400" }, { "id": "620422", "value": "会宁县", "parentId": "620400" }, { "id": "620423", "value": "景泰县", "parentId": "620400" },
/**********天水市********/
{ "id": "620502", "value": "秦州区", "parentId": "620500" }, { "id": "620503", "value": "麦积区", "parentId": "620500" }, { "id": "620521", "value": "清水县", "parentId": "620500" }, { "id": "620522", "value": "秦安县", "parentId": "620500" }, { "id": "620523", "value": "甘谷县", "parentId": "620500" }, { "id": "620524", "value": "武山县", "parentId": "620500" }, { "id": "620525", "value": "张家川回族自治县", "parentId": "620500" },
/**********武威市********/
{ "id": "620602", "value": "凉州区", "parentId": "620600" }, { "id": "620621", "value": "民勤县", "parentId": "620600" }, { "id": "620622", "value": "古浪县", "parentId": "620600" }, { "id": "620623", "value": "天祝藏族自治县", "parentId": "620600" },
/**********张掖市********/
{ "id": "620702", "value": "甘州区", "parentId": "620700" }, { "id": "620721", "value": "肃南裕固族自治县", "parentId": "620700" }, { "id": "620722", "value": "民乐县", "parentId": "620700" }, { "id": "620723", "value": "临泽县", "parentId": "620700" }, { "id": "620724", "value": "高台县", "parentId": "620700" }, { "id": "620725", "value": "山丹县", "parentId": "620700" },
/**********平凉市********/
{ "id": "620802", "value": "崆峒区", "parentId": "620800" }, { "id": "620821", "value": "泾川县", "parentId": "620800" }, { "id": "620822", "value": "灵台县", "parentId": "620800" }, { "id": "620823", "value": "崇信县", "parentId": "620800" }, { "id": "620824", "value": "华亭县", "parentId": "620800" }, { "id": "620825", "value": "庄浪县", "parentId": "620800" }, { "id": "620826", "value": "静宁县", "parentId": "620800" },
/**********酒泉市********/
{ "id": "620902", "value": "肃州区", "parentId": "620900" }, { "id": "620921", "value": "金塔县", "parentId": "620900" }, { "id": "620922", "value": "瓜州县", "parentId": "620900" }, { "id": "620923", "value": "肃北蒙古族自治县", "parentId": "620900" }, { "id": "620924", "value": "阿克塞哈萨克族自治县", "parentId": "620900" }, { "id": "620981", "value": "玉门市", "parentId": "620900" }, { "id": "620982", "value": "敦煌市", "parentId": "620900" },
/**********庆阳市********/
{ "id": "621002", "value": "西峰区", "parentId": "621000" }, { "id": "621021", "value": "庆城县", "parentId": "621000" }, { "id": "621022", "value": "环县", "parentId": "621000" }, { "id": "621023", "value": "华池县", "parentId": "621000" }, { "id": "621024", "value": "合水县", "parentId": "621000" }, { "id": "621025", "value": "正宁县", "parentId": "621000" }, { "id": "621026", "value": "宁县", "parentId": "621000" }, { "id": "621027", "value": "镇原县", "parentId": "621000" },
/**********定西市********/
{ "id": "621102", "value": "安定区", "parentId": "621100" }, { "id": "621121", "value": "通渭县", "parentId": "621100" }, { "id": "621122", "value": "陇西县", "parentId": "621100" }, { "id": "621123", "value": "渭源县", "parentId": "621100" }, { "id": "621124", "value": "临洮县", "parentId": "621100" }, { "id": "621125", "value": "漳县", "parentId": "621100" }, { "id": "621126", "value": "岷县", "parentId": "621100" },
/**********陇南市********/
{ "id": "621202", "value": "武都区", "parentId": "621200" }, { "id": "621221", "value": "成县", "parentId": "621200" }, { "id": "621222", "value": "文县", "parentId": "621200" }, { "id": "621223", "value": "宕昌县", "parentId": "621200" }, { "id": "621224", "value": "康县", "parentId": "621200" }, { "id": "621225", "value": "西和县", "parentId": "621200" }, { "id": "621226", "value": "礼县", "parentId": "621200" }, { "id": "621227", "value": "徽县", "parentId": "621200" }, { "id": "621228", "value": "两当县", "parentId": "621200" },
/**********临夏回族自治州********/
{ "id": "622901", "value": "临夏市", "parentId": "622900" }, { "id": "622921", "value": "临夏县", "parentId": "622900" }, { "id": "622922", "value": "康乐县", "parentId": "622900" }, { "id": "622923", "value": "永靖县", "parentId": "622900" }, { "id": "622924", "value": "广河县", "parentId": "622900" }, { "id": "622925", "value": "和政县", "parentId": "622900" }, { "id": "622926", "value": "东乡族自治县", "parentId": "622900" }, { "id": "622927", "value": "积石山保安族东乡族撒拉族自治县", "parentId": "622900" },
/**********甘南藏族自治州********/
{ "id": "623001", "value": "合作市", "parentId": "623000" }, { "id": "623021", "value": "临潭县", "parentId": "623000" }, { "id": "623022", "value": "卓尼县", "parentId": "623000" }, { "id": "623023", "value": "舟曲县", "parentId": "623000" }, { "id": "623024", "value": "迭部县", "parentId": "623000" }, { "id": "623025", "value": "玛曲县", "parentId": "623000" }, { "id": "623026", "value": "碌曲县", "parentId": "623000" }, { "id": "623027", "value": "夏河县", "parentId": "623000" },
/**********西宁市********/
{ "id": "630102", "value": "城东区", "parentId": "630100" }, { "id": "630103", "value": "城中区", "parentId": "630100" }, { "id": "630104", "value": "城西区", "parentId": "630100" }, { "id": "630105", "value": "城北区", "parentId": "630100" }, { "id": "630121", "value": "大通回族土族自治县", "parentId": "630100" }, { "id": "630122", "value": "湟中县", "parentId": "630100" }, { "id": "630123", "value": "湟源县", "parentId": "630100" },
/**********海东地区********/
{ "id": "632121", "value": "平安县", "parentId": "632100" }, { "id": "632122", "value": "民和回族土族自治县", "parentId": "632100" }, { "id": "632123", "value": "乐都县", "parentId": "632100" }, { "id": "632126", "value": "互助土族自治县", "parentId": "632100" }, { "id": "632127", "value": "化隆回族自治县", "parentId": "632100" }, { "id": "632128", "value": "循化撒拉族自治县", "parentId": "632100" },
/**********海北藏族自治州********/
{ "id": "632221", "value": "门源回族自治县", "parentId": "632200" }, { "id": "632222", "value": "祁连县", "parentId": "632200" }, { "id": "632223", "value": "海晏县", "parentId": "632200" }, { "id": "632224", "value": "刚察县", "parentId": "632200" },
/**********黄南藏族自治州********/
{ "id": "632321", "value": "同仁县", "parentId": "632300" }, { "id": "632322", "value": "尖扎县", "parentId": "632300" }, { "id": "632323", "value": "泽库县", "parentId": "632300" }, { "id": "632324", "value": "河南蒙古族自治县", "parentId": "632300" },
/**********海南藏族自治州********/
{ "id": "632521", "value": "共和县", "parentId": "632500" }, { "id": "632522", "value": "同德县", "parentId": "632500" }, { "id": "632523", "value": "贵德县", "parentId": "632500" }, { "id": "632524", "value": "兴海县", "parentId": "632500" }, { "id": "632525", "value": "贵南县", "parentId": "632500" },
/**********果洛藏族自治州********/
{ "id": "632621", "value": "玛沁县", "parentId": "632600" }, { "id": "632622", "value": "班玛县", "parentId": "632600" }, { "id": "632623", "value": "甘德县", "parentId": "632600" }, { "id": "632624", "value": "达日县", "parentId": "632600" }, { "id": "632625", "value": "久治县", "parentId": "632600" }, { "id": "632626", "value": "玛多县", "parentId": "632600" },
/**********玉树藏族自治州********/
{ "id": "632721", "value": "玉树县", "parentId": "632700" }, { "id": "632722", "value": "杂多县", "parentId": "632700" }, { "id": "632723", "value": "称多县", "parentId": "632700" }, { "id": "632724", "value": "治多县", "parentId": "632700" }, { "id": "632725", "value": "囊谦县", "parentId": "632700" }, { "id": "632726", "value": "曲麻莱县", "parentId": "632700" },
/**********海西蒙古族藏族自治州********/
{ "id": "632801", "value": "格尔木市", "parentId": "632800" }, { "id": "632802", "value": "德令哈市", "parentId": "632800" }, { "id": "632821", "value": "乌兰县", "parentId": "632800" }, { "id": "632822", "value": "都兰县", "parentId": "632800" }, { "id": "632823", "value": "天峻县", "parentId": "632800" },
/**********银川市********/
{ "id": "640104", "value": "兴庆区", "parentId": "640100" }, { "id": "640105", "value": "西夏区", "parentId": "640100" }, { "id": "640106", "value": "金凤区", "parentId": "640100" }, { "id": "640121", "value": "永宁县", "parentId": "640100" }, { "id": "640122", "value": "贺兰县", "parentId": "640100" }, { "id": "640181", "value": "灵武市", "parentId": "640100" },
/**********石嘴山市********/
{ "id": "640202", "value": "大武口区", "parentId": "640200" }, { "id": "640205", "value": "惠农区", "parentId": "640200" }, { "id": "640221", "value": "平罗县", "parentId": "640200" },
/**********吴忠市********/
{ "id": "640302", "value": "利通区", "parentId": "640300" }, { "id": "640303", "value": "红寺堡区", "parentId": "640300" }, { "id": "640323", "value": "盐池县", "parentId": "640300" }, { "id": "640324", "value": "同心县", "parentId": "640300" }, { "id": "640381", "value": "青铜峡市", "parentId": "640300" },
/**********固原市********/
{ "id": "640402", "value": "原州区", "parentId": "640400" }, { "id": "640422", "value": "西吉县", "parentId": "640400" }, { "id": "640423", "value": "隆德县", "parentId": "640400" }, { "id": "640424", "value": "泾源县", "parentId": "640400" }, { "id": "640425", "value": "彭阳县", "parentId": "640400" },
/**********中卫市********/
{ "id": "640502", "value": "沙坡头区", "parentId": "640500" }, { "id": "640521", "value": "中宁县", "parentId": "640500" }, { "id": "640522", "value": "海原县", "parentId": "640500" },
/**********乌鲁木齐市********/
{ "id": "650102", "value": "天山区", "parentId": "650100" }, { "id": "650103", "value": "沙依巴克区", "parentId": "650100" }, { "id": "650104", "value": "新市区", "parentId": "650100" }, { "id": "650105", "value": "水磨沟区", "parentId": "650100" }, { "id": "650106", "value": "头屯河区", "parentId": "650100" }, { "id": "650107", "value": "达坂城区", "parentId": "650100" }, { "id": "650109", "value": "米东区", "parentId": "650100" }, { "id": "650121", "value": "乌鲁木齐县", "parentId": "650100" },
/**********克拉玛依市********/
{ "id": "650202", "value": "独山子区", "parentId": "650200" }, { "id": "650203", "value": "克拉玛依区", "parentId": "650200" }, { "id": "650204", "value": "白碱滩区", "parentId": "650200" }, { "id": "650205", "value": "乌尔禾区", "parentId": "650200" },
/**********吐鲁番地区********/
{ "id": "652101", "value": "吐鲁番市", "parentId": "652100" }, { "id": "652122", "value": "鄯善县", "parentId": "652100" }, { "id": "652123", "value": "托克逊县", "parentId": "652100" },
/**********哈密地区********/
{ "id": "652201", "value": "哈密市", "parentId": "652200" }, { "id": "652222", "value": "巴里坤哈萨克自治县", "parentId": "652200" }, { "id": "652223", "value": "伊吾县", "parentId": "652200" },
/**********昌吉回族自治州********/
{ "id": "652301", "value": "昌吉市", "parentId": "652300" }, { "id": "652302", "value": "阜康市", "parentId": "652300" }, { "id": "652323", "value": "呼图壁县", "parentId": "652300" }, { "id": "652324", "value": "玛纳斯县", "parentId": "652300" }, { "id": "652325", "value": "奇台县", "parentId": "652300" }, { "id": "652327", "value": "吉木萨尔县", "parentId": "652300" }, { "id": "652328", "value": "木垒哈萨克自治县", "parentId": "652300" },
/**********博尔塔拉蒙古自治州********/
{ "id": "652701", "value": "博乐市", "parentId": "652700" }, { "id": "652722", "value": "精河县", "parentId": "652700" }, { "id": "652723", "value": "温泉县", "parentId": "652700" },
/**********巴音郭楞蒙古自治州********/
{ "id": "652801", "value": "库尔勒市", "parentId": "652800" }, { "id": "652822", "value": "轮台县", "parentId": "652800" }, { "id": "652823", "value": "尉犁县", "parentId": "652800" }, { "id": "652824", "value": "若羌县", "parentId": "652800" }, { "id": "652825", "value": "且末县", "parentId": "652800" }, { "id": "652826", "value": "焉耆回族自治县", "parentId": "652800" }, { "id": "652827", "value": "和静县", "parentId": "652800" }, { "id": "652828", "value": "和硕县", "parentId": "652800" }, { "id": "652829", "value": "博湖县", "parentId": "652800" },
/**********阿克苏地区********/
{ "id": "652901", "value": "阿克苏市", "parentId": "652900" }, { "id": "652922", "value": "温宿县", "parentId": "652900" }, { "id": "652923", "value": "库车县", "parentId": "652900" }, { "id": "652924", "value": "沙雅县", "parentId": "652900" }, { "id": "652925", "value": "新和县", "parentId": "652900" }, { "id": "652926", "value": "拜城县", "parentId": "652900" }, { "id": "652927", "value": "乌什县", "parentId": "652900" }, { "id": "652928", "value": "阿瓦提县", "parentId": "652900" }, { "id": "652929", "value": "柯坪县", "parentId": "652900" },
/**********克孜勒苏柯尔克孜自治州********/
{ "id": "653001", "value": "阿图什市", "parentId": "653000" }, { "id": "653022", "value": "阿克陶县", "parentId": "653000" }, { "id": "653023", "value": "阿合奇县", "parentId": "653000" }, { "id": "653024", "value": "乌恰县", "parentId": "653000" },
/**********喀什地区********/
{ "id": "653101", "value": "喀什市", "parentId": "653100" }, { "id": "653121", "value": "疏附县", "parentId": "653100" }, { "id": "653122", "value": "疏勒县", "parentId": "653100" }, { "id": "653123", "value": "英吉沙县", "parentId": "653100" }, { "id": "653124", "value": "泽普县", "parentId": "653100" }, { "id": "653125", "value": "莎车县", "parentId": "653100" }, { "id": "653126", "value": "叶城县", "parentId": "653100" }, { "id": "653127", "value": "麦盖提县", "parentId": "653100" }, { "id": "653128", "value": "岳普湖县", "parentId": "653100" }, { "id": "653129", "value": "伽师县", "parentId": "653100" }, { "id": "653130", "value": "巴楚县", "parentId": "653100" }, { "id": "653131", "value": "塔什库尔干塔吉克自治县", "parentId": "653100" },
/**********和田地区********/
{ "id": "653201", "value": "和田市", "parentId": "653200" }, { "id": "653221", "value": "和田县", "parentId": "653200" }, { "id": "653222", "value": "墨玉县", "parentId": "653200" }, { "id": "653223", "value": "皮山县", "parentId": "653200" }, { "id": "653224", "value": "洛浦县", "parentId": "653200" }, { "id": "653225", "value": "策勒县", "parentId": "653200" }, { "id": "653226", "value": "于田县", "parentId": "653200" }, { "id": "653227", "value": "民丰县", "parentId": "653200" },
/**********伊犁哈萨克自治州********/
{ "id": "654002", "value": "伊宁市", "parentId": "654000" }, { "id": "654003", "value": "奎屯市", "parentId": "654000" }, { "id": "654021", "value": "伊宁县", "parentId": "654000" }, { "id": "654022", "value": "察布查尔锡伯自治县", "parentId": "654000" }, { "id": "654023", "value": "霍城县", "parentId": "654000" }, { "id": "654024", "value": "巩留县", "parentId": "654000" }, { "id": "654025", "value": "新源县", "parentId": "654000" }, { "id": "654026", "value": "昭苏县", "parentId": "654000" }, { "id": "654027", "value": "特克斯县", "parentId": "654000" }, { "id": "654028", "value": "尼勒克县", "parentId": "654000" },
/**********塔城地区********/
{ "id": "654201", "value": "塔城市", "parentId": "654200" }, { "id": "654202", "value": "乌苏市", "parentId": "654200" }, { "id": "654221", "value": "额敏县", "parentId": "654200" }, { "id": "654223", "value": "沙湾县", "parentId": "654200" }, { "id": "654224", "value": "托里县", "parentId": "654200" }, { "id": "654225", "value": "裕民县", "parentId": "654200" }, { "id": "654226", "value": "和布克赛尔蒙古自治县", "parentId": "654200" },
/**********阿勒泰地区********/
{ "id": "654301", "value": "阿勒泰市", "parentId": "654300" }, { "id": "654321", "value": "布尔津县", "parentId": "654300" }, { "id": "654322", "value": "富蕴县", "parentId": "654300" }, { "id": "654323", "value": "福海县", "parentId": "654300" }, { "id": "654324", "value": "哈巴河县", "parentId": "654300" }, { "id": "654325", "value": "青河县", "parentId": "654300" }, { "id": "654326", "value": "吉木乃县", "parentId": "654300" },
/**********自治区直辖********/
{ "id": "659001", "value": "石河子市", "parentId": "659001" }, { "id": "659002", "value": "阿拉尔市", "parentId": "659002" }, { "id": "659003", "value": "图木舒克市", "parentId": "659003" }, { "id": "659004", "value": "五家渠市", "parentId": "659004" }];
/* harmony default export */ __webpack_exports__["a"] = ({
    iosProvinces,
    iosCitys,
    iosCountys
});

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app'
});

/***/ })

},["NHnr"]);