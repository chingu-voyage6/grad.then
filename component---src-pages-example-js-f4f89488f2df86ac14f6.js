webpackJsonp([0x62049d7f4add],{228:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var d=a(3),u=r(d),n=a(2),l=r(n),o=a(29),c=r(o),p=function(e){var t=e.node;return u.default.createElement("li",{key:t.id},u.default.createElement(c.default,{to:t.slug},t.productName.productName),u.default.createElement("img",{src:t.image[0].responsiveResolution.src,alt:t.productName.productName}),u.default.createElement("div",null,t.productDescription.childMarkdownRemark.excerpt))};p.propTypes={node:l.default.object};var f=function(e){var t=e.data;return u.default.createElement("ul",null,t.allContentfulProduct.edges.map(function(e){return u.default.createElement(p,{key:e.node.id,node:e.node})}))};f.propTypes={data:l.default.object},t.default=f;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-example-js-f4f89488f2df86ac14f6.js.map