/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// TALLY FORM ID
const TALLY_FORM_ID = "ob1pNN"; 

export default function WaitlistPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const scriptSrc = "https://tally.so/widgets/embed.js";

    const initializeTally = () => {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      } else {
        // Fallback: manually find any Tally iframes and set their src if not loaded
        const iframes = document.querySelectorAll('iframe[data-tally-src]:not([src])');
        iframes.forEach((iframe: any) => {
          iframe.src = iframe.dataset.tallySrc;
        });
      }
      // Give the iframe a tiny bit of breathing room to render before turning off loading state
      setTimeout(() => setLoading(false), 300);
    };

    // Check if script is already present in document
    let script = document.querySelector(`script[src="${scriptSrc}"]`) as HTMLScriptElement;

    if (script) {
      if (typeof (window as any).Tally !== "undefined") {
        initializeTally();
      } else {
        // Script tag exists but window.Tally is not yet initialized (still fetching/parsing)
        script.addEventListener("load", initializeTally);
        script.addEventListener("error", initializeTally);
      }
    } else {
      // Script is missing, create and append it
      script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.onload = initializeTally;
      script.onerror = initializeTally;
      document.body.appendChild(script);
    }

    return () => {
      if (script) {
        script.removeEventListener("load", initializeTally);
        script.removeEventListener("error", initializeTally);
      }
    };
  }, []);

  useEffect(() => {
    const handleTallyMessage = async (e: MessageEvent) => {
      let data;
      try {
        data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
      } catch (err) {
        return; // Ignore messages that aren't valid JSON or format
      }

      const isTallySubmission = data && (
        data.event === "Tally.FormSubmitted" ||
        data.type === "Tally.FormSubmitted" ||
        data.action === "Tally.FormSubmitted" ||
        e.data === "Tally.FormSubmitted"
      );

      if (isTallySubmission) {
        console.log("Tally Form Submitted:", data);
        
        try {
          // Forward submission to RudderStack CDP webhook
          const response = await fetch("https://hosted.rudderlabs.com/v1/webhook?writeKey=3GoZwvsZLVQRNsg5z0hmIphraBE", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              event: "Tally.FormSubmitted",
              formId: (data && data.formId) || TALLY_FORM_ID,
              payload: (data && (data.data || data)) || {},
              timestamp: new Date().toISOString(),
            }),
          });
          
          if (response.ok) {
            console.log("Successfully forwarded Tally submission to RudderStack CDP!");
          } else {
            console.warn("Failed to post to RudderStack CDP:", response.status, response.statusText);
          }
        } catch (error) {
          console.error("Error posting Tally submission to RudderStack CDP:", error);
        }
      }
    };

    window.addEventListener("message", handleTallyMessage);
    return () => {
      window.removeEventListener("message", handleTallyMessage);
    };
  }, []);

  const tallyUrl = `https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-amber-500/30 flex flex-col">
      {/* Navigation */}
      <nav className="bg-black/80 backdrop-blur-md py-4 border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <ArrowLeft size={20} className="text-white/40 group-hover:text-amber-500 transition-colors" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center glow-amber">
                <span className="font-bold text-black text-xl">A</span>
              </div>
              <span className="text-xl font-bold tracking-tighter uppercase">Aura Brew</span>
            </div>
          </Link>
        </div>
      </nav>

      <main className="flex-grow flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden">
        {/* Soft Ambient glow centered behind the form */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl w-full text-center mb-12 z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            SECURE YOUR <span className="text-gradient-amber">SPOT.</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            The first production run of the Aura Ecosystem is limited to 500 units. Complete the form below to join the priority queue.
          </p>
        </motion.div>

        {/* Tally Embed Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-full max-w-3xl bg-[#0d0d0db0] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] carbon-texture overflow-hidden min-h-[500px] relative flex flex-col justify-center z-10 group"
        >
          {/* Accent light bar at the top of the card */}
          <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent group-hover:via-amber-500/80 transition-all duration-1000" />
          
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#0d0d0d]/95 backdrop-blur-md z-20 transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-amber-500/10 border-t-amber-500 rounded-full animate-spin mx-auto mb-4" />
                <p className="text-amber-500/60 text-xs font-mono uppercase tracking-widest animate-pulse">Initializing Extraction...</p>
              </div>
            </div>
          )}

          {/* Tally iframe loaded with both src and data-tally-src for instant display and responsive resizing */}
          <iframe 
            src={tallyUrl}
            data-tally-src={tallyUrl}
            loading="lazy" 
            width="100%" 
            height="492" 
            style={{ border: "none", background: "transparent" }}
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Join the Waitlist"
          />
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xs text-white/20">
            © 2026 Aura Brew. All rights reserved.
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-white/40">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
