import { LessonBlock } from "/src/creator/Block.jsx";
import { MenuElelement } from "./Menu";
import { useState } from "react";

export default function Lesson(lessonId, LessonContent) {
    const [menuList, setMenuList] = useState([]);

    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    fetch("http://localhost:5000/fetching_data/get_lesson/", {
        method: "GET",
        mode: "cors",
        headers: headers,
        body: { lesson_id: 1 },
    }).then((response) => {
        if (response.ok) {
            response.json().then((data) => {
                alert(data.message);
            });
        } else {
            response.json().then((data) => {
                alert(data.message);
            });
        }
    });

    return (
        <div>
            <section className="bg-neutral-700 flex w-screen min-h-screen">
                {/* <div className="bg-neutral-700 w-[15vw]">
                    {menuList.map((e, index) => {
                        <div key={index}>{e}</div>;
                    })}
                </div> */}
                <div className="bg-neutral-950 w-screen">
                    <LessonBlock
                        subtitle="Introduce Ingredients and Tools:"
                        text="Show your students the ingredients and tools needed for making scrambled eggs. This typically includes eggs, butter or oil, salt, pepper, a mixing bowl, a whisk or fork, and a frying pan. "
                    />
                </div>
            </section>
        </div>
    );
}
