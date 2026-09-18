import React, { useRef, useState } from 'react';
import { content } from '../../config';

export const Jobs = () => {
  const [active, setActive] = useState(0);
  const tabsRef = useRef([]);
  const job = content.experience.jobs[active];

  const handleKeyDown = (event, index) => {
    const lastIndex = content.experience.jobs.length - 1;
    const nextIndex = {
      ArrowDown: (index + 1) % (lastIndex + 1),
      ArrowRight: (index + 1) % (lastIndex + 1),
      ArrowUp: (index + lastIndex) % (lastIndex + 1),
      ArrowLeft: (index + lastIndex) % (lastIndex + 1),
      Home: 0,
      End: lastIndex,
    }[event.key];

    if (nextIndex === undefined) return;
    event.preventDefault();
    setActive(nextIndex);
    tabsRef.current[nextIndex]?.focus();
  };

  return (
    <section id="jobs" className="section experience">
      <h2>{content.experience.title}</h2>
      <div className="job-tabs">
        <div role="tablist" aria-label="Job tabs">
          {content.experience.jobs.map((item, index) => (
            <button
              id={`job-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={active === index}
              aria-controls="job-panel"
              className={active === index ? 'active' : ''}
              ref={element => { tabsRef.current[index] = element; }}
              tabIndex={active === index ? 0 : -1}
              key={`${item.company}-${item.period}`}
              onKeyDown={event => handleKeyDown(event, index)}
              onClick={() => setActive(index)}>
              {item.company}
            </button>
          ))}
        </div>
        <article id="job-panel" role="tabpanel" aria-labelledby={`job-tab-${active}`}>
          <h3>
            {job.role} <span>@</span>{' '}
            {job.companyUrl ? (
              <a href={job.companyUrl} target="_blank" rel="noopener noreferrer">{job.company}</a>
            ) : job.company}
          </h3>
          <p className="period">{job.period}</p>
          <ul className="job-details">
            {job.details.map(detail => <li key={detail}>{detail}</li>)}
          </ul>
        </article>
      </div>
    </section>
  );
};
