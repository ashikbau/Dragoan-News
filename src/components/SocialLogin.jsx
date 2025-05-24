import { useContext, useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { signInWithGoogle, setUser, updateUser ,signInWithFaceBook} = useContext(AuthContext);
    // const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                setUser(user);
                alert("User login successfully by Google")
                form.reset();

                navigate(`${location.state ? location.state : "/"}`);

            })
            .catch((error) => {
                const errorCode = error.Code;
                const errorMessage = error.message;
                console.log(errorMessage)
                // setError(errorCode)
            })



    }
    const handleFaceBookSignIn = () => {
        signInWithFaceBook()
            .then(result => {
                const user = result.user;
                setUser(user);
                alert("User login successfully by Facebook")
                form.reset();

                navigate(`${location.state ? location.state : "/"}`);

            })
            .catch((error) => {
                const errorCode = error.Code;
                const errorMessage = error.message;
                console.log(errorMessage)
                
            })



    }


    return (
        <div>
            <h2 className="font-semibold mb-3">Login with</h2>
            <div className="*:w-full space-y-2">
                <button onClick={handleGoogleSignIn} className="btn"><FaGoogle></FaGoogle> Login with Google</button>

                <button onClick={handleFaceBookSignIn} className="btn"><FaFacebook></FaFacebook> Login with Facebook</button>
            </div>
        </div>
    );
};

export default SocialLogin;