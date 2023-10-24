import React from "react";
import ProductBar from "../components/Home/ProductBar";
import FilterBar from "../components/Home/FilterBar";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div className="w-full bg-green-500 flex flex-shrink-2">
      {/* need work on shrink */}
      <div className="w-full">
      {/* need to give less width */}
      <FilterBar></FilterBar>
      <ProductBar></ProductBar>

      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
