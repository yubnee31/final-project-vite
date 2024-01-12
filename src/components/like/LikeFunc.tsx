import {
  useMutation,
  useQueryClient,
  UseMutationOptions,
} from '@tanstack/react-query'
import { addLikeartist } from '../../api/chartapi'
import { useRecoilValue } from 'recoil'
import { loginState } from '../../shared/recoil/authAtom'

interface LikeButtonProps {
  postId: number
}

const Likefunc = ({ postId }: LikeButtonProps) => {
  const queryClient = useQueryClient()
  const loginInfo = useRecoilValue(loginState)
  const { mutate } = useMutation<void, Error, void, unknown>({
    mutationFn: async () => {
      await addLikeartist(postId)
    },
    onSuccess: async () => {
      // 성공 시 수행할 작업

      queryClient.invalidateQueries({ queryKey: ['testTable'] })
    },
    onError: context => {
      const previousData = context || {}
      queryClient.setQueryData(['testTable'], previousData)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['testTable'] })
    },
  } as UseMutationOptions<void, Error, void, unknown>)

  const handleLikeToggle = () => {
    if (loginInfo) {
      mutate()
    } else {
      alert('로그인이 필요합니다.')
    }
  }

  return (
    <>
      <button onClick={handleLikeToggle}>좋아요♡</button>
    </>
  )
}

export default Likefunc
