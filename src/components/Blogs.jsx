import React, { useContext } from "react";
import { appContext } from "../context/appContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";


function Blogs() {
    //consume

    const {posts, loading} = useContext(appContext);
    console.log(posts);

    return(
        <div className="w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-[65px] mb-[70px] justify-center items-center min-h-screen dark:bg-slate-800 dark:text-white">
            {
                loading ? (<Spinner/>) : (
                    posts.length === 0 ? (<div><p>No Post Found</p> </div>) : (posts.map ( (post) => (
                        <BlogDetails key={post.id} post={post}/>
                    )))
                )
            }
        </div>
    )
}

export default Blogs;