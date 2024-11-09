import StanLeeImg from "../../assets/stanlee.jfif";

export default function AuthorSpotlight() {
  return (
    <section className="relative py-24 px-8 text-white flex items-center">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center gap-12 lg:gap-8">
        <div className="flex-shrink-0">
          <img
            src={StanLeeImg}
            alt="Stan Lee"
            className="w-40 h-40 rounded-full object-cover shadow-lg"
          />
        </div>

        <div className="flex-1 max-w-xl space-y-6">
          <h2 className="text-3xl font-bold">
            Author Spotlight: <span className="text-yellow-500">Stan Lee</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Known for creating iconic superheroes, Stan Lee revolutionized the
            comic industry with relatable characters and deep stories. His
            legacy lives on through timeless stories loved by fans worldwide.
          </p>
          <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-yellow-400 transition duration-200">
            <a href="https://www.imdb.com/name/nm0498278/" target="_blank">
              Discover More
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
