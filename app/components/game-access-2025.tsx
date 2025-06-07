import React from "react";
import Image from "next/image";
import {IconType} from "react-icons";
import {LuFacebook, LuInstagram, LuLinkedin, LuMail} from "react-icons/lu";
import {ScreenWideSection} from "./screen-wide-section";
import {metaData, socialLinks} from "../config";


function SocialLink({ href, icon: Icon, text }: { href: string, icon: IconType, text?: string}) {
  return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="no-underline">
        <span className="flex flex-row gap-2 items-center">
          <Icon />
          {text}
        </span>
      </a>
  );
}


export function GameAccess2025() {
  return (
      <div className="relative min-h-screen">
        <ScreenWideSection >
          <div className="-z-10 absolute inset-0 bg-orange-700" />
          <p className="text-3xl leading-tight font font-semibold mt-16 mb-16 mx-9 text-white">
            Game Access 2025: Mental Health in Game Development
          </p>
        </ScreenWideSection>
        <section className="relative">
          <div className="flex mt-12 mb-12 mx-auto flex-col-reverse md:flex-row ">
            <div className="flex md:flex-row md:w-2/3 flex-col md:ml-9 mb-9">
              <div className="prose prose-neutral dark:prose-invert">
                <h1 className="mb-12 text-2xl font-medium tracking-tight">
                  Sources to get more from the presentation:
                </h1>
                <p>
                  <a href={"https://drive.google.com/file/d/1Mz1SKIZhUrLkg-qMB3vwC4w1zTfo07cD/view?usp=drive_link"} target="_blank" rel="noopener noreferrer">
                    Presentation download
                  </a>
                </p>
                <div>
                  <b>Social media links:</b>
                  <div className="flex text-lg gap-3.5 transition-opacity duration-300 hover:opacity-90">
                    <SocialLink href={socialLinks.instagram} icon={LuInstagram}/>
                    <SocialLink href={socialLinks.facebook} icon={LuFacebook}/>
                    <SocialLink href={socialLinks.linkedin} icon={LuLinkedin}/>
                    <SocialLink href={socialLinks.email} icon={LuMail}/>
                  </div>
                </div>
                <div><p>
                  In case you like circus too, follow:
                  <SocialLink href={socialLinks.funguscircus} icon={LuInstagram} text={"@fungus.circus"}/>
                  <SocialLink href={socialLinks.petitsuave} icon={LuInstagram} text={"@petitsuave"}/>
                </p>
                  <p>
                    <b>NVC book</b>
                    <br/>
                    <a href="https://www.cnvc.org/store/nonviolent-communication-a-language-of-life">Nonviolent
                      Communication a Language of Life</a>
                    <br/>
                    <a href="https://www.databazeknih.cz/knihy/nenasilna-komunikace-292886">Český překlad: Nenásilná
                      komunikace</a>
                  </p>
                  <p>
                    <b>NVC in Brno (Prague, Ostrava, Zlín)</b>
                    <br/>
                    <a href="https://nenasilnakomunikace.org/" target="_blank">nenasilnakomunikace.org</a>
                  </p>
                  <p className="break-words">
                    <b>Complex situations book:</b>
                    <br/>
                    <a href="https://www.scribd.com/document/398866026/Changing-is-Standing-Still" target="_blank">
                      Changing is Standing still: A Gestalt Perspective on Organizations</a>
                    <br/>
                    <a href="https://www.databazeknih.cz/knihy/zmena-prijde-kdyz-se-zastavis-281414" target="_blank">Český
                      překlad: Změna přijde, když se zastavíš</a>
                  </p>
                  <p>
                    <b>5 elements of habit (the circle diagram)</b>
                    <br/>
                    Author: <a href="https://www.linkedin.com/in/jana-myn%C3%A1%C5%99ov%C3%A1-43404a95/">Jana
                    Mynářová</a> based on the book:
                    <br/>
                    <a href="https://www.goodreads.com/book/show/7533333-the-mindful-coach">The Mindful Coach</a>
                    <br/>
                    <a href="https://www.databazeknih.cz/knihy/vsimavy-kouc-210854" target="_blank">Český překlad:
                      Všímavý Kouč</a>
                  </p>
                  <p>
                    <b>Urgency addiction</b>
                    <br/>
                    <SocialLink href={socialLinks.holisticpsychologist} icon={LuInstagram} text={"@the.holistic.psychologist"}/>
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 m-6">
              <Image src="/photos/AGlogo.png" alt={"AG"}
                     width={400} height={400}
                     className=" sm:max-w-96 mx-auto md:max-w-full"
              />
            </div>
          </div>
        </section>
      </div>
  );
}
