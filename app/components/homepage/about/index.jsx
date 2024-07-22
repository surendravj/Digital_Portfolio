// @flow strict

import { personalData } from "@/utils/data/personal-data";
import profile from "../../../profile.png"


function AboutSection() {
  const aboutData = {
    about: {
      name: "Surendra Vadaparthy",
      introduction:
        "As a dedicated and innovative professional, I bring a wealth of experience and a proven track record in Software industry.",
      background:
        "My career is characterized by a strong commitment to excellence, strategic thinking, and a passion for driving meaningful impact.",
      experience:
        "With a background that includes [Frontend, Backend & Fullstack], I have honed my skills in various aspects.",
      approach:
        "My approach to problem-solving is both analytical and creative, ensuring that I deliver solutions that are not only effective but also sustainable.",
      collaboration:
        "I am adept at collaborating with cross-functional teams, leading projects from inception to completion, and navigating complex challenges with ease.",
      learning:
        "My professional journey is marked by continuous learning and adaptability, which enables me to stay ahead of industry trends and contribute valuable insights to any organization I am part of.",
      conclusion:
        "I am excited about the opportunity to leverage my skills and experience to contribute to innovative projects and drive success for forward-thinking companies.",
    },
  };
  const { about } = aboutData;

  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>

          <ul className="text-gray-200 text-sm lg:text-lg">
            {Object.keys(about).map((key, i) => (
              <li key={i}>{about[key]}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
         <img width={280}
            height={280}
            alt="Abu Said"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer" 
            src={personalData?.profile}/>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
