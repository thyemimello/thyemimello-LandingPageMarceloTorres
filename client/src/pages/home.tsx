import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Globe,
  MapPin,
  Users,
  Trophy,
  Flame,
  Dumbbell,
  Video,
  GraduationCap,
  ChevronDown,
  Instagram,
  Youtube,
  MessageCircle,
  ArrowRight,
  Star,
  Clock,
  Calendar,
  Check,
  Menu,
  X,
  Play,
} from "lucide-react";
import { SiTiktok } from "react-icons/si";

import heroImg from "@assets/WhatsApp_Image_2026-03-03_at_09.55.44_1772543373679.jpeg";
import aboutImg from "@assets/WhatsApp_Image_2026-03-03_at_09.58.01_1772543413686.jpeg";
import fatburnImg from "@assets/WhatsApp_Image_2026-03-03_at_10.02.08_1772543555325.jpeg";
import curlImg from "@assets/WhatsApp_Image_2026-03-03_at_07.27.47_(2)_1772541482437.jpeg";
import sittingImg from "@assets/WhatsApp_Image_2026-03-03_at_07.27.47_(3)_1772541482437.jpeg";
import phoneImg from "@assets/WhatsApp_Image_2026-03-03_at_07.27.47_(4)_1772541482437.jpeg";
import dumbbellDetail from "@assets/WhatsApp_Image_2026-03-03_at_07.27.47_(1)_1772541482437.jpeg";
import machineImg from "@assets/WhatsApp_Image_2026-03-03_at_07.28.42_(3)_1772541482439.jpeg";
import standingImg from "@assets/WhatsApp_Image_2026-03-03_at_07.28.42_1772541482439.jpeg";
import weightImg from "@assets/WhatsApp_Image_2026-03-03_at_07.28.42_(2)_1772541482439.jpeg";
import loadingPlate from "@assets/WhatsApp_Image_2026-03-03_at_07.28.42_(1)_1772541482438.jpeg";
import gymProfile from "@assets/WhatsApp_Image_2026-03-03_at_07.27.46_1772541482436.jpeg";
import dumbbellPickup from "@assets/WhatsApp_Image_2026-03-03_at_07.27.47_1772544013469.jpeg";
import airBikeImg from "@assets/WhatsApp_Image_2026-03-03_at_07.28.40_1772544031441.jpeg";
import armsCrossed from "@assets/WhatsApp_Image_2026-03-03_at_07.28.41_1772541482438.jpeg";
import logoMT from "@assets/logo-mt.png";

const WHATSAPP_NUMBER = "5547996106869";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const INSTAGRAM_LINK = "https://instagram.com/mtorrespersonal";

const PAYMENT_LINKS = {
  fatburn: "https://pag.ae/81wrBcC7P",
  trimestral: "https://pag.ae/81p-mkwEm",
  semestral: "https://pag.ae/81p-mThg2",
  anual: "https://pag.ae/81p-nf84n",
  mentoria: "https://pag.ae/81yiRQ4pu",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

function CountUp({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Sobre", href: "#sobre" },
    { label: "Planos", href: "#planos" },
    { label: "Mentoria", href: "#mentoria" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/5 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-3" data-testid="link-home">
            <img src={logoMT} alt="Marcelo Torres" className="h-8 sm:h-10 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/60 hover:text-orange-400 transition-colors duration-300 no-underline relative group"
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="gold-gradient text-black font-heading font-bold text-xs tracking-wider" data-testid="button-nav-whatsapp">
                FALE COMIGO
              </Button>
            </a>
          </div>

          <button
            className="md:hidden text-white/80 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5"
        >
          <div className="px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/70 py-2 text-sm font-medium no-underline"
                onClick={() => setMobileOpen(false)}
                data-testid={`link-mobile-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-2">
              <Button className="w-full gold-gradient text-black font-heading font-bold text-xs tracking-wider" data-testid="button-mobile-whatsapp">
                FALE COMIGO
              </Button>
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.1]);

  return (
    <section className="relative h-screen flex items-end justify-center overflow-hidden" data-testid="section-hero">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Marcelo Torres"
          className="w-full h-full object-cover object-top"
          data-testid="img-hero"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-6xl mx-auto px-4 pb-16 sm:pb-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-orange-400/90 font-heading text-xs sm:text-sm tracking-[0.4em] uppercase mb-4"
          >
            Personal Trainer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-heading font-black text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.85] mb-6"
          >
            <span className="text-white">MARCELO</span>
            <br />
            <span className="gold-text">TORRES</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="max-w-md"
          >
            <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-8">
              Mais de <span className="text-orange-400 font-semibold">10 anos</span> transformando
              vidas através da atividade física. Alunos em{" "}
              <span className="text-white font-medium">5 continentes</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#planos">
                <Button size="lg" className="gold-gradient text-black font-heading font-bold text-sm tracking-wider px-8 w-full sm:w-auto" data-testid="button-hero-plans">
                  VER PLANOS <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-white/20 text-white font-heading font-bold text-sm tracking-wider px-8 backdrop-blur-sm bg-white/5 w-full sm:w-auto" data-testid="button-hero-whatsapp">
                  <MessageCircle className="w-4 h-4 mr-2" /> WHATSAPP
                </Button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/30"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}

function StatsBar() {
  return (
    <section className="relative py-16 sm:py-20 bg-black border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
        >
          {[
            { value: 10, suffix: "+", label: "Anos de experiência" },
            { value: 5, suffix: "", label: "Continentes" },
            { value: 17, suffix: "", label: "Países" },
            { value: 14, suffix: "", label: "Estados brasileiros" },
          ].map((stat) => (
            <motion.div key={stat.label} variants={fadeInUp} className="text-center">
              <p className="font-heading font-black text-4xl sm:text-5xl md:text-6xl gold-text mb-2">
                <CountUp target={stat.value} />{stat.suffix}
              </p>
              <p className="text-white/40 text-xs sm:text-sm tracking-wider uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-20 sm:py-32 px-4 relative" id="sobre">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative"
          >
            <div className="relative">
              <img
                src={aboutImg}
                alt="Marcelo Torres"
                className="w-full h-[500px] sm:h-[600px] object-cover rounded-md"
                data-testid="img-about"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-md" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 sm:w-40 sm:h-40 border border-orange-500/20 rounded-md hidden lg:block" />
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <span className="text-orange-400/70 text-xs tracking-[0.3em] uppercase font-heading mb-4 block">
              Quem sou eu
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white mb-6 leading-tight">
              UM CORPO SAUDÁVEL{" "}
              <span className="gold-text">SEMPRE</span>{" "}
              É BONITO
            </h2>
            <div className="space-y-4 text-white/50 text-sm sm:text-base leading-relaxed">
              <p>
                Com mais de uma década dedicada à transformação de vidas, construí uma metodologia
                que une ciência, prática e motivação para resultados reais e duradouros.
              </p>
              <p>
                Atendo alunos em <span className="text-orange-400 font-medium">5 continentes</span>,{" "}
                <span className="text-white font-medium">17 países</span> e{" "}
                <span className="text-white font-medium">14 estados brasileiros</span>,
                provando que distância não é barreira quando existe comprometimento.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#planos">
                <Button className="gold-gradient text-black font-heading font-bold text-xs tracking-wider" data-testid="button-about-plans">
                  CONHEÇA OS PLANOS <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-white/10 text-white/70 font-heading text-xs tracking-wider" data-testid="button-about-instagram">
                  <Instagram className="w-4 h-4 mr-2" /> @mtorrespersonal
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PhotoStrip() {
  return (
    <section className="py-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex gap-2 sm:gap-4"
      >
        {[dumbbellDetail, airBikeImg, armsCrossed, machineImg, loadingPlate].map((img, i) => (
          <div key={i} className="flex-1 min-w-0">
            <img
              src={img}
              alt={`Treino ${i + 1}`}
              className="w-full h-48 sm:h-64 md:h-80 object-cover"
              data-testid={`img-strip-${i}`}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function FatburnSection() {
  return (
    <section className="py-20 sm:py-28 px-4 relative" id="planos">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-orange-950/5 to-background" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <div className="h-px w-12 bg-orange-500/50 mx-auto mb-4" />
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
            <span className="text-white">TREINE</span>{" "}
            <span className="gold-text">COMIGO</span>
          </h2>
          <div className="h-px w-12 bg-orange-500/50 mx-auto mt-4" />
          <p className="text-white/40 text-sm mt-6 max-w-md mx-auto">
            Escolha o plano ideal para a sua jornada de transformação
          </p>
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto"
        >
          <div className="relative h-[400px] sm:h-[500px] rounded-md overflow-hidden hidden lg:block">
            <img
              src={fatburnImg}
              alt="Fatburn"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80" />
          </div>

          <div className="glass-card glass-card-hover rounded-md p-6 sm:p-10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-md gold-gradient flex items-center justify-center">
                <Flame className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">FATBURN</h3>
                <p className="text-orange-400/70 text-xs tracking-wider uppercase">Grupo de Emagrecimento</p>
              </div>
            </div>

            <p className="text-white/50 text-sm sm:text-base mb-6 leading-relaxed">
              Grupo de emagrecimento com competição que premia por desempenho.
              Transforme seu corpo junto com outras pessoas motivadas!
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Clock className="w-4 h-4 text-orange-500" />
                <span>Duração: <span className="text-white font-medium">30 dias</span></span>
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Trophy className="w-4 h-4 text-orange-500" />
                <span>Premiação por <span className="text-white font-medium">desempenho</span></span>
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Users className="w-4 h-4 text-orange-500" />
                <span>Treino em <span className="text-white font-medium">grupo</span></span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
              <div>
                <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Investimento</p>
                <p className="font-heading font-black text-4xl gold-text">
                  R$ 199
                </p>
              </div>
              <a href={PAYMENT_LINKS.fatburn} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gold-gradient text-black font-heading font-bold tracking-wider px-8" data-testid="button-fatburn-buy">
                  QUERO PARTICIPAR <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ConsultoriaSection() {
  const plans = [
    { duration: "90 dias", months: "3 meses", price: "599", link: PAYMENT_LINKS.trimestral, popular: false },
    { duration: "180 dias", months: "6 meses", price: "899", link: PAYMENT_LINKS.semestral, popular: true },
    { duration: "360 dias", months: "12 meses", price: "1.299", link: PAYMENT_LINKS.anual, popular: false },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Dumbbell className="w-5 h-5 text-orange-500" />
            <span className="text-orange-400/70 text-xs tracking-[0.2em] uppercase font-heading">Treino Personalizado</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white mb-4">
            CONSULTORIA <span className="gold-text">INDIVIDUAL</span>
          </h2>
          <p className="text-white/40 text-sm sm:text-base max-w-xl mx-auto">
            Monto treinos para você botar em prática em qualquer lugar do mundo, disponível no app.
          </p>
          <p className="text-orange-400/50 text-xs mt-3 tracking-wider">
            Parcelado em até 18x sem juros via PagBank
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.duration}
              variants={fadeInUp}
              className={`relative glass-card glass-card-hover rounded-md p-6 sm:p-8 transition-all duration-300 ${
                plan.popular ? "border-orange-500/30 md:scale-105 md:-my-4" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="gold-gradient text-black text-[10px] font-heading font-bold tracking-wider px-4 py-1 rounded-full uppercase">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6 pt-2">
                <p className="text-white/30 text-xs uppercase tracking-wider mb-2">{plan.months}</p>
                <h3 className="font-heading font-bold text-lg text-white mb-1">{plan.duration}</h3>
              </div>

              <div className="text-center mb-8">
                <p className="text-white/30 text-xs mb-1">A partir de</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-white/30 text-lg">R$</span>
                  <span className={`font-heading font-black text-4xl ${plan.popular ? "gold-text" : "text-white"}`}>
                    {plan.price}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Treino personalizado",
                  "Acesso pelo app",
                  "Suporte via WhatsApp",
                  "Treino em qualquer lugar",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white/50 text-sm">
                    <Check className="w-4 h-4 text-orange-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <a href={plan.link} target="_blank" rel="noopener noreferrer" className="block">
                <Button
                  className={`w-full font-heading font-bold tracking-wider text-sm ${
                    plan.popular ? "gold-gradient text-black" : "bg-white/5 text-white border border-white/10"
                  }`}
                  data-testid={`button-consultoria-${plan.months.replace(" ", "-")}`}
                >
                  COMEÇAR AGORA
                </Button>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FullWidthImage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 3000], [0, -100]);

  return (
    <section className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={sittingImg}
          alt="Marcelo Torres"
          className="w-full h-[120%] object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-black/30 to-background" />
      </motion.div>
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <motion.blockquote
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl"
        >
          <p className="text-white/80 italic text-lg sm:text-2xl md:text-3xl font-heading font-light leading-relaxed">
            "Um corpo bonito nem sempre é saudável, mas um corpo saudável{" "}
            <span className="gold-text font-bold not-italic">SEMPRE</span> é{" "}
            <span className="gold-text font-bold not-italic">BONITO</span>"
          </p>
          <div className="h-px w-16 bg-orange-500/40 mx-auto mt-6" />
        </motion.blockquote>
      </div>
    </section>
  );
}

function PersonalDigitalSection() {
  const weekPlans = [
    { times: "2x", price: "800" },
    { times: "3x", price: "1.200" },
    { times: "4x", price: "1.600" },
    { times: "5x", price: "2.000" },
  ];

  const discounts = [
    { period: "Trimestral", discount: "5%" },
    { period: "Semestral", discount: "10%" },
    { period: "Anual", discount: "20%" },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Video className="w-5 h-5 text-orange-500" />
              <span className="text-orange-400/70 text-xs tracking-[0.2em] uppercase font-heading">Acompanhamento em Tempo Real</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white mb-4">
              PERSONAL <span className="gold-text">DIGITAL</span>
            </h2>
            <p className="text-white/40 text-sm sm:text-base mb-8 leading-relaxed">
              Se você precisa do acompanhamento em tempo real, para treinar com mais segurança,
              eu posso te atender por vídeo chamada. Planos mensais com dia e hora marcados.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {weekPlans.map((plan) => (
                <div
                  key={plan.times}
                  className="glass-card glass-card-hover rounded-md p-4 text-center transition-all duration-300"
                >
                  <p className="text-orange-400 font-heading font-bold text-base mb-0.5">{plan.times} <span className="text-white/30 text-xs font-normal">/ semana</span></p>
                  <p className="font-heading font-black text-xl text-white">R$ {plan.price}</p>
                </div>
              ))}
            </div>

            <div className="glass-card rounded-md p-5 mb-8">
              <p className="text-white/30 text-xs uppercase tracking-wider text-center mb-3">Descontos à vista</p>
              <div className="flex justify-center gap-6">
                {discounts.map((d) => (
                  <div key={d.period} className="text-center">
                    <p className="text-orange-400 font-heading font-bold text-lg">{d.discount}</p>
                    <p className="text-white/40 text-xs">{d.period}</p>
                  </div>
                ))}
              </div>
            </div>

            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gold-gradient text-black font-heading font-bold tracking-wider px-8 w-full sm:w-auto" data-testid="button-personal-digital-whatsapp">
                <MessageCircle className="w-4 h-4 mr-2" /> AGENDAR VIA WHATSAPP
              </Button>
            </a>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative hidden lg:block"
          >
            <img
              src={phoneImg}
              alt="Personal Digital"
              className="w-full h-[550px] object-cover rounded-md"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/40 rounded-md" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PersonalPresencialSection() {
  const weekPlans = [
    { times: "2x", price: "800" },
    { times: "3x", price: "1.200" },
    { times: "4x", price: "1.600" },
    { times: "5x", price: "2.000" },
  ];

  const discounts = [
    { period: "Trimestral", discount: "5%" },
    { period: "Semestral", discount: "10%" },
    { period: "Anual", discount: "20%" },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-orange-950/5 to-background" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative hidden lg:block"
          >
            <img
              src={standingImg}
              alt="Personal Presencial"
              className="w-full h-[550px] object-cover rounded-md"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40 rounded-md" />
            <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-black/60 backdrop-blur-md rounded-md px-4 py-2">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span className="text-white/80 text-sm font-heading">Balneário Camboriú, SC</span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Dumbbell className="w-5 h-5 text-orange-500" />
              <span className="text-orange-400/70 text-xs tracking-[0.2em] uppercase font-heading">Balneário Camboriú</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white mb-4">
              PERSONAL <span className="gold-text">PRESENCIAL</span>
            </h2>
            <p className="text-white/40 text-sm sm:text-base mb-8 leading-relaxed">
              Treine comigo com dia e hora marcados em Balneário Camboriú.
              Acompanhamento presencial com atenção total ao seu treino.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {weekPlans.map((plan) => (
                <div
                  key={plan.times}
                  className="glass-card glass-card-hover rounded-md p-4 text-center transition-all duration-300"
                >
                  <p className="text-orange-400 font-heading font-bold text-base mb-0.5">{plan.times} <span className="text-white/30 text-xs font-normal">/ semana</span></p>
                  <p className="font-heading font-black text-xl text-white">R$ {plan.price}</p>
                </div>
              ))}
            </div>

            <div className="glass-card rounded-md p-5 mb-8">
              <p className="text-white/30 text-xs uppercase tracking-wider text-center mb-3">Descontos à vista</p>
              <div className="flex justify-center gap-6">
                {discounts.map((d) => (
                  <div key={d.period} className="text-center">
                    <p className="text-orange-400 font-heading font-bold text-lg">{d.discount}</p>
                    <p className="text-white/40 text-xs">{d.period}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:hidden glass-card rounded-md p-4 mb-8">
              <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>Balneário Camboriú, SC - Brasil</span>
              </div>
            </div>

            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gold-gradient text-black font-heading font-bold tracking-wider px-8 w-full sm:w-auto" data-testid="button-personal-presencial-whatsapp">
                <MessageCircle className="w-4 h-4 mr-2" /> AGENDAR VIA WHATSAPP
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MentoriaSection() {
  return (
    <section className="py-20 sm:py-28 px-4 relative" id="mentoria">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-orange-500" />
              <span className="text-orange-400/70 text-xs tracking-[0.2em] uppercase font-heading">Para Profissionais</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white mb-6 leading-tight">
              MENTORIA PARA <span className="gold-text">TREINADORES</span>
            </h2>
            <p className="text-white/40 text-sm sm:text-base mb-8 leading-relaxed">
              Tenha saúde financeira e aprenda como prospectar, reter e fidelizar clientes
              diversificando seu serviço e precificando sua entrega de forma presencial e online.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { icon: <Users className="w-5 h-5" />, label: "Prospectar", desc: "Novos clientes" },
                { icon: <Star className="w-5 h-5" />, label: "Reter", desc: "Alunos ativos" },
                { icon: <Trophy className="w-5 h-5" />, label: "Fidelizar", desc: "Base leal" },
                { icon: <Calendar className="w-5 h-5" />, label: "Precificar", desc: "Seu valor" },
              ].map((item) => (
                <div key={item.label} className="glass-card rounded-md p-4">
                  <div className="text-orange-500 mb-2">{item.icon}</div>
                  <p className="text-white font-heading font-bold text-sm">{item.label}</p>
                  <p className="text-white/30 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>

            <a href={PAYMENT_LINKS.mentoria} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gold-gradient text-black font-heading font-bold tracking-wider px-10" data-testid="button-mentoria-buy">
                QUERO A MENTORIA <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative hidden lg:block"
          >
            <img
              src={weightImg}
              alt="Mentoria"
              className="w-full h-[550px] object-cover rounded-md"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/30 rounded-md" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


function SocialSection() {
  return (
    <section className="py-20 sm:py-28 px-4" id="contato">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="h-px w-12 bg-orange-500/50 mx-auto mb-4" />
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
            <span className="text-white">CONHEÇA MINHAS</span>{" "}
            <span className="gold-text">MÍDIAS</span>
          </h2>
          <div className="h-px w-12 bg-orange-500/50 mx-auto mt-4" />
          <p className="text-white/40 text-sm mt-6">Acompanhe meu conteúdo nas redes sociais</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          <motion.a
            variants={fadeInUp}
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card glass-card-hover rounded-md p-8 text-center group transition-all duration-300 no-underline"
            data-testid="link-instagram"
          >
            <Instagram className="w-8 h-8 text-orange-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="font-heading font-bold text-white text-sm">Instagram</p>
            <p className="text-white/30 text-xs mt-1">@mtorrespersonal</p>
          </motion.a>

          <motion.a
            variants={fadeInUp}
            href="https://youtube.com/@mtorrespersonal"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card glass-card-hover rounded-md p-8 text-center group transition-all duration-300 no-underline"
            data-testid="link-youtube"
          >
            <Youtube className="w-8 h-8 text-orange-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="font-heading font-bold text-white text-sm">YouTube</p>
            <p className="text-white/30 text-xs mt-1">Marcelo Torres</p>
          </motion.a>

          <motion.a
            variants={fadeInUp}
            href="https://tiktok.com/@mtorrespersonal"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card glass-card-hover rounded-md p-8 text-center group transition-all duration-300 no-underline"
            data-testid="link-tiktok"
          >
            <SiTiktok className="w-7 h-7 text-orange-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="font-heading font-bold text-white text-sm">TikTok</p>
            <p className="text-white/30 text-xs mt-1">@mtorrespersonal</p>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logoMT} alt="Marcelo Torres" className="h-6 w-auto" />
          </div>

          <div className="flex items-center gap-4">
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-orange-400 transition-colors no-underline">
              <Instagram className="w-4 h-4" />
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-orange-400 transition-colors no-underline">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col items-center gap-3">
          <p className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} Marcelo Torres Personal. Todos os direitos reservados.
          </p>
          <a
            href="https://thypetech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/20 hover:text-white/50 text-xs transition-colors no-underline"
            data-testid="link-thypetech"
          >
            <span>Desenvolvido por</span>
            <img src="/thype-logo.png" alt="thypeTech" className="h-4 w-auto" />
            <span className="font-medium">thypeTech</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30 transition-transform duration-200 hover:scale-110 no-underline"
      data-testid="button-whatsapp-float"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full" />
    </motion.a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <PhotoStrip />
      <FatburnSection />
      <ConsultoriaSection />
      <FullWidthImage />
      <PersonalDigitalSection />
      <PersonalPresencialSection />
      <MentoriaSection />
      
      <SocialSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
