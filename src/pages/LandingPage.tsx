/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Activity, 
  Zap, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  ChevronDown,
  Cpu,
  Droplets,
  Fingerprint
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PRODUCT_IMAGE = "https://i.postimg.cc/T3sPF0Db/Aura-Brew-Machine-Image.jpg";

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-amber-500/30">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center glow-amber">
              <span className="font-bold text-black text-xl">A</span>
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">Aura Brew</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <a href="#science" className="hover:text-amber-400 transition-colors">Science</a>
            <a href="#ecosystem" className="hover:text-amber-400 transition-colors">Ecosystem</a>
            <a href="#features" className="hover:text-amber-400 transition-colors">Features</a>
          </div>
          <Link 
            to="/waitlist"
            className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-amber-500 transition-all active:scale-95"
          >
            Join Waitlist
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-widest mb-6">
              <Zap size={12} />
              Biologically Synced Energy
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mb-6">
              COFFEE THAT <span className="text-gradient-amber">KNOWS YOU</span> BETTER THAN YOU DO.
            </h1>
            <p className="text-xl text-white/60 max-w-xl mb-10 leading-relaxed">
              Experience the next evolution of energy. Aura Brew monitors your unique biomarkers to pre-empt fatigue and sustain your peak performance with biologically-timed precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/waitlist"
                className="bg-amber-500 text-black px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-amber-400 transition-all group"
              >
                Join the Waitlist
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-all">
                Watch the Film
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 min-h-[400px]">
              <img 
                src={PRODUCT_IMAGE} 
                alt="Aura Station and Aura Ring" 
                className="w-full h-auto min-h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-carbon border border-white/10 p-4 rounded-2xl shadow-xl backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center text-amber-500">
                  <Activity size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Current BPI</div>
                  <div className="text-xl font-mono font-bold">0.84 <span className="text-xs text-green-400">OPTIMAL</span></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold tracking-tight">THE OLD WAY IS <span className="text-white/40">REACTIVE.</span></h2>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
                <div className="text-red-400 font-bold uppercase text-xs tracking-widest">The Problem</div>
                <p className="text-lg text-white/60">
                  You drink coffee when you’re already tired. You’re always one step behind your own exhaustion, chasing a peak that already passed.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold tracking-tight">THE AURA WAY IS <span className="text-amber-500">PROACTIVE.</span></h2>
              <div className="p-8 rounded-3xl bg-amber-500/5 border border-amber-500/20 space-y-4 glow-amber">
                <div className="text-amber-500 font-bold uppercase text-xs tracking-widest">The Solution</div>
                <p className="text-lg text-white/80">
                  We don’t wait for you to feel tired. We track your biomarkers to ensure your energy levels never dip in the first place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section id="science" className="py-32 bg-white/[0.02] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.3em] mb-4">Adaptive Algorithms</h2>
            <h3 className="text-5xl font-bold tracking-tighter mb-6">The Brew Precision Index</h3>
            <p className="text-white/60 text-lg">
              Our proprietary formula quantifies your physiological need for caffeine in real-time.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 p-12 rounded-[2rem] bg-carbon border border-white/10 flex flex-col justify-center items-center text-center carbon-texture">
              <div className="text-6xl md:text-8xl font-mono font-light tracking-tighter mb-8">
                BPI = <span className="relative">
                  <span className="border-b border-white/20 pb-2">C · V</span>
                  <span className="absolute top-full left-0 w-full text-center text-2xl pt-2 opacity-40 italic">T<sub>s</sub></span>
                </span>
              </div>
              <div className="grid grid-cols-3 gap-12 mt-12 w-full max-w-xl">
                <div>
                  <div className="text-amber-500 font-bold text-xl mb-1">C</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">Cortisol</div>
                </div>
                <div>
                  <div className="text-amber-500 font-bold text-xl mb-1">V</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">Velocity</div>
                </div>
                <div>
                  <div className="text-amber-500 font-bold text-xl mb-1">T<sub>s</sub></div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">REM Time</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { title: "The Waking Sync", desc: "Detects the end of REM to begin brewing, ensuring the aroma assists in the waking process.", icon: <Clock size={20}/> },
                { title: "Cortisol Delay", desc: "Prevents brewing during natural morning spikes to reduce caffeine tolerance.", icon: <ShieldCheck size={20}/> },
                { title: "Slump Pre-emption", desc: "Analyzes HRV drops and prepares a double shot 15 minutes before fatigue sets in.", icon: <Zap size={20}/> }
              ].map((profile, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/50 transition-colors group">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-amber-500">{profile.icon}</div>
                    <h4 className="font-bold tracking-tight group-hover:text-amber-500 transition-colors">{profile.title}</h4>
                  </div>
                  <p className="text-sm text-white/40 leading-relaxed">{profile.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.3em] mb-4">Integrated Hardware</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">The Aura Ecosystem</h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Aura Ring */}
            <div className="group relative rounded-[2.5rem] overflow-hidden bg-carbon border border-white/10 p-12 flex flex-col justify-between min-h-[500px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-amber-500/10 transition-all" />
              <div>
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8">
                  <Fingerprint className="text-amber-500" />
                </div>
                <h3 className="text-4xl font-bold mb-4">The Aura Ring</h3>
                <p className="text-white/60 leading-relaxed max-w-md">
                  A high-precision wearable crafted from aerospace-grade titanium. Monitors Cortisol, HRV, and Sleep Stages with medical-grade accuracy.
                </p>
              </div>
              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Aerospace-grade Titanium
                </div>
                <div className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Haptic Engine Notifications
                </div>
                <div className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  OLED Micro-display
                </div>
              </div>
            </div>

            {/* Aura Station */}
            <div className="group relative rounded-[2.5rem] overflow-hidden bg-carbon border border-white/10 p-12 flex flex-col justify-between min-h-[500px] carbon-texture">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-amber-500/10 transition-all" />
              <div>
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8">
                  <Cpu className="text-amber-500" />
                </div>
                <h3 className="text-4xl font-bold mb-4">The Aura Station</h3>
                <p className="text-white/60 leading-relaxed max-w-md">
                  A minimalist, carbon-fiber finished hub. Integrated cellular connectivity and an internal pressurized bean vault for peak freshness.
                </p>
              </div>
              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Pressurized Bean Vault
                </div>
                <div className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Precise 140°F Delivery
                </div>
                <div className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Industrial-grade Extraction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.3em] mb-4">Autonomous Excellence</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Engineered for Peak State</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500">
                <Activity size={28} />
              </div>
              <h4 className="text-2xl font-bold">Biometric Precision</h4>
              <p className="text-white/40 leading-relaxed">
                Your body provides the data; the Aura Ring translates it into a brew command. No buttons, no apps, just intuition.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500">
                <Droplets size={28} />
              </div>
              <h4 className="text-2xl font-bold">Flawless Extraction</h4>
              <p className="text-white/40 leading-relaxed">
                The Aura Station uses industrial-grade pressure and temperature control to deliver café-quality espresso automatically.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500">
                <Zap size={28} />
              </div>
              <h4 className="text-2xl font-bold">Smart Replenish</h4>
              <p className="text-white/40 leading-relaxed">
                The Station monitors bean weight and orders fresh local roasts before you ever run low. Never wake up to an empty vault.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-amber-500/5" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">READY FOR <span className="text-gradient-amber">PEAK STATE?</span></h2>
          <p className="text-xl text-white/60 mb-12">
            Join the exclusive waitlist for the first production run of the Aura Ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/waitlist"
              className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-amber-500 transition-all active:scale-95"
            >
              Join Waitlist
            </Link>
          </div>
          <p className="mt-6 text-xs text-white/20 uppercase tracking-widest font-bold">
            Limited to 500 units in the first drop.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
              <span className="font-bold text-black text-sm">A</span>
            </div>
            <span className="text-sm font-bold tracking-tighter uppercase">Aura Brew</span>
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-white/40">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
          <div className="text-xs text-white/20">
            © 2026 Aura Brew. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
