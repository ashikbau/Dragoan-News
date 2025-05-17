import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatextNews = () => {
    return (
        <div className="flex gap-2 items-center bg-base-200 p-2">
          <p className="bg-[#D72050] text-base-100 px-2 py-1">Latest</p>
         <Marquee pauseOnHover={true}  className="space-x-10">
            <Link to='/news'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio tenetur</Link>
            <Link to='/news'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio tenetur</Link>
            <Link to='/news'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio tenetur</Link>
            <Link to='/news'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio tenetur</Link>
            <Link to='/news'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio tenetur</Link>
            <Link to='/news'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio tenetur</Link>
         </Marquee>
        </div>
    );
};

export default LatextNews;