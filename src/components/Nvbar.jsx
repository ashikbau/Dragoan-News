import { NavLink } from "react-router-dom";
import userIcon from "../assets/demo-user.png"


const Nvbar = () => {
    return (
        <div className="flex justify-between items-center">
           <div></div>
           <div className="nav space-x-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/career">Career</NavLink>
            <NavLink to="/about">About</NavLink>

           </div>
           <div className="login flex gap-2 items-center">
            <div className="">
                <img src={userIcon}  />
                </div>
                <button className="btn btn-neutral rounded-none">Login</button>
            

           </div>
        </div>
    );
};

export default Nvbar;