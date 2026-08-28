# AGENTS.md

## Project

This repository contains the MindMax Tutoring website.

MindMax Tutoring is an established Melbourne tutoring business operating since 2012. The website is primarily aimed at parents of students in approximately Grades 3–6.

The site should communicate:

- academic credibility
- strong foundations
- structured learning
- accountability
- supportive teaching
- ambition without intimidation
- modern professionalism

The website must remain recognisably MindMax through its existing logo, red/blue brand identity, messaging and educational positioning.

---

## Core Rule

Before making any frontend or visual change, read:

1. `AGENTS.md`
2. `design.md`
3. the relevant planning document, such as `HOMEPAGE_PLAN.md`

`design.md` is the source of truth for visual decisions once it exists.

Do not override the approved design system unless explicitly instructed.

---

## Reference Material

Brand and design references are stored in `/references`.

These may include:

- MindMax logo assets
- MindMax Facebook marketing
- existing MindMax promotional material
- Contour Education reference material
- HZ Tutoring reference material
- other approved visual references

Treat MindMax's supplied assets as the source of truth for the brand.

Reference websites are inspiration only.

Do not copy:
- exact layouts
- illustrations
- wording
- visual compositions
- proprietary branding

Extract design principles and reinterpret them for MindMax.

---

## Brand Direction

MindMax should feel:

- confident
- academic
- supportive
- established
- ambitious
- modern
- trustworthy

The parent should feel reassured.

The student should feel supported rather than pressured.

The brand should feel serious about results without becoming cold, elitist or intimidating.

Avoid making the brand feel like:

- a children's learning app
- a generic local tutoring website
- an edtech SaaS product
- a corporate consulting website
- a luxury private-school brand
- an AI-generated landing page

---

## Existing Brand Identity

The MindMax logo must be preserved.

Do not redesign or alter the logo unless explicitly asked.

The existing identity is based around:

- MindMax blue
- MindMax red
- white

The website should refine this into a more sophisticated digital system.

Use the red and blue with restraint.

The logo may be visually strong.

The surrounding interface should be calmer.

---

## Visual Direction

Preferred characteristics:

- large editorial typography
- strong hierarchy
- generous whitespace
- warm neutral backgrounds
- deep navy sections
- restrained red accents
- asymmetric composition
- clean grid systems
- real education-focused photography
- varied section structures
- subtle custom geometry inspired by the MindMax logo
- strong use of numerical proof and outcomes

Avoid:

- endless three-card grids
- every section being centred
- excessive pill-shaped UI
- large gradient blobs
- glassmorphism
- purple gradients
- generic SaaS layouts
- excessive rounded rectangles
- excessive shadows
- generic icon-in-circle feature cards
- animation for its own sake
- every section using the same structure

Do not put everything inside cards.

The page should feel intentionally art-directed.

---

## Colour Direction

The final colour values should be derived from the supplied logo where possible.

Initial direction:

- deep navy for authority and large dark sections
- existing MindMax blue as the primary brand colour
- existing MindMax red for CTAs and selective emphasis
- warm ivory/off-white as the primary page canvas
- white for cards and contrast
- pale blue and pale red for supporting surfaces
- dark slate for text

Approximate colour balance:

- 60% neutral
- 30% blue family
- 10% red

Do not introduce another dominant brand colour.

A restrained gold accent may only be used for achievement-related details if the design requires it.

---

## Typography

Preferred starting point:

- Headings: Manrope
- Body/UI: Inter

Typography should do substantial visual work.

Use:

- large display headings
- tight headline line-height
- strong weight contrast
- short line lengths
- clear body copy
- uppercase eyebrow labels where useful

Avoid excessive centred text.

Do not use playful or childish typefaces.

---

## Copy Rules

Copy should be:

- concise
- parent-focused
- specific
- credible
- confident
- clear

Avoid generic AI or tutoring clichés such as:

- "Unlock your child's full potential"
- "Empowering students to succeed"
- "Your journey to success starts here"

unless explicitly approved.

Existing MindMax phrases that may be retained include:

- "The class ends. Our support doesn't."
- "Progress tracked. Parents informed."
- "Beyond Scores. Build the Skills. Achieve the Results."

Do not invent business facts.

Do not invent:
- student numbers
- testimonials
- success rates
- staff qualifications
- awards
- locations
- pricing
- class times
- guarantees

Use clearly labelled placeholders where information is unavailable.

---

## Known Business Claims

Claims currently supported by supplied MindMax material include:

- established since 2012
- Australian-based teachers
- 100+ Selective School Offers
- 45+ School Scholarships

Treat numerical outcome claims as historical results, not guarantees.

Do not add stronger claims without evidence.

---

## Technical Stack

Unless explicitly changed, use:

- Next.js
- TypeScript
- Tailwind CSS

Prefer:

- semantic HTML
- reusable React components
- centralised design tokens
- strongly typed data
- simple dependency choices
- maintainable component architecture

Avoid unnecessary libraries.

Do not install large UI frameworks unless specifically requested.

---

## Architecture

Keep frequently changing business information separate from layout code.

Prefer structures such as:

`src/data/programs.ts`
`src/data/results.ts`
`src/data/locations.ts`
`src/data/faq.ts`
`src/data/testimonials.ts`

Do not hardcode business data repeatedly across components.

Keep components reusable where it improves maintainability.

Do not over-abstract trivial components.

---

## Responsive Design

Design mobile intentionally.

Do not simply stack the desktop layout.

Test important work at approximately:

- 375px
- 430px
- 768px
- 1024px
- 1440px

Check:

- typography
- tap targets
- navigation
- image compositions
- timelines
- section spacing
- overflow
- content hierarchy

The mobile version must feel designed, not merely functional.

---

## Accessibility

Follow accessibility-conscious practices.

Use:

- semantic HTML
- logical heading hierarchy
- keyboard-accessible navigation
- visible focus states
- accessible accordions and interactive elements
- meaningful alt text
- sufficient contrast
- appropriate touch targets
- reduced-motion support

Do not rely solely on colour to communicate meaning.

---

## Motion

Motion should be restrained and useful.

Acceptable:

- subtle fade/translate reveals
- gentle hover transitions
- accordion animation
- navigation transitions
- subtle image-mask reveals
- selective number animation

Avoid:

- constant floating elements
- bouncing buttons
- excessive parallax
- every element animating on scroll
- motion that delays content

Respect `prefers-reduced-motion`.

---

## SEO and Performance

Use good baseline SEO and frontend performance practices.

Consider:

- meaningful metadata
- semantic structure
- descriptive link text
- responsive images
- sensible image optimisation
- lazy loading below the fold
- font optimisation
- minimal unnecessary JavaScript

Do not keyword-stuff content.

---

## Quality Checks

Before considering frontend work complete:

1. run the app
2. run type checking
3. run linting
4. run a production build
5. inspect desktop and mobile layouts
6. fix errors and visible regressions

For visual work, also ask:

- Does this feel recognisably MindMax?
- Is red being overused?
- Is there enough whitespace?
- Are there too many cards?
- Are too many sections centred?
- Does this look like generic AI-generated UI?
- Is typography doing enough visual work?
- Are results and proof prominent?
- Can a parent understand the offering quickly?
- Is the enquiry path obvious?

If the answer to any of these is no, refine the design.

---

## Working Style

Prefer small, well-scoped changes.

Do not rewrite unrelated parts of the project.

Before large changes:
- inspect the existing implementation
- identify affected files
- make a short plan

After changes:
- verify behaviour
- explain what changed
- mention any unresolved issues

Do not silently change approved brand or content decisions.

---

## Git Rules

Do not push directly to `main` unless explicitly instructed.

Prefer feature branches for substantial work.

Keep commits focused and descriptive.

Do not commit generated secrets, credentials or environment values.

Never expose API keys or private configuration.

---

## Step 1 Specific Instruction

For the first design task:

DO NOT build the website.

Only:

1. inspect all files in `/references`
2. analyse the MindMax brand
3. analyse the approved reference websites
4. create `design.md`
5. create `HOMEPAGE_PLAN.md`
6. identify missing assets/content
7. explain the chosen visual direction

Stop after producing those files.

Do not begin implementation until the design direction has been reviewed and approved.