import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="flex justify-start mt-8 gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className=" font-montserrat text-xl leading-normal text-slate-gray ">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 font-semibold font-palanquin leading-normal text-2xl">
        {name}
      </h3>
      <p className=" font-montserrat  text-coral-red leading-normal font-semibold">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
