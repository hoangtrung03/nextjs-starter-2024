import { render, screen } from '@/tests/test-utils'

import { Banner } from '.'

describe('Banner', () => {
  it('should render the heading', () => {
    render(<Banner />)

    // Assert
    screen.getByRole('heading', { name: /Banner/i })
  })
})
