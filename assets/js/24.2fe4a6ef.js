(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{185:function(s,n,t){"use strict";t.r(n);var e=t(0),c=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录结构","aria-hidden":"true"}},[s._v("#")]),s._v(" 目录结构")]),s._v(" "),t("p",[s._v("我们也遵循 "),t("strong",[s._v("“约定优于配置”")]),s._v(" 的原则，目录结构如下：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(".\n│\n├── dist\n│   ├── dtc.es.js\n│   ├── dtc.es.min.js\n│   ├── dtc.umd.js\n│   ├── dtc.umd.min.js\n│   ├── dtc.util.es.js\n│   ├── dtc.util.es.min.js\n│   ├── dtc.util.umd.js\n│   ├── dtc.util.umd.min.js\n│   ├── dtc.vis.es.js\n│   ├── dtc.vis.es.min.js\n│   ├── dtc.vis.umd.js\n│   └── dtc.vis.umd.min.js\n│\n├── src\n│   ├── _base\n│   ├── util\n│   │   ├── index.js\n│   │   ├── array\n│   │   │   └── index.js\n│   │   ├── object\n│   │   │   └── index.js\n│   │   ├── common\n│   │   │   └── index.js\n│   │   ├── stroge\n│   │   │   └── index.js\n│   │   └── typeCheck\n│   │       └── index.js\n│   ├── vis\n│   │   └── index.js\n│   ├── index.js\n│   └── .babelrc\n│\n├── .eslintrc\n├── .gitignore\n├── config.js\n├── CHANGELOG.md\n├── LICENSE\n├── package-lock.json\n├── package.json\n├── README.md\n├── rollup.config.js\n└── rollup.config.sub.js\n")])])]),t("ul",[t("li",[t("code",[s._v("config.js")]),s._v(" 在项目构建中一些公共配置")]),s._v(" "),t("li",[t("code",[s._v("rollup.config.js")]),s._v(" "),t("strong",[s._v("rollup")]),s._v("打包配置文件，默认的配置是"),t("code",[s._v("es")]),s._v(",你可以通过参数来控制命令的最终执行方式。")]),s._v(" "),t("li",[t("code",[s._v("rollup.config.sub.js")]),s._v(" 和 "),t("code",[s._v("rollup.config.js")]),s._v(" 作用一样，唯一的区别是，该配置项能把打包以后的代码拆分成小的模块。")]),s._v(" "),t("li",[t("code",[s._v("dist/dtc.es.min.js")]),s._v(" 以"),t("code",[s._v("es")]),s._v("的方式打包的模块，你通过"),t("code",[s._v("npm")]),s._v("安装的话默认就是引入的它了。")]),s._v(" "),t("li",[t("code",[s._v("dist/dtc.es.js")]),s._v(" 以"),t("code",[s._v("es")]),s._v("的方式打包的模块，和 "),t("code",[s._v("dist/dtc.es.min.js")]),s._v(" 的区别是它没有压缩过，默认也不是引入它。")]),s._v(" "),t("li",[t("code",[s._v("src/inde.js")]),s._v(" "),t("code",[s._v("src")]),s._v("目录存放的都是我们写的代码，没有经过压缩，并且有详尽的注释。"),t("code",[s._v("index.js")]),s._v("是"),t("strong",[s._v("总入口")])])]),s._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),t("p",[t("code",[s._v("dist")]),s._v("目录下的其它文件就不一一介绍了，因为我觉得你看文件的名字就知道它是什么意思了。需要说明的是如果按需引入的话请注意文件名。")])]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),t("p",[s._v("没有介绍的文件或者文件夹就不一一介绍了，毕竟一看就知道什么意思了。")])])])}],!1,null,null,null);c.options.__file="directory-structure.md";n.default=c.exports}}]);