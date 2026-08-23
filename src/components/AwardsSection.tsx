import { motion } from "motion/react";
import { Award, Star, TrendingUp, Sparkles } from "lucide-react";

const awards = [
  {
    title: "Promising Tech Institute",
    organization: "State Education Board",
    icon: Star,
    color: "from-amber-400 to-orange-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    text: "text-amber-500",
  },
  {
    title: "Excellence in Infrastructure",
    organization: "Campus Design Review",
    icon: Sparkles,
    color: "from-blue-400 to-indigo-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    text: "text-blue-500",
  },
  {
    title: "Upcoming Innovation Hub",
    organization: "Local Tech Community",
    icon: TrendingUp,
    color: "from-emerald-400 to-teal-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-500",
  },
  {
    title: "Student-Centric Campus",
    organization: "Education Forum",
    icon: Award,
    color: "from-purple-400 to-pink-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    text: "text-purple-500",
  }
];

export function AwardsSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-3 inline-flex items-center rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-300 backdrop-blur-sm">
              <Award className="mr-2 h-4 w-4 text-yellow-500" />
              Recent Recognitions
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Awards & <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Rankings</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              As a rapidly emerging institution, we are already making waves in the educational sector with our innovative approach to tech and management education.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`group relative overflow-hidden rounded-2xl border ${award.border} bg-slate-900/50 p-6 backdrop-blur-sm transition-all hover:shadow-[0_0_30px_-5px_rgba(0,0,0,0.3)]`}
              >
                <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${award.color} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`} />
                
                <div className="relative z-10">
                  <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${award.bg} ${award.text} ring-1 ring-inset ${award.border}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold leading-tight text-white">
                    {award.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-400">
                    {award.organization}
                  </p>
                </div>
                
                {/* Bottom Highlight Line */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${award.color} transition-all duration-300 group-hover:w-full`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
