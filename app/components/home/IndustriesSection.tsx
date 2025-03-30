import { FC } from "react";
import { FaBuilding, FaBriefcaseMedical, FaLaptopCode, FaDumbbell, FaShoppingCart, FaLeaf, FaMoneyBillWave, FaGamepad, FaUtensils, FaProjectDiagram, FaSuitcaseRolling, FaPhoneAlt, FaGlobe } from "react-icons/fa";

const industries = [
  { name: "Cannabis & CBD", icon: FaLeaf },
  { name: "Crypto", icon: FaMoneyBillWave },
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
    <section className="bg-black/70 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Industries We Work With</h2>
        <p className="text-lg text-gray-400 mb-8">
          At Bird, we extend our Digital Marketing expertise across a diverse range of industries,
          tailoring strategies to meet the unique demands and opportunities each sector presents.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-800 transition shadow-lg"
            >
              <Icon className="text-yellow-400 text-2xl" />
              <p className="text-lg font-semibold">{name} Digital Marketing</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
