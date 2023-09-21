import {
  Hero,
  SpecialOffer,
  SuperQuality,
  Footer,
  Subscribe,
  CustomeReviews,
  Services,
  PopularProducts,
} from "./sections";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="realative ">
      <Nav />
      <section className="xl:padding-l padding-b wide:padding-r">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomeReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x padding-t pb-8 bg-black text-white">
        <Footer />
      </section>
    </div>
    // <div className="text-8xl max-lg:text-red-400 text-blue-400">
    //   <h1>Hello</h1>
    // </div>
  );
}

export default App;
