// /src/routes/userRoutes.ts
import { Hono } from 'hono';
import { authMiddleware } from '../middleware/auth.middleware';
import { create_blog,get_all_blogs,get_blog,update_blog } from '../controllers/blog.controller';

const blogsRoutes = new Hono<{
    Bindings: {
      DATABASE_URL: string;  
      JWT_SECRET: string;
    };
  }>();

blogsRoutes.use('/blogs/*',authMiddleware);

blogsRoutes.post('/blogs',create_blog);
blogsRoutes.put('/blogs',update_blog);
blogsRoutes.get('/blogs/:id',get_blog);
blogsRoutes.get('/blogs',get_all_blogs);

export default blogsRoutes;
