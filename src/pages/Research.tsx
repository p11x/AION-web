import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect } from "react";
import { Lightbulb, Microscope, Rocket, Network } from "lucide-react";
import { Link } from "react-router-dom";
import { labsData } from "../data/researchLabs";

export default function Research() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <div className="bg-slate-50" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-slate-950">
        <motion.div 
          style={{ y: heroY, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-slate-950/70 mix-blend-multiply z-10" />
          <img 
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2940&auto=format&fit=crop" 
            alt="Research Lab" 
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
              <Microscope className="mr-2 h-4 w-4 text-blue-400" />
              <span className="text-sm font-semibold tracking-wide text-blue-200">
                AION Technologies Research
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Discover the <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Future of Technology
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mx-auto max-w-2xl text-lg text-slate-300 sm:text-xl"
            >
              Fostering an environment where curiosity meets practical application. We are committed to solving global challenges through innovation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Centers of Excellence - Sticky Scroll Layout */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center md:mb-24">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600">Centers of Excellence</h2>
            <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Where ideas become reality
            </h3>
          </div>

          <div className="space-y-24 lg:space-y-32">
            {labsData.map((lab, index) => (
              <div key={lab.title} className={`flex flex-col gap-12 lg:items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                
                <div className="flex-1 lg:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-3xl"
                  >
                    <Link to={`/lab/${lab.id}`}>
                      <div className="aspect-[4/3] w-full">
                        <img 
                          src={lab.image} 
                          alt={lab.title}
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-slate-900/10" />
                    </Link>
                  </motion.div>
                </div>

                <div className="flex-1 lg:w-1/2 lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 1 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${lab.bg}`}>
                      <lab.icon className={`h-8 w-8 ${lab.color}`} />
                    </div>
                    <h4 className="mb-4 text-3xl font-bold text-slate-900">{lab.title}</h4>
                    <p className="text-lg leading-relaxed text-slate-600">
                      {lab.description}
                    </p>
                    <Link to={`/lab/${lab.id}`} className="mt-8 inline-flex cursor-pointer items-center text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800">
                      Explore Projects <span className="ml-2">→</span>
                    </Link>
                  </motion.div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with parallax background */}
      <section className="relative overflow-hidden bg-slate-900 py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop" 
            alt="Laboratory" 
            className="h-full w-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { label: "Research Papers", value: "500+" },
              { label: "Patents Filed", value: "45" },
              { label: "Industry Partners", value: "120+" },
              { label: "Research Grants", value: "$5M+" }
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">{stat.value}</div>
                <div className="mt-2 text-sm font-medium uppercase tracking-widest text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Incubation & Industry */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl bg-slate-50 p-8 transition-all hover:bg-slate-100 sm:p-12"
            >
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                <Lightbulb className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-3xl font-bold text-slate-900">Incubation Center</h3>
              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                Supporting student startups from ideation to seed funding. We provide mentorship, technical guidance, and access to venture capital networks to turn ideas into successful enterprises.
              </p>
              <ul className="space-y-4">
                 {["Mentorship Programs", "Seed Funding Grants", "Workspace Access"].map((item) => (
                   <li key={item} className="flex items-center font-medium text-slate-700">
                     <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-amber-200/50">
                       <span className="h-2 w-2 rounded-full bg-amber-500" />
                     </div>
                     {item}
                   </li>
                 ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative overflow-hidden rounded-3xl bg-blue-50 p-8 transition-all hover:bg-blue-100 sm:p-12"
            >
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <Network className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-3xl font-bold text-slate-900">Industry Partnerships</h3>
              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                Collaborative research initiatives with leading corporate partners. Our students and faculty work directly with industry leaders to solve real-world challenges.
              </p>
               <ul className="space-y-4">
                 {["Joint Research Projects", "Corporate Fellowships", "Technology Transfer"].map((item) => (
                   <li key={item} className="flex items-center font-medium text-slate-700">
                     <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200/50">
                       <span className="h-2 w-2 rounded-full bg-blue-500" />
                     </div>
                     {item}
                   </li>
                 ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Rocket className="mx-auto mb-6 h-12 w-12 text-rose-500" />
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">Recent Publications</h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-400">
            Our faculty and research scholars actively publish in high-impact international journals. Explore our repository of whitepapers covering AI ethics, sustainable supply chains, and modern healthcare informatics.
          </p>
          <div className="mt-12 flex justify-center">
            <button className="rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-900 transition-transform hover:scale-105">
              View Publication Repository
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

