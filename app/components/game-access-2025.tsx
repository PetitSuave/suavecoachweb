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
                  Social media links:
                  <div className="flex text-lg gap-3.5 transition-opacity duration-300 hover:opacity-90">
                    <SocialLink href={socialLinks.instagram} icon={LuInstagram}/>
                    <SocialLink href={socialLinks.facebook} icon={LuFacebook}/>
                    <SocialLink href={socialLinks.linkedin} icon={LuLinkedin}/>
                    <SocialLink href={socialLinks.email} icon={LuMail}/>
                  </div>
                </div>
                <div>
                  In case you like circus too, follow:
                  <p>
                     <SocialLink href={socialLinks.funguscircus} icon={LuInstagram} text={"@fungus.circus"}/>
                  </p>
                  <p>
                    <SocialLink href={socialLinks.petitsuave} icon={LuInstagram} text={"@petitsuave"}/>
                  </p>
                  <p>
                    NVC book
                    <br/>
                    <a href="https://www.cnvc.org/store/nonviolent-communication-a-language-of-life">https://www.cnvc.org/store/nonviolent-communication-a-language-of-life</a>
                  </p>
                  <p>
                    NVC in Brno (Prague, Ostrava, Zlin)
                    <br/>
                    <a href="https://nenasilnakomunikace.org/" target="_blank">https://nenasilnakomunikace.org/</a>
                  </p>
                  <p>
                    Spheres of influence
                  </p>
                  <p>
                    Zdroj solution koucing = delej vic co funguje a méně co nefunguje
                  </p>
                  <p>
                    5 elements of habit
                  </p>
                  <p>
                    Biases and integration
                  </p>
                  <p className="break-words">
                    Complex situations: <a href="https://www.scribd.com/document/398866026/Changing-is-Standing-Still" target="_blank">https://www.scribd.com/document/398866026/Changing-is-Standing-Still</a>
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
