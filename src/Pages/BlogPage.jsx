import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { appContext } from "../context/appContext";
import BlogDetails from "../components/BlogDetails";

function BlogPage() {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  const {loading, setLoading} = useContext(appContext);
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRealtedBlogs] = useState([]);

  const location = useLocation();
  const navigation = useNavigate();

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    console.log("url is", url);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setBlog(data.blog);
      setRealtedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log("Error Occured");
      setBlog(null);
      setRealtedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div className="py-24 dark:bg-slate-800 dark:text-white">
      <Header />

      <div className="max-w-[720px] px-[25px] mx-auto">
        <div>
          <button
            className="mb-6 border-2 rounded-md border-[#dfdfdf] py-1 px-4 "
            onClick={() => navigation(-1)}
          >
            Back
          </button>
        </div>
        {loading ? (
          <div>
            <p> Loading</p>
          </div>
        ) : blog ? (
          <div className="flex flex-col gap-y-10">
            <BlogDetails post={blog} />
            <h2 className="text-3xl font-bold"> Related Blogs </h2>
            {relatedBlogs.map((post) => (
              <div key={post.id}>
                <BlogDetails post={post} />
              </div>
            ))}
          </div>
        ) : (
          <div>
            <p>No Blog Found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogPage;
