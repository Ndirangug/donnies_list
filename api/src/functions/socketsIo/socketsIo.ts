import type { APIGatewayEvent, Context } from 'aws-lambda'
import { logger } from 'src/lib/logger'

import express from 'express'
import cors from 'cors'
import https from 'https'
import * as fs from 'fs'

const app = express()

//app.use(cors({ origin: 'http://localhost:8910' }))
app.use(cors())
const server = https.createServer(
  {
    key: fs.readFileSync('api/certificates/localhost.key'),
    cert: fs.readFileSync('api/certificates/localhost.crt'),
  },
  app
)
import { Server } from 'socket.io'
import { user } from 'src/services/users/users'
const io = new Server(server, { cors: { origin: '*' } })

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
export const handler = async (event: APIGatewayEvent, context: Context) => {
  logger.info('Invoked socketsIo function')

  setupWebSockets()

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      data: 'socketsIo function',
    }),
  }
}

function setupWebSockets() {
  io.on('connection', (socket) => {
    console.log('a user connected')

    socket.on('user_online', ({ userId, peerId }) => {
      console.log('user_online ', userId, peerId)
      socket.broadcast.emit('user_online', { userId, peerId })
    })

    socket.on('join_room', (room, user) => {
      console.log('join_room', user, room)
      socket.join(room) //join room.
      socket.to(room).emit('join_room', user) //send to room.
    })

    socket.on('peer starting call', (user) => {
      console.log('placing call', user)
    })

    //TODO handle this client socket dosconnected
    socket.on('disconnect', () => {
      //console.log('user disconnected')
    })
  })

  server.listen(3000, () => {
    console.log('listening on *:3000')
  })

  app.get('/', (req, res) => {
    res.send(`<script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io();
</script>`)
  })
}
