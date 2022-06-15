const express = require("express");
const {ApolloServer, gql} = require('apollo-server-express');

let world = require("./world");

//resolv user game file
function readUserWorld(user) {
    const fs = require("fs")
    try {
        const data = fs.readFileSync("userworlds/"+user+"-world.json");
        return JSON.parse(data);
    } catch (error) {
        return world;
    }
}

// Construct a schema, using GraphQL schema language
const typeDefs = require("./graphql/schemas");

// Provide resolver functions for your schema fields
const resolvers = require("./graphql/resolver");

//server de jeu
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({req}) => ({
        world: readUserWorld(req.headers['x-user']),
        user: req.headers['x-user'],
    })
})
const app = express();
app.use(express.static('public'));

//server lanceur
server.start().then(res => {
    server.applyMiddleware({app});
    app.listen({port: 4000}, () =>
        console.log(`🚀 Server ready at
http://localhost:4000${server.graphqlPath}`)
    );
})
