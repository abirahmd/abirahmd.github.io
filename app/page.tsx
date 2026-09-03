"use client";

import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  FileText,
  GraduationCap,
  Mail,
  Menu,
  Newspaper,
  UserRound,
  X,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { useEffect, useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const navItems = [
    { label: "About", id: "about" },
    { label: "News", id: "news" },
    { label: "Education", id: "education" },
    { label: "Experience", id: "experience" },
    { label: "Publications", id: "publications" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  /* --------------------------------------------- */
  /* ACTIVE SECTION DETECTION */
  /* --------------------------------------------- */
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      let currentSection = "about";

      for (const section of sections) {
        if (section.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      }
      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* --------------------------------------------- */
  /* SMOOTH SCROLL */
  /* --------------------------------------------- */
  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
    window.history.pushState(null, "", `#${id}`);
  };

  return (
    <main className="min-h-screen bg-[#faf9f7] text-[#1c1c1c]">
      {/* ================================================= */}
      {/* MOBILE TOP BAR */}
      {/* ================================================= */}
      <div className="sticky top-0 z-50 border-b border-neutral-200/80 bg-[#faf9f7]/95 backdrop-blur md:hidden">
        <div className="flex items-center justify-between px-5 py-4">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className="font-serif text-lg font-semibold tracking-tight"
          >
            Abir Ahmed
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 text-neutral-600"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? (
              <X size={20} strokeWidth={1.5} />
            ) : (
              <Menu size={20} strokeWidth={1.5} />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="border-t border-neutral-200 px-5 py-5">
            <div className="grid grid-cols-2 gap-y-3.5">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`text-[13px] transition-colors ${
                    activeSection === item.id
                      ? "font-medium text-neutral-950"
                      : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>

      {/* ================================================= */}
      {/* MAIN LAYOUT */}
      {/* ================================================= */}
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-5 py-8 sm:px-6 md:flex-row md:gap-10 md:py-12 lg:gap-14">
        {/* ================================================= */}
        {/* SIDEBAR */}
        {/* ================================================= */}
        <aside className="hidden w-48 shrink-0 md:sticky md:top-12 md:block md:self-start md:-ml-2 lg:-ml-4">
          <div className="space-y-6">
            {/* PROFILE IMAGE */}
            <div className="h-28 w-28 overflow-hidden rounded-full border border-neutral-200 bg-neutral-100">
              <img
                src="/abir.png"
                alt="Abir Ahmed"
                className="h-full w-full object-cover"
              />
            </div>

            {/* NAME */}
            <div>
              <h1 className="font-serif text-[26px] font-semibold leading-tight tracking-tight text-neutral-950">
                Abir Ahmed
              </h1>
              <p className="mt-1.5 text-[12px] leading-relaxed text-neutral-500">
                Researcher and Educator
              </p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4 border-y border-neutral-200 py-4">
              <a
                href="/cv"
                target="_blank"
                aria-label="Curriculum Vitae"
                title="CV"
                className="text-neutral-500 transition-colors hover:text-neutral-950"
              >
                <FileText size={16} strokeWidth={1.5} />
              </a>
              <a
                href="https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AKCpqFw3KQV_dVVeL_216tCmr5mV-XNLwP1olXNInFNLy08orFgpjPnWLjr6lzMDL29Rv_EFIYSydLILpEKi7IduIEsq&user=QR5DvcIAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                title="Google Scholar"
                aria-label="Google Scholar"
                className="text-neutral-500 transition-colors hover:text-neutral-950"
              >
                <SiGooglescholar size={16} />
              </a>
              <a
                href="https://github.com/abirahmd"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                aria-label="GitHub"
                className="text-neutral-500 transition-colors hover:text-neutral-950"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/abirahmd/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                aria-label="LinkedIn"
                className="text-neutral-500 transition-colors hover:text-neutral-950"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href="mailto:aabirsust@gmail.com"
                aria-label="Email"
                title="Email"
                className="text-neutral-500 transition-colors hover:text-neutral-950"
              >
                <Mail size={16} strokeWidth={1.5} />
              </a>
            </div>

            {/* NAVIGATION */}
            <nav className="border-l border-neutral-200 pl-4">
              <div className="space-y-0.5">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => scrollToSection(e, item.id)}
                      className={`group relative flex items-center py-[5px] text-[13.5px] transition-colors ${
                        isActive
                          ? "font-medium text-neutral-950"
                          : "text-neutral-500 hover:text-neutral-900"
                      }`}
                    >
                      <span
                        className={`absolute -left-[17px] h-[1.5px] bg-neutral-800 transition-all duration-200 ${
                          isActive ? "w-2.5" : "w-0 group-hover:w-2.5"
                        }`}
                      />
                      <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                        {item.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </nav>
          </div>
        </aside>

        {/* ================================================= */}
        {/* MAIN CONTENT */}
        {/* ================================================= */}
        <div className="min-w-0 flex-1 md:border-l md:border-neutral-200 md:pl-10 lg:pl-14">
          {/* ABOUT */}
          <section id="about" className="scroll-mt-12 pb-14">
            <SectionTitle
              icon={<UserRound size={17} strokeWidth={1.4} />}
              title="About"
            />
            <div className="mt-6 max-w-2xl space-y-4 text-[14.5px] leading-[1.8] text-neutral-600">
              <p>
                I am a Software Engineering graduate from Shahjalal University of
                Science & Technology (SUST) with research experience in speech
                synthesis and generative image modeling. My work has focused on
                zero-shot voice cloning, diffusion models, and GAN-based approaches
                for high-fidelity synthesis.
              </p>
              <p>
                My research interests center on generative modeling, controllable
                generation, and multimodal learning across speech, audio, and vision.
                I am particularly interested in developing more efficient and
                controllable generative systems while remaining open to related
                directions in deep learning.
              </p>
              <p>
                I am currently seeking graduate research opportunities where I can
                contribute to and further advance generative AI research.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Generative AI",
                "Speech Synthesis",
                "Computer Vision",
                "Multimodal Learning",
                "Deep Learning",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-[11px] text-neutral-500"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          <Divider />

          {/* NEWS */}
          <section id="news" className="scroll-mt-12 py-14">
            <SectionTitle
              icon={<Newspaper size={17} strokeWidth={1.4} />}
              title="News"
            />
            <div className="mt-7 space-y-5">
              <NewsItem date="Jun. 2026">
                Joined Sylhet Engineering College as an Adjunct Faculty Member
                in the Department of Computer Science and Engineering.
              </NewsItem>
              <NewsItem date="February. 2026">
                Diff-AS: Diffusion-Augmented Strategy for Chrysanthemum Leaf
                Classification has been accepted at IEEE QPAIN 2026.
              </NewsItem>
              <NewsItem date="Dec. 2024">
                Efficient Zero-Shot Voice Cloning for Bengali Speech Synthesis
                (Accepted, ICCIT 2024).
              </NewsItem>
              <NewsItem date="April. 2024">
                Graduated from Shahjalal University of Science and Technology.
              </NewsItem>
            </div>
          </section>

          <Divider />

          {/* EDUCATION */}
          <section id="education" className="scroll-mt-12 py-14">
            <SectionTitle
              icon={<GraduationCap size={17} strokeWidth={1.4} />}
              title="Education"
            />
            <div className="mt-7 space-y-7">
              <TimelineItem
                year="Feb 2019 – April 2024"
                title="B.Sc. in Software Engineering"
                organization="Shahjalal University of Science & Technology (SUST)"
                description="Sylhet, Bangladesh"
              />
            </div>
          </section>

          <Divider />

          {/* EXPERIENCE */}
          <section id="experience" className="scroll-mt-12 py-14">
            <SectionTitle
              icon={<BriefcaseBusiness size={17} strokeWidth={1.4} />}
              title="Experience"
            />
            <div className="mt-7 space-y-8">
              <TimelineItem
                year="2026 – Present"
                title="Adjunct Lecturer"
                organization="Sylhet Engineering College · Department of Computer Science & Engineering"
                description="Teaching undergraduate courses in computer science and engineering, with a focus on supporting students’ technical and academic development."
              />
              <TimelineItem
                year="April 2024 – August 2024"
                title="Research Intern"
                organization="Advanced Machine Intelligence Research Lab (AMIRL)"
                description="Conducted research on generative image synthesis using GANs and diffusion models, with emphasis on high-fidelity medical image generation. This work contributed to the paper “Percept-Diff: Innovations in Stable Diffusion for High-Fidelity IHC Image Generation,” accepted at IEEE 3ICT 2024."
              />
              <TimelineItem
                year="February 2023 – August 2023"
                title="Machine Learning Intern"
                organization="LogiQbits"
                description="Developed time-series forecasting models using LSTM, GRU, and Random Forest. Retrieved, analyzed, and visualized sales data from a large-scale database to support business insights."
              />
            </div>
          </section>

          <Divider />

          {/* PUBLICATIONS */}
          <section id="publications" className="scroll-mt-12 py-14">
            <SectionTitle
              icon={<BookOpen size={17} strokeWidth={1.4} />}
              title="Publications"
            />
            <div className="mt-7 space-y-9">
              <Publication
                number="01"
                title="Diff-AS: Diffusion-Augmented Strategy for Chrysanthemum Leaf Classification"
                authors={
                  <>
                    S. P. Shaha, <strong> Abir Ahmed, </strong> M. H. Ahmad, A. B. Akhi, M. H. Badhan and M. Atiqur Rahman
                  </>
                }
                venue="Accepted · IEEE QPAIN 2026"
                links={[
                  {
                    label: "Paper",
                    href: "https://ieeexplore.ieee.org/abstract/document/11546640",
                  },
                ]}
              />
              <Publication
                number="02"
                title="Efficient Zero-Shot Voice Cloning for Bengali Speech Synthesis"
                authors={
                  <>
                    <strong>Abir Ahmed,</strong> Prapti Roy, Durjoy Chandra Paul, M. Shahidur Rahman
                  </>
                }
                venue="IEEE ICCIT 2024"
                links={[
                  {
                    label: "Paper",
                    href: "https://ieeexplore.ieee.org/abstract/document/11022026",
                  },
                  {
                    label: "Demo",
                    href: "https://bengali-zero-shot-voice-cloning.netlify.app/",
                  },
                ]}
              />
              <Publication
                number="03"
                title="Percept-Diff: Innovations in Stable Diffusion for High-Fidelity IHC Image Generation in HER2 Breast Cancer Incorporating Perceptual Loss"
                authors={
                  <>
                    Md. Naimur Asif Borno, Md. Tanvir Raihan, <strong> Abir Ahmed, </strong> Md Sakib Hossain Shovon, Jungpil Shin, M.F. Mridha
                  </>
                }
                venue="IEEE 3ICT 2024"
                links={[
                  {
                    label: "Paper",
                    href: "https://ieeexplore.ieee.org/abstract/document/10824425",
                  },
                ]}
              />
              <Publication
                number="04"
                title="Systematic Benchmarking and Hyperparameter Ablation of Lightweight Vision Transformers for Blood Cancer Detection from Peripheral Smear Images"
                authors={
                  <>
                     Sonjoy, <strong>Abir Ahmed,</strong> A. B. Akhi
                  </>
                }
                venue="Submitted · ICRPSET 2026"
                links={[
                  {
                    label: "Venue",
                    href: "https://csa.ru.ac.bd/icrpset/2026/",
                  },
                ]}
              />
              <Publication
                number="05"
                title="Exploring the Barriers Preventing Women in Bangladesh from Pursuing Political Leadership Roles: Dataset Creation and Machine Learning Analysis"
                authors={
                  <>
                    {/* <strong>Abir Ahmed</strong> (Supervisor) */}
                  </>
                }
                venue="Will be submitted in ACL Workshop 2027 · Corresponding Author "
                links={[
                  {
                    label: "Venue",
                    href: "https://www.aclweb.org/portal/content/joint-call-workshops-proposals-2027",
                  },
                ]}
              />
              <Publication
                number="06"
                title="DCT-GAN: A Diversity-Controlled Training Strategy for High-Diversity Brain Tumor MRI Synthesis"
                authors={
                  <>
                    {/* <strong>Abir Ahmed</strong> */}
                  </>
                }
                venue="Manuscript in Preparation · First Author"
                links={[]}
              />
              <Publication
                number="07"
                title="BanglaS2S: A Large-Scale and Quality-Controlled Bangla–English Speech-to-Speech Parallel Corpus for Speech-to-Speech Translation"
                authors={
                  <>
                    {/* <strong>Abir Ahmed</strong>, et al. */}
                  </>
                }
                venue="Manuscript in Preparation · Second Author"
                links={[]}
              />
            </div>
          </section>

          <Divider />

          {/* PROJECTS */}
          <section id="projects" className="scroll-mt-12 py-14">
            <SectionTitle
              icon={<Code2 size={17} strokeWidth={1.4} />}
              title="Projects"
            />
            <div className="mt-7 grid gap-5">
              <ProjectCard
                title="Stock Market Forecasting"
                year="2023"
                category="Internship Project"
                description="Built and evaluated time-series forecasting models using LSTM, GRU, and Random Forest for stock market prediction."
                links={[]}
              />
              <ProjectCard
                title="Sales-Sense"
                year="2023"
                category="Internship Project"
                description="Designed a data pipeline to retrieve, analyze, and visualize sales data from a large database, supporting decision-making through interactive insights."
                links={[]}
              />
            </div>
          </section>

          <Divider />

          {/* SKILLS */}
          <section id="skills" className="scroll-mt-12 py-14">
            <SectionTitle
              icon={<Code2 size={17} strokeWidth={1.4} />}
              title="Skills & Languages"
            />
            <div className="mt-7 max-w-2xl space-y-4 text-[13.5px] leading-relaxed">
              <Skill
                title="Programming"
                value="Python · PyTorch · C · C++ · Java · JavaScript"
              />
              <Skill
                title="Expertise"
                value="Zero-shot Voice Cloning · Image Generation · Speech-to-Speech Translation · Diffusion Models · GANs"
              />
              <Skill
                title="Languages"
                value="Bangla (Native) · English (IELTS 6.5 Overall)"
              />
            </div>
          </section>

          <Divider />

          {/* CONTACT */}
          <section id="contact" className="scroll-mt-12 py-14">
            <div className="rounded-lg border border-neutral-200 bg-white px-6 py-8 md:px-8">
              <div className="flex items-center gap-3">
                <Mail
                  size={17}
                  strokeWidth={1.4}
                  className="text-neutral-400"
                />
                <h2 className="font-serif text-xl font-semibold tracking-tight text-neutral-950">
                  Contact
                </h2>
              </div>
              <p className="mt-4 max-w-xl text-[14.5px] leading-[1.8] text-neutral-600">
                I am open to research collaborations, graduate research
                opportunities, and discussions related to generative AI, speech,
                vision, and multimodal learning.
              </p>
              <a
                href="mailto:aabirsust@gmail.com"
                className="mt-5 inline-flex items-center gap-2 text-[13.5px] font-medium text-neutral-900 underline underline-offset-4 transition-colors hover:text-neutral-500"
              >
                aabirsust@gmail.com
                <ArrowUpRight size={13} strokeWidth={1.5} />
              </a>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="border-t border-neutral-200 py-8 text-center">
            <p className="text-[11px] tracking-wide text-neutral-400">
              © {new Date().getFullYear()} Abir Ahmed
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}

/* ================================================= */
/* COMPONENTS */
/* ================================================= */

function Divider() {
  return <div className="border-t border-neutral-200" />;
}

function SectionTitle({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-neutral-400">{icon}</span>
      <h2 className="font-serif text-xl font-semibold tracking-tight text-neutral-950">
        {title}
      </h2>
    </div>
  );
}

function NewsItem({
  date,
  children,
}: {
  date: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-6 text-[13.5px] leading-relaxed">
      <span className="w-[5.5rem] shrink-0 font-mono text-[10.5px] text-neutral-400">
        {date}
      </span>
      <p className="text-neutral-600">{children}</p>
    </div>
  );
}

function TimelineItem({
  year,
  title,
  organization,
  description,
}: {
  year: string;
  title: string;
  organization: string;
  description?: string;
}) {
  return (
    <div className="grid grid-cols-[6.5rem_1fr] gap-5">
      <span className="pt-0.5 font-mono text-[10.5px] text-neutral-400">
        {year}
      </span>
      <div>
        <h3 className="text-[14.5px] font-semibold text-neutral-900">
          {title}
        </h3>
        <p className="mt-1 text-[13.5px] text-neutral-600">{organization}</p>
        {description && (
          <p className="mt-2 max-w-xl text-[13.5px] leading-relaxed text-neutral-500">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

function Publication({
  number,
  title,
  authors,
  venue,
  links,
}: {
  number: string;
  title: string;
  authors: React.ReactNode;
  venue: string;
  links: { label: string; href: string }[];
}) {
  return (
    <article className="group grid grid-cols-[2rem_1fr] gap-4">
      <span className="pt-1 font-mono text-[10.5px] text-neutral-300">
        {number}
      </span>
      <div>
        <h3 className="text-[14.5px] font-semibold leading-snug text-neutral-900 transition-colors group-hover:text-neutral-600">
          {title}
        </h3>
        <p className="mt-1.5 text-[12.5px] leading-relaxed text-neutral-500">
          {authors}
        </p>
        <p className="mt-1 text-[11.5px] italic text-neutral-400">{venue}</p>
        {links.length > 0 && (
          <div className="mt-3 flex gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-1 text-[11.5px] font-medium text-neutral-500 underline underline-offset-4 transition-colors hover:text-neutral-900"
              >
                {link.label}
                <ArrowUpRight size={11} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function ProjectCard({
  title,
  year,
  category,
  description,
  links,
}: {
  title: string;
  year: string;
  category: string;
  description: string;
  links: { label: string; href: string }[];
}) {
  return (
    <article className="rounded-lg border border-neutral-200 bg-white p-5 transition hover:border-neutral-300">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-[14.5px] font-semibold text-neutral-900">
          {title}
        </h3>
        <span className="shrink-0 font-mono text-[10.5px] text-neutral-400">
          {year}
        </span>
      </div>
      <p className="mt-1.5 font-mono text-[9.5px] uppercase tracking-wider text-neutral-400">
        {category}
      </p>
      <p className="mt-3 text-[13.5px] leading-[1.75] text-neutral-600">
        {description}
      </p>
      {links.length > 0 && (
        <div className="mt-4 flex gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-1 text-[11.5px] font-medium text-neutral-500 transition-colors hover:text-neutral-900"
            >
              {link.label}
              <ArrowUpRight size={11} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

function Skill({ title, value }: { title: string; value: string }) {
  return (
    <div className="grid grid-cols-[7.5rem_1fr] gap-4">
      <span className="font-medium text-neutral-900">{title}</span>
      <span className="text-neutral-500">{value}</span>
    </div>
  );
}