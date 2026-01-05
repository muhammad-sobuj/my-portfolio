import { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Layers,
  Code,
  Search,
  Smartphone,
  Palette,
  Settings,
  Quote,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const isTestimonialsInView = useInView(testimonialsRef, {
    once: true,
    margin: "-100px",
  });

  const services = [
    {
      icon: Layers,
      title: "MERN Web Developer",
      description:
        "Designing intuitive and visually appealing user interfaces that prioritize user experience and drive engagement across all devices.",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: Code,
      title: "Front-End Developer",
      description:
        "Building responsive, high-performance web applications using modern technologies like React, Tailwind CSS, and HTML5.",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Enhancing your website's visibility on search engines to increase organic traffic and reach your target audience effectively.",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description:
        "Creating sleek and user-friendly mobile application interfaces for iOS and Android that provide seamless navigation.",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: Palette,
      title: "Brand Identity",
      description:
        "Crafting unique brand identities, logos, and visual assets that resonate with your audience and tell your brand's story.",
      color: "from-indigo-500 to-blue-600",
    },
    {
      icon: Settings,
      title: "Maintenance",
      description:
        "Ongoing technical support, security updates, and performance optimization to keep your website running smoothly.",
      color: "from-gray-500 to-slate-600",
    },
  ];

  const testimonials = [
    {
      quote:
        "Mahmood's eye for design is unmatched. He transformed our outdated platform into a sleek, modern experience that our users absolutely love. The attention to detail was beyond our expectations.",
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCnPk3_v5WUzR0JoOIML-N3yXgV4rg52Gss5LQFkRUTF58TSyIBljUneU8S_ffaXQv6QXCsOT4sSca7rMJjwRGTpKmA4V2a_0r_YGMfGnEvlBlw4_hu1PhpHHsokCJwUH1jqgNioKpEcgdkXELjZaOpYcxA0dpaCw9Vy5nEql32iDrJJoX5TKS7zbiFSi1kXem6Jd11WwZ3dgDWofS9n3vmNqgq8mK5UVou0NMCGWVDfmjjQjWGrLaB03AkLvd2IRq2zWHvcdsbucKb",
      rating: 5,
    },
    {
      quote:
        "Working with him was a breeze. He understood our SEO needs perfectly and implemented a strategy that doubled our organic traffic in just three months. Highly recommended!",
      name: "David Chen",
      role: "Marketing Dir., GrowthInc",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCiHNWtOJgdwFRedD1KmO24AvfbbXzA0pMxpLs63h1m-HEQSG1qf2zJvRdeFr3RTI8cuAb4ym8Q9CmYVifPWlDVgUoV28s4rvek-Suhs9dZ_nTzyMb_8ea7yGkyuRLxO63rxaP-YG8eKAj3wj-JCt74nwDiFgRFNggwMuybUWCHIovRi0-fwDtNsPgk47yAQSMphfvbWRgrvOXe97xdGFOUj77egsh4ExKfo4qaT21SovpOYkM1fsQv4Kv-Ein4o8xSaddHXvJuiaT2",
      rating: 5,
    },
    {
      quote:
        "The custom web application he built for us is lightning fast and incredibly stable. His technical expertise in React and modern frontend frameworks is top-tier.",
      name: "Emily Davis",
      role: "Founder, CreativeStudio",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBd-aW1o_mTqeLiwjmSZ8eAizIlOBP__6dwRMGNWphjNEIbeKCEqy42DYeEe7lVnOHDzCyLmiX7xzspFnqPz4M-_qTWo5rKtsh6hwRJo5_MO3Oy9AqZX79_YXQ0h5votWnX-44X2Ywd7G3SL70Yio2ihqdFnIP0lpIuSCIIJT8UT9LKGhESCt9xbnxTsNvx2uN73Wd1Q1bSLbt7_IQUrupWc3ZHIHrnZ13YaRfP5s5YHV1MqwY-xqs-KxvmKz7ZRz-Kh92N5bZuR9ok",
      rating: 5,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current?.children,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Services cards animation
      gsap.fromTo(
        servicesRef.current?.children,
        {
          y: 80,
          opacity: 0,
          rotationX: -45,
          transformOrigin: "top center",
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Testimonials animation
      gsap.fromTo(
        testimonialsRef.current?.children,
        {
          x: -100,
          opacity: 0,
          rotationY: -30,
        },
        {
          x: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Floating animation for service icons
      const icons = servicesRef.current?.querySelectorAll(".service-icon");
      icons?.forEach((icon, index) => {
        gsap.to(icon, {
          y: -10,
          duration: 2 + index * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: index * 0.2,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-16 py-12 lg:py-16">
        {/* Services Section */}
        <motion.div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-xl text-primary font-medium mb-2 tracking-wider uppercase relative"
            variants={itemVariants}
          >
            What I Offer
            <Sparkles
              className="absolute -top-1 -right-8 text-primary/60"
              size={16}
            />
          </motion.h2>
          <motion.h1
            className="text-4xl lg:text-5xl font-bold font-display text-text-light dark:text-white mb-6"
            variants={itemVariants}
          >
            High-Quality Services
          </motion.h1>
          <motion.p
            className="text-text-muted-light dark:text-gray-400 text-lg"
            variants={itemVariants}
          >
            I provide a wide range of digital services to help you achieve your
            business goals, from stunning designs to robust web applications.
          </motion.p>
        </motion.div>

        <motion.div
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={isServicesInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                rotateY: 5,
              }}
              transition={{ duration: 0.3 }}
            >
              <Card className="group bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-white/5 p-8 rounded-2xl hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden h-full">
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={{ scale: 0, rotate: 45 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Floating particles */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500"></div>

                <CardHeader className="p-0 mb-6">
                  <motion.div
                    className="service-icon w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500 relative"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon
                      className="text-2xl text-primary group-hover:text-white transition-colors duration-500"
                      size={24}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(253, 110, 10, 0)",
                          "0 0 0 10px rgba(253, 110, 10, 0.1)",
                          "0 0 0 0 rgba(253, 110, 10, 0)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                  </motion.div>
                  <CardTitle className="text-2xl font-bold font-display text-text-light dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-text-muted-light dark:text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <motion.a
                    className="inline-flex items-center text-sm font-semibold text-primary hover:text-orange-600 transition-colors group/link"
                    href="#"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="ml-2" size={12} />
                    </motion.div>
                  </motion.a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Section */}
        <div className="border-t border-gray-200 dark:border-white/5 pt-20">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={isTestimonialsInView ? "visible" : "hidden"}
          >
            <motion.h2
              className="text-xl text-primary font-medium mb-2 tracking-wider uppercase relative"
              variants={itemVariants}
            >
              Testimonials
              <Zap
                className="absolute -top-1 -right-8 text-primary/60"
                size={16}
              />
            </motion.h2>
            <motion.h1
              className="text-4xl lg:text-5xl font-bold font-display text-text-light dark:text-white mb-6"
              variants={itemVariants}
            >
              What Clients Say
            </motion.h1>
            <motion.p
              className="text-text-muted-light dark:text-gray-400 text-lg"
              variants={itemVariants}
            >
              Trusted by ambitious companies and entrepreneurs who have scaled
              their business with my help.
            </motion.p>
          </motion.div>

          <motion.div
            ref={testimonialsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isTestimonialsInView ? "visible" : "hidden"}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  rotateX: 5,
                }}
                transition={{ duration: 0.3 }}
              >
                <Card className="flex flex-col h-full bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 relative overflow-hidden">
                  {/* Quote background */}
                  <motion.div
                    className="absolute top-4 right-4 opacity-5"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Quote size={60} className="text-primary" />
                  </motion.div>

                  <CardHeader className="p-0 mb-6">
                    <motion.div
                      className="text-primary/40 text-4xl mb-6"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    >
                      <Quote size={32} />
                    </motion.div>
                  </CardHeader>
                  <CardContent className="p-0 flex-grow">
                    <p className="text-text-muted-light dark:text-gray-300 mb-8 leading-relaxed italic text-base">
                      "{testimonial.quote}"
                    </p>

                    {/* Star rating */}
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 + index * 0.2 }}
                        >
                          <Sparkles className="text-primary mr-1" size={12} />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>

                  <div className="flex items-center mt-auto pt-6 border-t border-gray-100 dark:border-white/5">
                    <motion.img
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-primary/20"
                      src={testimonial.image}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div>
                      <h4 className="font-display font-bold text-text-light dark:text-white text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-primary font-medium uppercase tracking-wide">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
