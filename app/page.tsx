'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  const containerRef = useRef(null)
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 300], [0, 50])

  return (
    <main className="overflow-hidden">
      {/* Navigation */}
      <nav className="fixed w-full bg-navy text-white z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gold">JLB Law</h1>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-gold transition">Services</a>
            <a href="#about" className="hover:text-gold transition">About</a>
            <a href="#contact" className="hover:text-gold transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-navy to-blue-900 overflow-hidden pt-20">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 opacity-20"
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Justice &amp; <span className="text-gold">Advocacy</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Trusted criminal defense attorney serving families for over 20 years. Expert representation when you need it most.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold text-navy px-8 py-3 rounded-lg font-bold text-lg hover:shadow-xl transition"
            >
              Free Consultation
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 md:h-full min-h-96"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-gold/50 to-blue-500/50 flex items-center justify-center">
                <span className="text-white text-center text-lg">Professional Attorney Portrait</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-navy mb-4">Practice Areas</h3>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Criminal Defense',
                desc: 'Aggressive representation for felonies, misdemeanors, and white-collar crimes',
                icon: '⚖️',
              },
              {
                title: 'Family Law',
                desc: 'Compassionate guidance for divorces, custody, and family disputes',
                icon: '👨‍👩‍👧‍👦',
              },
              {
                title: 'Juvenile Cases',
                desc: 'Protecting minors\' rights with experience and dedication',
                icon: '👤',
              },
            ].map((service, i) => (
              <ServiceCard key={i} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-4xl font-bold text-navy mb-6">About Joe Louis Brown</h3>
              <p className="text-lg text-gray-700 mb-4">
                With over 20 years of legal experience, Joe Louis Brown has earned a reputation as a formidable advocate in the courtroom and a trusted advisor to his clients.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                His commitment to justice and detailed case strategy has resulted in countless successful outcomes for families across the region.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-gold text-2xl">✓</span>
                  20+ years legal experience
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold text-2xl">✓</span>
                  1000+ cases successfully defended
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold text-2xl">✓</span>
                  Board certified specialist
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="h-96 bg-gradient-to-br from-navy to-blue-900 rounded-2xl shadow-xl"
            >
              <div className="w-full h-full flex items-center justify-center text-white">
                <span>Experience & Expertise Badge</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center px-6"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Your Rights Matter. <span className="text-gold">We Fight For Them.</span>
          </h3>
          <p className="text-xl text-gray-200 mb-8">
            Don't face legal challenges alone. Get expert representation today.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold text-navy px-12 py-4 rounded-lg font-bold text-xl hover:shadow-2xl transition"
          >
            Schedule Free Consultation
          </motion.button>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-navy mb-4">Get In Touch</h3>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: 'Phone', value: '(555) 123-4567', icon: '📞' },
              { label: 'Email', value: 'hello@joebrownlaw.com', icon: '📧' },
              { label: 'Address', value: '123 Justice Ave, Legal City, ST 12345', icon: '📍' },
            ].map((contact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{contact.icon}</div>
                <h4 className="font-bold text-navy mb-2">{contact.label}</h4>
                <p className="text-gray-600">{contact.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2024 Joe Louis Brown Law. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

function ServiceCard({ title, desc, icon, index }: any) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.2)' }}
      className="bg-white border-2 border-gray-100 rounded-2xl p-8 cursor-pointer transition"
    >
      <div className="text-6xl mb-4">{icon}</div>
      <h4 className="text-2xl font-bold text-navy mb-4">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </motion.div>
  )
}
