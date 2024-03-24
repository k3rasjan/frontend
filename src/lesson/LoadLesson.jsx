import Config from "../config.jsx";
import { useState, useEffect } from "react";
import Lesson from "./Lesson.jsx";

function LoadLesson() {
    const [resp, setResp] = useState(null);
    useEffect(() => {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        fetch(`${Config.host}/fetching_data/get_lesson/`, {
            method: "POST",
            mode: "cors",
            headers: headers,
            body: JSON.stringify({
                lesson_id: "1",
            }),
        }).then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    setResp(data);
                });
            } else {
                console.error(
                    `Error fetching data ${response.status} ${response.statusText}`
                );
            }
        });
    }, []);

    return <>{resp && <Lesson lessonContent={resp} />}</>;
}

export default LoadLesson;
