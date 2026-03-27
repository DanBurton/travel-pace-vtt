import React from 'react'
import {
  ScrollRestoration,
  NavLink,
  Route,
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
  useOutlet,
} from 'react-router'
import Learn from './pages/learn'
import Play from './pages/play'

const basename = import.meta.env.BASE_URL

function AppLayout() {
  const children = useOutlet()

  return (
    <div>
      <ScrollRestoration />

      <div id='header'>
        <h1>
          <NavLink to='/'>Travel Pace</NavLink>
        </h1>
        <nav>
          <a
            href={`${basename}Travel%20Pace%20v0.6.1.pdf`}
            target='_blank'
            rel='noopener noreferrer'
          >
            PDF
          </a>
          <NavLink
            to='/learn'
            className={({ isActive }) =>
              isActive ? 'activeNav' : 'inactiveNav'
            }
          >
            Learn
          </NavLink>
          <NavLink
            to='/play'
            className={({ isActive }) =>
              isActive ? 'activeNav' : 'inactiveNav'
            }
          >
            Play
          </NavLink>
        </nav>
      </div>
      <div id='page'>{children}</div>
    </div>
  )
}

function Home() {
  return (
    <div className='home'>
      <p className='home-pitch'>
        An improv RPG designed for quick pick-up and play. Create characters,
        narrate scenes, and roleplay the moments in between.
      </p>
      <p className='home-attribution'>
        A game by Warren. Web app by Dan Burton.
      </p>
      <div className='home-ctas'>
        <NavLink to='/learn'>Learn the Rules</NavLink>
        <NavLink to='/play'>Start Playing</NavLink>
      </div>
    </div>
  )
}

const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path='/learn/:page?' element={<Learn />} />
      <Route path='/play/:page?' element={<Play />} />
    </Route>
  )
)

export default function App(): React.ReactElement {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}
