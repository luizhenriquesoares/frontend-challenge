require("source-map-support").install(),exports.id=0,exports.modules={"./schema/schema.js":function(e,r,t){"use strict";t.r(r);var a=t("axios"),p=t.n(a),i=t("graphql"),n=new i.GraphQLObjectType({name:"Films",description:"this represent Films",fields:function(){return{id:{type:i.GraphQLString},Title:{type:i.GraphQLString}}}}),s=new i.GraphQLObjectType({name:"RootQueryType",fields:{films:{type:n,args:{id:{type:i.GraphQLString,Title:{type:i.GraphQLString}}},resolve:function(e,r){return p.a.get("http://www.omdbapi.com/?t=game&apikey=BanMePlz").then(function(e){return e.data})}}}});console.log({GraphQLSchema:i.GraphQLSchema});var o=new i.GraphQLSchema({query:s});r.default=o}};
//# sourceMappingURL=0.d03896453f16f8a41d44.hot-update.js.map