import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import ReactRouter from './router'
import { authenticatedUser, aNumberOfCart } from './store'

export default function App() {
  const [mounted, setMounted] = useState(false)
  const setAuth = useSetRecoilState(authenticatedUser)
  const setAnumberOfCart = useSetRecoilState(aNumberOfCart)
  useEffect(() => {
    const getUser = async () => {
      setMounted(false)
      try {
        let { data } = await axios.get('/api/me')
        setAuth({ user:data.data, check:true })
        setMounted(true)
      } catch {
        setMounted(true)
        console.log('You are not log in');
      }
    }

    const getCarts = async () => {
      let { data } = await axios.get('api/carts')
      setAnumberOfCart(data.data);
    }

    getCarts()
    getUser()
  }, [setAuth])

  if (!mounted) {
    return <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      </div>
  }

  return (
    <div>
      <ReactRouter/>
    </div>
  )
}