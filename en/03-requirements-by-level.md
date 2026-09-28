# Requirements by Security Level

> **Unofficial English guide.** Condensed from the Vietnamese pages listed below; the Vietnamese version prevails. Vietnamese laws have no official English translation — renderings follow the [glossary](glossary.md). **Synced with Vietnamese version:** 28/09/2026.
> **Vietnamese source:** [docs/03-yeu-cau-theo-cap-do/README.md](../docs/03-yeu-cau-theo-cap-do/README.md) · [docs/03-yeu-cau-theo-cap-do/ma-tran-yeu-cau-theo-cap-do.md](../docs/03-yeu-cau-theo-cap-do/ma-tran-yeu-cau-theo-cap-do.md) · [docs/03-yeu-cau-theo-cap-do/anh-xa-nd331-d30-tcvn.md](../docs/03-yeu-cau-theo-cap-do/anh-xa-nd331-d30-tcvn.md)

**Legal basis:** Decree 331 Art. 10, 22.6, 27–31, 33, 35–36, 39.2; Decree 333 Art. 16.6, 20.3; TCVN 14423:2026 clauses 1, 3–7 and Appendix A. Vietnamese texts checked against originals on 24/09/2026.

> **Copyright notice — TCVN 14423:2026.** The national standard is copyrighted. This page and the Vietnamese pages it summarizes only **paraphrase** requirements in the toolkit's own words and cite clause numbers; no wording or tables of the standard are reproduced. Before signing a dossier, buy the official text (sold by VSQI) and check against it. Decree texts are legal normative documents and are not subject to copyright.

This page answers: *"What must a Level N information system do, to what extent, and what evidence must be kept?"* Determine the security level (*cấp độ*) first — see [02-security-levels.md](02-security-levels.md).

## 1. How to use this section

1. **Determine the security level first.** If the risk assessment shows risk above the determined level, a higher level must be proposed (Art. 10.5 Decree 331).
2. **Pick the checklist for the proposed level.** Each per-level checklist is complete on its own; do not merge it with lower levels (see section 3).
3. **Self-assess** each line (Met / Partly / Not met / N/A) and collect evidence. The internal self-assessment must be performed by a team independent of the operating unit (*đơn vị vận hành*) (Art. 31.2(c) Decree 331).
4. **Turn the results into the cybersecurity assurance plan** (*phương án bảo đảm an ninh mạng*) inside the security level proposal dossier, structured in the 7 parts of Art. 29.2 Decree 331 — use the mapping in section 6.
5. **Issue the cybersecurity regulation (internal)** (*quy chế bảo đảm an ninh mạng*, ≈ information security policy) meeting the management requirements of the level **before** the dossier is approved (Art. 30.7 Decree 331). Templates: [07-governance-inspection-reporting.md](07-governance-inspection-reporting.md).
6. **New or upgraded systems:** implement the full approved security plan before operation (Art. 30.6) and perform the cybersecurity readiness assessment before operation (Art. 28.3 Decree 331).
7. **Reuse the checklist every year:** the annual report must state whether the measures in the security plan are fully, partly or not implemented (Art. 36.5, 36.9–36.10 Decree 331).

### Files

| File | Use |
|---|---|
| [Matrix, Excel](../templates/03-yeu-cau-theo-cap-do/ma-tran-yeu-cau-theo-cap-do.xlsx) | 18 groups × 5 levels and quantitative thresholds (Vietnamese) |
| [Self-assessment checklist Levels 1–5, Excel](../templates/03-yeu-cau-theo-cap-do/checklist-tu-danh-gia-cap-1-5.xlsx) | One workbook for scoring and evidence tracking (Vietnamese) |
| Checklist [Level 1](../docs/03-yeu-cau-theo-cap-do/checklist-cap-1.md) · [Level 2](../docs/03-yeu-cau-theo-cap-do/checklist-cap-2.md) | TCVN clause 3 / clause 4, 15 groups each. Organizations with only Level 1–2 systems can use the combined checklist in [08-level-1-2-toolkit.md](08-level-1-2-toolkit.md) |
| Checklist [Level 3](../docs/03-yeu-cau-theo-cap-do/checklist-cap-3.md) · [Level 4](../docs/03-yeu-cau-theo-cap-do/checklist-cap-4.md) · [Level 5](../docs/03-yeu-cau-theo-cap-do/checklist-cap-5.md) | TCVN clauses 5, 6, 7, 18 groups each. Level 5 also applies to information systems critical to national security (*HTTT quan trọng về an ninh quốc gia*) (TCVN clause 1) |
| [Physical security (Appendix A)](../docs/03-yeu-cau-theo-cap-do/an-ninh-vat-ly-phu-luc-a.md) | Server room physical security by level (Vietnamese) |

The per-level checklists are not translated: they are working tools for Vietnamese staff and consist of TCVN paraphrases.

**How the Excel checklist works.** The self-assessment workbook has an instructions sheet, one sheet per level (Level 1 … Level 5) and a summary sheet. Each level sheet lists every paraphrased TCVN requirement with its group and clause number; the assessor fills in the result (Met / Partly / Not met / N/A), the evidence to keep, notes, the person responsible and the remediation deadline. The summary sheet calculates, per level and group, the number of requirements, results and the "% Met". Rows marked "suggested" (*gợi ý*) are configurations the standard gives as examples or ties to the risk assessment — a different choice is allowed but must be justified in the security plan. The completed sheet feeds the security plan in the level dossier and serves as evidence for the annual report and inspections. The matrix workbook contains the tables of sections 4–6 of this page (in Vietnamese).

## 2. Decree 331 Art. 30 vs. the 18 TCVN groups

Decree 331 makes TCVN 14423:2026 ("Cybersecurity — Information systems — Basic requirements") the mandatory technical standard applied together with the decree (Art. 28.1, 28.4, 29.1, 30.1). The two instruments organize requirements differently:

| Decree 331 Art. 30 | TCVN 14423:2026 |
|---|---|
| **Management requirements — 7 groups** (Art. 30.3): policy; organization; human resources; design and build; operation; risk management plan; end of operation, disposal, destruction | No split between "management" and "technical". Each level is one clause (Level 1 = clause 3 … Level 5 = clause 7), divided into **15 groups** (Levels 1–2) or **18 groups** (Levels 3–5), each mixing process and technical requirements |
| **Technical requirements — 4 groups** (Art. 30.4): network, server, application, data security | 3 groups exist only from Level 3: security monitoring and defense; secure application development; cybersecurity testing (penetration testing) |
| **Physical security excluded** (Art. 30.2) | **Appendix A** covers server-room physical security for 5 levels |
| Security plan has **7 parts** (Art. 29.2) | No "plan" structure; TCVN clauses must be arranged into the 7 parts by the drafter |

**Group numbering shifts between levels.** Always cite the clause number of the correct level in a dossier:

| Group | L1 | L2 | L3 | L4 | L5 |
|---|---|---|---|---|---|
| Groups 1–12 (risk … network infrastructure) | 3.1–3.12 | 4.1–4.12 | 5.1–5.12 | 6.1–6.12 | 7.1–7.12 |
| Security monitoring and defense | — | — | 5.13 | 6.13 | 7.13 |
| Personnel | 3.13 | 4.13 | 5.14 | 6.14 | 7.14 |
| Suppliers | 3.14 | 4.14 | 5.15 | 6.15 | 7.15 |
| Incident response | 3.15 | 4.15 | **5.16** | **6.17** | **7.17** |
| Secure application development | — | — | **5.17** | **6.16** | **7.16** |
| Cybersecurity testing (pentest) | — | — | 5.18 | 6.18 | 7.18 |

**Terminology.** Under Art. 39.2 Decree 331, standards using "network information security" or "information system security" are read as "cybersecurity". Documents written under Decree 85/2016 and TCVN 11930:2017 can still serve as a basis but should be updated. TCVN 14423:2026 replaces TCVN 11930:2017 and TCVN 14423:2025; old TCVN 11930 checklists must be redone.

## 3. Does a higher level inherit the lower level?

**Do not assume full inheritance.** Each TCVN level is a stand-alone clause that rewrites all requirements. Some items present at a lower level are not repeated higher up, for example:

- Level 2 (4.6.2.1 b) omits "service accounts" from the account inventory, although Level 1 (3.6.2.1 b) includes them.
- Level 3 (5.12.2.5) does not require anti-malware on remote-access devices, although Levels 2 (4.12.2.5) and 4 (6.12.2.5) do.
- Level 4 (6.17.2.1) drops the contact point with state authorities / the national incident response network that Levels 2–3 have.

Each checklist therefore lists the full requirements of its level. Good practice: **keep** a lower-level item that a higher level omits (technically sound, and avoids questions during appraisal) and note it in the security plan.

## 4. Requirements matrix: 18 groups × 5 levels

Each cell shows only **what is new or stricter than the level below** (Level 1 shows the baseline). "—" = no separate group at that level. Paraphrased. Clause references per cell: see the Vietnamese page and the matrix workbook.

| Group | Level 1 | Level 2 | Level 3 | Level 4 | Level 5 |
|---|---|---|---|---|---|
| **Risk management** | 4-step process (identify, analyze, evaluate, treat); review yearly | As L1 | 6 activities incl. third-party risk, residual-risk plan, monitoring, communication; re-identify yearly | Re-identify and assess control effectiveness every 6 months; share results | Review the whole risk process every 6 months |
| **Hardware assets** | Inventory with minimum fields; yearly stocktake and rogue-device detection | Wipe data on transfer / repurposing | Rogue-device detection every 6 months; DHCP logging reviewed every 6 months | Security check before use; network discovery scan quarterly; disposal procedure, specialized wiping for servers | Cycles become **monthly**; stocktake every 6 months; back up before wipe and verify non-recoverability |
| **Software assets** | Inventory; approved software only; yearly unauthorized-software detection, exception list | Outsourced software: confidentiality contract, source code or certificate / pentest instead | Allowlist incl. runtimes; least-privilege installation; installation monitoring. Outsourcing moves to secure development (5.17) | End-of-life review yearly; unauthorized-software detection every 6 months | Inventory, allowlist, EOL every 6 months; detection monthly |
| **Information assets** | Rules, inventory, access matrix; yearly permission check; stored credentials encrypted | Sensitivity classification (3 suggested tiers); encrypt non-public data at rest | "State secret" tier; encryption at rest and in transit for important data; key lifecycle; integrity codes; data-flow diagram; environment separation by sensitivity; digital signatures; permissions reviewed every 6 months | **Two encryption layers** in transit for important data; strong algorithms; data-change monitoring; separate physical channel; **DLP**; data-access logs reviewed quarterly; signatures from licensed providers | Dedicated hardware for encryption / signing; permissions and data logs reviewed monthly |
| **Secure configuration** | Baseline / hardening, secure protocols, host firewall; session lock suggested 15/5/5 min; lockout after 10 failures | Disable insecure protocols / services; no auto-login; business software lock 15 min, 5 failures | Hardening before go-live | Remove unneeded features; trusted DNS; remote wipe and work-profile separation on mobiles | MDM solution |
| **Accounts and access** | **MFA for external, third-party, Internet and admin access from Level 1**; disable accounts unused for 45 days; review list yearly | Password change interval and validity | Central account management; mandatory admin MFA; no reuse of last 10 passwords; review every 6 months | **PAM**; token / secret management; access-provisioning process reviewed yearly; account review quarterly | Account review monthly; provisioning process every 6 months |
| **Vulnerabilities** | Vulnerability process; yearly scan; user devices patched monthly | Patch plan for all assets; test before patching systems with important data | Scan every 6 months; **central patch server** | Whole system every 6 months, **critical assets quarterly** | Whole system quarterly, critical assets monthly |
| **Security logs** | Log rules; 3 minimum log types; NTP; yearly review; **no retention period stated** | Minimum log fields; **retain ≥ 1 month** | Process logs; **SIEM**; central storage **≥ 3 months**; review every 6 months | Data-access logs; all assets; **≥ 6 months**; review **monthly**; collect supplier logs; immutable logs stored in a separate zone | **≥ 12 months** |
| **Browser and email** | Approved, supported, patched browsers; domain filtering | As L1 | Email protection solution | URL filtering; extension control; **DMARC**; attachment-type control | Anti-malware on mail servers |
| **Malware** | Real-time anti-malware on servers and workstations; autorun off | As L1 | Exploit protection; **EDR** feeding SIEM | Central management; behavior-based detection as minimum | As L4 |
| **Backup and recovery** | Backup rules, data list and frequency, protected copies, "periodic" restore test | Backup storage separated from production | **3-2-1 rule**; automated central backup; encrypted copies of important data | High availability / hot recovery; **restore test every 6 months** | Geographically separate backup; ≥ 2 links between primary and secondary backup; restore test **quarterly** |
| **Network infrastructure** | Network diagram; 3 architecture principles; redundant core devices; firewall with IPS; VPN for remote access; testing before go-live | **WAF**; at least 5 zones (server, DMZ, wireless, internal, perimeter); restricted remote-admin sources | **Hot standby + load balancing**; DBF; NAC; anti-DDoS; anti-malware firewall; 7 zones (adds database, management); egress control; independent supervision / acceptance | Design review before build; **micro-segmentation**; ≥ 2 international Internet routes; data diode for core / OT zones; **ZTNA, MFA** for remote access; jump host; isolated management network | **Zero Trust**; **standby site ≥ 30 km away**; AAA; QoS; diagram updated quarterly |
| **Monitoring and defense** (— / — / 5.13 / 6.13 / 7.13) | — | — | Monitor devices, servers, applications; **SIEM** correlation; network flows; tune thresholds every 6 months | **24/7 monitoring**; tune quarterly | Dedicated packet / application filtering and IPS devices; tune monthly |
| **Personnel** | Responsible staff, confidentiality undertaking; yearly awareness training; asset return on exit | Functionally independent teams; revoke all rights on exit | **Separate teams** for operation, administration, security | Yearly role-based professional training incl. law | Competency framework and assessment per role |
| **Suppliers** | Supplier list, classification, responsibilities; yearly update | As L1 | As L1 | Cybersecurity service suppliers must meet business conditions; supplier rules; security clauses; monitoring; review at contract end | As L4 |
| **Incident response** | Key person + backup; reporting contact; internal reporting and response procedure updated yearly | Minimum content of response plan; contact with the state cybersecurity authority and the national incident response network | "Periodic" exercises (no frequency) | Primary + backup channels; post-incident review; **exercise ≥ 1/year**; incident thresholds | Threshold review every 6 months |
| **Secure development** (— / — / 5.17 / 6.16 / 7.16) | — | — (outsourcing in 4.3.2.3) | Secure SDLC; external vulnerability-report channel; secure design; code and library checks before go-live | Root-cause analysis; **SBOM** updated quarterly; dev/test/prod separation; yearly secure-coding training; **pentest before production** | Remediation-time metrics; SBOM monthly |
| **Cybersecurity testing – pentest** (— / — / 5.18 / 6.18 / 7.18) | — | — | Pentest program (frequency chosen: quarterly / half-yearly / yearly / ad hoc); fix and retest (5.18) — **no minimum frequency** | **External and internal pentest, each ≥ 1/year** | **Each ≥ every 6 months** |

## 5. Quantitative thresholds by level

Key: *Y* = at least yearly; *6M* = at least every 6 months; *Q* = at least quarterly; *M* = at least monthly; "—" = no numeric threshold at that level. Many items also add "or upon change" (not repeated here). All figures checked by the Vietnamese page against TCVN 14423:2026 on 24/09/2026.

### 5.1 Review and test cycles

| Activity | L1 | L2 | L3 | L4 | L5 | TCVN clause (L1→L5) |
|---|---|---|---|---|---|---|
| Review risk management process | Y | Y | Y | Y | **6M** | 3.1 b · 4.1 b · 5.1.2.1 b · 6.1.2.1 b · 7.1.2.1 b |
| Re-identify risks | — | — | Y | 6M | 6M | 5.1.2.2 c · 6.1.2.2 c · 7.1.2.2 c |
| Assess control effectiveness | — | — | Y | 6M | 6M | 5.1.2.4 b · 6.1.2.4 b · 7.1.2.4 b |
| Hardware stocktake | Y | Y | Y | Y | 6M | x.2.1 c |
| Detect unauthorized devices | Y | Y | 6M | Q | M | x.2.2.2 a |
| Network discovery scan | — | — | — | Q | M | 6.2.2.3 a · 7.2.2.3 a |
| Review DHCP logs to update inventory | — | — | 6M | Q | M | x.2.2.4 b |
| Software inventory | Y | Y | Y | Y | 6M | x.3.1 b |
| Review software allowlist | — | — | Y | Y | 6M | x.3.2.2 d |
| Review end-of-life software | — | — | — | Y | 6M | 6.3.2.3 · 7.3.2.3 |
| Detect unauthorized software | Y | Y | Y | 6M | M | 3.3.2.2 a · 4.3.2.2 a · 5.3.2.3 a · 6.3.2.4 a · 7.3.2.4 a |
| Check data access permissions | Y | Y | 6M | Q | M | 3.4.2.1 c · 4/5/6/7.4.2.1 d |
| Review information-asset procedures and inventory | Y | Y | Y | Y | 6M | x.4.2.1 d/e · x.4.2.2 b |
| Review access logs for important data | — | — | — | Q | M | 6.4.2.9 b · 7.4.2.9 b |
| Review account list | Y | Y | 6M | Q | M | x.6.2.1 d |
| Review access provisioning / revocation process | — | — | — | Y | 6M | 6.6.2.5 b · 7.6.2.5 b |
| Vulnerability scan — whole system | Y | Y | 6M | 6M | Q | x.7.2.1 a–b |
| Vulnerability scan — critical assets | — | — | — | Q | M | 6.7.2.1 a · 7.7.2.1 a |
| Patch user computers and mobiles | M | M | M | M | M | x.7.2.2 |
| Review security logs | Y | Y | 6M | M | M | x.8.2.1 a |
| Tune alert thresholds (SIEM) | — | — | 6M | Q | M | 5.13.2.5 · 6.13.2.5 · 7.13.2.6 |
| Backup restore test | periodic* | periodic* | periodic* | 6M | Q | x.11.2.1 a · 6.11.2.5 · 7.11.2.5 |
| Update network diagram | Y | Y | Y | 6M | Q | 3.12.2.1 d · 4/5.12.2.1 e · 6/7.12.2.1 g |
| Security awareness training | Y | Y | Y | Y | Y | 3/4.13.2.2 b · 5.14.2.2 d · 6/7.14.2.2 e |
| Role-based professional training | — | — | — | Y | Y | x.14.2.3 b |
| Update supplier list | Y | Y | Y | Y | Y | 3/4.14.2 · 5.15.2 · 6/7.15.2.1 |
| Update incident reporting / response procedures | Y | Y | Y | Y | Y | x.15/16/17.2.2 c, .2.3 b |
| Incident response exercise | — | — | periodic* | Y | Y | 5.16.1 · 6.17.2.6 · 7.17.2.6 |
| Review incident thresholds | — | — | — | Y | 6M | 6.17.2.7 b · 7.17.2.7 b |
| Update third-party component list (SBOM) | — | — | — | Q | M | 6.16.2.4 c · 7.16.2.4 c |
| Secure-coding training | — | — | — | Y | Y | 6.16.2.6 b · 7.16.2.6 b |
| External penetration test | — | — | per program* | Y | 6M | 5.18.2.1 b · 6.18.2.2 a · 7.18.2.2 a |
| Internal penetration test | — | — | per program* | Y | 6M | 5.18.2.1 b · 6.18.2.5 a · 7.18.2.5 a |

\* TCVN only says "periodic" or lets the organization choose (Level 3 pentest: quarterly, half-yearly, yearly or ad hoc). The organization must set the frequency in its internal regulation / security plan. The toolkit recommends at least yearly for Level 3.

### 5.2 Retention periods, time limits and minimums

| Item | L1 | L2 | L3 | L4 | L5 | TCVN clause |
|---|---|---|---|---|---|---|
| Minimum log retention | not stated | 1 month | 3 months | 6 months | 12 months | 4.8.2.1 a · 5.8.2.1 a · 6.8.2.1 a · 7.8.2.1 a |
| Server-room CCTV retention | — | not stated | 3 months | 6 months | 12 months | Appendix A.3.2 b · A.4.2 b · A.5.2 b |
| Disable inactive accounts | 45 days | 45 days | 45 days | 45 days | 45 days | x.6.2.3 |
| Admin password change | 2 months | 2 months | 2 months + no reuse of last 10 | as L3 | as L3 | x.6.2.2 b |
| Password length (suggested) | ≥ 8 characters with MFA; ≥ 14 characters with 4 character types without MFA — all levels | | | | | x.6.2.2 b |
| Session auto-lock (suggested) | user devices 15 min; admin sessions 5 min; mobile 5 min | + business software handling important data 15 min | as L2 | as L2 | as L2 | x.5.2.2 a |
| Lockout after failed logins (suggested) | laptops, phones 10 attempts; lock 12 hours–30 days | + business software handling important data 5 attempts | as L2 | as L2 | as L2 | x.5.2.2 a |
| Encryption layers for important data in transit | — | — | 1 (or equivalent) | ≥ 2 | ≥ 2 | 5.4.2.4 b · 6.4.2.4 c · 7.4.2.4 d |
| International Internet routes (systems that must connect) | — | — | — | ≥ 2, from domestic carriers on different infrastructure | ≥ 2 | 6.12.2.2 a · 7.12.2.2 a |
| Distance to standby site | — | — | — | — | ≥ 30 km | 7.12.2.2 a |
| Links between primary and secondary backup | — | — | — | — | ≥ 2 | 7.11.2.4 c |
| Authentication factors for server-room entry | — | — | — | — | ≥ 2 | Appendix A.5.2 a, A.5.3 d |
| 24/7 security monitoring | — | — | — | yes | yes | 6.13.2.1 c · 7.13.2.1 c |

### 5.3 Level at which each technology first becomes required

| Solution | From level | First TCVN clause |
|---|---|---|
| MFA for external, third-party, Internet and admin access | 1 | 3.6.2.4 |
| VPN (or equivalent) for remote access | 1 | 3.12.2.5 |
| Firewall with IPS; DNS filtering | 1 | 3.12.2.2; 3.9.2.2 |
| WAF (if web applications exist) | 2 | 4.12.2.2 a |
| Minimum network zoning (with DMZ) | 2 | 4.12.2.2 b |
| SIEM, EDR, central patch server, 3-2-1 backup, hot standby, DBF, NAC, anti-DDoS | 3 | 5.8.2.1; 5.10.2.4; 5.7.2.2; 5.11.2.3; 5.12.2.2 |
| Digital signatures for exchanging important data | 3 | 5.4.2.8 |
| Data loss prevention plan (DLP) | 3 | 5.12.2.2 a (Levels 4–5: dedicated DLP solution, 6.4.2.8, 7.4.2.8) |
| PAM, DLP solution, DMARC, ZTNA, micro-segmentation, data diode, SBOM, 24/7 monitoring | 4 | 6.6.2.3; 6.4.2.8; 6.9.2.5; 6.12.2.5; 6.12.2.1 b; 6.12.2.2 a; 6.16.2.4; 6.13.2.1 c |
| Zero Trust, AAA, QoS, HSM / dedicated signing hardware, MDM, geographic redundancy ≥ 30 km | 5 | 7.12.2.1 b; 7.12.2.3; 7.12.2.5 f; 7.4.2.4 f; 7.5.2.6 b; 7.12.2.2 a |

### 5.4 Where TCVN is lower than other legal obligations

Where a TCVN figure differs from a law or decree, **apply the stricter one** if the organization is within that instrument's scope. Legal obligations always prevail.

| Topic | TCVN 14423:2026 | Legal instrument | Toolkit recommendation |
|---|---|---|---|
| Log retention | L1 not stated; L2 1 month; L3 3 months; L4 6 months; L5 12 months | Enterprises providing services on telecommunications networks, the Internet and value-added services in cyberspace: system logs retrievable **≥ 12 months** (Art. 16.1, 16.6(c) Decree 333); logs for investigations under Art. 25.2(b) Law 116 kept **≥ 12 months** (Art. 20.3 Decree 333) | Online service providers: ≥ 12 months at every level. Others: consider 12 months for access / login logs. See [04-enterprise-obligations.md](04-enterprise-obligations.md) |
| External incident reporting | Internal reporting procedure and contact point only | Initial notice of a serious incident within 24 hours; report on cause, scope, remediation within 72 hours; immediate report if national security is at stake (Art. 31.2(d) Decree 331) | Put the 24h / 72h deadlines into the response procedure at every level |
| Exercises | L1–2 none; L3 "periodic"; L4–5 ≥ 1/year | System owner directs internal exercises and joins national / international exercises organized by the MPS (Art. 31.3 Decree 331) | At least one exercise per year at every level |
| Physical security | Appendix A, 5 levels | Not part of basic requirements by level (Art. 30.2 Decree 331) | See [Appendix A summary](../docs/03-yeu-cau-theo-cap-do/an-ninh-vat-ly-phu-luc-a.md) |
| Independent assessment | From L3: independent unit supervises testing and acceptance (5.12.2.3 d) | Internal self-assessment by a team independent of the operating unit; Level 5, systems critical to national security and some other cases require a licensed / designated professional organization (Art. 31.2(c) Decree 331) | Set up an independent assessment team at every level |

Cases requiring assessment by a professional organization (Art. 31.2(c) Decree 331): Level 5 or information system critical to national security; serious incident or high risk to national security, social order and safety; major change in function, scope, architecture or technology; signs that the self-assessment was not truthful or complete; when a competent authority requires it or the system owner decides to.

## 6. Mapping Decree 331 (Art. 29, 30) to TCVN groups

Use this when drafting the **security plan statement** (Art. 22.2(c), 22.6 Decree 331) and the **internal cybersecurity regulation** (Art. 30.7): both follow the decree's structure, while the detailed requirements sit in the TCVN groups. Full clause-level mapping: [anh-xa-nd331-d30-tcvn.md](../docs/03-yeu-cau-theo-cap-do/anh-xa-nd331-d30-tcvn.md).

### 6.1 Management requirements — Art. 30.3 Decree 331

The decree requires rules to be **issued and implemented** for each group; in practice they are consolidated in the internal cybersecurity regulation (Art. 30.7).

| Decree 331 | Topic | Main TCVN groups | Not covered by TCVN — add yourself |
|---|---|---|---|
| Art. 30.3(a) | Policy | No separate group; every group requires rules and periodic review | Overall policy (objectives, scope, roles, principles); regulation issued before approval (Art. 30.7) |
| Art. 30.3(b) | Organization | Personnel (independent teams); incident response (key person + backup); suppliers | Roles of system owner, designated cybersecurity unit, operating unit (Art. 4, 5, 31.1, 32, 33); assessment team independent of operation (Art. 31.2(c)) |
| Art. 30.3(c) | Human resources | Personnel; role-based and secure-coding training (L4–5); competency framework (L5) | Staff standards (Art. 32.3); short training and awareness (Art. 31.3) |
| Art. 30.3(d) | Design and build | Network architecture, design review, testing / acceptance; hardening; secure development; outsourcing; data flows | Readiness assessment (Art. 28.3); plan implemented before operation (Art. 30.6); data center / cloud separation (Art. 30.8–30.9); design principles (Art. 30.5) |
| Art. 30.3(đ) | Operation | Asset, configuration, account, vulnerability, log, browser / email, malware, backup groups; change management; monitoring; suppliers; incidents | Annual reporting (Art. 35–36); technical connection for monitoring (Art. 33.5) |
| Art. 30.3(e) | Risk management plan | Risk group | Triggers, minimum content, record-keeping, proposing a higher level (Art. 10.2–10.6); method awaits MPS guidance (Art. 10.8) |
| Art. 30.3(g) | End of operation, disposal | Hardware wiping, information destruction, staff exit, supplier contract end | Decommissioning of the **whole system** (data archiving / transfer, account closure, notifying the approving body) |

### 6.2 Technical requirements — Art. 30.4 Decree 331

- **Art. 30.4(a) network security:** network infrastructure, monitoring, DNS / URL filtering, rogue-device detection.
- **Art. 30.4(b) server security:** configuration, vulnerabilities, malware / EDR, accounts / PAM, logs.
- **Art. 30.4(c) application security:** secure development, WAF, authentication / MFA, allowlist / EOL, application logs, pentest.
- **Art. 30.4(d) data security:** information assets (classification, encryption, integrity, DLP, signatures), backup, log protection.

### 6.3 The 7 parts of the security plan — Art. 29.2 Decree 331

Art. 22.6 requires the plan to describe how **each requirement** is met. For each part, list the matching checklist lines with current status, solution and timeline.

| Decree 331 | Part of the security plan | Main TCVN groups | Decree obligations to add |
|---|---|---|---|
| Art. 29.2(a) | Design and build | Network architecture, testing, hardening, secure development | Art. 28.3, 30.5, 30.6, 30.8–30.9 |
| Art. 29.2(b) | Operation | Operational groups, personnel, suppliers | Art. 33 (operating unit duties) |
| Art. 29.2(c) | Inspection and assessment | Pentest, vulnerability scans, control effectiveness | Art. 27 (content; black / gray / white box); Art. 28.5; Art. 31.2(c) |
| Art. 29.2(d) | Risk management | Risk group | Art. 10 |
| Art. 29.2(đ) | Monitoring | Monitoring, logs / SIEM, EDR | Art. 28.6, 33.5 (awaiting MPS guidance) |
| Art. 29.2(e) | Contingency, incident response, disaster recovery | Incident response, backup, redundancy | Art. 31.2(d) (24h / 72h); Art. 31.3 (exercises); RTO / RPO — TCVN sets no targets |
| Art. 29.2(g) | End of operation, disposal | Disposal, destruction, contract end, staff exit | Whole-system decommissioning (build your own) |

Browser / email protection, supplier management and pentest have no heading in Art. 30.3–30.4 but remain **mandatory** because Art. 28.4, 29.1 and 30.1 reference TCVN; place them under Art. 29.2(b), Art. 30.3(b)/(đ) and Art. 29.2(c) respectively.

### 6.4 Decree 331 obligations not covered by TCVN

Not in any TCVN checklist, but legal obligations:

- **Internal cybersecurity regulation** issued **before** the level dossier is approved (Art. 30.7).
- **Rented data center / cloud:** logical separation of system, network zones and storage for Levels 3–4 (Art. 30.8); **physical** separation of system, storage and core network devices for Level 5 and systems critical to national security, with shared security tools limited to monitoring, detection, alerting or perimeter protection (Art. 30.9).
- **Readiness assessment** before operation and on major change or request (Art. 28.3); **full plan implemented before operation** (Art. 30.6).
- **Design principles:** Levels 1–3 may share solutions; Levels 4–5 designed for availability and isolation (Art. 30.5). Lifecycle rules and backup measures (Art. 28.1).
- **Risk management** triggers, minimum content (incl. information classification), higher-level proposal, records (Art. 10.2–10.6).
- **Inspection and assessment** periodic, continuous and ad hoc (Art. 28.5, Art. 27); independence and professional-organization cases (Art. 31.2(c)).
- **Incident reporting** to the MPS: serious incident initial notice within 24 hours; cause, scope, remediation within 72 hours; immediately if national security or social order and safety is at stake (Art. 31.2(d)).
- **Exercises** internal and national / international (Art. 31.3).
- **Annual report:** units to the system owner before 20/12; system owner to the MPS before 25/12; data period 15/12 of the previous year to 14/12 (Art. 35.3–35.4; content Art. 36). See [07-governance-inspection-reporting.md](07-governance-inspection-reporting.md).
- **Technical connection for monitoring** by the MPS specialized force (Art. 33.5); detailed rules await MPS guidance (Art. 28.6).

## 7. Practical notes

- Many TCVN requirements allow an "equivalent solution" or give configurations only as examples tied to the risk assessment; the checklists flag these as "suggested". Any different choice must be argued in the security plan.
- Detailed MPS guidance on risk assessment, monitoring and incident response had not been issued at the time of checking; follow it once issued (Art. 10.8, 28.6 Decree 331).
- Gray areas on TCVN (non-inheritance between levels; whether Appendix A is normative or informative): see [gray-areas.md](gray-areas.md).
