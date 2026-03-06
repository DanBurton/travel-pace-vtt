import React from 'react'
import { NavLink, BrowserRouter, Routes, Route, useOutlet, useLocation } from 'react-router'
import Learn from './pages/learn'
import Play from './pages/play'

function PdfButton() {
  return (
    <NavLink
      to='/Travel%20Pace%20v0.6.1.pdf'
      target='_blank'
      rel='noopener noreferrer'
    >
      PDF
    </NavLink>
  )
}

function LearnButton() {
  const location = useLocation()
  const active = location.pathname.startsWith('/learn')
  console.log('LearnButton active:', active)
  return <NavLink className={active ? 'activeNav' : 'inactiveNav'} to='/learn'>Learn</NavLink>
}

function PlayButton() {
  const location = useLocation()
  const active = location.pathname.startsWith('/play')
  console.log('PlayButton active:', active)
  return <NavLink className={active ? 'activeNav' : 'inactiveNav'} to='/play'>Play</NavLink>
}

function AppLayout() {
  const children = useOutlet()

  return (
    <div>
      <div id='header'>
        <h1><NavLink to='/'>Travel Pace</NavLink></h1>
        <nav>
          <PdfButton />
          <LearnButton />
          <PlayButton />
        </nav>
      </div>
      <div id='page'>{children}</div>
    </div>
  )
}

function Home() {
  return (
    <div>
      A game by Warren.
      <br />
      Web app by Dan Burton.
    </div>
  )
}

export default function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='/learn/:page?' element={<Learn />} />
          <Route path='/play/:page?' element={<Play />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
