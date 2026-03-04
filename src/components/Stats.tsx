import { stats } from "@/data/stats"
import SectionCarBackground from "./SectionCarBackground"

const Stats: React.FC = () => {
    return (
        <section id="stats" className="py-10 lg:py-20 relative">
            <SectionCarBackground />
            <div className="relative z-10">
                <div className="grid sm:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <div key={stat.title} className="text-center sm:text-left max-w-md sm:max-w-full mx-auto group">
                            <div className="relative">
                                {/* Speed line background effect */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${index % 2 === 0 ? 'from-[#2D6EB8]' : 'from-[#2563D6]'} to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl rounded-lg`} />
                                
                                <div className="relative bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-[#2D6EB8]/10 shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <h3 className="mb-5 flex items-center gap-2 text-3xl font-semibold justify-center sm:justify-start">
                                        <div className="p-2 rounded-full bg-gradient-to-br from-[#2D6EB8] to-[#1E4A80] text-white">
                                            {stat.icon}
                                        </div>
                                        {stat.title}
                                    </h3>
                                    <p className="text-foreground-accent">{stat.description}</p>
                                    
                                    {/* Decorative racing line */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2D6EB8]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stats