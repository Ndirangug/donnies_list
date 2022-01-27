import { io } from 'socket.io-client'
import Peer from 'peerjs'
import { userStore } from 'src/store/user_store'

export const socket = io(process.env.WEBSOCKET_URL)
export const peer = new Peer()

socket.on('user_online', ({ userId, peerId }) => {
  console.log('peer side user_online ', userId, peerId)
  userStore.updateUser({ id: userId, peerId, online: true })
  console.log(userStore.allUsers.find((user) => user.id === userId))
  console.log('afte')
})
