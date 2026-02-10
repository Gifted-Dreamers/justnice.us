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

  // Part 1 Regional Hotlines (location, hotline name, number_notes when present)
  'res.p1.reg.1.loc':      { en: 'New York State', es: 'Estado de Nueva York' },
  'res.p1.reg.1.name':     { en: 'NY Immigration Hotline', es: 'Línea de Inmigración de NY' },
  'res.p1.reg.1.num':      { en: '(Mon–Fri, 8 AM – 6 PM)', es: '(Lun–Vie, 8:00 – 18:00)' },
  'res.p1.reg.2.loc':      { en: 'NYC', es: 'Nueva York' },
  'res.p1.reg.2.name':     { en: 'ActionNYC (Mayor\'s Office of Immigrant Affairs)', es: 'ActionNYC (Oficina del Alcalde de Asuntos de Inmigrantes)' },
  'res.p1.reg.3.name':     { en: 'Legal Aid', es: 'Asistencia Legal' },
  'res.p1.reg.4.name':     { en: 'Immigrant Defense Project', es: 'Proyecto de Defensa del Inmigrante' },
  'res.p1.reg.5.loc':      { en: 'Chicago, IL', es: 'Chicago, IL' },
  'res.p1.reg.5.name':     { en: 'IL Coalition for Immigrant & Refugee Rights', es: 'Coalición de IL por Derechos de Inmigrantes y Refugiados' },
  'res.p1.reg.5.num':      { en: '(1-855-HELP-MY-FAMILY)', es: '(1-855-HELP-MY-FAMILY)' },
  'res.p1.reg.6.loc':      { en: 'Houston, TX', es: 'Houston, TX' },
  'res.p1.reg.6.name':     { en: 'Houston Immigration Legal Services Collaborative', es: 'Colaborativo de Servicios Legales de Inmigración de Houston' },
  'res.p1.reg.7.name':     { en: 'FIEL Houston', es: 'FIEL Houston' },
  'res.p1.reg.8.loc':      { en: 'Washington, DC', es: 'Washington, DC' },
  'res.p1.reg.8.name':     { en: 'DMV Immigration Crisis Hotline', es: 'Línea de Crisis de Inmigración DMV' },
  'res.p1.reg.9.loc':      { en: 'Baltimore/DC', es: 'Baltimore/DC' },
  'res.p1.reg.9.name':     { en: 'CASA Hotline', es: 'Línea CASA' },
  'res.p1.reg.10.loc':     { en: 'Denver, CO', es: 'Denver, CO' },
  'res.p1.reg.10.name':    { en: 'Colorado Rapid Response Network', es: 'Red de Respuesta Rápida de Colorado' },
  'res.p1.reg.11.name':    { en: 'Colorado Immigrant Rights Coalition (CIRC)', es: 'Coalición de Derechos de Inmigrantes de Colorado (CIRC)' },
  'res.p1.reg.12.loc':     { en: 'Miami, FL', es: 'Miami, FL' },
  'res.p1.reg.12.name':    { en: 'Americans for Immigrant Justice', es: 'Americans for Immigrant Justice' },
  'res.p1.reg.13.loc':     { en: 'Florida', es: 'Florida' },
  'res.p1.reg.13.name':    { en: 'ACLU FL Rapid Response Alliance', es: 'Alianza de Respuesta Rápida ACLU FL' },
  'res.p1.reg.14.loc':     { en: 'Portland, OR', es: 'Portland, OR' },
  'res.p1.reg.14.name':    { en: 'Immigrants Rights Coalition', es: 'Coalición de Derechos de Inmigrantes' },
  'res.p1.reg.15.loc':     { en: 'Seattle, WA', es: 'Seattle, WA' },
  'res.p1.reg.15.name':    { en: 'Raid Report Hotline', es: 'Línea de Reporte de Redadas' },
  'res.p1.reg.15.num':     { en: '(6 AM – 9 PM)', es: '(6:00 – 21:00)' },
  'res.p1.reg.16.loc':     { en: 'Philadelphia, PA', es: 'Filadelfia, PA' },
  'res.p1.reg.16.name':    { en: 'New Sanctuary Movement', es: 'Movimiento Nuevo Santuario' },
  'res.p1.reg.17.loc':     { en: 'Albuquerque, NM', es: 'Albuquerque, NM' },
  'res.p1.reg.17.name':    { en: 'Immigration Enforcement Report / Legal Help', es: 'Reporte de Aplicación de Inmigración / Ayuda Legal' },
  'res.p1.reg.17.num':     { en: 'ext. 102', es: 'ext. 102' },

  // Part 1 California areas (area names only; numbers stay as links)
  'res.p1.cal.1':         { en: 'California State Trust Act Hotline', es: 'Línea de la Ley de Confianza del Estado de California' },
  'res.p1.cal.2':         { en: 'Los Angeles', es: 'Los Ángeles' },
  'res.p1.cal.3':         { en: 'Long Beach', es: 'Long Beach' },
  'res.p1.cal.4':         { en: 'Orange County', es: 'Condado de Orange' },
  'res.p1.cal.5':         { en: 'San Diego', es: 'San Diego' },
  'res.p1.cal.6':         { en: 'San Francisco', es: 'San Francisco' },
  'res.p1.cal.7':         { en: 'San Mateo County', es: 'Condado de San Mateo' },
  'res.p1.cal.8':         { en: 'Santa Clara County', es: 'Condado de Santa Clara' },
  'res.p1.cal.9':         { en: 'Alameda County', es: 'Condado de Alameda' },
  'res.p1.cal.10':        { en: 'Sacramento', es: 'Sacramento' },
  'res.p1.cal.11':        { en: 'Marin County', es: 'Condado de Marin' },
  'res.p1.cal.12':        { en: 'North Bay (Sonoma, Napa, Solano)', es: 'North Bay (Sonoma, Napa, Solano)' },
  'res.p1.cal.13':        { en: 'Humboldt County (Central del Pueblo)', es: 'Condado de Humboldt (Central del Pueblo)' },
  'res.p1.cal.14':        { en: 'Monterey County', es: 'Condado de Monterey' },
  'res.p1.cal.15':        { en: 'Santa Cruz County', es: 'Condado de Santa Cruz' },
  'res.p1.cal.16':        { en: '805 Network (Santa Barbara, Ventura, SLO)', es: 'Red 805 (Santa Bárbara, Ventura, SLO)' },
  'res.p1.cal.17':        { en: 'Central Valley (Fresno, San Joaquin, Merced, Kern)', es: 'Valle Central (Fresno, San Joaquin, Merced, Kern)' },
  'res.p1.cal.18':        { en: 'San Bernardino & Riverside Counties', es: 'Condados de San Bernardino y Riverside' },
  'res.p1.cal.19':        { en: 'SoCal Bilingual Legal Resource (if detained)', es: 'Recurso Legal Bilingüe del Sur de CA (si está detenido)' },
  'res.p1.cal.20':        { en: 'North County San Diego (Alianza Comunitaria)', es: 'North County San Diego (Alianza Comunitaria)' },
  'res.p1.cal.20.num':    { en: 'Text "Alianza" to 33733 (español) / "Alianza2" to 33733 (English)', es: 'Texto "Alianza" al 33733 (español) / "Alianza2" al 33733 (inglés)' },
  'res.p1.blockquote.1':  { en: 'Full list of Rapid Response hotlines (PDF):', es: 'Lista completa de líneas de respuesta rápida (PDF):' },
  'res.p1.blockquote.2':  { en: 'National Network for Immigrant & Refugee Rights hotlines:', es: 'Líneas de la Red Nacional por los Derechos del Inmigrante y Refugiado:' },

  // Part 2 Legal Services
  'res.p2.national_dir':   { en: 'National Legal Directories', es: 'Directorios Legales Nacionales' },
  'res.p2.key_orgs':       { en: 'Key National Legal Organizations', es: 'Organizaciones Legales Nacionales Clave' },
  'res.p2.scams':          { en: 'How to Avoid Immigration Scams', es: 'Cómo Evitar Estafas de Inmigración' },
  'res.th.description':    { en: 'Description', es: 'Descripción' },
  'res.th.what_they_do':   { en: 'What They Do', es: 'Qué Hacen' },
  'res.th.contact':        { en: 'Contact / Link', es: 'Contacto / Enlace' },
  'res.p2.scam.from_prefix': { en: 'From ', es: 'De ' },
  'res.p2.scam.1':        { en: 'Notaries public (notarios) in the U.S. are NOT authorized to provide legal services', es: 'Los notarios públicos en EE. UU. NO están autorizados para dar servicios legales' },
  'res.p2.scam.2':        { en: 'Beware of anyone who contacts you first, makes guarantees, or asks you to sign blank forms', es: 'Cuidado con quien te contacte primero, prometa resultados o pida que firmes formularios en blanco' },
  'res.p2.scam.3':        { en: 'Never pay for blank immigration forms (they are free from USCIS)', es: 'Nunca pagues por formularios de inmigración en blanco (USCIS los ofrece gratis)' },
  'res.p2.scam.4':        { en: 'Verify lawyers with the State Bar Association and AILA', es: 'Verifica abogados con el Colegio de Abogados del estado y AILA' },
  'res.p2.scam.5':        { en: 'Verify DOJ-accredited representatives at the DOJ\'s official list', es: 'Verifica representantes acreditados por el DOJ en la lista oficial del DOJ' },

  // Part 3 Bond Funds
  'res.p3.intro':         { en: 'If a loved one is detained by ICE, they may be eligible for release on bond. Bond amounts have no maximum cap and can range from $1,500 to $80,000+. These organizations help pay bonds for people who cannot afford them.', es: 'Si un ser querido está detenido por ICE, puede ser elegible para salir bajo fianza. Las fianzas no tienen tope máximo y pueden ir de $1,500 a $80,000 o más. Estas organizaciones ayudan a pagar fianzas a quienes no pueden costearlas.' },
  'res.p3.national':      { en: 'National Bond Funds', es: 'Fondos de Fianza Nacionales' },
  'res.p3.state':        { en: 'State & Regional Bond Funds', es: 'Fondos de Fianza por Estado y Región' },
  'res.th.fund':          { en: 'Fund', es: 'Fondo' },
  'res.th.state':         { en: 'State', es: 'Estado' },
  'res.th.focus':         { en: 'Focus', es: 'Enfoque' },

  // Part 4: Finding a Detained Loved One
  'res.p4.intro':         { en: 'If someone you know has been arrested by ICE, follow these steps (from ', es: 'Si alguien que conoces ha sido arrestado por ICE, sigue estos pasos (de ' },
  'res.p4.nilc_guide':    { en: 'NILC guide', es: 'guía de NILC' },
  'res.p4.step1':         { en: 'Step 1: ICE Online Detainee Locator System', es: 'Paso 1: Sistema de Localización de Detenidos en Línea de ICE' },
  'res.p4.step1.1':       { en: 'Search by A-Number (alien registration number) + country of birth, OR by name + country of birth', es: 'Busca por Número A (número de registro de extranjería) + país de nacimiento, O por nombre + país de nacimiento' },
  'res.p4.step1.2':       { en: 'It can take 24–48 hours for a name to appear', es: 'Puede tardar 24–48 horas en aparecer un nombre' },
  'res.p4.step1.3':       { en: 'Exceptions: Children under 18, T/U visa cases, and some transfers may not appear', es: 'Excepciones: Menores de 18 años, casos de visa T/U y algunos traslados pueden no aparecer' },
  'res.p4.step2':         { en: 'Step 2: Contact the ICE Field Office (ERO)', es: 'Paso 2: Contactar la Oficina de Campo de ICE (ERO)' },
  'res.p4.step2.1':       { en: 'Call or email your local ICE Enforcement and Removal Operations office', es: 'Llama o escribe al correo de tu oficina local de Operaciones de Cumplimiento y Remoción de ICE' },
  'res.p4.step2.2':       { en: 'Only provide necessary identifying information (A-number, name, country of birth)', es: 'Solo proporciona la información de identificación necesaria (número A, nombre, país de nacimiento)' },
  'res.p4.step2.3':       { en: 'Ask for the Deportation Officer assigned to the case', es: 'Pide el Oficial de Deportación asignado al caso' },
  'res.p4.step3':         { en: 'Step 3: Check the Bureau of Prisons (BOP)', es: 'Paso 3: Consultar la Oficina de Prisiones (BOP)' },
  'res.p4.step3.1':       { en: 'Since 2025, ICE has used BOP facilities to hold immigration detainees', es: 'Desde 2025, ICE ha usado instalaciones de BOP para detener a inmigrantes' },
  'res.p4.step4':         { en: 'Step 4: Contact Consulates', es: 'Paso 4: Contactar Consulados' },
  'res.p4.step4.1':       { en: 'All immigrants in ICE custody have the right to contact their country\'s consulate', es: 'Todos los inmigrantes bajo custodia de ICE tienen derecho a contactar el consulado de su país' },
  'res.p4.step4.2':       { en: 'Do NOT contact the consulate if the person is seeking asylum or fears their government', es: 'NO contactes al consulado si la persona busca asilo o teme a su gobierno' },
  'res.p4.step5':         { en: 'Step 5: Cross-Reference Facility Lists', es: 'Paso 5: Cruzar Listas de Instalaciones' },
  'res.p4.step5.1':       { en: 'ICE Detention Facilities list', es: 'Lista de instalaciones de detención de ICE' },
  'res.p4.step5.1_suffix': { en: '(Excel spreadsheet at bottom)', es: '(hoja Excel al final)' },
  'res.p4.step5.2':       { en: 'Freedom for Immigrants: Searchable list of ICE detention centers with contact info', es: 'Freedom for Immigrants: Lista buscable de centros de detención de ICE con información de contacto' },
  'res.p4.when_find':     { en: 'What to Do When You Find Them', es: 'Qué Hacer Cuando Los Encuentres' },
  'res.p4.when_find.1':   { en: 'Get proof of community ties (school records, work verification, volunteer records) for bond hearings', es: 'Obtén prueba de lazos comunitarios (registros escolares, verificación laboral, voluntariado) para audiencias de fianza' },
  'res.p4.when_find.2':   { en: 'Ensure they know: do not sign anything labeled "waiver," "stipulated removal order," or "voluntary departure agreement" without a lawyer', es: 'Asegúrate de que sepan: no firmen nada con "renuncia," "orden de deportación acordada" o "acuerdo de salida voluntaria" sin un abogado' },
  'res.p4.when_find.3':   { en: 'If they fear return to home country, they should say so loudly and clearly to every officer', es: 'Si temen regresar a su país, deben decirlo fuerte y claro a cada oficial' },

  // Part 5: Family Emergency Preparedness
  'res.p5.templates':     { en: 'Preparedness Plan Templates', es: 'Plantillas de Plan de Preparación' },
  'res.p5.key_steps':     { en: 'Key Steps for Your Family Plan', es: 'Pasos Clave para Tu Plan Familiar' },
  'res.p5.step.1':       { en: 'Designate a trusted guardian for your children in case of detention/deportation', es: 'Designa un tutor de confianza para tus hijos en caso de detención/deportación' },
  'res.p5.step.2':       { en: 'Gather and copy important documents: birth certificates, passports, immigration papers, medical records, school records', es: 'Reúne y copia documentos importantes: actas de nacimiento, pasaportes, papeles de inmigración, expedientes médicos, expedientes escolares' },
  'res.p5.step.3':       { en: 'Create a folder labeled "Privileged & Confidential" — store with a trusted person', es: 'Crea una carpeta etiquetada "Privilegiado y Confidencial" — guárdala con una persona de confianza' },
  'res.p5.step.4':       { en: 'Memorize key phone numbers — attorney, emergency contact, consulate', es: 'Memoriza números clave — abogado, contacto de emergencia, consulado' },
  'res.p5.step.5':       { en: 'Download the Notifica app — sends automatic alerts to emergency contacts if you are detained', es: 'Descarga la app Notifica — envía alertas automáticas a contactos de emergencia si te detienen' },
  'res.p5.step.6':       { en: 'Carry your work permit or proof of legal status (if applicable) — but never carry a foreign passport or foreign ID (it can speed up deportation)', es: 'Lleva tu permiso de trabajo o prueba de estatus legal (si aplica) — pero nunca lleves pasaporte extranjero ni ID extranjero (puede acelerar la deportación)' },
  'res.p5.step.7':       { en: 'Do NOT sign any documents without talking to a lawyer', es: 'NO firmes ningún documento sin hablar con un abogado' },
  'res.p5.step.8':       { en: 'Sync photos/videos to the cloud — in case you record an ICE encounter, others can access the footage', es: 'Sincroniza fotos/videos a la nube — si grabas un encuentro con ICE, otros pueden acceder al material' },

  // Part 6: Mutual Aid
  'res.p6.how_to_find':   { en: 'How to Find or Start a Mutual Aid Network', es: 'Cómo Encontrar o Crear una Red de Ayuda Mutua' },
  'res.p6.types_title':   { en: 'Types of Mutual Aid You Can Organize', es: 'Tipos de Ayuda Mutua que Puedes Organizar' },
  'res.p6.types.1':      { en: 'Grocery shopping & supply delivery for families afraid to leave their homes', es: 'Compras y entrega de suministros para familias que temen salir de casa' },
  'res.p6.types.2':      { en: 'School drop-off/pick-up watches — monitor for ICE activity near schools', es: 'Vigilancias en entradas/salidas de escuelas — monitorear actividad de ICE cerca de escuelas' },
  'res.p6.types.3':      { en: 'Neighborhood "pods" — self-organized groups of neighbors for ongoing support', es: '"Pods" vecinales — grupos de vecinos auto-organizados para apoyo continuo' },
  'res.p6.types.4':      { en: 'Financial solidarity funds — direct cash assistance to immigrant families', es: 'Fondos de solidaridad financiera — asistencia en efectivo directa a familias inmigrantes' },
  'res.p6.types.5':      { en: 'Accompaniment programs — accompanying immigrants to ICE check-ins, hearings, and appointments (HIAS model)', es: 'Programas de acompañamiento — acompañar a inmigrantes a citas con ICE, audiencias y citas (modelo HIAS)' },
  'res.p6.types.6':      { en: 'Rapid response volunteering — joining local rapid response networks to be dispatched when ICE activity is reported', es: 'Voluntariado de respuesta rápida — unirse a redes locales de respuesta rápida para ser enviado cuando se reporte actividad de ICE' },
  'res.p6.types.7':      { en: 'Cop-watch / ICE-watch — community monitoring of enforcement activity in neighborhoods', es: 'Vigilancia policial / vigilancia ICE — monitoreo comunitario de actividad de aplicación en barrios' },
  'res.p6.national_orgs': { en: 'National Mutual Aid & Advocacy Organizations', es: 'Organizaciones Nacionales de Ayuda Mutua y Defensa' },

  // Part 7 & 8 intros
  'res.p7.intro':         { en: 'Regardless of immigration status, all workers in the U.S. have rights:', es: 'Sin importar el estatus migratorio, todos los trabajadores en EE. UU. tienen derechos:' },
  'res.p8.intro':         { en: 'These are "meta-resources" that aggregate many of the above into one place:', es: 'Estos son "meta-recursos" que reúnen muchos de los anteriores en un solo lugar:' },

  // Part 3 blockquote (bond fund directory)
  'res.p3.bond_dir':      { en: 'Full state-by-state bond fund directory:', es: 'Directorio completo de fondos de fianza por estado:' },

  // KYR Cards section (after Part 8)
  'res.kyr_cards.title':  { en: 'Quick-Reference: Know Your Rights Cards', es: 'Referencia Rápida: Tarjetas Conoce Tus Derechos' },

  // Key Reminders section
  'res.reminders.title':   { en: 'Key Reminders', es: 'Recordatorios Clave' },
  'res.reminders.1':      { en: 'You have constitutional rights regardless of immigration status — including the right to remain silent, the right to an attorney, and the right to refuse entry without a judicial warrant', es: 'Tienes derechos constitucionales sin importar tu estatus migratorio — incluido el derecho a guardar silencio, a un abogado y a negar la entrada sin una orden judicial' },
  'res.reminders.2':      { en: 'Do not open the door for ICE unless they show a judicial warrant signed by a judge (not an administrative ICE warrant)', es: 'No abras la puerta a ICE a menos que muestren una orden judicial firmada por un juez (no una orden administrativa de ICE)' },
  'res.reminders.3':      { en: 'Do not sign anything without speaking to a lawyer', es: 'No firmes nada sin hablar con un abogado' },
  'res.reminders.4':      { en: 'Do not carry a foreign passport — it can accelerate deportation', es: 'No lleves pasaporte extranjero — puede acelerar la deportación' },
  'res.reminders.5':      { en: 'Preparation is power — complete a family preparedness plan and store it with a trusted person today', es: 'La preparación es poder — completa un plan de preparación familiar y guárdalo con una persona de confianza hoy' },
  'res.reminders.6':      { en: 'Save your local rapid response hotline in your phone now, before an emergency', es: 'Guarda la línea de respuesta rápida local en tu teléfono ahora, antes de una emergencia' },
  'res.reminders.footer': { en: 'This page was compiled on February 9, 2026 from live web sources. Check individual organization websites for the most current information and resources.', es: 'Esta página se compiló el 9 de febrero de 2026 a partir de fuentes web en vivo. Consulta los sitios de cada organización para la información y recursos más actuales.' },

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

  // KYR Part 2: Legal Observer Training
  'kyr.p2.title':         { en: 'Part 2: Legal Observer / Constitutional Observer Training', es: 'Parte 2: Capacitación de Observador Legal / Constitucional' },
  'kyr.p2.what_is':       { en: 'What It Is', es: 'Qué Es' },
  'kyr.p2.what_is.p1':    { en: 'A Constitutional Observer (also called a legal observer or ICE observer) is a trained community member who documents law enforcement and immigration enforcement activity without interfering. The practice is rooted in the National Lawyers Guild\'s Legal Observer® Program, established in 1968, and draws from the Black Panther Party\'s 1966 copwatch patrols in Oakland.', es: 'Un Observador Constitucional (también llamado observador legal u observador de ICE) es un miembro de la comunidad capacitado que documenta la actividad de aplicación de la ley y de inmigración sin interferir. La práctica tiene sus raíces en el Programa de Observadores Legales del Gremio Nacional de Abogados, establecido en 1968, y se inspira en las patrullas de vigilancia policial del Partido Pantera Negra en Oakland en 1966.' },
  'kyr.p2.what_is.p2':    { en: 'Today\'s observers are specifically focused on ICE and CBP operations.', es: 'Los observadores actuales se enfocan específicamente en las operaciones de ICE y CBP.' },
  'kyr.p2.what_teach':    { en: 'What Constitutional Observer Trainings Teach', es: 'Qué Enseñan las Capacitaciones de Observador Constitucional' },
  'kyr.p2.what_teach.based': { en: 'Based on the COPAL MN / Immigrant Defense Network Handbook — the standard training material used across Minnesota and increasingly nationwide.', es: 'Basado en el Manual de COPAL MN / Red de Defensa del Inmigrante — el material estándar usado en Minnesota y cada vez más a nivel nacional.' },
  'kyr.p2.core_rights':   { en: 'Core Rights of Observers', es: 'Derechos Fundamentales de los Observadores' },
  'kyr.p2.core_rights.1': { en: 'Recording law enforcement activity in public is lawful and protected by the First Amendment', es: 'Grabar la actividad de aplicación de la ley en público es legal y está protegido por la Primera Enmienda' },
  'kyr.p2.core_rights.2': { en: 'You have the right to remain silent and to observe from a safe distance', es: 'Tienes derecho a guardar silencio y a observar desde una distancia segura' },
  'kyr.p2.safety':        { en: 'Safety Protocols', es: 'Protocolos de Seguridad' },
  'kyr.p2.safety.1':      { en: 'Maintain at least 8 feet from ICE agents at all times', es: 'Mantén al menos 2.5 metros de los agentes de ICE en todo momento' },
  'kyr.p2.safety.2':      { en: 'Never obstruct or interfere with enforcement operations', es: 'Nunca obstruyas ni interfieras con las operaciones de aplicación' },
  'kyr.p2.safety.3':      { en: 'If asked to step back, comply immediately and document that you are doing so', es: 'Si te piden retroceder, cumple de inmediato y documenta que lo estás haciendo' },
  'kyr.p2.safety.4':      { en: 'Wear visible identification (yellow vests, observer badges) when possible', es: 'Usa identificación visible (chalecos amarillos, insignias de observador) cuando sea posible' },
  'kyr.p2.salute_title':  { en: 'The S.A.L.U.T.E. Documentation Framework', es: 'El Marco de Documentación S.A.L.U.T.E.' },
  'kyr.p2.salute.letter':  { en: 'Letter', es: 'Letra' },
  'kyr.p2.salute.meaning': { en: 'Meaning', es: 'Significado' },
  'kyr.p2.salute.record':  { en: 'What to Record', es: 'Qué Registrar' },
  'kyr.p2.salute.s':      { en: 'Size', es: 'Tamaño' },
  'kyr.p2.salute.s.desc': { en: 'Number of agents and vehicles', es: 'Número de agentes y vehículos' },
  'kyr.p2.salute.a':      { en: 'Activity', es: 'Actividad' },
  'kyr.p2.salute.a.desc': { en: 'Specific actions, especially suspicious ones', es: 'Acciones específicas, especialmente las sospechosas' },
  'kyr.p2.salute.l':      { en: 'Location', es: 'Ubicación' },
  'kyr.p2.salute.l.desc': { en: 'Address, landmarks, cross streets', es: 'Dirección, puntos de referencia, cruces' },
  'kyr.p2.salute.u':      { en: 'Uniform', es: 'Uniforme' },
  'kyr.p2.salute.u.desc': { en: 'Clothing, armor, insignia, markings', es: 'Ropa, armadura, insignias, marcas' },
  'kyr.p2.salute.t':      { en: 'Time', es: 'Tiempo' },
  'kyr.p2.salute.t.desc': { en: 'Continuous timestamps for extended events', es: 'Marcas de tiempo continuas para eventos prolongados' },
  'kyr.p2.salute.e':      { en: 'Equipment', es: 'Equipo' },
  'kyr.p2.salute.e.desc': { en: 'Weapons, gear, tactical equipment', es: 'Armas, equipo táctico' },
  'kyr.p2.after':         { en: 'After Recording', es: 'Después de Grabar' },
  'kyr.p2.after.1':       { en: 'Immediately copy video files to a second device without renaming the original', es: 'Copia de inmediato los archivos de video a un segundo dispositivo sin cambiar el nombre del original' },
  'kyr.p2.after.2':       { en: 'Edit only the copy', es: 'Edita solo la copia' },
  'kyr.p2.after.3':       { en: 'Notify the Immigrant Defense Network or your local organization so they can track and assist the person detained', es: 'Notifica a la Red de Defensa del Inmigrante o a tu organización local para que puedan rastrear y asistir a la persona detenida' },
  'kyr.p2.after.4':       { en: 'Do not post video that clearly identifies a detained individual on social media — share it with the person\'s family, friends, or lawyer first', es: 'No publiques video que identifique claramente a una persona detenida en redes sociales — compártelo primero con la familia, amigos o abogado de la persona' },
  'kyr.p2.deescal':       { en: 'De-escalation', es: 'Desescalada' },
  'kyr.p2.deescal.1':     { en: 'Control yourself first, then help calm those around you', es: 'Contrólate primero, luego ayuda a calmar a quienes te rodean' },
  'kyr.p2.deescal.2':     { en: 'The goal is recording, not confrontation', es: 'El objetivo es grabar, no confrontar' },
  'kyr.p2.programs_title': { en: 'Key Legal Observer Training Programs & Sign-Ups', es: 'Programas Clave de Capacitación de Observadores Legales y Registro' },
  'kyr.th.program':       { en: 'Program', es: 'Programa' },
  'kyr.th.details':       { en: 'Details & Sign-Up', es: 'Detalles y Registro' },
  'kyr.th.date':          { en: 'Date', es: 'Fecha' },
  'kyr.th.event':         { en: 'Event', es: 'Evento' },
  'kyr.th.organizer':     { en: 'Organizer', es: 'Organizador' },
  'kyr.th.details_short':  { en: 'Details', es: 'Detalles' },
  'kyr.p1.sessions_title': { en: 'Upcoming & Active KYR Training Sessions', es: 'Próximas y Activas Sesiones de Capacitación CDT' },
  'kyr.p1.sessions_as_of': { en: '(as of Feb 9, 2026)', es: '(al 9 de feb de 2026)' },
  'kyr.p1.copal_title':   { en: 'The COPAL MN Constitutional Observer Handbook', es: 'El Manual de Observador Constitucional de COPAL MN' },
  'kyr.p1.copal.p':       { en: 'This has become the de facto national standard for observer trainings. It was developed by COPAL MN and the Immigrant Defense Network and is referenced by training sessions run by the Minnesota DFL, Indivisible chapters, and groups in Iowa, Wisconsin, North Dakota, and beyond.', es: 'Se ha convertido en el estándar nacional de hecho para las capacitaciones de observadores. Fue desarrollado por COPAL MN y la Red de Defensa del Inmigrante y es referenciado por sesiones de capacitación del DFL de Minnesota, capítulos de Indivisible y grupos en Iowa, Wisconsin, Dakota del Norte y más.' },

  // KYR Part 3: Legal & Safety
  'kyr.p3.title':         { en: 'Part 3: Important Legal & Safety Considerations', es: 'Parte 3: Consideraciones Legales y de Seguridad Importantes' },
  'kyr.p3.can_do_title':  { en: 'What Observers CAN Legally Do', es: 'Qué PUEDEN Hacer Legalmente los Observadores' },
  'kyr.p3.can_do.1':     { en: 'Record in public spaces (sidewalks, streets) — this is a First Amendment right', es: 'Grabar en espacios públicos (aceras, calles) — es un derecho de la Primera Enmienda' },
  'kyr.p3.can_do.2':     { en: 'Verbally inform individuals of their rights (e.g., "You have the right to remain silent")', es: 'Informar verbalmente a las personas sobre sus derechos (ej., "Tienes derecho a guardar silencio")' },
  'kyr.p3.can_do.3':     { en: 'Use whistles, car horns, or flashers to alert community members', es: 'Usar silbatos, bocinas de auto o luces para alertar a la comunidad' },
  'kyr.p3.should_not_title': { en: 'What Observers Should NOT Do', es: 'Qué NO Deben Hacer los Observadores' },
  'kyr.p3.should_not.1': { en: 'Physically obstruct or interfere with ICE operations — this can result in arrest for obstruction', es: 'Obstruir o interferir físicamente con las operaciones de ICE — puede resultar en arresto por obstrucción' },
  'kyr.p3.should_not.2': { en: 'Post unverified information on social media', es: 'Publicar información no verificada en redes sociales' },
  'kyr.p3.should_not.3': { en: 'Put themselves in the path of vehicles or agents', es: 'Ponerse en el camino de vehículos o agentes' },
  'kyr.p3.risks_title':   { en: 'Risks to Be Aware Of', es: 'Riesgos a Tener en Cuenta' },
  'kyr.p3.risks.1':      { en: 'While observing is lawful, the current environment carries real safety risks', es: 'Aunque observar es legal, el entorno actual conlleva riesgos de seguridad reales' },
  'kyr.p3.risks.2':      { en: 'An internal ICE memo has revealed agents are being trained to force entry into homes without judicial warrants, complicating traditional KYR advice about not opening the door', es: 'Un memorándum interno de ICE reveló que se entrena a agentes para forzar la entrada a hogares sin órdenes judiciales, lo que complica el consejo tradicional de CDT de no abrir la puerta' },
  'kyr.p3.risks.3':      { en: 'Experts advise: "You have to be realistic about what level of risk you\'re willing to accept"', es: 'Los expertos aconsejan: "Tienes que ser realista sobre qué nivel de riesgo estás dispuesto a aceptar"' },

  // KYR Part 4
  'kyr.p4.title':         { en: 'Part 4: Additional Resources', es: 'Parte 4: Recursos Adicionales' },
  'kyr.p4.video':         { en: 'Video & Multimedia', es: 'Video y Multimedia' },
  'kyr.p4.orgs':          { en: 'Organizations & Legal Help', es: 'Organizaciones y Ayuda Legal' },
  'kyr.p4.news':           { en: 'News & Analysis', es: 'Noticias y Análisis' },
  'kyr.p4.th.article':     { en: 'Article', es: 'Artículo' },
  'kyr.p4.th.source':      { en: 'Source', es: 'Fuente' },
  'kyr.p4.takeaway_title': { en: 'Key Takeaway', es: 'Mensaje Clave' },
  'kyr.p4.takeaway.p':     { en: 'The core message across all programs is consistent: know your constitutional rights, document everything, never interfere, and stay safe. Whether you are an immigrant seeking to understand your protections or a community member wanting to serve as an observer, multiple organizations — from the ACLU and NLG to local grassroots groups — are actively offering free training, with new sessions being added weekly.', es: 'El mensaje central en todos los programas es consistente: conoce tus derechos constitucionales, documenta todo, nunca interfieras y mantente seguro. Ya seas un inmigrante que busca entender tus protecciones o un miembro de la comunidad que quiere servir como observador, múltiples organizaciones — desde la ACLU y NLG hasta grupos de base locales — ofrecen activamente capacitación gratuita, con nuevas sesiones cada semana.' },
  'kyr.compiled_footer':   { en: 'This page was compiled on February 9, 2026 from live web sources. Check individual organization websites for the most current schedules and registration links.', es: 'Esta página se compiló el 9 de febrero de 2026 a partir de fuentes web en vivo. Consulta los sitios de cada organización para los horarios y enlaces de registro más actuales.' },

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
