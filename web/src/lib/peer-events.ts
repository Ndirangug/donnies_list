import Peer from 'peerjs'
import { socket } from './socket-events'

export const peer = new Peer(null, {
  debug: 3,
  config: {
    iceServers: [
      { urls: 'stun:stun.donnieslist.com' },
      {
        urls: 'turn:donnieslist@turn.donnieslist.com',
        credential: 'donnieslist',
      },
    ],
  },
})

// {
//   config: {
//     'iceServers': [
//       { url: 'stun:stun.l.google.com:19302' },
//       { url: 'turn:homeo@turn.bistri.com:80', credential: 'homeo' }
//     ]
//   }

//type mutateUserPeerOnline = (options?: MutationFunctionOptions<any, GraphQLOperationVariables, DefaultContext, ApolloCache<any>>) => Promise<...>

export const setOnlinePeer = (userId, mutateUserPeerOnline) => {
  peer.on('open', (peerId) => {
    console.log('My peer ID is: ' + peerId)

    socket.emit('user_online', { userId, peerId })

    mutateUserPeerOnline({
      variables: { id: parseInt(userId), peerId, isOnline: true },
    })
  })
}

export const makeCall = async (peerId: string) => {
  try {
    console.log('trying to get call')

    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false,
    })
    console.log(stream)

    console.log('got audio')
    socket.emit('peer starting call', peerId)
    const call = peer.call(peerId, stream)
    call.on('stream', function (remoteStream) {
      // Show stream in some video/canvas element.
      const audioElement = document.getElementById('audio')
      audioElement.srcObject = remoteStream
      audioElement.play()
      console.log('now streaming')
    })
  } catch (err) {
    console.log('Failed to get local stream')
    console.error(err)
  }
}

function endCall(stream: MediaStream) {
  stream.getTracks().forEach((track) => {
    track.stop()
  })
}

peer.on('call', async (call) => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true,
    })

    call.answer(stream)
    call.on('stream', function (remoteStream) {
      alert('receuived call!')

      const audioElement = document.getElementById('audio')
      audioElement.srcObject = remoteStream
      audioElement.play()
      console.log('now streaming response')
    })
  } catch (err) {
    console.log('Failed to get local stream')
    console.error(err)
  }
})
