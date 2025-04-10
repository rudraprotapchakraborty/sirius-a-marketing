import { FC } from "react";
import {
  FaBuilding,
  FaBriefcaseMedical,
  FaLaptopCode,
  FaDumbbell,
  FaShoppingCart,
  FaGamepad,
  FaUtensils,
  FaProjectDiagram,
  FaSuitcaseRolling,
  FaPhoneAlt,
  FaGlobe,
} from "react-icons/fa";

const industries = [
  { name: "Dentist", icon: FaBriefcaseMedical },
  { name: "Ecommerce", icon: FaShoppingCart },
  { name: "Entertainment", icon: FaGamepad },
  { name: "Events", icon: FaProjectDiagram },
  { name: "Fitness & Nutrition", icon: FaDumbbell },
  { name: "Food", icon: FaUtensils },
  { name: "Luxury", icon: FaSuitcaseRolling },
  { name: "Retail", icon: FaShoppingCart },
  { name: "SaaS", icon: FaLaptopCode },
  { name: "Small Business", icon: FaBuilding },
  { name: "Technology", icon: FaLaptopCode },
  { name: "Telecom", icon: FaPhoneAlt },
  { name: "Tourism", icon: FaGlobe },
];

const IndustriesSection: FC = () => {
  return (
    <section className="bg-black/70 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Industries We Work With</h2>
        <p className="text-lg text-gray-400 mb-10">
          At Sirius A, we extend our Digital Marketing expertise across a diverse range of industries,
          tailoring strategies to meet the unique demands and opportunities each sector presents.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="group flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-800/60 transition duration-300 shadow-md hover:shadow-purple-500/30"
            >
              <Icon className="text-purple-400 text-2xl group-hover:scale-110 transition-transform duration-300" />
              <span className="text-base font-medium">{name} Digital Marketing</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
