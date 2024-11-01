import Deploy from "/public/deploy.svg";
import Delete from "/public/delete.svg";
import { Tag, PreTag } from "/src/creator/Tag.jsx";
import { Block, PreBlock } from "/src/creator/Block.jsx";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Config from "../config";

export default function Creator() {
    const [tagList, setTags] = useState([]);
    const [blockList, setBlockList] = useState([]);
    const [shouldRedirect, setShouldRedirect] = useState([]);
    let url = Config.host + "/lesson/";
    const [blockKeyList, setBlockKeyList] = useState([]);

    function deleteTag(tag) {
        let newTagList = tagList;
        console.log(newTagList);
        let index = newTagList.indexOf(tag);
        newTagList.pop(index, 1);
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

    function deleteBlock(block) {
        let index = blockKeyList.indexOf(
            block.target.parentElement.parentElement.key
        );
        console.log(block.target.parentElement.parentElement.key);
        console.log(blockList);
        console.log(index);
        let newBlockList = blockList.splice(index, 1);
        setBlockList([...newBlockList]);
    }

    function addBlock() {
        setBlockKeyList([...blockKeyList, blockList.length]);
        setBlockList([
            ...blockList,
            <Block deleteBlock={deleteBlock} key={blockList.length} />,
        ]);
    }

    function addPreBlock() {
        setBlockList([
            ...blockList,
            <PreBlock addNewBlock={addBlock} key={blockList.length} />,
        ]);
        setBlockKeyList([...blockKeyList, blockList.length]);
    }

    function deleteLesson() {
        setShouldRedirect([<Navigate to="/" replace />]);
    }

    function deployLesson() {
        let title = document.getElementById("title").value;
        let description = document.getElementById("description").value;
        let ageRating = "pegi18";
        let thumbnail = "";
        let tags = [];
        tagList.forEach((element) => {
            tags.push(String(element.props.tag));
        });

        let blocks = [];
        let titles = document.querySelectorAll(".title");
        let descriptions = document.querySelectorAll(".description");
        for (let i = 0; i < descriptions.length; i++) {
            let title = String(titles[i].value);
            let description = String(descriptions[i].value);
            let block = {
                type: "TEXT",
                subtitle: String(title),
                content: String(description),
                extension: ".jpg",
            };
            blocks.push(block);
        }
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        fetch("http://localhost:5000/lesson/deploy/", {
            method: "POST",
            mode: "cors",
            headers: headers,
            body: JSON.stringify({
                lesson: {
                    title: String(title),
                    description: String(description),
                    age_rating: String(ageRating),
                    thumbnail: String(thumbnail),
                    tags: tags,
                },
                blocks: [...blocks],
            }),
        })
            .then((resp) => {
                if (resp.ok) {
                    resp.json().then((data) => {
                        alert(data.message);
                        setShouldRedirect([<Navigate to={"/"} replace />]);
                    });
                } else {
                    resp.json().then((data) => {
                        alert(data.message);
                    });
                }
            })
            .catch((message) => {
                console.log(message.message);
            });
    }

    return (
        <main className="bg-neutral-950 w-screen min-h-screen relative flex items-center flex-col pt-10 gap-5">
            {shouldRedirect.map((e, index) => {
                return <div key={index}>{e}</div>;
            })}
            <button className="absolute bg-green-200 rounded-r-xl left-0 top-10">
                <img src={Deploy} alt="Deploy" onClick={deployLesson} />
            </button>
            <button
                className="absolute bg-red-200 rounded-r-xl left-0 top-24"
                onClick={deleteLesson}
            >
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
                        id="title"
                        placeholder="Click to add title"
                        className="text-3xl bg-transparent w-full hover:border-none focus:outline-none text-neutral-200"
                        rows={4}
                    />
                    <textarea
                        name="description"
                        id="description"
                        placeholder="Click to add description"
                        className="text-lg bg-transparent w-full hover:border-none focus:outline-none text-neutral-300 resize-none"
                    />
                </div>
            </section>
            {blockList.map((block, index) => {
                return <div key={index}>{block}</div>;
            })}
            <button
                onClick={addPreBlock}
                className="w-[70vw] h-10 rounded-3xl bg-sky-200 text-3xl font-light"
            >
                +
            </button>
        </main>
    );
}
