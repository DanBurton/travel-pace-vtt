import { useParams, NavLink } from 'react-router'
import { learnPages } from './learnPages'
import PageNav from '../components/pageNav'

export default function Learn() {
  const params = useParams()
  const page: number = parseInt(params.page || '0', 10) || 0
  const isLastPage: boolean = page >= learnPages.length - 1
  const BottomButton = () =>
    isLastPage ? (
      <NavLink className={'cta-link'} to='/play'>
        Start Playing
      </NavLink>
    ) : (
      <NavLink className={'link-button'} to={`/learn/${page + 1}`}>
        Next
      </NavLink>
    )
  const PageContent = learnPages[page]

  return (
    <div>
      <PageNav prefix='/learn' page={page} total={learnPages.length} />
      <PageContent />
      <div>
        <BottomButton />
      </div>
    </div>
  )
}
