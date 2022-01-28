import { io } from 'socket.io-client'

import { userStore } from 'src/store/user_store'

//export const socket = io(process.env.WEBSOCKET_URL)
export const socket = io('https://192.168.244.78:3000')

// socket events on client side

socket.on('user_online', ({ userId, peerId }) => {
  console.log('peer side user_online ', userId, peerId)
  userStore.updateUser({ id: userId, peerId, online: true })
  console.log(userStore.allUsers.find((user) => user.id === userId))
  console.log('after')
})
