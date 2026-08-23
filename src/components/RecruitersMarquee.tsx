import { motion } from "motion/react";
import { Cpu, Network, Database, Hexagon, Cloud, Command, Globe, Target, Box, Zap, Shield, Monitor } from "lucide-react";

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

const marqueeItems = [...recruiters, ...recruiters];

export function RecruitersMarquee() {
  return (
    <section className="overflow-hidden border-t border-slate-100 bg-white py-16">
      <div className="mx-auto mb-10 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
          Our Top Recruiters
        </h2>
      </div>
      
      <div className="relative flex max-w-[100vw] overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex flex-none items-center gap-8 pr-8"
        >
          {marqueeItems.map((recruiter, index) => {
            return (
              <div 
                key={`${recruiter.name}-${index}`}
                className="flex h-16 min-w-[200px] items-center justify-center space-x-3 rounded-xl border border-slate-100 bg-slate-50 px-6 transition-colors hover:bg-slate-100"
              >
                <img 
                  src={`https://logo.clearbit.com/${recruiter.domain}`} onError={(e) => { e.currentTarget.src = `https://www.google.com/s2/favicons?domain=${recruiter.domain}&sz=128`; e.currentTarget.onerror = null; }} 
                  alt={recruiter.name} 
                  className="h-8 w-8 object-contain rounded-md"
                />
                <span className="whitespace-nowrap text-sm font-bold uppercase tracking-wider text-slate-600">
                  {recruiter.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
