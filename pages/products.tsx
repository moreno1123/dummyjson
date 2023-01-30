import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const PER_PAGE = 10;

export default function Products(){

  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://dummyjson.com/products/`)
    .then(res => res.json())
    .then(json => {
      setData(json.products);
    }).catch(err => {
      console.log(err.message);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;

  const currentPageData = data
  .slice(offset, offset + PER_PAGE)
  .map((item, index) => (
    <div className="bg-gray-600 rounded-md flex flex-col text-white" key={index}>
      <div className="flex justify-center">
        <img src={item.thumbnail} alt="" className="m-2 h-64 w-64 object-cover rounded-sm"/>
      </div>
      <div className="w-full flex flex-col justify-center text-center">
        <h1 className="text-xl font-bold break-normal">{item.title}</h1>
        <div className="w-full flex flex-row justify-center my-4">
          <div className="w-full flex justify-around">
            <div className="flex flex-col">
              <p className="text-xl">Price</p>
              <p>{item.price} €</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xl">Rating</p>
              <p>{item.rating}</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center my-4 px-2 rounded-sm">
          <div className="w-full flex justify-around gap-2">
            <a href={'/product/' + item.id} className="w-1/2 p-4 bg-blue-900 rounded-lg hover:bg-gray-800 transition duration-200 text-white">Details</a>
          </div>
        </div>
      </div>    
    </div>
  ));

  const pageCount = Math.ceil(data.length / PER_PAGE);

return(
  <div className="App">
    <div className='min-w-full flex justify-center'>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-2">
        {currentPageData}
      </div>
    </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link text-white"}
        nextLinkClassName={"pagination__link text-white"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active bg-gray-900"}
        pageClassName={"px-2 rounded-full"}
        pageLinkClassName={"text-white"}
        className="flex justify-center gap-4 my-6"
      />
  </div>
)
}