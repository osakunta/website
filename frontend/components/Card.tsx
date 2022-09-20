
type CardProps = {
    image: string
    title: string
    text: string
    button: string
}

export const Card: React.FC<CardProps> = ({image, title, text, button}) => (
    <div className="max-w-sm rounded-lg shadow-md overflow-hidden">
        <div className="max-h-72">
            <img 
                className="object-cover object-center block max-h-72 h-full w-full"
                src={image} />
        </div>
        <div className="flex flex-col p-4 gap-2">
            <span className="text-xl text-blue-500">
                {title}
            </span>
            <p className="max-w-prose">
                {text}
            </p>
            <button className="self-center mt-2 w-full py-4 text-lg bg-yellow-500 rounded-lg text-on-yellow-500">
                {button}
            </button>
        </div>
    </div>
)