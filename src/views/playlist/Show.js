import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import App from '../../layouts/App'
import Header from '../../components/Header'
import { useParams } from 'react-router'


import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';
import { useSetRecoilState } from 'recoil'
import { aNumberOfCart } from '../../store'
import { Link } from 'react-router-dom'
import ListOfPlaylist from '../../components/ListOfPlaylist'
import usePlaylist from '../../hooks/usePlaylist'

export default function Show() {
    const setAnumberOfCart = useSetRecoilState(aNumberOfCart)
    const { slug } = useParams()
    // const [playlist, setPlaylist] = useState([])
    const { playlist, lessons, hasBought } = usePlaylist(slug)
    // const [hasBought, setHasBought] = useState(false)

    const addToCartHandler = async () => {
        try {
            let { data } = await axios.post(`api/add-to-cart/${playlist.slug}`)
            toast.notify(data.message, {
                position: 'bottom-right'
            });
            setAnumberOfCart(cart => [...cart, data.data])
        } catch (error) {
            toast.notify(error.response.data.message, {
                position: 'bottom-right'
            });
        }
    }
    // useEffect(() => {
    //     let isMounted = true
    //     const getApiData = async (url, set) => {
    //         let { data } = await axios.get(url)
    //         if (isMounted) set(data.data);
    //     }
        
    //     // getApiData(`api/playlists/${slug}`, setPlaylist)
    //     getApiData(
    //         `api/check-if-user-has-bought-the-series-${slug}`, 
    //         setHasBought
    //     );

    //     console.log(playlist);

    //     return () => { isMounted = false }
    // }, [ 
    //     // slug 
    // ])

    return (
        <App title="Series">
            <Header title={playlist.name}>
                { playlist.description }

                <div className="mt-3">
                    <Link to={`/series/${playlist.slug}/1`} className="btn btn-secondary me-2">Watch</Link>

                    { !hasBought && 
                        <button onClick={addToCartHandler} className="btn btn-primary">Add to Cart</button>
                    }
                </div>
            </Header>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card" style={{ marginTop: -80 }}>
                            <div className="card-header bg-white border-bottom py-3">
                                <h6>{ playlist.name }</h6>
                            </div>
                            <div className="card-body">
                                <ListOfPlaylist playlist={playlist.slug} lessons={lessons}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    )
}
