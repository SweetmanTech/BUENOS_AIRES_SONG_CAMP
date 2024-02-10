import FeedProvider from "@/providers/FeedProvider"
import LandingPage from "../components/Pages/LandingPage"

const Landing = () => (
  <FeedProvider>
    <LandingPage />
  </FeedProvider>
)

export default Landing
