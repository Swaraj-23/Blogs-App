import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";


export const appContext = createContext();

export default function AppContextProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);
    const[theme, setTheme] = useState("light");
    const navigation = useNavigate();

    // data filling 

    async function fetchBlogPosts(page=1, tag=null, category){
        setLoading(true);
        let url = `${baseUrl}?page=${page}` ;
        if(tag){
            url += `&tag=${tag}` ;
        }
        if(category){
            url += `&category=${category}` ;
        }

        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPage(data.totalPages);
        }

        catch(error) {
            console.log("error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPage(null);
        }
        setLoading(false);
    } 


    function handlePageChange(page) {
        navigation({search: `?page=${page}`})
        setPage(page);
    }

    function handleThemeSwitch()
    {
        setTheme(theme === "dark" ? "light" : "dark");

        const checkbox = document.getElementById("dark-toggle");
        const dot = document.querySelector(".dot");

        dot.style.transform = checkbox.checked ? "translateX(100%)" : "translateX(0)";
    }

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPage,
        setTotalPage,
        fetchBlogPosts,
        handlePageChange,
        theme,
        setTheme,
        handleThemeSwitch
    };

    return <appContext.Provider value={value}>
        {children}
    </appContext.Provider> 

}