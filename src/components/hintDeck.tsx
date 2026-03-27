import React from 'react'

interface HintDeckProps {
  count: number
  children: (index: number) => React.ReactNode
}

export default function HintDeck({ count, children }: HintDeckProps) {
  const [index, setIndex] = React.useState(0)
  return (
    <div className='hint-deck'>
      <button onClick={() => setIndex((index - 1 + count) % count)}>←</button>
      <div className='hint-deck-card'>{children(index)}</div>
      <button onClick={() => setIndex((index + 1) % count)}>→</button>
    </div>
  )
}
