"use client";

import {
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  FileText,
  GraduationCap,
  Mail,
  Menu,
  Newspaper,
  Microscope,
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
    { label: "Research", id: "research" },
    { label: "Projects", id: "projects" },
    { label: "Activities", id: "activities" },
    { label: "Awards", id: "awards" },
    { label: "Skills", id: "skills" },
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

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMobileMenuOpen(false);

    window.history.pushState(null, "", `#${id}`);
  };

  return (
    <main className="min-h-screen bg-[#fbfbfa] text-[#252525]">

      {/* ================================================= */}
      {/* MOBILE TOP BAR */}
      {/* ================================================= */}

      <div className="sticky top-0 z-50 border-b border-neutral-200 bg-[#fbfbfa]/95 backdrop-blur md:hidden">
        <div className="flex items-center justify-between px-5 py-4">

          <a
            href="#about"
            onClick={(event) =>
              scrollToSection(event, "about")
            }
            className="font-serif text-lg font-semibold tracking-tight"
          >
            Abir Ahmed
          </a>

          <button
            onClick={() =>
              setMobileMenuOpen(!mobileMenuOpen)
            }
            className="p-1 text-neutral-700"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? (
              <X
                size={21}
                strokeWidth={1.5}
              />
            ) : (
              <Menu
                size={21}
                strokeWidth={1.5}
              />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="border-t border-neutral-200 px-5 py-4">
            <div className="grid grid-cols-2 gap-y-3">

              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) =>
                    scrollToSection(
                      event,
                      item.id
                    )
                  }
                  className={`text-sm transition-colors ${activeSection === item.id
                      ? "font-medium text-neutral-950"
                      : "text-neutral-600 hover:text-neutral-950"
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

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-6 sm:px-8 md:flex-row md:gap-12 md:py-8 lg:gap-16">

        {/* ================================================= */}
        {/* SIDEBAR */}
        {/* ================================================= */}

        <aside className="hidden w-56 shrink-0 md:sticky md:top-10 md:block md:self-start">

          <div className="space-y-5">

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

              <h1 className="font-serif text-[27px] font-semibold tracking-tight text-neutral-950">
                Abir Ahmed
              </h1>

              <p className="mt-1 text-[12px] leading-relaxed text-neutral-500">
                Researcher and Educator
              </p>

            </div>

            {/* PROFILE INFORMATION

            <div className="space-y-1 text-[12px] leading-relaxed text-neutral-600">

              <p className="font-medium text-neutral-900">
                Generative AI
              </p>

              <p>
                Speech & Audio · Computer Vision
              </p>

              <p>
                Shahjalal University of Science & Technology
              </p>

              <p className="text-neutral-400">
                Sylhet, Bangladesh
              </p>

            </div> */}

            {/* ================================================= */}
            {/* SOCIAL ICONS */}
            {/* ================================================= */}

            <div className="flex items-center gap-4 border-y border-neutral-200 py-4">

              {/* CV */}

              <a
                href="/cv"
                target='_blank'
                aria-label="Curriculum Vitae"
                title="CV"
                className="text-neutral-500 transition-colors duration-200 hover:text-neutral-950"
              >
                <FileText
                  size={17}
                  strokeWidth={1.5}
                />
              </a>

              {/* GOOGLE SCHOLAR */}

              <a
                href="https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AKCpqFw3KQV_dVVeL_216tCmr5mV-XNLwP1olXNInFNLy08orFgpjPnWLjr6lzMDL29Rv_EFIYSydLILpEKi7IduIEsq&user=QR5DvcIAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                title="Google Scholar"
                aria-label="Google Scholar"
                className="text-neutral-500 transition-colors duration-200 hover:text-neutral-950"
              >
                <SiGooglescholar size={17} />
              </a>

              {/* GITHUB */}

              <a
                href="https://github.com/abirahmed56"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                aria-label="GitHub"
                className="text-neutral-500 transition-colors duration-200 hover:text-neutral-950"
              >
                <FaGithub size={17} />
              </a>

              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/in/abirahmed6/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                aria-label="LinkedIn"
                className="text-neutral-500 transition-colors duration-200 hover:text-neutral-950"
              >
                <FaLinkedin size={17} />
              </a>

              {/* EMAIL */}

              <a
                href="mailto:abirahmed.academic@gmail.com"
                aria-label="Email"
                title="Email"
                className="text-neutral-500 transition-colors duration-200 hover:text-neutral-950"
              >
                <Mail
                  size={17}
                  strokeWidth={1.5}
                />
              </a>

            </div>

            {/* ================================================= */}
            {/* NAVIGATION */}
            {/* ================================================= */}

            <nav className="mt-6 border-l border-neutral-200 pl-4">

              {/* <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.16em] text-neutral-400">
                Navigation
              </p> */}

              <div className="space-y-0.5">

                {navItems.map((item) => {

                  const isActive =
                    activeSection === item.id;

                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(event) =>
                        scrollToSection(
                          event,
                          item.id
                        )
                      }
                      className={`group relative flex items-center py-[4px] text-[14px] transition-colors duration-200 ${isActive
                          ? "font-medium text-neutral-950"
                          : "text-neutral-500 hover:text-neutral-950"
                        }`}
                    >

                      {/* ACTIVE / HOVER LINE */}

                      <span
                        className={`absolute -left-[17px] bg-neutral-800 transition-all duration-200 ${isActive
                            ? "w-3"
                            : "w-0 group-hover:w-3"
                          }`}
                      />

                      {/* LABEL */}

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

          {/* ================================================= */}
          {/* ABOUT */}
          {/* ================================================= */}

          <section
            id="about"
            className="scroll-mt-10 pb-12 md:pb-14"
          >

            <div className="mb-7 flex items-center gap-3">

              <UserRound
                size={18}
                strokeWidth={1.4}
                className="text-neutral-400"
              />

              <h2 className="font-serif text-xl font-semibold tracking-tight text-neutral-950">
                About
              </h2>

            </div>

            <div className="max-w-2xl space-y-4 text-[14px] leading-[1.85] text-neutral-600">

              <p>
                I am a Software Engineering graduate from
                Shahjalal University of Science & Technology
                (SUST), with research interests in generative
                artificial intelligence, speech and audio
                synthesis, computer vision, and multimodal
                learning.
              </p>

              <p>
                My research experience focuses on developing
                and evaluating generative models for speech and
                image data, with particular interest in
                controllable generation, zero-shot synthesis,
                representation learning, and data-efficient
                learning.
              </p>

              <p>
                I am interested in graduate research
                opportunities where I can contribute to the
                development of generative and multimodal
                learning systems.
              </p>

            </div>

            <div className="mt-6 flex flex-wrap gap-2">

              {[
                "Generative AI",
                "Speech Synthesis",
                "Computer Vision",
                "Multimodal Learning",
                "Deep Learning",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-neutral-200 px-3 py-1 text-[11px] text-neutral-500"
                >
                  {item}
                </span>
              ))}

            </div>

          </section>

          <Divider />

          {/* ================================================= */}
          {/* NEWS */}
          {/* ================================================= */}

          <section
            id="news"
            className="scroll-mt-10 py-12 md:py-14"
          >

            <SectionTitle
              icon={
                <Newspaper
                  size={18}
                  strokeWidth={1.4}
                />
              }
              title="News"
            />

            <div className="mt-7 space-y-5">

              <NewsItem
                date="Aug. 2026"
                children={
                  <>
                    Preparing applications for graduate study
                    focused on generative AI and multimodal
                    learning.
                  </>
                }
              />

              <NewsItem
                date="Jun. 2026"
                children={
                  <>
                    Joined Sylhet Engineering College as an
                    Adjunct Faculty Member in the Department
                    of Computer Science and Engineering.
                  </>
                }
              />
              <NewsItem
                date="February. 2026"
                children={
                  <>
                    Diff-AS: Diffusion-Augmented Strategy for Chrysanthemum
                    Leaf Classification has been (Accepted, IEEE QPAIN 2026!).
                  </>
                }
              />
              <NewsItem
                date="Dec. 2024"
                children={
                  <>
                    Efficient Zero-Shot Voice Cloning for Bengali Speech Synthesis (Accepted, ICCIT 2024).
                  </>
                }
              />
              <NewsItem
                date="April. 2024"
                children={
                  <>
                    Graduated from Shahjalal University of Science
                    and Technology.
                  </>
                }
              />

            </div>

          </section>

          <Divider />

          {/* ================================================= */}
          {/* EDUCATION */}
          {/* ================================================= */}

          <section
            id="education"
            className="scroll-mt-10 py-12 md:py-14"
          >

            <SectionTitle
              icon={
                <GraduationCap
                  size={18}
                  strokeWidth={1.4}
                />
              }
              title="Education"
            />

            <div className="mt-7 space-y-7">

              <TimelineItem
                year="Completed"
                title="B.Sc. in Software Engineering"
                organization="Shahjalal University of Science & Technology (SUST)"
                description="Sylhet, Bangladesh"
              />

            </div>

          </section>

          <Divider />

          {/* ================================================= */}
          {/* EXPERIENCE */}
          {/* ================================================= */}

          <section
            id="experience"
            className="scroll-mt-10 py-12 md:py-14"
          >

            <SectionTitle
              icon={
                <BriefcaseBusiness
                  size={18}
                  strokeWidth={1.4}
                />
              }
              title="Experience"
            />

            <div className="mt-7 space-y-8">

              <TimelineItem
                year="2026 – Present"
                title="Adjunct Faculty Member"
                organization="Sylhet Engineering College · Department of Computer Science & Engineering"
                description="Teaching undergraduate computer science and engineering courses while contributing to students' technical and academic development."
              />
              <TimelineItem
                year="April 2024 – Aug 2024"
                title="Research Intern"
                organization="Advanced Machine Intelligence Research Lab (AMIRL)"
                description="Conducted research on generative image synthesis using GANs and diffusion models, focusing on high-fidelity medical image generation. The work resulted in “Percept-Diff: Innovations in Stable Diffusion for High-Fidelity IHC Image Generation,” accepted at 3ICT 2024."
              />

              <TimelineItem
                year="Feb 2023 – Aug 2023"
                title="Internship"
                organization="LogiQbits"
                description="Developed machine-learning models using LSTM, GRU, and Random Forest for time-series forecasting, and retrieved, analyzed and visualized sales data. from a large database "
              />

            </div>

          </section>

          <Divider />

          {/* ================================================= */}
          {/* PUBLICATIONS */}
          {/* ================================================= */}

          <section
            id="publications"
            className="scroll-mt-10 py-12 md:py-14"
          >

            <SectionTitle
              icon={
                <BookOpen
                  size={18}
                  strokeWidth={1.4}
                />
              }
              title="Publications"
            />

            <div className="mt-7 space-y-8">

              <Publication
                number="01"
                title="Diff-AS: Diffusion-Augmented Strategy for Chrysanthemum Leaf Classification"
                authors={
                  <>
                    <strong>
                    Sonjoy Prosad Shaha, Abir Ahmed, Md Hasan Ahmad, Amatul Bushra Akhi, Mahmudul Hasan Badhan, Md. Atiqur Rahman
                    </strong>
                    , et al.
                  </>
                }
                venue="IEEE QPAIN 2026"
                links={[
                  {
                    label: "Paper",
                    href: "#",
                  },
                  {
                    label: "Code",
                    href: "#",
                  },
                ]}
              />

              <Publication
                number="02"
                title="A High-Quality Bangla–English Speech-to-Speech Parallel Corpus for Speech Translation Research"
                authors={
                  <>
                    <strong>
                      Abir Ahmed Sohan
                    </strong>
                    , et al.
                  </>
                }
                venue="2026"
                links={[
                  {
                    label: "Paper",
                    href: "#",
                  },
                  {
                    label: "Dataset",
                    href: "#",
                  },
                ]}
              />

            </div>

          </section>

          <Divider />

          {/* ================================================= */}
          {/* RESEARCH */}
          {/* ================================================= */}

          <section
            id="research"
            className="scroll-mt-10 py-12 md:py-14"
          >

            <SectionTitle
              icon={
                <Microscope
                  size={18}
                  strokeWidth={1.4}
                />
              }
              title="Research"
            />

            <div className="mt-7 space-y-8">

              <ResearchItem
                title="Zero-Shot Bengali Voice Cloning"
                tags="Speech Synthesis · Voice Cloning · Low-Resource Speech"
                description="Investigated zero-shot voice cloning for Bengali speech using neural speech synthesis models, with emphasis on speaker representation, speaker preservation, and controllable synthesis."
              />

              <ResearchItem
                title="Generative Image Modeling"
                tags="GANs · Image Generation · Medical Imaging"
                description="Explored generative models for image synthesis and evaluated generated medical images using image-quality, diversity, and embedding-based metrics."
              />

              <ResearchItem
                title="Multimodal Generative AI"
                tags="Multimodal Learning · Generative Models · Representation Learning"
                description="Interested in the intersection of language, speech, audio, and visual modalities, particularly controllable and data-efficient generative systems."
              />

            </div>

          </section>

          <Divider />

          {/* ================================================= */}
          {/* PROJECTS */}
          {/* ================================================= */}

          <section
            id="projects"
            className="scroll-mt-10 py-12 md:py-14"
          >

            <SectionTitle
              icon={
                <Code2
                  size={18}
                  strokeWidth={1.4}
                />
              }
              title="Projects"
            />

            <div className="mt-7 grid gap-5">

              <ProjectCard
                title="Bengali Zero-Shot Voice Cloning"
                year="2026"
                category="Speech Synthesis · PyTorch · XTTS"
                description="Developed a Bengali speech synthesis and zero-shot voice cloning pipeline and investigated speaker preservation using neural speaker embeddings."
                links={[
                  {
                    label: "GitHub",
                    href: "#",
                  },
                  {
                    label: "Details",
                    href: "#",
                  },
                ]}
              />

              <ProjectCard
                title="Bangla–English Speech-to-Speech Corpus"
                year="2026"
                category="Speech Translation · Dataset · TTS"
                description="Constructed a parallel Bangla–English speech-to-speech corpus for speech translation research and evaluated transcript and speaker consistency."
                links={[
                  {
                    label: "Dataset",
                    href: "#",
                  },
                  {
                    label: "GitHub",
                    href: "#",
                  },
                ]}
              />

              <ProjectCard
                title="Medical Image Generation with GANs"
                year="2025"
                category="Generative Models · GANs · Computer Vision"
                description="Implemented a GAN-based image generation pipeline for grayscale brain MRI data and investigated image quality and diversity using FID and embedding-based evaluation."
                links={[
                  {
                    label: "GitHub",
                    href: "#",
                  },
                ]}
              />

            </div>

          </section>

          <Divider />

          {/* ================================================= */}
          {/* ACTIVITIES */}
          {/* ================================================= */}

          <section
            id="activities"
            className="scroll-mt-10 py-12 md:py-14"
          >

            <SectionTitle
              icon={
                <UserRound
                  size={18}
                  strokeWidth={1.4}
                />
              }
              title="Activities"
            />

            <ul className="mt-7 max-w-2xl space-y-3 text-[14px] leading-relaxed text-neutral-600">

              <li className="flex gap-3">

                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />

                Academic teaching and mentoring in Computer
                Science and Engineering.

              </li>

              <li className="flex gap-3">

                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />

                Research and development in deep learning and
                generative AI.

              </li>

              <li className="flex gap-3">

                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />

                Participation in academic and technical
                research activities.

              </li>

            </ul>

          </section>

          <Divider />

          {/* ================================================= */}
          {/* AWARDS */}
          {/* ================================================= */}

          <section
            id="awards"
            className="scroll-mt-10 py-12 md:py-14"
          >

            <SectionTitle
              icon={
                <Award
                  size={18}
                  strokeWidth={1.4}
                />
              }
              title="Awards"
            />

            <p className="mt-7 text-[14px] text-neutral-500">

              Add verified scholarships, fellowships, academic
              awards, and competition achievements here.

            </p>

          </section>

          <Divider />

          {/* ================================================= */}
          {/* SKILLS */}
          {/* ================================================= */}

          <section
            id="skills"
            className="scroll-mt-10 py-12 md:py-14"
          >

            <SectionTitle
              icon={
                <Code2
                  size={18}
                  strokeWidth={1.4}
                />
              }
              title="Skills"
            />

            <div className="mt-7 max-w-2xl space-y-4 text-[13px] leading-relaxed">

              <Skill
                title="Programming"
                value="Python · C++ · SQL · TypeScript"
              />

              <Skill
                title="Deep Learning"
                value="PyTorch · TensorFlow · Hugging Face Transformers"
              />

              <Skill
                title="Speech & Audio"
                value="Torchaudio · TTS · Voice Cloning · Speech Synthesis"
              />

              <Skill
                title="Computer Vision"
                value="CNNs · Vision Transformers · GANs · Image Generation"
              />

              <Skill
                title="Tools"
                value="Git · GitHub · VS Code · Google Colab · Kaggle"
              />

            </div>

          </section>

          <Divider />

          {/* ================================================= */}
          {/* CONTACT */}
          {/* ================================================= */}

          <section
            id="contact"
            className="scroll-mt-10 py-12 md:py-14"
          >

            <div className="rounded-xl border border-neutral-200 bg-white px-6 py-8 md:px-8">

              <div className="flex items-center gap-3">

                <Mail
                  size={18}
                  strokeWidth={1.4}
                  className="text-neutral-400"
                />

                <h2 className="font-serif text-xl font-semibold text-neutral-950">
                  Contact
                </h2>

              </div>

              <p className="mt-4 max-w-xl text-[14px] leading-[1.8] text-neutral-600">

                I am open to research collaborations, graduate
                research opportunities, and discussions related
                to generative AI, speech, vision, and multimodal
                learning.

              </p>

              <a
                href="mailto:abirahmed.academic@gmail.com"
                className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-500"
              >

                abirahmed.academic@gmail.com

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                />

              </a>

            </div>

          </section>

          {/* ================================================= */}
          {/* FOOTER */}
          {/* ================================================= */}

          <footer className="border-t border-neutral-200 py-7 text-center">

            <p className="text-[11px] text-neutral-400">
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
  return (
    <div className="border-t border-neutral-200" />
  );
}

/* ================================================= */
/* SECTION TITLE */
/* ================================================= */

function SectionTitle({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">

      <span className="text-neutral-400">
        {icon}
      </span>

      <h2 className="font-serif text-xl font-semibold tracking-tight text-neutral-950">
        {title}
      </h2>

    </div>
  );
}

/* ================================================= */
/* NEWS ITEM */
/* ================================================= */

function NewsItem({
  date,
  children,
}: {
  date: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-5 text-[13px] leading-relaxed">

      <span className="w-20 shrink-0 font-mono text-[10px] text-neutral-400">
        {date}
      </span>

      <p className="text-neutral-600">
        {children}
      </p>

    </div>
  );
}

/* ================================================= */
/* TIMELINE ITEM */
/* ================================================= */

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
    <div className="grid grid-cols-[90px_1fr] gap-5">

      <span className="pt-1 font-mono text-[10px] text-neutral-400">
        {year}
      </span>

      <div>

        <h3 className="text-[14px] font-semibold text-neutral-900">
          {title}
        </h3>

        <p className="mt-1 text-[13px] text-neutral-600">
          {organization}
        </p>

        {description && (
          <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-neutral-500">
            {description}
          </p>
        )}

      </div>

    </div>
  );
}

/* ================================================= */
/* PUBLICATION */
/* ================================================= */

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
  links: {
    label: string;
    href: string;
  }[];
}) {
  return (
    <article className="group grid grid-cols-[34px_1fr] gap-4">

      <span className="pt-1 font-mono text-[10px] text-neutral-300">
        {number}
      </span>

      <div>

        <h3 className="text-[14px] font-semibold leading-relaxed text-neutral-900 transition-colors group-hover:text-neutral-600">
          {title}
        </h3>

        <p className="mt-1.5 text-[12px] leading-relaxed text-neutral-500">
          {authors}
        </p>

        <p className="mt-1 text-[11px] italic text-neutral-400">
          {venue}
        </p>

        <div className="mt-3 flex gap-4">

          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-1 text-[11px] font-medium text-neutral-500 underline underline-offset-4 transition-colors hover:text-neutral-950"
            >

              {link.label}

              <ArrowUpRight
                size={11}
                strokeWidth={1.5}
              />

            </a>
          ))}

        </div>

      </div>

    </article>
  );
}

/* ================================================= */
/* RESEARCH ITEM */
/* ================================================= */

function ResearchItem({
  title,
  tags,
  description,
}: {
  title: string;
  tags: string;
  description: string;
}) {
  return (
    <article className="border-l border-neutral-200 pl-5">

      <h3 className="text-[14px] font-semibold text-neutral-900">
        {title}
      </h3>

      <p className="mt-1.5 font-mono text-[9px] uppercase tracking-wide text-neutral-400">
        {tags}
      </p>

      <p className="mt-3 max-w-2xl text-[13px] leading-[1.8] text-neutral-600">
        {description}
      </p>

    </article>
  );
}

/* ================================================= */
/* PROJECT CARD */
/* ================================================= */

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
  links: {
    label: string;
    href: string;
  }[];
}) {
  return (
    <article className="rounded-lg border border-neutral-200 bg-white p-5 transition hover:border-neutral-300 hover:shadow-[0_5px_20px_rgba(0,0,0,0.035)]">

      <div className="flex items-start justify-between gap-5">

        <h3 className="text-[14px] font-semibold text-neutral-900">
          {title}
        </h3>

        <span className="shrink-0 font-mono text-[10px] text-neutral-400">
          {year}
        </span>

      </div>

      <p className="mt-1.5 font-mono text-[9px] uppercase tracking-wide text-neutral-400">
        {category}
      </p>

      <p className="mt-3 text-[13px] leading-[1.75] text-neutral-600">
        {description}
      </p>

      <div className="mt-4 flex gap-4">

        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="inline-flex items-center gap-1 text-[11px] font-medium text-neutral-500 transition-colors hover:text-neutral-950"
          >

            {link.label}

            <ArrowUpRight
              size={11}
              strokeWidth={1.5}
            />

          </a>
        ))}

      </div>

    </article>
  );
}

/* ================================================= */
/* SKILL */
/* ================================================= */

function Skill({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="grid grid-cols-[120px_1fr] gap-4">

      <span className="font-medium text-neutral-900">
        {title}
      </span>

      <span className="text-neutral-500">
        {value}
      </span>

    </div>
  );
}