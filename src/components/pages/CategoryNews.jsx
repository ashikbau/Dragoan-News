import { useLoaderData } from "react-router";
import NewsCards from "../NewsCards";



const CategoryNews = () => {
const {data:news} = useLoaderData();


    

    return (
        <div>
           <h2 className="font-semibold mb-3">Dragoan News Home</h2>
           <p className="text-gray-400 text-sm">{news.length} News Found on this Category</p>
           <div>
            {
                news.map(singleNews => <NewsCards key={singleNews._id} news={singleNews}></NewsCards>)
            }

           </div>
        </div>
    );
};

export default CategoryNews;