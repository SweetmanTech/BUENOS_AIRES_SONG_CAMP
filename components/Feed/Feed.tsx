import { AnimatePresence } from "framer-motion"
import "swiper/css/bundle" // import Swiper styles
import FeedSwiper from "./FeedSwiper"

const Feed = ({ className }: any) => (
  <div className={`w-full z-[0] flex flex-col justify-center ${className}`}>
    <AnimatePresence mode="wait">
      <FeedSwiper />
    </AnimatePresence>
  </div>
)

export default Feed
