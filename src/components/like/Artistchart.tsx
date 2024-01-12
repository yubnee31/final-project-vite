import { useQuery } from '@tanstack/react-query'
import { getArtist } from '../../api/chartapi'
import Likefunc from './LikeFunc'

const Artistchart = () => {
  const {
    data: chartData,
    isLoading,
    isError,
  } = useQuery({ queryKey: ['testTable'], queryFn: getArtist })

  if (isLoading) {
    return <div>로딩중...</div>
  }

  if (isError) {
    return <div>에러 발생 </div>
  }

  return (
    <div>
      <h2>artistchart</h2>

      {chartData?.map(item => (
        <ul key={item.id}>
          <li>{item.artist}</li>
          <li>{item.like}</li>
          <Likefunc postId={item.id} />
        </ul>
      ))}
    </div>
  )
}

export default Artistchart
