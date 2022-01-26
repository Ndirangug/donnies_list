import { render } from '@redwoodjs/testing/web'

import StringAvatar from './StringAvatar'

describe('StringAvatar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StringAvatar />)
    }).not.toThrow()
  })
})
