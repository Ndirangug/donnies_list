import { io } from 'socket.io-client'
import Peer from 'peerjs'

export const socket = io('http://localhost:3000/')
export const peer = new Peer()

socket.on('user_online', (userId, peerId) => {
  console.log('peer side user_online ', userId, peerId)
})
