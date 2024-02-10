import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import getDefaultFeed from "@/lib/getDefaultFeed"

const FeedContext = createContext(null)

const FeedProvider = ({ children }) => {
  const [allDrops, setAllDrops] = useState([])
  const [feed, setFeed] = useState([])
  const [activeFeed, setActiveFeed] = useState(0)
  const [activeDrop, setActiveDrop] = useState(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const extendFeed = useCallback(() => {
    setFeed(allDrops.slice(0, feed.length + 10))
  }, [allDrops, feed])

  useEffect(() => {
    const init = async () => {
      const defaultFeed = await getDefaultFeed()
      if (!defaultFeed.length) return

      setAllDrops(defaultFeed)
      setFeed(defaultFeed.slice(0, 10))
      setActiveDrop(defaultFeed[0])
    }

    init()
  }, [])

  const value = useMemo(
    () => ({
      extendFeed,
      feed,
      activeFeed,
      setActiveFeed,
      activeDrop,
      setActiveDrop,
      isPlaying,
      setIsPlaying,
    }),
    [
      extendFeed,
      feed,
      activeFeed,
      setActiveFeed,
      activeDrop,
      setActiveDrop,
      isPlaying,
      setIsPlaying,
    ],
  )

  return <FeedContext.Provider value={value}>{children}</FeedContext.Provider>
}

export const useFeedProvider = () => {
  const context = useContext(FeedContext)
  if (!context) {
    throw new Error("useFeedProvider must be used within a FeedProvider")
  }
  return context
}

export default FeedProvider
