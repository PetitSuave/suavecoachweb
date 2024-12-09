import Image from "next/image";
import {socialLinks, metaData} from "./config";
import {OfferCard} from "./components/offer-card";
import ContactForm from "./components/contact-form";

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
            <section className="relative">
                <div className="flex mt-12 mb-12 mx-auto flex-row  md:flex-row ">
                    <div className="flex md:flex-row w-2/3 flex-col m-9">
                        <div className="prose prose-neutral dark:prose-invert">
                            <h1 className="mb-12 text-2xl font-medium tracking-tight">
                                Kdo jsem?
                            </h1>
                            <p>
                                Profesiaonalní kouč
                            </p>
                            <p>
                                Certifikovaný MŠMT
                            </p>
                            <p>
                                Kouč pro tělo i mysl
                            </p>
                        </div>
                    </div>
                    <div className="w-1/3 m-6">
                        <Image src="/photos/tmp_ProfilePicture.jpg" alt={metaData.name}
                               width={672} height={672}
                               className="rounded-full"
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
                <div className="flex mt-12 mx-auto flex-row  md:flex-row ">
                    <div className="flex flex-col w-1/3 m-9">
                        <p>
                            katerina@urban.coach
                        </p>
                        <p>
                            Bankovni spojeni
                        </p>
                        <p>
                           Kontaktovat mě můžete pomocí e-mailu nebo kontaktního formuláře. Pokud chcete ať vám zavolám, vyplňte také telefonní číslo.
                        </p>
                    </div>
                    <div className="w-2/3 flex-col m-9 ml-3">
                        <div className="mb-4 text-xl font-bold">Kontaktujte mě</div>
                        <ContactForm/>
                    </div>
                </div>
            </section>
        </div>
    );
}
