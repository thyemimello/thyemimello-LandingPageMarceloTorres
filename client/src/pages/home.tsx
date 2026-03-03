import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
} from "lucide-react";
import { SiTiktok } from "react-icons/si";
import logoMarcelo from "@assets/WhatsApp_Image_2026-02-19_at_10.00.17_1772540466099.jpeg";

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

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16 sm:h-20">
          <a href="#" className="flex items-center gap-3" data-testid="link-home">
            <img src={logoMarcelo} alt="MT" className="h-10 w-10 rounded-full object-cover border border-amber-500/30" />
            <span className="font-heading font-bold text-lg tracking-wider uppercase gold-text">
              Marcelo Torres
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/70 hover:text-amber-400 transition-colors duration-200 no-underline"
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
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
          className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/5"
        >
          <div className="px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/70 py-2 text-sm font-medium"
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
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-background"
      />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl" />
      </div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <img
            src={logoMarcelo}
            alt="Marcelo Torres"
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-full mx-auto object-cover border-2 border-amber-500/40 shadow-2xl shadow-amber-500/10"
            data-testid="img-hero-logo"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-amber-400/80 font-heading text-xs sm:text-sm tracking-[0.3em] uppercase mb-4">
            Personal Trainer
          </p>
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6">
            <span className="text-white">MARCELO</span>{" "}
            <span className="gold-text">TORRES</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-white/50 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Mais de <span className="text-amber-400 font-semibold">10 anos</span> de experiência
          transformando a vida de pessoas através da atividade física
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-white/70 italic text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-10 border-l-2 border-amber-500/40 pl-4"
        >
          "Um corpo bonito nem sempre é saudável, mas um corpo saudável{" "}
          <span className="text-amber-400 font-bold not-italic">SEMPRE</span> é{" "}
          <span className="text-amber-400 font-bold not-italic">BONITO</span>"
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-12"
        >
          <StatBadge icon={<Globe className="w-4 h-4" />} value="5" label="Continentes" />
          <StatBadge icon={<MapPin className="w-4 h-4" />} value="17" label="Países" />
          <StatBadge icon={<MapPin className="w-4 h-4" />} value="14" label="Estados BR" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#planos">
            <Button size="lg" className="gold-gradient text-black font-heading font-bold text-sm tracking-wider px-8" data-testid="button-hero-plans">
              VER PLANOS <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="border-amber-500/30 text-amber-400 font-heading font-bold text-sm tracking-wider px-8" data-testid="button-hero-whatsapp">
              <MessageCircle className="w-4 h-4 mr-2" /> WHATSAPP
            </Button>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}

function StatBadge({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex items-center gap-2 text-white/60" data-testid={`stat-${label.toLowerCase().replace(" ", "-")}`}>
      <span className="text-amber-500">{icon}</span>
      <span className="font-heading font-bold text-white text-lg">{value}</span>
      <span className="text-xs uppercase tracking-wider">{label}</span>
    </div>
  );
}

function SectionTitle({ white, gold, subtitle, id }: { white: string; gold: string; subtitle?: string; id?: string }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="text-center mb-12 sm:mb-16"
      id={id}
    >
      <div className="inline-block mb-4">
        <div className="h-px w-12 bg-amber-500/50 mx-auto mb-4" />
        <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
          <span className="text-white">{white}</span>{" "}
          <span className="gold-text">{gold}</span>
        </h2>
        <div className="h-px w-12 bg-amber-500/50 mx-auto mt-4" />
      </div>
      {subtitle && (
        <p className="text-white/50 text-sm sm:text-base max-w-xl mx-auto mt-4">{subtitle}</p>
      )}
    </motion.div>
  );
}

function FatburnSection() {
  return (
    <section className="py-20 sm:py-28 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-amber-950/5 to-background" />
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionTitle white="TREINE" gold="COMIGO" id="planos" />

        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="glass-card glass-card-hover rounded-2xl p-6 sm:p-10 max-w-2xl mx-auto transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center">
              <Flame className="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">FATBURN</h3>
              <p className="text-amber-400/70 text-xs tracking-wider uppercase">Grupo de Emagrecimento</p>
            </div>
          </div>

          <p className="text-white/60 text-sm sm:text-base mb-6 leading-relaxed">
            Grupo de emagrecimento com competição que premia por desempenho.
            Transforme seu corpo junto com outras pessoas motivadas!
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <Clock className="w-4 h-4 text-amber-500" />
              <span>Duração: <span className="text-white font-medium">30 dias</span></span>
            </div>
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>Premiação por <span className="text-white font-medium">desempenho</span></span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
            <div>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Investimento</p>
              <p className="font-heading font-black text-3xl sm:text-4xl gold-text">
                R$ 199
              </p>
            </div>
            <a href={PAYMENT_LINKS.fatburn} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gold-gradient text-black font-heading font-bold tracking-wider px-8" data-testid="button-fatburn-buy">
                QUERO PARTICIPAR <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
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
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Dumbbell className="w-5 h-5 text-amber-500" />
            <span className="text-amber-400/70 text-xs tracking-[0.2em] uppercase font-heading">Treino Personalizado</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white mb-4">
            CONSULTORIA <span className="gold-text">INDIVIDUAL</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base max-w-xl mx-auto">
            Monto treinos para você botar em prática em qualquer lugar do mundo, disponível no app.
          </p>
          <p className="text-amber-400/60 text-xs mt-3 tracking-wider">
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
              className={`relative glass-card glass-card-hover rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                plan.popular ? "border-amber-500/30 md:scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="gold-gradient text-black text-[10px] font-heading font-bold tracking-wider px-4 py-1 rounded-full uppercase">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <p className="text-white/40 text-xs uppercase tracking-wider mb-2">{plan.months}</p>
                <h3 className="font-heading font-bold text-lg text-white mb-1">{plan.duration}</h3>
              </div>

              <div className="text-center mb-8">
                <p className="text-white/40 text-xs mb-1">A partir de</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-white/40 text-lg">R$</span>
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
                  <li key={item} className="flex items-center gap-2 text-white/60 text-sm">
                    <Check className="w-4 h-4 text-amber-500 shrink-0" />
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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-amber-950/5 to-background" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Video className="w-5 h-5 text-amber-500" />
            <span className="text-amber-400/70 text-xs tracking-[0.2em] uppercase font-heading">Acompanhamento em Tempo Real</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white mb-4">
            PERSONAL <span className="gold-text">DIGITAL</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base max-w-xl mx-auto">
            Se você precisa do acompanhamento em tempo real, para treinar com mais segurança,
            eu posso te atender por vídeo chamada.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {weekPlans.map((plan) => (
            <motion.div
              key={plan.times}
              variants={fadeInUp}
              className="glass-card glass-card-hover rounded-xl p-5 text-center transition-all duration-300"
            >
              <p className="text-amber-400 font-heading font-bold text-lg mb-1">{plan.times}</p>
              <p className="text-white/40 text-[10px] uppercase tracking-wider mb-3">na semana</p>
              <p className="font-heading font-black text-xl sm:text-2xl text-white">
                R$ {plan.price}
              </p>
              <p className="text-white/30 text-[10px] uppercase tracking-wider mt-1">/ mês</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="glass-card rounded-xl p-6 mb-8"
        >
          <p className="text-white/40 text-xs uppercase tracking-wider text-center mb-4">
            Descontos para planos mais longos (à vista)
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {discounts.map((d) => (
              <div key={d.period} className="text-center">
                <p className="text-amber-400 font-heading font-bold text-lg">{d.discount}</p>
                <p className="text-white/50 text-xs">{d.period}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="text-center">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gold-gradient text-black font-heading font-bold tracking-wider px-8" data-testid="button-personal-digital-whatsapp">
              <MessageCircle className="w-4 h-4 mr-2" /> AGENDAR VIA WHATSAPP
            </Button>
          </a>
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
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Dumbbell className="w-5 h-5 text-amber-500" />
            <span className="text-amber-400/70 text-xs tracking-[0.2em] uppercase font-heading">Balneário Camboriú</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white mb-4">
            PERSONAL <span className="gold-text">PRESENCIAL</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base max-w-xl mx-auto">
            Treine comigo com dia e hora marcados em Balneário Camboriú.
            Acompanhamento presencial com atenção total ao seu treino.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {weekPlans.map((plan) => (
            <motion.div
              key={plan.times}
              variants={fadeInUp}
              className="glass-card glass-card-hover rounded-xl p-5 text-center transition-all duration-300"
            >
              <p className="text-amber-400 font-heading font-bold text-lg mb-1">{plan.times}</p>
              <p className="text-white/40 text-[10px] uppercase tracking-wider mb-3">na semana</p>
              <p className="font-heading font-black text-xl sm:text-2xl text-white">
                R$ {plan.price}
              </p>
              <p className="text-white/30 text-[10px] uppercase tracking-wider mt-1">/ mês</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="glass-card rounded-xl p-6 mb-8"
        >
          <p className="text-white/40 text-xs uppercase tracking-wider text-center mb-4">
            Descontos para planos mais longos (à vista)
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {discounts.map((d) => (
              <div key={d.period} className="text-center">
                <p className="text-amber-400 font-heading font-bold text-lg">{d.discount}</p>
                <p className="text-white/50 text-xs">{d.period}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="glass-card rounded-xl p-6 mb-8"
        >
          <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
            <MapPin className="w-4 h-4 text-amber-500" />
            <span>Balneário Camboriú, SC - Brasil</span>
          </div>
        </motion.div>

        <div className="text-center">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gold-gradient text-black font-heading font-bold tracking-wider px-8" data-testid="button-personal-presencial-whatsapp">
              <MessageCircle className="w-4 h-4 mr-2" /> AGENDAR VIA WHATSAPP
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

function MentoriaSection() {
  return (
    <section className="py-20 sm:py-28 px-4 relative" id="mentoria">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-amber-950/5 to-background" />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="glass-card rounded-2xl p-8 sm:p-12 text-center relative border border-amber-500/20"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-black" />
            </div>
          </div>

          <div className="mt-4">
            <span className="text-amber-400/70 text-xs tracking-[0.2em] uppercase font-heading">Para Profissionais</span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white mt-3 mb-6">
              MENTORIA PARA <span className="gold-text">TREINADORES</span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
              Tenha saúde financeira e aprenda como prospectar, reter e fidelizar clientes
              diversificando seu serviço e precificando sua entrega de forma presencial e online.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {[
                { icon: <Users className="w-5 h-5" />, label: "Prospectar" },
                { icon: <Star className="w-5 h-5" />, label: "Reter" },
                { icon: <Trophy className="w-5 h-5" />, label: "Fidelizar" },
                { icon: <Calendar className="w-5 h-5" />, label: "Precificar" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-amber-500 mb-2 flex justify-center">{item.icon}</div>
                  <p className="text-white/60 text-xs font-medium">{item.label}</p>
                </div>
              ))}
            </div>

            <a href={PAYMENT_LINKS.mentoria} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gold-gradient text-black font-heading font-bold tracking-wider px-10" data-testid="button-mentoria-buy">
                QUERO A MENTORIA <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialSection() {
  return (
    <section className="py-20 sm:py-28 px-4" id="contato">
      <div className="max-w-4xl mx-auto">
        <SectionTitle white="CONHEÇA MINHAS" gold="MÍDIAS" subtitle="Acompanhe meu conteúdo nas redes sociais" />

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
            className="glass-card glass-card-hover rounded-xl p-6 text-center group transition-all duration-300"
            data-testid="link-instagram"
          >
            <Instagram className="w-8 h-8 text-amber-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="font-heading font-bold text-white text-sm">Instagram</p>
            <p className="text-white/40 text-xs mt-1">@mtorrespersonal</p>
          </motion.a>

          <motion.a
            variants={fadeInUp}
            href="https://youtube.com/@mtorrespersonal"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card glass-card-hover rounded-xl p-6 text-center group transition-all duration-300"
            data-testid="link-youtube"
          >
            <Youtube className="w-8 h-8 text-amber-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="font-heading font-bold text-white text-sm">YouTube</p>
            <p className="text-white/40 text-xs mt-1">Marcelo Torres</p>
          </motion.a>

          <motion.a
            variants={fadeInUp}
            href="https://tiktok.com/@mtorrespersonal"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card glass-card-hover rounded-xl p-6 text-center group transition-all duration-300"
            data-testid="link-tiktok"
          >
            <SiTiktok className="w-7 h-7 text-amber-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="font-heading font-bold text-white text-sm">TikTok</p>
            <p className="text-white/40 text-xs mt-1">@mtorrespersonal</p>
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
            <img src={logoMarcelo} alt="MT" className="h-8 w-8 rounded-full object-cover border border-amber-500/20" />
            <span className="font-heading font-bold text-sm tracking-wider uppercase gold-text">
              Marcelo Torres
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-amber-400 transition-colors no-underline">
              <Instagram className="w-4 h-4" />
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-amber-400 transition-colors no-underline">
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
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full" />
    </motion.a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div id="sobre" className="scroll-mt-20" />
      <FatburnSection />
      <ConsultoriaSection />
      <PersonalDigitalSection />
      <PersonalPresencialSection />
      <MentoriaSection />
      <SocialSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
