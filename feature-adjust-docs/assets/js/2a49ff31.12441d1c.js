"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[573],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||l[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2127:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],p={sidebar_position:2},c="Loading data",d={unversionedId:"getting_started/example_project/loading_data",id:"getting_started/example_project/loading_data",isDocsHomePage:!1,title:"Loading data",description:"If you would like to load toy_shop data to some of your testing DBs, clone our repo//github.com/re-data/re-data",source:"@site/docs/getting_started/example_project/loading_data.md",sourceDirName:"getting_started/example_project",slug:"/getting_started/example_project/loading_data",permalink:"/re-data/feature-adjust-docs/docs/getting_started/example_project/loading_data",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/getting_started/example_project/loading_data.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Welcome to a toy shop!",permalink:"/re-data/feature-adjust-docs/docs/getting_started/example_project/toy_shop_data"},next:{title:"Data Preparation",permalink:"/re-data/feature-adjust-docs/docs/getting_started/example_project/data_preparation"}},s=[],l={toc:s};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"loading-data"},"Loading data"),(0,a.kt)("p",null,"If you would like to load toy_shop data to some of your testing DBs, clone our repo: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/re-data/re-data"},"https://github.com/re-data/re-data"),"\nAnd copy our template of dbt project for this tutorial:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/re-data/re-data\ncd re-data\ncp -r getting_started/toy_shop/ my_toy_shop_tutorial\n")),(0,a.kt)("p",null,"And specify connection to db you would like to use, example postgres connection here:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=~/.dbt/profiles.yml",title:"~/.dbt/profiles.yml"},"toy_shop:\n  target: dev\n  outputs:\n    dev:\n      type: postgres\n      host: xxx\n      user: xxx\n      password: xxx\n      port: 5432\n      dbname: xxx\n      schema: toy_shop\n      threads: 4\n")),(0,a.kt)("p",null,"Make sure you can use schema: toy_shop in your DB."),(0,a.kt)("p",null,"Now you are ready to load load data, you can do it with running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dbt seed\n")))}u.isMDXComponent=!0}}]);