import { motion } from "motion/react";
import { ArrowRight, BookOpen, Award, Building, Target } from "lucide-react";
import { Link } from "react-router-dom";

import { programs } from "./Programs";
import { ProgramCard } from "../components/ProgramCard";
import { RecruitersMarquee } from "../components/RecruitersMarquee";
import { AwardsSection } from "../components/AwardsSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-slate-950 py-20 lg:py-32">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2866&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950" />
          
          {/* Animated Blobs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-[20%] -left-[10%] h-[70vw] w-[70vw] max-w-[800px] rounded-full bg-blue-600/20 blur-[100px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-[20%] -right-[10%] h-[60vw] w-[60vw] max-w-[600px] rounded-full bg-indigo-600/20 blur-[120px]"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 backdrop-blur-sm"
            >
              <span className="mr-2 flex h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              <span className="text-sm font-medium tracking-wide text-blue-200">
                Welcome to Aion Institute of Management Studies
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-8 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Empowering the Next <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Generation of Tech Leaders
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl"
            >
              AION Institute of Management Studies (AIMS) offers world-class education, cutting-edge research, and guaranteed placement opportunities in top-tier companies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0"
            >
              <Link
                to="/admissions"
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-blue-600 px-8 text-base font-semibold text-white transition-all hover:scale-105 hover:bg-blue-500 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.8)]"
              >
                <span className="relative z-10 flex items-center">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                to="/programs"
                className="inline-flex h-14 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 px-8 text-base font-semibold text-white backdrop-blur-md transition-all hover:border-slate-500 hover:bg-slate-800"
              >
                Explore Programs
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-400"
        >
          <span className="mb-2 text-xs font-medium uppercase tracking-widest text-slate-500">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-10 w-6 justify-center rounded-full border-2 border-slate-600 p-1"
          >
            <div className="h-2 w-1.5 rounded-full bg-slate-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* Motto Section */}
      <section className="border-b border-slate-200 bg-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-full max-w-4xl opacity-5 pointer-events-none flex items-center justify-center">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <p className="text-2xl font-medium leading-relaxed text-slate-900 sm:text-3xl md:text-4xl lg:leading-relaxed">
              "The future belongs to those who believe in the beauty of their dreams"
            </p>
            <div className="mt-8 flex items-center justify-center space-x-4">
              <div className="h-px w-12 bg-blue-600"></div>
              <p className="font-bold text-blue-600 tracking-widest text-sm uppercase">
                Eleanor Roosevelt
              </p>
              <div className="h-px w-12 bg-blue-600"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs We Offer Section */}
      <section className="bg-slate-50/80 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Programs We Offer</h2>
              <p className="mt-4 max-w-xl text-lg text-slate-600">
                Discover our comprehensive academic programs tailored for future industry leaders.
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <ProgramCard key={program.id} program={program} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Recruiters Marquee Section */}
      <RecruitersMarquee />

      {/* Awards Section */}
      <AwardsSection />

      {/* About Sections */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">About Us</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Discover what makes AION-IMS and AIMS a premier destination for higher education and professional growth.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-slate-900">About AIMS</h3>
                <p className="text-slate-600 leading-relaxed">
                  AION Institute of Management Studies (AIMS) is dedicated to providing excellence in education. Our curriculum is designed by industry experts to bridge the gap between academic learning and corporate requirements, ensuring our students are industry-ready from day one.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <Building className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-slate-900">About AION-IMS</h3>
                <p className="text-slate-600 leading-relaxed">
                  As the parent organization, AION-IMS focuses on technological innovation and recruitment. We partner with top banks, IT firms, and manufacturing giants to provide unparalleled placement opportunities for our graduates.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-slate-900">Approvals & Affiliations</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our programs are recognized by leading educational bodies and affiliated with top universities. We maintain strict compliance with global educational standards to ensure our degrees carry weight worldwide.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-blue-600 p-8 text-white shadow-lg">
                <div className="absolute right-0 top-0 p-8 opacity-10">
                  <Target className="h-32 w-32" />
                </div>
                <div className="relative z-10">
                  <div className="mb-6">
                    <h3 className="mb-2 text-xl font-bold uppercase tracking-wider">Vision</h3>
                    <p className="text-blue-100 leading-relaxed">
                      To be a premier technological hub in offering training for student community in state Of the art technology and providing countless career options.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h3 className="mb-2 text-xl font-bold uppercase tracking-wider">Mission</h3>
                    <p className="text-blue-100 leading-relaxed">
                      To create a comprehensive place where students and professionals can develop their technical skills and discover boundless employment opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
