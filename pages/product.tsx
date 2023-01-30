import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function product(){

  let { id } = useParams();
  const [data, setData] = useState({});

  const fetchData = () => {
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(json => {
      setData(json);
      console.log(json)
    }).catch(err => {
      console.log(err.message);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return(
    <div className="App">
          <a href={'/'} className="p-4 bg-gray-300 rounded-lg hover:bg-gray-800 transition duration-200 text-black self-center absolute top-2 left-2">Back</a>
      <div className="min-w-full flex flex-col lg:flex-row justify-center mt-24 px-2 gap-4">
        <div className="relative">
          <img src={data.thumbnail} alt="" className="m-auto" />
        </div>
        <div className="flex gap-2 flex-col">
          <p className="text-4xl">{data.title}</p>
          <div className="flex flex-col">
            <p className="font-bold text-xl">Price</p>
            <p>{data.price} €</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-xl">Details</p>
            <p>{data.description}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-xl">Price</p>
            <p>{data.rating}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-xl">Category</p>
            <p>{data.category}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-xl">In stock</p>
            <p>{data.stock}</p>
          </div>
        </div>
      </div>
    </div>
  )
}