# Personal Data and Cybersecurity

> **Unofficial English guide.** Condensed from the Vietnamese pages listed below; the Vietnamese version prevails. Vietnamese laws have no official English translation — renderings follow the [glossary](glossary.md). **Synced with Vietnamese version:** 28/09/2026.
> **Vietnamese source:** [docs/05-nghia-vu-lien-quan/dlcn-giao-thoa-anm.md](../docs/05-nghia-vu-lien-quan/dlcn-giao-thoa-anm.md) · [docs/05-nghia-vu-lien-quan/dich-vu-xu-ly-dlcn.md](../docs/05-nghia-vu-lien-quan/dich-vu-xu-ly-dlcn.md)

This page covers **only the overlap** between cybersecurity compliance and personal data protection under the Law on Personal Data Protection 2025 (*PDPL*, Law No. 91/2025/QH15), Decree 356/2025 guiding the PDPL and Resolution 22/2026 on simplifying administrative procedures of the Ministry of Public Security — i.e. the personal data duties a cybersecurity team meets when determining the security level, preparing the cybersecurity assurance plan and handling incidents. It is not a full personal data compliance program (data subject rights, consent and sector-specific rules in Art. 24–32 PDPL are out of scope). Section 5 covers the pivotal question of whether an organization is running a licensed **personal data processing service**.

Fines below are organization amounts; in the personal data field the amount written in Decree 330 is the organization amount and individuals pay half (Art. 7.1 Decree 330). Full table: [05-penalties.md](05-penalties.md) §3.

## 1. Why the two fields are linked

| Link | Content | Legal basis |
|---|---|---|
| Security level depends on the number of data subjects | Online services processing private or personal information of **< 100,000** basic-data subjects or **< 10,000** sensitive-data subjects → Level 2; **from 100,000 / from 10,000** upwards → Level 3 | Art. 12.2(b), 13.2(c) Decree 331 |
| Cybersecurity risk assessment must identify information types | Public information, private information, **personal information**, state secrets | Art. 9.1, 10.3(b) Decree 331 |
| Service providers must protect data when processing personal data | Technical cybersecurity measures for personal data processing under Law 116 and data/personal data laws | Art. 41.4 Law 116; Art. 15.3 Decree 333 |
| Data security | Control of staff processing data; periodic risk assessment; review of cross-border transfers | Art. 26.2(d)–(e) Law 116 |
| Same penalties decree, same authority | Decree 330 sanctions both fields; the Ministry of Public Security (MPS) is the lead agency for both | Art. 1.1 Decree 330; Art. 39.2 Law 116; Art. 36.2 PDPL |
| Cybersecurity training includes personal data | The foundation training module covers personal data protection rules | Art. 24.3(a) Decree 333 |

Note: "personal information" (Decree 331, Decree 333) is not the same term as "personal data" (PDPL) — see the [glossary](glossary.md).

## 2. Personal data categories — quick look-up for counting data subjects

| Category | Often overlooked examples in information systems | Legal basis |
|---|---|---|
| Basic personal data | Name, date of birth, phone number, ID number, personal images, **digital account information** | Art. 3.1–3.11 Decree 356 |
| Sensitive personal data | **Location via location services**; **username/password of electronic identification accounts; images of ID cards** (eKYC); **bank account username/password, card information, transaction history**; **tracking data on use of telecom services, social networks, online media and other cyberspace services**; health; biometrics | Art. 4.1(d), (đ), (h), (i), (k), (l) Decree 356 |

> **Consequence for the security level:** an online service with eKYC (storing ID card images) or per-user behavior tracking (user-level analytics) usually already processes **sensitive personal data** → the 10,000-subject threshold (Art. 13.2(c) Decree 331) is reached very early. Processing sensitive personal data also requires access control, procedures and security measures (Art. 4.2 Decree 356). Level criteria: [02-security-levels.md](02-security-levels.md).

## 3. Main personal data obligations (overlap)

| # | Obligation | Who | Deadline | Legal basis | Procedure (after Resolution 22) | Fine (organization) |
|---|---|---|---|---|---|---|
| 1 | **Personal data processing impact assessment dossier (≈ DPIA):** prepared and kept from the start of processing; report on **Form 10** plus copies of processing contracts, policies, procedures and forms. The report covers the parties, personal data protection contact, purposes, data types, **data flow diagram**, consent mechanism, retention–deletion–destruction policy, **security plan, system design diagram, standards applied**, compliance assessment and risk assessment | Controller, controller-processor (file); processor prepares and keeps per agreement with the controller. Competent state agencies exempt | File **01 original within 60 days** of first processing; always ready for inspection; authority returns pass/fail within **15 days**; complete within **30 days** if failed. Prepared **once** for the whole period of operation, then updated | Art. 21 PDPL; Art. 19 Decree 356 | Filed via the **National Public Service Portal**, in person or by post **to the MPS** (with Form 02a/02b); the MPS classifies and **forwards to provincial Police** by area, scale, sector (Resolution 22 Appendix I.7 section B.II) | VND 20–30 million (Art. 55.1 Decree 330); **forced stop of processing** if not prepared (Art. 55.3(b)); false declarations VND 50–100 million (Art. 55.2) |
| 2 | **Update** the DPIA and the cross-border transfer dossiers | As above | **Every 06 months** from the first filing when a new purpose arises or parties change; **within 10 days** on reorganization, dissolution, bankruptcy, change of personal data protection service provider, or change of business lines related to processing | Art. 22 PDPL; Art. 20 Decree 356 | Form 03a/03b; portal, in person or post to the MPS; forwarded to provincial Police (Resolution 22 Appendix I.7 section B.III) | VND 20–30 million (Art. 55.1(d)–(đ)) |
| 3 | **Cross-border transfer of personal data** — 3 cases: (a) transferring data stored in Vietnam to systems **abroad or to a foreign provider's cloud**; (b) transferring to organizations/individuals abroad; (c) using a platform outside Vietnam to process personal data collected in Vietnam. Prepare the **cross-border transfer impact assessment dossier (≈ TIA)**: Form 09 + transfer contract + policies, procedures | Transferring party | File **01 original within 60 days** of the transfer; result 15 days; completion 30 days; prepared once, updated per row 2 | Art. 20.1–20.3 PDPL; Art. 17.1, 18 Decree 356 | Portal, in person or post to the MPS (with Form 01a/01b); forwarded to provincial Police (Resolution 22 Appendix I.7 section B.I) | VND 30–50 million (Art. 56.1); VND 50–100 million (Art. 56.2); **1–5% of revenue in Vietnam** if it leads to a leak (Art. 56.3) |
| 3a | **Exemptions** from the cross-border impact assessment | Competent state agencies; **storing the organization's own employees' personal data on cloud**; data subjects transferring themselves; press; data made public by law; emergencies; **cross-border HR management under labor rules and collective agreements**; contract signing, transport, payment, hotels, visas, scholarships | — | Art. 20.6 PDPL; Art. 17.3 Decree 356 | Record the exemption basis in the file | — |
| 4 | **Designate a qualified personal data protection function/staff** (≈ DPO, but not identical) or hire a personal data protection service provider. Staff: **college degree or higher**; **≥ 02 years' experience** (since graduation) in legal, IT, cybersecurity, data security, risk management, compliance, HR or personnel organization; **trained** in personal data protection. Formal appointment document stating functions, duties and powers; **confidentiality agreement**; training | Agencies and organizations | Before processing (recommended) | Art. 33.2 PDPL; Art. 13, 14 Decree 356 | No filing | Warning or VND 10–20 million (Art. 57.1); VND 20–30 million (Art. 57.2) |
| 5 | **Personal data breach (72-hour notification):** a violation that may harm defense and security, social order and safety, or the life, health, honor, dignity or property of data subjects → notify the specialized personal data protection agency (MPS); a processor that detects it notifies the controller promptly; **minutes confirming** the violation; content per **Form 08 Decree 356** (nature, time, data types and volume, contact, consequences, measures) | Controller, controller-processor, third party; processor | **≤ 72 hours** from detection | Art. 23 PDPL; Art. 28 Decree 356 | To the specialized agency or via the National Personal Data Protection Portal (Art. 28.2 Decree 356) | VND 10–80 million depending on the violation (Art. 54 Decree 330); later than 72 hours: VND 40–60 million (Art. 54.3) |
| 5a | Incidents involving **location or biometric data**: additionally **notify affected data subjects within 72 hours** (at least 6 content items); if not all can be reached → public notice on official electronic channels; **keep breach records at least 05 years** from completion of remediation | Controller, controller-processor | 72 hours; keep 05 years | Art. 29 Decree 356 | — | As row 5 |
| 6 | **Personal data processing service** (licensed business) — see section 5 | Service providers | See section 5 | Art. 21–27 Decree 356 | See section 5 | VND 50–80 million without a certificate (Art. 59.3(a)); VND 80–100 million after withdrawal (Art. 59.4) |

### 3.1. Small-business exemptions and exceptions

| Who | Exempt from | Duration | **Not exempt** if | Legal basis |
|---|---|---|---|---|
| **Small enterprises, start-ups** | **May choose** whether to do: DPIA (Art. 21 PDPL), dossier updates (Art. 22), designating a personal data protection function/staff (Art. 33.2) | **05 years** from 01/01/2026 | Running a personal data processing service; **directly processing sensitive personal data**; or processing personal data **once the scale reaches ≥ 100,000 data subjects** (cumulative) | Art. 38.2 PDPL; Art. 41.1 Decree 356 |
| **Household businesses, micro-enterprises** | **Not required** to comply with Art. 21, 22, 33.2 (no time limit) | No time limit stated | As above | Art. 38.3 PDPL; Art. 41.2 Decree 356 |

> **Not covered by the exemption:** the **cross-border transfer dossier** (Art. 20 PDPL) and the **72-hour breach notification** (Art. 23 PDPL). A small enterprise using a foreign cloud/SaaS to process customer data must still prepare a cross-border transfer dossier unless an exemption in row 3a applies. The criteria for "small, micro, start-up": **[TO VERIFY]** against the law on SME support (not in the source set).

> **The most important exception is "personal data processing service".** A micro-enterprise providing one of the 9 services in Art. 21 Decree 356 loses all exemptions and must also obtain a certificate of eligibility (section 5).

### 3.2. Procedures under Resolution 22

- Resolution 22 is effective **from 29/4/2026 until the end of 01/3/2027**; during this period, where its procedures differ from other texts, the Resolution applies (Art. 6.1–6.2 Resolution 22). The MPS must submit/issue replacement texts effective before 01/3/2027 (Art. 4.1(b)–(c)).
- Main change from Decree 356: dossiers are **received by the MPS via the National Public Service Portal**, then **delegated to provincial Police**; the 60/15/30-day time limits are unchanged (Resolution 22 Appendix I.7 sections B.I–B.III).
- **[TO VERIFY]:** (1) Appendix I.7 section B.II (DPIA procedure) says "complete the **cross-border transfer** impact assessment dossier" — apparently copied from section B.I; (2) Art. 55.1(b) Decree 330 still names the "Department of Cybersecurity and High-Tech Crime Prevention (A05)" as the recipient; (3) after 01/3/2027, check the replacement text.

## 4. Combining cybersecurity and personal data work — one set of evidence

| Cybersecurity activity | Corresponding personal data duty | Do once, use twice |
|---|---|---|
| Information system inventory, information classification (Art. 9.1, 10.3(a)–(b) Decree 331) | Data flow diagram and personal data types in the DPIA (Art. 19.3(c) Decree 356) | One data inventory with columns "personal data type (basic/sensitive)", "number of data subjects", "storage location (Vietnam/abroad)" — used for the security level determination, the DPIA and Art. 19 Decree 333 |
| Cybersecurity risk assessment (Art. 10 Decree 331) | Impact and risk assessment in the DPIA (Art. 19.3(g) Decree 356) | Shared method and risk register; the DPIA extracts personal-data risks |
| Cybersecurity assurance plan (Art. 29 Decree 331) | "Personal data security plan, system design diagram, standards applied" (Art. 19.3(đ) Decree 356) | Refer to the approved security plan and the TCVN 14423:2026 level applied |
| Vendor management, cloud contracts (Art. 5.3(a), 30.8–30.9 Decree 331) | Processing contracts; cross-border transfer contracts; cloud contract duties (Art. 12 Decree 356; Art. 69.1(b) Decree 330) | One common contract annex: cybersecurity + personal data processing + data location + deletion/return at termination |
| Incident response: 24h/72h (Art. 31.2(d) Decree 331) | 72-hour breach notification (Art. 23.1 PDPL); notice to data subjects within 72 hours (Art. 29 Decree 356) | One incident procedure with a branch "personal data involved?" → notify the specialized personal data protection agency |
| Cybersecurity monitoring, user-behavior logs (Art. 7, 16.6 Decree 333) | Collecting employees' personal data by technology requires informing them (Art. 61.2(c) Decree 330); behavior-tracking data is sensitive personal data (Art. 4.1(l) Decree 356) | State monitoring (EDR, DLP, cameras, logs) in the cybersecurity regulation (internal) and labor rules; employees sign acknowledgment |
| Encryption and access control (TCVN 14423:2026 account and information-asset groups) | Encryption of personal data at rest and in transit on cloud (Art. 69.2(b) Decree 330); sensitive data transfers must be encrypted (Art. 52.3 Decree 330) | One encryption policy for both |
| Log retention, data localization (Art. 16.6, 19 Decree 333) | Not retaining personal data longer than necessary (Art. 39.1(c) Decree 330); retention/deletion policy (Art. 19.3(d) Decree 356) | One retention policy: **minimum** per Decree 333 (12 months logs; 24 months Art. 19 data), **maximum** per processing purpose |
| Staffing: designated cybersecurity unit (Art. 31.1 Decree 331) | Personal data protection staff (Art. 33.2 PDPL) | May be the same unit, but must meet Art. 13 Decree 356 and be stated in the appointment document |
| MPS cybersecurity inspection (Art. 26 Decree 331) | Personal data inspection: **15 days'** prior notice; ad hoc without notice; covers compliance status, DPIA, cross-border transfer, processing services (Art. 31.3–31.5 Decree 356) | One inspection-ready evidence file — see [07-governance-inspection-reporting.md](07-governance-inspection-reporting.md) |

Data localization and foreign-cloud questions are analyzed in [04-enterprise-obligations.md](04-enterprise-obligations.md) §3.

## 5. Personal data processing service (licensed business)

### 5.1. Why this is the pivotal question

A "yes" triggers three consequences at once:

| # | Consequence | Legal basis |
|---|---|---|
| 1 | **Loss of the exemptions** for small, start-up, micro-enterprises and household businesses: DPIA (Art. 21), updates (Art. 22) and designating a personal data protection function or hiring a service (Art. 33.2) — regardless of size | Art. 38.2, 38.3 PDPL; Art. 41 Decree 356 |
| 2 | A **certificate of eligibility to provide personal data processing services**, issued by the MPS, before providing the service | Art. 22, 24, 25 Decree 356 |
| 3 | **Possibly** treated as a **conditional business line**, which would put the supporting information system at **Level 3** instead of Level 2. Art. 13.2(a) Decree 331 refers to the *list* of conditional business lines; needing a license does **not automatically** mean the activity is on that list — check the list under the investment law in force | Art. 13.2(a) Decree 331 — **[TO VERIFY]** (5.6 item 7) |

The first two lock together: a certificate requires the DPIA (and cross-border dossier, if any) to have **passed** (Art. 22.4 Decree 356). One cannot apply for a certificate while relying on the DPIA exemption.

### 5.2. The nine services (Art. 21 Decree 356) — a closed list

| Clause | Service | Typical signs |
|---|---|---|
| 21.1 | Providing and **operating automated systems/software on behalf of the controller** to process personal data | Multi-tenant SaaS operated by the provider, customers are controllers of end users' data |
| 21.2 | **Scoring, rating, assessing the creditworthiness** of data subjects | Credit scoring, risk scoring, seller/tenant ratings |
| 21.3 | **Collecting and processing personal data online from websites, apps, software and social networks** | Lead forms, chatbots on customers' websites, social listening tools |
| 21.4 | Via **health care, health tracking, medical service** websites/apps | Appointment booking, health metrics tracking, electronic medical records |
| 21.5 | Via **education apps with monitoring**: attendance, recording, behavior scoring, emotion recognition | LMS with face attendance, classroom cameras, automatic attendance scoring |
| 21.6 | **Analysis and exploitation of personal data**: finding information, trends, patterns; extracting value, **predicting user behavior** or optimizing services | Per-user analytics, segmentation, personalized recommendations, churn prediction |
| 21.7 | **Encryption of personal data** in transit and at rest | Encryption, key management, tokenization services sold to others |
| 21.8 | Automated processing based on **big data, AI, blockchain, metaverse** | Any AI feature touching the personal data of customers' customers |
| 21.9 | **Platforms providing personal location data** | Maps, logistics, vehicle tracking, location-based timekeeping |

SaaS, cloud, chatbot and CRM platforms easily match **several clauses at once** (21.1, 21.3, 21.6, 21.8). Matching **one** is enough.

### 5.3. "Processing for oneself" vs "running a service"

The Decree does not define the business. The most reasonable distinction, based on the PDPL's structure:

| Situation | Role (Art. 2 PDPL) | Personal data processing service? |
|---|---|---|
| Processing personal data of **its own** staff and customers, for its own purposes | Controller (Art. 2.7) | **No** — even with automated software or AI |
| Processing personal data **on behalf of another organization**, under contract and instructions, for a fee | Processor (Art. 2.8) and providing one of the 9 services | **Yes** — likely |
| Both processing for itself and serving other organizations | Controller-processor (Art. 2.9) for its own part; processor for the service part | **Yes**, for the service part |
| Pure infrastructure (IaaS, hosting, connectivity) without touching data content | Unclear | **[TO VERIFY]** — Art. 21.1 says "operating automated systems/software to process **on behalf of** the controller", implying processing, not mere storage |

This table is **inference from the text structure**; there is no official guidance or case law yet (Decree 356 took effect 01/01/2026). Organizations in the grey area should **seek a written opinion from the specialized personal data protection agency** before concluding, and keep the reply as evidence of good faith.

### 5.4. Conditions and ongoing duties

**Conditions (Art. 22 Decree 356):** (1) organization/enterprise established and operating under Vietnamese law (22.1); (2) the head in charge of personal data processing is a **Vietnamese citizen residing permanently in Vietnam** (22.2(a)); (3) management meets professional requirements (22.2(b)); (4) **at least 03 staff** qualified per Art. 13.2 — college degree or higher, **≥ 02 years' experience** since graduation in the listed fields, trained in personal data protection (22.2(c)); (5) suitable infrastructure, equipment and technology (22.3); (6) **DPIA passed**, and **cross-border transfer dossier passed** if transferring (22.4).

**Ongoing duties after certification (Art. 23 Decree 356):** comply with controller-processor/processor duties; build a **personal data protection risk management framework**; **assess compliance status and trustworthiness once a year**; apply data security, personal data and cybersecurity standards; set responsibilities and powers; process only for the stated purpose with limited collection, transfer and storage; as a processor, **require the controller to obtain data subjects' consent before providing the service**, making sure data subjects know the data types, purpose and the name of the service provider; **authenticate organizational identity** under electronic identification law. The consent-and-name duty (Art. 23.7) should go straight into the **data processing agreement (DPA)** with each customer.

### 5.5. Procedure and fines

| Step | Dossier | Time limit | Legal basis |
|---|---|---|---|
| **New certificate** | Application (Form 04 Decree 356) · **document appointing the personal data protection function or contract for personal data protection services** · project proposal (10 items in Art. 25.2) · evidence of staff qualifications. Business registration copy not required if retrievable from databases | Dossier review **10 days**; supplement **15 days**; appraisal and issuance **30 days** from a complete dossier (Form 05) | Art. 25 Decree 356; Resolution 22 Appendix I.7 Part A section IV |
| **Re-issuance** (lost, damaged) | Application | **05 working days** | Art. 26.1 |
| **Replacement** (wrong or changed information) | Application (Form 06) + supporting documents | **05 working days**. Resolution 22 **merges re-issuance and replacement into one procedure**, application only | Art. 26.2; Resolution 22 Appendix I.7 Part A section III |
| **Withdrawal** | — | Conditions no longer met · **no service for 12 months or more** · dissolution, bankruptcy · not remedying violations · own request. Return the certificate within **05 working days**; published on the national personal data protection portal | Art. 27 |

The project proposal (Art. 25.2) overlaps with existing cybersecurity documents (risk management framework, periodic assessment plan, standards, electronic identification, staffing) — write once, use for both dossiers.

| Violation (Art. 59 Decree 330) | Fine (organization) |
|---|---|
| Certified, but no risk management framework, no responsibility rules, standards not applied, no organizational identity authentication | VND 20–30 million (Art. 59.1) |
| Not requiring the controller to obtain consent before providing the service · processing beyond purpose, not limiting collection, transfer, storage · **no annual compliance and trustworthiness assessment** | VND 30–50 million (Art. 59.2) |
| **Operating without a certificate** · unqualified personal data protection staff · **fewer than 03 qualified staff** | VND 50–80 million (Art. 59.3) |
| Continuing after the certificate **was withdrawn** | VND 80–100 million (Art. 59.4) |

Remedial measures: forced adoption of the risk framework, rules, standards, authentication (Art. 59.5(a)); **forced irreversible deletion of all unlawfully collected/processed personal data** (Art. 59.5(b)); **surrender of gains** from Art. 59.3 violations (Art. 59.5(c)). Separate fines apply for the DPIA (Art. 55), cross-border transfer (Art. 56, up to **1–5% of revenue** on a leak) and staffing (Art. 57).

### 5.6. Points to verify

| # | Issue | Legal basis |
|---|---|---|
| 1 | **Staffing conditions differ:** Art. 13.2(b) Decree 356 requires **≥ 02 years'** experience, but Art. 59.3(b) Decree 330 fines staff "without at least **03 years'** experience … or not given **in-depth** training"; the fields of experience also differ. Safe standard for service providers: the higher bar (03 years, in-depth training) | Art. 13.2 Decree 356; Art. 59.3(b) Decree 330 |
| 2 | **Wrong cross-reference in withdrawal grounds:** Art. 27.1(a) says "not meeting a condition in clauses 1, 2 **Article 26**" — but Art. 26 is re-issuance/replacement; conditions are in **Article 22** | Art. 27.1(a) Decree 356 |
| 3 | **New-certificate dossier:** Resolution 22 Appendix I.7 Part A section IV reduces it to **04 components**, while Art. 25.1 still lists the business registration copy and staff degrees. Resolution 22 applies until the end of 01/3/2027 | Art. 25.1 Decree 356; Art. 6, Appendix I.7 Resolution 22 |
| 4 | **Outsourced personal data protection and the 03-staff rule:** Resolution 22 accepts a service contract instead of an internal appointment, but Art. 22.2(c) (at least 03 qualified staff) **does not appear repealed**. Unclear whether the provider's staff count | Art. 22.2(c) Decree 356; Resolution 22 Appendix I.7 Part A section IV |
| 5 | **Must processors file the DPIA?** Art. 21.3 PDPL only requires processors to **prepare and keep** it "per agreement with the controller", while Art. 19.1, 19.4 Decree 356 require all three roles to **file the original within 60 days**, and Form 10 section II has a "processor" box; Art. 55.1(b) Decree 330 does not distinguish roles. Under Art. 58.3 Law 64/2025 the higher-ranking text prevails, but Art. 21.7 PDPL delegates procedures to the Government — debatable, **do not rely on it to skip filing**. Of little relevance to service providers, since Art. 22.4 requires a passed DPIA anyway | Art. 21.3, 21.5, 21.7 PDPL; Art. 19 Decree 356; Art. 55.1(b) Decree 330; Art. 58.3 Law 64/2025 |
| 6 | **Exempt from Art. 22 but not Art. 20:** Art. 38.2–38.3 PDPL exempt Art. 21, 22 and 33.2. Art. 22 includes **updating** the cross-border dossier, but Art. 20 (preparing it) is not exempted. Literally it must still be prepared; a broader reading (lawmakers meant to exempt Art. 20 too) exists | Art. 20, 22, 38 PDPL; Art. 41 Decree 356 |
| 7 | **Conditional business line?** Decree 356 creates a licensing regime, but the investment law list must be checked before arguing Level 3 under Art. 13.2(a) Decree 331. The list is not in `sources/` | Art. 13.2(a) Decree 331; Law on Investment (not in the source set) |
| 8 | **Self-declaration in forms:** both **Form 09** (cross-border, item I.8) and **Form 10** (DPIA, item I.9) require declaring "Personal data processing service business: Yes/No" with the 9-service checklist. Neither dossier can be filed before answering section 5.3. Grey-area organizations should get the specialized agency's or counsel's opinion first | Forms 09, 10 Appendix Decree 356 |

## 6. Checklist

- [ ] Data inventory counts basic and sensitive personal data subjects per information system (Art. 12.2(b), 13.2(c) Decree 331; Art. 3–4 Decree 356).
- [ ] Role per system identified: controller / processor / controller-processor (Art. 2.7–2.9 PDPL).
- [ ] Small/micro-enterprise exemption checked and basis recorded (Art. 38 PDPL; Art. 41 Decree 356).
- [ ] Qualified personal data protection staff/function appointed in writing (Art. 13 Decree 356) or a service contract signed.
- [ ] DPIA filed within 60 days; 06-month update schedule and 10-day update trigger in place (Art. 21–22 PDPL; Art. 19–20 Decree 356).
- [ ] All data flows abroad (cloud, SaaS, parent company) listed → cross-border transfer dossier or exemption basis (Art. 20 PDPL; Art. 17–18 Decree 356).
- [ ] Incident procedure includes a personal data assessment step and the 72-hour deadline (Art. 23 PDPL; Art. 28–29 Decree 356).
- [ ] Employee monitoring (EDR, DLP, cameras, logs) notified to employees (Art. 61.2(c) Decree 330).
- [ ] Cloud contracts define roles, responsibilities, security; personal data encrypted at rest and in transit (Art. 69 Decree 330).
- [ ] For each of the 9 services in Art. 21 Decree 356: matched or not, which product feature, role under the contract; if matched → certificate obtained (Art. 22–25 Decree 356), 03 qualified staff, annual trustworthiness assessment (Art. 23.3), consent-and-name clause in customer DPAs (Art. 23.7), and the level determination of the supporting system considers the conditional-business-line argument.

**Internal submission (not translated):** a Vietnamese internal submission (*tờ trình*) asks the head of the organization (as controller) to approve the personal data compliance program — DPIA, cross-border transfer dossiers, appointment of personal data protection staff and the processing-service review. It is submitted by the legal department or the personal data protection function, with the designated cybersecurity unit co-submitting the technical part (encryption, incidents), and should be submitted early given the 60-day filing deadline. Vietnamese file: [to-trinh-tuan-thu-bao-ve-du-lieu-ca-nhan.md](../docs/07-to-trinh-lanh-dao/to-trinh-tuan-thu-bao-ve-du-lieu-ca-nhan.md) · [Word template](../templates/07-to-trinh-lanh-dao/to-trinh-tuan-thu-bao-ve-du-lieu-ca-nhan.docx). Decree 356 forms (01a/01b, 02a/02b, 03a/03b, 04–06, 08–10) are not translated.
