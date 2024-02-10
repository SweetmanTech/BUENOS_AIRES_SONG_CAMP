import Feed from "@/components/Feed/Feed"
import Layout from "@/components/Layout"
import SeoHead from "@/components/SeoHead"
import CountDownTimer from "./CountDownTimer"

const LandingPage = () => (
  <Layout type="base">
    <SeoHead />
    <div>
      <div
        className="xl:w-[1440px] lg:w-[1280px] md:w-[1024px] h-screen
              flex items-center justify-around"
      >
        <CountDownTimer />
      </div>
      <Feed />
    </div>
  </Layout>
)

export default LandingPage
