import Config from '../config.jsx';
import { useState, useEffect } from 'react';
import LessonPreview from "../LessonPreview/LessonPreview.jsx";
import './MainPage.css';
import Featured from '../Featured/Featured.jsx';

function MainPage() {

    const [resp, setResp] = useState(null);
    useEffect(() => {
        fetch(`${Config.host}/fetching_data/get_lessons_by_views/`)
            .then((response) => {
                if (response.ok)
                {
                    response.json().then((data) => {setResp(data.lessons);});
                } else
                {
                    console.error(`Error fetching data ${response.status} ${response.statusText}`);
                }
            });
    }, []);
    
    //insted of author take creator_id and fetch the author name from the database

    return ( 
        <>
            {resp && <LessonPreview resp={resp}/>}
            {resp && <Featured resp={resp}/>}
        </>
     );
    }

export default MainPage;