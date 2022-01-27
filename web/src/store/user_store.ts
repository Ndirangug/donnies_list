import { makeAutoObservable, observable } from 'mobx'
import { User } from 'types/graphql'

class UserStore {
  allUsers = observable.array<User>([])

  constructor() {
    makeAutoObservable(this)
  }

  updateUser(user: User) {
    const index = this.allUsers.findIndex((u) => u.id === user.id)
    this.allUsers.map((u, i) => {
      if (user.id === u.id) {
        return user
      }

      return u
    })
  }

  fillUsers(users: User[]) {
    this.allUsers = users
  }
}

export const userStore = new UserStore()
