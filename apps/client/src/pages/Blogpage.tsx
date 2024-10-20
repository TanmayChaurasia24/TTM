"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FloatingDockDemo } from '../components/MenuBarHome';

interface typeblog {
    id: string,
    title: string,
    content: string,
    authorId: string,
    published: boolean
}

const Blogpage = () => {
  const { id } = useParams(); 
  const [blogpost,setblogpost] = useState<typeblog>()
  const jwt = localStorage.getItem('token');

  useEffect(() => {
    const fetchblog = async() => {
        try {
            const response = await axios.get(`http://127.0.0.1:8787/api/b/blogs/${id}`, {
                headers: {
                    Authorization: jwt
                }
            })
            console.log(response);
            if(response) {
                setblogpost(response.data.curr_blog)
            }
        } catch (error) {
            console.log("error in fetching the blog");
            return;
        }
    }
    fetchblog();
  },[])

  return (
    <div className='bg-neutral-950 text-neutral-200 h-[100vh] overflow-hidden'>
      <div className='flex flex-col justify-center items-center gap-4 p-7 mb-16'>
        <div className='text-4xl fixed top-1 mb-10'>{blogpost?.title}</div>
        <hr />
        <div className='w-[70vw] mt-4 h-[80vh] overflow-auto'>{blogpost?.content}</div>
      </div>
      <div className='bottom-4 transform -translate-x-1/2 left-1/2 fixed'>
      <FloatingDockDemo/>
      </div>
    </div>
  );
};

export default Blogpage;
