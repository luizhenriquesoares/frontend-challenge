require("source-map-support").install(),exports.id=0,exports.modules={"./schema/schema.js":function(e,t,r){"use strict";r.r(t);var a=r("axios"),i=r.n(a),n=r("graphql"),p=new n.GraphQLObjectType({name:"Films",description:"this represent Films",fields:function(){return{id:{type:n.GraphQLString},Title:{type:n.GraphQLString}}}}),s=new n.GraphQLObjectType({name:"RootQueryType",fields:{films:{type:p,args:{id:{type:n.GraphQLString,Title:{type:n.GraphQLString}}},resolve:function(e,t){return i.a.get("http://www.omdbapi.com/?t=game&apikey=BanMePlz").then(function(e){return e.data})}}}});console.log(Object(n.GraphQLSchema)());var o=new n.GraphQLSchema({query:s});t.default=o}};
//# sourceMappingURL=0.9d2adc8df0846548a64c.hot-update.js.map