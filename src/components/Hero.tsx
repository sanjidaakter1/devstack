import BannerStack from "../assets/banner-stack.png";

const Hero = () => {
  const handleExplore = () => {
    document
      .getElementById("technologies")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLearnMore = () => {
    document
      .getElementById("about")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="border-b border-slate-100"
    >
      <div className="section-container grid items-center gap-10 py-16 md:grid-cols-2">

        {/* Left Content */}
        <div>

          
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Build Your Ideal
            <br />

            <span className="gradient-text">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Explore modern technologies, compare your options,
            and create a personalized development stack for
            your next project.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-3">

            <button
              type="button"
              onClick={handleExplore}
              className="gradient-bg rounded-full px-5 py-3 text-sm font-bold text-white shadow-md transition hover:opacity-90"
            >
              Explore Technologies
            </button>

            <button
              type="button"
              onClick={handleLearnMore}
              className="rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
            >
              Learn More
            </button>

          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center">

          <img
            src={BannerStack}
            alt="Development Stack"
            className="w-full max-w-md object-contain"
          />

        </div>

      </div>
    </section>
  );
};

export default Hero;