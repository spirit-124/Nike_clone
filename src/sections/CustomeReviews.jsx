import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomeReviews = () => {
  return (
    <section className="max-container">
      <h3 className=" font-palanquin text-center font-bold text-4xl">
        What our
        <span className="text-coral-red">Customers</span>
        says
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className=" mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 ">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURl={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomeReviews;
