!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react"),require("type-r"),require("prop-types")):"function"==typeof define&&define.amd?define(["exports","react","type-r","prop-types"],e):e(t.ReactMVx={},t.React,t.Nested,t.PropTypes)}(this,function(t,e,n,o){"use strict";function r(t,e){var o=this.prototype,r=t.state,i=t.State;if("function"==typeof r&&(i=r,r=void 0),r){var s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return b(e,t),e.attributes=r,e=x([n.define],e)}(i||o.State||n.Record);o.State=s}else i&&(o.State=i);(r||i)&&this.mixins.merge([w,O])}function i(t,e){var o=t.store,r=t.Store;if(o&&o instanceof n.Store)this.prototype.store=o,this.mixins.merge([k,j]);else if(o||t.Store){if("function"==typeof o&&(r=o,o=void 0),o){var i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return R(e,t),e.attrbutes=o,e=C([n.define],e)}(r||this.prototype.Store||n.Store);this.prototype.Store=i}else r&&(this.prototype.Store=r);this.mixins.merge([S,O,j])}}function s(t){var e,o,r,i={},s=n.Record.defaults(t).prototype;return s.forEachAttr(s._attributes,function(t,n){if("id"!==n){var s=t.value,c=t.type,p=t.options;if(i[n]=a(c,p.isRequired),p._onChange&&(o||(o={}),o[n]=u(p._onChange)),p.changeHandlers&&p.changeHandlers.length&&(r||(r={}),r[n]=p.changeHandlers),p.changeEvents){r||(r={});var l=r[n]||(r[n]=[]),f="string"==typeof p.changeEvents?p.changeEvents:null;l.push(function(t,e,n){e&&n.stopListening(e),t&&n.listenTo(t,f||t._changeEventName,n.asyncUpdate)})}void 0!==s&&(e||(e={}),e[n]=t.convert(s,void 0,null,{}))}}),{propTypes:i,defaults:e,watchers:o,changeHandlers:r}}function u(t){return"function"==typeof t?t:function(e,n){this[t]&&this[t](e,n)}}function a(t,e){var n=c(t);return e?n.isRequired:n}function c(t){switch(t){case Number:case Number.integer:return o.number;case String:return o.string;case Boolean:return o.bool;case Array:return o.array;case Function:return o.func;case Object:return o.object;case P:return o.node;case T:return o.element;case void 0:case null:return o.any;default:return o.instanceOf(t)}}function p(t,e){var o=t.context,r=t.childContext,i=this.prototype;o&&(i._context=n.tools.defaults(o,e.prototype._context||{}),this.contextTypes=s(o).propTypes),r&&(i._childContext=n.tools.defaults(r,e.prototype._childContext),this.childContextTypes=s(r).propTypes)}function l(t){var e=Object.keys(t),n=new Function("p","s","\n        var v;\n        this._s = s && s._changeToken;\n        "+e.map(function(t){return"\n            this."+t+" = ( ( v = p."+t+") && v._changeToken ) || v;\n        "}).join("")+"\n    ");return n.prototype._hasChanges=new Function("p","s","\n        var v;\n        return ( s && s._changeToken !== this._s ) "+e.map(function(t){return" ||\n            this."+t+" !== ( ( ( v = p."+t+") && v._changeToken ) || v )\n        "}).join("")+";\n    "),n}function f(){this._propsChangeTokens=new this.PropsChangeTokens(this.props,this.state)}function h(t,e){var o=t.props,r=t.pureRender,i=this.prototype;if(o){i._props=n.tools.defaults(o,e.prototype._props||{});var u=s(o),a=u.propTypes,c=u.defaults,p=u.watchers,f=u.changeHandlers;this.propTypes=a,c&&(this.defaultProps=c),p&&(i._watchers=p,this.mixins.merge([M])),f&&(i._changeHandlers=f,this.mixins.merge([U])),i.pureRender&&(i.PropsChangeTokens=l(o))}r&&this.mixins.merge([A])}function v(t,e,n){var o=t._changeHandlers;for(var r in o)if(e[r]!==n[r])for(var i=0,s=o[r];i<s.length;i++)(0,s[i])(n[r],e[r],t)}function y(t,e){i.call(this,t,e),r.call(this,t,e),p.call(this,t,e),h.call(this,t,e),n.Messenger.onDefine.call(this,t,e)}function d(t){if(t&&"object"==typeof t)switch(Object.getPrototypeOf(t)){case D:return V;case W:return L}return E}function m(t){return t._links||(t._links=new t.AttributesCopy({}))}function _(t,e,n){var o=t[n],r=e[n];return o&&o.value===r?o:t[n]=new Q(e,n,r)}function g(){return!1}var b=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),x=function(t,e,n,o){var r,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var u=t.length-1;u>=0;u--)(r=t[u])&&(s=(i<3?r(s):i>3?r(e,n,s):r(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},w={_initializeState:function(){var t=this.state=this.props.__keepState||new this.State;t._owner=this,t._ownerKey="state"},context:{_nestedStore:n.Store},getStore:function(){var t,e;return(t=this.context)&&t._nestedStore||(e=this.state)&&e._defaultStore},componentWillUnmount:function(){var t=this.state;t._owner=t._ownerKey=void 0,this._preventDispose||t.dispose(),this.state=void 0}},O={_onChildrenChange:function(){},componentDidMount:function(){this._onChildrenChange=this.asyncUpdate}},R=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),C=function(t,e,n,o){var r,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var u=t.length-1;u>=0;u--)(r=t[u])&&(s=(i<3?r(s):i>3?r(e,n,s):r(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},j={childContext:{_nestedStore:n.Store},getChildContext:function(){return{_nestedStore:this.store}},getStore:function(){return this.store},get:function(t){var e=w.getStore.call(this,t);return e&&e.get(t)}},k={componentDidMount:function(){this.listenTo(this.store,"change",this.asyncUpdate)}},S={componentWillMount:function(){var t=this.store=new this.Store;t._owner=this,t._ownerKey="store"},componentWillUnmount:function(){this.store._ownerKey=this.store._owner=void 0,this.store.dispose(),this.store=void 0}},P=function(){return function(){}}(),T=function(){return function(){}}(),A={shouldComponentUpdate:function(t){return this._propsChangeTokens._hasChanges(t)},componentDidMount:f,componentDidUpdate:f},U={componentDidMount:function(){v(this,{},this.props)},componentDidUpdate:function(t){v(this,t,this.props)},componentWillUnmount:function(){v(this,this.props,{})}},M={componentWillReceiveProps:function(t){var e=this,n=e._watchers,o=e.props;for(var r in n)t[r]!==o[r]&&n[r].call(this,t[r],r)},componentWillMount:function(){var t=this,e=t._watchers,n=t.props;for(var o in e)e[o].call(this,n[o],o)}},D=Array.prototype,W=Object.prototype,E={clone:function(t){return t},map:function(t,e){return[]},remove:function(t){return t}},L={map:function(t,e){var n=[];for(var o in t.value){var r=e(t.at(o),o);void 0===r||n.push(r)}return n},remove:function(t,e){return delete t[e],t},clone:function(t){var e={};for(var n in t)e[n]=t[n];return e}},V={clone:function(t){return t.slice()},remove:function(t,e){return t.splice(e,1),t},map:function(t,e){for(var n=t.value.length,o=Array(n),r=0,i=0;r<n;r++){var s=e(t.at(r),r);void 0===s||(o[i++]=s)}return o.length===i||(o.length=i),o}},q=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),H=function(){function t(t){this.value=t}return t.value=function(t,e){return new F(t,e)},Object.defineProperty(t.prototype,"validationError",{get:function(){return this.error},enumerable:!0,configurable:!0}),t.prototype.onChange=function(t){var e=this;return new N(this,function(n){t(n),e.set(n)})},Object.defineProperty(t.prototype,"props",{get:function(){var t=this;return"boolean"==typeof this.value?{checked:this.value,onChange:function(e){return t.set(Boolean(e.target.checked))}}:{value:this.value,onChange:function(e){return t.set(e.target.value)}}},enumerable:!0,configurable:!0}),t.prototype.requestChange=function(t){this.set(t)},t.prototype.update=function(t,e){var n=t(this.clone(),e);void 0===n||this.set(n)},t.prototype.pipe=function(t){var e=this;return new N(this,function(n){var o=t(n,e.value);void 0===o||e.set(o)})},t.prototype.action=function(t){var e=this;return function(n){return e.update(t,n)}},t.prototype.equals=function(t){return new B(this,t)},t.prototype.enabled=function(t){return new K(this,t||"")},t.prototype.contains=function(t){return new z(this,t)},t.prototype.push=function(){var t=V.clone(this.value);Array.prototype.push.apply(t,arguments),this.set(t)},t.prototype.unshift=function(){var t=V.clone(this.value);Array.prototype.unshift.apply(t,arguments),this.set(t)},t.prototype.splice=function(){var t=V.clone(this.value);Array.prototype.splice.apply(t,arguments),this.set(t)},t.prototype.map=function(t){return d(this.value).map(this,t)},t.prototype.removeAt=function(t){var e=this.value,n=d(e);this.set(n.remove(n.clone(e),t))},t.prototype.at=function(t){return new G(this,t)},t.prototype.clone=function(){var t=this.value;return d(t).clone(t)},t.prototype.pick=function(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e];t[n]=new G(this,n)}return t},t.prototype.check=function(t,e){return this.error||t(this.value)||(this.error=e||t.error||I),this},t}(),F=function(t){function e(e,n){var o=t.call(this,e)||this;return o.set=n,o}return q(e,t),e.prototype.set=function(t){},e}(H),N=function(t){function e(e,n){var o=t.call(this,e.value)||this;o.set=n;var r=e.error;return r&&(o.error=r),o}return q(e,t),e.prototype.set=function(t){},e}(H),B=function(t){function e(e,n){var o=t.call(this,e.value===n)||this;return o.parent=e,o.truthyValue=n,o}return q(e,t),e.prototype.set=function(t){this.parent.set(t?this.truthyValue:null)},e}(H),K=function(t){function e(e,n){var o=t.call(this,null!=e.value)||this;return o.parent=e,o.defaultValue=n,o}return q(e,t),e.prototype.set=function(t){this.parent.set(t?this.defaultValue:null)},e}(H),z=function(t){function e(e,n){var o=t.call(this,e.value.indexOf(n)>=0)||this;return o.parent=e,o.element=n,o}return q(e,t),e.prototype.set=function(t){var e=this,n=Boolean(t);if(this.value!==n){var o=this.parent.value,r=t?o.concat(this.element):o.filter(function(t){return t!==e.element});this.parent.set(r)}},e}(H),I="Invalid value",G=function(t){function e(e,n){var o=t.call(this,e.value[n])||this;return o.parent=e,o.key=n,o}return q(e,t),e.prototype.remove=function(){this.parent.removeAt(this.key)},e.prototype.set=function(t){var e=this;this.value!==t&&this.parent.update(function(n){return n[e.key]=t,n})},e}(H),J=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();n.Mixable.mixins.populate(H),n.MixinsState.get(n.Record).merge([{linkAt:function(t){return _(m(this),this,t)},linkPath:function(t,e){return new X(this,t,e)},linkAll:function(){var t=m(this);if(arguments.length)for(var e=0;e<arguments.length;e++)_(t,this,arguments[e]);else{var n=this.attributes;for(var o in n)void 0===n[o]||_(t,this,o)}return t}}]);var Q=function(t){function e(e,n,o){var r=t.call(this,o)||this;return r.record=e,r.attr=n,r}return J(e,t),e.prototype.set=function(t){this.record[this.attr]=t},Object.defineProperty(e.prototype,"error",{get:function(){return void 0===this._error?this.record.getValidationError(this.attr):this._error},set:function(t){this._error=t},enumerable:!0,configurable:!0}),e}(H),X=function(t){function e(e,n,o){var r=t.call(this,e.deepGet(n))||this;return r.record=e,r.path=n,r.options=o,r}return J(e,t),Object.defineProperty(e.prototype,"error",{get:function(){return void 0===this._error&&(this._error=this.record.deepValidationError(this.path)||null),this._error},set:function(t){this._error=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_changeToken",{get:function(){return this.record._changeToken},enumerable:!0,configurable:!0}),e.prototype.set=function(t){this.record.deepSet(this.path,t,this.options)},e}(H);n.MixinsState.get(n.Record.Collection).merge([{linkContains:function(t){return new Y(this,t)},linkAt:function(t){var e=this;return H.value(this[t],function(n){return e[t]=n})}}]);var Y=function(t){function e(e,n){var o=t.call(this,Boolean(e._byId[n.cid]))||this;return o.collection=e,o.record=n,o}return J(e,t),e.prototype.set=function(t){this.collection.toggle(this.record,t)},e}(H),Z=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),$=function(t,e,n,o){var r,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var u=t.length-1;u>=0;u--)(r=t[u])&&(s=(i<3?r(s):i>3?r(e,n,s):r(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},tt=function(t){function e(e,n){var o=t.call(this,e,n)||this;return o._initializeState(),o}return Z(e,t),e.prototype.linkAt=function(t){return this.state.linkAt(t)},e.prototype.linkAll=function(){var t=this.state;return t.linkAll.apply(t,arguments)},e.prototype.linkPath=function(t){return this.state.linkPath(t)},Object.defineProperty(e.prototype,"links",{get:function(){return this.state._links},enumerable:!0,configurable:!0}),e.prototype._initializeState=function(){this.state=null},e.prototype.assignToState=function(t,e){this.state.assignFrom((n={},n[e]=t,n));var n},e.prototype.componentWillUnmount=function(){this.dispose()},e.prototype.transaction=function(t){var e=this.shouldComponentUpdate,n=e!==g;n&&(this.shouldComponentUpdate=g);var o=this,r=o.state,i=o.store,s=i?function(e){return i.transaction(function(){return t(e)})}:t;r?r.transaction(s):s(r),n&&(this.shouldComponentUpdate=e,this.asyncUpdate())},e.prototype.asyncUpdate=function(){this.shouldComponentUpdate===g||this._disposed||this.forceUpdate()},e.onDefine=y,e=$([n.define,n.definitions({state:n.mixinRules.merge,State:n.mixinRules.value,store:n.mixinRules.merge,Store:n.mixinRules.value,props:n.mixinRules.merge,context:n.mixinRules.merge,childContext:n.mixinRules.merge,pureRender:n.mixinRules.protoValue}),n.mixinRules({componentWillMount:n.mixinRules.classLast,componentDidMount:n.mixinRules.classLast,componentWillReceiveProps:n.mixinRules.classLast,componentWillUpdate:n.mixinRules.classLast,componentDidUpdate:n.mixinRules.classLast,componentWillUnmount:n.mixinRules.classFirst,shouldComponentUpdate:n.mixinRules.some,getChildContext:n.mixinRules.defaults}),n.mixins(n.Messenger)],e)}(e.Component);Object.defineProperty(tt.prototype,"isMounted",{value:function(){return!this._disposed}});var et=Object.create(e);et.default=et,et.define=n.define,et.mixins=n.mixins,et.Node=P.value(null),et.Element=T.value(null),et.Link=H,et.Component=tt;var nt=et.assignToState=function(t){return function(e){this.state.assignFrom((n={},n[t]=e&&e instanceof H?e.value:e,n));var n}};t.default=et,t.define=n.define,t.mixins=n.mixins,t.Node=P,t.Element=T,t.Link=H,t.Component=tt,t.assignToState=nt,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=index.js.map
