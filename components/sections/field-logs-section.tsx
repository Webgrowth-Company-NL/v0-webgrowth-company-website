"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { fieldLogs } from "@/lib/field-logs-data"

const recent = fieldLogs.slice(0, 3)

export function FieldLogsSection() {
  return (
    <section className="relative py-24 md:py-32 px-5 sm:px-8 bg-[#0d0818] overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#ff0096]/6 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
        >
          <div>
            <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-5">Field Logs</p>
            <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2.2rem,5vw,3.8rem)] font-black text-white leading-[1.06] tracking-tight">
              Wat we bouwen.{" "}
              <span style={{
                background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                En wat het oplevert.
              </span>
            </h2>
          </div>
          <Link
            href="/field-logs"
            className="shrink-0 inline-flex items-center gap-2 text-[#a78bfa] text-sm font-semibold hover:text-white transition-colors duration-200"
          >
            Alle field logs <span className="text-lg leading-none">→</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recent.map((log, i) => (
            <motion.article
              key={log.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <Link
                href={`/field-logs/${log.slug}`}
                className="group flex flex-col h-full rounded-2xl border border-white/8 hover:border-white/15 overflow-hidden transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden shrink-0">
                  <Image
                    src={log.img}
                    alt={log.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    style={{ objectPosition: "center 20%" }}
                  />
                  <span className="absolute top-4 left-4 text-[#ff0096] text-xs font-semibold tracking-widest uppercase bg-[#0d0818]/70 backdrop-blur-sm px-3 py-1 rounded-full border border-[#ff0096]/20">
                    {log.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <time dateTime={log.dateTime} className="text-white/40 text-xs">{log.date}</time>
                    <span className="text-white/20 text-xs" aria-hidden>·</span>
                    <span className="text-white/40 text-xs">{log.readTime} leestijd</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-gottak)] text-lg font-black text-white mb-3 leading-snug">
                    {log.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed flex-1 mb-5 line-clamp-3">
                    {log.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[#a78bfa] text-sm font-semibold group-hover:text-white transition-colors duration-200">
                    Lees verder <span className="text-base leading-none" aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}
