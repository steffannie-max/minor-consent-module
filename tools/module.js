
const MANDY_PHOTO_URL = "assets/mandy-davis.png";

/* ============================================================
   COMPLETE UNABRIDGED DATASET
   ============================================================ */
const DATA = [
  // SECTION 1: GETTING STARTED (1-9)
  { sec:"Getting Started", type:"cover", tag:"Module 1", title:"Minor Consent to <span class='nowrap'>Behavioral Health Care</span>", sub:"For Behavioral Health Care Providers", hasIntroVideo:true },
  { sec:"Getting Started", type:"about", title:"About Trauma Informed Oregon", body:[
    "Trauma Informed Oregon is a statewide collaborative aimed at preventing and ameliorating the impact of adverse experiences on children, adults, and families.",
    "Trauma Informed Oregon works in partnership with providers, individuals with lived experience, and families to promote and sustain trauma informed policies and practices across physical, mental, and behavioral health systems, and to disseminate promising strategies to support wellness and resilience."
  ]},
  { sec:"Getting Started", type:"text", title:"How to Use This Resource", body:[
    "This is intended to provide basic information for providers of behavioral healthcare about a young person's ability to access behavioral health care in Oregon.",
    "You can watch this on your own, as a team or group, in a supervisory session, or include it in orientation activities.",
    "We recognize that not all questions or situations will be answered in this module. We encourage you to share your questions with us, and we will update the FAQs. We also encourage you to explore these complexities in your teams and organizations."
  ]},
  { sec:"Getting Started", type:"callout", title:"Disclaimer", audioFile:"assets/audio/slide 5-7.m4a", startTime:1, endTime:19, body:[
    "This training is for educational purposes only, and participants should follow their organization's policies and professional scope of practice when applying any information presented. This is not legal advice, nor does it replace clinical consultation and supervision needs."
  ]},
  { sec:"Getting Started", type:"agenda", title:"Agenda", audioFile:"assets/audio/slide 5-7.m4a", startTime:20, endTime:41, items:[
    "Context Setting","Definitions","About Consent","About Involvement","About Disclosure","Considerations","Scenarios","In Summary","Resources"
  ]},
  { sec:"Getting Started", type:"stat", quote:"Mental health is a basic human right for all people. Everyone, whoever and wherever they are, has a deserving and inherent right to the highest attainable standard of mental health.", source:"World Health Organization, 2023", audioFile:"assets/audio/slide 5-7.m4a", startTime:42, endTime:62, stats:[
    {value:"60%", label:"of Oregon's 8th and 11th graders have a positive view of their mental/emotional health (Oregon SHS, 2025)"},
    {value:"1 in 5", label:"of 11th graders report having emotional or mental health care needs that were not met during the past year (2025)"}
  ]},
  { sec:"Getting Started", type:"text", title:"Minor Consent to Behavioral Health Services", audioFile:"assets/audio/slide 5-7.m4a", startTime:81, endTime:103, body:[
    "Oregon's minor consent to behavioral health services policy is one tool for satisfying the inherent right to mental health."
  ]},
  { sec:"Getting Started", type:"objectives", title:"Module 1 Objectives", audioFile:"assets/audio/slide 8-9.m4a", startTime:0, endTime:34, items:[
    "Define the age of consent for behavioral health services.",
    "Know the difference between consent to services and disclosure of information.",
    "Know if and when parent/guardians need to be involved in behavioral health services.",
    "Identify when more information and consultation are needed."
  ]},
  { sec:"Getting Started", type:"matrix", title:"Navigating This Content", audioFile:"assets/audio/slide 8-9.m4a", startTime:34, endTime:80, questions:[
    "How might this help?","How might this hurt?","How might identity influence impact?"
  ], groups:["Young People","Parents/Guardians","Providers","Organizations","Peers and Natural Supports"], prompt:"Who else would you include?" },

  // SECTION 2: DEFINITIONS (10-16)
  { sec:"Definitions", type:"divider", title:"Section 1: Definitions" },
  { sec:"Definitions", type:"definition", title:"Defining OAR and ORS", terms:[
    {term:"OAR", def:"Oregon Administrative Rules, often called just 'Administrative Rules.' OARs are created by entities with rulemaking authority to implement or interpret their specific statutes."},
    {term:"ORS", def:"Oregon Revised Statutes, the official collection of laws enacted by the Oregon legislative assembly or through citizen initiatives, organized systemically for reference and legal use in the state of Oregon."}
  ]},
  { sec:"Definitions", type:"definition", title:"Definitions", terms:[
    {term:"Behavioral Health 'Provider'", def:"means an individual, organizational provider, or Community Mental Health Program as designated under ORS 430.637 (1)(b) that holds a current certificate to provide outpatient behavioral health treatment or prevention services pursuant to these and other applicable service delivery rules. (OAR 309-019-0105 — Definitions)"}
  ]},
  { sec:"Definitions", type:"definition", title:"Defining Behavioral Health, Treatment, and Outpatient Therapy", terms:[
    {term:"Behavioral Health", def:"means mental health, mental illness, addictive health, and addiction and gambling disorders. (OAR 309-008-0200)"},
    {term:"Behavioral Health Treatment Services", def:"means mental health treatment, substance use disorder treatment, and problem gambling treatment services. (OAR 309-008-0200)"},
    {term:"Outpatient Therapy", def:"means medically appropriate services to an individual, and when appropriate their family or significant other, for the treatment of a behavioral health diagnosis. *Subject to change — final definition in rule will be in place 1/1/2027. (OAR 309-008)"}
  ]},
  { sec:"Definitions", type:"definition", title:"Defining Minor and Guardian", terms:[
    {term:"Minor", def:"defined as someone 14 years of age or older (as it pertains to access to behavioral health care). There are exclusions for emancipated minors. (ORS 109.675) Minor is a legal term — in practice, and throughout this presentation, we use the terms young persons, youth, etc."},
    {term:"Guardian", def:"means an individual who has been granted guardianship of a child through a judgment of the court (see OAR 413-0700: 34)."},
    {term:"Parent", def:"means the genetic or adoptive mother and the legal parent of the child. A legal parent is a person who has adopted the child or whose parentage has been established or declared under ORS 109.065."}
  ]},
  { sec:"Definitions", type:"objectives", title:"Three Points of Emphasis", items:[
    "Consent to Treatment",
    "Parent/Guardian Involvement",
    "Disclosure of Information / Access to Records and Documentation"
  ]},
  { sec:"Definitions", type:"quiz", title:"Knowledge Check: Definitions", intro:"Four questions on the terms we just covered. Pick an answer to see the explanation:", items:[
    {q:"For the purpose of accessing behavioral health care in Oregon, a 'minor' who may consent on their own is defined as someone who is:", options:["12 years of age or older","14 years of age or older","15 years of age or older","16 years of age or older"], correct:1, why:"ORS 109.675 sets the age at 14 for outpatient mental health and substance use services. There are exclusions for emancipated minors."},
    {q:"What is the difference between an ORS and an OAR?", options:["ORS are federal laws; OAR are Oregon laws","ORS are laws passed by the legislature or citizen initiative; OAR are rules written by agencies with rulemaking authority","ORS are agency rules; OAR are court decisions","They are two names for the same thing"], correct:1, why:"Oregon Revised Statutes are enacted by the legislative assembly. Oregon Administrative Rules are created by entities with rulemaking authority."},
    {q:"Under the definitions used in this module, 'guardian' means:", options:["Any adult the young person lives with","A relative who provides day-to-day care","An individual granted guardianship of a child through a judgment of the court","A caseworker assigned to the young person"], correct:2, why:"Guardianship is a court determination (see OAR 413-0700: 34)."},
    {q:"'Behavioral health' as defined in OAR 309-008-0200 includes:", options:["Mental health and mental illness only","Mental health, mental illness, addictive health, and addiction and gambling disorders","Only services delivered in a clinic setting","Any service delivered by a licensed clinician"], correct:1, why:"The definition is broad: mental health, mental illness, addictive health, and addiction and gambling disorders."}
  ]},

  // SECTION 3: ABOUT CONSENT (17-30)
  { sec:"About Consent", type:"divider", title:"About Consent" },
  { sec:"About Consent", type:"text", eyebrow:"CONSENT", title:"Consent, Defined", body:[
    "Consent is giving permission to receive a service. In the helping professions the consent process is expected to be:"
  ], list:[
    "Voluntary: without coercion, intimidation or pressure",
    "Informed: the person understands the purpose, risks, benefits, and limitations of the services",
    "Provided in a method that is aligned with how the person receives information",
    "Reversible"
  ], extra:["Please consult your professional organizations and agency for more details about the consent process."] },
  { sec:"About Consent", type:"text", eyebrow:"CONSENT", title:"Who, What and When?", audioFile:"assets/audio/slide 18-21.m4a", startTime:0, endTime:31, body:[], list:[
    "Medical / Dental: Minors 15+ can consent to medical & dental services administered by specific licensed providers without parent/guardian consent. (ORS 109.640)",
    "Reproductive Health: Minors of any age can access reproductive health care services & information without parent/guardian consent. (ORS 109.640)",
    "Behavioral Health: A minor who is 14+ may access outpatient mental health & substance use services without parent/guardian consent. (ORS 109.675)"
  ]},
  { sec:"About Consent", type:"text", eyebrow:"CONSENT", title:"Behavioral Health Focus", audioFile:"assets/audio/slide 18-21.m4a", startTime:31, endTime:95, body:[], list:[
    "A minor who is 14+ may access outpatient mental health & substance use services without parent/guardian consent (ORS 109.675).",
    "A parent/guardian can still consent to behavioral health care on behalf of a youth, even if the youth refuses.",
    "Providers are required to involve parent/guardian in the minor's care, prior to the end of services, unless there are clear and documented clinical reasons."
  ]},
  { sec:"About Consent", type:"text", eyebrow:"CONSENT", title:"Increasing Access", audioFile:"assets/audio/slide 18-21.m4a", startTime:95, endTime:111, body:[
    "This law is intended to increase access to behavioral health care — a basic human right."
  ]},
  { sec:"About Consent", type:"faq", eyebrow:"CONSENT", title:"Outpatient Services FAQ", audioFile:"assets/audio/slide 18-21.m4a", startTime:111, endTime:151, q:"What are outpatient services? Am I doing outpatient services?", a:[
    "Outpatient therapy means medically appropriate services to an individual, and when appropriate their family, for the treatment of a behavioral health diagnosis. (OAR 309-008)",
    "Methadone treatment, even if outpatient, is not covered under minor consent to behavioral healthcare.",
    "If you are unsure, ask your organization."
  ]},
  { sec:"About Consent", type:"reflection", eyebrow:"CONSENT", title:"Reflecting on Minors (Pt. 1)", prompt:"In one minute, write down situations where it might be helpful for a young person to access care without needing a parent or guardian's consent.", hints:[
    "A parent/guardian is not available due to work, location, or doesn't feel safe engaging.",
    "A young person does not want to burden their parent/guardian.",
    "A young person is practicing developmentally appropriate independence."
  ]},
  { sec:"About Consent", type:"reflection", eyebrow:"CONSENT", title:"Reflecting on Minors (Pt. 2)", prompt:"In one minute, write down situations where it might be helpful for a young person to access care without needing a guardian's consent.", hints:[
    "The guardian does not read or understand the language in which services are provided.",
    "It would be unsafe to the young person if the guardian found out.",
    "The young person is unaware of the benefit of involving their guardian."
  ]},
  { sec:"About Consent", type:"reflection", eyebrow:"CONSENT", title:"Reflecting on Guardians (Pt. 1)", prompt:"In one minute, write down situations where a parent/guardian wants services but a minor does not.", hints:[
    "The parent/guardian knows the value of therapy from personal experience.",
    "The parent/guardian is scared for their young person's safety.",
    "The young person is worried about peer stigma."
  ]},
  { sec:"About Consent", type:"reflection", eyebrow:"CONSENT", title:"Reflecting on Guardians (Pt. 2)", prompt:"In one minute, write down situations where a parent/guardian wants services but a minor does not.", hints:[
    "The minor feels they are ok and these particular services are not what they need.",
    "The young person is experiencing severe enough symptoms that they are not aware of the need.",
    "The guardians have not been taught about typical adolescent development."
  ]},
  { sec:"About Consent", type:"reflection", eyebrow:"CONSENT", title:"What Are Your Thoughts?", audioFile:"assets/audio/slide 26.m4a", prompt:"Young people being able to access behavioral health services is important because…?" },
  { sec:"About Consent", type:"wordwall", eyebrow:"CONSENT", title:"How a Youth Might Say 'No'", audioFile:"assets/audio/slide 27.m4a", items:[
    "This is sus","I am not going!","I am not having a menty b — so no","Hot take, still no","My side-eye is my answer","I am not going"
  ]},
  { sec:"About Consent", type:"objectives", eyebrow:"CONSENT", title:"What Can You Do with a 'No'?", items:[
    "Honor that the young person knows what they need.",
    "Offer services to the parents/guardians.",
    "Offer to have a few meetings with everyone to figure out what would be helpful.",
    "Offer to meet with the young person for 2–3 sessions to see if they are interested.",
    "Connect the minor with peer support services."
  ]},
  { sec:"About Consent", type:"objectives", title:"What Can You Do with a 'No'? (continued)", items:[
    "Invite the young person to visit the site or offer different places for services.",
    "Evaluate if spaces, places and processes are youth centered.",
    "Assist in any planning or supports while the youth is deciding what to do."
  ]},
  { sec:"About Consent", type:"text", eyebrow:"CONSENT", title:"Guardians Can Consent to Services", body:[
    "Take extra care: Oregon law does allow parents/guardians to consent to services for youth under age 18. They can do this without the youth's consent, particularly when young children cannot give informed consent or when intensive residential services are required for safety."
  ]},
  { sec:"About Consent", type:"quiz", title:"Knowledge Check: Consent", intro:"Check your understanding of minor consent principles:", items:[
    {q:"A 14-year-old asks to start outpatient therapy and does not want their parents told. Under ORS 109.675, can they consent on their own?", options:["Yes — a minor 14 or older may access outpatient mental health services without parent consent","No — they must be 15","No — a parent must always co-sign","Only with a court order"], correct:0, why:"A minor 14 or older may consent to outpatient mental health and substance use services under ORS 109.675."},
    {q:"Which of these is NOT one of the qualities of a good consent process?", options:["Voluntary — without coercion","Informed — person understands purpose and risks","Permanent — once given, it cannot be withdrawn","Reversible — can be withdrawn at any point"], correct:2, why:"Consent is reversible. A person can withdraw consent at any point."},
    {q:"A parent wants their 16-year-old in therapy. The youth says no. What does Oregon law allow?", options:["Nothing can happen without the youth's agreement","The parent/guardian can consent to behavioral health care on the youth's behalf","The provider must refuse the referral","The youth must be emancipated"], correct:1, why:"Oregon law allows a parent/guardian to consent to services for youth under 18."}
  ]},

  // SECTION 4: ABOUT INVOLVEMENT (31-40)
  { sec:"About Involvement", type:"divider", title:"Section 3: About Involvement" },
  { sec:"About Involvement", type:"text", eyebrow:"INVOLVEMENT", title:"Providers Must Involve Guardians", audioFile:"assets/audio/slide 32-36.m4a", startTime:0, endTime:35, body:[
    "Providers are required to involve the parent/guardian in the minor's care, prior to the end of services, unless there are clear and documented clinical reasons."
  ]},
  { sec:"About Involvement", type:"faq", eyebrow:"INVOLVEMENT", title:"Involvement FAQ", audioFile:"assets/audio/slide 32-36.m4a", startTime:35, endTime:73, qList:[
    "What does 'involve' mean?",
    "What is sufficient to meet involvement standards?",
    "What does 'prior to the end of services' mean?",
    "What are 'clinical reasons'?"
  ], a:["Following are key considerations and clinical guidance for these questions."] },
  { sec:"About Involvement", type:"text", eyebrow:"INVOLVEMENT", title:"Involvement Is Best Practice", audioFile:"assets/audio/slide 32-36.m4a", startTime:73, endTime:107, body:[
    "Involve parents/guardians of youth who are receiving behavioral health services whenever safely possible."
  ]},
  { sec:"About Involvement", type:"text", eyebrow:"INVOLVEMENT", title:"You Are Not Alone", audioFile:"assets/audio/slide 32-36.m4a", startTime:107, endTime:123, body:[
    "Much of our work is grounded in honoring and working with complexity. Utilize supervision, peer consultation, and organizational policies."
  ]},
  { sec:"About Involvement", type:"text", eyebrow:"INVOLVEMENT", title:"The Work", audioFile:"assets/audio/slide 32-36.m4a", startTime:123, endTime:155, body:[
    "How we do the work is the work."
  ]},
  { sec:"About Involvement", type:"objectives", eyebrow:"INVOLVEMENT", title:"Centering Safety and Care", items:[
    "Center safety and care in decisions involving parents/guardians.",
    "Consult with the young person, your supervisor, and your organization's policies."
  ], extraList:{h:"Involvement is not necessary when:", items:["Parents refuse","It is clinically contraindicated","The minor was abused by the guardians (including exposure to domestic violence)"]} },
  { sec:"About Involvement", type:"reflection", eyebrow:"INVOLVEMENT", title:"Pause and Reflect", prompt:"What are examples of 'clinically contraindicated' in your practice environment?" },
  { sec:"About Involvement", type:"objectives", eyebrow:"INVOLVEMENT", title:"Involvement in Practice", items:[
    "Including everyone in family therapy.",
    "Parents/guardians attending designated portions of sessions.",
    "The young person leading a shared meeting.",
    "Sharing a collaborative letter created with the young person."
  ]},
  { sec:"About Involvement", type:"quiz", title:"Knowledge Check: Involvement", intro:"Questions on parent and guardian involvement:", items:[
    {q:"When are providers required to involve a parent or guardian in a minor's care?", options:["At the first session always","Before the end of services, unless there are clear and documented clinical reasons","Only if the youth asks","Only when medication is prescribed"], correct:1, why:"ORS 109.675 requires involvement prior to the end of services unless clinically contraindicated."},
    {q:"Which of these is a situation where involvement is NOT required?", options:["The youth is over 16","It is clinically contraindicated or the minor was abused by the guardians","The provider is busy","The guardian lives in another city"], correct:1, why:"Exceptions include parent refusal, clinical contraindication, or abuse history."}
  ]},

  // SECTION 5: ABOUT DISCLOSURE (41-50)
  { sec:"About Disclosure", type:"divider", title:"Section 4: About Disclosure" },
  { sec:"About Disclosure", type:"definition", eyebrow:"DISCLOSURE", title:"Disclosure, Defined", audioFile:"assets/audio/slide 41-45.m4a", startTime:0, endTime:22, terms:[
    {term:"Disclosure", def:"is sharing 'relevant information regarding the minor's diagnosis and treatment to the minor's parent or legal guardian…' (ORS 109.680)"}
  ]},
  { sec:"About Disclosure", type:"reflection", eyebrow:"DISCLOSURE", title:"Disclosure vs. Confidentiality", audioFile:"assets/audio/slide 41-45.m4a", startTime:22, endTime:43, prompt:"How do you understand the difference between disclosure and confidentiality?" },
  { sec:"About Disclosure", type:"objectives", eyebrow:"DISCLOSURE", title:"When Disclosure Is Not Required", audioFile:"assets/audio/slide 41-45.m4a", startTime:43, endTime:88, items:[
    "Reasonably believing the individual abused or neglected the minor.",
    "Reasonably believing disclosure could endanger the minor.",
    "Determining it is not in the minor's best interest.",
    "The minor has emancipated or separated from the parent for at least 90 days."
  ]},
  { sec:"About Disclosure", type:"objectives", eyebrow:"DISCLOSURE", title:"When Disclosure Is Required", audioFile:"assets/audio/slide 41-45.m4a", startTime:88, endTime:115, items:[
    "It is clinically appropriate and in the minor's best interests.",
    "The minor must be admitted to a detoxification program.",
    "The minor is at risk of suicide (ORS 109.680, HB 3139-2021)."
  ]},
  { sec:"About Disclosure", type:"text", eyebrow:"DISCLOSURE", title:"Substance Use Disorder Treatment", audioFile:"assets/audio/slide 41-45.m4a", startTime:115, endTime:125, body:[
    "Federal law governing the confidentiality of drug and alcohol records (42 CFR 2.14(a)) specifies that if a youth has consented to their own treatment under state law, the youth must consent to disclosure of those records."
  ]},
  { sec:"About Disclosure", type:"text", eyebrow:"DISCLOSURE", title:"Disclosure Requires Unique Consent", body:[
    "Consent to disclosure is a separate consent process required in addition to consent to behavioral health services."
  ]},
  { sec:"About Disclosure", type:"objectives", eyebrow:"DISCLOSURE", title:"Disclosure Best Practices", items:[
    "Talk openly and often about who can consent to what type of care.",
    "Provide information about consent in multiple languages and formats.",
    "Assess how inclusive your consent processes are.",
    "Involve youth and guardians as much as is safe."
  ]},
  { sec:"About Disclosure", type:"reflection", eyebrow:"DISCLOSURE", title:"How Can Guardians Know?", audioFile:"assets/audio/slide 49.m4a", prompt:"What are ways a parent/guardian could learn about care being provided?", hints:[
    "The young person lets them know directly.",
    "The provider deems it necessary to tell them.",
    "The services show up on insurance billing."
  ]},
  { sec:"About Disclosure", type:"quiz", title:"Knowledge Check: Disclosure", intro:"Four questions on disclosure rules:", items:[
    {q:"A young person consented to their own treatment. Does that automatically allow their guardian to access records?", options:["Yes — consent to treatment covers records","No — consent to disclosure is a separate consent","Yes, for billing only","Only with court order"], correct:1, why:"Consent to treatment and consent to disclosure are separate legal determinations."},
    {q:"Which of these requires disclosure regardless of the young person's consent?", options:["The minor misses two sessions","The minor must be admitted to a detox program or is at risk of suicide","The guardian asks for clinical notes","The youth changes schools"], correct:1, why:"Detox admission and suicide risk require disclosure under ORS 109.680."}
  ]},

  // SECTION 6: CONSIDERATIONS (51-52)
  { sec:"Considerations", type:"divider", title:"Section 5: Considerations" },
  { sec:"Considerations", type:"objectives", eyebrow:"DISCLOSURE", title:"Disclosure Considerations", audioFile:"assets/audio/slide 51.m4a", items:[
    "Consider how decisions harm or help, and for whom.",
    "Strive to increase access to care as a developmental milestone.",
    "Consult with youth, families, colleagues, and supervisors.",
    "Document what was done and why."
  ]},

  // SECTION 7: SCENARIOS (53-57)
  { sec:"Scenarios", type:"divider", title:"Section 6: Scenarios" },
  { sec:"Scenarios", type:"scenario", title:"Scenario 1: 14-Year-Old Outpatient Therapy", text:"A 14-year-old initiates outpatient therapy at school for depression and moderate ideation without plan. They do not want parents involved.", qa:[
    {q:"Can the 14-year-old consent?", a:"Yes. Outpatient behavioral health care at 14+ is covered under ORS 109.675."},
    {q:"Do you need to involve parents?", a:"Yes, before the end of treatment, unless clinically contraindicated and documented."}
  ]},
  { sec:"Scenarios", type:"scenario", title:"Scenario 2: 16-Year-Old Refusing Intake", text:"Parents bring a 16-year-old to intake after grades drop. The youth remains silent and refuses care.", qa:[
    {q:"Can you see this minor?", a:"Parents can legally consent for youth under 18, but engagement and rapport building are essential."},
    {q:"Best practices?", a:"Offer 2–3 low-pressure sessions, offer parent support, or connect to peer services."}
  ]},
  { sec:"Scenarios", type:"scenario", title:"Scenario 3: Residential Treatment", text:"A legal guardian brings a 14-year-old with severe trauma to residential treatment.", qa:[
    {q:"Who must consent?", a:"Guardian consent is mandatory for residential treatment in Oregon."}
  ]},
  { sec:"Scenarios", type:"scenario", title:"Scenario 4: Psychiatric Evaluation", text:"A 14-year-old seeks psychiatric care for severe anxiety without telling parents.", qa:[
    {q:"Can the psychiatrist evaluate and prescribe?", a:"Yes, outpatient care at 14+ includes psychiatric services, though family involvement remains best practice when safe."}
  ]},

  // SECTION 8: IN SUMMARY (58-63)
  { sec:"In Summary", type:"divider", title:"Section 7: In Summary" },
  { sec:"In Summary", type:"truefalse", title:"Summary: True or False", qa:[
    {q:"Can an outpatient clinic refuse service to a minor solely because they consented on their own?", correct:1, a:"No. Minor consent under ORS 109.675 is valid legal consent."},
    {q:"Is consent to treatment the same as consent to release records?", correct:1, a:"No. They are separate consents under Oregon law and federal rules."},
    {q:"Is involving parents/guardians best clinical practice when safe?", correct:0, a:"Yes. Family involvement strongly supports long-term youth wellness."}
  ]},
  { sec:"In Summary", type:"objectives", title:"Where to Seek More Help", items:[
    "Your clinical supervisor",
    "Organizational policies & procedures",
    "Professional licensing boards",
    "Legal counsel"
  ]},
  { sec:"In Summary", type:"closing", quote:"Mental health is a basic human right for all people. Everyone, whoever and wherever they are, has a deserving and inherent right to the highest attainable standard of mental health.", title:"Thank You For All You Do" },

  // SECTION 9: RESOURCES & DOWNLOADS (64-68)
  { sec:"Resources", type:"citations", title:"Citations & References", items:[
    "Mental health: Promoting and protecting human rights. World Health Organization, 2023.",
    "Oregon Revised Statutes (ORS 109.675, ORS 109.680, ORS 109.640).",
    "Oregon Administrative Rules (OAR 309-019-0105, OAR 309-008-0200)."
  ]},
  { sec:"Resources", type:"resources", title:"Key Resources", items:[
    {title:"Trauma Informed Oregon Resource Library", desc:"Explore trauma-informed implementation, youth engagement, family support, and practice resources.", url:"https://traumainformedoregon.org/"},
    {title:"Understanding Minor Consent and Confidentiality in Health Care in Oregon", desc:"Oregon Health Authority guidance for providers and communities.", url:"https://www.oregon.gov/oha/PH/HEALTHYPEOPLEFAMILIES/YOUTH/Pages/Resources.aspx"},
    {title:"OHA Minor Consent for Behavioral Health Services Memo", desc:"Oregon Health Authority clarification for licensed and certified behavioral health providers.", url:"https://www.oregon.gov/oha/HSD/BH-Child-Family/Documents/Minor%20Consent%20Memo.pdf"}
  ]},
  { sec:"Resources", type:"downloads", title:"Tipsheets & Downloads", items:[
    {title:"Who Can Consent to What — Quick Reference", desc:"Summary sheet comparing medical, reproductive, and behavioral health consent ages.", file:"resources/who-can-consent.html"},
    {title:"Involvement Decision Guide", desc:"Decision pathway and documentation prompts for parent or guardian involvement.", file:"resources/involvement-decision-guide.html"}
  ]},
  { sec:"Resources", type:"certificate", title:"Certificate of Completion" }
];

function renderIntroVideo() {
  return `
    <div class="intro-video-card">
      <h3>Training Introduction</h3>
      <p>Watch the introduction video below:</p>
      <video class="intro-video-element" controls preload="none" playsinline poster="assets/tio-video-poster.png" aria-label="Minor Consent training introduction with Mandy Davis">
        <source src="assets/tio-opening-video.mp4" type="video/mp4">
        Your browser does not support HTML video playback.
      </video>
      <details class="transcript-disclosure">
        <summary>Read video transcript</summary>
        <div class="transcript-content">
          <p><strong>Welcome to Minor Consent to Behavioral Health Care.</strong></p>
          <p>A trauma-informed learning module presented by Mandy Davis, PhD, LCSW, Director of Trauma Informed Oregon.</p>
          <p><strong>Move through the module at your own pace.</strong> Pause, revisit, and focus on what is most useful to your role.</p>
        </div>
      </details>
    </div>
  `;
}


function escapeTextAlternative(value) {
  return String(value ?? "")
    .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;").replace(/'/g,"&#039;");
}
function buildSlideTextAlternative(slide) {
  const parts = [];
  if (slide.title) parts.push(`<p><strong>${escapeTextAlternative(slide.title)}</strong></p>`);
  (slide.body || []).forEach(item => parts.push(`<p>${escapeTextAlternative(item)}</p>`));
  if (slide.quote) parts.push(`<p>“${escapeTextAlternative(slide.quote)}”</p>`);
  if (slide.source) parts.push(`<p>${escapeTextAlternative(slide.source)}</p>`);
  const listItems = [].concat(slide.list || []).concat((slide.items || []).filter(item => typeof item === "string"));
  if (listItems.length) parts.push(`<ul>${listItems.map(item => `<li>${escapeTextAlternative(item)}</li>`).join("")}</ul>`);
  if (slide.q) parts.push(`<p><strong>Question:</strong> ${escapeTextAlternative(slide.q)}</p>`);
  (slide.qList || []).forEach(item => parts.push(`<p>${escapeTextAlternative(item)}</p>`));
  (slide.a || []).forEach(item => parts.push(`<p>${escapeTextAlternative(item)}</p>`));
  if (slide.prompt) parts.push(`<p><strong>Reflection prompt:</strong> ${escapeTextAlternative(slide.prompt)}</p>`);
  (slide.hints || []).forEach(item => parts.push(`<p>${escapeTextAlternative(item)}</p>`));
  if (!parts.length) parts.push("<p>The on-screen content is the accessible text for this slide.</p>");
  return `<details class="transcript-disclosure"><summary>Read text alternative</summary><div class="transcript-content">${parts.join("")}<p class="transcript-note">This reflects the on-screen content. Replace it with a verbatim narration transcript when the final transcript is available.</p></div></details>`;
}

const AUDIO_FILE_ALIASES = {
  "assets/audio/slide 5-7.m4a": [
    "assets/audio/slide 5-7.m4a",
    "assets/audio/slides 5-7.m4a",
    "assets/audio/slide 5-7.mp4"
  ],
  "assets/audio/slide 8-9.m4a": [
    "assets/audio/slide 8-9.m4a",
    "assets/audio/slides 8-9.m4a",
    "assets/audio/slide 8-9.mp4"
  ],
  "assets/audio/slide 18-21.m4a": [
    "assets/audio/slide 18-21.m4a",
    "assets/audio/slie 18-21.m4a",
    "assets/audio/slide 19-22.m4a",
    "assets/audio/slides 18-21.m4a",
    "assets/audio/slide 18-21.mp4",
    "assets/audio/slide 19-22.mp4"
  ],
  "assets/audio/slide 26.m4a": [
    "assets/audio/slide 26.m4a",
    "assets/audio/slides 26.m4a",
    "assets/audio/slide 26.mp4"
  ],
  "assets/audio/slide 27.m4a": [
    "assets/audio/slide 27.m4a",
    "assets/audio/slides 27.m4a",
    "assets/audio/slide 27.mp4"
  ],
  "assets/audio/slide 32-36.m4a": [
    "assets/audio/slide 32-36.m4a",
    "assets/audio/slide 32-26.m4a",
    "assets/audio/slides 32-36.m4a",
    "assets/audio/slide 32-36.mp4",
    "assets/audio/slide 32-26.mp4"
  ],
  "assets/audio/slide 41-45.m4a": [
    "assets/audio/slide 41-45.m4a",
    "assets/audio/slides 41-45.m4a",
    "assets/audio/slide 41-45.mp4"
  ],
  "assets/audio/slide 49.m4a": [
    "assets/audio/slide 49.m4a",
    "assets/audio/slides 49.m4a",
    "assets/audio/slide 49.mp4"
  ],
  "assets/audio/slide 51.m4a": [
    "assets/audio/slide 51.m4a",
    "assets/audio/slides 51.m4a",
    "assets/audio/slide 51.mp4"
  ]
};

function renderAudio(fileName, startTime, endTime, slide) {
  if (!fileName) return "";

  const files = AUDIO_FILE_ALIASES[fileName] || [
    fileName,
    fileName.endsWith(".m4a") ? fileName.replace(".m4a", ".mp4") : fileName
  ];

  const dataStart = Number.isFinite(startTime) ? ` data-start="${startTime}"` : "";
  const dataEnd = Number.isFinite(endTime) ? ` data-end="${endTime}"` : "";

  const sources = files.map(file => {
    const type = file.toLowerCase().endsWith(".mp4") ? "audio/mp4" : "audio/mp4";
    return `<source src="${file}" type="${type}">`;
  }).join("");

  return `
    <div class="audio-player-container">
      <audio
        class="slide-narration"
        controls
        preload="metadata"
        aria-label="Narration for this slide"
        ${dataStart}${dataEnd}>
        ${sources}
        Your browser does not support audio playback.
      </audio>
      <div class="audio-status" role="status" aria-live="polite"></div>
      ${buildSlideTextAlternative(slide || {})}
    </div>
  `;
}


const SECTION_VISUALS = {
  "Definitions": {
    number:"01",
    preview:"Build a shared language before applying the law.",
    chips:["OAR","ORS","Minor, Parent & Guardian"]
  },
  "About Consent": {
    number:"02",
    preview:"Clarify who may authorize services, when, and under what conditions.",
    chips:["Permission","Age","Voluntary & Informed"]
  },
  "About Involvement": {
    number:"03",
    preview:"Consider when and how parents or guardians participate in care.",
    chips:["Safety","Clinical Judgment","Documentation"]
  },
  "About Disclosure": {
    number:"04",
    preview:"Separate consent to services from consent to share information.",
    chips:["Records","Confidentiality","Best Interests"]
  },
  "Considerations": {
    number:"05",
    preview:"Apply the law with attention to impact, access, and clinical context.",
    chips:["Help & Harm","Identity","Consultation"]
  },
  "Scenarios": {
    number:"06",
    preview:"Practice applying consent, involvement, and disclosure principles.",
    chips:["Apply","Discuss","Document"]
  },
  "In Summary": {
    number:"07",
    preview:"Pull the major ideas together and identify where to seek support.",
    chips:["Review","Consult","Next Steps"]
  }
};

const SHORT_SLIDE_VISUALS = {
  "Minor Consent to Behavioral Health Services": {
    label:"Key idea",
    tags:["Access","Choice","Timely support"]
  },
  "Increasing Access": {
    label:"Why this matters",
    tags:["Access","Human rights","Earlier support"]
  },
  "Providers Must Involve Guardians": {
    label:"Practice requirement",
    tags:["Before services end","Clinical reasons","Document"]
  },
  "Involvement Is Best Practice": {
    label:"Practice lens",
    tags:["Safe when possible","Youth-centered","Collaborative"]
  },
  "You Are Not Alone": {
    label:"Use your supports",
    tags:["Supervision","Peer consultation","Organizational policy"]
  },
  "The Work": {
    label:"Core principle",
    tags:["Process","Relationship","Impact"]
  },
  "Disclosure Requires Unique Consent": {
    label:"Keep these separate",
    tags:["Treatment consent","Disclosure consent","Records"]
  }
};

function renderConceptTable(slide){
  if (slide.title === "Who, What and When?") {
    return `
      <table class="comparison-table" aria-label="Consent age comparison">
        <thead>
          <tr><th>Service type</th><th>Age or condition</th><th>Key point</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Medical / Dental</strong></td><td>15+</td><td>May consent to services from specified licensed providers without parent or guardian consent.</td></tr>
          <tr><td><strong>Reproductive Health</strong></td><td>Any age</td><td>May access reproductive health care services and information.</td></tr>
          <tr><td><strong>Behavioral Health</strong></td><td>14+</td><td>May access outpatient mental health and substance use services.</td></tr>
        </tbody>
      </table>`;
  }
  if (slide.title === "Defining OAR and ORS") {
    return `
      <div class="definition-compare" aria-label="Comparison of Oregon statutes and administrative rules">
        <div class="definition-compare-card">
          <div class="abbr">ORS</div>
          <h3>Oregon Revised Statutes</h3>
          <p>Official laws enacted by the Oregon Legislative Assembly or through citizen initiatives.</p>
        </div>
        <div class="definition-compare-card">
          <div class="abbr">OAR</div>
          <h3>Oregon Administrative Rules</h3>
          <p>Rules created by authorized entities to implement or interpret specific statutes.</p>
        </div>
      </div>
      <div class="definition-bottom-note">
        <strong>Quick distinction:</strong> ORS establishes the law. OAR explains how authorized agencies implement or interpret it.
      </div>`;
  }
  return "";
}

function render(slide){
  let eyebrow = `<div class="eyebrow-row mono">${slide.sec}<span class="pos">${current+1} / ${DATA.length}</span></div>`;
  let audioPlayer = renderAudio(slide.audioFile, slide.startTime, slide.endTime, slide);

  // Cover Slide
  if (slide.type === "cover") {
    return `<div class="cover">
      <span class="module-tag mono">${slide.tag}</span>
      <h1>${slide.title}</h1>
      <div class="sub">${slide.sub}</div>
      ${slide.hasIntroVideo ? renderIntroVideo() : ''}
    </div>`;
  }

  // Slide 2 ("About Trauma Informed Oregon")
  if (slide.type === "about") {
    return eyebrow + `<div class="card">
      <h2 class="slide-title">${slide.title}</h2>
      ${(slide.body||[]).map(p=>`<p>${p}</p>`).join("")}
      
      <div class="trainer-profile-card">
        <img src="${MANDY_PHOTO_URL}" alt="Mandy Davis, PhD, LCSW" class="trainer-avatar">
        <div class="trainer-info">
          <h4>Mandy Davis, PhD, LCSW</h4>
          <div class="role">Instructor &amp; Primary Facilitator</div>
          <div class="org">Director, Trauma Informed Oregon</div>
        </div>
      </div>
      ${audioPlayer}
    </div>`;
  }

  // Matrix Slide (Navigating This Content)
  if (slide.type === "matrix") {
    return eyebrow + `<div class="card">
      <h2 class="slide-title">${slide.title}</h2>
      <div class="matrix-box">
        <div class="matrix-q-list">
          <h4>Reflective Questions to Consider:</h4>
          <ul>
            ${(slide.questions||[]).map(q=>`<li>${q}</li>`).join("")}
          </ul>
        </div>
        <div class="matrix-groups-title">Consider Impact Across Groups:</div>
        <div class="matrix-group-chips">
          ${(slide.groups||[]).map(g=>`<span class="matrix-chip">${g}</span>`).join("")}
        </div>
        <div style="margin-top:16px;">
          <label style="font-weight:600; color:var(--tio-navy); font-size:14.5px;">${slide.prompt||''}</label>
          <textarea class="notes" data-reflection-key="${reflectionKeyForSlide(slide)}" placeholder="Type custom groups or notes here..."></textarea>
        </div>
      </div>
      ${audioPlayer}
    </div>`;
  }

  // Disclaimer / Callout Slide
  if (slide.type === "callout") {
    return eyebrow + `<div class="card callout">
      <h2 class="slide-title">${slide.title}</h2>
      ${(slide.body||[]).map(p=>`<p>${p}</p>`).join("")}
      ${audioPlayer}
    </div>`;
  }

  // Divider Slides
  if (slide.type === "divider") {
    const visual = SECTION_VISUALS[slide.sec] || {
      number:"",
      preview:"A focused section of the learning module.",
      chips:[]
    };
    return `<div class="section-gateway">
      <div class="gateway-number" aria-hidden="true">${visual.number}</div>
      <div class="gateway-content">
        <div class="gateway-kicker">${slide.sec}</div>
        <h2 class="gateway-title">${slide.title}</h2>
        <div class="gateway-preview">${visual.preview}</div>
        <div class="gateway-chips">
          ${visual.chips.map(c=>`<span class="gateway-chip">${c}</span>`).join("")}
        </div>
      </div>
    </div>`;
  }

  // Agenda Slide
  if (slide.type === "agenda") {
    return eyebrow + `<div class="card">
      <h2 class="slide-title">${slide.title}</h2>
      <ol class="agenda-list" style="padding-left:20px;">
        ${(slide.items||[]).map(i=>`<li style="font-size:16px; margin-bottom:8px; color:var(--ink);">${i}</li>`).join("")}
      </ol>
      ${audioPlayer}
    </div>`;
  }

  // Stat / Quote Slide
  if (slide.type === "stat") {
    return eyebrow + `<div class="card">
      <blockquote style="font-size:18px; font-style:italic; color:var(--tio-navy); border-left:4px solid var(--tio-teal); padding-left:16px; margin:0 0 16px;">
        "${slide.quote}"
        <cite style="display:block; font-size:13px; font-style:normal; margin-top:6px; color:var(--ink-faint);">— ${slide.source}</cite>
      </blockquote>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:20px;">
        ${(slide.stats||[]).map(s=>`
          <div style="background:var(--card-tint); padding:16px; border-radius:10px; border:1px solid var(--line);">
            <div style="font-size:28px; font-weight:800; color:var(--tio-teal);">${s.value}</div>
            <div style="font-size:13px; color:var(--ink-soft);">${s.label}</div>
          </div>
        `).join("")}
      </div>
      ${audioPlayer}
    </div>`;
  }


  // Three Points of Emphasis: accessible reveal cards
  if (slide.type === "objectives" && slide.title === "Three Points of Emphasis") {
    const details = [
      {title:"Consent to Treatment", detail:"Who may authorize behavioral health services?"},
      {title:"Parent/Guardian Involvement", detail:"Who participates in care, when, and under what circumstances?"},
      {title:"Disclosure of Information / Access to Records and Documentation", detail:"Who may receive information, records, or documentation?"}
    ];
    return eyebrow + `<div class="card">
      <h2 class="slide-title" tabindex="-1">${slide.title}</h2>
      <p style="color:var(--ink-soft); margin:0;">Hover, use the Tab key, or select a card to see the guiding question.</p>
      <div class="reveal-grid">
        ${details.map((item,idx)=>`
          <div class="reveal-card">
            <button
              type="button"
              class="reveal-trigger"
              aria-expanded="false"
              aria-controls="reveal-detail-${idx}"
              onclick="toggleReveal(this)">
              <strong><span class="objective-number" style="display:inline-flex; margin-right:10px;">${String(idx+1).padStart(2,'0')}</span>${item.title}</strong>
              <span class="reveal-hint">Hover, focus, or select to view</span>
            </button>
            <div class="reveal-detail" id="reveal-detail-${idx}">${item.detail}</div>
          </div>
        `).join("")}
      </div>
      ${audioPlayer}
    </div>`;
  }

  // Objectives List
  if (slide.type === "objectives") {
    return eyebrow + `<div class="card">
      <h2 class="slide-title">${slide.title}</h2>
      <div class="objectives-grid ${(slide.items||[]).length % 2 ? 'is-odd' : ''}">
        ${(slide.items||[]).map((i,idx)=>`
          <div class="objective-card">
            <div class="objective-number">${String(idx+1).padStart(2,'0')}</div>
            <div class="objective-text">${i}</div>
          </div>
        `).join("")}
      </div>
      ${slide.extraList ? `
        <div style="margin-top:20px; background:var(--card-tint); padding:16px; border-radius:10px;">
          <strong style="color:var(--tio-navy);">${slide.extraList.h}</strong>
          <ul style="padding-left:20px; margin-top:8px;">
            ${slide.extraList.items.map(e=>`<li style="font-size:14.5px;">${e}</li>`).join("")}
          </ul>
        </div>
      ` : ''}
      ${audioPlayer}
    </div>`;
  }

  // Definition Cards
  if (slide.type === "definition") {
    const table = renderConceptTable(slide);
    return eyebrow + `<div class="card">
      <h2 class="slide-title">${slide.title}</h2>
      ${table || `<div>
        ${(slide.terms||[]).map(t=>`
          <div class="def-item">
            <div class="def-term">${t.term}</div>
            <div class="def-text">${t.def}</div>
          </div>
        `).join("")}
      </div>`}
      ${audioPlayer}
    </div>`;
  }

  // FAQ Cards: accessible accordion
  if (slide.type === "faq") {
    const questions = slide.qList || (slide.q ? [slide.q] : []);
    return eyebrow + `<div class="card">
      <h2 class="slide-title" tabindex="-1">${slide.title}</h2>
      <div class="accordion-list">
        ${questions.map((q,idx)=>`
          <details class="accordion" ${idx===0 ? 'open' : ''}>
            <summary>
              <span class="accordion-number">${String(idx+1).padStart(2,'0')}</span>
              <span>${q}</span>
              <span class="sr-only">Expand or collapse answer</span>
            </summary>
            <div class="accordion-body">
              ${(slide.a||[]).map(ans=>`<p>${ans}</p>`).join("")}
            </div>
          </details>
        `).join("")}
      </div>
      ${audioPlayer}
    </div>`;
  }

  // Quiz Cards: accessible accordion, one question at a time
  if (slide.type === "quiz") {
    return eyebrow + `<div class="card">
      <h2 class="slide-title" tabindex="-1">${slide.title}</h2>
      <div class="quiz-intro">${slide.intro||''}</div>
      <div class="accordion-list quiz-accordion-list">
        ${(slide.items||[]).map((q, idx)=>`
          <details class="accordion quiz-accordion" ${idx===0 ? 'open' : ''}>
            <summary>
              <span class="accordion-number">Q${String(idx+1).padStart(2,'0')}</span>
              <span>${q.q}</span>
              <span class="sr-only">Expand or collapse question</span>
            </summary>
            <div class="accordion-body">
              <div class="opt-list" style="margin-top:14px;">
                ${q.options.map((opt, oIdx)=>`
                  <button type="button" class="opt" onclick="checkAnswer(this, ${oIdx === q.correct}, '${q.why.replace(/'/g, "\'")}')">
                    ${opt}
                  </button>
                `).join('')}
              </div>
              <div class="why" role="status" aria-live="polite"></div>
            </div>
          </details>
        `).join('')}
      </div>
      ${audioPlayer}
    </div>`;
  }

  // Scenario Cards
  if (slide.type === "scenario") {
    return eyebrow + `<div class="card">
      <h2 class="slide-title">${slide.title}</h2>
      <div class="slide-body"><p>${slide.text}</p></div>
      <div style="margin-top:20px;">
        ${(slide.qa||[]).map(pair => `
          <div style="margin-bottom:16px;">
            <div style="font-weight:600; color:var(--tio-navy); margin-bottom:4px;">Q: ${pair.q}</div>
            <div style="color:var(--ink-soft); padding-left:12px; border-left:3px solid var(--tio-teal);">A: ${pair.a}</div>
          </div>
        `).join('')}
      </div>
    </div>`;
  }

  // Word Wall Slide
  if (slide.type === "wordwall") {
    return eyebrow + `<div class="card">
      <h2 class="slide-title">${slide.title}</h2>
      <div class="wordwall">
        ${(slide.items||[]).map(w=>`<span>${w}</span>`).join("")}
      </div>
      ${audioPlayer}
    </div>`;
  }

  // Reflection Prompt
  if (slide.type === "reflection") {
    return eyebrow + `<div class="card">
      <h2 class="slide-title">${slide.title}</h2>
      <div style="font-size:18px; font-weight:600; color:var(--tio-navy); margin-bottom:14px;">${slide.prompt}</div>
      <textarea class="notes" data-reflection-key="${reflectionKeyForSlide(slide)}" placeholder="Type your reflection notes here..."></textarea>
      ${slide.hints ? `<div style="margin-top:16px; font-size:14px; color:var(--ink-soft);"><strong>Consider:</strong><ul style="padding-left:20px; margin-top:6px;">${slide.hints.map(h=>`<li>${h}</li>`).join('')}</ul></div>` : ''}
    </div>`;
  }


  // True / False summary
  if (slide.type === "truefalse") {
    return eyebrow + `<div class="card">
      <h2 class="slide-title" tabindex="-1">${slide.title}</h2>
      <div class="accordion-list">
        ${(slide.qa||[]).map((item,idx)=>`
          <details class="accordion" ${idx===0 ? 'open' : ''}>
            <summary>
              <span class="accordion-number">${String(idx+1).padStart(2,'0')}</span>
              <span>${item.q}</span>
              <span class="sr-only">Expand to answer</span>
            </summary>
            <div class="accordion-body">
              <div style="margin-top:14px; font-weight:800; color:var(--tio-navy);">
                ${item.correct === 0 ? 'True' : 'False'}
              </div>
              <p>${item.a}</p>
            </div>
          </details>
        `).join("")}
      </div>
    </div>`;
  }

  // Citations and references
  if (slide.type === "citations") {
    return eyebrow + `<div class="card">
      <h2 class="slide-title" tabindex="-1">${slide.title}</h2>
      <div class="resource-grid">
        ${(slide.items||[]).map((item,idx)=>`
          <div class="resource-card">
            <h3>Reference ${String(idx+1).padStart(2,'0')}</h3>
            <p>${item}</p>
          </div>
        `).join("")}
      </div>
    </div>`;
  }

  // Key resources
  if (slide.type === "resources") {
    return eyebrow + `<div class="card">
      <h2 class="slide-title" tabindex="-1">${slide.title}</h2>
      <div class="resource-grid">
        ${(slide.items||[]).map((item,idx)=>`
          <div class="resource-card">
            <h3>${typeof item === "string" ? `Resource ${String(idx+1).padStart(2,'0')}` : item.title}</h3>
            <p>${typeof item === "string" ? item : item.desc}</p>
            ${typeof item === "object" && item.url ? `<a class="nav-btn primary" style="display:inline-block; margin-top:16px; text-decoration:none;" href="${item.url}" target="_blank" rel="noopener noreferrer">Open official resource<span class="sr-only"> (opens in a new tab)</span></a>` : ""}
          </div>
        `).join("")}
      </div>
    </div>`;
  }

  // Downloads
  if (slide.type === "downloads") {
    return eyebrow + `<div class="card">
      <h2 class="slide-title" tabindex="-1">${slide.title}</h2>
      <div class="resource-grid">
        ${(slide.items||[]).map(item=>`
          <div class="resource-card">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            <a class="nav-btn primary" style="display:inline-block; margin-top:16px; text-decoration:none;" href="${item.file}">
              Open resource
            </a>
          </div>
        `).join("")}
      </div>
    </div>`;
  }

  // Certificate of Module Review
  if (slide.type === "certificate") {
    const sectionTotal = new Set(DATA.map(item => item.sec)).size;
    const reviewedCount = viewedSections.size;
    return eyebrow + `<div class="card">
      <h2 class="slide-title" tabindex="-1">You’ve reached the end of Module 1</h2>
      <p style="color:var(--ink-soft); max-width:720px;">
        This certificate reflects that you reviewed the module. The knowledge checks are opportunities to practice and revisit key ideas. They are not graded.
      </p>

      <div class="review-summary" aria-label="Module review summary">
        <div class="review-summary-card">
          <strong>Sections reviewed this visit</strong>
          <span><span id="reviewedSectionCount">${reviewedCount}</span> of ${sectionTotal}</span>
        </div>
        <div class="review-summary-card">
          <strong>Final page reached</strong>
          <span>Yes</span>
        </div>
        <div class="review-summary-card">
          <strong>Knowledge checks</strong>
          <span>Optional practice. No score is required.</span>
        </div>
      </div>

      <div class="certificate-form">
        <label for="certificateName">Your name, as it should appear on the certificate</label>
        <input
          id="certificateName"
          class="certificate-name-input"
          type="text"
          autocomplete="name"
          maxlength="100"
          oninput="updateCertificateButton()"
          aria-describedby="certificatePrivacyNote">
        <div class="certificate-actions">
          <button type="button" class="nav-btn primary" id="createCertificateBtn" onclick="createCertificate()" disabled>
            Create my certificate
          </button>
        </div>
        <div class="certificate-note" id="certificatePrivacyNote">
          Nothing is stored. Your name, progress, and typed reflections remain only in memory while this page is open and reset when it is refreshed or closed.
        </div>
      </div>

      <div class="certificate-preview" id="certificatePreview" aria-live="polite">
        <div class="cert-org">Trauma Informed Oregon</div>
        <h3>Certificate of Module Review</h3>
        <div>Presented to</div>
        <div class="cert-name" id="certificateDisplayName"></div>
        <div>for reviewing</div>
        <div class="cert-module">Minor Consent to Behavioral Health Care</div>
        <div class="cert-sub">Module 1 · For Behavioral Health Care Providers</div>
        <div class="cert-meta">
          <span><strong>Reviewed on:</strong> <span id="certificateDate"></span></span>
        </div>
        <div class="cert-disclaimer">
          This certificate documents review of an educational module. It does not provide legal advice or continuing education credit.
        </div>
      </div>

      <div class="certificate-actions" id="certificateOutputActions" style="display:none;">
        <button type="button" class="nav-btn primary" onclick="printCertificate()">Print or save as PDF</button>
        <button type="button" class="nav-btn" onclick="downloadCertificateFile()">Save as an HTML file</button>
      </div>
    </div>`;
  }

  // Closing Slide
  if (slide.type === "closing") {
    return `<div class="divider-slide" style="text-align:center; padding:48px 24px;">
      <blockquote style="font-size:20px; font-style:italic; line-height:1.5; margin-bottom:24px; color:#FFFFFF;">
        "${slide.quote}"
      </blockquote>
      <h2 style="color:var(--tio-yellow);">${slide.title}</h2>
    </div>`;
  }

  // Page 7: balanced key-idea layout
  if (slide.type === "text" && slide.title === "Minor Consent to Behavioral Health Services") {
    return eyebrow + `<div class="card key-idea-card">
      <div>
        <h2 class="slide-title">${slide.title}</h2>
        <div class="key-idea-grid">
          <div class="key-idea-copy">
            <p>${(slide.body||[]).join(" ")}</p>
          </div>
          <div class="key-idea-points" aria-label="Key ideas">
            <div class="key-idea-point">
              <strong>Access</strong>
              <span>A pathway into behavioral health care.</span>
            </div>
            <div class="key-idea-point">
              <strong>Choice</strong>
              <span>Recognizes a young person’s role in seeking services.</span>
            </div>
            <div class="key-idea-point">
              <strong>Timely support</strong>
              <span>Reduces barriers that may delay care.</span>
            </div>
          </div>
        </div>
      </div>
      ${audioPlayer}
    </div>`;
  }

  // Other short concept slides
  if (slide.type === "text" && SHORT_SLIDE_VISUALS[slide.title]) {
    const visual = SHORT_SLIDE_VISUALS[slide.title];
    const statement = (slide.body||[]).join(" ");
    return eyebrow + `<div class="card statement-slide">
      <div class="statement-inner">
        <div class="statement-label">${visual.label}</div>
        <h2 class="slide-title">${slide.title}</h2>
        <p class="statement-text" style="font-size:28px;">${statement}</p>
        <div class="statement-foot">
          ${visual.tags.map(t=>`<span class="statement-tag">${t}</span>`).join("")}
        </div>
        ${audioPlayer}
      </div>
    </div>`;
  }

  // Consent comparison slide
  if (slide.type === "text" && slide.title === "Who, What and When?") {
    return eyebrow + `<div class="card">
      <h2 class="slide-title">${slide.title}</h2>
      ${renderConceptTable(slide)}
      ${audioPlayer}
    </div>`;
  }

  // Repeating practice pathway on the central consent/involvement/disclosure ideas
  if (slide.type === "text" && [
      "Behavioral Health Focus",
      "Substance Use Disorder Treatment"
    ].includes(slide.title)) {
    return eyebrow + `<div class="card">
      <h2 class="slide-title">${slide.title}</h2>
      <div class="concept-layout">
        <div class="concept-main">
          ${(slide.body||[]).map(p=>`<p>${p}</p>`).join("")}
          ${slide.list ? `<ul style="padding-left:20px;">${slide.list.map(li=>`<li style="margin-bottom:10px;">${li}</li>`).join("")}</ul>` : ""}
        </div>
        <div class="concept-side">
          <div class="concept-side-label">Practice pathway</div>
          <div class="concept-anchors">
            <div class="concept-anchor">Ask</div>
            <div class="concept-anchor">Assess</div>
            <div class="concept-anchor">Consult</div>
            <div class="concept-anchor">Document</div>
          </div>
        </div>
      </div>
      ${audioPlayer}
    </div>`;
  }

  // Standard Text Slide
  return eyebrow + `<div class="card">
    <h2 class="slide-title">${slide.title}</h2>
    ${(slide.body||[]).map(p=>`<p>${p}</p>`).join("")}
    ${slide.list ? `<ul style="padding-left:20px;">${slide.list.map(li=>`<li style="margin-bottom:8px;">${li}</li>`).join('')}</ul>` : ''}
    ${slide.items ? `<ul style="padding-left:20px;">${slide.items.map(li=>`<li style="margin-bottom:8px;">${typeof li === 'string' ? li : li.title || li.text}</li>`).join('')}</ul>` : ''}
    ${audioPlayer}
  </div>`;
}



function updateCertificateButton() {
  const input = document.getElementById('certificateName');
  const button = document.getElementById('createCertificateBtn');
  if (!input || !button) return;
  button.disabled = input.value.trim().length === 0;
}

function createCertificate() {
  const input = document.getElementById('certificateName');
  const preview = document.getElementById('certificatePreview');
  const displayName = document.getElementById('certificateDisplayName');
  const dateTarget = document.getElementById('certificateDate');
  const actions = document.getElementById('certificateOutputActions');

  if (!input || !preview || !displayName || !dateTarget || !actions) return;

  const name = input.value.trim();
  if (!name) {
    input.focus();
    return;
  }

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month:'long',
    day:'numeric',
    year:'numeric'
  }).format(new Date());

  displayName.textContent = name;
  dateTarget.textContent = formattedDate;
  preview.classList.add('is-visible');
  actions.style.display = 'flex';
  preview.setAttribute('tabindex','-1');
  preview.focus({preventScroll:false});
}

function printCertificate() {
  window.print();
}

function downloadCertificateFile() {
  const preview = document.getElementById('certificatePreview');
  const name = document.getElementById('certificateDisplayName')?.textContent?.trim() || 'Participant';
  if (!preview || !preview.classList.contains('is-visible')) return;

  const safeName = name.replace(/[^\w\- ]+/g,'').trim().replace(/\s+/g,'-') || 'Participant';
  const styles = `
    body{font-family:Arial,sans-serif;margin:0;padding:40px;background:#fff;color:#1D2B36}
    .certificate{border:3px solid #355166;border-radius:16px;padding:44px;text-align:center;max-width:900px;margin:0 auto}
    .org{font-size:17px;color:#006B8F;font-weight:700;text-transform:uppercase;letter-spacing:.06em}
    h1{font-size:34px;color:#355166;margin:10px 0 18px}
    .name{font-size:30px;font-weight:800;color:#223645;margin:20px 0 8px}
    .module{font-size:22px;font-weight:700;color:#355166;margin:10px 0 2px}
    .sub{color:#425866;margin-bottom:20px}
    .meta{margin:22px 0;color:#425866}
    .note{margin:24px auto 0;max-width:680px;padding-top:18px;border-top:1px solid rgba(53,81,102,.2);color:#425866;font-size:13px;line-height:1.5}
  `;

  const date = document.getElementById('certificateDate')?.textContent || '';
  const doc = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Certificate of Module Review</title><style>${styles}</style></head><body><main class="certificate"><div class="org">Trauma Informed Oregon</div><h1>Certificate of Module Review</h1><div>Presented to</div><div class="name">${escapeHTML(name)}</div><div>for reviewing</div><div class="module">Minor Consent to Behavioral Health Care</div><div class="sub">Module 1 · For Behavioral Health Care Providers</div><div class="meta"><strong>Reviewed on:</strong> ${escapeHTML(date)}</div><div class="note">This certificate documents review of an educational module. It does not provide legal advice or continuing education credit.</div></main></body></html>`;

  const blob = new Blob([doc], {type:'text/html;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${safeName}-Minor-Consent-Module-Review.html`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#039;');
}


function toggleReveal(button) {
  const card = button.closest('.reveal-card');
  const grid = card.closest('.reveal-grid');
  const willOpen = !card.classList.contains('is-open');

  if (grid) {
    grid.querySelectorAll('.reveal-card.is-open').forEach(otherCard => {
      if (otherCard !== card) {
        otherCard.classList.remove('is-open');
        const otherButton = otherCard.querySelector('.reveal-trigger');
        if (otherButton) otherButton.setAttribute('aria-expanded','false');
      }
    });
  }

  card.classList.toggle('is-open', willOpen);
  button.setAttribute('aria-expanded', String(willOpen));
}


function initializeSlideNarration() {
  document.querySelectorAll('audio.slide-narration').forEach(audio => {
    const start = Number(audio.dataset.start || 0);
    const end = audio.dataset.end ? Number(audio.dataset.end) : null;
    const status = audio.closest('.audio-player-container')?.querySelector('.audio-status');

    const setStartPosition = () => {
      if (Number.isFinite(start) && start > 0 && audio.currentTime < start) {
        try { audio.currentTime = start; } catch (e) {}
      }
    };

    audio.addEventListener('loadedmetadata', setStartPosition, {once:true});

    audio.addEventListener('play', () => {
      if (Number.isFinite(start) && audio.currentTime < start) {
        try { audio.currentTime = start; } catch (e) {}
      }
      if (status) {
        status.textContent = "";
        status.classList.remove('is-error');
      }
    });

    audio.addEventListener('timeupdate', () => {
      if (Number.isFinite(end) && audio.currentTime >= end) {
        audio.pause();
        try { audio.currentTime = start; } catch (e) {}
      }
    });

    audio.addEventListener('ended', () => {
      if (Number.isFinite(start)) {
        try { audio.currentTime = start; } catch (e) {}
      }
    });

    audio.addEventListener('error', () => {
      if (status) {
        status.textContent = "Narration could not be loaded. Confirm that the audio files are in the same folder as this module.";
        status.classList.add('is-error');
      }
    }, true);
  });
}


function initializeAccordions() {
  document.querySelectorAll('.quiz-accordion-list').forEach(list => {
    const items = list.querySelectorAll('details');
    items.forEach(item => {
      item.addEventListener('toggle', () => {
        if (item.open) {
          items.forEach(other => {
            if (other !== item) other.open = false;
          });
        }
      });
    });
  });
}

function checkAnswer(btn, isCorrect, explanation) {
  const qBox = btn.closest('.quiz-q');
  const opts = qBox.querySelectorAll('.opt');
  const whyBox = qBox.querySelector('.why');

  opts.forEach(o => o.disabled = true);
  if (isCorrect) {
    btn.classList.add('correct');
  } else {
    btn.classList.add('incorrect');
  }

  whyBox.innerHTML = `<strong>${isCorrect ? 'Correct.' : 'Review this answer.'}</strong> ${explanation}`;
  whyBox.classList.add('open');
}


const reflectionDrafts = new Map();
function saveVisibleReflection() {
  const box = document.querySelector('textarea.notes[data-reflection-key]');
  if (box) reflectionDrafts.set(box.dataset.reflectionKey, box.value);
}
function restoreVisibleReflection() {
  const box = document.querySelector('textarea.notes[data-reflection-key]');
  if (box) box.value = reflectionDrafts.get(box.dataset.reflectionKey) || "";
}
function reflectionKeyForSlide(slide) {
  return `${slide.sec}::${slide.title || current}`;
}

const viewedSections = new Set();
let current = 0;
function update(){
  const stage = document.getElementById("stage");
  stage.classList.remove("slide-stage-enter");
  void stage.offsetWidth; 
  stage.classList.add("slide-stage-enter");

  const slide = DATA[current];
  viewedSections.add(slide.sec);
  stage.innerHTML = render(slide);

  // Update Progress Bars & Sidebar Labels
  const pct = Math.round(((current + 1) / DATA.length) * 100);
  document.getElementById("sideProgress").style.width = pct + "%";
  document.getElementById("sideProgressLabel").textContent = `Slide ${current + 1} of ${DATA.length}`;
  document.getElementById("topFill").style.width = pct + "%";

  document.getElementById("prevBtn").disabled = current === 0;
  document.getElementById("nextBtn").disabled = current === DATA.length - 1;
  document.getElementById("stepCount").textContent = `${current+1} / ${DATA.length}`;
  
  // Highlight active section in sidebar
  const items = document.querySelectorAll('.sec-item');
  items.forEach(it => {
    if (it.getAttribute('data-sec') === slide.sec) {
      it.classList.add('active');
      it.setAttribute('aria-current','page');
    } else {
      it.classList.remove('active');
      it.removeAttribute('aria-current');
    }
  });

  initializeAccordions();
  initializeSlideNarration();
  restoreVisibleReflection();

  const heading = stage.querySelector('h1, h2');
  if (heading) {
    heading.setAttribute('tabindex','-1');
    requestAnimationFrame(() => heading.focus({preventScroll:true}));
  }
}

document.getElementById("prevBtn").addEventListener("click", ()=>{ if(current>0){ saveVisibleReflection(); current--; update(); }});
document.getElementById("nextBtn").addEventListener("click", ()=>{ if(current<DATA.length-1){ saveVisibleReflection(); current++; update(); }});

// Build Sidebar Navigation Items dynamically
function buildSidebarNav() {
  const nav = document.getElementById("sectionNav");
  const sections = [...new Set(DATA.map(d => d.sec))];
  
  nav.innerHTML = sections.map(sec => {
    const firstIdx = DATA.findIndex(d => d.sec === sec);
    return `<button type="button" class="sec-item" data-sec="${sec}" onclick="jumpToSlide(${firstIdx})">
      <span class="sec-dot" aria-hidden="true"></span>
      <span>${sec}</span>
    </button>`;
  }).join('');
}

function jumpToSlide(idx) {
  saveVisibleReflection();
  current = idx;
  update();
}


function auditNarrationAssignments() {
  return DATA.map((slide, index) => ({
    page: index + 1,
    title: slide.title || slide.sec,
    audioFile: slide.audioFile || null,
    startTime: slide.startTime ?? null,
    endTime: slide.endTime ?? null
  })).filter(item => item.audioFile);
}
window.auditNarrationAssignments = auditNarrationAssignments;


buildSidebarNav();
update();
