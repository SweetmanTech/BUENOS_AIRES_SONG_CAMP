import { behindTheCamp } from "./behindTheCamp"

const getDefaultFeed = async () => {
  const first = {
    name: "sol siete",
    tokenId: 2,
    description: "",
    image: "",
    animation_url: "",
    content: {
      mime: "video/mp4",
      uri: "",
    },
  }

  // Create a copy of the behindTheCamp array and shuffle it
  const shuffledBehindTheCamp = [...behindTheCamp].sort(() => 0.5 - Math.random()) // Shuffle the copied elements

  // Unshift the first item to the shuffled copy
  shuffledBehindTheCamp.unshift(first)

  console.log("SWEETS behindTheCamp", behindTheCamp)
  console.log("SWEETS SHUFFLED", shuffledBehindTheCamp)

  return shuffledBehindTheCamp
}

export default getDefaultFeed
