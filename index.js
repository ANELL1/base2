require ('./database')
 require ('dotenv').config()
const {GraphQLServer} = require ('graphql-yoga')
const {makeExecutableSchema}= require ('graphql-tools')
const {importSchema} = require ('graphql-import')
const typeDefs = importSchema('./schema.graphql')
const resolvers = require('./resolvers')
const express = require ('express')
const path = require('path')

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

const app= express()
app.use(express.static(path.join(__dirname,'public')))

const option = {
    endpoint:'/graphql',
    subscriptions: '/subscriptions',
    playground:'/playground'
}
const server= new GraphQLServer({
    schema,
    app,
    context:req =>({...req })

})
const port= process.env.port ||8000
server.start(option,()=>
    console.log('servidor levantado en el puerto', port)
)