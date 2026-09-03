import {
  examFormats,
  examPreparationPrograms,
  examSubjectGroups,
  regularProgram,
} from "@/data/subjects";

export function WhatStudentsLearn() {
  return (
    <section className="learning" aria-labelledby="learning-title">
      <div className="site-container learning-heading">
        <p className="eyebrow">What students learn</p>
        <h2 id="learning-title" className="learning-title">
          Skills for school.
          <span>Thinking for what&apos;s next.</span>
        </h2>
        <p className="learning-intro">
          Start with strong Maths and English foundations, then prepare with purpose for
          selective entry and scholarship opportunities.
        </p>
      </div>

      <div className="site-container learning-map">
        <article className="foundation-pathway">
          <div className="pathway-heading">
            <p>{regularProgram.label}</p>
            <span aria-hidden="true">01</span>
          </div>
          <h3>{regularProgram.name}</h3>
          <p className="pathway-description">{regularProgram.description}</p>
          <ul className="foundation-subjects" aria-label="Regular program subjects">
            {regularProgram.subjects.map((subject) => (
              <li key={subject}>{subject}</li>
            ))}
          </ul>
        </article>

        <div className="exam-pathways">
          <div className="exam-header">
            <div>
              <p className="pathway-label">Exam preparation</p>
              <h3>Targeted pathways</h3>
            </div>
            <p className="exam-formats">
              Workshops for
              <span>{examFormats.join(" + ")}</span>
            </p>
          </div>

          <div className="exam-program-list">
            {examPreparationPrograms.map((program, index) => (
              <article className="exam-program" key={program.id}>
                <span className="exam-index" aria-hidden="true">
                  {String(index + 2).padStart(2, "0")}
                </span>
                <h4>{program.name}</h4>
                <p>{program.description}</p>
              </article>
            ))}
          </div>

          <div className="exam-curriculum">
            {examSubjectGroups.map((group) => (
              <div className="exam-subject-group" key={group.name}>
                <p>{group.name}</p>
                <ul>
                  {group.subjects.map((subject) => (
                    <li key={subject}>{subject}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
