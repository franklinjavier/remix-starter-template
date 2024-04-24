import { createRemixStub } from '@remix-run/testing'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ReactElement, ReactNode } from 'react'

function AllTheProviders({ children }: { children: ReactNode }) {
  const RemixStub = createRemixStub([
    {
      path: '/',
      Component: () => <>{children}</>,
    },
  ])
  return <RemixStub />
}

export function renderWithRouter(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  const user = userEvent.setup()

  return {
    user,
    ...render(ui, { wrapper: AllTheProviders, ...options }),
  }
}

export * from '@testing-library/react'
