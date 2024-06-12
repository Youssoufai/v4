export default function Carousel({ children: slides }) {
    return (
        <div className="overflow-hidden relative">
            <div className="flex">{slides}</div>
            <div>
                <button>

                </button>
            </div>
        </div>
    )
}