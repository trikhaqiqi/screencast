import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import App from '../../layouts/App'
import Header from '../../components/Header'
import { NavLink } from 'react-router-dom'

export default function Index() {
    const [playlists, setPlaylists] = useState([])
    const [links, setLinks] = useState([])
    const [url, setUrl] = useState('api/playlists')

    useEffect(() => {
        let isMounted = true
        const getPlaylist = async () => {
            let { data } = await axios.get(url)
            if (isMounted) {
                setPlaylists(data.data)
                setLinks(data.meta.links)
            };
        }
        getPlaylist()

        return () => { isMounted = false }
    }, [ url ])
    return (
        <App title="Kudang Koding Series">
            <Header title="All Series">
                The latest <strong>series</strong> we have.
            </Header>

            <div className="container">
                <div className="row">
                    { playlists.map((playlist, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card mb-4">
                                <img src={playlist.picture} alt={playlist.name} className="card-img-top" />
                                <div className="card-body">
                                    <h5>
                                        {/* ubah NavLink to dengan a href jika ingin loading atau sebaliknya */}
                                        <NavLink to={`/series/${playlist.slug}`} className="text-decoration-none text-dark ">
                                            { playlist.name }
                                        </NavLink>
                                    </h5>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <span className="text-secondary">
                                            { playlist.episodes } Episode
                                        </span>
                                        <span className="text-secondary">
                                            Rp. { playlist.price.formatted }
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) }
                    
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            { links.length > 3 && links.map((link, index) => (
                                <li className={`page-item ${link.active && 'active'}`} key={index}>
                                    <button className="page-link" onClick={() => setUrl(link.url)} dangerouslySetInnerHTML={{__html: link.label}}/>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </App>
    )
}
