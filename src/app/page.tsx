export default function Home() {
  const games = [
    {
      id: 1,
      name: "Galaxy Wars",
      url: "https://lio-on.github.io/GALAXY-wars/",
      emoji: "🚀",
      gradient: "from-indigo-900 via-purple-800 to-blue-900",
      description: "Battle for the Galaxy!",
    },
    {
      id: 2,
      name: "Serengeti Chase",
      url: "https://lio-on.github.io/Serengeti-chase/",
      emoji: "🐆",
      gradient: "from-amber-600 via-orange-500 to-yellow-600",
      description: "Survive. Hunt. Thrive.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Title */}
      <div className="mb-8 sm:mb-12 md:mb-16 text-center px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-pulse drop-shadow-2xl">
          ARIS GAMES
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 font-medium tracking-wide">
          Choose Your Adventure
        </p>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl w-full px-4">
        {games.map((game) => (
          <a
            key={game.id}
            href={game.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            {/* Game Card */}
            <div className="relative h-56 sm:h-64 md:h-72 rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-2xl hover:shadow-purple-500/50">
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${game.gradient} opacity-90 hover:opacity-100 transition-opacity`}
              />

              {/* Stars/Dots Effect */}
              <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      opacity: Math.random() * 0.7 + 0.3,
                    }}
                  />
                ))}
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-4 sm:p-6 text-center">
                {/* Emoji */}
                <div className="text-6xl sm:text-7xl md:text-8xl mb-2 sm:mb-4 transform hover:scale-110 transition-transform duration-300">
                  {game.emoji}
                </div>

                {/* Game Name - Hidden by default, shown on hover/tap */}
                <div className="absolute inset-0 bg-black/70 opacity-0 hover:opacity-100 active:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 sm:p-6 backdrop-blur-sm">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg">
                    {game.name}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-slate-200 mb-3 sm:mb-4">{game.description}</p>
                  <div className="px-4 py-2 sm:px-6 sm:py-3 bg-white/20 rounded-full text-sm sm:text-base text-white font-semibold border-2 border-white/40 hover:bg-white/30 transition-all">
                    Play Now →
                  </div>
                </div>
              </div>

              {/* Border Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-white/0 hover:border-white/30 transition-all duration-300" />
            </div>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-8 sm:mt-12 md:mt-16 text-center px-4">
        <p className="text-slate-400 text-xs sm:text-sm">
          Click on a game to start playing!
        </p>
      </div>
    </div>
  );
}
