import React, { useState } from 'react';
import { experience } from '../../config';

export const Jobs = () => {
  const [active, setActive] = useState(0);
  const job = experience[active];

  return (
    <section id="experience" className="section experience">
      <h2><span>02.</span> Where I&apos;ve Worked</h2>
      <div className="job-tabs">
        <div role="tablist" aria-label="Experience">
          {experience.map((item, index) => (
            <button
              id={`job-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={active === index}
              aria-controls="job-panel"
              className={active === index ? 'active' : ''}
              key={item.company}
              onClick={() => setActive(index)}>
              {item.company}
            </button>
          ))}
        </div>
        <article id="job-panel" role="tabpanel" aria-labelledby={`job-tab-${active}`}>
          <h3>Developer <span>@ {job.company}</span></h3>
          <p className="period">{job.period}</p>
          <p>{job.detail}</p>
        </article>
      </div>
    </section>
  );
};
