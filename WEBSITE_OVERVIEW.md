# Eazisols — Application Workflow (Client Summary)

## What It Does

Eazisols is a public marketing website for a software development agency. It presents the company’s services, work, and expertise, and helps prospective clients learn about offerings, estimate app development costs, read articles, explore careers, and get in touch to start a project.

There is no user login, online payment, or customer account area. The site is designed to inform visitors and convert interest into enquiries, calls, and booked discovery meetings.

---

## User Types

| User type | Who they are | What they can do |
|-----------|--------------|------------------|
| **Website visitor** | Anyone browsing the site | View all public pages, read the blog, browse portfolio, use the App Cost Calculator, submit enquiry details, open contact options, and book a discovery call |
| **Prospective client** | A visitor ready to engage | Complete the contact form, use the cost calculator, open the Contact popup (phone, WhatsApp, email), or schedule a 30-minute call via Cal.com |
| **Job applicant** | Someone interested in careers | View company culture, benefits, timeline, and open positions on the Careers page |

*Note: This application does not include separate logged-in roles such as admin, staff, or customer accounts.*

---

## End-to-End Flow

**Simple journey**

Visit Website → Explore Content → Choose an Action (Contact / Calculator / Book Call) → Submit Details or Schedule → Eazisols Follow-up

**Numbered steps**

1. **Arrive on the website** — The visitor lands on the Home page with the main headline, company stats, services overview, process timeline, challenges, comparison chart, testimonials, discovery-call booking, and quick links to the calculator and contact areas.

2. **Browse and build trust** — The visitor can move through the main navigation to:
   - **Services** — Detailed service information (software, ERP, AI/ML, marketing, design)
   - **Portfolio** — Filterable showcase of past work
   - **Blog** — Articles on ERP, apps, and technology topics
   - **Careers** — Company story, benefits, and open roles

3. **Take a conversion action** — The visitor typically does one or more of the following:
   - Fills in the **project enquiry form** on the Home page (name, email, phone, communication preference, project description)
   - Clicks **Contact us** in the header to open a popup with regional phone numbers, WhatsApp, and email
   - Uses the **App Cost Calculator** to estimate project scope and cost
   - Books a **Discovery Call** (30 minutes) through the embedded Cal.com scheduler on the Home page

4. **App Cost Calculator flow** (optional path) — Visitor opens the calculator → starts the guided wizard → selects app type → chooses project scale → describes the idea → enters contact details → reviews selected features → receives an on-screen estimate and thank-you confirmation.

5. **Outcome** — The visitor has either shared contact details, received a cost estimate summary on screen, booked a meeting, or reached the team via phone, WhatsApp, or email. Follow-up is handled by the Eazisols sales/operations team outside this website.

---

## Enquiry & Calculator Workflow States

This site does not process orders or tickets. The main “states” relate to how a visitor progresses through lead-generation tools.

| State | Where it appears | What it means |
|-------|------------------|---------------|
| **Browsing** | Any page | Visitor is reading content with no form started |
| **Enquiry started** | Home contact form / Contact popup | Visitor is viewing or filling contact options |
| **Calculator — in progress** | App Cost Calculator wizard | Visitor is moving through steps 1–4 of the estimate tool |
| **Calculator — review** | Final calculator step | Visitor reviews selected features and estimated hours/cost |
| **Calculator — complete** | Thank-you screen | Visitor sees estimated cost and confirmation message |
| **Call booked** | Discovery Call section | Visitor schedules a meeting via Cal.com |
| **Direct contact** | Phone / WhatsApp / email links | Visitor reaches the team without using a form |

---

## Main Features & Site Sections

| Module / section | Purpose |
|------------------|---------|
| **Home page** | Central hub: hero, enquiry form, stats, services, 90-day process, challenges, comparison chart, testimonials, discovery call, and call-to-action tiles |
| **Services** | Explains Eazisols capabilities (ERP, software, AI, marketing, design) |
| **Portfolio** | Visual grid of project work with category filters |
| **App Cost Calculator** | Multi-step wizard to estimate app build cost and scope |
| **Blog** | Featured article and listing of development/ERP articles |
| **Careers** | Employer branding, benefits, timeline, and job listings |
| **Contact popup** | Quick access to phone numbers (copy), WhatsApp, and email from the navbar |
| **Footer** | Company links, service links, contact details, social profiles, and “Book a Free Call” |

---

## Admin / Management Modules

| Area | Status |
|------|--------|
| **Website admin panel** | Not included — there is no built-in CMS or dashboard in this application |
| **User management** | Not applicable — no login system |
| **Order / payment management** | Not applicable — no e-commerce or billing |
| **Content updates** | Handled by updating the website project (pages, text, images) and redeploying |
| **Lead handling** | Expected to be managed by the Eazisols team via email, WhatsApp, phone, and Cal.com bookings |

---

## Key Integrations

| Integration | Used for | Notes |
|-------------|----------|-------|
| **Cal.com** | Booking 30-minute discovery calls (`eazisols/30min`) | Embedded scheduler on the Home page |
| **WhatsApp** | Direct messaging links | Contact popup and floating action button |
| **Email (mailto)** | `info@eazisols.com` and related addresses | Opens the visitor’s email client |
| **Social media** | Facebook, Instagram, LinkedIn, YouTube, X (Twitter) | Linked from the footer |
| **Highcharts** | Partner comparison bar chart on Home | Visual comparison of time, pricing, and scalability |
| **Google Fonts (Inter)** | Site typography | Loaded for consistent branding |
| **Vercel** | Website hosting and deployment | Production delivery platform |

**Not currently integrated in this project:** payment gateways (Stripe, PayPal), user authentication, database storage, or automated email delivery (SMTP) for form submissions. Contact and calculator flows are presented in the browser; backend submission can be added separately if required.

---

## One-Line Summary

**Eazisols is a lead-generation agency website that helps visitors explore services, estimate app costs, read insights, apply for jobs, and contact or book a discovery call with the Eazisols team.**

---

*Prepared for client review — Eazisols*
