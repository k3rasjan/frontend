import "./Featured.css";
import { Link } from "react-router-dom";

function Featured({ resp }) {
    return (
        <>
            <div className="featured">
                <h1>Featured</h1>
                <div className="featured-lessons" style={{width: 325 * /*resp.length*/ 10}}>
                    {resp.map((lesson) => (
                        <Link to={{pathname: '/lesson/', state: {lesson_id: resp.lesson_id}}} key={lesson.id}
                        style={{backgroundImage: `url(../../public/${lesson.title}.jpg)`}} className="lesson">
                                <h2>{lesson.title}</h2>
                        </Link>
                    ))}
                    <Link to={{pathname: '/lesson/', state: {lesson_id: resp.lesson_id}}}
                        style={{backgroundImage: `url(../../public/lesson.jpg)`}} className="lesson">
                            <h2>Scrambled eggs</h2>
                    </Link>
                    <Link to={{pathname: '/lesson/', state: {lesson_id: resp.lesson_id}}}
                        style={{backgroundImage: `url(../../public/lesson.jpg)`}} className="lesson">
                            <h2>Scrambled eggs</h2>
                    </Link>
                    <Link to={{pathname: '/lesson/', state: {lesson_id: resp.lesson_id}}}
                        style={{backgroundImage: `url(../../public/lesson.jpg)`}} className="lesson">
                            <h2>Scrambled eggs</h2>
                    </Link>
                    <Link to={{pathname: '/lesson/', state: {lesson_id: resp.lesson_id}}}
                        style={{backgroundImage: `url(../../public/lesson.jpg)`}} className="lesson">
                            <h2>Scrambled eggs</h2>
                    </Link>
                    <Link to={{pathname: '/lesson/', state: {lesson_id: resp.lesson_id}}}
                        style={{backgroundImage: `url(../../public/lesson.jpg)`}} className="lesson">
                            <h2>Scrambled eggs</h2>
                    </Link>
                    <Link to={{pathname: '/lesson/', state: {lesson_id: resp.lesson_id}}}
                        style={{backgroundImage: `url(../../public/lesson.jpg)`}} className="lesson">
                            <h2>Scrambled eggs</h2>
                    </Link>
                    <Link to={{pathname: '/lesson/', state: {lesson_id: resp.lesson_id}}}
                        style={{backgroundImage: `url(../../public/lesson.jpg)`}} className="lesson">
                            <h2>Scrambled eggs</h2>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Featured;
