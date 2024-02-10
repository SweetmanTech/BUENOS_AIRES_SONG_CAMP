/* eslint-disable jsx-a11y/media-has-caption */
import { FC, useRef } from "react"
import Icon from "@/components/Icon"
import useEnjoyVideo from "@/hooks/useEnjoyVideo"

interface EnjoyVideoProps {
  src: string
  autoPlayable?: boolean
  isActive?: boolean
  isTappedDrop?: boolean
  thumbnail?: string
}

const EnjoyVideo: FC<EnjoyVideoProps> = ({
  src,
  autoPlayable,
  isActive,
  isTappedDrop,
  thumbnail,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const isPlaying = useEnjoyVideo({ autoPlayable, isActive, isTappedDrop, videoRef })
  const isGonzalo = src === "/videos/0xgonzalo.mp4"
  return (
    <div className="relative w-full h-full overflow-hidden">
      <video
        width="100%"
        height="100%"
        src={src}
        ref={videoRef}
        poster={thumbnail}
        className="object-cover w-full h-full"
        style={{ objectPosition: isGonzalo ? `center 40%` : `center 33%` }}
        playsInline
      >
        Your browser does not support the video element.
      </video>
      <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
        {!isPlaying && <Icon name="play" raw color="#FFFFFF" size={40} />}
      </div>
    </div>
  )
}

export default EnjoyVideo
