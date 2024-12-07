export type OfferCardProps = {
    title: string
    text: string
    link: string
}

export function OfferCard({title, text, link}: OfferCardProps) {
    return (
        <div
            className="relative min-h-full border-solid border-black border-2 m-2 p-6 bg-yellow-50"
        >
            <div className="text-center font-bold">
                {title}
            </div>
            <div className="mt-2 mb-10 mx-2">
                {text}
            </div>
            <div className="absolute flex justify-center items-center bottom-3 mx-auto inset-x-0">
                <a href={link}>
                    <button className="rounded-none bg-black text-white p-2 hover:bg-gray-600">
                        Zjistit více
                    </button>
                </a>
            </div>
        </div>
    )
}