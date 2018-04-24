const graphql = require('graphql')
const {GraphQLString, GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLNonNull, GraphQLBoolean} = graphql
const OMDbType = require('./type/OMDb')
const axios = require('axios')
const API_URL = require('../config')    

/* -------------------------------------------------------------------------- *\
 *  Exposes Root Query GraphQL
\* -------------------------------------------------------------------------- */

const root =  new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    films: {
      type: OMDbType,
      resolve(parentValue, {movie}) {
        return axios.get(`${API_URL}${movie}&apikey=BanMePlz`).then(response => {
          return response.data
        })
      }
    }
  }
})

module.exports = root;
