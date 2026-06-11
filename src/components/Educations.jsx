import React from "react";
import { motion } from "framer-motion";
import EducationCard from "./Educationcard";
import { assets } from "../assets/assets";

const educations = [
  {
    course: "Class 10 - Sun Flower Public School, Rasra-Ballia",
    description: "Percentage: 81.2% in 10th grade",
    image: assets.schoolImg,
    school: [
        "CBSE",
        "2019 - 2021",
        "Class X",
        "Science, Mathematics, Social Science, English, Hindi",
    ],
  },
  {
    course: "Class 12 - Sun Flower Public School, Rasra-Ballia",
    description: "Percentage: 71.8% in 12th grade",
    image: assets.schoolImg,
    school: [
        "CBSE",
        "2021 - 2023",
        "Class XII",
        "Physics, Mathematics, Chemistry, English, Hindi",
    ],
  },
  {
    course:
        "B.Tech - Bharat Ratna Sardar Vallabh Bhai Patel Rajkiya Engineering College Basti",
        description: "Current CGPA: 7.13 (2023 - 2027)",
        image: assets.collegeImg,
        school: ["AKTU", "2023 - 2027", "B.Tech", "Computer Science & Engineering"],
    },
];

const Education = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        id="education"
        className="py-20 bg-dark-200"
    >
        <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-4">
                My <span className="text-purple ">Education</span>
                </h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
                My academic journey so far
                </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {educations.map((education, index) => (
                    <EducationCard key={index} {...education} />
                ))}
            </div>
        </div>
    </motion.div>
  );
};

export default Education;
