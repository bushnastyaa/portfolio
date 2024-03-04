import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  subtitle: string;
  description: string;
  gitUrl: string;
  previewUrl?: string;
};

const ProjectCard = ({ 
  imgUrl, 
  title, 
  subtitle,
  description, 
  gitUrl, 
  previewUrl 
}: ProjectCardProps) => {
  return (
    <div>
      <div
        className="h-52 md:h-80 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      />
      <div className="text-white rounded-b-xl mt-3">
        <h5 className="text-xl font-semibold">{title}</h5>
        <p className="text-primary-500 my-2">{subtitle}</p>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
      <div className="text-white mt-3 flex gap-8 text-center">
        <Link 
          href={gitUrl} 
          target="_blank" 
          className="flex items-center gap-2 hover:opacity-80"
        >
          <span>Посмотреть код</span><CodeBracketIcon className="h-5 w-5" />
        </Link>
        {previewUrl && (
          <Link 
            href={previewUrl} 
            target="_blank" 
            className="flex items-center gap-2 hover:opacity-80"
          >
            <span>Посмотреть сайт</span><EyeIcon className="h-5 w-5" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
