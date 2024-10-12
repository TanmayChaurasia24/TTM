// /src/routes/userRoutes.ts
import { Hono } from 'hono';
import { signup, signin } from '../controllers/user.controller';
const userRoutes = new Hono();
// User signup route
userRoutes.post('/signup', signup);
// User signin route
userRoutes.post('/signin', signin);
export default userRoutes;
