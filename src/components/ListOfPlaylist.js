import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ListOfPlaylist = ({ 
        // playlist 
        lessons, playlist
    }) => {
    // const [lessons, setLessons] = useState([])
    // useEffect(() => {
    //     const getLessons = async () => {
    //         const { data } = await axios.get(`api/playlists/${playlist}/videos`)
    //         setLessons(data.data)
    //     };
    //     getLessons()
    // }, [])
    return (
        <ul className="list-group">
            { lessons.map((lesson, index) => (
                <li key={index} className="list-group-item">
                    <Link to={`/series/${playlist}/${lesson.episode}`} className="text-decoration-none text-dark">
                        <div className='row d-flex align-items-center'>
                            <div className='col-md-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                                </svg>
                            </div>
                            <div className='col-md-11 mt-2'>
                                <div className='row d-flex justify-content-between"'>
                                    <div className='col-md-10'>
                                        <h6>{lesson.title}</h6> 
                                    </div>
                                    <div className='col-md-2'>
                                        <span className="badge bg-primary rounded-pill">{lesson.runtime}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </li>
            )) }
        </ul>
    )
}

export default ListOfPlaylist
