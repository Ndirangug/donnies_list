export const schema = gql`
  type User {
    id: Int!
    username: String!
    firstName: String!
    lastName: String!
    email: String
    peerId: String
    roomId: Int
    categoryId: Int!
    room: Room
    category: Category
    role: Role!
  }

  enum Role {
    HOST
    COHOST
    SPEAKER
    AUDIENCE
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    username: String!
    firstName: String!
    lastName: String!
    email: String
    peerId: String
    roomId: Int
    categoryId: Int!
    role: Role!
  }

  input UpdateUserInput {
    username: String
    firstName: String
    lastName: String
    email: String
    peerId: String
    roomId: Int
    categoryId: Int
    role: Role
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
    #addToRoom(id: Int!, roomId: Int!): User! @requireAuth
  }
`
