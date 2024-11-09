import React from "react";
import { FaWifi } from "react-icons/fa";
import { MdNoMeals } from "react-icons/md";
import { MdHomeFilled } from "react-icons/md";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { SiTourbox } from "react-icons/si";
import { FaFlag } from "react-icons/fa6";
import { FaCarAlt } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";

const services = [
  {
    title: "High Speed Internet",
    description: "Fast and reliable internet...",
  },
  { title: "Healthy Meals", description: "Nutritious meals available..." },
 
];

const Services = () => {
  return (
    <div className="my-8">
      <h3 className="text-2xl font-semibold text-center mb-5">Services</h3>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="p-4 border rounded-lg w-64 text-center">
          <FaWifi className="size-16 ml-20 mb-5" />
          <h1 className="font-bold text-xl mb-5">High Speed Internet</h1>
          <p>
            Optical fiber connections provided in not only in your cabins but
            rather to all of the BriSphere scenic working spaces and dinning
            areas.
          </p>
        </div>
        <div className="p-4 border rounded-lg w-64 text-center">
          <MdNoMeals className="size-16 ml-20  mb-5" />
          <h1 className="font-bold text-xl mb-5">Healthy Meals</h1>
          <p>
            A healthy breakfast and pleasant dinner will be serviced at your
            space every single day for your entire duration of stay with option
            of paid order within BriSphere.
          </p>
        </div>
        <div className="p-4 border rounded-lg w-64 text-center">
          <MdHomeFilled className="size-16 ml-20  mb-5" />
          <h1 className="font-bold text-xl mb-5">Homely Stay</h1>
          <p>
            Designed for working professionals with spacious interiors,
            comfortable beds and sleekly attached kitchen are some of the
            comforts providedin your space.
          </p>
        </div>
        <div className="p-4 border rounded-lg w-64 text-center">
          <MdOutlineEmojiTransportation className="size-16 ml-20 mb-5" />
          <h1 className="font-bold text-xl mb-5">Transportation</h1>
          <p>
            Optical fiber connections provided in not only in your cabins but
            rather to all of the BriSphere scenic working spaces and dinning
            areas.
          </p>
        </div>
        <div className="p-4 border rounded-lg w-64 text-center">
          <TbTruckDelivery className="size-16 ml-20  mb-5" />
          <h1 className="font-bold text-xl mb-5">Food Delivery</h1>
          <p>
            Optical fiber connections provided in not only in your cabins but
            rather to all of the BriSphere scenic working spaces and dinning
            areas.
          </p>
        </div>
        <div className="p-4 border rounded-lg w-64 text-center">
          <SiTourbox className="size-16 ml-20  mb-5" />
          <h1 className="font-bold text-xl mb-5">Tourism</h1>
          <p>
            Optical fiber connections provided in not only in your cabins but
            rather to all of the BriSphere scenic working spaces and dinning
            areas.
          </p>
        </div>
        <div className="p-4 border rounded-lg w-64 text-center">
          <FaFlag className="size-16 ml-20 mb-5" />
          <h1 className="font-bold text-xl mb-5">Job</h1>
          <p>
            Optical fiber connections provided in not only in your cabins but
            rather to all of the BriSphere scenic working spaces and dinning
            areas.
          </p>
        </div>
        <div className="p-4 border rounded-lg w-64 text-center">
          <FaCarAlt className="size-16 ml-20 mb-5" />
          <h1 className="font-bold text-xl mb-5">Rental Service</h1>
          <p>
            Optical fiber connections provided in not only in your cabins but
            rather to all of the BriSphere scenic working spaces and dinning
            areas.
          </p>
        </div>
        <div className="p-4 border rounded-lg w-64 text-center">
          <IoCartSharp className="size-16 ml-20 mb-5" />
          <h1 className="font-bold text-xl mb-5">Online Shop</h1>
          <p>
            Optical fiber connections provided in not only in your cabins but
            rather to all of the BriSphere scenic working spaces and dinning
            areas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
