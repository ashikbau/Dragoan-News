import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Register = () => {
const {createUser ,setUser} = useContext(AuthContext);
const navigate = useNavigate();

const handleSignUpUser =(e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    
    createUser (email,password)
    .then(result =>{
        const user = result.user;
        setUser(user);
        alert("User Created Sucessfully");
        navigate("/")

    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
    
  });





}
    

    
    return (
        
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Regester your account
        </h2>
        <form onSubmit={handleSignUpUser} className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />
            {/* Photo */}
           
            <label className="label">PhotoUrl</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="PhotUrl"
              required
            />
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
            

            {/* {error && <p className="text-red-400 text-xs">{error}</p>} */}

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="font-semibold text-center pt-5">
              Already Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
    );
};

export default Register;