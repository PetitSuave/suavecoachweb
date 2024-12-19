import Image from "next/image";
import {socialLinks, metaData} from "./config";
import {OfferCard} from "./components/offer-card";
import ContactForm from "./components/contact-form";
import {LuMail, LuPhoneIncoming, LuReceiptEuro} from "react-icons/lu";

const cards = [{
    title: "Pro Kariéru",
    text: "Vhodné pro firmy i individuální zakázky. Potřebujete kouče do firmy? Potřebuješ kariérní koučing?",
    link: "/work"
}, {
    title: "Pro Život",
    text: "Pro běžné i težké životní situace, lifestylové změny, osobnostní rozovoj nebo pomoc v rozhodování.",
    link: "/life"
}, {
    title: "Pro Pohyb",
    text: "Rozvoj Vašich pohybových aktivit, efektivita tréninku, kreativita a překonávání překážek",
    link: "/movement"
}
]

export default function Page() {
    return (
        <div className="relative min-h-screen">
            {
                //bg-purple-200 to section - tady ty barvicky zatim nebrat vazne, to jen chuc vdiet jak to vypada. musime vyresit na celou sirku stejne jak ma opredloha a navic tam bude obrazek}
            }
            <section>
                <div className="flex flex-col bg-[url('/photos/bg-flowers_big.jpg')] bg-center bg-cover bg-opacity-10">
                    <p className="text-3xl leading-tight mt-12 mb-12 mx-9 text-white">
                        Společně vytvoříme cestu, která bude skutečně tvoje.
                        {
                            //TODO: odsud by to chtelo odkaz na stranku, ktera bude vysvetlovat proc raw individualni kouicng - nebo mozna odkaz na konkretni bloc post o tomhle?
                        }
                    </p>
                </div>
            </section>
            <section className="relative">
                <div className="flex mt-12 mb-12 mx-auto flex-col-reverse md:flex-row">
                    <div className="flex md:flex-row md:w-2/3 flex-col md:ml-9 mb-9">
                        <div className="prose prose-neutral dark:prose-invert">
                            <h1 className="mb-12 text-2xl font-medium tracking-tight">
                                Kdo jsem?
                                {
                                    //TODO: Bud tady nebo k fotce by se melo dat tlacitko zjistit vice a tam dat muj pribeh a certifikace.
                                }
                            </h1>
                            <p>
                                Absolvovala jsem výcvik "Integrativní kouč" akreditovaný MŠMT a získala praxi aplikováním koučovacího přístupu do firmeního i fitness prostředí.
                            </p>
                            <p>
                                Během své více než patnáctileté IT kariéry ve vedení lidí a  jako osobní trenérka jsem v koučinku našla přístup, který je v souladu s mými vnitřními hodnotami. Umožňuje mi pomáhat lidem rozvíjejícím přísupem a respektovat jejich jedinečnost a kompetenci  pro sebe udělat to nejlepší.
                            </p>
                            <p>
                                Mojí nejoblíbenější oblastí je navrácení koučinku zpátky k pohybovým disciplínám.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/3 m-6">
                        <Image src="/photos/tmp_ProfilePicture.jpg" alt={metaData.name}
                               width={672} height={672}
                               className="rounded-full sm:max-w-96 mx-auto md:max-w-full"
                        />
                    </div>
                </div>
            </section>
            <section>
                <div className="flex flex-col md:flex-row">
                    {cards.map(card => (
                        <div key={card.title} className="w-full md:w-1/3">
                            <OfferCard title={card.title} text={card.text} link={card.link}/>
                        </div>
                    ))}
                </div>
                <div className="">
                    <div className=" mt-24 md:ml-9 text-2xl font-medium tracking-tight">
                        Kontaktuj mě
                    </div>
                    <div className="flex mx-auto flex-col md:flex-row ">
                        <div className="flex flex-col md:w-1/3 mt-3 md:m-9">
                            <p className="mb-6">
                                Kontaktovat mě můžete pomocí e-mailu nebo kontaktního formuláře.
                            </p>
                            <p className="mb-6 flex">
                                <LuMail className="mt-1 mr-3"/> katerina@urban.coach
                            </p>
                            <p className="mb-6 flex">
                                <LuPhoneIncoming className="mr-3 size-10"/>  Pokud se chete spojit po telefonu, vyplňte také telefonní číslo, případně navrhovaný
                                čas.
                            </p>
                            <p className="mb-6 flex">
                                <LuReceiptEuro className="mt-1 mr-3"/> Bankovni spojeni
                            </p>
                        </div>
                        <div className="md:w-2/3 flex-col md:m-6 ">
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
