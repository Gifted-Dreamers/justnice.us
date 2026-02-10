/**
 * justNICE.us — Spanish/English Translation System
 * Lightweight i18n for static HTML pages.
 *
 * Usage:
 *   1. Add data-i18n="key" to any element whose textContent should be translated.
 *   2. Add data-i18n-placeholder="key" for input/textarea placeholders.
 *   3. Add data-i18n-aria="key" for aria-label attributes.
 *   4. Include this script on every page and call initTranslation().
 *   5. The language toggle button should have id="lang-toggle".
 */

var JUSTNICE_TRANSLATIONS = {

  // ── Navigation ──────────────────────────────────────
  'nav.home':               { en: 'Home',                  es: 'Inicio' },
  'nav.resources':          { en: 'Immigrant Resources',   es: 'Recursos para Inmigrantes' },
  'nav.kyr':                { en: 'Know Your Rights',      es: 'Conoce Tus Derechos' },
  'nav.blog':               { en: 'Blog',                  es: 'Blog' },
  'nav.map':                { en: 'Resource Map',          es: 'Mapa de Recursos' },
  'nav.donate':             { en: 'Donate',                es: 'Donar' },

  // ── Landing Page Hero ──────────────────────────────
  'hero.title':             { en: 'Know Your Rights. Protect Your Community.',
                              es: 'Conoce Tus Derechos. Protege Tu Comunidad.' },
  'hero.subtitle':          { en: 'Free resources, legal guides, and community defense training — because preparation is power.',
                              es: 'Recursos gratuitos, guías legales y capacitación en defensa comunitaria — porque la preparación es poder.' },
  'hero.cta.resources':     { en: 'Immigrant Resources',   es: 'Recursos para Inmigrantes' },
  'hero.cta.kyr':           { en: 'Know Your Rights',      es: 'Conoce Tus Derechos' },

  // ── Landing Page Cards ─────────────────────────────
  'card.resources.title':   { en: 'Immigrant Resources',   es: 'Recursos para Inmigrantes' },
  'card.resources.desc':    { en: 'Comprehensive guide covering legal aid, rapid response networks, bond funds, family preparedness, and constitutional rights.',
                              es: 'Guía completa que cubre asistencia legal, redes de respuesta rápida, fondos de fianza, preparación familiar y derechos constitucionales.' },
  'card.kyr.title':         { en: 'Know Your Rights Training', es: 'Capacitación Conoce Tus Derechos' },
  'card.kyr.desc':          { en: 'S.A.L.U.T.E. framework, observer training, rapid response protocols, and community defense strategies.',
                              es: 'Marco S.A.L.U.T.E., capacitación de observadores, protocolos de respuesta rápida y estrategias de defensa comunitaria.' },
  'card.cta':               { en: 'Read Guide',            es: 'Leer Guía' },

  // ── Homepage: Cards section heading ─────────────────
  'home.cards.title':       { en: 'Comprehensive Resource Guides', es: 'Guías de Recursos Completas' },

  // ── Resource Map ───────────────────────────────────
  'map.title':              { en: 'Find Resources Near You', es: 'Encuentra Recursos Cerca de Ti' },
  'map.subtitle':           { en: 'Legal aid offices, rapid response hotlines, mutual aid networks, bond funds, and training sessions across the United States.',
                              es: 'Oficinas de asistencia legal, líneas de respuesta rápida, redes de ayuda mutua, fondos de fianza y sesiones de capacitación en todo Estados Unidos.' },
  'map.help.click':         { en: 'Click a pin for details. Use the filters below to narrow by resource type.',
                              es: 'Haz clic en un marcador para más detalles. Usa los filtros para buscar por tipo de recurso.' },
  'map.help.submit':        { en: 'Submit a new resource', es: 'Enviar un nuevo recurso' },
  'map.help.updated':       { en: 'Last updated:', es: 'Última actualización:' },
  'map.filter.all':         { en: 'All',                   es: 'Todos' },
  'map.filter.hotline':     { en: 'Hotlines',              es: 'Líneas de Ayuda' },
  'map.filter.legal':       { en: 'Legal Aid',             es: 'Asistencia Legal' },
  'map.filter.mutual_aid':  { en: 'Mutual Aid',            es: 'Ayuda Mutua' },
  'map.filter.bond_fund':   { en: 'Bond Funds',            es: 'Fondos de Fianza' },
  'map.filter.training':    { en: 'Training',              es: 'Capacitación' },

  // ── Key Reminders ──────────────────────────────────
  'reminders.title':        { en: 'Key Reminders',         es: 'Recordatorios Clave' },
  'reminders.1':            { en: 'Everyone has constitutional rights regardless of immigration status',
                              es: 'Todos tienen derechos constitucionales sin importar su estado migratorio' },
  'reminders.2':            { en: 'You have the right to remain silent',
                              es: 'Tienes derecho a guardar silencio' },
  'reminders.3':            { en: 'Do not open the door without a judicial warrant',
                              es: 'No abras la puerta sin una orden judicial' },
  'reminders.4':            { en: 'Do not sign anything you do not understand',
                              es: 'No firmes nada que no entiendas' },
  'reminders.5':            { en: 'You have the right to an attorney',
                              es: 'Tienes derecho a un abogado' },
  'reminders.6':            { en: 'Memorize emergency contacts and your family preparedness plan',
                              es: 'Memoriza los contactos de emergencia y tu plan de preparación familiar' },
  // Homepage Key Reminders (lead = bold, rest = following text)
  'reminders.home.1.lead': { en: 'You have constitutional rights regardless of immigration status',
                              es: 'Tienes derechos constitucionales sin importar tu estado migratorio' },
  'reminders.home.1.rest': { en: ' — including the right to remain silent, the right to an attorney, and the right to refuse entry without a judicial warrant.',
                              es: ' — incluido el derecho a guardar silencio, el derecho a un abogado y el derecho a negar la entrada sin una orden judicial.' },
  'reminders.home.2.lead': { en: 'Do not open the door',
                              es: 'No abras la puerta' },
  'reminders.home.2.rest': { en: ' for ICE unless they show a judicial warrant signed by a judge.',
                              es: ' a ICE a menos que muestren una orden judicial firmada por un juez.' },
  'reminders.home.3.lead': { en: 'Do not sign anything',
                              es: 'No firmes nada' },
  'reminders.home.3.rest': { en: ' without speaking to a lawyer.',
                              es: ' sin hablar con un abogado.' },
  'reminders.home.4.lead': { en: 'Do not carry a foreign passport',
                              es: 'No portes un pasaporte extranjero' },
  'reminders.home.4.rest': { en: ' — it can accelerate deportation.',
                              es: ' — puede acelerar la deportación.' },
  'reminders.home.5.lead': { en: 'Preparation is power',
                              es: 'La preparación es poder' },
  'reminders.home.5.rest': { en: ' — complete a family preparedness plan today.',
                              es: ' — completa un plan de preparación familiar hoy.' },
  'reminders.home.6.lead': { en: 'Save your local rapid response hotline',
                              es: 'Guarda la línea de respuesta rápida de tu localidad' },
  'reminders.home.6.rest': { en: ' in your phone now.',
                              es: ' en tu teléfono ahora.' },

  // ── Donate Section ─────────────────────────────────
  'donate.title':           { en: 'Support Our Community',  es: 'Apoya a Nuestra Comunidad' },
  'donate.desc':            { en: 'All donations go 100% to mutual aid through Gifted Dreamers, Inc., a Texas-based 501(c)(3).',
                              es: 'Todas las donaciones van 100% a ayuda mutua a través de Gifted Dreamers, Inc., una organización 501(c)(3) de Texas.' },
  'donate.button':         { en: 'Donate Now',              es: 'Donar Ahora' },

  // ── Footer ─────────────────────────────────────────
  'footer.about.title':     { en: 'About justNICE',        es: 'Acerca de justNICE' },
  'footer.about.desc':      { en: 'justNICE provides free, community-sourced immigrant resources and Know Your Rights training guides. We believe preparation is power and that every person deserves access to information that protects their rights.',
                              es: 'justNICE proporciona recursos gratuitos para inmigrantes y guías de capacitación Conoce Tus Derechos. Creemos que la preparación es poder y que toda persona merece acceso a información que proteja sus derechos.' },
  'footer.contact.title':   { en: 'Share a Resource or Send a Message',
                              es: 'Comparte un Recurso o Envía un Mensaje' },
  'footer.contact.desc':    { en: 'Only message is required. All other fields are optional.',
                              es: 'Solo el mensaje es obligatorio. Los demás campos son opcionales.' },
  'footer.donate.title':    { en: 'Support Our Community',  es: 'Apoya a Nuestra Comunidad' },
  'footer.donate.desc':     { en: 'All donations go 100% to mutual aid.',
                              es: 'Todas las donaciones van 100% a ayuda mutua.' },
  'footer.copyright.org':   { en: 'Gifted Dreamers, Inc.', es: 'Gifted Dreamers, Inc.' },
  'footer.copyright.info':  { en: 'Texas-based 501(c)(3) EIN 39-3863796',
                              es: 'Organización 501(c)(3) de Texas EIN 39-3863796' },
  'footer.opensource':       { en: 'Open Source',            es: 'Código Abierto' },

  // ── Contact Form ───────────────────────────────────
  'form.message.label':     { en: 'Your message',          es: 'Tu mensaje' },
  'form.message.placeholder': { en: 'Paste a URL, share a resource, or send a message...',
                              es: 'Pega una URL, comparte un recurso o envía un mensaje...' },
  'form.name.label':        { en: 'Name',                  es: 'Nombre' },
  'form.name.placeholder':  { en: 'Your name',             es: 'Tu nombre' },
  'form.email.label':       { en: 'Email',                 es: 'Correo electrónico' },
  'form.email.placeholder': { en: 'Your email',            es: 'Tu correo electrónico' },
  'form.url.label':         { en: 'URL',                   es: 'URL' },
  'form.url.placeholder':   { en: 'URL to submit for addition', es: 'URL para agregar' },
  'form.category.label':    { en: 'Category / Section',    es: 'Categoría / Sección' },
  'form.category.select':   { en: 'Select a category...',  es: 'Selecciona una categoría...' },
  'form.category.general':  { en: 'General',               es: 'General' },
  'form.category.resources':{ en: 'Immigrant Resources',   es: 'Recursos para Inmigrantes' },
  'form.category.kyr':      { en: 'Know Your Rights',      es: 'Conoce Tus Derechos' },
  'form.category.blog':     { en: 'Blog',                  es: 'Blog' },
  'form.category.map':      { en: 'Resource Map',          es: 'Mapa de Recursos' },
  'form.category.other':    { en: 'Other',                 es: 'Otro' },
  'form.submit':            { en: 'Submit',                 es: 'Enviar' },
  'form.submit.anon':       { en: 'Send Anonymously',      es: 'Enviar Anónimamente' },
  'form.optional':          { en: '(optional)',             es: '(opcional)' },
  'form.success':           { en: 'Thank you! Your message has been sent.',
                              es: '¡Gracias! Tu mensaje ha sido enviado.' },
  'form.error':             { en: 'Something went wrong. Please try again.',
                              es: 'Algo salió mal. Inténtalo de nuevo.' },
  'form.sending':           { en: 'Sending...',            es: 'Enviando...' },

  // ── Page Titles ────────────────────────────────────
  'page.resources.title':   { en: 'Immigrant Resources & Community Defense Guide',
                              es: 'Guía de Recursos para Inmigrantes y Defensa Comunitaria' },
  'page.kyr.title':         { en: 'Know Your Rights — ICE Encounter Training',
                              es: 'Conoce Tus Derechos — Capacitación sobre Encuentros con ICE' },
  'page.blog.title':        { en: 'Blog',                  es: 'Blog' },
  'page.blog.subtitle':     { en: 'Analysis, research, and community defense strategies',
                              es: 'Análisis, investigación y estrategias de defensa comunitaria' },

  // ── Blog Article Titles ────────────────────────────
  'blog.surveillance.title': { en: 'Defeating Facial Recognition in an AI Surveillance Era',
                               es: 'Derrotando el Reconocimiento Facial en la Era de Vigilancia con IA' },
  'blog.market.title':       { en: 'Anti-Surveillance Technology & Wearables: Market Analysis',
                               es: 'Tecnología Anti-Vigilancia y Wearables: Análisis de Mercado' },
  'blog.category.tech':      { en: 'Technology & Privacy', es: 'Tecnología y Privacidad' },
  'blog.surveillance.desc':  { en: 'The proliferation of AI-powered surveillance has created an urgent need for counter-surveillance tools. A comprehensive breakdown of existing countermeasures, innovations, and concepts that don\'t yet exist but could prove critical.',
                               es: 'La proliferación de la vigilancia con IA ha creado una necesidad urgente de herramientas contra la vigilancia. Un análisis de las contramedidas existentes, innovaciones y conceptos que aún no existen pero podrían ser críticos.' },
  'blog.market.desc':       { en: 'An in-depth look at the surveillance landscape, market sizes, key players, regulatory impact, and strategic opportunities in the growing counter-surveillance industry.',
                              es: 'Una mirada profunda al panorama de la vigilancia, tamaños de mercado, actores clave, impacto regulatorio y oportunidades estratégicas en la industria creciente de contra-vigilancia.' },
  'blog.read_more':          { en: 'Read more →', es: 'Leer más →' },

  // ── Immigrant Resources page ──────────────────────
  'res.intro':              { en: 'A comprehensive directory of free and low-cost legal services, mutual aid networks, bond funds, rapid response hotlines, family preparedness tools, and community support for immigrants in the United States.',
                              es: 'Un directorio completo de servicios legales gratuitos y de bajo costo, redes de ayuda mutua, fondos de fianza, líneas de respuesta rápida, herramientas de preparación familiar y apoyo comunitario para inmigrantes en Estados Unidos.' },
  'res.toc.part1':          { en: 'Part 1: Emergency Hotlines', es: 'Parte 1: Líneas de Emergencia' },
  'res.toc.part2':          { en: 'Part 2: Legal Services', es: 'Parte 2: Servicios Legales' },
  'res.toc.part3':          { en: 'Part 3: Bond Funds', es: 'Parte 3: Fondos de Fianza' },
  'res.toc.part4':          { en: 'Part 4: Finding a Detained Loved One', es: 'Parte 4: Encontrar a un Familiar Detenido' },
  'res.toc.part5':          { en: 'Part 5: Family Preparedness', es: 'Parte 5: Preparación Familiar' },
  'res.toc.part6':          { en: 'Part 6: Mutual Aid Networks', es: 'Parte 6: Redes de Ayuda Mutua' },
  'res.toc.part7':          { en: 'Part 7: Worker Rights', es: 'Parte 7: Derechos Laborales' },
  'res.toc.part8':          { en: 'Part 8: Resource Hubs', es: 'Parte 8: Centros de Recursos' },
  'res.toc.kyr_cards':      { en: 'Quick-Reference: KYR Cards', es: 'Referencia Rápida: Tarjetas CDT' },
  'res.toc.reminders':      { en: 'Key Reminders', es: 'Recordatorios Clave' },
  'res.p1.title':           { en: 'Part 1: Emergency Hotlines & Rapid Response Networks', es: 'Parte 1: Líneas de Emergencia y Redes de Respuesta Rápida' },
  'res.p1.national':        { en: 'National Hotlines', es: 'Líneas Nacionales' },
  'res.p1.regional':        { en: 'Regional Hotlines by City/State', es: 'Líneas Regionales por Ciudad/Estado' },
  'res.p1.california':      { en: 'California Rapid Response Network Hotlines', es: 'Líneas de la Red de Respuesta Rápida de California' },
  'res.p2.title':           { en: 'Part 2: Free & Low-Cost Legal Services', es: 'Parte 2: Servicios Legales Gratuitos y de Bajo Costo' },
  'res.p3.title':           { en: 'Part 3: Immigration Bond Funds', es: 'Parte 3: Fondos de Fianza para Inmigración' },
  'res.p4.title':           { en: 'Part 4: Finding a Detained Loved One', es: 'Parte 4: Encontrar a un Familiar Detenido' },
  'res.p5.title':           { en: 'Part 5: Family Emergency Preparedness', es: 'Parte 5: Preparación Familiar de Emergencia' },
  'res.p6.title':           { en: 'Part 6: Mutual Aid Networks & Community Support', es: 'Parte 6: Redes de Ayuda Mutua y Apoyo Comunitario' },
  'res.p7.title':           { en: 'Part 7: Worker Rights & Workplace Protections', es: 'Parte 7: Derechos Laborales y Protecciones en el Trabajo' },
  'res.p8.title':           { en: 'Part 8: Comprehensive Resource Hubs', es: 'Parte 8: Centros de Recursos Completos' },
  'res.th.hotline':         { en: 'Hotline', es: 'Línea de Ayuda' },
  'res.th.number':          { en: 'Number', es: 'Número' },
  'res.th.hours_notes':     { en: 'Hours / Notes', es: 'Horario / Notas' },
  'res.th.location':        { en: 'Location', es: 'Ubicación' },
  'res.th.area':            { en: 'Area', es: 'Área' },
  'res.th.organization':    { en: 'Organization', es: 'Organización' },
  'res.th.resource':        { en: 'Resource', es: 'Recurso' },
  'res.th.languages':       { en: 'Languages', es: 'Idiomas' },
  'res.th.link':            { en: 'Link', es: 'Enlace' },
  // Part 1 National Hotlines table
  'res.p1.nat.1.name':     { en: 'United We Dream Hotline', es: 'Línea de United We Dream' },
  'res.p1.nat.1.notes':    { en: 'National immigration emergency line', es: 'Línea nacional de emergencia de inmigración' },
  'res.p1.nat.2.name':     { en: 'National Immigration Detention Hotline (Freedom for Immigrants)', es: 'Línea Nacional de Detención de Inmigración (Freedom for Immigrants)' },
  'res.p1.nat.2.number_t': { en: 'Dial 9233# from detention facility phone', es: 'Marque 9233# desde el teléfono del centro de detención' },
  'res.p1.nat.2.notes':    { en: 'Mon–Fri, 8 AM – 8 PM PT / 11 AM – 11 PM ET', es: 'Lun–Vie, 8:00 – 20:00 PT / 11:00 – 23:00 ET' },
  'res.p1.nat.3.name':     { en: 'UNHCR Refugee/Asylum Hotline', es: 'Línea de Refugiados/Asilo de ACNUR' },
  'res.p1.nat.3.notes':    { en: 'For refugees and asylum seekers', es: 'Para refugiados y solicitantes de asilo' },
  'res.p1.nat.4.name':     { en: 'NAKASEC (Korean/English)', es: 'NAKASEC (coreano/inglés)' },
  'res.p1.nat.4.notes':    { en: '24-hour hotline', es: 'Línea 24 horas' },
  'res.p1.nat.5.name':     { en: 'SPLC Southeast Immigrant Freedom Initiative (SIFI)', es: 'SPLC Iniciativa de Libertad para Inmigrantes del Sureste (SIFI)' },
  'res.p1.nat.5.notes':    { en: 'Helpline for detained immigrants in the South', es: 'Línea de ayuda para inmigrantes detenidos en el Sur' },
  'res.p1.nat.6.name':     { en: 'Tahirih Afghan Asylum Line', es: 'Línea de Asilo Afgano Tahirih' },
  'res.p1.nat.6.notes':    { en: 'Mon–Fri, 10 AM – 4 PM ET', es: 'Lun–Vie, 10:00 – 16:00 ET' },
  'res.p1.nat.7.name':     { en: 'NIJC (If detained by ICE)', es: 'NIJC (Si está detenido por ICE)' },
  'res.p1.nat.7.notes':    { en: 'immigrantjustice.org', es: 'immigrantjustice.org' },
  'res.p1.nat.8.name':     { en: 'ABA Guantanamo Bay Hotline', es: 'Línea de Guantánamo Bay del Colegio de Abogados' },
  'res.p1.nat.8.notes':    { en: 'Only for confirmed Guantanamo Bay detainees', es: 'Solo para detenidos confirmados en Guantánamo Bay' },
  'res.p1.nat.9.name':     { en: 'Mexican Consular Hotline', es: 'Línea Consular Mexicana' },
  'res.p1.nat.9.notes':    { en: 'Emergency assistance for Mexican nationals', es: 'Asistencia de emergencia para nacionales mexicanos' },

  // ── KYR Training page ──────────────────────────────
  'kyr.intro':             { en: 'A comprehensive resource guide for Know Your Rights (KYR) trainings, Legal/Constitutional Observer trainings, and related resources in response to escalating U.S. immigration enforcement.',
                              es: 'Una guía completa de recursos para capacitaciones Conoce Tus Derechos (CTD), capacitaciones de Observadores Legales/Constitucionales y recursos relacionados ante el aumento de la aplicación de leyes de inmigración en EE. UU.' },
  'kyr.toc.context':       { en: 'Current Context', es: 'Contexto Actual' },
  'kyr.toc.p1':            { en: 'Part 1: KYR Training', es: 'Parte 1: Capacitación CDT' },
  'kyr.toc.kyr_covers':    { en: 'What KYR Covers', es: 'Qué Cubre CDT' },
  'kyr.toc.kyr_resources': { en: 'Key KYR Resources', es: 'Recursos Clave CDT' },
  'kyr.toc.kyr_sessions':   { en: 'Upcoming Training Sessions', es: 'Próximas Sesiones de Capacitación' },
  'kyr.toc.p2':            { en: 'Part 2: Legal Observer Training', es: 'Parte 2: Capacitación de Observadores Legales' },
  'kyr.toc.what_it_is':    { en: 'What It Is', es: 'Qué Es' },
  'kyr.toc.what_teach':    { en: 'What Trainings Teach', es: 'Qué Enseñan las Capacitaciones' },
  'kyr.toc.salute':        { en: 'S.A.L.U.T.E. Framework', es: 'Marco S.A.L.U.T.E.' },
  'kyr.toc.programs':      { en: 'Training Programs & Sign-Ups', es: 'Programas y Registro' },
  'kyr.toc.copal':         { en: 'COPAL Handbook', es: 'Manual COPAL' },
  'kyr.toc.p3':            { en: 'Part 3: Legal & Safety', es: 'Parte 3: Legal y Seguridad' },
  'kyr.toc.can_do':        { en: 'What Observers CAN Do', es: 'Qué PUEDEN Hacer los Observadores' },
  'kyr.toc.should_not':    { en: 'What Observers Should NOT Do', es: 'Qué NO Deben Hacer los Observadores' },
  'kyr.toc.risks':         { en: 'Risks', es: 'Riesgos' },
  'kyr.toc.p4':            { en: 'Part 4: Additional Resources', es: 'Parte 4: Recursos Adicionales' },
  'kyr.toc.takeaway':      { en: 'Key Takeaway', es: 'Mensaje Clave' },
  'kyr.context.title':     { en: 'Current Context: Why This Is Surging Now', es: 'Contexto Actual: Por Qué Está Aumentando Ahora' },
  'kyr.context.p1':        { en: 'Immigration enforcement has escalated dramatically across the United States since early 2025, and especially in early 2026 following high-profile incidents in Minneapolis. In response, a nationwide movement of Know Your Rights trainings and Legal/Constitutional Observer trainings has surged:',
                              es: 'La aplicación de leyes de inmigración ha aumentado drásticamente en todo Estados Unidos desde principios de 2025, y especialmente en 2026 tras incidentes en Minneapolis. En respuesta, ha crecido un movimiento nacional de capacitaciones Conoce Tus Derechos y de Observadores Legales/Constitucionales:' },
  'kyr.context.stat1':     { en: 'Minnesotans trained as constitutional observers, with the Immigrant Defense Network averaging over 2,000 people trained per week', es: 'Minnesotanos capacitados como observadores constitucionales; la Red de Defensa del Inmigrante promedia más de 2,000 personas capacitadas por semana' },
  'kyr.context.stat2':     { en: 'Viewers tuned into the No Kings coalition\'s first "Eyes on ICE" virtual training on January 26, 2026, with a follow-up session on February 5', es: 'Espectadores sintonizaron la primera capacitación virtual "Eyes on ICE" de la coalición No Kings el 26 de enero de 2026, con una sesión de seguimiento el 5 de febrero' },
  'kyr.context.stat3':     { en: 'In Wisconsin, one organizer opened 45 spots that filled in a day, expanded to 100 — which also sold out with 50 on the waitlist', es: 'En Wisconsin, un organizador abrió 45 cupos que se llenaron en un día, amplió a 100 — que también se agotaron con 50 en lista de espera' },
  'kyr.context.stat4':     { en: 'Of Americans say it is acceptable to record immigration officers (Pew Research Center); a FOX News poll found more than half of voters believe ICE tactics are "too aggressive"', es: 'De estadounidenses dicen que es aceptable grabar a oficiales de inmigración (Pew Research Center); una encuesta de FOX News encontró que más de la mitad de los votantes cree que las tácticas de ICE son "demasiado agresivas"' },
  'kyr.p1.title':         { en: 'Part 1: Know Your Rights (KYR) Training', es: 'Parte 1: Capacitación Conoce Tus Derechos (CTD)' },
  'kyr.p1.covers_title':   { en: 'What KYR Trainings Cover', es: 'Qué Cubren las Capacitaciones CDT' },
  'kyr.p1.covers_intro':   { en: 'KYR trainings educate individuals — particularly immigrants and community members — on their constitutional rights regardless of immigration status.', es: 'Las capacitaciones CDT educan a las personas — en particular a inmigrantes y miembros de la comunidad — sobre sus derechos constitucionales sin importar su estado migratorio.' },
  'kyr.p1.at_home':       { en: 'At Home', es: 'En Casa' },
  'kyr.p1.at_home_1':     { en: 'You are not required to open the door for ICE', es: 'No estás obligado a abrir la puerta a ICE' },
  'kyr.p1.at_home_2':     { en: 'Agents need a judicial warrant signed by a judge (not an administrative ICE warrant) to enter', es: 'Los agentes necesitan una orden judicial firmada por un juez (no una orden administrativa de ICE) para entrar' },
  'kyr.p1.at_home_3':     { en: 'Ask to see the warrant through a window or slipped under the door', es: 'Pide ver la orden por la ventana o que la pasen por debajo de la puerta' },
  'kyr.p1.in_public':     { en: 'In Public', es: 'En Público' },
  'kyr.p1.in_public_1':   { en: 'You have the right to remain silent', es: 'Tienes derecho a guardar silencio' },
  'kyr.p1.in_public_2':   { en: 'Ask: "Am I being detained?" and "Am I free to go?"', es: 'Pregunta: "¿Estoy detenido?" y "¿Puedo irme?"' },
  'kyr.p1.in_public_3':   { en: 'Do not run', es: 'No corras' },
  'kyr.p1.in_public_4':   { en: 'Do not sign anything without a lawyer', es: 'No firmes nada sin un abogado' },
  'kyr.p1.at_work':       { en: 'At Work', es: 'En el Trabajo' },
  'kyr.p1.at_work_1':     { en: 'ICE may enter public-facing areas (lobbies, parking lots) without a warrant', es: 'ICE puede entrar a áreas públicas (vestíbulos, estacionamientos) sin orden' },
  'kyr.p1.at_work_2':     { en: 'ICE cannot access private/employee-only areas without a judicial search warrant or employer consent', es: 'ICE no puede acceder a áreas privadas o solo para empleados sin una orden de registro judicial o consentimiento del empleador' },
  'kyr.p1.if_detained':   { en: 'If Detained', es: 'Si Te Detienen' },
  'kyr.p1.if_detained_1': { en: 'You retain the right to remain silent', es: 'Conservas el derecho a guardar silencio' },
  'kyr.p1.if_detained_2': { en: 'You have the right to a phone call', es: 'Tienes derecho a una llamada telefónica' },
  'kyr.p1.if_detained_3': { en: 'You have the right to an attorney', es: 'Tienes derecho a un abogado' },
  'kyr.p1.if_detained_4': { en: 'Do not sign any documents without legal counsel', es: 'No firmes ningún documento sin asesoría legal' },
  'kyr.p1.data_privacy':  { en: 'Data & Privacy', es: 'Datos y Privacidad' },
  'kyr.p1.data_privacy_1': { en: 'Guidance on protecting personal data and phone security during encounters', es: 'Orientación sobre protección de datos personales y seguridad del teléfono durante encuentros' },
  'kyr.p1.resources_title': { en: 'Key KYR Resources (Updated for 2026)', es: 'Recursos Clave CDT (Actualizado 2026)' },
  'kyr.handbook.web':     { en: 'Download Handbook (Web Page)', es: 'Descargar Manual (Página Web)' },
  'kyr.handbook.pdf':     { en: 'Direct PDF Download', es: 'Descarga Directa PDF' },

  // ── Breadcrumb ─────────────────────────────────────
  'breadcrumb.home':        { en: 'Home',                  es: 'Inicio' },
  'breadcrumb.resources':   { en: 'Immigrant Resources',   es: 'Recursos para Inmigrantes' },
  'breadcrumb.kyr':         { en: 'Know Your Rights',      es: 'Conoce Tus Derechos' },
  'breadcrumb.blog':        { en: 'Blog',                  es: 'Blog' },

  // ── Misc UI ────────────────────────────────────────
  'lang.toggle':            { en: 'Español',               es: 'English' },
  'lang.toggle.aria':       { en: 'Switch to Spanish',     es: 'Cambiar a inglés' },
  'resources.link':         { en: 'Resources',             es: 'Recursos' },
  'kyr.link':               { en: 'KYR Training',          es: 'Capacitación CDT' },
  'toc.title':              { en: 'Table of Contents',     es: 'Tabla de Contenidos' }
};

/**
 * Initialize the translation system.
 * Call this at the bottom of every page after DOM is ready.
 */
function initTranslation() {
  var savedLang = localStorage.getItem('justnice-language') || 'en';
  if (savedLang !== 'es' && savedLang !== 'en') savedLang = 'en';

  // Apply saved language on load
  applyLanguage(savedLang);

  // Set up toggle button(s)
  var toggleBtns = document.querySelectorAll('.lang-toggle-btn');
  toggleBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var current = localStorage.getItem('justnice-language') || 'en';
      var next = current === 'en' ? 'es' : 'en';
      localStorage.setItem('justnice-language', next);
      applyLanguage(next);
    });
  });
}

function applyLanguage(lang) {
  // Update document lang attribute
  document.documentElement.lang = lang;

  // Translate data-i18n elements (textContent)
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    var t = JUSTNICE_TRANSLATIONS[key];
    if (t && t[lang]) {
      // Preserve child elements (like images) by only updating text nodes
      var img = el.querySelector('img');
      if (img) {
        // Element has an image child — update text after image
        var textNodes = [];
        for (var i = 0; i < el.childNodes.length; i++) {
          if (el.childNodes[i].nodeType === 3) textNodes.push(el.childNodes[i]);
        }
        if (textNodes.length > 0) {
          textNodes[textNodes.length - 1].textContent = ' ' + t[lang];
        }
      } else {
        el.textContent = t[lang];
      }
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-placeholder');
    var t = JUSTNICE_TRANSLATIONS[key];
    if (t && t[lang]) el.placeholder = t[lang];
  });

  // Translate aria-labels
  document.querySelectorAll('[data-i18n-aria]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-aria');
    var t = JUSTNICE_TRANSLATIONS[key];
    if (t && t[lang]) el.setAttribute('aria-label', t[lang]);
  });

  // Update toggle button text
  var toggleText = JUSTNICE_TRANSLATIONS['lang.toggle'];
  document.querySelectorAll('.lang-toggle-btn').forEach(function(btn) {
    var span = btn.querySelector('.lang-label');
    if (span && toggleText) span.textContent = toggleText[lang];
    if (toggleText) btn.setAttribute('aria-label', JUSTNICE_TRANSLATIONS['lang.toggle.aria'][lang]);
  });
}
