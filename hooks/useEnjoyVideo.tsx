import { useEffect, useState } from "react"

const useEnjoyVideo = ({ autoPlayable, isActive, isTappedDrop, videoRef }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  useEffect(() => {
    if (autoPlayable) {
      if (isActive) {
        videoRef?.current?.play()
        setIsPlaying(true)
      } else {
        videoRef?.current?.pause()
        setIsPlaying(false)
      }
    }
  }, [autoPlayable, isActive])

  useEffect(() => {
    if (isActive) {
      if (isPlaying) {
        videoRef?.current?.pause()
        setIsPlaying(false)
      } else {
        videoRef?.current?.play()
        setIsPlaying(true)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTappedDrop, isActive])

  return isPlaying
}

export default useEnjoyVideo
