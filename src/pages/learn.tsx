import { useParams, NavLink } from 'react-router'
import { learnPages } from './learnPages'

export default function Learn() {
  const params = useParams()
  const page: number = parseInt(params.page || '0', 10) || 0
  const isLastPage: boolean = page >= learnPages.length - 1
  const BackButton = () => (
    <NavLink
      className={'link-button'}
      to={page > 0 ? `/learn/${page - 1}` : '/'}
    >
      Back
    </NavLink>
  )
  const NextButton = () =>
    isLastPage ? (
      <></>
    ) : (
      <NavLink className={'link-button'} to={`/learn/${page + 1}`}>
        Next
      </NavLink>
    )
  const PageContent = learnPages[page]

  return (
    <div>
      <div>
        <BackButton /> <NextButton />
      </div>
      <PageContent />
      <div>
        <NextButton />
      </div>
    </div>
  )
}
