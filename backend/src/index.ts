import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/extension'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: String
  }
}>()

app.post('/api/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate)

  const body = await c.req.json();

  const created_user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    }
  })


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
