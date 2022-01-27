
export const SET_USER_ONLINE = gql`
  mutation SetUserOnlineMutation($isOnline: Boolean!, $id: Int!) {
    updateUser(id: $id, input: { online: $isOnline }) {
      id
      username
      firstName
      lastName
      peerId
      online
    }
  }
`

export const SET_USER_PEER_ID = gql`
  mutation SetUserPeerIdMutation($peerId: String!, $id: Int!) {
    updateUser(id: $id, input: { peerId: $peerId }) {
      id
      username
      firstName
      lastName
      peerId
      online
    }
  }
`

export const SET_USER_ONLINE_PEER = gql`
  mutation SetUserOnlinePeerMutation(
    $isOnline: Boolean!
    $peerId: String!
    $id: Int!
  ) {
    updateUser(id: $id, input: { online: $isOnline, peerId: $peerId }) {
      id
      username
      firstName
      lastName
      peerId
      online
    }
  }
`
