import React from "react";
import { descriptors, roles } from "../data/descriptors";

const randomFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomAdventurer = () => {
  const numDescriptors = Math.floor(Math.random() * 2) + 1;
  const chosenDescriptors = [];
  while (chosenDescriptors.length < numDescriptors) {
    const descriptor = randomFromArray(descriptors);
    if (!chosenDescriptors.includes(descriptor)) {
      chosenDescriptors.push(descriptor);
    }
  }
  const role = randomFromArray(roles);
  return `${chosenDescriptors.join(' ')} ${role}`;
}

export const playPages = [
  ({character, setCharacter, NextButton}) => (
    <>
      <h2>Step 1: Character Creation</h2>
      <p>
        <strong>Descriptors</strong>: {descriptors.join(', ')}
      </p>
      <p>
        <strong>Roles</strong>: {roles.join(', ')}
      </p>
      <p>
        <strong>Adventurer Description</strong> <br />
        <input style={{width: '300px'}} value={character.description || ''} onChange={e => setCharacter({...character, description: e.target.value})} />
        <br /><button onClick={() => setCharacter({...character, description: randomAdventurer()})}>Randomize</button>
      </p>
      <p>
        Remember, this is simply a place to start.
        <br /><NextButton />
      </p>
    </>
  ),
  ({ character, setCharacter, BackButton, NextButton }) => (
    <>
      <p><BackButton /></p>
      <h2>Step 1: Character Creation</h2>
      <p>
        <strong>{character.description || '???'}</strong><br />
        Name: <input value={character.name || ''} onChange={e => setCharacter({...character, name: e.target.value})} /> <br />
        Pronouns: <input value={character.pronouns || ''} onChange={e => setCharacter({...character, pronouns: e.target.value})} /> <br />
        Physical Description: <input value={character.physicalDescription || ''} onChange={e => setCharacter({...character, physicalDescription: e.target.value})} />
      </p>
    </>
  ),
];
