import { star } from "../assets/icons";

const ReviewCard = ({ customerName, imgURl, feedback, rating }) => {
  return (
    <div className="flex justify-center items-center  flex-col">
      <img
        src={imgURl}
        alt="customer "
        className=" rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 leading-normal info-text max-w-sm">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="rating"
          width={24}
          height={24}
          className=" object-contain m-0"
        />
        <p className=" font-montserrat text-slate-gray text-xl">({rating})</p>
      </div>
      <h3 className="mt-1 font-bold text-3xl font-palanquin text-center">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
