import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import Blogs from "../components/Blogs";

function TagPage() {
  const navigation = useNavigate();
  const location = useLocation();

  const tag = location.pathname.split("/").at(-1);

  return (
    <div className="py-24 dark:bg-slate-800 dark:text-white">
      <Header />

      <div className="max-w-[720px] px-[25px] mx-auto">
        <div className="mb-8 flex items-center gap-3">
          <button
            className="border-2 rounded-md border-[#dfdfdf] py-1 px-4 "
            onClick={() => navigation(-1)}
          >
            Back
          </button>
          <h2 className="font-bold">
            Blogs Tagged <span className="text-blue-700 dark:text-blue-300">#{tag}</span>
          </h2>
        </div>
        <Blogs />
      </div>
      <Pagination />
    </div>
  );
}

export default TagPage;
