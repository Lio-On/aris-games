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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex flex-col items-center justify-center p-8">
      {/* Title */}
      <div className="mb-16 text-center">
        <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-pulse drop-shadow-2xl">
          ARIS GAMES
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 font-medium tracking-wide">
          Choose Your Adventure
        </p>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        {games.map((game) => (
          <a
            key={game.id}
            href={game.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            {/* Game Card */}
            <div className="relative h-64 rounded-3xl overflow-hidden transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/50">
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${game.gradient} opacity-90 group-hover:opacity-100 transition-opacity`}
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
              <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                {/* Emoji */}
                <div className="text-8xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {game.emoji}
                </div>

                {/* Game Name - Hidden by default, shown on hover */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 backdrop-blur-sm">
                  <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
                    {game.name}
                  </h2>
                  <p className="text-lg text-slate-200 mb-4">{game.description}</p>
                  <div className="px-6 py-3 bg-white/20 rounded-full text-white font-semibold border-2 border-white/40 group-hover:bg-white/30 transition-all">
                    Play Now →
                  </div>
                </div>
              </div>

              {/* Border Glow on Hover */}
              <div className="absolute inset-0 rounded-3xl border-4 border-white/0 group-hover:border-white/30 transition-all duration-300" />
            </div>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-16 text-center">
        <p className="text-slate-400 text-sm">
          Click on a game to start playing!
        </p>
      </div>
    </div>
  );
}
