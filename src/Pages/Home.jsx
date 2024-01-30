import Blogs from "../components/Blogs";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

function Home()
{
    return(
        <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center dark:bg-slate-800 dark:text-white ">
            <Header/>
            <Blogs/>
            <Pagination/>
        </div>
    )
}

export default Home;
