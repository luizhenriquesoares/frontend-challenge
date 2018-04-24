const graphql = require('graphql')
const {GraphQLString, GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLNonNull, GraphQLBoolean} = graphql

const ratings = () => {
  return {
    type: new GraphQLList(RatingsType),
    resolve: obj => {
      return obj.Ratings;
    }
  };
}

const RatingsType = new GraphQLObjectType({
  name: "RatingsType",
  fields: () => ({
    Source: { type: GraphQLString },
    Value: { type: GraphQLString}
  })
});

const OMDbType = new GraphQLObjectType({
  name: 'OMDbType',
  description: 'this represent OMDbType',
  fields: () => ({
    Title: { type: GraphQLString},
    Year: { type: GraphQLString},
    Released: { type: GraphQLString},
    Genre: { type: GraphQLString},
    Director: { type: GraphQLString},
    Writer: { type: GraphQLString},
    Actors: { type: GraphQLString},
    Plot: { type: GraphQLString},
    Language: { type: GraphQLString},
    Awards: { type: GraphQLString},
    Poster: { type: GraphQLString},
    ratings: ratings(),
    Metascore: { type: GraphQLString},
    imdbRating: { type: GraphQLString},
    imdbVotes: { type: GraphQLString},
    imdbID: { type: GraphQLString},
    Type: { type: GraphQLString},
    totalSeasons: { type: GraphQLString},
    Response: { type: GraphQLString},
  })
})

module.exports = OMDbType