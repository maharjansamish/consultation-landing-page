import { ConsultationForm } from "@/components/consultation-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const benefits = [
  ["01", "Improve Your Online Presence", "Understand opportunities to strengthen how your business appears online."],
  ["02", "Identify Three Marketing Improvement Opportunities", "Discover three practical areas where your marketing could improve."],
  ["03", "Discover Useful AI Tools", "Explore relevant AI tools that can support your marketing activities."],
  ["04", "Get a Practical 30-Day Marketing Action Plan", "Leave with a clearer direction and practical next steps for the next 30 days."],
];
const steps = [
  ["01", "Tell Us About Your Business", "Complete the consultation form and share a few details about your business."],
  ["02", "Discuss Your Marketing Goals", "Explore your current marketing challenges, goals, and opportunities."],
  ["03", "Get Your Marketing Direction", "Discover practical strategies and the next steps for your business."],
];

export default function Home() {
  return <>
    <SiteHeader />
    <main id="top">
      <section className="hero section-wrap">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-content"><span className="eyebrow"><span className="eyebrow-line" />FOR SMALL BUSINESSES & GROWING BRANDS IN NEPAL</span><h1>Your Business Has More Potential.<br className="desktop-break" /> Let’s <span className="gradient-text">Turn It Into Growth.</span></h1><p className="hero-support">Discover how AI-powered digital marketing can help you attract the right customers, strengthen your online presence, and grow with a clearer strategy.</p><p className="hero-description">Book a free one-to-one consultation to explore practical digital marketing strategies tailored to your business.</p><a className="button button-primary" href="#consultation">BOOK YOUR FREE STRATEGY CONSULTATION <span aria-hidden="true">↘</span></a><p className="trust-line"><span aria-hidden="true">✳</span> Practical insights. Clear direction. No obligation.</p></div>
        <div className="hero-index" aria-hidden="true"><span>STRATEGY</span><i /><span>CLARITY</span><i /><span>GROWTH</span></div>
      </section>

      <section className="problem section-wrap"><div className="section-kicker">A BETTER WAY FORWARD <span>01 / 04</span></div><div className="problem-grid"><h2>Your business deserves more than occasional social media posts.</h2><div><span className="accent-rule" /><p>Build a clearer marketing strategy to reach potential customers.</p><a className="text-link" href="#benefits">See what a clearer direction can unlock <span aria-hidden="true">↘</span></a></div></div></section>

      <section className="benefits section-wrap" id="benefits"><div className="section-kicker">THE CONSULTATION <span>02 / 04</span></div><div className="section-heading"><div><span className="eyebrow"><span className="eyebrow-line" />A USEFUL HOUR, WELL SPENT</span><h2>What You’ll Gain From<br />Your Free Consultation</h2></div><p>Focused on your business, your goals, and practical ways to move forward.</p></div><div className="benefit-grid">{benefits.map(([number, title, copy]) => <article className="benefit-item" key={number}><span className="item-number">{number}</span><span className="item-mark" aria-hidden="true">↗</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

      <section className="process section-wrap"><div className="section-kicker">A SIMPLE PROCESS <span>03 / 04</span></div><div className="section-heading"><div><span className="eyebrow"><span className="eyebrow-line" />FROM FIRST HELLO TO CLEAR NEXT STEPS</span><h2>Your Next Steps<br />Are Simple</h2></div><p>One conversation can help you see your marketing with fresh eyes.</p></div><div className="steps-grid">{steps.map(([number, title, copy]) => <article className="step-item" key={number}><span className="step-number">STEP {number}</span><span className="step-rule" /><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

      <section className="consult-cta section-wrap"><div className="cta-orbit" aria-hidden="true" /><span className="eyebrow"><span className="eyebrow-line" />YOUR BUSINESS, WITH A CLEARER DIRECTION</span><h2>Take the First Step Towards a <span className="gradient-text">Clearer Marketing Strategy.</span></h2><p>Book your free consultation and explore practical opportunities to improve your digital marketing.</p><a className="button button-primary" href="#consultation">BOOK YOUR FREE STRATEGY CONSULTATION <span aria-hidden="true">↘</span></a><span className="no-urgency">No artificial urgency or limited slots.</span></section>

      <section className="form-section section-wrap" id="consultation"><div className="section-kicker">START A CONVERSATION <span>04 / 04</span></div><div className="form-layout"><div className="form-intro"><span className="eyebrow"><span className="eyebrow-line" />FREE ONE-TO-ONE CONSULTATION</span><h2>Let’s Talk About<br />Your Business<span className="accent">.</span></h2><p>Share a few details so we can better understand your business and marketing goals.</p><div className="form-contact"><span>Prefer to reach out directly?</span><a href="mailto:maharjansamish@gmail.com">maharjansamish@gmail.com <span aria-hidden="true">↗</span></a><a href="https://wa.me/9779843831005" target="_blank" rel="noreferrer">WhatsApp +977 9843831005 <span aria-hidden="true">↗</span></a></div></div><ConsultationForm /></div></section>
    </main>
    <SiteFooter />
  </>;
}
