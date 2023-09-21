import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section id="products " className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-bold font-palanquin font-bold">
          Our &nbsp;
          <span className="text-coral-red">Popular</span>
          &nbsp; Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch qualityand style with our sought-after
          selections. Discover a world of confort, desig and value.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <>
            <PopularProductCard
              imgURL={product.imgURL}
              name={product.name}
              price={product.price}
            />
          </>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
