import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Login = () => {
  const { loginUser,setUser} = useContext(AuthContext);
  
  const [error,setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
   const handleLogin = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email,password)
    .then(result =>{
      const user = result.user;
      setUser(user)
      // console.log(user)
      alert("User login successfully")
       form.reset();
    
       navigate(`${location.state ? location.state : "/"}`);
       
       
    })
     .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    setError(errorCode)
  });


   }
   


 return (

 
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Login your account
        </h2>
        <form onSubmit={handleLogin}  className="card-body">
          <fieldset className="fieldset">
            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* passowrd  */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {/* {error && <p className="text-red-400 text-xs">{error}</p>} */}

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          
            <p className="font-semibold text-center pt-5">
              Dont’t Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/register">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
            



export default Login;