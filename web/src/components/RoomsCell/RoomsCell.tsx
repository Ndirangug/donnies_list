import type { RoomsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import RoomCard from '../RoomCard/RoomCard'

export const QUERY = gql`
  query RoomsQuery {
    rooms {
      id
      title
      tags {
        id
        name
      }
      participants {
        id
        firstName
        lastName
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ rooms }: CellSuccessProps<RoomsQuery>) => {
  return (
    <div>
      {rooms.map((room) => {
        return (
          <div key={room.id} className="m-10">
            <RoomCard room={room} />
          </div>
        )
      })}
    </div>
  )
}
