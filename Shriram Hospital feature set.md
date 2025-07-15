2 Shriram Hospital feature set (Moscow-style)
Must-have (M)

Instant-load responsive UI (Core Web Vitals ≤ 2.5 s)

Doctor directory & real-time slot booking (web + REST API)

Tele-consult module (video + e-prescription PDF)

Patient portal

Lab/radiology reports download

Bills & online payments (Razorpay/PayU)

Discharge summary & medical history

Emergency quick-dial & ambulance tracker

Department mini-sites (SEO-optimised, schema.org/MedicalClinic)

Accessibility & localisation (Hindi / English switch, high-contrast toggle)

NABH/NABL & quality badges front-and-centre

CMS for non-tech staff (Strapi / Directus)

Should-have (S)

Chat-bot (“SHRI”) with FAQs & triage flow

Health-check packages e-commerce (coupons, cart)

Real-time bed / ICU availability widget

Careers portal (jobs + HR forms)

Feedback & Google-review capture loop

Could-have (C)

Progressive Web App (installable)

Visitor way-finding kiosk mode

Doctor mobile dashboard (mirrors web admin)

3 Information architecture (pages & flows)
Home – hero slider, booking widget, emergency banner, specialties grid, testimonials, blog teaser, CSR carousel.

Book Appointment – stepper (choose dept → doctor → slot → patient info → pay).

Doctors – filters (specialty, language, gender), profile pages with calendaring, publications, videos.

Departments – 12–15 pages; each with overview, treatments, lead consultants, FAQ.

Patient Portal

Dashboard, Reports, Bills, Prescriptions, Follow-ups, Notifications.

Tele-Consult – join link + Jitsi/WebRTC embed.

About – leadership, accreditations, statistics, photo-tour.

Emergency – phone, WhatsApp, ambulance ETA map.

Health Packages – cards, comparisons, checkout.

Blog / News – Markdown via CMS, category list, single post SEO.

Contact & Getting Here – map, parking, public transport, visiting hours.

Careers – vacancies, upload CV.

Legal – Privacy, T&Cs, Patient Rights & Responsibilities.

4 Technical stack & architecture
Layer	Choice	Notes
Frontend	Next.js (React 18) + Tailwind CSS	SSG + ISR for speed; built-in routing & SEO.
Backend API	Node.js (Express) or NestJS	Thin service layer over hospital-info DB & HMS integrations.
CMS	Strapi (self-host)	Role-based; plugs into same Postgres.
Database	Postgres 15	ACID for payments & appointments.
Auth	JWT + Passport.js (email/OTP/social)	Future-proof for mobile app.
Payments	Razorpay, PayU fallback	PCI-DSS redirect flow.
Video	Jitsi self-host or Twilio	HIPAA-capable alternative.
DevOps	Docker, GitHub Actions, Kubernetes on AWS or DigitalOcean	Blue-green deploy, auto-scaling.
Monitoring	Prometheus + Grafana, Sentry for FE/BE	Real-time error and perf tracing.

5 End-to-end workflow
Stage	Key Outputs	Owner(s)	Duration
0 - Kick-off	Requirements doc, success metrics	Product + Medical Director	3 d
1 - Discovery & IA	User personas, sitemap, wireframes (Figma)	UX	7 d
2 - Visual design	Hi-fi comps, design tokens	UI/Brand	10 d
3 - Foundation build	Repo setup, CI/CD, Docker baseline	DevOps	3 d
4 - Component dev	Nav, hero, form, card systems	FE	15 d
5 - API & DB	Appointment, user, payment, report endpoints	BE	15 d
6 - Integrations	HMS bridge, SMS/Email, payment gateway	Full-stack	10 d
7 - Content migration	Doctors, dept copy, images	Content team	Parallel
8 - QA & audits	Unit + integration tests, Lighthouse ≥ 90, accessibility WCAG 2.1 AA	QA	7 d
9 - UAT & sign-off	Staging demo, feedback loop	Stakeholders	5 d
10 - Launch	Prod cut-over, DNS, CDN warm-up	DevOps	1 d
11 - Post-launch	Hot-fixes, analytics dashboards, training videos	All	2 w

(Estimated calendar: ~8 weeks MVP; adjust for scope creep.)

6 Governance & maintenance
Versioning: SemVer + CHANGELOG.

Back-ups: Nightly DB dump, hourly WAL archive.

Compliance: NABH web-publication clauses, Indian IT Act 2000, GDPR-like consent for overseas patients.

SEO/SEM: Structured data (Hospital, Physician), native AMP for blog, local-listing sync (GMB, Practo).

Observability KPIs: bounce rate, appointment completion %, portal logins, TTI, server p95 latency.

Road-map next: PWA offline mode, iOS/Android wrapper, AI triage chat, real-time OPD token queue display.