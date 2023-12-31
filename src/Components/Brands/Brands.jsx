import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BrandCard from "./BrandCard";

const Brands = () => {
  const { brands } = useContext(AuthContext);
  return (
    <div className="max-w-screen-xl mx-auto px-5 my-20 uppercase">
      <h2 className="text-5xl text-center my-10 font-bold title-font tracking-wider">
        Our Available Brands
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {brands && brands.map((brand) => (
          <BrandCard key={brand._id} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default Brands;
