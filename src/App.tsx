/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { 
  Truck, 
  Globe, 
  ShieldCheck, 
  Clock, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Navigation, 
  Package, 
  BarChart3,
  Menu,
  X,
  ArrowRight,
  ChevronRight
} from "lucide-react";

const LitCLogo = ({ className = "", dark = false, width = "220px" }: { className?: string, dark?: boolean, width?: string }) => (
  <div className={`flex flex-col items-center select-none ${className}`} style={{ width }}>
    <div className="relative w-full" style={{ aspectRatio: '2.2/1' }}>
       <svg viewBox="0 0 260 110" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="metal-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="45%" stopColor="#94a3b8" />
              <stop offset="50%" stopColor="#475569" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
            <linearGradient id="green-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d9f99d" />
              <stop offset="45%" stopColor="#65a30d" />
              <stop offset="100%" stopColor="#365314" />
            </linearGradient>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="1.5" dy="1.5" stdDeviation="1.5" floodColor="rgba(0,0,0,0.6)" />
            </filter>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Orbits - Behind */}
          <g style={{ opacity: 0.8 }}>
             <ellipse cx="130" cy="60" rx="100" ry="35" fill="none" stroke="#84cc16" strokeWidth="1.5" transform="rotate(-12 130 60)" />
             <ellipse cx="130" cy="60" rx="100" ry="35" fill="none" stroke="#84cc16" strokeWidth="1.5" transform="rotate(12 130 60)" />
          </g>
          
          {/* Electrons */}
          <circle cx="60" cy="40" r="7" fill="url(#green-gradient)" filter="url(#shadow)" />
          <circle cx="200" cy="40" r="7" fill="url(#green-gradient)" filter="url(#shadow)" />

          {/* Text */}
          <text x="10" y="95" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="95" fill="url(#metal-gradient)" stroke="#1e293b" strokeWidth="2" style={{ fontStyle: 'italic' }} filter="url(#shadow)">L</text>
          <text x="75" y="95" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="95" fill="url(#metal-gradient)" stroke="#1e293b" strokeWidth="2" style={{ fontStyle: 'italic' }} filter="url(#shadow)">i</text>
          <text x="110" y="95" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="95" fill="url(#green-gradient)" stroke="#1e293b" strokeWidth="2" style={{ fontStyle: 'italic' }} filter="url(#shadow)">t</text>
          <text x="155" y="95" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="95" fill="url(#metal-gradient)" stroke="#1e293b" strokeWidth="2" style={{ fontStyle: 'italic' }} filter="url(#shadow)">C</text>
       </svg>
    </div>
    
    <div className="text-center -mt-2 w-full relative z-10">
      <div className={`text-xl font-black tracking-[0.2em] leading-none ${dark ? 'text-white' : 'text-slate-800'}`} style={{ fontFamily: 'Arial, sans-serif' }}>LOGISTICS</div>
      <div className="flex items-center justify-center gap-2 mt-1.5 w-full px-1">
        <div className={`h-[1px] flex-grow ${dark ? 'bg-slate-600' : 'bg-slate-400'}`} />
        <span className={`text-[10px] font-bold uppercase tracking-[0.1em] whitespace-nowrap ${dark ? 'text-slate-400' : 'text-slate-500'}`}>Adrian Broda</span>
        <div className={`h-[1px] flex-grow ${dark ? 'bg-slate-600' : 'bg-slate-400'}`} />
      </div>
    </div>
  </div>
);

const SectionTitle = ({ children, subtitle, light = false }: { children: React.ReactNode; subtitle?: string; light?: boolean }) => (
  <div className="mb-16 text-center max-w-3xl mx-auto">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-5xl font-bold mb-6 tracking-tight font-heading ${light ? 'text-white' : 'text-slate-900'}`}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-lg leading-relaxed font-sans ${light ? 'text-slate-300' : 'text-slate-600'}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const ServiceCard = ({ icon: Icon, title, items, index }: { icon: any; title: string; items: string[], index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -10 }}
    className="bg-white p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
  >
    <div className="w-16 h-16 bg-lime-50 rounded-2xl flex items-center justify-center mb-8 text-lime-600 group-hover:bg-lime-500 group-hover:text-white transition-colors duration-300">
      <Icon size={32} strokeWidth={1.5} />
    </div>
    <h3 className="text-2xl font-bold mb-6 text-slate-900 font-heading">{title}</h3>
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-slate-600 font-sans">
          <CheckCircle2 size={18} className="text-lime-500 mt-0.5 shrink-0" />
          <span className="font-medium">{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const TrustItem = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    className="flex gap-6 items-start group"
  >
    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-lime-400 shrink-0 border border-white/10 group-hover:bg-lime-500 group-hover:text-white transition-all duration-300">
      <Icon size={28} strokeWidth={1.5} />
    </div>
    <div>
      <h4 className="font-bold text-white text-xl mb-2 group-hover:text-lime-400 transition-colors font-heading">{title}</h4>
      <p className="text-slate-400 leading-relaxed font-sans">{description}</p>
    </div>
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-lime-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <a href="#" className="flex items-center">
              <LitCLogo className="origin-left" width="150px" />
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10">
              {["O nas", "Oferta", "Zaufanie", "Kontakt"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-sm font-semibold text-slate-600 hover:text-lime-600 transition-colors uppercase tracking-wide"
                >
                  {item}
                </a>
              ))}
              <a 
                href="#kontakt" 
                className="bg-slate-900 text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-lime-600 transition-all shadow-lg hover:shadow-lime-500/30 flex items-center gap-2"
              >
                Wycena transportu <ArrowRight size={16} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-slate-900 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-white border-t border-slate-100 px-4 py-6 space-y-4 shadow-xl"
          >
            {["O nas", "Oferta", "Zaufanie", "Kontakt"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setIsMenuOpen(false)}
                className="block text-lg font-bold text-slate-800 py-2 border-b border-slate-50"
              >
                {item}
              </a>
            ))}
            <a 
              href="#kontakt"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center bg-lime-500 text-white py-4 rounded-xl font-bold mt-4"
            >
              Darmowa wycena
            </a>
          </motion.div>
        )}
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <motion.img 
              style={{ y, scale: 1.1 }}
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1920&h=1080" 
              alt="Modern European Scania truck" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-40">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-500/20 border border-lime-500/30 text-lime-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
                <Globe size={14} />
                <span>Global Logistics Partner</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight font-heading">
                Transport <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">Przyszłości</span>
              </h1>
              <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-xl font-light font-sans">
                Kompleksowe rozwiązania logistyczne dla Twojego biznesu. 
                Szybkość, bezpieczeństwo i precyzja w każdym kilometrze.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <a href="#oferta" className="bg-lime-500 text-white px-10 py-4 rounded-full font-bold hover:bg-lime-600 transition-all shadow-lg shadow-lime-500/20 text-center flex items-center justify-center gap-2 group">
                  Sprawdź ofertę <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#kontakt" className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all text-center">
                  Skontaktuj się
                </a>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="o-nas" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-lime-100 rounded-[3rem] -rotate-3" />
                <img 
                  src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800&h=600" 
                  alt="Modern European logistics center" 
                  className="relative rounded-[2.5rem] shadow-2xl w-full object-cover aspect-[4/3]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      10+
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 font-bold uppercase">Lat doświadczenia</div>
                      <div className="text-slate-900 font-bold">w branży TSL</div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-lime-600 font-bold uppercase tracking-widest text-sm mb-6 block font-heading">O nas</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight font-heading">
                  LitC Logistics <br />
                  <span className="text-slate-400">Twój partner w biznesie</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8 font-light font-sans">
                  Jesteśmy nowoczesną firmą logistyczną, która łączy tradycyjne wartości z innowacyjnym podejściem do transportu. 
                  Naszą misją jest dostarczanie rozwiązań, które napędzają rozwój Twojego biznesu.
                </p>
                
                <div className="grid grid-cols-2 gap-10 border-t border-slate-100 pt-10">
                  <div>
                    <div className="text-4xl font-bold text-slate-900 mb-2">100%</div>
                    <div className="text-sm text-slate-500 uppercase font-bold tracking-wide">Terminowość</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-slate-900 mb-2">24/7</div>
                    <div className="text-sm text-slate-500 uppercase font-bold tracking-wide">Wsparcie</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Offer Section */}
        <section id="oferta" className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle subtitle="Dostarczamy kompleksowe usługi transportowe i logistyczne, dostosowane do specyfiki Twojej branży.">
              Nasza oferta
            </SectionTitle>
            
            <div className="grid md:grid-cols-3 gap-8">
              <ServiceCard 
                index={0}
                icon={Truck}
                title="Transport"
                items={[
                  "Całopojazdowy (FTL)",
                  "Drobnicowy (LTL)",
                  "Chłodniczy",
                  "ADR (Towary niebezpieczne)",
                  "Ekspresowy"
                ]}
              />
              <ServiceCard 
                index={1}
                icon={Navigation}
                title="Spedycja"
                items={[
                  "Optymalizacja tras",
                  "Monitoring GPS 24/7",
                  "Odprawy celne",
                  "Ubezpieczenie OCP",
                  "Doradztwo logistyczne"
                ]}
              />
              <ServiceCard 
                index={2}
                icon={Package}
                title="Logistyka"
                items={[
                  "Magazynowanie",
                  "Cross-docking",
                  "Konfekcjonowanie",
                  "Dystrybucja",
                  "Zarządzanie zwrotami"
                ]}
              />
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section id="zaufanie" className="py-32 bg-slate-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-lime-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-lime-400 font-bold uppercase tracking-widest text-sm mb-6 block font-heading">Wartości</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight font-heading">
                  Dlaczego warto <br /> nam zaufać?
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-lg font-sans">
                  Budujemy relacje oparte na zaufaniu i profesjonalizmie. Twój sukces jest naszym priorytetem, dlatego dbamy o każdy detal procesu logistycznego.
                </p>
                <a href="#kontakt" className="text-white font-bold border-b-2 border-lime-500 pb-1 hover:text-lime-400 transition-colors inline-flex items-center gap-2">
                  Rozpocznij współpracę <ArrowRight size={16} />
                </a>
              </motion.div>
              
              <motion.div 
                className="grid sm:grid-cols-2 gap-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                <TrustItem 
                  icon={Clock}
                  title="Terminowość"
                  description="Szanujemy Twój czas. Dostawy zawsze na czas, zgodnie z harmonogramem."
                />
                <TrustItem 
                  icon={Phone}
                  title="Dostępność 24/7"
                  description="Jesteśmy do Twojej dyspozycji o każdej porze dnia i nocy."
                />
                <TrustItem 
                  icon={BarChart3}
                  title="Elastyczność"
                  description="Dostosowujemy się do zmieniających się potrzeb rynku i Twojego biznesu."
                />
                <TrustItem 
                  icon={ShieldCheck}
                  title="Bezpieczeństwo"
                  description="Pełna ochrona ładunku i ubezpieczenie na każdym etapie transportu."
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Area Section */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle subtitle="Docieramy do każdego zakątka Europy. Nasza flota jest zawsze tam, gdzie jej potrzebujesz.">
              Obszar działania
            </SectionTitle>
            
            <div className="relative rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl bg-slate-900 min-h-[400px] flex items-center justify-center">
              <div className="absolute inset-0 opacity-60">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600&h=900" 
                  alt="Global logistics network" 
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20" />
              
              <div className="relative z-10 p-8 md:p-20 text-center w-full">
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
                  {["Unia Europejska", "Skandynawia", "Europa Wschodnia", "Bałkany"].map((region) => (
                    <span key={region} className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold border border-white/10">
                      {region}
                    </span>
                  ))}
                </div>
                <div className="inline-block">
                  <div className="w-4 h-4 bg-lime-500 rounded-full animate-ping absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  <div className="w-4 h-4 bg-lime-500 rounded-full relative" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-slate-100 overflow-hidden">
              <div>
                <span className="text-lime-600 font-bold uppercase tracking-widest text-sm mb-6 block font-heading">Kontakt</span>
                <h2 className="text-4xl font-bold text-slate-900 mb-8 font-heading">Porozmawiajmy o Twoim transporcie</h2>
                <p className="text-slate-600 mb-12 text-lg font-sans">
                  Wypełnij formularz lub skontaktuj się z nami bezpośrednio. Przygotujemy dla Ciebie indywidualną wycenę w 24h.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 group-hover:bg-lime-500 group-hover:text-white transition-all duration-300">
                      <Phone size={28} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Telefony</div>
                      <div className="text-xl font-bold text-slate-900">+48 734 130 716</div>
                      <div className="text-xl font-bold text-slate-900">+48 734 129 759</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 group">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 group-hover:bg-lime-500 group-hover:text-white transition-all duration-300">
                      <Mail size={28} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">E-mail</div>
                      <div className="text-xl font-bold text-slate-900">Pawel@litc.pl</div>
                      <div className="text-xl font-bold text-slate-900">Adrian@litc.pl</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 group-hover:bg-lime-500 group-hover:text-white transition-all duration-300">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Lokalizacja</div>
                      <div className="text-xl font-bold text-slate-900">Polska, Europa</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 md:p-10 rounded-[2rem]">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Imię i nazwisko</label>
                      <input type="text" className="w-full px-6 py-4 rounded-xl border-none bg-white shadow-sm focus:ring-2 focus:ring-lime-500 outline-none transition-all" placeholder="Jan Kowalski" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Telefon</label>
                      <input type="tel" className="w-full px-6 py-4 rounded-xl border-none bg-white shadow-sm focus:ring-2 focus:ring-lime-500 outline-none transition-all" placeholder="+48 ..." />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">E-mail</label>
                    <input type="email" className="w-full px-6 py-4 rounded-xl border-none bg-white shadow-sm focus:ring-2 focus:ring-lime-500 outline-none transition-all" placeholder="firma@domena.pl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Wiadomość</label>
                    <textarea rows={4} className="w-full px-6 py-4 rounded-xl border-none bg-white shadow-sm focus:ring-2 focus:ring-lime-500 outline-none transition-all resize-none" placeholder="Szczegóły zlecenia..."></textarea>
                  </div>
                  <button className="w-full bg-slate-900 text-white py-5 rounded-xl font-bold hover:bg-lime-600 transition-all shadow-lg hover:shadow-lime-500/30 text-lg">
                    Wyślij zapytanie
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-20 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div className="col-span-2">
              <div className="mb-8">
                <LitCLogo dark={true} className="origin-left scale-90" />
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed text-lg">
                Profesjonalne rozwiązania transportowe i logistyczne. 
                Twój zaufany partner w drodze do sukcesu.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-8 uppercase tracking-widest text-sm text-slate-500">Menu</h4>
              <ul className="space-y-4 text-slate-400 font-medium">
                <li><a href="#o-nas" className="hover:text-lime-400 transition-colors">O nas</a></li>
                <li><a href="#oferta" className="hover:text-lime-400 transition-colors">Oferta</a></li>
                <li><a href="#zaufanie" className="hover:text-lime-400 transition-colors">Zaufanie</a></li>
                <li><a href="#kontakt" className="hover:text-lime-400 transition-colors">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-8 uppercase tracking-widest text-sm text-slate-500">Kontakt</h4>
              <ul className="space-y-4 text-slate-400 font-medium">
                <li className="flex items-center gap-3 hover:text-white transition-colors"><Phone size={18} className="text-lime-500" /> +48 734 130 716</li>
                <li className="flex items-center gap-3 hover:text-white transition-colors"><Mail size={18} className="text-lime-500" /> Pawel@litc.pl</li>
                <li className="flex items-center gap-3 hover:text-white transition-colors"><MapPin size={18} className="text-lime-500" /> Polska, Europa</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-sm font-medium">
            <p>© {new Date().getFullYear()} LitC Logistics Adrian Broda.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Prywatność</a>
              <a href="#" className="hover:text-white transition-colors">Regulamin</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
