# MindMax Resources Feature Brief

## Purpose

This file preserves the agreed context and outstanding decisions for the planned MindMax Resources page.

Read this file whenever a request mentions:

- Resources
- `/resources`
- an ATAR calculator
- a scholarship finder
- scholarships near me

The detailed implementation roadmap is in `homepage_plan.md` under:

`PHASE 16 — Resources Page and Education Tools`

## Requested Feature

Add `Resources` to the desktop and mobile navigation. It should open a separate `/resources` page containing:

1. a Victorian VCE ATAR calculator
2. a Scholarships Near Me finder

The tools must follow `design.md`, preserve MindMax's primary Grades 3–6 positioning and avoid implying that MindMax provides VCE tutoring or scholarship application services unless separately verified.

## Information the Owner Does Not Have

The owner does not currently have:

- ATAR calculation methodology or subject-scaling data
- a scholarship database
- school coordinates or scholarship application dates

The implementation process should therefore research authoritative sources and must not invent or approximate unpublished facts without clear disclosure.

## Decisions Required From the Owner

Before implementation, ask for or confirm the following:

1. Geographic scope
   - Confirm whether both tools should be Victoria-only.

2. Scholarship school coverage
   - Confirm whether the initial release should cover all Victorian schools or Melbourne and surrounding suburbs first.
   - Recommended default: Melbourne and surrounding suburbs first.

3. Scholarship types
   - Confirm which categories to include: academic, general excellence, music, sport, performing or visual arts, and equity or means-tested opportunities.
   - Recommended default: include all verified categories and provide filters.

4. Eligible entry years
   - Confirm whether to focus on Years 5–9 or include every available secondary-school entry level.
   - Recommended default: Years 5–9 initially, matching the needs of MindMax families more closely.

5. ATAR calculator positioning
   - Confirm that it is a broader family resource and does not advertise MindMax as a VCE tutoring provider.

6. Maintenance ownership
   - Confirm who will review time-sensitive data after launch.
   - Recommended minimum: annual ATAR review and quarterly scholarship review.

7. Commercial status
   - Confirm that school results are impartial informational listings rather than paid placements or partner recommendations.

## Work Codex Can Handle

Once the decisions above are confirmed, Codex can:

- research official VTAC rules and lawful scaling sources
- identify the latest complete calculation year that can be supported reliably
- research official school scholarship pages
- create typed calculator and scholarship datasets
- record source URLs, publication dates and last-reviewed dates
- document a repeatable data-update process
- write appropriate estimate, third-party information and privacy disclaimers
- design and implement the Resources page and navigation changes
- add validation and automated calculator tests
- complete responsive, accessibility, privacy, lint, typecheck, build and visual QA

## Agreed Technical Defaults

Unless the owner requests otherwise:

- use `/resources` as the route
- place both tools on the same Resources page
- use suburb or postcode entry rather than requesting browser geolocation
- do not retain student scores, addresses or precise location information
- keep changing business and tool data separate from component code
- use official Victorian and individual school sources wherever possible
- label the ATAR output as an estimate, including its calculation year and assumptions
- show an official source and last-reviewed date for scholarship listings
- do not publish placeholder calculations or unverified scholarship claims

## Current Status

Planned only. No implementation has started.
