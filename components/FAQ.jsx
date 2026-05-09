'use client';

import { useState } from 'react';

const FAQ_ITEMS = [
  {
    q: 'What balance do I need to make an SMSF worthwhile?',
    a: 'The ATO benchmarks a $200,000 balance as the typical break-even point against retail funds, and that aligns with what we see. Below $150,000 the fixed costs outweigh the savings. Between $150k–$250k the case is real but marginal. Above $250k an SMSF is almost always cheaper than the equivalent retail fund.',
  },
  {
    q: 'Can I roll over my existing super myself, or do you do it?',
    a: 'We do it. Once your fund is established and registered, we initiate the rollover requests directly with your existing fund using the SuperStream gateway. Most rollovers settle within three business days; some industry funds take up to two weeks regardless of who asks.',
  },
  {
    q: 'Who actually audits the fund each year?',
    a: 'An ASIC-approved SMSF auditor independent of Havana — required by law. We work with three audit firms on rotation and pass through the audit fee at cost (typically $440–$550 per fund per year).',
  },
  {
    q: 'What happens if I want to leave Havana?',
    a: 'You take your fund with you. We provide a full handover pack — financial statements, deed, member balances, ATO portal access — to your new administrator at no charge. The fund and its assets always belong to you.',
  },
  {
    q: 'Do you give investment advice?',
    a: 'No. Havana is licensed for SMSF establishment and administration only. If you want personal investment advice we can refer you to one of three independent advisers we have no commercial relationship with. Your investment decisions remain entirely yours.',
  },
  {
    q: 'How does the corporate trustee structure work?',
    a: 'Your fund is owned by a Pty Ltd company that exists for one purpose: holding the fund\'s assets. You and your co-members are directors of that company. It costs about $59 per year in ASIC fees and protects your personal assets in the (rare) event of a dispute. We strongly recommend it over the individual trustee alternative.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="section-head">
          <div className="head-meta">
            <div className="eyebrow"><span className="dot"></span>Frequently asked</div>
            <h2 className="h-section">Questions worth<br /><em>asking properly.</em></h2>
          </div>
          <p className="head-body">
            The six questions every prospective trustee should answer before
            signing an engagement. If you have a seventh, our team will get
            back to you within one business day.
          </p>
        </div>

        <div className="faq-list">
          {FAQ_ITEMS.map((it, i) => (
            <div key={i} className={'faq-item' + (open === i ? ' open' : '')}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="q-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="q-text">{it.q}</span>
                <span className="q-toggle"></span>
              </button>
              <div className="faq-a"><p>{it.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
