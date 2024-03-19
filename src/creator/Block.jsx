import Delete from "/public/deleteBlock.svg";

export function Block({ type, deleteBlock }) {
    return (
        <div className="bg-neutral-900 w-[70vw] rounded-3xl flex flex-col gap-0 p-6 relative">
            <input
                type="text"
                name="title"
                placeholder="Click to add subtitle"
                className="text-3xl bg-transparent w-full hover:border-none focus:outline-none text-neutral-200"
            />
            <textarea
                name="description"
                placeholder="Click to add text"
                className="text-lg bg-transparent w-full hover:border-none focus:outline-none text-neutral-300 resize-vertical overflow-y-auto"
                rows={5}
            />
            <button className="absolute right-6 top-6" onClick={deleteBlock}>
                <img src={Delete} alt="Delete" />
            </button>
        </div>
    );
}

export function PreBlock({ addNewBlock }) {
    return (
        <div className="flex justify-around bg-sky-200 w-[70vw] rounded-3xl">
            <button
                onClick={(e) => {
                    addNewBlock("image");
                }}
            >
                <img src="/public/image.svg" alt="Image" />
            </button>
            <button
                onClick={(e) => {
                    addNewBlock("text");
                }}
            >
                <img src="/public/text.svg" alt="Text" />
            </button>
            <button
                onClick={(e) => {
                    addNewBlock("video");
                }}
            >
                <img src="/public/video.svg" alt="Video" />
            </button>
        </div>
    );
}
