import React from 'react'
import { NavLink, useParams } from 'react-router'
import { Character, characterToString, playPages } from './playPages'
import {
  flags,
  sampleCharacter,
  sampleOtherPlayers,
  samplePlayerOrder,
} from '../data/dev'

export default function Play() {
  const params = useParams()
  const page: number = parseInt(params.page || '0', 10) || 0
  const isLastPage: boolean = page >= playPages.length - 1
  const BackButton = () => (
    <NavLink
      className={'link-button'}
      to={page > 0 ? `/play/${page - 1}` : '/'}
    >
      Back
    </NavLink>
  )
  const NextButton = () =>
    isLastPage ? (
      <></>
    ) : (
      <NavLink className={'link-button'} to={`/play/${page + 1}`}>
        Next
      </NavLink>
    )

  const [character, setCharacter] = React.useState<Character>(
    flags.prefill ? sampleCharacter : {}
  )
  const [more, setMore] = React.useState(false)
  const [otherPlayers, setOtherPlayers] = React.useState<string[]>(
    flags.prefill ? sampleOtherPlayers : []
  )
  const players = [characterToString(character), ...otherPlayers]
  // playerOrder is an array of indices into the players array, representing the turn order.
  const [playerOrder, setPlayerOrder] = React.useState<number[]>(
    flags.prefill ? samplePlayerOrder : [0]
  )
  const resetPlayerOrder = (length: number) =>
    setPlayerOrder(Array.from({ length }, (_, i) => i))
  const addPlayer = (player: string) => {
    const newOtherPlayers = [...otherPlayers, player]
    setOtherPlayers(newOtherPlayers)
    resetPlayerOrder(1 + newOtherPlayers.length)
  }
  const removePlayer = (index: number) => {
    const newOtherPlayers = otherPlayers.filter((_, i) => i !== index)
    setOtherPlayers(newOtherPlayers)
    resetPlayerOrder(1 + newOtherPlayers.length)
  }

  const PageContent = playPages[page]
  return (
    <div>
      <BackButton /> <NextButton />
      <PageContent
        character={character}
        setCharacter={setCharacter}
        more={more}
        setMore={setMore}
        otherPlayers={otherPlayers}
        addPlayer={addPlayer}
        removePlayer={removePlayer}
        players={players}
        playerOrder={playerOrder}
        setPlayerOrder={setPlayerOrder}
      />
      <NextButton />
    </div>
  )
}
