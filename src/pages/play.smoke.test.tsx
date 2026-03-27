import { cleanup, render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { afterEach, describe, expect, it } from 'vitest'
import Play from './play'

function renderPlay(initialPath: string) {
  const router = createMemoryRouter(
    [{ path: '/play/:page?', element: <Play /> }],
    { initialEntries: [initialPath] }
  )

  render(<RouterProvider router={router} />)
  return router
}

afterEach(() => {
  cleanup()
})

describe('Play smoke', () => {
  it('renders page 0', () => {
    const router = renderPlay('/play/0')

    expect(
      screen.getByRole('heading', { name: 'Character Creation' })
    ).toBeInTheDocument()
    expect(screen.getByText('Adventurer Description')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '→' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Next' })).toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/play/0')
  })

  it('renders page 1', () => {
    const router = renderPlay('/play/1')

    expect(
      screen.getByRole('heading', { name: 'Character Creation' })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '←' })).toHaveAttribute(
      'href',
      '/play/0'
    )
    expect(screen.getAllByRole('textbox')).toHaveLength(3)
    expect(router.state.location.pathname).toBe('/play/1')
  })

  it('renders the final Play page directly', () => {
    const router = renderPlay('/play/4')

    expect(screen.getByRole('heading', { name: 'Play!' })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: '→' })).not.toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/play/4')
  })
})
