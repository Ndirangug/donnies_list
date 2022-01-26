export const schema = gql`
  type Room {
    id: Int!
    name: String!
    title: String!
    createdAt: DateTime!
    participants: [User]!
    tags: [Tag]!
  }

  type Query {
    rooms: [Room!]! @requireAuth
    room(id: Int!): Room @requireAuth
  }

  input CreateRoomInput {
    name: String!
    title: String!
  }

  input UpdateRoomInput {
    name: String
    title: String
  }

  type Mutation {
    createRoom(input: CreateRoomInput!): Room! @requireAuth
    updateRoom(id: Int!, input: UpdateRoomInput!): Room! @requireAuth
    deleteRoom(id: Int!): Room! @requireAuth
  }
`
