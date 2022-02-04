import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import YouTube from 'react-youtube';
import ListOfPlaylist from '../../components/ListOfPlaylist';
import usePlaylist from '../../hooks/usePlaylist';
import App from '../../layouts/App';

const Show = () => {
    const [lesson, setLesson] = useState([]);
    // const [playlist, setPlaylist] = useState([]);
    // const [hasBought, setHasBought] = useState([]);
    const [errorScreen, setErrorscreen] = useState(false);
    const { episode, slug } = useParams();
    const { playlist, lessons, hasBought } = usePlaylist(slug)

    const onReady = () => {
        console.log("Video from youtube is ready to watch");
    }

    useEffect(() => {
        const getLesson = async () => {
            try {
                const { data } = await axios.get(
                    `/api/playlists/${slug}/${episode}`
                );

                // const checkIfHasBought = await axios.get(
                //     `api/check-if-user-has-bought-the-series-${lessonsResponse.data.playlist.slug}
                // `);
                // setHasBought(checkIfHasBought.data.data)
                setLesson(data.data);
                // setPlaylist(lessonsResponse.data.playlist);
            } catch (e) {
                setErrorscreen(true);
            }
        };
        getLesson()
    }, [episode, slug])
    return (
        <App title={lesson.title}>
            <div className="bg-dark mb-5" style={{ marginTop: '-48px' }}>
                <div className="container">
                    { hasBought && !errorScreen && (
                        <YouTube
                            videoId={lesson.unique_video_id }                  // defaults -> null
                            className={``}                // defaults -> null
                            containerClassName={'ratio ratio-16x9'}       // defaults -> ''
                            onReady={onReady}                    // defaults -> noop
                        />
                    )}
                    { !hasBought && lesson.intro && !errorScreen && (
                        <YouTube
                            videoId={lesson.unique_video_id }                  // defaults -> null
                            className={``}                // defaults -> null
                            containerClassName={'ratio ratio-16x9'}       // defaults -> ''
                            onReady={onReady}                    // defaults -> noop
                        />
                    )}

                    { errorScreen && <div className="text-white p-5">
                    <section className="h-50 w-80" style={{boxSizing: 'border-box', backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))'}}>
                        <style dangerouslySetInnerHTML={{__html: "\n        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n        .empty-3-2{\n            padding: 5rem 2rem;\n        }\n        .empty-3-2 .main-img{\n            width: 83.333333%;\n            margin-bottom: 2.5rem;\n            object-fit: cover;\n            object-position: center;\n        }\n        .empty-3-2 .title-text{\n            font: 600 1.875rem/2.25rem Poppins, sans-serif;            \n            letter-spacing: 0.025em;\n            margin-bottom: 0.75rem;\n        }\n        .empty-3-2 .caption-text{\n            margin-bottom: 3rem;\n            color: #504F5E;\n            font-size: 1rem;\n            letter-spacing: 0.025em;\n            line-height: 1.75rem;\n        }\n        .empty-3-2 .btn-view{\n            font: 600 1.125rem/1.75rem Poppins, sans-serif;            \n            padding: 1rem 2rem;\n            border-radius: 0.75rem;\n            background-color: #6C5ECF;\n            transition: 0.3s;\n        }\n        .empty-3-2 .btn-view:hover{\n            background-color: #7370FF;\n            transition: 0.3s;\n        }\n        @media (min-width: 576px) {\n            .empty-3-2{\n                padding: 8rem 2rem;\n            }\n            .empty-3-2 .main-img{\n                width: auto;\n            }\n        }        \n    " }} />
                        <div className="empty-3-2" style={{fontFamily: '"Poppins", sans-serif'}}>    
                        <div className="mx-auto d-flex align-items-center justify-content-center flex-column">
                            <img className="main-img" src="https://api.elements.buildwithangga.com/storage/files/2/assets/Empty%20State/EmptyState3/Empty-3-7.png" alt="" />                       
                            <h1 class="title-text text-white">
                                You have to buy if you want to watch!
                            </h1>
                        </div>
                        </div>
                    </section>
                        </div> }
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-white border-bottom py-3">
                                { playlist.name }
                            </div>
                            <div className="card-body">
                                {/* <ListOfPlaylist playlist={slug}/> */}
                                <ListOfPlaylist playlist={playlist.slug} lessons={lessons}/>
                            </div>
                        </div>
                    </div>
                    {/* <div className='col-md-1'>
                        <button className="btn btn-secondary btn-lg">Finish</button>
                    </div> */}
                </div>
            </div>
        </App>
    )
}

export default Show
