import { makeAutoObservable, observable } from 'mobx'
import { User } from 'types/graphql'

class UserStore {
  allUsers = observable.array<User>([])
  currentUser: User | null = null

  constructor() {
    makeAutoObservable(this)
  }

  updateUser(user: User) {
    const oldUser = this.allUsers.find((u) => {
      return u.id == user.id
    })

    Object.assign(oldUser, user)
  }

  fillUsers(users: User[]) {
    this.allUsers.push(...users)
  }

  setCurrentUser(userId: number) {
    const user = this.allUsers.find((u) => {
      return u.id == userId
    })

    this.currentUser = user
  }
}

export const userStore = new UserStore()
