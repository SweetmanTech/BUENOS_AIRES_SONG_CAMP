import Feed from "@/components/Feed/Feed"
import Layout from "@/components/Layout"
import SeoHead from "@/components/SeoHead"
import CountDownTimer from "./CountDownTimer"

const LandingPage = () => (
  <Layout type="base">
    <SeoHead />
    <div className="relative">
      <div
        className="absolute top-0 left-0 right-0 bottom-0
              flex items-center justify-around z-10 pointer-events-none" // Allow pointer events to pass through
      >
        <CountDownTimer className="pointer-events-auto" />{" "}
        {/* Ensure the timer itself can still be interacted with */}
      </div>
      <div
        className="xl:w-[1440px] lg:w-[1280px] md:w-[1024px] h-screen
              flex items-center justify-around"
      >
        <Feed />
      </div>
    </div>
  </Layout>
)

export default LandingPage
