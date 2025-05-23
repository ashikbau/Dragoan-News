import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Find Us On</h2>
            
                <div className ="  join flex join-vertical *:bg-base-100 ">
                    <button className="btn join-item justify-start"><FaFacebook></FaFacebook> FaceBook</button>
                    <button className="btn join-item justify-start"><FaTwitter></FaTwitter>Twitter</button>
                    <button className="btn join-item justify-start"><FaGithub></FaGithub>GitHub</button>
                </div>
            
        </div>
    );
};

export default FindUs;