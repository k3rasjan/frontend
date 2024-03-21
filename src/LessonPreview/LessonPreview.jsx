import "./LessonPreview.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function LessonPreview({ resp }) {
    /*
    tags,
    author,
    rating,
    title,
    description,
    thumbnail,
    */
    let tags = resp[0].tags,
        author = resp[0].author,
        rating = resp[0].age_rating,
        title = resp[0].title,
        description = resp[0].description,
        thumbnail = resp[0].thumbnail;

    const [n, setN] = useState(0);
    const [shouldRedirect, setShouldRedirect] = useState([]);

    function handleClick() {
        setShouldRedirect([<Navigate to="/lesson/" replace />]);
    }

    return (
        <>
            <div
                className="lessonPreview"
                style={{ backgroundImage: `../../public/${title}.jpg` }}
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
                                    return <p key={tag}>{tag}</p>;
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
                    <button>&lt;</button>
                    <button>&gt;</button>
                </div>
            </div>
        </>
    );
}

export default LessonPreview;
