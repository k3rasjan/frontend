import Delete from "/public/deleteBlock.svg";
import { useRef } from "react";

export function Block({ type, deleteBlock }) {
    const titleRef = useRef(null);
    const descRef = useRef(null);

    return (
        <div className="bg-neutral-900 w-[70vw] rounded-3xl flex flex-col gap-0 p-6 relative">
            <input
                type="text"
                name="title"
                placeholder="Click to add subtitle"
                className="title text-3xl bg-transparent w-full hover:border-none focus:outline-none text-neutral-200"
                ref={titleRef}
            />
            <textarea
                name="description"
                placeholder="Click to add text"
                className="description text-lg bg-transparent w-full hover:border-none focus:outline-none text-neutral-300 resize-vertical overflow-y-auto"
                rows={5}
                ref={descRef}
            />
            <button
                className="absolute right-6 top-6"
                onClick={(e) => {
                    deleteBlock(e);
                }}
            >
                <img src={Delete} alt="Delete" />
            </button>
        </div>
    );
}

export function PreBlock({ addNewBlock }) {
    return (
        <div className="flex justify-around bg-sky-200 w-[70vw] rounded-3xl p-6">
            <button
                onClick={(e) => {
                    addNewBlock("image");
                }}
                className="hover:border-solid hover:border-sky-950 hover:border-4 rounded-3xl"
            >
                <img src="/public/image.svg" alt="Image" />
            </button>
            <button
                onClick={(e) => {
                    addNewBlock("text");
                }}
                className="hover:border-solid hover:border-sky-950 hover:border-4 rounded-3xl"
            >
                <img src="/public/text.svg" alt="Text" />
            </button>
            <button
                onClick={(e) => {
                    addNewBlock("video");
                }}
                className="hover:border-solid hover:border-sky-950 hover:border-4 rounded-3xl"
            >
                <img src="/public/video.svg" alt="Video" />
            </button>
        </div>
    );
}

export function LessonBlock({ subtitle, text }) {
    return (
        <div className="text-neutral-200 p-6">
            <h2 className="text-4xl">{subtitle}</h2>
            <p>{text}</p>
        </div>
    );
}
