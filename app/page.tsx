import Image from "next/image";
import {socialLinks} from "./config";
import {OfferCard} from "./components/offer-card";

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
        <section>
            <h1 className="mb-8 text-2xl font-medium tracking-tight">
                Suave Portfolio!!!
            </h1>

            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    Kdo jsem?
                </p>
                <p>
                    Profesiaonalni kouc!
                    Certifikovaný MŠMT
                    Kouč pro tělo i mysl
                </p>
            </div>

            <div className="flex flex-col md:flex-row">
                {cards.map(card => (
                    <div className="w-full md:w-1/3">
                        <OfferCard key={card.title} title={card.title} text={card.text} link={card.link}/>
                    </div>
                ))}
            </div>
        </section>
    );
}
