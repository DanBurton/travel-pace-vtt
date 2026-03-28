import React from 'react'

interface CardProps {
  type: string
  number: number
  title: string
  children: React.ReactNode
  prev?: React.ReactNode
  next?: React.ReactNode
}

export default function Card({
  type,
  number,
  title,
  children,
  prev,
  next,
}: CardProps) {
  const headerTextRef = React.useRef<HTMLDivElement>(null)
  const titleRef = React.useRef<HTMLHeadingElement>(null)

  React.useEffect(() => {
    const header = headerTextRef.current
    const titleEl = titleRef.current
    if (!header || !titleEl) return
    const fit = () => {
      titleEl.style.fontSize = ''
      const w = header.clientWidth
      if (w > 0 && titleEl.scrollWidth > w) {
        titleEl.style.fontSize = `${(parseFloat(getComputedStyle(titleEl).fontSize) * w) / titleEl.scrollWidth}px`
      }
    }
    const ro = new ResizeObserver(fit)
    ro.observe(header)
    return () => ro.disconnect()
  }, [title])

  return (
    <div className={`card card-type-${type.replace(/\s+/g, '-')}`}>
      <div className='card-header'>
        {prev}
        <div className='card-header-text' ref={headerTextRef}>
          <div className='card-meta'>
            {type} #{number}
          </div>
          <h4 className='card-title' ref={titleRef}>
            {title}
          </h4>
        </div>
        {next}
      </div>
      <div className='card-content'>{children}</div>
    </div>
  )
}
