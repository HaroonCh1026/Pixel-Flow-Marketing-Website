import Intro from "./Intro";
import MarketingStratergy from "./MarketingStratergy";
import WhyMarketing from "./WhyMarketing";

function Home({ services }) {
  return (
    <div className="px-32 sm:px-2">
      <Intro />
      <MarketingStratergy />
      <WhyMarketing />
    </div>
  );
}

export default Home;
