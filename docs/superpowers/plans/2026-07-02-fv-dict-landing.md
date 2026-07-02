# FV Dict Landing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished static FV Dict landing page with dedicated `/support` and `/privacy` routes for App Store review.

**Architecture:** Use Next.js App Router server components, shared global design tokens in `app/globals.css`, and focused route files for homepage, support, and privacy. The homepage follows approved direction A: calm product hero, faithful dictionary UI mockup, concise features, trust/privacy, and support links.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, Geist via `next/font`.

---

### Task 1: Smoke Test

**Files:**
- Create: `tests/landing-content.test.mjs`

- [ ] **Step 1: Add source-level route/content smoke test**

Create a Node test that reads the route source files and asserts the required FV Dict claims are present while prohibited claims and fake store URLs are absent.

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/landing-content.test.mjs`
Expected: FAIL because the starter homepage does not include FV Dict content and `/support` plus `/privacy` are empty/missing.

### Task 2: App Shell And Homepage

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`
- Modify: `app/page.tsx`

- [ ] **Step 1: Update metadata and language**

Set FV Dict title, description, keywords, Open Graph metadata, and theme color. Keep Geist and App Router layout.

- [ ] **Step 2: Replace starter page**

Build direction A: navigation, calm hero, component-based phone mockup, four feature blocks, sample entry/product detail section, privacy/trust section, and footer.

- [ ] **Step 3: Apply DESIGN.md styling**

Use the DESIGN.md palette: warm background, ink text, black pill CTAs, restrained yellow/teal/rose/coral accents, hairline borders, and 28px feature radii.

### Task 3: Support And Privacy Routes

**Files:**
- Create: `app/support/page.tsx`
- Create: `app/privacy/page.tsx`

- [ ] **Step 1: Add support route**

Create App Store-ready support copy with common issues, report template, privacy link, and a configurable `SUPPORT_EMAIL` constant.

- [ ] **Step 2: Add privacy route**

Create plain-language privacy policy covering offline lookup, no account, no ads, no tracking, bundled database, local favorites/recent searches, and support-contact data.

### Task 4: Verify

**Files:**
- Existing app and test files

- [ ] **Step 1: Run smoke test**

Run: `node tests/landing-content.test.mjs`
Expected: PASS.

- [ ] **Step 2: Run lint**

Run: `npm run lint`
Expected: no ESLint errors.

- [ ] **Step 3: Run production build**

Run: `npm run build`
Expected: successful Next.js build with `/`, `/support`, and `/privacy` prerendered.
