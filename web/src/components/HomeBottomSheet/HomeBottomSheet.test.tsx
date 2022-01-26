import { render } from '@redwoodjs/testing/web'

import HomeBottomSheet from './HomeBottomSheet'

describe('HomeBottomSheet', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomeBottomSheet />)
    }).not.toThrow()
  })
})
