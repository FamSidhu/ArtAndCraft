import React from "react";
import about from "../assets/about.png";

const AboutUs = () => {
  return (
    <div className="bg-white py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Text Column */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mt-6">About Us</h2>
          <br />
          <p className="mb-4 text-gray-800">
            To develop an understanding and appreciation of art’s complex role
            in reflecting and affecting how people relate critically and
            creatively to a changing world.
          </p>
          <p className="mb-4 text-gray-800">
            To take a national leadership role in developing educational
            activities that deepen an understanding of how art work to produce
            meaning and advance knowledge.
          </p>
          <p className="text-gray-800">
            To provide a platform for interdisciplinary thinking and research
            where ideas and practices can be explored and tested.
          </p>
        </div>

        <div className="md:w-1/2 mt-5">
          <img
            src={about}
            alt="About Us"
            className="rounded-lg shadow-md w-3/4 mt-14"
          />
        </div>
      </div>

      <div className="text-center mt-10">
        <h2 className="text-4xl font-bold">Our Mission</h2>
        <br />
        <p className="mb-4 text-gray-800">
          To develop an understanding and appreciation of art’s complex role in
          reflecting and affecting how people relate critically and creatively
          to a changing world.
        </p>
        <p className="mb-4 text-gray-800">
          To take a national leadership role in developing educational
          activities that deepen an understanding of how art work to produce
          meaning and advance knowledge.
        </p>
        <p className="text-gray-800">
          To provide a platform for interdisciplinary thinking and research
          where ideas and practices can be explored and tested.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
