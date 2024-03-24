import "./LessonPreview.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function LessonPreview(/*{ resp }*/) {
    const [n, setN] = useState(0);
    const [shouldRedirect, setShouldRedirect] = useState([]);
    const resp = [
        {
            tags: [{ tag: "Cooking" }],
            author: "John Doe",
            age_rating: 7,
            title: "Scrambled Eggs",
            description:
                "Learn how to make the perfect scrambled eggs with this simple recipe.",
            thumbnail: "lesson.jpg",
        },
    ];

    let tags = resp[n].tags,
        author = resp[n].author,
        rating = resp[n].age_rating,
        title = resp[n].title,
        description = resp[n].description,
        thumbnail = resp[n].thumbnail;

    console.log(thumbnail);

    function handleClick() {
        setShouldRedirect([<Navigate to="/lesson/" replace />]);
    }

    function handleLeft() {
        if (n > 0) setN((n) => n - 1);
    }

    function handleRight() {
        if (n < resp.length - 1) setN((n) => n + 1);
    }

    return (
        <>
            <div
                className="lessonPreview"
                style={{
                    backgroundImage: `linear-gradient(
                    to bottom,
                    rgba(23, 23, 23, 0.71),
                    rgba(23, 23, 23)
                ),
                url(../../public/${thumbnail})`,
                }}
            >
                <div className="color"></div>
                {shouldRedirect.map((e, index) => {
                    return <div key={index}>{e}</div>;
                })}
                <div className="lessonPreview-2">
                    <div className="first-line">
                        <div className="tags">
                            <p>Tags</p>
                            <div className="tags-2">
                                {tags.map((tag) => {
                                    return <p key={tag}>{tag.tag}</p>;
                                })}
                            </div>
                        </div>
                        <div className="author">
                            <p>Author</p>
                            <p>{author}</p>
                        </div>
                        <div className="rating">
                            <p>Rating</p>
                            <p
                                style={{
                                    backgroundColor:
                                        rating == 7
                                            ? "#6ae86a"
                                            : rating == 12
                                            ? "#ffff5d"
                                            : "#FECACA",
                                }}
                            >
                                {rating}+
                            </p>
                        </div>
                    </div>
                    <div className="second-line">
                        <h1>{title}</h1>
                        <button onClick={handleClick}>Start learning</button>
                    </div>
                    <div className="third-line">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="buttons">
                    <button onClick={handleLeft}>&lt;</button>
                    <button onClick={handleRight}>&gt;</button>
                </div>
            </div>
        </>
    );
}

export default LessonPreview;
