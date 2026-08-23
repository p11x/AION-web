import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    console.log(data);
    alert("Message sent successfully!");
  };

  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-slate-600"
          >
            Have questions about our programs, admissions, or partnerships? Reach out to us.
          </motion.p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-200">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 rounded-full bg-blue-100 p-2 text-blue-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Campus Address</h3>
                    <p className="mt-1 text-slate-600">
                      No 9, 1st Main Road, 3rd Cross, <br />
                      Byraweshwara Nagar, Laggere, <br />
                      Bengaluru, 560058, <br />
                      Karnataka, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1 rounded-full bg-blue-100 p-2 text-blue-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Phone</h3>
                    <p className="mt-1 text-slate-600">+91 8050350011</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1 rounded-full bg-blue-100 p-2 text-blue-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <p className="mt-1 text-slate-600">aionimscontactus@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 h-64 bg-slate-200 relative">
               <iframe
                  src="https://maps.google.com/maps?q=13.011178,77.520136&t=&z=16&ie=UTF8&iwloc=&output=embed"
                 width="100%"
                 height="100%"
                 style={{ border: 0 }}
                 allowFullScreen
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-8 shadow-sm border border-slate-200"
          >
            <h2 className="mb-6 text-2xl font-bold text-slate-900">Send us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Full Name</label>
                <input 
                  {...register("name", { required: true })} 
                  className="w-full rounded-md border border-slate-300 p-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
                  placeholder="Rahul Sharma"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Email Address</label>
                <input 
                  type="email"
                  {...register("email", { required: true })} 
                  className="w-full rounded-md border border-slate-300 p-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
                  placeholder="rahul@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Subject</label>
                <input 
                  {...register("subject", { required: true })} 
                  className="w-full rounded-md border border-slate-300 p-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
                  placeholder="How can we help you?"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea 
                  {...register("message", { required: true })} 
                  rows={5}
                  className="w-full rounded-md border border-slate-300 p-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none" 
                  placeholder="Write your message here..."
                />
              </div>
              <button 
                type="submit" 
                className="flex w-full items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                Send Message <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
