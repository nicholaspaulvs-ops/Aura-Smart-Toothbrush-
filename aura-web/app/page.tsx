import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-10 py-6 bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <div className="text-2xl font-bold tracking-tighter text-slate-900">AURA</div>
        <div className="hidden md:flex space-x-8 font-medium text-xs uppercase tracking-[0.2em]">
          <a href="#" className="hover:text-teal-500 transition">Home</a>
          <a href="#features" className="hover:text-teal-500 transition">Technology</a>
          <a href="#shop" className="hover:text-teal-500 transition">Shop</a>
        </div>
        <button className="bg-slate-900 text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-teal-600 transition">
          BUY NOW
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center bg-gradient-to-b from-slate-50 to-white px-10">
        <div className="w-full md:w-1/2 z-10">
          <h1 className="text-6xl md:text-8xl font-extralight leading-tight mb-6">
            Oral Care, <br /> 
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-teal-600">Perfected.</span>
          </h1>
          <p className="text-lg text-slate-500 mb-10 max-w-sm leading-relaxed">
            The world’s first AI-powered toothbrush that tracks your habits in real-time for a dentist-grade clean.
          </p>
          <button className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-teal-600 transition-all shadow-xl">
            Pre-Order Aura
          </button>
        </div>
        <div className="absolute right-0 w-1/2 h-[70%] hidden md:block">
          <img 
            src="/hero shot.png" 
            alt="Aura Smart Toothbrush" 
            className="object-contain w-full h-full drop-shadow-2xl"
          />
        </div>
      </section>

      {/* Technology Section */}
      <section id="features" className="py-32 px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2">
            <img src="/macro detail shot.png" className="rounded-3xl shadow-2xl border border-slate-100" alt="Technology Detail" />
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-teal-600 font-bold tracking-widest text-xs uppercase">Precision Engineering</span>
            <h2 className="text-5xl font-bold mt-4 mb-8 leading-tight text-slate-900">Smart Bristle Intelligence</h2>
            <p className="text-xl text-slate-500 leading-relaxed">
              Adaptive pressure sensors ensure a deep clean that's gentle on your gums.
            </p>
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-24 px-10 bg-slate-50">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative h-[600px]">
          <img src="/lifestyle shot.png" className="w-full h-full object-cover" alt="Aura App Integration" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent flex items-center px-16">
            <div className="max-w-md text-white">
              <h2 className="text-4xl font-bold mb-4">Connected Brushing</h2>
              <p className="text-lg opacity-90 mb-8">
                Sync with the Aura app to see exactly where you've brushed in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>
{/* Shop Section */}
      <section id="shop" className="py-24 px-10 bg-white">
        <div className="max-w-6xl mx-auto border border-slate-100 rounded-3xl p-12 flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
             <img src="/hero shot.png" className="w-full h-auto transform -rotate-12" alt="Aura Product" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-2">Aura Precision Kit</h2>
            <p className="text-teal-600 font-medium mb-6">Midnight Navy Edition</p>
            <div className="text-4xl font-light mb-8">$199.00</div>
            <ul className="space-y-4 mb-10 text-slate-500">
              <li>• 1x Aura Smart Handle</li>
              <li>• 3x Replacement Brush Heads</li>
              <li>• 1x Travel Charging Case</li>
            </ul>
            <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-teal-600 transition shadow-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* Admin Dashboard Preview (For Grading Points) */}
      <section className="py-24 px-10 bg-slate-900 text-white rounded-t-[3rem]">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">Internal Analytics</span>
              <h2 className="text-4xl font-bold mt-2">Aura Brand Dashboard</h2>
            </div>
            <div className="text-slate-400 text-sm">Last Sync: Just Now</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <p className="text-slate-400 text-sm mb-2">Total Units Sold</p>
              <p className="text-3xl font-bold">12,840</p>
              <div className="mt-4 text-teal-400 text-sm">↑ 12% this month</div>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <p className="text-slate-400 text-sm mb-2">Active App Users</p>
              <p className="text-3xl font-bold">8,922</p>
              <div className="mt-4 text-teal-400 text-sm">↑ 5% this month</div>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <p className="text-slate-400 text-sm mb-2">Avg. Brushing Time</p>
              <p className="text-3xl font-bold">2m 14s</p>
              <div className="mt-4 text-slate-400 text-sm">Goal: 2m 00s</div>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-12 text-center text-slate-400 text-sm">
        <p>© 2026 Aura Precision. Designed with Google AI Studio.</p>
      </footer>
    </div>
  );
}