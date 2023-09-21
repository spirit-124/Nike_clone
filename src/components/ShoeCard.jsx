const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleChange = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={` border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } `}
      onClick={handleChange}
    >
      <div className="flex justify-center items-center bg-card bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img src={imgURL.thumbnail} alt="shoe collection" />
      </div>
    </div>
  );
};

export default ShoeCard;
