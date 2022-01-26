import type { UsersQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import UserCard from '../UserCard/UserCard'

export const QUERY = gql`
  query UsersQuery {
    users {
      id
      firstName
      lastName
      username
      online
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ users }: CellSuccessProps<UsersQuery>) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id} className="m-10">
            <UserCard user={user} />
          </div>
        )
      })}
    </div>
  )
}
