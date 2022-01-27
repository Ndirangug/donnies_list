import type { UsersQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { userStore } from 'src/store/user_store'
import { observer } from 'mobx-react'

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
  userStore.fillUsers(users)

  const UsersView = observer(({ store }) => (
    <div>
      {store.allUsers.map((user) => {
        return (
          <div key={user.id} className="m-10">
            <UserCard user={user} />
          </div>
        )
      })}
    </div>
  ))

  return <UsersView store={userStore} />
}
