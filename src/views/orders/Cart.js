import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import App from '../../layouts/App'
import { aNumberOfCart } from '../../store'

import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';
import { Link } from 'react-router-dom'

export default function Cart() {
    const [carts, setCarts] = useRecoilState(aNumberOfCart)
    const [total, setTotal] = useState('')
    const removeCartHandler = async (index) => {
        const { data } = await axios.delete(`api/remove-cart/${carts[index].id}`)
        toast.notify(data.message, {
            position: 'bottom-right',
        })
        setCarts(carts.filter((i) => i !== carts[index]))
        setTotal(total - carts[index].price)
    }

    const checkoutHandler = async () => {
        const { data } = await axios.post('api/orders/create')
        window.open(data.redirect_url)
    }

    useEffect(() => {
        let getTotal = carts.map(cart => cart.price).reduce((x, y) => x + y, 0)
        setTotal(getTotal);
    }, [total])

    return (
        <App title="Your Cart">
            <div className="container">

                { carts.length > 0 ? 

                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">
                                    <span className="badge bg-primary">
                                        { carts.length }
                                    </span>
                                    <span className="ms-2">Your Cart </span> 
                                </div>
                                <div className="card-body">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Playlist Name</th>
                                                <th>Price</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { carts.map((cart, index) => (
                                                <tr key={index}>
                                                    <td>{ index + 1 }</td>
                                                    <td>{ cart.playlist.name }</td>
                                                    <td >Rp. { cart.price }</td>
                                                    <td>
                                                        <button onClick={() => removeCartHandler(index)} className="btn btn-danger btn-sm">Remove</button>
                                                    </td>
                                                </tr>
                                            ))}

                                            <tr>
                                                <td colSpan="2"></td>
                                                <td>Rp {total}</td>
                                                <td>
                                                    <button onClick={checkoutHandler} className="btn btn-primary btn-sm">Checkout</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-4">
                            <div className="card">
                                <div className="card-header">
                                    Your Summary
                                </div>
                                <div className="card-body">
                                    <button className="btn btn-primary">Checkout</button>
                                </div>
                            </div>
                        </div> */}
                    </div>

                : <div className="alert alert-info">Your cart is empty, please buy atleast one <Link to="/series">playlist</Link></div>
                
                }
            </div>
        </App>
    )
}
