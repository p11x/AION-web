import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, Cpu, Sparkles } from "lucide-react";
import { aiFeatures } from "../data/aiFeatures";

export default function FeatureDetails() {
  const { id } = useParams();
  const feature = aiFeatures.find((f) => f.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!feature) {
    return <Navigate to="/faculty" replace />;
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply z-10" />
          <img 
            src={feature.details.heroImage} 
            alt={feature.name} 
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
          <Link to="/faculty" className="mb-8 inline-flex items-center text-sm font-semibold text-white/80 hover:text-white transition-colors w-fit">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Faculty & Features
          </Link>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 backdrop-blur-md w-fit"
          >
            <Cpu className="mr-2 h-4 w-4 text-purple-400" />
            <span className="text-sm font-semibold tracking-wide text-purple-200">
              {feature.role}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-6 max-w-4xl text-5xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            {feature.name}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="max-w-2xl text-xl text-slate-300"
          >
            {feature.details.tagline}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {feature.details.overview}
            </p>
            
            <div className="space-y-6">
              {feature.details.features.map((item, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-3xl bg-slate-100 relative">
              <img 
                src={feature.details.secondaryImage} 
                alt="Feature visual"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-slate-900/10 rounded-3xl" />
            </div>
            
            {/* Floating visual element */}
            <div className="absolute -bottom-10 -left-10 rounded-2xl bg-white p-6 shadow-xl border border-slate-100 hidden md:block max-w-xs">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Next-Gen Tech</h4>
                  <p className="text-xs text-slate-500">Powered by AION</p>
                </div>
              </div>
              <p className="text-sm font-medium text-slate-600 leading-tight">
                Experience the frontier of educational technology tailored for you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="rounded-[3rem] bg-slate-900 py-16 px-6 sm:px-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl"></div>

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">Ready to transform your learning?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
              Apply now to gain access to {feature.name} and our complete suite of advanced academic tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/admissions" className="rounded-full bg-white px-8 py-4 font-bold text-slate-900 transition-transform hover:scale-105 shadow-lg shadow-white/10">
                Apply for Admission
              </Link>
              <Link to="/contact" className="rounded-full bg-transparent border border-slate-700 px-8 py-4 font-bold text-white transition-colors hover:bg-slate-800">
                Contact Admissions
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
