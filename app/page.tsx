import Link from "next/link";

const portals = [
  {
    href: "http://122.52.134.146:4000",
    label: "SQL",
    description: "Ticketing SQL Old",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-10 h-10"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
        />
      </svg>
    ),
    gradient: "from-cyan-500 to-blue-600",
    glow: "shadow-cyan-500/40",
    badge: "Old SQL",
  },
  {
    href: "https://ticketing-netsuite.smctgroup.ph",
    label: "NetSuite",
    description: "Ticketing Netsuite Old",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-10 h-10"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
        />
      </svg>
    ),
    gradient: "from-violet-500 to-purple-700",
    glow: "shadow-violet-500/40",
    badge: "Old NetSuite",
  },
  {
    href: "https://ticketing.smctgroup.ph",
    label: "New Ticketing",
    description: "New Ticketing System",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-10 h-10"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
        />
      </svg>
    ),
    gradient: "from-rose-500 to-pink-600",
    glow: "shadow-rose-500/40",
    badge: "New Ticketing",
  },
];

export default function Home() {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url(images/smct-building.jpg)" }}
    >
      {/* Overlay layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center px-4 w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/70 text-xs font-medium px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            SMCT Group of Companies
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
            Ticketing{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Portal
            </span>
          </h1>
          <p className="mt-4 text-white/50 text-base font-light tracking-wide">
            Select a portal to continue
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {portals.map(
            ({ href, label, description, icon, gradient, glow, badge }) => (
              <Link key={label} href={href} target="_blank" className="group">
                <div
                  className={`relative flex flex-col items-center justify-center gap-5 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-white/25 hover:bg-white/10 hover:shadow-2xl ${glow}`}
                >
                  {/* Card glow bg on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                  />

                  {/* Badge */}
                  <span
                    className={`absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-widest bg-gradient-to-r ${gradient} bg-clip-text text-transparent border border-white/10 px-2 py-0.5 rounded-full`}
                  >
                    {badge}
                  </span>

                  {/* Icon */}
                  <div
                    className={`p-4 rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {icon}
                  </div>

                  {/* Text */}
                  <div className="text-center">
                    <p className="text-white text-xl font-bold tracking-tight">
                      {label}
                    </p>
                    <p className="text-white/45 text-sm mt-1 font-light">
                      {description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div
                    className={`flex items-center gap-1.5 text-xs font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0`}
                  >
                    Open Portal
                    <svg
                      className="w-3.5 h-3.5 text-current"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ),
          )}
        </div>

        {/* Footer */}
        <p className="mt-14 text-white/25 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} SMCT Group of Companies · All rights
          reserved
        </p>
      </div>
    </div>
  );
}
