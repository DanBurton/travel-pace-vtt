import React from 'react'

interface HintDeckProps {
  count: number
  children: (
    index: number,
    prev: React.ReactNode,
    next: React.ReactNode
  ) => React.ReactNode
}

export default function HintDeck({ count, children }: HintDeckProps) {
  const [index, setIndex] = React.useState(0)
  const prev = (
    <button
      className='hint-deck-btn'
      onClick={() => setIndex((index - 1 + count) % count)}
    >
      ←
    </button>
  )
  const next = (
    <button
      className='hint-deck-btn'
      onClick={() => setIndex((index + 1) % count)}
    >
      →
    </button>
  )
  return (
    <div className='hint-deck'>
      <div className='hint-deck-viewport'>
        {Array.from({ length: count }, (_, i) => {
          const position = i < index ? 'before' : i > index ? 'after' : 'active'
          return (
            <div
              key={i}
              className={`hint-deck-slide hint-deck-slide-${position}`}
              aria-hidden={i !== index}
            >
              {children(
                i,
                i === index ? prev : undefined,
                i === index ? next : undefined
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
