webpackJsonp([0x7d2399b50310],{234:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var c=r(3),i=n(c),l=r(2),p=n(l),f=r(28),s=n(f),d=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props.data.contentfulProduct,t=e.productName,r=e.productDescription,n=e.image;return i.default.createElement("div",{style:{padding:"50px"}},i.default.createElement("h1",null,t.productName),i.default.createElement("img",{src:n[0].responsiveResolution.src,alt:t.productName}),i.default.createElement("div",{dangerouslySetInnerHTML:{__html:r.childMarkdownRemark.html}}),i.default.createElement(s.default,{to:"/example"},"GO BACK"))},t}(c.Component);d.propTypes={data:p.default.object.isRequired},t.default=d;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-product-js-bb011f6f5a50a4ed34ff.js.map