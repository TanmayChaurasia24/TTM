import { Hono } from 'hono'

const app = new Hono()

app.post('/api/signup', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/signin', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/blog', (c) => {
  return c.text('Hello Hono!')
})

app.put('/api/blog', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/blog/:id', (c) => {
  return c.text('Hello Hono!')
})

export default app
