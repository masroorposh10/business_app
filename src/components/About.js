"use client";

import Image from "next/image";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Link from "next/link";

const ServiceCard = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start gap-3 sm:gap-10 lg:w-[90%]">
      <Image
        src={imgSrc}
        width={70}
        height={70}
        alt="features"
        className="mx-auto"
      />
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="leading-loose">{desc}</p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div id="About">
    <section className="relative container pt-6 px-5 md:px-16 mx-auto">
      <div className="flex gap-10 items-center flex-col-reverse lg:flex-row">
        <div className="relative w-full flex-1">
          <img
            src="https://marinwellnesscounseling.com/wp-content/uploads/2021/03/pexels-polina-zimmerman-3958461-scaled-1.jpeg"
            width={300}
            height={300}
            alt="video banner"
            className="object-cover w-full"
          />
        </div>
        <div className="flex gap-5 md:gap-10 flex-col flex-1">
          <div className="py-14">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-semibold mb-4">Who Are We?</h2>
              <p className="text-lg mb-6">
                Our platform connects Indians living abroad with licensed therapists in India, fluent in
                your native language. No more feeling alone in your struggles. We offer affordable and
                culturally sensitive support, because your mental well-being matters, no matter how far
                you’re from home. Although focused on Indians, everyone is welcome to take
                advantage of this service.
              </p>
              <h3 className="text-2xl font-semibold mb-2">We Provide:</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Affordability</li>
                <li>Convenience</li>
                <li>Licensed Therapists</li>
                <li>No language barrier</li>
              </ul>

              <h4 className="font-semibold mb-4">
              <span className="text-red-500">Our therapists</span> have helped over <span className="text-blue-500">1000s</span> of people just like <span className="text-red-500">you.</span>
              </h4>
            </div>
            <Link className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 mx-4" href="#about2">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;
