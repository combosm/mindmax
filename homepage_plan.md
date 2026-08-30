# HOMEPAGE_PLAN.md

# MindMax Tutoring Homepage Roadmap

## Purpose

This document defines the staged implementation roadmap for the MindMax Tutoring homepage.

Each phase should be completed, reviewed and marked as approved before moving to the next phase.

Codex must read:

1. AGENTS.md
2. design.md
3. HOMEPAGE_PLAN.md

before beginning each phase.

Do not skip ahead unless explicitly instructed.

---

# Project Status

Current Phase:
PHASE 1 — Design System and Planning

Status:
READY FOR REVIEW

Last Approved Phase:
NONE

---

# Phase Workflow

For every phase:

1. read all project guidance
2. inspect the current implementation
3. confirm which files are relevant
4. implement only the current phase
5. run the project
6. visually inspect the result
7. test responsive behaviour
8. run lint/typecheck/build
9. fix visible or technical issues
10. update this document's Phase Status
11. stop for review

Do not automatically proceed to the next phase.

---

# PHASE 1 — Design System and Project Foundation

## Objective

Establish the visual and technical foundation of the MindMax website before building page content.

## Deliverables

Create:

- final design tokens
- font configuration
- global CSS
- responsive container system
- grid rules
- button primitives
- base typography styles
- central business data files
- metadata foundation
- image handling conventions

## Files likely involved

- design.md
- src/app/globals.css
- src/app/layout.tsx
- tailwind config if applicable
- src/data/*
- src/components/ui/*

## Requirements

Follow design.md exactly.

Do not build homepage sections yet.

Use:

- Manrope for headings
- Inter for body/UI
- warm ivory page background
- MindMax red and blue
- restrained radius
- central design tokens

## Acceptance Criteria

- fonts load correctly
- colour tokens are centralised
- typography scale exists
- button system exists
- responsive container exists
- no unnecessary UI framework
- project passes lint
- project passes typecheck
- project builds successfully

## Status

READY FOR REVIEW — 2026-08-29

## Completion Notes

- created the Next.js, TypeScript and Tailwind CSS project foundation
- centralised approved colour, spacing, radius and responsive grid tokens
- configured locally hosted Manrope and Inter through `next/font/local`
- added base typography, responsive container and accessible button primitives
- added typed business, program, result, location, subject and support data
- added metadata and responsive image conventions
- updated Next.js to 16.3.3; production dependency audit reports zero vulnerabilities
- verified the app at Phase 1 target widths; lint, typecheck and production build pass

---

# PHASE 2 — Navigation and Hero

## Objective

Create the complete above-the-fold MindMax experience.

This phase establishes the main visual identity of the website.

## Sections

### Navigation

Include:

- MindMax logo
- Programs
- How It Works
- Results
- About
- FAQs
- Enquire Now CTA

Requirements:

- sticky
- clean
- compact
- mobile menu
- keyboard accessible

---

### Hero

Eyebrow:

TUTORING FOR GRADES 3–6

Primary headline direction:

Strong foundations.
Bigger possibilities.

Potential treatment:

- first line navy
- second line red

Supporting copy should explain that MindMax provides structured Maths, English and reasoning tutoring designed to build:

- academic skills
- confidence
- independence

CTA:

Primary:
Enquire Now

Secondary:
Explore Programs →

---

### Hero Imagery

Create an editorial photographic composition.

Avoid:

single rectangular stock image

Prefer:

- primary student image
- secondary tutor image
- subtle navy geometry
- restrained red detail
- soft blue accent
- shapes inspired by the MindMax M

---

### Hero Proof

Include:

100+
Selective School Offers

45+
School Scholarships

Since
2012

Do not place these inside three identical cards.

Use large typography and clean dividers.

---

## Acceptance Criteria

Desktop:

- hero feels premium and editorial
- major value proposition visible immediately
- results visible above or near fold
- red is restrained
- imagery does not feel generic

Mobile:

- headline remains impactful
- CTA remains obvious
- image composition simplifies cleanly
- statistics remain readable
- navigation works properly

Technical:

- responsive
- accessible
- no overflow
- images optimised
- build passes

## Status

NOT STARTED

## Completion Notes

---

# PHASE 3 — MindMax Difference

## Objective

Explain why MindMax is more than a weekly tutoring class.

## Main Message

The class ends.
Our support doesn't.

Secondary line:

Progress tracked.
Parents informed.

## Content

Represent the support model using existing MindMax concepts such as:

- graded Maths testing
- writing task with teacher correction
- teacher-led weekend homework support
- Selective School mentor buddy

Do not invent new inclusions.

## Visual Direction

Use a strong navy section.

Possible visual systems:

- connected horizontal journey
- staggered columns
- numbered support system
- learning loop

Avoid:

four generic white cards.

Use:

- white text
- pale blue details
- restrained red accents

## Acceptance Criteria

- support model is immediately understandable
- navy section creates strong contrast after hero
- section feels unique
- no generic card grid
- mobile layout remains coherent

## Status

NOT STARTED

## Completion Notes

---

# PHASE 4 — Programs

## Objective

Clearly present MindMax's two main learning formats.

## Programs

### Online Live Classes

Communicate:

- live teaching
- structured sessions
- learning from home
- ongoing support

### Face-to-Face Classes

Communicate:

- direct teacher interaction
- classroom environment
- collaborative learning
- physical locations

Do not imply one format is superior.

## Visual Direction

Use two substantial editorial program panels.

Each should contain:

- title
- concise explanation
- key details
- image
- CTA

Avoid small cards.

## Acceptance Criteria

- parent can immediately understand the difference
- program choice feels simple
- both formats receive equal visual weight
- layout is responsive
- CTA paths are clear

## Status

NOT STARTED

## Completion Notes

---

# PHASE 5 — What Students Learn

## Objective

Explain the academic areas MindMax teaches.

## Content

Include:

- Mathematics
- Numerical / Quantitative Reasoning
- English
- Reading
- Writing
- Verbal Reasoning

## Main Message

Potential direction:

Skills for school.
Thinking for beyond it.

## Preferred Grouping

### Numeracy

- Mathematics
- Numerical Reasoning

### Literacy and Reasoning

- English
- Reading
- Writing
- Verbal Reasoning

## Visual Direction

Do not create six identical cards.

Potential composition:

- large typographic list
- illustration or photography opposite
- two disciplinary groups
- responsive editorial layout

## Acceptance Criteria

- subjects are easy to scan
- numeracy and literacy feel balanced
- section visually differs from Programs
- no repetitive card grid

## Status

NOT STARTED

## Completion Notes

---

# PHASE 6 — Results

## Objective

Create one of the strongest visual sections on the homepage.

## Content

Use only supported claims:

100+
Selective School Offers

45+
School Scholarships

Established
2012

## Main Message

Potential direction:

A track record built over more than a decade.

## Visual Direction

Use:

- oversized numbers
- strong typography
- dark navy or blue field
- photography where appropriate
- restrained red emphasis

Avoid:

small stat cards.

Add clear wording explaining that results are historical outcomes and do not guarantee future results.

## CTA

See Our Results →

## Acceptance Criteria

- results are visually dominant
- numerical information is easy to understand
- claims are not exaggerated
- section feels credible rather than boastful
- mobile layout remains impactful

## Status

NOT STARTED

## Completion Notes

---

# PHASE 7 — How It Works

## Objective

Show that MindMax provides a continuous learning process rather than a single weekly class.

## Possible Journey

1. Learn
Teacher-led instruction

2. Practise
Structured weekly work

3. Apply
Tests, writing and reasoning tasks

4. Receive Feedback
Teacher correction and guidance

5. Get Support
Homework / weekend support

6. Track Progress
Parents stay informed

## Main Message

Learning that continues beyond the lesson.

## Visual Direction

Create a connected visual journey.

Possible approaches:

- vertical timeline
- horizontal pathway
- alternating image/content layout
- learning loop

Avoid:

six isolated feature cards.

## Acceptance Criteria

- process is easy to understand
- connection between stages is visually obvious
- desktop and mobile both feel intentionally designed
- imagery supports the explanation

## Status

NOT STARTED

## Completion Notes

---

# PHASE 8 — Parent Progress

## Objective

Highlight parent communication and accountability.

## Main Message

Progress tracked.
Parents informed.

## Content

Explain how MindMax gives parents visibility into student development.

Possible elements:

- graded work
- teacher feedback
- progress reporting
- assessment outcomes

Do not invent systems or technology that have not been supplied.

If a representative UI mockup is used, clearly treat it as representative rather than claiming it is an existing MindMax platform.

## Visual Direction

Use a lighter section.

Potential background:

- white
- ice blue
- warm ivory

Potential visual:

- report-style graphic
- marked work
- parent progress overview

## Acceptance Criteria

- parent value is obvious
- no unsupported claims
- section feels trustworthy
- visual presentation is clean

## Status

NOT STARTED

## Completion Notes

---

# PHASE 9 — Testimonials and Social Proof

## Objective

Introduce real parent/student experiences.

## Content

Do not invent testimonials.

Until testimonials are supplied, use clearly labelled placeholder content.

Build the component so real testimonials can be inserted easily later.

## Visual Direction

Avoid three identical quote cards.

Possible layout:

- one featured testimonial
- secondary scrolling testimonials
- horizontal carousel
- integrated photography

## Acceptance Criteria

- placeholder status is clear
- final component is easy to populate
- accessibility works
- mobile interaction is clean

## Status

NOT STARTED

## Completion Notes

---

# PHASE 10 — Locations

## Objective

Make learning options and locations easy to understand.

## Known Locations / Options

- Hoppers Crossing
- South Yarra
- Online Classes

Do not state availability or waitlist status unless supplied and confirmed.

## Visual Direction

Keep section compact.

Potential approaches:

- large typographic location list
- map-inspired visual
- location rows
- image plus location details

Avoid excessive cards.

## Acceptance Criteria

- location information is easy to scan
- online option is visible
- business data is stored centrally
- content can be updated easily later

## Status

NOT STARTED

## Completion Notes

---

# PHASE 11 — FAQ

## Objective

Resolve common parent questions close to conversion.

## Potential Questions

- What year levels does MindMax tutor?
- What subjects are covered?
- How do online classes work?
- What support is available outside class?
- How is progress tracked?
- Where are face-to-face classes held?
- How do I choose the right program?
- How do I enquire?

## Visual Direction

Use a restrained accordion.

Avoid:

- giant rounded FAQ container
- excessive animation

## Acceptance Criteria

- keyboard accessible
- clear focus states
- mobile friendly
- answers sourced from approved business information

## Status

NOT STARTED

## Completion Notes

---

# PHASE 12 — Final CTA and Footer

## Objective

Create a strong conversion-focused ending.

## CTA Direction

Potential heading:

Build the skills.
Achieve the results.

or

Ready to find the right program for your child?

## Primary CTA

Enquire Now

## Secondary CTA

Contact MindMax

## Visual Direction

Use a strong navy closing section.

Possible:
- large white typography
- small red accent
- subtle MindMax geometry

---

## Footer

Include:

### Programs
- Online Classes
- Face-to-Face Classes

### Explore
- How It Works
- Results
- About
- FAQs

### Locations
- Hoppers Crossing
- South Yarra
- Online

### Contact

### Social

### Legal
- Privacy Policy
- Terms

Use a substantial navy footer.

## Acceptance Criteria

- strong final CTA
- contact path is clear
- footer is clean
- mobile footer is usable
- no unsupported contact information is invented

## Status

NOT STARTED

## Completion Notes

---

# PHASE 13 — Full Homepage Visual QA

## Objective

Review the homepage as one complete design rather than isolated sections.

## Inspect At

- 375px
- 430px
- 768px
- 1024px
- 1440px

## Review Questions

### Brand

- Does the page feel recognisably MindMax?
- Does the logo sit naturally within the interface?
- Are red and blue balanced properly?

### Hierarchy

- Is the hero clearly strongest?
- Are results prominent?
- Is the enquiry pathway obvious?

### Rhythm

- Are consecutive sections too visually similar?
- Is there enough whitespace?
- Are too many sections centred?
- Are there too many cards?

### Typography

- Are headings sufficiently bold?
- Are line lengths appropriate?
- Does mobile typography scale well?

### Imagery

- Is photography cohesive?
- Are image crops intentional?
- Does anything feel like generic stock?

### Mobile

- Does the mobile version feel designed?
- Is anything awkwardly stacked?
- Are CTAs easy to tap?
- Is there horizontal overflow?

### AI Template Check

Explicitly identify anything that looks like generic AI-generated frontend design.

Fix it.

## Acceptance Criteria

Homepage feels coherent as one product.

All major visual issues resolved.

## Status

NOT STARTED

## Completion Notes

---

# PHASE 14 — Accessibility, Performance and Technical QA

## Objective

Complete final technical quality checks.

## Accessibility

Check:

- heading hierarchy
- keyboard navigation
- focus states
- accordion accessibility
- navigation accessibility
- image alt text
- colour contrast
- reduced motion
- touch targets

## Performance

Check:

- image optimisation
- responsive images
- lazy loading
- fonts
- JavaScript usage
- animation cost
- Core Web Vitals risks

## SEO

Check:

- title
- description
- headings
- metadata
- OpenGraph
- structured data where appropriate
- local relevance
- descriptive links

## Engineering

Run:

- lint
- typecheck
- production build

Fix all errors.

## Status

NOT STARTED

## Completion Notes

---

# PHASE 15 — Content Verification

## Objective

Ensure the finished homepage contains no fabricated business information.

## Verify

- numbers
- program details
- locations
- teacher claims
- class formats
- testimonials
- prices
- contact information
- schedules
- support claims

Cross-check against approved MindMax source material.

Anything unsupported must be:

- removed
- corrected
- or clearly marked as placeholder

## Status

NOT STARTED

## Completion Notes

---

# Phase Completion Format

When a phase is approved, update its status. However, don't push it to approved status unless I confirm. If you have made changes and I haven't given the all-clear, then set it to Ready for Review.

Example:

## Status

APPROVED — 2026-08-28

## Completion Notes

- implemented responsive navigation
- completed hero composition
- refined mobile image layout
- reduced red usage in hero statistics
- production build passes

Then update:

Current Phase:
PHASE 3 — MindMax Difference

Last Approved Phase:
PHASE 2 — Navigation and Hero

Do not delete previous completion notes.

They are part of the project history.
