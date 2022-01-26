import type { FindRoomQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import RoomCard from '../RoomCard/RoomCard'

export const QUERY = gql`
  query FindRoomQuery($id: Int!) {
    room: room(id: $id) {
      id
      title
      participants {
        firstName
        lastName
        peerId
      }
      tags {
        id
        name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ room }: CellSuccessProps<FindRoomQuery>) => {
  return <RoomCard room={room} />
}
