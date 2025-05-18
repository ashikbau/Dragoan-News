import { useLoaderData } from "react-router";



const CategoryNews = () => {
const {data} = useLoaderData();
console.log(data)

    

    return (
        <div>
           <h2>{data.length} News Found on this Category</h2>
        </div>
    );
};

export default CategoryNews;