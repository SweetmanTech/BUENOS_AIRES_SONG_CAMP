import { Swiper, SwiperSlide } from "swiper/react"
import { Keyboard } from "swiper/modules"
import { motion } from "framer-motion"
import "swiper/css/bundle"
import { useFeedProvider } from "@/providers/FeedProvider"
import EnjoyVideo from "../EnjoyVideo"

const FeedSwiper = () => {
  const { activeDrop, isPlaying, feed, extendFeed, setActiveFeed, setActiveDrop } =
    useFeedProvider()

  const onSwipe = (e) => {
    setActiveFeed(e.activeIndex)
    setActiveDrop(feed[e.activeIndex])
    const numberOfPostsLeft = feed.length - e.activeIndex
    if (numberOfPostsLeft <= 3) {
      extendFeed()
    }
  }

  return (
    <motion.div
      key="swiper"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-full"
    >
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={0}
        modules={[Keyboard]}
        mousewheel
        pagination={false}
        className="h-screen flex items-center"
        onSlideChange={onSwipe}
        keyboard={{
          enabled: true,
          onlyInViewport: false,
        }}
      >
        {feed.map((drop, i) => {
          console.log("SWEETS DROP", drop === activeDrop)
          return (
            // eslint-disable-next-line react/no-array-index-key
            <SwiperSlide key={i} className="overflow-hidden">
              <EnjoyVideo
                src={drop.content.uri}
                autoPlayable
                isActive={drop === activeDrop}
                isTappedDrop={!isPlaying}
                thumbnail={drop.image}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </motion.div>
  )
}

export default FeedSwiper
