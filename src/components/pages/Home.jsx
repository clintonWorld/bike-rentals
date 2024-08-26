import React, { useEffect } from "react";
import Navbar from "../common/Navbar";
import Hero from "../uncommon/Hero";
import Earn from "../common/Earn";
import Maps from "../uncommon/Maps";
import RevealOnScroll from "../animation/RevealOnScroll";
import Footer from "../common/Footer";
import "../../app.css";

const Home = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <RevealOnScroll>
        <Hero />
      </RevealOnScroll>
      <RevealOnScroll>
        <div>
          <Earn
            title="Earn With Us"
            description="      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil unde ea, cumque fugit ad quisquam neque facere rerum necessitatibus nostrum, dolores nesciunt non, obcaecati sed ratione ipsam nemo ut magnam?
      Voluptatem voluptatum fuga sint perspiciatis corporis nihil harum tempora deleniti sed porro! Odit nemo recusandae expedita, est praesentium commodi. Nam ex esse laboriosam dolorem nisi laudantium nemo necessitatibus cumque voluptatibus!
      Voluptatibus, eveniet sit quas dolorem quidem itaque repellendus, officiis nemo tempore modi fugiat velit nihil voluptas inventore vel quos dicta? Accusamus ab consectetur velit adipisci labore blanditiis optio accusantium quaerat  "
            image="cardRenter.jpg"
          />
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <Maps />
      </RevealOnScroll>
      <RevealOnScroll>
        <Earn
          title="Rent a bike"
          description=" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "
          image="motorbike.avif"
        />
      </RevealOnScroll>
      <Footer />.
    </div>
  );
};

export default Home;
