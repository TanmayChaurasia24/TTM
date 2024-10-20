"use client";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { FloatingDockDemo } from "../components/MenuBarHome";
import { useNavigate } from "react-router-dom";

interface PostType {
  title: string;
  content: string;
  id: string;
  published: boolean;
  authorId: string;
}

interface typeuserdetail {
  username: string;
  email: string;
}

const Profile = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<PostType[]>([]);
  const [userdetail, setuserdetail] = useState<typeuserdetail>();
  const token = localStorage.getItem("token");

  if (!token) {
    console.log("No token found");
    return <div>Please log in to view your profile.</div>;
  }
  const handleblog = (id: string) => {
    navigate(`/blog/${id}`)
  };
  useEffect(() => {

    const fetchPost = async () => {
      try {
        const decoded: any = jwtDecode(token);

        if (!decoded || !decoded.id) {
          throw new Error("Invalid token");
        }
        const authorId = decoded.id;

        const response = await axios.get(
          "http://127.0.0.1:8787/api/b/userblogs",
          {
            headers: {
              id: String(authorId),
            },
          }
        );

        const userResponse = await axios.get(
          "http://127.0.0.1:8787/api/user/detail",
          {
            headers: {
              id: String(authorId),
            },
          }
        );

        if (userResponse?.data?.user) {
          setuserdetail(userResponse.data.user);
        } else {
          console.log("no user found");
        }

        if (response?.data?.result) {
          setPosts(response.data.result);
        } else {
          console.log("No posts found");
        }
      } catch (error) {
        console.log("Error while fetching posts:", error);
      }
    };

    fetchPost();
  }, [token]);

  return (
    <div className="bg-neutral-950 text-white h-[100vh]">
      <div className="flex justify-center items-center h-[100vh]">
        <div className="h-[100%] overflow-auto w-[20vw]">
          <div className="flex justify-center items-center flex-col mt-8">
            <img
              src=""
              className="bg-green-400 h-[15rem] w-[15rem] rounded-[100%]"
              alt="Profile"
            ></img>
            <div className="flex flex-col justify-center items-center gap-4">
              <h1 className="text-3xl font-bold">Profile</h1>
              <div><span className="font-bold">Username:</span> {userdetail?.username}</div>
              <div><span className="font-bold">Email:</span> {userdetail?.email}</div>
            </div>
          </div>
        </div>

        <div className="h-[100%] overflow-auto w-[80vw]">
          <h2 className="text-center text-3xl mt-3">Your Blogs</h2>
          {posts.length > 0 ? (
            posts.map((blog, index) => (
              <div key={index} className="bg-neutral-800 p-4 m-4 rounded-md">
                <h2 className="text-xl font-bold">{blog.title}</h2>
                <p>
                  {blog.content.length > 500
                    ? `${blog.content.substring(0, 500)}...`
                    : blog.content}
                </p>
                <p>{blog.published ? "Published" : "Draft"}</p>
                <button className="border bg-blue-500 text-black rounded-lg p-2 mt-4"
                onClick={() => handleblog(blog.id)}
                >
                  Read More
                </button>
              </div>
            ))
          ) : (
            <div>No posts to display</div>
          )}
        </div>
      </div>
      <div className="fixed bottom-2 transform -translate-x-1/2 left-1/2">
        <FloatingDockDemo />
      </div>
    </div>
  );
};

export default Profile;
