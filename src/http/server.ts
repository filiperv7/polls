import fastify from 'fastify'

const app = fastify()

app.get('/', (req, res) => {
  return {
    message: 'Hello World'
  }
})

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server listening on http://localhost:3333 !')
})
