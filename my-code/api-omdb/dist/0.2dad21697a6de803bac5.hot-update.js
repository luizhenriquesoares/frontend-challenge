require("source-map-support").install(),exports.id=0,exports.modules={"./config/express.js":function(e,s,r){(function(s){var o=r("express"),a=r("body-parser"),n=r("cors"),t=r("morgan"),c=r("errorhandler"),i=r("path").join,p=r("./schema/schema.js"),u=r("express-graphql");e.exports=function(e){e.use(n({credentials:!0,origin:"http://localhost:3030"})),e.use(a.json()),e.use(a.urlencoded({extended:!1})),e.use("/graphql",u({schema:p,graphiql:!0})),e.use(t("dev")),e.use(o.static(i(s,"public"))),e.use(c())}}).call(this,"config")}};
//# sourceMappingURL=0.2dad21697a6de803bac5.hot-update.js.map