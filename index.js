const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./schema')
const { products, categories, reviews } = require('./data')
const { Query, Mutation, Category, Product } = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Mutation, Product, Category },
  context: { products, categories, reviews },
})

server.listen().then(({ url }) => {
  console.log(`Server is ready at ${url}`)
})
