import React from 'react'
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import {
  descriptors,
  moreDescriptors,
  roles,
  moreRoles,
} from '../data/descriptors'
import { scenarios } from '../data/scenarios'
import Card from '../components/card'
import HintDeck from '../components/hintDeck'

export const playSteps = [
  'Start: The first player establishes the world and scenario.',
  'Turns: Players go in order setting the next scene to roleplay.',
  'End: The last player describes the final confrontation.',
  `Epilogue: Go in reverse order describing your character's ending.`,
]

export const roleplayHints = [
  `Describe your character's feelings and reactions to what just happened.`,
  `Ask a question, and give someone else a chance to create a detail about the game by answering.`,
]

const defaultDescription = 'Undefined Enigma'
const defaultName = 'Adventurer McAdventurerFace'
const defaultPronouns = 'they/them'
const defaultPhysicalDescription = 'Indescribably amorphous'

export interface Character {
  description?: string
  name?: string
  pronouns?: string
  physicalDescription?: string
}

interface PlayPageProps {
  character: Character
  setCharacter: (character: Character) => void
  more: boolean
  setMore: (more: boolean) => void
  otherPlayers: string[]
  addPlayer: (player: string) => void
  removePlayer: (index: number) => void
  players: string[]
  playerOrder: number[]
  setPlayerOrder: (playerOrder: number[]) => void
}

type PlayPage = React.FC<PlayPageProps>

const randomFromArray = (arr: string[]): string =>
  arr[Math.floor(Math.random() * arr.length)]

const randomDescription = (more: boolean = false): string => {
  const numDescriptors = Math.floor(Math.random() * 2) + 1
  const chosenDescriptors: string[] = []
  const availableDescriptors = descriptors.concat(more ? moreDescriptors : [])
  const availableRoles = roles.concat(more ? moreRoles : [])
  while (chosenDescriptors.length < numDescriptors) {
    const descriptor = randomFromArray(availableDescriptors)
    if (!chosenDescriptors.includes(descriptor)) {
      chosenDescriptors.push(descriptor)
    }
  }
  const role = randomFromArray(availableRoles)
  return `${chosenDescriptors.join(' ')} ${role}`
}

export function characterToString(character: Character): string {
  return `${character.name || defaultName} | ${character.pronouns || defaultPronouns} | ${character.description || defaultDescription} | ${character.physicalDescription || defaultPhysicalDescription}`
}

function SortablePlayerItem({ id, player }: { id: number; player: string }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id })

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.6 : 1,
  }

  return (
    <li ref={setNodeRef} style={style} className='sortable-item'>
      <button
        type='button'
        aria-label={`Drag to reorder ${player}`}
        className='sortable-handle'
        {...attributes}
        {...listeners}
      >
        ☰
      </button>
      <span>{player}</span>
    </li>
  )
}

export const playPages: PlayPage[] = [
  ({ character, setCharacter, more, setMore }) => (
    <div>
      <h2>Character Creation</h2>
      <p>
        <small>These are just suggestions.</small>{' '}
        <input
          id='more'
          type='checkbox'
          onChange={(e) => setMore?.(e.target.checked)}
          checked={more}
        />{' '}
        more
      </p>
      <p>
        <strong>Descriptors</strong>:{' '}
        {descriptors.concat(more ? moreDescriptors : []).join(', ')}
      </p>
      <p>
        <strong>Roles</strong>: {roles.concat(more ? moreRoles : []).join(', ')}
      </p>
      <p>
        <strong>Adventurer Description</strong> <br />
        <input
          id='description'
          type='text'
          value={character.description || ''}
          onChange={(e) =>
            setCharacter?.({ ...character, description: e.target.value })
          }
        />
        <br />
        <button
          onClick={() =>
            setCharacter?.({
              ...character,
              description: randomDescription(more),
            })
          }
        >
          Randomize
        </button>
      </p>
      <p>
        <small>Remember, this is simply a place to start.</small>
      </p>
    </div>
  ),
  ({ character, setCharacter }) => (
    <div>
      <h2>Character Creation</h2>
      <p>
        <strong>{character.description || defaultDescription}</strong>
        <br />
        Name:{' '}
        <input
          type='text'
          value={character.name || ''}
          onChange={(e) => setCharacter({ ...character, name: e.target.value })}
        />{' '}
        <br />
        Pronouns:{' '}
        <input
          type='text'
          value={character.pronouns || ''}
          onChange={(e) =>
            setCharacter({ ...character, pronouns: e.target.value })
          }
        />{' '}
        <br />
        Physical Description:{' '}
        <input
          type='text'
          value={character.physicalDescription || ''}
          onChange={(e) =>
            setCharacter({
              ...character,
              physicalDescription: e.target.value,
            })
          }
        />
      </p>
    </div>
  ),
  ({ character, otherPlayers, addPlayer, removePlayer }) => {
    const [newPlayer, setNewPlayer] = React.useState('')
    const submitNewPlayer = () => {
      if (newPlayer.trim()) {
        addPlayer(newPlayer.trim())
        setNewPlayer('')
        document.getElementById('new-player')?.focus()
      }
    }

    return (
      <div>
        <h2>Characters</h2>
        <p>
          Simply copy/paste to share character descriptions with other players.
        </p>
        <ul>
          <li key='player'>{characterToString(character)}</li>
          {otherPlayers.map((player, index) => {
            return (
              <li key={`other-player-${index}`}>
                {player}{' '}
                <button onClick={() => removePlayer(index)}>Remove</button>
              </li>
            )
          })}
        </ul>
        <input
          id='new-player'
          type='text'
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              submitNewPlayer()
            }
          }}
          onChange={(e) => setNewPlayer(e.target.value)}
          value={newPlayer}
        />
        <button onClick={submitNewPlayer}>Add Player</button>
      </div>
    )
  },
  ({ players, playerOrder, setPlayerOrder }) => {
    const sensors = useSensors(
      useSensor(PointerSensor),
      useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
      })
    )

    const handleDragEnd = (event: DragEndEvent) => {
      const { active, over } = event
      if (!over || active.id === over.id) {
        return
      }

      const oldIndex = playerOrder.indexOf(Number(active.id))
      const newIndex = playerOrder.indexOf(Number(over.id))

      if (oldIndex < 0 || newIndex < 0 || oldIndex === newIndex) {
        return
      }

      setPlayerOrder(arrayMove(playerOrder, oldIndex, newIndex))
    }

    return (
      <div>
        <h2>Turn Order</h2>
        <p>
          Drag and drop to reorder. (Alternatively: Tab, shift+tab, enter, arrow
          keys, esc.)
        </p>
        <button
          onClick={() => {
            const shuffledOrder = [...playerOrder].sort(
              () => Math.random() - 0.5
            )
            setPlayerOrder(shuffledOrder)
          }}
        >
          Randomize
        </button>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={playerOrder}
            strategy={verticalListSortingStrategy}
          >
            <ul className='sortable-list'>
              {playerOrder.map((index) => (
                <SortablePlayerItem
                  key={index}
                  id={index}
                  player={players[index]}
                />
              ))}
            </ul>
          </SortableContext>
        </DndContext>
      </div>
    )
  },
  ({ players, playerOrder }) => {
    return (
      <div>
        <h2>Play!</h2>
        <h3>Players</h3>
        <div className='player-cards'>
          {playerOrder.map((playerIdx, turnOrder) => {
            const parts = players[playerIdx].split('|').map((s) => s.trim())
            const title = (
              parts.length > 1 ? parts[0] : `Player ${turnOrder + 1}`
            ).replace(/ /g, '\u00A0')
            let content: React.ReactNode
            if (parts.length === 4) {
              const [, pronouns, description, physDesc] = parts
              content = (
                <div className='player-card-content'>
                  <div className='player-inline'>
                    <span className='player-description'>{description}</span>
                    <span className='player-pronouns'>{pronouns}</span>
                  </div>
                  <p className='player-phys-desc'>{physDesc}</p>
                </div>
              )
            } else {
              content = (
                <div className='player-card-content'>
                  {parts.slice(1).map((part, i) => (
                    <p key={i}>{part}</p>
                  ))}
                </div>
              )
            }
            return (
              <Card
                key={playerIdx}
                type='player'
                number={turnOrder + 1}
                title={title}
              >
                {content}
              </Card>
            )
          })}
        </div>
        <div className='play-decks'>
          <div className='play-deck'>
            <h3>Steps</h3>
            <HintDeck count={playSteps.length}>
              {(i, prev, next) => {
                const [title, ...rest] = playSteps[i].split(': ')
                return (
                  <Card
                    type='step'
                    number={i + 1}
                    title={title}
                    prev={prev}
                    next={next}
                  >
                    <p>{rest.join(': ')}</p>
                  </Card>
                )
              }}
            </HintDeck>
          </div>
          <div className='play-deck'>
            <h3>Roleplay Hint</h3>
            <HintDeck count={roleplayHints.length}>
              {(i, prev, next) => (
                <Card
                  type='roleplay hint'
                  number={i + 1}
                  title='Suggestion'
                  prev={prev}
                  next={next}
                >
                  <p>{roleplayHints[i]}</p>
                </Card>
              )}
            </HintDeck>
          </div>
          <div className='play-deck'>
            <h3>Campaign Scenario</h3>
            <small>Quick starter. Try making your own!</small>
            <HintDeck count={scenarios.length}>
              {(i, prev, next) => (
                <Card
                  type='campaign scenario'
                  number={i + 1}
                  title={scenarios[i].name}
                  prev={prev}
                  next={next}
                >
                  {scenarios[i].description.map((paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                  ))}
                </Card>
              )}
            </HintDeck>
          </div>
        </div>
      </div>
    )
  },
]
