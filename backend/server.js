const express = require('express');
const {fetchPokemon} = require('./resolvers/pokemonResolver');
const { ApolloServer, gql } = require('apollo-server-express');

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

const typeDefs = gql`
  type Query {
    hello: String
    pokemon(pokemonId: ID!): Pokemon
  }
  
  type Pokemon {
    id: ID!
    name: String
    baseExperience: Int
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    pokemon: async (parent, args, context, info) => await fetchPokemon(args.pokemonId)
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.start().then(() => {
  server.applyMiddleware({ app });
});

app.listen({ port: 4000 }, () =>
  console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);