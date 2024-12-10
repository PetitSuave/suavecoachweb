"use client";

import React from "react";
import { metaData, socialLinks } from "app/config";
import {LuFacebook, LuInstagram, LuLinkedin, LuMail} from "react-icons/lu";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.instagram} icon={LuInstagram} />
      <SocialLink href={socialLinks.facebook} icon={LuFacebook} />
      <SocialLink href={socialLinks.linkedin} icon={LuLinkedin} />
      <SocialLink href={socialLinks.email} icon={LuMail} />
        {/* <a href="/rss.xml" target="_self">
           <FaRss />
         </a> */}
    </div>
  );
}

export default function Footer() {
  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <time>© {YEAR}</time>{" "}
      <a
        className="no-underline"
        href={socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
      >
        {metaData.title}
      </a>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
      <SocialLinks />
    </small>
  );
}
