import RootQuery from './root-query'
import { GraphQLSchema } from 'graphql'

/* -------------------------------------------------------------------------- *\
 *  Exports Schemas GraphQL
\* -------------------------------------------------------------------------- */

const graphqlSchema = new GraphQLSchema({
  query: RootQuery
})

export default graphqlSchema
