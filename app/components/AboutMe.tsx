"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const data = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML / CSS / SASS</li>
        <li>JavaScript / TypeScript</li>
        <li>React / Next.js / Redux</li>
        <li>Node.js / Express</li>
        <li>MongoDB / PostgreSQL / MySQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>IThub college, веб-разработчик</li>
        <li>Hexlet, курсы по Frontend/Node.js разработке</li>
      </ul>
    ),
  },
];

const AboutMe = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, setIsPending] = useTransition();

  const handleTabChange = (id: string) => {
    setIsPending(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image 
          alt="about" 
          src="/images/about-me.png" 
          width={500} 
          height={500} 
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Обо мне</h2>
          <p className="text-base lg:text-lg">
            Веб-разработчик, с огромной страстью к созданию интерактивных, адаптивных
            и интуитивно понятных веб-приложений. Я стремлюсь к постоянному совершенствованию
            и поэтому всегда ищу возможность расширить свои знания и набор навыков. Я командный 
            игрок, и считаю, что лучшие результаты достигаются благодаря эффективному сотрудничеству
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Навыки{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Образование{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {data.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
