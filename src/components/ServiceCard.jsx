const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex flex-col flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="flex justify-center items-center bg-coral-red w-11 h-11 rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className=" font-palanquin mt-5 text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className=" font-montserrat break-words text-2xl leading-normal text-slate-gray mt-3 text-lg">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
