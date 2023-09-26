import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login'
import Chat from '../components/Chat'
import { useDispatch, useSelector } from 'react-redux';
import actionCreators from '../state/index'

const Home: NextPage = () => {
  const dispatch = useDispatch();
  let token = useSelector(state => state.token)
  return (
    <>
      {/* {token.token?<Chat/>:<Login/>} */}
      <Chat/>

    </>
  )
}

export default Home