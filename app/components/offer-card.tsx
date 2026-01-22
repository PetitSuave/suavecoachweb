import React from "react";

export type OfferCardProps = {
    title: string
    text: string | React.ReactNode
    text2: string | React.ReactNode
    link: string
}

export function OfferCard({title, text, text2, link}: OfferCardProps) {
    return (
        <div>
            <div className="text-center mt-3 font-bold">
                {title}
            </div>
            <div className="mt-6 mb-6">
                {text}
            </div>
            <div className="items-center bottom-9 mx-auto inset-x-0">
                {text2}
            </div>
            {/*<div className="">*/}
            {/*    <a href={link}>*/}
            {/*        <button className="rounded-none bg-black text-white p-2 hover:bg-gray-600 pl-6 pr-6">*/}
            {/*            Zjistit více*/}
            {/*        </button>*/}
            {/*    </a>*/}
            {/*</div>*/}
        </div>
    )
}