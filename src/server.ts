import fastify from "fastify";

const app = fastify();

app.get('/hello', ()=>{
  return 'Helloworld'
})

app.listen({
  port:3333,
}).then(()=>{
  console.log('Http server running')
})
