import Deploy from "/public/deploy.svg";
import Delete from "/public/delete.svg";
import { Tag, PreTag } from "/src/creator/Tag.jsx";
import { useState } from "react";

export default function Creator() {
    const [tagList, setTags] = useState([]);

    function deleteTag(tag) {
        let index = tagList.indexOf(tag);
        let newTagList = tagList.splice(index, 1);
        setTags([...newTagList]);
    }

    function addTag(input) {
        setTags([
            ...tagList,
            <Tag key={tagList.length} tag={input} deleteTag={deleteTag} />,
        ]);
    }

    function addPreTag() {
        setTags([...tagList, <PreTag addTag={addTag} />]);
    }

    return (
        <main className="bg-neutral-950 w-screen h-screen relative flex items-center flex-col pt-10">
            <button className="absolute bg-green-200 rounded-r-xl left-0 top-10">
                <img src={Deploy} alt="Deploy" />
            </button>
            <button className="absolute bg-red-200 rounded-r-xl left-0 top-24">
                <img src={Delete} alt="Delete" />
            </button>
            <section className="relative w-[70vw] h-[40vh] bg-neutral-900 rounded-3xl">
                <div className="absolute bottom-6 left-6">
                    {/* Tags and age ratings */}
                    <div>
                        {/* Tags */}
                        <div>
                            <p className="underline text-neutral-400 ">Tags</p>
                            <div className="flex gap-1">
                                <div className="flex gap-1">
                                    {tagList.map((tag, index) => {
                                        return <div key={index}>{tag}</div>;
                                    })}
                                </div>
                                <button
                                    onClick={addPreTag}
                                    className="border-solid border-neutral-600 border-2 rounded-full m-0 p-1 pt-0 text-sm text-neutral-600"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Title and description */}
                    <input
                        type="text"
                        name="title"
                        placeholder="Click to add title"
                        className="text-3xl bg-transparent w-full hover:border-none focus:outline-none text-neutral-200"
                    />
                    <input
                        type="text-area"
                        name="description"
                        placeholder="Click to add description"
                        className="text-lg bg-transparent w-full hover:border-none focus:outline-none text-neutral-300 "
                    />
                </div>
            </section>
        </main>
    );
}
