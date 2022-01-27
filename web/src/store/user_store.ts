import { makeAutoObservable } from 'mobx'
import { User } from 'types/graphql'

class UserStore {
  allUsers: User[] = []

  constructor() {
    makeAutoObservable(this)
  }

  updateUser(user: User) {
    const index = this.allUsers.findIndex((u) => u.id === user.id)
    this.allUsers[index] = user
  }

  fillUsers(users: User[]) {
    this.allUsers = users
  }
}

export const userStore = new UserStore()
