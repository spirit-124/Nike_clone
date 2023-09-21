import { shoe8 } from "../assets/images";
import Button from "../components/Button";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className=" flex justify-between items-center max-lg:flex-col gap10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin  text-4xl capitalize lg:max-w-lg font-bold">
          We Provide You
          <span className="text-coral-red "> Super </span>
          {/* <br /> */}
          <span className="text-coral-red "> Quality </span>
          &nbsp; Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring Premium confort and style, out meticuoulsy crafted footwear
          are designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex justify-center items-center flex-1">
        <img
          src={shoe8}
          alt="shoe 8"
          height={522}
          width={572}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
