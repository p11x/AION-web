import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/aion-brand-v2.png" alt="AION - IMS Logo" className="h-8 w-auto object-contain" />
              <h3 className="text-lg font-bold text-white">AION - IMS</h3>
            </div>
            <p className="text-sm">
              Empowering future leaders through advanced education, innovative research, and exceptional placement opportunities.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/programs" className="hover:text-white">Programs</Link></li>
              <li><Link to="/admissions" className="hover:text-white">Admissions</Link></li>
              <li><Link to="/placement" className="hover:text-white">Placement</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>MBA / BBA</li>
              <li>MCA / BCA</li>
              <li>M-Sc (DS)</li>
              <li>MHA / BHA</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Office</li>
              <li>Chinna's complex, REVA university circle,</li>
              <li>Bagalur Main Rd, above Jockey Exclusive Store,</li>
              <li>Niranthara Layout, Kattigenahalli, Bengaluru,</li>
              <li>Sathanur, Karnataka 560063</li>
              <li className="mt-4 pt-4">Email: <a href="mailto:info@aiontech.edu" className="hover:text-blue-400">info@aiontech.edu</a></li>
              <li><a href="mailto:hr@aiontechnology.in" className="hover:text-blue-400">hr@aiontechnology.in</a></li>
              <li>Phone: +91 8050350011</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} AION Technologies (P) Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
