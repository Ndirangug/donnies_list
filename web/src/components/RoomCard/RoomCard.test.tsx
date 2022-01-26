import { render } from '@redwoodjs/testing/web'

import RoomCard from './RoomCard'

describe('RoomCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RoomCard />)
    }).not.toThrow()
  })
})
