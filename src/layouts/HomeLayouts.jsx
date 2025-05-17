import Header from "../components/Header";
import LatextNews from "../components/LatextNews";
import Nvbar from "../components/Nvbar";


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
           <main className="w-11/12 mx-auto pt-5 grid grid-cols-12">
           <aside className="col-span-3">Left Navbar</aside>
           <section className="col-span-6">Main content</section>
           <aside className="col-span-3">Right Navbar</aside>
           
           </main>
        </div>
    );
};

export default HomeLayouts;