import { Link, NavLink, useNavigate } from "react-router-dom";
import userIcon from "../assets/demo-user.png"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Nvbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(user);
    const handleSignOut = () => {
        logOut()
            .then(result => {
                alert('SignOut Successfully')
                navigate("auth/login")
            }).catch((error) => {
                alert('an error happened')
            })


    }
    return (
        <div className="flex justify-between items-center">
            <div></div>
            <div className="nav space-x-4">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/career">Career</NavLink>
                <NavLink to="/about">About</NavLink>

            </div>
            <div className="login flex gap-2 items-center ">
                
                
                <div>
                    <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
                        <img src={`${user? user.photoURL : userIcon}`}  />
                    </div>
                </div>
                
                <p>{user?.displayName}</p>
                </div>


                
                {
                    user ? <button onClick={handleSignOut} className="btn btn-neutral rounded-none">SignOut</button> : <>
                        <Link to="/auth/login" className="btn btn-neutral rounded-none">Login</Link>
                    </>
                }


            </div>
        </div>
    );
};

export default Nvbar;