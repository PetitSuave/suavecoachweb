import React from "react";
import Image from "next/image";
import {socialLinks, metaData} from "./config";
import {OfferCard} from "./components/offer-card";
import ContactForm from "./components/contact-form";
import {LuMail, LuPhoneIncoming, LuReceiptEuro} from "react-icons/lu";
import {ScreenWideSection} from "./components/screen-wide-section";

const cards = [{
    title: <>Chystáš se na kariérní změnu nebo se chceš někam posunout v&nbsp;práci?</>,
    text: <>Pomůžu ti nahlédnout na situaci z&nbsp;nových perspektiv. Projdeme spolu bilanční i&nbsp;rozhodovací procesy a&nbsp;najdeme tu pravou cestu právě pro tebe.</>,
    text2: <>Osobně i on-line<br/> 50/80 minut <br /> 600 - 1250 Kč </>,
    link: "/work"
}, {
    title: <>Nacházíš se v těžké životní situaci nebo cítíš, že chceš udělat změnu?</>,
    text: <>Povedeme spolu rozhovor, který ti umožní oběvit hlubší důvody a&nbsp;potřeby, nalézt své silné stránky a&nbsp;využít svých schopností tam, kde potřebuješ.</>,
    text2: <>Osobně i on-line<br/> 50/80 minut <br /> 600 - 1250 Kč </>,
    link: "/life"
}, {
    title: <>Chceš se začít hýbat nebo pomoct překonat stagnaci ve sportu nebo tanci?</>,
    text: <>Vymyslíme spolu tvůj unikátní a&nbsp;udržitelný plán! Pomůžu ti také s&nbsp;kreativitou a&nbsp;sebevědomím a&nbsp;překonávmím překážek.</>,
    text2: <>Preferuji v&nbsp;tělocvičně <br/> 50/80 minut <br /> 850/1250 Kč </>,
    link: "/movement"
}
]

export default function Page() {
    return (
        <div className="relative min-h-screen prose">
            {/*<ScreenWideSection*/}
            {/*    background={*/}
            {/*    <Image*/}
            {/*       className="-z-10 object-bottom object-cover filter brightness-75"*/}
            {/*        src={"/photos/neuron.png"} alt={"Neurons"} fill*/}
            {/*    />}>*/}
            <div className="flex md:flex-row items-center w-full">
                <div className="md:w-2/3 text-center md:text-left w-full">
                    <p className="text-xl font font-semibold">
                        Společně vytvoříme cestu, která bude skutečně tvoje.
                        {
                            //TODO: odsud by to chtelo odkaz na stranku, ktera bude vysvetlovat proc raw individualni kouicng - nebo mozna odkaz na konkretni bloc post o tomhle?
                        }
                    </p>
                    <div className=" text-6xl leading-[0] font-extrabold">
                        <p className="mb-0">Kateřina</p>
                        <p>Urbanová</p>
                    </div>
                    <p className=" text-xl font font-semibold leading-[0]">
                        {"Integrativní kouč pro tělo i mysl"}
                    </p>
                </div>
                <div className="md:w-1/3 mt-6 md:mt-0 w-full">
                    <Image src="/photos/tmp_ProfilePicture.jpg" alt={metaData.name}
                           width={672} height={672}
                           className="rounded-full sm:max-w-96 mx-auto md:max-w-full"
                    />
                </div>
            </div>
            {/*</ScreenWideSection>*/}
            <section className="relative">
            <div className="w-full max-w-[960px] mx-auto">
                <div className="flex md:flex-row py-16 gap-x-2 w-full">
                    {cards.map(card => (
                        <div key={card.title} className="w-full md:w-1/3">
                            <OfferCard title={card.title} text={card.text} text2={card.text2} link={card.link}/>
                        </div>
                    ))}
                </div>
            </div>
            </section>
            <section className="relative">
                <div className="w-full max-w-[960px] mx-auto flex flex-row">
                    <div className="flex md:flex-row md:w-1/3 md:ml-9 mb-9 w-full">
                        <Image
                            src="/photos/coffee.png"
                            alt="Šálek kávy"
                            width={400} height={400}
                            className="sm:max-w-96 mx-auto md:max-w-full invert-[0.7]"
                        />
                    </div>
                    <div className="flex md:flex-col md:w-2/3 md:ml-9 mb-9 w-full">
                        <p className="text-4xl font-bold">Kafe s koučkou</p>
                        <p> Pojďme se setkat on-line a nezávisle pokecat o&nbsp;tom, co ti koučink může přinést a&nbsp;jak nastavit naši spolupráci. </p>
                        <p className="text-3xl font-bold"> 30 minut zdarma </p>
                    </div>
                </div>
            </section>
            <section className="relative">
            <div className="w-full max-w-[960px] mx-auto">
                <div className="flex mt-12 mb-12 md:flex-row w-full">
                    <div className="flex md:flex-row md:w-2/3 md:ml-9 mb-9 w-full">
                        <div>
                            <h1 className="mb-12 text-2xl font-medium tracking-tight">
                                Kdo jsem?
                                {
                                    //TODO: Bud tady nebo k fotce by se melo dat tlacitko zjistit vice a tam dat muj pribeh a certifikace.
                                }
                            </h1>
                            <p>
                                Absolvovala jsem výcvik "Integrativní kouč" akreditovaný MŠMT a získala praxi
                                aplikováním koučovacího přístupu do firemního i fitness prostředí.
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
                </div>
            </div>
            </section>
            <section className="relative" id="contact">
                <div className="w-full max-w-[960px] mx-auto">
                    <div className=" mt-16 ml-6 md:ml-9 text-2xl font-medium tracking-tight">
                        Kontaktujte mě
                    </div>
                    <div className="flex mx-auto md:flex-row md:m-3 ml-6 mr-9 md:mr-0md:ml-6 w-full">
                        <div className="flex flex-col md:w-1/3 mt-3 md:m-6 w-full">
                            <p className="mb-6">
                                Kontaktovat mě můžete pomocí <br/> e-mailu nebo kontaktního formuláře.
                            </p>
                            <p className="mb-6 flex">
                                <LuMail className="mt-1 mr-3"/> katerina@urban.coach
                            </p>
                            <p className="mb-6 flex">
                                <LuPhoneIncoming className="mr-3 size-10"/> Pokud se chcete spojit po telefonu,
                                vyplňte
                                také telefonní číslo, případně navrhovaný
                                čas. Nebo preferenci komunikace pomocí SMS.
                            </p>
                            {/*<p className="mb-6 flex">*/}
                            {/*    <LuReceiptEuro className="mt-1 mr-3"/> Bankovni spojeni*/}
                            {/*</p>*/}
                        </div>
                        <div className="md:w-2/3 md:m-3 mb-6 w-full">
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
