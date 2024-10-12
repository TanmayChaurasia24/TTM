// /src/app.ts
import { Hono } from 'hono';
import userRoutes from './routes/user.routes';
import { authMiddleware } from './middleware/auth.middleware';

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;  
    JWT_SECRET: string;
  };
}>();

app.route('/api', userRoutes);

app.use('/blogs/*', authMiddleware);

app.post("/api/blogs", (c) => {
  return c.text("Hello Hono!");
});

app.put("/api/blogs", (c) => {
  return c.text("Hello Hono!");
});

app.get("/api/blogs/:id", (c) => {
  return c.text("Hello Hono!");
});

export default app;
