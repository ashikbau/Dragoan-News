import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatextNews from "../components/LatextNews";
import LeftNavbar from "../components/LayoutComponents/LeftNavbar";
import RightNavbar from "../components/LayoutComponents/RightNavbar";
import Nvbar from "../components/Nvbar";
import CategoryNews from "../components/pages/CategoryNews";


const HomeLayouts = () => {
    return (
        <div className="font-poppins">
           <header>
            <Header></Header>
           <section  className="w-11/12 mx-auto">
            <LatextNews></LatextNews>
           </section>
           </header>
           <nav className="w-11/12 mx-auto px-2 py-2">
           <Nvbar></Nvbar>
           </nav>
           <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-2">
           <aside className="col-span-3"><LeftNavbar></LeftNavbar></aside>
           <section className="col-span-6"><Outlet></Outlet></section>
           <aside className="col-span-3"><RightNavbar></RightNavbar></aside>
           
           </main>
        </div>
    );
};

export default HomeLayouts;