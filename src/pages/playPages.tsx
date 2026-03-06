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
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id })

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.6 : 1,
  }

  return (
    <li ref={setNodeRef} style={style} className="sortable-item">
      <button
        type='button'
        aria-label={`Drag to reorder ${player}`}
        className="sortable-handle"
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
        <em>These are just suggestions.</em>{' '}
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
        <em>Remember, this is simply a place to start.</em>
      </p>
    </div>
  ),
  ({ character, setCharacter }) => (
    <div>
      <h2>Character Creation</h2>
      <p>
        <strong>{character.description || 'Undefined Enigma'}</strong>
        <br />
        Name:{' '}
        <input
          type='text'
          value={character.name || ''}
          onChange={(e) =>
            setCharacter({ ...character, name: e.target.value })
          }
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
          style={{ width: '100%' }}
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
        <p>Simply copy/paste to share character descriptions with other players.</p>
        <ul>
          <li key='player'>
            {characterToString(character)}
          </li>
          {(otherPlayers || []).map((player, index) => {
            return (
              <li key={`other-player-${index}`}>
                {player} <button onClick={() => removePlayer(index)}>Remove</button>
              </li>
            )
          })}
        </ul>
        <input
          id='new-player'
          type='text'
          onKeyUp={(e) => { if (e.key === 'Enter') { submitNewPlayer() }}}
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
        <p>Drag and drop to reorder. (Alternatively: Tab, shift+tab, enter, arrow keys, esc.)</p>
        <button onClick={() => {
          const shuffledOrder = [...playerOrder].sort(() => Math.random() - 0.5)
          setPlayerOrder(shuffledOrder)
        }}>Randomize</button>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={playerOrder}
            strategy={verticalListSortingStrategy}
          >
            <ul className="sortable-list">
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
    const [currentHintIndex, setCurrentHintIndex] = React.useState(0)
    const hint = roleplayHints[currentHintIndex]
    const [currentScenarioIndex, setCurrentScenarioIndex] = React.useState(0)
    const scenario = scenarios[currentScenarioIndex]
    return (
      <div>
        <h2>Play!</h2>
        On your turn: set a new scene.
        <ol>
          {playerOrder.map((index) => (
            <li key={index}>{players[index]}</li>
          ))}
        </ol>
        <div>
          <div className="header-with-button">
            <h3>Roleplay Hint</h3>
            <button onClick={() => setCurrentHintIndex((currentHintIndex + 1) % roleplayHints.length)}>Next Hint</button>
          </div>
          <p><strong>{`[Suggestion #${currentHintIndex + 1}]`}</strong> {hint}</p>
          <div className="header-with-button">
            <h3>Campaign Scenario</h3>
            <button onClick={() => setCurrentScenarioIndex((currentScenarioIndex + 1) % scenarios.length)}>Next Scenario</button>
          </div>
          <p><strong>{`[${currentScenarioIndex + 1} - ${scenario.name}]`}</strong> {scenario.description[0]}</p>
          {scenario.description.slice(1).map((paragraph, index) => <p key={`scenario-${index}`}>{paragraph}</p>)}
        </div>
      </div>
    )
  }
]

const roleplayHints = [
  `Describe your character's feelings and reactions to what just happened.`,
  `Ask a question, and give someone else a chance to create a detail about the game by answering.`,
]

const scenarios = [
  {
    name: 'Ashendale',
    description: [
`
The small village of Ashendale was cold and rainy on the day that the gnolls attacked.
The Bolvar farmstead was burning in the distance,
and the villagers were screaming as the beasts charged up the road into town.
But several Adventurers made their stand there at the edge of town and were victorious.
`,
`
Once the beasts were defeated and the villagers were calmed,
those five Adventurers were able to breathe and relax.
They found themselves sitting at a table in the local inn,
with free mugs of ale in front of them as meager thanks for their good deeds.
`,
    ],
  },
  {
    name: 'The Jungle of the Divine',
    description: [
`
A hundred years ago, a flourishing city stood in the heart of the Jungle of the Divine.
Those who fled the city during its fall have said that it had been beautiful—a
true triumph over the nearly inhospitable jungle it was inexplicably built in.
But even those that lived there at the end didn't know how it thrived,
how the city was able to support the massive population it supposedly did
when the jungles are haunted by marauding beasts, monsters, and bandits making resupply difficult.
`,
`
Upon arriving at the ruins of the city,
battered and bruised from the journey,
a group of Adventurers found a moment to rest
in what used to be a square or perhaps a small market.
`,
    ],
  },
  {
    name: 'Across the Rolling Tundra',
    description: [
`
The snowy tundras of the Graton Wastes were supposed to be empty,
though that had never stopped the rich and delusional from sending Adventurers into it to search for anything of value.
The occasional successful expedition that returned with loads of treasure from ancient ruins only fueled those delusions.
`,
`
When this group of Adventurers was commissioned for this expedition,
the promise of treasure was great.
This lead was supposed to be a sure thing!
The treasure map was legible, though quite old, and seemed legit.
`,
`
The trip took longer than the Adventurers were promised, but finally,
as the group settled into their camp for the evening
and the almost omnipresent snow cleared from the area,
they caught their first glimpse of the promised ruins across the rolling tundra.
`,
    ],
  },
  {
    name: 'On the Warpath',
    description: [
`
When the Pinlok Army came looking for conscripts to fight the ever present war in the west,
no excuse was good enough. The first time they came, they took volunteers.
The next time, most healthy adults whether they wanted to go or not.
After that, they took slightly older recruits, or later anyone with a “non essential” job.
Until, after so many iterations, it's almost surprising that they left anyone behind at all.
`,
`
This war of aggression had been going on for generations,
and the emperor seemed intent on throwing everyone into the meat grinder to finally end it.
But, for those who didn't want to fight in this war, where was there to go?
The most obvious solution was to run,
but as our Adventurers settled into their hidden camp for the night,
one question loomed.
They could run, but where could they possibly hide?
`,
    ],
  },
]
