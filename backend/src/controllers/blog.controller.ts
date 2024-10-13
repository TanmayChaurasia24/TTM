import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";

export const create_blog = async (c: Context) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  if (!body.title) {
    return c.json(
      {
        message: "title is required",
      },
      500
    );
  }

  if (!body.content) {
    return c.json(
      {
        message: "content is required",
      },
      500
    );
  }

  try {
    const created_blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: "1",
      },
    });

    if (!created_blog) {
      return c.json(
        {
          message: "Failed to create blog post",
        },
        500
      );
    }

    return c.json(
      {
        message: "Blog post created successfully",
        blogid: created_blog.id,
        authorid: created_blog.authorId,
      },
      201
    );
  } catch (error: any) {
    return c.json({ message: error.message }, 500);
  }
};

export const update_blog = async (c: Context) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  if (!body.title) {
    return c.json(
      {
        message: "title is required",
      },
      500
    );
  }

  if (!body.content) {
    return c.json(
      {
        message: "content is required",
      },
      500
    );
  }

  try {
    const updated_blog = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    if (!updated_blog) {
      return c.json(
        {
          message: "Failed to update blog post",
        },
        500
      );
    }

    return c.json(
      {
        message: "Blog post updated successfully",
        blogid: updated_blog.id,
        authorid: updated_blog.authorId,
      },
      201
    );
  } catch (error: any) {
    return c.json({ message: error.message }, 500);
  }
};

export const get_blog = async (c: Context) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const curr_blog = await prisma.post.findFirst({
      where: {
        id: body.id,
      },
    });

    if (!curr_blog) {
      return c.json(
        {
          message: "Failed to fetch blog post",
        },
        500
      );
    }

    return c.json(
      {
        curr_blog,
      },
      201
    );
  } catch (error: any) {
    return c.json({ message: error.message }, 500);
  }
};

export const get_all_blogs = async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const all_post = await prisma.post.findMany();

    if (!all_post) {
      return c.json(
        {
          message: "Failed to fetch all blog posts",
        },
        500
      );
    }

    return c.json(
      {
        all_post,
      },
      201
    );
  } catch (error: any) {
    return c.json(
      {
        error: error.message,
      },
      500
    );
  }
};
