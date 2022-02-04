import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRecoilValue } from 'recoil'
import App from '../layouts/App'
import { authenticatedUser } from '../store'
import { NavLink } from 'react-router-dom'

export default function Dashboard() {
    const auth = useRecoilValue(authenticatedUser)
    const [myClasses, setMyClasses] = useState([])

    useEffect(() => {
        let isMounted = true
        const getMyClass = async () => {
            let { data } = await axios.get('api/playlists/mine')
            if (isMounted) setMyClasses(data.data);
        }
        getMyClass()

        return () => { isMounted = false }
    }, [])

    return (
        <App title="Dashboard">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        My Dashboard
                    </div>
                    <div className="card-body">
                        <h5 className="card-title"> Welcome to Dashboard { auth.user.name }</h5>
                        {/* <p className="card-text">{ auth.user.email }</p> */}
                        <p>This is the learning class you have bought</p>
                    </div>
                </div>


                <br></br>

                <div className='row'>
                    { myClasses.map((myClasses, index) => (
                        <div className='col-md-4' key={index}>
                            <div className='card'>
                                <img src={myClasses.picture} alt={myClasses.name} className='card-img-top'/>
                                <div className='card-body'>
                                    <h5>
                                        {/* ubah NavLink to dengan a href jika ingin loading atau sebaliknya */}
                                        <NavLink to={`/series/${myClasses.slug}`} className="text-decoration-none text-dark">
                                            { myClasses.name }
                                        </NavLink>
                                    </h5>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <span className="text-secondary">
                                            { myClasses.episodes } Episode
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) }
                </div>
            </div>
            
            
        </App>
    )
}
