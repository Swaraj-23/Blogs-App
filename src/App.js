import { useContext, useEffect } from 'react';
import './App.css';
import { appContext } from './context/appContext';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import Home from './Pages/Home';
import BlogPage from './Pages/BlogPage';
import TagPage from './Pages/TagPage';
import CategoryPage from './Pages/CategoryPage';


function App() {

  const{fetchBlogPosts} = useContext(appContext);

  const[searchParams] = useSearchParams();
  const location = useLocation();
  const { theme } = useContext(appContext);

  useEffect(() => {
     const page = searchParams.get("page") ?? 1;

     if(location.pathname.includes("tags"))
     {
        const tag = location.pathname.split("/").at(-1).replace("-"," ");
        fetchBlogPosts(Number(page), tag);
     }
     else if(location.pathname.includes("categories"))
     {
      const category = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPosts(Number(page), null, category);
     }
     else{
      fetchBlogPosts(Number(page));
     }
  },[location.pathname, location.search]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog/:blogId' element={<BlogPage/>}/>
      <Route path='/tags/:tag' element={<TagPage/>}/>
      <Route path='/categories/:category' element={<CategoryPage/>}/>
    </Routes>
  );
}

export default App;
