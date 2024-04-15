import Image from "next/image";
import React from "react";

const FeatureProduct = ({ imgSrc, title, desc }) => {
  return (
    <div>
      <Image
        src={imgSrc}
        width={100}
        height={100}
        alt="features"
        className="mx-auto"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="container mx-auto px-5 md:px-16" id="features">
      <span className="service-name text-center">WHAT WE OFFER</span>

      <div className="flex gap-8 md:grid-cols-2 lg:grid-cols-4 bg-origin-padding text-center mt-10 md:mt-20 mx-auto justify-center">
        <FeatureProduct
          imgSrc="/features/1.svg"
          title="Affordability"
          desc="connect your therapist cheaper"
        />
        <FeatureProduct
          imgSrc="/features/2.svg"
          title="Licensed"
          desc="Therapists are licensed"
        />
        <FeatureProduct
          imgSrc="/features/3.svg"
          title="No language barrier"
          desc="Multiple languages."
        />
      </div>
    </section>
  );
};

export default Features;
