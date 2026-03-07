export default function ProgressBar({
  page,
  total,
}: {
  page: number
  total: number
}) {
  const percentage = ((page + 1) / total) * 100
  return (
    <div className='progress-bar'>
      <div
        className='progress-bar-fill'
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  )
}
