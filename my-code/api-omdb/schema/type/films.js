import { GraphQLObjectType, GraphQLString } from 'graphql'

const FilmsType = new GraphQLObjectType({
  name: 'Films',
  description: 'this represent Films',
  fields: () => ({
    id: { type: GraphQLString }
  })
})

export default FilmsType
