import "./Featured.css";
import { Link } from "react-router-dom";

function Featured(/* { resp } */) {
    const resp = [
        {
            lesson_id: 0,
            title: "Financial Education",
            thumbnail: "lesson0.jpg",
        },
        {
            lesson_id: 9,
            title: "Mental health education",
            thumbnail: "lesson1.png",
        },
        {
            lesson_id: 10,
            title: "Effective time management",
            thumbnail: "lesson2.jpg",
        },
        {
            lesson_id: 1,
            title: "Scrambled Eggs",
            thumbnail: "lesson.jpg",
        },
        {
            lesson_id: 2,
            title: "Pancakes preparation",
            thumbnail: "lesson3.jpg",
        },
        {
            lesson_id: 8,
            title: "Taxes",
            thumbnail: "lesson4.jpg",
        },
        {
            lesson_id: 3,
            title: "Salad preparation",
            thumbnail: "lesson5.jpg",
        },
        {
            lesson_id: 4,
            title: "Pizza preparation",
            thumbnail: "lesson6.jpg",
        },
        {
            lesson_id: 5,
            title: "CVs writing",
            thumbnail: "lesson7.jpg",
        },
        {
            lesson_id: 6,
            title: "Interview preparation",
            thumbnail: "lesson8.jpg",
        },
        {
            lesson_id: 7,
            title: "Job search",
            thumbnail: "lesson9.jpg",
        },
    ];
    return (
        <>
            <div className="featured">
                <h1>Featured</h1>
                <div
                    className="featured-lessons"
                    style={{ width: 360 * resp.length + "px" }}
                >
                    {resp.map((lesson) => (
                        <Link
                            to={{
                                pathname: "/lesson/",
                                state: { lesson_id: resp.lesson_id },
                            }}
                            key={lesson.id}
                            style={{
                                backgroundImage: `url(../../public/${lesson.thumbnail})`,
                            }}
                            className="lesson"
                        >
                            <h2>{lesson.title}</h2>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Featured;
