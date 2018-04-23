import axios from 'axios'
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql'
import FilmsType from './type/films'

/* -------------------------------------------------------------------------- *\
 *  Exposes Root Query GraphQL
\* -------------------------------------------------------------------------- */

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getUser: {
      type: FilmsType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(parentValue, args, req) {
        return 'helloword'
      }
    }
  }
})

export default RootQuery
