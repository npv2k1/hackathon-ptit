import { message, notification } from 'antd'
import { useContext, useEffect, useMemo, useState } from 'react'
import { io } from 'socket.io-client'
import { AppActionType, AppCtx } from '../contexts/AppContext'

const openNotification = ({ user, status }) => {
  const args = status
    ? {
        message: `${user.name} has joined the room`,
        description: '',
        duration: 3,
      }
    : {
        message: `${user.name} has leave the room`,
        description: '',
        duration: 3,
      }
  notification.open(args)
}

export function useSocket() {
  const [isConnected, setIsConnected] = useState(false)

  const socket = useMemo(() => {
    fetch('/api/socket')
    let socket = io()

    socket.on('connect', () => {
      console.log('connected')
    })
    return socket
    // return io(`/api/socket`, {
    //   transports: ['websocket'],
    //   auth: {
    //     token:
    //       typeof window !== 'undefined' ? localStorage.getItem('token') : '',
    //   },
    // })
  }, [])
  useEffect(() => {
    socket.on('connect', () => {
      console.log('❤️socket connected', socket.id)
      setTimeout(() => {
        setIsConnected(socket.connected)
        socket.emit('connected')
        socket.emit('init-scene')
        socket.emit('get-user')
        socket.emit('list-user')
        socket.emit('init-message')
        console.log('❤️socket connected', socket.id)
      }, 1000)
    })

    return () => {
      // socket.off('user-disconnect')
      // socket.off('error')
      // socket.off('me')
      // socket.off('connect')
      // socket.off('disconnect')
    }
  }, [socket])

  // useEffect(() => {
  //   // Disconnect from the socket when the component unmounts
  //   return () => {
  //     socket.disconnect()
  //   }
  // }, [])
  return { socket, isConnected }
}
