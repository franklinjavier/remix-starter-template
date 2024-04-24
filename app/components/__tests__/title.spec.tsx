import { render, screen } from '@testing-library/react'

import { Title } from '../title'

describe('<Title />', () => {
  it('should render Title component', () => {
    render(<Title>Remix Starter Template</Title>)
    expect(screen.getByText('Remix Starter Template')).toBeInTheDocument()
  })
})
