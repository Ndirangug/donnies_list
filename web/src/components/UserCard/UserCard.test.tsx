import { render } from '@redwoodjs/testing/web'

import UserCard from './UserCard'

describe('UserCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserCard />)
    }).not.toThrow()
  })
})
