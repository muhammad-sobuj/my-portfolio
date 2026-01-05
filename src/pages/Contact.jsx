import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  CheckCircle,
  Sparkles,
  Zap,
  AlertCircle,
  Github,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const containerRef = useRef(null);
  const formRef = useRef(null);
  const contactCardsRef = useRef([]);
  const particlesRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const tl = gsap.timeline();

      // Create floating particles
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement("div");
        particle.className = "absolute w-2 h-2 bg-primary/20 rounded-full";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";
        particlesRef.current?.appendChild(particle);

        gsap.to(particle, {
          y: -200,
          x: Math.random() * 100 - 50,
          opacity: 0,
          duration: 4 + Math.random() * 2,
          repeat: -1,
          delay: Math.random() * 3,
          ease: "power2.out",
        });
      }

      // Animate contact cards
      tl.fromTo(
        contactCardsRef.current,
        { y: 100, opacity: 0, rotationX: -45 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        }
      );

      // Animate form
      tl.fromTo(
        formRef.current,
        { x: 100, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
        "-=0.5"
      );
    }
  }, [isInView]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!formData.name) return "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      return "Valid email is required";
    if (!formData.message) return "Message is required";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);
    setIsSubmitting(true);

    // Animate form submission
    gsap.to(formRef.current, {
      scale: 0.98,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
    });

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API
      setIsSubmitted(true);

      // Success animation
      gsap.fromTo(
        formRef.current,
        { scale: 0.9, opacity: 0.5 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
      );

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    } catch (err) {
      setError("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email Me",
      value: "muhammadsobuj20@gmail.com",
      href: "mailto:muhammadsobuj20@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Call Me",
      value: "  +8801714799303",
      href: "tel:  +8801714799303",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sirajganj, Dhaka Bangladesh",
      href: null,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/muhammadsobujhossain20",
      color: "#1877F2",
    },
    { icon: Linkedin, href: "https://in/md-sobuj-hossain", color: "#0A66C2" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/muhammadsobujhossain",
      color: "#E4405F",
    },
    {
      icon: Github,
      href: "https://github.com/muhammad-sobuj",
      color: "#1DA1F2",
    },
    { icon: Twitter, href: "#", color: "#1DA1F2" },
  ];

  return (
    <div
      ref={containerRef}
      className="pt-14 px-4 md:px-12 lg:px-24 pb-20 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none"
      />

      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Get In{" "}
          <span className="text-primary relative">
            Touch
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={20} className="text-primary opacity-60" />
            </motion.div>
          </span>
        </motion.h1>
        <motion.p
          className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I'm currently available for freelance work or full-time opportunities.
          If you have a project that needs a creative touch, or just want to say
          hello, feel free to contact me!
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 max-w-7xl mx-auto items-start">
        {/* Contact Information */}
        <div className="space-y-10 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="bg-white dark:bg-surface-dark rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-2xl relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-orange-500/5"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <CardHeader className="p-0 mb-8 relative z-10">
                <CardTitle className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <motion.div
                    className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <Mail className="text-primary" size={20} />
                  </motion.div>
                  Contact Information
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0 relative z-10">
                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      ref={(el) => (contactCardsRef.current[index] = el)}
                      className="flex items-start space-x-6 group contact-card"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          boxShadow: "0 10px 30px rgba(253, 110, 10, 0.3)",
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <info.icon className="text-white" size={24} />
                      </motion.div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-2">
                          {info.label}
                        </p>
                        {info.href ? (
                          <motion.a
                            href={info.href}
                            className="text-lg font-semibold hover:text-primary transition-colors duration-300 block"
                            whileHover={{ scale: 1.02 }}
                          >
                            {info.value}
                          </motion.a>
                        ) : (
                          <span className="text-lg font-semibold block">
                            {info.value}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-6">
                    Follow My Socials
                  </p>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-white transition-all duration-300 social-icon"
                        whileHover={{
                          scale: 1.2,
                          backgroundColor: social.color,
                          rotate: 10,
                        }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          ref={formRef}
          className="order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Card className="bg-white dark:bg-surface-dark rounded-2xl p-8 md:p-10 border border-gray-200 dark:border-gray-800 shadow-2xl relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-primary/5"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            <CardHeader className="p-0 mb-8 relative z-10">
              <CardTitle className="text-2xl font-bold mb-6 flex items-center gap-3">
                <motion.div
                  className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <Send className="text-primary" size={20} />
                </motion.div>
                Send Me a Message
              </CardTitle>
            </CardHeader>

            <CardContent className="p-0 relative z-10">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    {error && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 flex items-center gap-2 mb-4"
                      >
                        <AlertCircle size={16} />
                        {error}
                      </motion.div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        className="space-y-2"
                        whileFocus={{ scale: 1.02 }}
                      >
                        <label
                          htmlFor="name"
                          className="text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#2A2A2A] border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-400 newsletter-input"
                        />
                      </motion.div>
                      <motion.div
                        className="space-y-2"
                        whileFocus={{ scale: 1.02 }}
                      >
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Your Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#2A2A2A] border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-400 newsletter-input"
                        />
                      </motion.div>
                    </div>
                    <motion.div
                      className="space-y-2"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Project Inquiry"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#2A2A2A] border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-400 newsletter-input"
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#2A2A2A] border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-400 resize-none newsletter-input"
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-orange-500/25 transition-all transform hover:-translate-y-1 duration-200 flex items-center justify-center gap-3 relative overflow-hidden group"
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        <AnimatePresence mode="wait">
                          {isSubmitting ? (
                            <motion.div
                              key="loading"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0 }}
                              className="flex items-center gap-2"
                            >
                              <motion.div
                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              />
                              Sending...
                            </motion.div>
                          ) : (
                            <motion.div
                              key="send"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0 }}
                              className="flex items-center gap-2 relative z-10"
                            >
                              <Zap size={20} />
                              Send Message
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Button>
                    </motion.div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="text-green-500" size={40} />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                    >
                      Message Sent Successfully!
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="text-gray-600 dark:text-gray-400"
                    >
                      Thank you for reaching out. I'll get back to you soon!
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
