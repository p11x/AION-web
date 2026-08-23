import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { FileText, HelpCircle, CheckCircle, GraduationCap, Check, PenLine, Users, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";

type ApplicationForm = {
  applicantName: string;
  dob: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  contactNo: string;
  whatsappNo: string;
  email: string;
  category: string;
  acceptedTerms: boolean;
};

export default function Admissions() {
  const { register, handleSubmit, formState: { errors } } = useForm<ApplicationForm>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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

  const onSubmit = async (data: ApplicationForm) => {
    try {
      setIsSubmitting(true);
      setErrorMessage("");

      const formData = new FormData();
      formData.append("access_key", "1763327e-4907-474d-9dda-ec484ad806fd");
      formData.append("from_name", data.applicantName);
      formData.append("from_email", data.email);
      formData.append("subject", `New Admission Application - ${data.applicantName}`);
      formData.append("applicantName", data.applicantName);
      formData.append("dob", data.dob);
      formData.append("address", data.address);
      formData.append("city", data.city);
      formData.append("state", data.state);
      formData.append("pincode", data.pincode);
      formData.append("contactNo", data.contactNo);
      formData.append("whatsappNo", data.whatsappNo || "N/A");
      formData.append("email", data.email);
      formData.append("category", data.category);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(result.message || "Failed to send application. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-slate-950">
        <motion.div 
          style={{ y: heroY, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply z-10" />
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2940&auto=format&fit=crop" 
            alt="University Admissions" 
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div className="relative z-20 flex h-full items-center justify-center text-center">
          <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 backdrop-blur-md"
            >
              <GraduationCap className="mr-2 h-4 w-4 text-emerald-400" />
              <span className="text-sm font-semibold tracking-wide text-emerald-200">
                Admissions 2026 Open
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Begin Your <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Journey With Us
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mx-auto max-w-2xl text-lg text-slate-300 sm:text-xl"
            >
              Review the process, check your eligibility, and submit your application to join our innovative community of learners and leaders.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="bg-slate-50 py-24 relative overflow-hidden z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-purple-700 mb-4">Application Process</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              A clear path from <br className="hidden sm:block" /> profile to <span className="text-purple-600">opportunity</span>
            </h3>
            <p className="text-lg text-slate-500">
              Five transparent steps. No guesswork.
            </p>
          </div>

          <div className="relative mt-24">
            {/* The horizontal line for desktop */}
            <div className="hidden md:block absolute top-[30px] left-[10%] right-[10%] h-[2px] bg-purple-600"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {[
                { step: "01", icon: Check, title: "Check eligibility", desc: "Choose the category that matches your education and skills.", active: true },
                { step: "02", icon: PenLine, title: "Complete application", desc: "Add your personal, education and contact information.", active: false },
                { step: "03", icon: FileText, title: "Document verification", desc: "Submit your resume, ID proof and education certificate.", active: false },
                { step: "04", icon: Users, title: "Interview & selection", desc: "Meet the hiring team and demonstrate your fit.", active: false },
                { step: "05", icon: ArrowRight, title: "Receive final update", desc: "Get your final status and next-step guidance.", active: false },
              ].map((item, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center">
                  <span className="text-xs font-semibold text-slate-500 mb-4">{item.step}</span>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full border border-purple-600 ${item.active ? 'bg-purple-600 text-white' : 'bg-slate-50 text-slate-500'} mb-6 z-10 ring-[6px] ring-slate-50 transition-colors`}>
                    <item.icon className="h-4 w-4" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-3">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed px-2">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-20 flex justify-center">
              <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-50/50 px-6 py-2.5 text-sm font-medium text-emerald-700">
                Application is completely free. No hidden fees or charges.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
        <div className="space-y-8">
          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/50 ring-1 ring-slate-100 sm:p-10"
          >
            {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="mb-6 rounded-full bg-emerald-100 p-4 text-emerald-600"
                  >
                    <CheckCircle className="h-12 w-12" />
                  </motion.div>
                  <h3 className="mb-4 text-3xl font-bold text-slate-900">Application Submitted!</h3>
                  <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">Thank you for applying. Your application has been successfully submitted and is now under review.</p>
                  <button onClick={() => window.location.reload()} className="rounded-full bg-emerald-600 px-8 py-4 font-bold text-white shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all hover:scale-105">
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-slate-900">Application Form</h3>
                    <p className="mt-2 text-slate-600">Please fill out all mandatory fields accurately.</p>
                  </div>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Applicant Name <span className="text-red-500">*</span></label>
                        <input {...register("applicantName", { required: true })} className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200" placeholder="Full Legal Name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Date of Birth</label>
                        <input type="date" {...register("dob")} className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200" />
                      </div>
                      
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-semibold text-slate-700">Current Address</label>
                        <input {...register("address")} className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200" placeholder="Street Address, Apartment/Suite" />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">City</label>
                        <input {...register("city")} className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200" placeholder="e.g. Mumbai" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">State</label>
                        <input {...register("state")} className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200" placeholder="e.g. Maharashtra" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Pincode</label>
                        <input {...register("pincode")} className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200" placeholder="e.g. 400001" />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Email Address <span className="text-red-500">*</span></label>
                        <input type="email" {...register("email", { required: true })} className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200" placeholder="you@example.com" />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Contact Number <span className="text-red-500">*</span></label>
                        <input type="tel" {...register("contactNo", { required: true })} className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200" placeholder="+91 XXXXX XXXXX" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">WhatsApp Number</label>
                        <input type="tel" {...register("whatsappNo")} className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200" placeholder="+91 XXXXX XXXXX" />
                      </div>
                      
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-semibold text-slate-700">Application Category</label>
                        <select {...register("category")} className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200">
                          <option value="">Select Category...</option>
                          <option value="Cat 1">Category 1 (Graduates BA, BCom, BSc)</option>
                          <option value="Cat 2">Category 2 (Skilled Graduates B.Tech, BBA, BCA, BDS)</option>
                          <option value="Cat 3">Category 3 (PG MA, MCom, MSc)</option>
                          <option value="Cat 4">Category 4 (Skilled MBA, MCA, M.Sc (DS))</option>
                          <option value="Cat 5">Category 5 (Other than above mentioned)</option>
                        </select>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-amber-50 p-6 border border-amber-100">
                      <p className="text-sm font-medium text-amber-900 mb-4 leading-relaxed">
                        I hereby affirm that the information in this document is correct and true to the best of my knowledge and I will abide by the rules and regulations of the company.
                      </p>
                      <div className="flex items-center space-x-8">
                        <label className="flex items-center space-x-3 cursor-pointer group">
                          <div className="relative flex items-center justify-center">
                            <input type="radio" value="accept" {...register("acceptedTerms", { required: true })} className="peer sr-only" />
                            <div className="h-5 w-5 rounded-full border-2 border-amber-300 bg-white transition-colors peer-checked:border-emerald-500 peer-checked:bg-emerald-500"></div>
                            <div className="absolute h-2 w-2 rounded-full bg-white opacity-0 transition-opacity peer-checked:opacity-100"></div>
                          </div>
                          <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900">I Accept</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer group">
                           <div className="relative flex items-center justify-center">
                            <input type="radio" value="decline" {...register("acceptedTerms", { required: true })} className="peer sr-only" />
                            <div className="h-5 w-5 rounded-full border-2 border-amber-300 bg-white transition-colors peer-checked:border-red-500 peer-checked:bg-red-500"></div>
                            <div className="absolute h-2 w-2 rounded-full bg-white opacity-0 transition-opacity peer-checked:opacity-100"></div>
                          </div>
                          <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900">I Decline</span>
                        </label>
                      </div>
                      {errors.acceptedTerms && <p className="mt-3 text-sm font-medium text-red-500 flex items-center"><CheckCircle className="w-4 h-4 mr-1"/> You must accept the terms to proceed.</p>}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between border-t border-slate-100 pt-8 mt-8">
                      <div className="mb-4 sm:mb-0">
                        <p className="text-2xl font-bold text-emerald-600">Free Application</p>
                      </div>
                      <button type="submit" disabled={isSubmitting} className={`w-full sm:w-auto rounded-full bg-emerald-600 px-10 py-4 text-sm font-bold text-white transition-all hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                      </button>
                    </div>
                    {errorMessage && (
                      <div className="mb-4 rounded-xl bg-red-50 p-4 border border-red-200">
                        <p className="text-sm font-medium text-red-700 flex items-center">
                          <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          {errorMessage}
                        </p>
                      </div>
                    )}
                  </form>
                </>
              )}
            </motion.div>

            {/* Need Assistance */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-3xl bg-slate-900 p-8 shadow-xl shadow-slate-900/20 text-white"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-emerald-400">
                <HelpCircle className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">
                Need Assistance?
              </h3>
              <p className="mb-6 text-slate-300 leading-relaxed">
                Have questions about the fee structure, eligibility, or scholarship opportunities? Our admissions team is here to help.
              </p>
              <div className="space-y-3">
                <Link to="/contact" className="flex items-center justify-center w-full rounded-xl bg-emerald-600 hover:bg-emerald-500 transition-colors p-4 text-center font-bold text-white shadow-md shadow-emerald-900/20">
                  Contact Us
                </Link>
                <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                  <p className="text-sm font-medium text-slate-400 mb-1">Email</p>
                  <p className="font-semibold text-white">admissions@aiontech.edu</p>
                </div>
                <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                  <p className="text-sm font-medium text-slate-400 mb-1">Phone</p>
                  <p className="font-semibold text-white">+91 8050350011</p>
                </div>
              </div>
            </motion.div>
          </div>
      </section>
    </div>
  );
}
