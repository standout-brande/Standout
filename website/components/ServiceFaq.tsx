import { SERVICE_SEO } from '@/lib/seo'

/**
 * Service FAQs: plain question-and-answer pairs that answer engines can lift as-is.
 * Native <details>, so every answer is in the HTML and works without JavaScript. Same copy feeds the FAQPage schema.
 */
export function ServiceFaq({ slug, name }: { slug: string; name: string }) {
  const faqs = SERVICE_SEO[slug]?.faqs
  if (!faqs?.length) return null
  return (
    <section className="px-5 pb-20 md:px-10 md:pb-28" aria-labelledby={`faq-${slug}`}>
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 border-t border-mist/12 pt-16 md:grid-cols-12 md:gap-16">
        <div className="flex flex-col gap-3 md:col-span-5">
          <h2 id={`faq-${slug}`} className="font-display text-[clamp(2rem,3.4vw,3.2rem)] font-extrabold leading-[1] tracking-[-0.03em]">Questions about {name.toLowerCase()}</h2>
          <p className="max-w-[40ch] text-[16px] leading-relaxed text-steel">The short answers. For anything else, tell us the show and the date.</p>
        </div>
        <div className="flex flex-col md:col-span-7">
          {faqs.map((f, i) => (
            <details key={f.q} className="group border-b border-mist/12 py-6 first:pt-0" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-[clamp(1.2rem,1.6vw,1.45rem)] font-bold leading-snug tracking-[-0.015em] marker:hidden hover:text-signal [&::-webkit-details-marker]:hidden">
                <h3>{f.q}</h3>
                <span aria-hidden="true" className="mt-1 shrink-0 text-signal transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-[60ch] text-[16px] leading-relaxed text-mist/75 md:text-[17px]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
