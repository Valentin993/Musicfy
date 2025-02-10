import Image from "next/image";
import Link from "next/link";
import trendingStatistic from "../public/trending-statistic.svg";
import artistAnalytics from "../public/artist-analytics.svg";
import paasInsights from "../public/paas-insights.svg";
import paasImage from "../public/paas.jpg";
import arrow from "../public/thin-long-arrow-right-icon.svg";

export default function Home() {
  return (
    <>
      <main>
        {/*  Hero Section */}
        <section className="py-40">
          <div className="container lg:max-w-screen-lg px-4">
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-medium text-5xl lg:text-6xl text-center mb-6 leading-snug">
                <span className="block">Music Trends, Artists, and</span>
                <span className="block"> Insights at Your Fingertips.</span>
              </h1>
              <p className="text-base lg:text-lg text-center mb-8 max-w-[724px]">
                Musicfy is your all-in-one platform for real-time music trends,
                artist analytics, and actionable insights to stay ahead in the
                industry.
              </p>
              <Link
                className="inline-block py-3 px-5 bg-black text-white rounded-sm font-medium"
                href={""}
              >
                Get Started for Free
              </Link>
            </div>
          </div>
        </section>

        {/*  Features Section */}
        <section className="features bg-[#0C0C0C] text-white py-24">
          <div className="container lg:max-w-screen-lg px-4">
            <h2 className="font-medium text-4xl lg:text-5xl">
              Statistics. Analytics. Insights.
            </h2>
            <p className="lg:w-6/12 mt-6">
              Musicfy is your all-in-one platform for real-time music trends,
              artist analytics, and actionable insights to stay ahead in the
              industry.
            </p>

            <div className="mt-20 flex flex-col items-center md:flex-row flex-wrap">
              <div className="card-container md:w-6/12">
                <div className="card bg-[#ffffff05] shadow-inner-custom rounded-sm p-10 w-[380px] sm:w-[450px] md:w-[97%]">
                  <h3 className="font-medium text-2xl lg:text-[32px]">
                    Trending Statistics
                  </h3>
                  <p className="text-sm mt-2 mb-10">
                    Track real-time music trends and discover
                    <span className="block">whats hot in the industry.</span>
                  </p>
                  <Image
                    src={trendingStatistic}
                    alt=""
                    className="w-[280px] md:w-auto md:h-[179px] lg:h-[227px]"
                  />
                </div>
              </div>
              <div className="card-container md:w-6/12 md:flex md:justify-end mt-7 md:mt-0">
                <div className="card bg-[#ffffff05] shadow-inner-custom rounded-sm p-10 w-[380px] sm:w-[450px] md:w-[97%]">
                  <h3 className="font-medium text-2xl lg:text-[32px]">
                    Artist Analytics
                  </h3>
                  <p className="text-sm mt-2 mb-10">
                    Dive deep into artist performance, top sellers,
                    <span className="block">and fan engagement metrics.</span>
                  </p>
                  <Image
                    src={artistAnalytics}
                    alt=""
                    className="w-[240px] md:w-auto md:h-[179px] lg:h-[227px]"
                  />
                </div>
              </div>

              <div className="card-container mt-7 md:mt-5 lg:mt-7">
                <div className="card bg-[#ffffff05] shadow-inner-custom rounded-sm p-10 w-[380px] sm:w-[450px] md:w-full md:flex md:justify-between md:items-center">
                  <div>
                    <h3 className="font-medium text-2xl lg:text-[32px]">
                      Artist Analytics
                    </h3>
                    <p className="text-sm mt-2 mb-10 md:w-10/12">
                      Gain exclusive insights into songs and artists with our
                      powerful Platform-as-a-Service tools. Gain exclusive
                      insights into songs and artists with our powerful
                      Platform-as-a-Service tools.
                    </p>
                  </div>
                  <Image
                    src={paasInsights}
                    alt=""
                    className="lg:mr-24 w-[240px] md:w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  Benefits Section */}
        <section className="Benefits py-24">
          <div className="container lg:max-w-screen-lg px-4">
            <h2 className="font-medium text-4xl lg:text-5xl">Benefits</h2>
            <p className="lg:w-6/12 mt-6">
              Musicfy is your all-in-one platform for real-time music trends,
              artist analytics, and actionable insights to stay ahead in the
              industry.
            </p>

            <div className="flex flex-wrap justify-between mt-12">
              <div className="benefit-card bg-[#FFDC68] p-10 w-full lg:w-[32%] mb-5 lg:mb-0">
                <h3 className="font-medium text-2xl ">
                  For Industry Professionals
                </h3>
                <p className="text-sm mt-2">
                  Make data-driven decisions to boost your music career or
                  business.
                </p>
              </div>

              <div className="benefit-card bg-[#FF6868] p-10 w-full lg:w-[32%] mb-5 lg:mb-0">
                <h3 className="font-medium text-2xl ">
                  For Fans and Enthusiasts
                </h3>
                <p className="text-sm mt-2">
                  Stay ahead of the curve by discovering the next big artist or
                  song.
                </p>
              </div>

              <div className="benefit-card bg-[#A76CFF] p-10 w-full lg:w-[32%] mb-5 lg:mb-0">
                <h3 className="font-medium text-2xl ">For Subscribers</h3>
                <p className="text-sm mt-2">
                  Unlock premium insights and analytics to elevate your music
                  strategy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*  PaaS Section */}
        <section className="PaaS py-32 bg-[#0C0C0C] text-white">
          <div className="container lg:max-w-screen-lg px-4">
            <div className="flex flex-wrap justify-between ">
              <div className="section-body lg:w-7/12">
                <h2 className="font-medium text-4xl lg:text-5xl">
                  Leading Music PaaS
                </h2>
                <p className="mt-6">
                  Musicfy is your all-in-one platform for real-time music
                  trends, artist analytics, and actionable insights to stay
                  ahead in the industry.
                </p>

                <ul className="mt-6 list-disc leading-7 pl-6">
                  <li>Over 10 million records </li>
                  <li>Real time chart data</li>
                  <li> Upcoming music exclusive studio previews</li>
                  <li>API for your application</li>
                  <li>Lossless and Hi-Res audio quality</li>
                </ul>
              </div>

              <Image
                src={paasImage}
                alt=""
                className="w-full lg:w-5/12 mt-10 lg:mt-0"
              />
            </div>

            <Link
              className="paas-cta flex justify-between items-center text-white rounded-lg mt-16 py-6 px-8 lg:px-16 text-lg lg:text-2xl font-medium bg-[#ffffff10] shadow-inner-custom"
              href="/pricing"
            >
              <span>Learn more about the best Music Platform-as-a-Service</span>
              <Image
                src={arrow}
                alt=""
                className="inline-block text-white w-[60px] "
              />
            </Link>
          </div>
        </section>

        {/*  Final CTA */}
        <section className=" py-24 lg:py-32">
          <div className="container lg:max-w-screen-lg px-4">
            <div className="flex flex-col items-center justify-center bg-[#F5F5F5] py-16 px-8 lg:px-0">
              <h2 className="font-medium text-4xl lg:text-5xl text-center mb-6 leading-snug">
                Transform Your Music Experience
              </h2>
              <p className="text-base text-center mb-8 max-w-[544px]">
                Join thousands of users unlocking powerful insights and trends
                with Musicfy. Start your journey today!
              </p>
              <Link
                className="inline-block py-3 px-5 bg-black text-white rounded-sm font-medium"
                href={""}
              >
                Get Started for Free
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
