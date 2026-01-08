import React, { useState, useEffect } from 'react';
import { Menu, X, Check, Calendar, Clock, MapPin, Award, User, Download, Phone, Mail, Globe, Linkedin } from 'lucide-react';
import { Logo, AnahuacLogo } from './components/Logo';
import { Section, SectionTitle } from './components/Section';
import { NAV_ITEMS, STATS, MODULES, FACULTY } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Estado para el formulario de contacto
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Función para manejar el scroll suave con compensación de cabecera fija
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Calculamos la posición con un offset para la cabecera fija
      // 120px asegura que el título quede visible con espacio de sobra debajo del menú
      const headerOffset = 120; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Cerrar menú móvil si está abierto
      setIsMenuOpen(false);
    }
  };

  // Manejador de cambios en los inputs del formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Manejador de envío del formulario
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, phone } = formData;
    const recipient = "contacto@ielujo.com";
    const subject = encodeURIComponent("Solicito Información sobre el Diplomado Luxury Sales 2026");
    const bodyText = `Hola, soy ${name}, mi correo es ${email} por favor envíen la información al WhatsApp ${phone} o bien por este medio.`;
    const body = encodeURIComponent(bodyText);
    
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  // Mensaje para el botón del menú superior (Inscripción directa)
  const headerWhatsappMessage = encodeURIComponent("Deseo inscribirme en el Diplomado Luxury Sales de La Universidad Anáhuac y el Instituto Europeo del Lujo, ¿pueden enviarme información y requerimientos?");
  const headerWhatsappLink = `https://wa.me/525561039849?text=${headerWhatsappMessage}`;

  // Mensaje para la sección de contacto (Información detallada)
  const contactWhatsappMessage = encodeURIComponent("Deseo más información sobre el Diplomado Luxury Sales de La Universidad Anáhuac y el Instituto Europeo del Lujo, ¿pueden enviarme información sobre profesorado, programa , facilidades y requerimientos?");
  const contactWhatsappLink = `https://wa.me/525561039849?text=${contactWhatsappMessage}`;

  // Configuración de correo electrónico con asunto y cuerpo predefinidos (Icono de Mail)
  const contactEmail = "contacto@ielujo.com";
  const emailSubject = encodeURIComponent("Información Sobre el Diplomado Luxury Sales");
  const emailBody = encodeURIComponent("Hola, deseo me envíen información detallada sobre el Diplomado Luxury Sales de La Universidad Anáhuac y el Instituto Europeo del Lujo que comienza el 5 de Septiembre de 2026:  profesorado, programa detallado , facilidades de pago y requerimientos.");
  const mailtoLink = `mailto:${contactEmail}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Left: IELujo Logo */}
          <div className="flex items-center cursor-default">
             <Logo variant={scrolled ? 'dark' : 'dark'} />
          </div>

          {/* Right: Menu, CTA & Anahuac Logo */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-xs uppercase tracking-widest font-medium text-brand-blue hover:text-brand-gold transition-colors"
              >
                {item.label}
              </a>
            ))}
            
            <a 
              href={headerWhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-brand-blue text-white text-xs uppercase tracking-widest hover:bg-brand-gold transition-colors duration-300"
            >
              Inscribirse
            </a>

            <div className="h-8 w-[1px] bg-gray-300"></div>

            <AnahuacLogo variant={scrolled ? 'dark' : 'dark'} />
          </div>

          {/* Mobile Toggle */}
          <button onClick={toggleMenu} className="md:hidden text-brand-blue">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 py-8 px-4 shadow-xl flex flex-col gap-4 md:hidden">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm uppercase tracking-widest text-brand-blue py-2 border-b border-gray-50"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-50 flex justify-center">
               <AnahuacLogo />
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.ielujo.com/wp-content/uploads/2025/12/IMG_20221001_105511-scaled.jpg" 
            alt="Luxury Retail Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="animate-fade-in-up">
            <div className="flex gap-4 mb-6">
                <span className="px-3 py-1 bg-brand-gold text-white text-[10px] uppercase tracking-widest font-bold">10ª Generación</span>
                <span className="px-3 py-1 bg-brand-blue text-white text-[10px] uppercase tracking-widest font-bold">5 Septiembre 2026</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-brand-blue leading-[1.1] mb-6">
              Diplomado <br />
              <span className="italic text-brand-gold">Luxury Sales</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              Domina las estrategias de comercialización y venta diferencial de artículos y servicios de lujo y la construcción de experiencias inolvidables con la escuela de negocios del lujo líder en Latinoamérica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://www.ielujo.com/pf/diplomado-luxury-sales/" target="_blank" rel="noreferrer" className="px-8 py-4 bg-brand-blue text-white text-xs md:text-sm uppercase tracking-widest hover:bg-brand-gold transition-colors text-center font-bold">
                Instituto Europeo del Lujo
              </a>
              <a href="https://educacioncontinua.anahuac.mx/products/diplomado-en-luxury-sales?variant=50645071003958" target="_blank" rel="noreferrer" className="px-8 py-4 border border-brand-blue text-brand-blue text-xs md:text-sm uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-colors text-center flex items-center justify-center gap-2 font-bold">
                 Universidad Anáhuac
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-brand-blue py-16 text-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20">
              {STATS.map((stat, index) => (
                <div key={index} className="text-center pt-8 md:pt-0 px-4">
                  <span className="block font-serif text-4xl md:text-5xl mb-2 text-brand-gold">{stat.value}</span>
                  <span className="text-xs uppercase tracking-widest opacity-80">{stat.label}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Program Introduction */}
      <Section id="program">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle 
              subtitle="Excelencia Académica con Doble Certificación" 
              title="Instituto Europeo del Lujo & Universidad Anáhuac" 
              align="left"
            />
            <p className="text-gray-600 mb-6 leading-relaxed">
              El <strong>Instituto Europeo del Lujo (IELujo)</strong> es la escuela de negocios líder en Latinoamérica en la formación sobre el sector del lujo desde 2017.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Este diplomado es un curso monográfico intensivo sobre la comercialización y venta de productos y servicios de lujo, diseñado para ayudar a marcas de lujo y premium.
            </p>
            <div className="bg-brand-gray p-6 border-l-4 border-brand-gold">
              <p className="italic text-brand-blue font-serif text-lg">
                "Frank Sánchez, CEO del Instituto Europeo del Lujo ha sido reconocido en los años 2023, 2024 y 2026 como Top Retail Expert por Rethink Retail & Microsoft como uno los 39 académicos más influyentes a nivel mundial en retail, el único que lo hace en Español y desde Iberoamérica."
              </p>
            </div>
          </div>
          <div className="relative">
             <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-gold"></div>
             <img 
              src="https://www.ielujo.com/wp-content/uploads/2025/12/IMG_20250322_093313-scaled.jpg" 
              alt="Classroom" 
              className="w-full h-auto shadow-2xl relative z-10"
             />
             <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-gold z-0"></div>
          </div>
        </div>
      </Section>

      {/* Modules Section (Moved up) */}
      <Section id="modules" bg="gray">
        <SectionTitle subtitle="Plan de Estudios" title="Estructura Académica" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MODULES.map((module) => (
            <div key={module.id} className="group bg-white border border-gray-100 hover:border-brand-gold/50 p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <span className="text-brand-gold font-serif text-5xl opacity-20 group-hover:opacity-100 transition-opacity absolute -mt-4 -ml-2">
                {module.id}
              </span>
              <div className="relative z-10 pt-4">
                <h3 className="font-serif text-xl text-brand-blue mb-4 min-h-[3.5rem] flex items-end">
                    {module.title}
                </h3>
                <ul className="space-y-2">
                  {module.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                      <span className="mt-1.5 w-1 h-1 bg-brand-gold rounded-full shrink-0"></span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">Duración total: 80 horas de formación especializada</p>
        </div>
      </Section>

      {/* Key Details Grid (Moved down) */}
      <Section id="details">
        <SectionTitle subtitle="Información General" title="Detalles de Programa" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DetailCard 
            icon={<Calendar className="text-brand-gold" size={32} />}
            title="Fechas"
            content={
              <>
                <span className="block font-semibold">Inicio: 05 Sept 2026</span>
                <span className="block text-gray-500">Fin: 14 Nov 2026</span>
              </>
            }
          />
          <DetailCard 
            icon={<Clock className="text-brand-gold" size={32} />}
            title="Horario"
            content="Sábados 8:00 A.M. a 3:00 P.M. (11 Sesiones)"
          />
          <DetailCard 
            icon={<Award className="text-brand-gold" size={32} />}
            title="Modalidad"
            content="Online en vivo + 3 Sesiones Híbridas + Mentoring"
          />
          <DetailCard 
            icon={<Check className="text-brand-gold" size={32} />}
            title="Inversión"
            content={
              <>
                <span className="block font-serif text-2xl text-brand-blue">$45,000 MXN</span>
                <span className="block text-xs text-gray-500">IVA Incluido con facilidades de pago</span>
              </>
            }
          />
        </div>

        <div className="mt-12 text-center">
            <h3 className="text-brand-blue font-bold uppercase tracking-widest mb-4">Dirigido A</h3>
            <p className="max-w-2xl mx-auto text-gray-600">
                Empresarios, directivos, managers de retail, equipos de venta, profesionales del marketing y todos aquellos que deseen dominar el arte de la venta de lujo.
            </p>
        </div>
      </Section>

      {/* Faculty Section */}
      <Section id="profesorado" bg="gray">
        <SectionTitle subtitle="Reconocidos Expertos en el sector del Lujo" title="Nuestro Profesorado" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACULTY.map((prof, idx) => (
            <div key={idx} className="bg-white group overflow-hidden">
              <div className="relative overflow-hidden aspect-[4/5]">
                {prof.linkedin ? (
                    <a href={prof.linkedin} target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer relative">
                         <img 
                          src={prof.image} 
                          alt={prof.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                           <div className="w-full flex justify-between items-end">
                                <p className="text-white text-sm">{prof.company}</p>
                                <Linkedin className="text-white hover:text-brand-gold transition-colors" size={20} />
                           </div>
                        </div>
                    </a>
                ) : (
                    <>
                        <img 
                          src={prof.image} 
                          alt={prof.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                           <p className="text-white text-sm">{prof.company}</p>
                        </div>
                    </>
                )}
              </div>
              <div className="p-6 border-b-2 border-transparent group-hover:border-brand-gold transition-colors">
                <h3 className="font-serif text-lg text-brand-blue mb-1">{prof.name}</h3>
                <p className="text-xs uppercase tracking-widest text-brand-gold">{prof.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA / Contact Section */}
      <Section id="contact" bg="dark" className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute transform -rotate-45 -top-1/2 -left-1/4 w-full h-[200%] bg-white/10"></div>
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Inicia tu transformación profesional</h2>
                <p className="text-gray-300 text-lg mb-8">
                    Inscríbete en la 10ª generación de expertos en comercialización de artículos y servicios de lujo. Descubrirás los secretos de cómo provocar el deseo de los que más dinero tienen .
                </p>
                
                <div className="space-y-6">
                    {/* WhatsApp Button with Logo */}
                    <a 
                        href={contactWhatsappLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 group cursor-pointer"
                    >
                        <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full group-hover:bg-brand-gold/20 transition-colors">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-brand-gold">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                        </div>
                        <div>
                            <span className="block text-xs uppercase text-gray-400">WhatsApp</span>
                            <span className="text-white group-hover:text-brand-gold transition-colors font-medium">+52 55 6103 9849</span>
                        </div>
                    </a>
                    
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full">
                            <Mail className="text-brand-gold" size={24} />
                        </div>
                        <div>
                            <span className="block text-xs uppercase text-gray-400">Correo Electrónico</span>
                            <a href={mailtoLink} className="text-white hover:text-brand-gold transition-colors font-medium">contacto@ielujo.com</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full">
                            <Globe className="text-brand-gold" size={24} />
                        </div>
                        <div>
                            <span className="block text-xs uppercase text-gray-400">Sitio Web</span>
                            <a href="https://www.ielujo.com" target="_blank" rel="noreferrer" className="text-white hover:text-brand-gold transition-colors font-medium">www.ielujo.com</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white text-brand-dark p-8 md:p-10 shadow-2xl">
                <h3 className="font-serif text-2xl text-brand-blue mb-6">Solicitar Información</h3>
                <form className="space-y-4" onSubmit={handleFormSubmit}>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Nombre Completo *</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-brand-gray border border-gray-200 p-3 focus:outline-none focus:border-brand-gold transition-colors" 
                          placeholder="Tu nombre" 
                        />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Correo Electrónico *</label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-brand-gray border border-gray-200 p-3 focus:outline-none focus:border-brand-gold transition-colors" 
                          placeholder="tu@email.com" 
                        />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Teléfono *</label>
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-brand-gray border border-gray-200 p-3 focus:outline-none focus:border-brand-gold transition-colors" 
                          placeholder="+52 ..." 
                        />
                    </div>
                    <button type="submit" className="w-full bg-brand-blue text-white py-4 uppercase tracking-widest text-sm font-bold hover:bg-brand-gold transition-colors mt-4">
                        Enviar Solicitud
                    </button>
                </form>
            </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white border-t border-white/10 py-12">
         <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-6 opacity-70">
                <a href="https://www.ielujo.com/pf/diplomado-luxury-sales/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
                    <Logo variant="light" />
                </a>
                <span className="hidden sm:block h-8 w-[1px] bg-white/30"></span>
                <a href="https://educacioncontinua.anahuac.mx/products/diplomado-en-luxury-sales?variant=50645071003958" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
                    <AnahuacLogo variant="light" className="opacity-80" />
                </a>
            </div>
            <p className="text-gray-500 text-sm text-center md:text-right">
                &copy; 2025 Instituto Europeo del Lujo. Todos los derechos reservados.
            </p>
         </div>
      </footer>
    </div>
  );
};

// Helper Component for Details
const DetailCard: React.FC<{ icon: React.ReactNode, title: string, content: React.ReactNode }> = ({ icon, title, content }) => (
  <div className="bg-white p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300 border-t-2 border-brand-gold">
    <div className="mb-4">{icon}</div>
    <h4 className="text-brand-blue font-serif text-lg mb-2">{title}</h4>
    <div className="text-gray-600 text-sm leading-relaxed">{content}</div>
  </div>
);

export default App;