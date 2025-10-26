"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Terminal, Zap, ViewIcon } from "lucide-react"
import Link from "next/link"

const MatrixRain = () => {
  const [drops, setDrops] = useState<Array<{ id: number; left: number; delay: number }>>([])

  useEffect(() => {
    const newDrops = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
    }))
    setDrops(newDrops)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-10">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute text-primary font-mono text-sm"
          style={{ left: `${drop.left}%` }}
          initial={{ y: -100, opacity: 1 }}
          animate={{ y: "100vh", opacity: 0 }}
          transition={{
            duration: 3,
            delay: drop.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {Math.random().toString(36).substring(2, 15)}
        </motion.div>
      ))}
    </div>
  )
}

const TypingEffect = ({ text, className = "" }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return <span className={`${className} border-r-2 border-primary animate-pulse`}>{displayText}</span>
}

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
  "Material UI",
  "Redux Toolkit",
  "Zustand",
  "Context API",
  "React Query",
  "Formik",
  "Yup",
  "Optimistic UI",
  "Socket.IO",
  "Git",
]

const softSkills = [
  "Team Collaboration",
  "Problem Solving",
  "Communication",
  "Leadership",
  "Time Management",
  "Adaptability",
]

const projects = [
  {
    title: "Vconnct Website",
    description:
      "High-performance website with Next.js and TypeScript, integrated multi-payment gateways and Cal.com scheduling.",
    tech: ["Next.js", "TypeScript", "Payment Integration" , "Radix UI"],
    link: "https://vconnct.me",
  },
  {
    title: "Vconnct Dashboard",
    description:
      "Interactive dashboard enabling users to track meeting statuses, schedule meetings, view analytics, and handle subscription management with real-time data updates.",
    tech: ["React", "Real-time Data", "Tailwind CSS", "Payment Integration"],
    link: "https://dashboard.vconnct.me",
  },
  {
    title: "Inmate Communication System – Dubai Correctional Project",
    description:
      `Developed a dual-dashboard system (Admin & Visitor) to enable secure inmate–visitor communication. The
Admin Dashboard manages users, sessions, and real-time updates via Supabase, while the Visitor Dashboard
allows visitors to register, schedule, and track sessions through a responsive, intuitive interface.`,
    tech: ["Next.js", "Material UI", "Tailwind CSS", "Supabase"],
  },
  {
    title: "Admin Dashboard",
    description:
      "Modern admin panel using Veuxy dashboard with data visualization, table filtering, and role-based UI features.",
    tech: ["Next.js" , "TypeScript" , "Tailwind CSS" , "Material UI"],
   
  },
 
  {
    title: "KAROOT Dashboard",
    description:
      "Interactive dashboard for managing orders, customers, and worker performance with real-time data visualization.",
    tech: ["Next.js" , "TypeScript" , "Tailwind CSS" , "Material UI"],
  },
  {
    title: "Tawteen Website",
    description:
      "Investment-focused web applicationDeveloped a responsive and high-performance web platform aimed at facilitating investment opportunities",
        link: "https://tawteen.tech",
      tech: ["Next.js" , "TypeScript" , "Tailwind CSS" , "Redux toolkit" , "React Query"],
  },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <MatrixRain />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div className="text-xl font-bold text-primary" whileHover={{ scale: 1.05 }}>
              AM
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["About", "Projects", "Skills", "Contact"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-primary transition-colors"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex justify-center mb-6">
              <motion.div
                className="relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Code className="w-16 h-16 text-primary" />
              </motion.div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <TypingEffect text="Ahmed Mohamed" className="block" />
              <span className="text-primary">Frontend Developer</span>
            </h1>

            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 max-w-3xl mx-auto"
              >
                <p className="text-lg text-muted-foreground mb-4">
                  <span className="text-primary font-semibold">3+ Years Experience</span> in Frontend Development
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Passionate Frontend Developer specializing in responsive web and dashboard design, ensuring seamless
                  accessibility across all devices. Skilled in building high-performance dynamic projects with clean,
                  maintainable code. Currently working at Vconnct, developing cutting-edge web solutions and interactive
                  dashboards.
                </p>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center ">
             <motion.a
             target="_blank"
                href="/Ahmed-Mohamed-Resume.pdf"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg">
                  <ViewIcon className="w-4 h-4 mr-2 " />
                  View My Resume
                </Button>
              </motion.a>
            
             
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
     <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-16">
              <Zap className="inline w-8 h-8 text-primary mr-2" />
              About Me
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-primary">Professional Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">Frontend Developer at Vconnct</h3>
                      <p className="text-muted-foreground">01/2023 – present</p>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• Developed responsive and dynamic web pages</li>
                        <li>• Designed interactive dashboards with focus on UX</li>
                        <li>• Ensured optimal performance and cross-device compatibility</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-primary">Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">Bachelor's in Computer Science</h3>
                      <p className="text-muted-foreground">Akhbar Elyoum Academy</p>
                      <p className="text-sm text-muted-foreground">2021 – 2025 | Giza, Egypt</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-primary">Courses & Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">Frontend Development Diploma</h3>
                      <p className="text-muted-foreground">Route Academy</p>
                      <p className="text-sm text-muted-foreground">04/2024 – 10/2024 | Giza, Dokki</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">React.js Online Course</h3>
                      <p className="text-muted-foreground">Mahara-tech</p>
                      <p className="text-sm text-muted-foreground">Online</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-16">
              <Code className="inline w-8 h-8 text-primary mr-2" />
              Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="h-full bg-card border-border hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {project.title}
                        {project.link &&
                        <Link href={project.link || ""} target="_blank">
                        <ExternalLink className="w-5 h-5 text-primary" />
                        </Link>}
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-16">
              <Terminal className="inline w-8 h-8 text-primary mr-2" />
              Skills & Expertise
            </h2>

            {/* Technical Skills subsection */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-center mb-8 text-primary">Technical Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="group"
                  >
                    <Badge
                      variant="secondary"
                      className="w-full py-3 px-4 text-center bg-card border-border hover:border-primary/50 transition-all duration-300 group-hover:bg-primary/10"
                    >
                      <span className="font-medium">{skill}</span>
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Soft Skills subsection */}
            <div>
              <h3 className="text-2xl font-semibold text-center mb-8 text-primary">Soft Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: (index + skills.length) * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="group"
                  >
                    <Badge
                      variant="outline"
                      className="w-full py-3 px-4 text-center bg-muted/50 border-primary/30 hover:border-primary/70 transition-all duration-300 group-hover:bg-primary/5"
                    >
                      <span className="font-medium">{skill}</span>
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">
              <Mail className="inline w-8 h-8 text-primary mr-2" />
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project.
            </p>

            <div className="md:flex-row flex-col flex justify-center gap-6">
              <motion.a
                href="mailto:ahmedmohamedali20003@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="md:w-auto w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me
                </Button>
              </motion.a>

              <motion.a href="tel:+201159133110" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                               <Button size="lg" className="md:w-auto w-full">

                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/ahmed-mohamed-5b319b277"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                                <Button size="lg" className="md:w-auto w-full">

                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </motion.a>

              <motion.a
                href="https://github.com/Ahmedsoliman03"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                                <Button size="lg" className="md:w-auto w-full">

                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </motion.a>

            
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
    </div>
  )
}
