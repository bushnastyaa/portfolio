import React from "react";
import { BsTelegram, BsGithub } from "react-icons/bs"
import Link from "next/link";

const contacts = [
  {
    title: "Телефон",
    content: (
      <p className="text-primary-500 hover:text-primary-600">
        <a href="tel:+79648924770">
          +7 (964) 892-47-70
        </a>
      </p>
    ),
  },
  {
    title: "Email",
    content: (
      <p className="text-primary-500 hover:text-primary-600">
        <a href="mailto:bushtasyaa@gmail.com">
          bushtasyaa@gmail.com
        </a>
      </p>
    ),
  },
  {
    title: "Telegram / Github",
    content: (
      <div className="flex items-center justify-center gap-2">
        <Link href="https://t.me/hyojude" target="_blank">
          <BsTelegram className="hover:text-gray-300" size={32} />
        </Link>
        <Link href="https://github.com/bushnastyaa" target="_blank">
          <BsGithub className="hover:text-gray-300" size={32} />
        </Link>
      </div>
    ),
  },
];

const Contacts = () => {
  return (
    <section id="contact" className="mt-20 mb-16">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-12">
        Контакты
      </h2>
      <div className="text-white flex justify-center items-center">
        <ul className="flex flex-col text-center gap-5 text-base lg:text-lg">
          {contacts.map((item) => (
            <li className="mb-7" key={item.title}>
              <h2 className="lg:text-2xl text-xl mb-5 font-bold">
                {item.title}
              </h2>
              {item.content}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contacts;
