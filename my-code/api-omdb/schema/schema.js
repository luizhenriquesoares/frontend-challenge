const graphql = require('graphql');
const root = require('./rootQuery');
const {GraphQLSchema} = graphql;

/* -------------------------------------------------------------------------- *\
 *  Exports Schemas GraphQL
\* -------------------------------------------------------------------------- */

module.exports = new GraphQLSchema({
    query: root
});