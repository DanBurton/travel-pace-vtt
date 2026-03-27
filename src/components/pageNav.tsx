import { NavLink } from 'react-router'
import ProgressBar from './progressBar'

interface PageNavProps {
  prefix: string
  page: number
  total: number
}

export default function PageNav({ prefix, page, total }: PageNavProps) {
  const backHref = page > 0 ? `${prefix}/${page - 1}` : '/'
  const nextHref = page < total - 1 ? `${prefix}/${page + 1}` : null
  return (
    <div className='page-nav'>
      <NavLink className={'link-button'} to={backHref}>
        ←
      </NavLink>
      <div className='page-nav-bar'>
        <ProgressBar page={page} total={total} />
      </div>
      {nextHref ? (
        <NavLink className={'link-button'} to={nextHref}>
          →
        </NavLink>
      ) : (
        <span className='link-button link-button-disabled' aria-disabled='true'>
          →
        </span>
      )}
    </div>
  )
}
