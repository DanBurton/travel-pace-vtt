export const renderScenario = (index: number): React.ReactElement => {
  const scenario = scenarios[index]
  return (
    <div>
      <p>
        <strong>{`[${index + 1} - ${scenario.name}]`}</strong>{' '}
        {scenario.description[0]}
      </p>
      {scenario.description.slice(1).map((paragraph, index) => (
        <p key={`scenario-${index}`}>{paragraph}</p>
      ))}
    </div>
  )
}

export const scenarios = [
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
After that, they took slightly older recruits, or later anyone with a "non essential" job.
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
