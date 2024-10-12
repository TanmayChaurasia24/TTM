import { sign } from 'hono/jwt';
import prisma from '../prisma/client';
export const signup = async (c) => {
    const body = await c.req.json();
    if (!body.email || !body.password) {
        return c.json({ message: "Please provide all credentials properly." }, 400);
    }
    const is_there = await prisma.user.findUnique({
        where: { email: body.email },
    });
    if (is_there) {
        return c.json({ error: "User already exists. Sign up with a different email." }, 400);
    }
    try {
        const created_user = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password,
                username: body.username,
            },
        });
        const token = await sign({ id: created_user.id }, c.env.JWT_SECRET);
        return c.json({ message: "User created successfully", jwt: token });
    }
    catch (error) {
        return c.json({ error: error.message });
    }
};
export const signin = async (c) => {
    const body = await c.req.json();
    if (!body.email || !body.password) {
        return c.json({ message: "Please provide both email and password." }, 400);
    }
    const user = await prisma.user.findUnique({
        where: { email: body.email },
    });
    if (!user) {
        return c.json({ message: "User not found." }, 404);
    }
    if (user.password !== body.password) {
        return c.json({ message: "Invalid password." }, 401);
    }
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ message: "Signin successful", jwt: token });
};
