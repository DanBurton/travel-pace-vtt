import React from 'react'
import { NavLink, useParams } from 'react-router'
import { Character, characterToString, playPages } from './playPages'

export default function Play() {
  const params = useParams()
  const page: number = parseInt(params.page || '0', 10) || 0
  const isLastPage: boolean = page >= playPages.length - 1
  const BackButton = () => (
    <NavLink className={'link-button'} to={page > 0 ? `/play/${page - 1}` : '/'}>Back</NavLink>
  )
  const NextButton = () =>
    isLastPage ? <></> : <NavLink className={'link-button'} to={`/play/${page + 1}`}>Next</NavLink>

  const [character, setCharacter] = React.useState<Character>({
    description: 'Haunted Untrained Bard',
    name: 'Herpy Derpson',
    pronouns: 'he/him',
    physicalDescription: 'A vaguely humanoid silhouette, perpetually shrouded in a ghostly mist.',
  })
  const [more, setMore] = React.useState(false)
  const [otherPlayers, setOtherPlayers] = React.useState<string[]>([
    'Cloud | he/him | Savvy Ace Soldier | Spiky-haired edgy antisocial twink, shoulder pauldron, baggy pants, big sword',
    'Pat | she/her | Elven Well-Traveled Sparkthrower | Diva in a bright orange sun dress, intense fiery red eyes and bouncy curly short hair',
    'Jordan | they/them | Scatterbrained Clerk | tall and gangly, pocket protector and cargo shorts, facial expression of constant apology',
  ])
  const players = [characterToString(character), ...otherPlayers]
  // playerOrder is an array of indices into the players array, representing the current turn order.
  const [playerOrder, setPlayerOrder] = React.useState<number[]>([
    0, 1, 2, 3,
  ])
  const PageContent = playPages[page]
  const resetPlayerOrder = (length: number) => setPlayerOrder(Array.from({ length }, (_, i) => i))
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
