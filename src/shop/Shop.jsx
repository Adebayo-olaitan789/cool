import React, { useState } from "react";
import PageHeader from "../components/PageHeader";

const showResults = "Showing 01 - 12 of 139 Results";
import Data from "../products.json";
import ProductCards from "./ProductCards";
import Pagination from "./Pagination";
import Seached from "./Seached";
import ShopCategory from "./ShopCategory";

const Shop = () => {
  const [GridList, setGridList] = useState(true);
  const [products, setproducts] = useState(Data);

  // paggination

  const [currentPage, setcurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOffirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = products.slice(
    indexOffirstProduct,
    indexOfLastProduct
  );

  // function to change the current page
  const paginate = (pageNumber) => {
    setcurrentPage(pageNumber);
  };

  // filter product based on category
  const [selectedCategory, setSelectedCategory] = useState("All");
  const menuItems = [...new Set(Data.map((val) => val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });

    setSelectedCategory(curcat);
    setproducts(newItem);
  };

  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="shop" />
      {/* shop page */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-contant-center">
            <div className="col-lg-8 col-12">
              <article>
                {/* layout and title here */}
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{showResults}</p>
                  <div
                    className={`product-view-mode ${
                      GridList ? "gridActive" : "listActive"
                    }`}
                  >
                    <a className="grid" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>
                {/* products cards */}
                <div>
                  <ProductCards GridList={GridList} products={currentProduct} />
                </div>
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Seached products={products} GridList={GridList} />
                <ShopCategory
                  filterItem={filterItem}
                  setItem={setproducts}
                  menuItems={menuItems}
                  setproducts={setproducts}
                  selectedCategory={selectedCategory}
                />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
