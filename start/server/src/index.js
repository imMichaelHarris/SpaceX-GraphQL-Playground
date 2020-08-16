require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const { createStore } = require('./utils');

const LaunchAPI = require('./datasources/launch');
const UserAPI = require('./datasources/user');

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
