import Link from "next/link";
import { metaData } from "../config";
import {ScreenWideSection} from "./screen-wide-section";
import Image from "next/image";
import React from "react";

const navItems = {
  // "/blog": { name: "Blog" },
  "#contact": { name: "Kontakt" },
};

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
                  You can downloud the slides here:
                </p>
                <p>
                  Během své více než patnáctileté IT kariéry ve vedení lidí a jako osobní trenérka jsem v
                  koučinku našla přístup, který je v souladu s mými vnitřními hodnotami. Umožňuje mi
                  pomáhat lidem rozvíjejícím přísupem a respektovat jejich jedinečnost a kompetenci pro
                  sebe udělat to nejlepší.
                </p>
                <p>
                  Mojí nejoblíbenější oblastí je navrácení koučinku zpátky k pohybovým disciplínám.
                </p>
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
