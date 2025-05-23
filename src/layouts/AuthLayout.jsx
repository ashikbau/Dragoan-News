import { Outlet } from "react-router-dom";
import Nvbar from "../components/Nvbar";


const AuthLayout = () => {
    return (
        <div className="font-poppins bg-[#F3F3F3]"> 
            <header className="py-3 w-11/12 mx-auto">
                <Nvbar></Nvbar>
            </header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default AuthLayout;