import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Building2, Briefcase, GraduationCap, Trophy, ArrowUpRight, CheckCircle2, TrendingUp, Users, Target } from "lucide-react";

const sectors = [
  "Banks / NBFC",
  "IT / ITeS",
  "Manufacturing",
  "Healthcare",
  "Pharmaceuticals",
  "KPO / BPO",
  "Consulting",
];

const processSteps = [
  {
    title: "Pre-Placement Talk",
    description: "Companies visit the campus to share their vision, job profiles, and expectations with prospective candidates.",
    icon: Building2,
  },
  {
    title: "Aptitude & Technical Tests",
    description: "Candidates undergo rigorous assessments to evaluate their logical, quantitative, and technical skills.",
    icon: Trophy,
  },
  {
    title: "Group Discussions",
    description: "Evaluating communication, leadership, and team collaboration skills in a simulated environment.",
    icon: Briefcase,
  },
  {
    title: "Personal Interviews",
    description: "Final round of technical and HR interviews leading to job offers and onboarding.",
    icon: GraduationCap,
  }
];

const recruiters = [
  { name: "Omega Healthcare", domain: "omegahealthcare.com" },
  { name: "Teleperformance", domain: "teleperformance.com" },
  { name: "HGS", domain: "hgs.cx" },
  { name: "Mitsubishi", domain: "mitsubishimotors.com" },
  { name: "Fujitsu", domain: "www.fujitsu.com" },
  { name: "Convey Tech Labs", domain: "conveytechlabs.com" },
  { name: "Airtel", domain: "airtel.in" },
  { name: "Accenture", domain: "accenture.com" },
  { name: "[24]7.ai", domain: "247.ai" },
  { name: "ELMEASURE", domain: "elmeasure.com" },
  { name: "Flipkart", domain: "flipkart.com" },
  { name: "ELECSIS", domain: "elecsis.com" },
  { name: "JINDALX", domain: "jindalx.com" },
  { name: "upGrad", domain: "upgrad.com" },
  { name: "Tata Motors", domain: "tatamotors.com" },
  { name: "Wipro", domain: "wipro.com" }
];

export default function Placement() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <div className="bg-slate-50" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[75vh] min-h-[600px] w-full overflow-hidden bg-slate-950">
        <motion.div 
          style={{ y: heroY, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply z-10" />
          <img 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2968&auto=format&fit=crop" 
            alt="Students collaborating" 
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div className="relative z-20 flex h-full items-center justify-center text-center">
          <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
             <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 backdrop-blur-md"
            >
              <TrendingUp className="mr-2 h-4 w-4 text-blue-400" />
              <span className="text-sm font-semibold tracking-wide text-blue-200">
                100% Placement Assistance
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Launch Your <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Dream Career
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mx-auto max-w-2xl text-lg text-slate-300 sm:text-xl"
            >
              We bridge the gap between academic excellence and industry demands, ensuring our students secure top roles in leading global companies.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Highlight (Overlapping Hero) */}
      <section className="relative -mt-16 z-30 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-3 rounded-2xl bg-white p-4 shadow-xl shadow-slate-200/50 ring-1 ring-slate-100"
        >
          <div className="flex flex-col items-center justify-center rounded-xl bg-slate-50 p-6 text-center">
            <span className="mb-2 text-4xl font-black text-blue-600">250+</span>
            <span className="text-sm font-semibold text-slate-600">Recruiting Partners</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl bg-slate-50 p-6 text-center">
            <span className="mb-2 text-4xl font-black text-blue-600">26<span className="text-2xl">LPA</span></span>
            <span className="text-sm font-semibold text-slate-600">Highest Package</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl bg-slate-50 p-6 text-center">
            <span className="mb-2 text-4xl font-black text-blue-600">92%</span>
            <span className="text-sm font-semibold text-slate-600">Placement Rate</span>
          </div>
        </motion.div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        
        {/* Industries Section */}
        <section>
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-slate-900 md:text-4xl"
            >
              Industries We Cater To
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto"
            >
              Our graduates are sought after across a diverse range of high-growth sectors.
            </motion.p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-full bg-white px-8 py-4 shadow-sm border border-slate-200 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative z-10 text-sm font-bold text-slate-700 group-hover:text-blue-700">{sector}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="relative">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-slate-900 md:text-4xl"
            >
              Recruitment Process
            </motion.h2>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto"
            >
              A streamlined approach to connect top talent with industry leaders.
            </motion.p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative rounded-3xl bg-white p-8 text-center shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="h-10 w-10" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-slate-900">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                  
                  {/* Connector Line (Hidden on mobile) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute right-0 top-1/2 h-px w-8 -translate-y-1/2 translate-x-1/2 bg-slate-200" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Recruiters */}
        <section>
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="rounded-[3rem] bg-slate-900 py-20 px-6 sm:px-12 text-center text-white relative overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="mb-6 text-3xl font-extrabold md:text-5xl">Our Top Recruiters</h2>
              <p className="mx-auto mb-16 max-w-2xl text-lg text-slate-300">
                AION - IMS is trusted by leading multinational corporations and innovative startups from India's tech ecosystem.
              </p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {recruiters.map((recruiter, index) => {
                  return (
                    <motion.div 
                      key={recruiter.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex h-20 items-center justify-center space-x-3 rounded-2xl bg-white/5 border border-white/10 px-6 transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-blue-900/20"
                    >
                      <img 
                        src={`https://logo.clearbit.com/${recruiter.domain}`} onError={(e) => { e.currentTarget.src = `https://www.google.com/s2/favicons?domain=${recruiter.domain}&sz=128`; e.currentTarget.onerror = null; }} 
                        alt={recruiter.name} 
                        className="h-8 w-8 object-contain rounded-md"
                      />
                      <span className="font-bold tracking-wider text-slate-200 text-sm uppercase whitespace-nowrap">{recruiter.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
