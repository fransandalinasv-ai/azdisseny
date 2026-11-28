/* =========================================================
   AZDISSENY — Bilingual Studio Content (EN / ES)
   Verified real data only · Entity: A-Z DISSENY, SL
   ========================================================= */

'use strict';

window.AZ_CONFIG = {
  email: 'azdisseny.sl@gmail.com',
  formEndpoint: 'https://formsubmit.co/ajax/azdisseny.sl@gmail.com',

  /* Hero Engineering Stage — 4 unique images (zero overlap with #work or #lab) */
  heroSlides: [
    {
      src: 'assets/images/design/naval-bridge-nda.jpg',
      alt: 'High-Speed Naval Bridge Electromechanical Interior (Representative Visual · Under NDA)',
      position: 'center center',
      fit: 'cover',
      caption: {
        en: 'Naval Bridge · Electromechanical Interior (NDA)',
        es: 'Puente Naval · Interior Electromecánico (NDA)'
      }
    },
    {
      src: 'assets/images/design/heater-cfd.png',
      alt: 'Smart Water Heater Helical CFD Thermal Simulation',
      position: 'center center',
      fit: 'contain',
      bg: '#FFFFFF',
      caption: {
        en: 'Smart Water Heater · CFD Thermal Simulation',
        es: 'Smart Water Heater · Simulación Térmica CFD'
      }
    },
    {
      src: 'assets/images/design/naval-electronics-rack-nda.jpg',
      alt: 'Marine 5083 Sheet Metal Series Electronics Rack (Representative Visual · Under NDA)',
      position: 'center center',
      fit: 'cover',
      caption: {
        en: 'Marine 5083 Sheet Metal · Series Electronics Rack (NDA)',
        es: 'Chapa Marina 5083 · Rack Electrónico en Serie (NDA)'
      }
    },
    {
      src: 'assets/images/software/prometeos-panel.png',
      alt: 'prometeOS Multi-Agent Control Panel',
      position: 'center center',
      fit: 'contain',
      bg: '#060609',
      caption: {
        en: 'prometeOS · Multi-Agent Control Panel',
        es: 'prometeOS · Panel de Control Multi-Agente'
      }
    }
  ],

  i18n: {
    en: {
      nav: {
        work: 'Physical',
        lab: 'Software & AI',
        services: 'Capabilities',
        process: 'Process',
        cta: 'Start a Project'
      },
      hero: {
        eyebrow: 'PHYSICAL & DIGITAL PRODUCT STUDIO · BARCELONA',
        title: 'You bring the idea.<br>We make it real.',
        subtitle: 'End-to-end product engineering — from 3D CAD, prototyping and mass production with suppliers to mobile apps and applied AI.',
        ctaPrimary: 'Start a Project',
        ctaSecondary: 'Explore Work'
      },
      kineticItems: [
        'INDUSTRIAL DESIGN & 3D CAD',
        'BIOMATERIAL R&D',
        'MASS PRODUCTION & SUPPLIERS',
        'DFM · CNC · SHEET METAL · MOLDS',
        'MOBILE APPS & UX / UI',
        'APPLIED AI SYSTEMS',
        'SOLIDWORKS · RHINO 3D · SIEMENS NX',
        'BARCELONA · END-TO-END STUDIO'
      ],
      work: {
        eyebrow: '01 / PHYSICAL PRODUCTS',
        title: 'Industrial Design, R&D & Mass Production.',
        desc: 'Biomaterial innovation, parametric lighting, mechanical assemblies and series manufacturing led directly with fabricators.',
        featuredBadge: 'FEATURED R&D · BIOMATERIALS',
        featuredCta: 'Explore Bolet Lamp',
        viewProject: 'View project'
      },
      lab: {
        eyebrow: '02 / SOFTWARE, APPS & APPLIED AI',
        title: 'Digital Products and AI Systems.',
        desc: 'In-house mobile apps and AI tools designed to solve real everyday problems with clarity and craft.',
        viewProject: 'View project'
      },
      services: {
        eyebrow: '03 / CAPABILITIES',
        title: 'From raw concept to factory floor & app launch.',
        desc: 'Most studios stop at renders. We design, engineer, manage suppliers for mass production, and build the software around your product.',
        cta: 'Discuss Your Idea',
        note: 'Product Design · Mass Production · Software & AI',
        pillars: [
          {
            id: 'design',
            num: '01',
            title: 'Industrial Design & Precision Mechanical CAD',
            desc: 'From organic Class-A surfacing to complex electromechanical assemblies ready for fabrication. Complete 3D models, weldment & part drawings, tolerances and BOM.',
            chips: ['SolidWorks', 'Rhino 3D & Grasshopper', 'Siemens NX', 'AutoCAD', 'Class-A Surfacing', 'FEA / CFD', 'BOM & Drawings']
          },
          {
            id: 'production',
            num: '02',
            title: 'Mass Production Leadership & Supply Chain',
            desc: 'Need to manufacture at scale? We handle DFM optimization, supplier sourcing and negotiation (CNC, laser cutting, sheet metal, molds, 3D printing), quality control and series delivery.',
            chips: ['DFM Optimization', 'Supplier Negotiation', 'CNC & Laser Cut', 'Sheet Metal', 'Custom Molds', '3D Printing (FDM/SLA)', 'QC & Series Production']
          },
          {
            id: 'software',
            num: '03',
            title: 'Mobile Apps, Digital Products & Applied AI',
            desc: 'We design and build clean, high-performance mobile apps, web platforms, Python engineering automation and AI agent workflows tailored to real operations.',
            chips: ['Flutter & Dart', 'iOS & Android', 'Supabase & SQL', 'UX / UI Figma', 'Python Automation', 'Applied AI Agents']
          }
        ]
      },
      process: {
        eyebrow: '04 / HOW WE WORK',
        title: 'One studio. Four clear phases.',
        steps: [
          { num: '01', title: 'Discovery & Specs', desc: 'We translate your idea into concrete technical requirements, cost targets, feasibility and a clear roadmap.' },
          { num: '02', title: 'Design & Engineering', desc: '3D CAD assemblies, Class-A surfacing, FEA/CFD validation or UX/UI and full-stack software architecture.' },
          { num: '03', title: 'Prototyping & Suppliers', desc: 'Rapid 3D printing, functional prototypes, supplier sourcing, tooling quotes and DFM adjustments.' },
          { num: '04', title: 'Production & Launch', desc: 'Series manufacturing supervision, quality control with fabricators, or app store & cloud deployment.' }
        ]
      },
      mystery: {
        eyebrow: 'NEW PROJECT',
        title: 'Your Next Product?',
        desc: 'Hardware, mass production or a digital app — bring the idea.',
        cta: 'Start a Project'
      },
      footer: {
        eyebrow: 'START SOMETHING REAL',
        headline: 'Have a product, production run or app in mind?',
        cta: 'Start a Project',
        contactLabel: 'DIRECT',
        socialLabel: 'CHANNELS',
        legalLabel: 'LEGAL',
        entityLabel: 'ENTITY',
        legalNotice: 'Legal Notice',
        privacy: 'Privacy',
        cookies: 'Cookies'
      },
      modal: {
        buildSimilar: 'Build something similar',
        specsLabel: 'AZDISSENY · PRODUCT STUDIO',
        contactTitle: 'Tell us about your project.',
        contactSub: 'Whether it is a physical product, a mass production run or a software app, share the basics and we will get back to you.',
        name: 'Name or Company',
        namePh: 'Your name or company',
        email: 'Email',
        emailPh: 'you@company.com',
        area: 'Project Area',
        areas: [
          'Product Design & 3D CAD',
          'Mass Production & Supplier Management',
          'Software, Mobile App & Applied AI',
          'Full End-to-End (Hardware + Software)'
        ],
        message: 'Project Details',
        messagePh: 'Describe your idea, technical goals, target timeline or manufacturing needs...',
        privacyPrefix: 'I have read and accept the',
        privacyLink: 'Privacy Policy',
        rgpdNote: 'Controller: A-Z DISSENY, SL (NIF B60369329). Purpose: respond to your project inquiry. Processed via FormSubmit.co and email. Exercise rights at azdisseny.sl@gmail.com.',
        submit: 'Send Inquiry',
        sending: 'Sending...',
        success: 'Inquiry sent. We will reply shortly to your email.',
        error: 'Could not send right now. Please email azdisseny.sl@gmail.com directly.'
      },
      hardwareProjects: [
        {
          id: 'bolet-lamp',
          zone: 'physical',
          featured: true,
          title: 'Bolet Lamp',
          meta: 'BIOMATERIAL R&D · NETHERLANDS',
          summary: 'Circular organic mycelium lamp grown inside custom 3D-printed molds, featuring a contactless proximity sensor for touch-free dimming and snap-fit LED thermal decoupling.',
          featuredTags: ['Mycelium Biomaterial', 'Contactless Sensor', 'Circular R&D'],
          cover: 'assets/images/design/bolet-lamp.jpg',
          coverPosition: 'center 72%',
          gallery: [
            'assets/images/design/bolet-lamp.jpg'
          ],
          description: 'Functional biodegradable architectural lamp developed during an international R&D project in the Netherlands. Grown organically in mycelium using custom 3D-printed molds to control material density and warm light diffusion, paired with a contactless gesture sensor, snap-fit mechanical joints and LED thermal decoupling.',
          tags: ['Mycelium Biomaterial', 'Contactless Sensor', '3D-Printed Molds', 'Circular R&D', 'Snap-Fit DFM'],
          highlights: [
            { title: 'Mycelium Cultivation & Tooling', text: 'Custom 3D-printed molds engineered to shape organic mycelium growth density and soft light output.' },
            { title: 'Contactless Interaction', text: 'Integrated top proximity sensor enables intuitive touch-free activation and dimming without breaking the organic surface.' },
            { title: 'End-to-End R&D', text: 'Functional circular prototype delivered in 6 months leading a multidisciplinary team in the Netherlands.' }
          ]
        },
        {
          id: 'firestone-lamp',
          zone: 'physical',
          title: 'Firestone Lamp',
          meta: 'PARAMETRIC LIGHTING · 3D PRINT',
          summary: 'Class-A G2 continuous organic surfacing produced in-house via digital additive manufacturing.',
          cover: 'assets/images/slides/design-lamp.webp',
          coverPosition: 'center 58%',
          gallery: [
            'assets/images/slides/design-lamp.webp',
            'assets/images/design/firestone.png'
          ],
          description: 'In-house parametric decorative lighting piece by A-Z DISSENY, SL. Engineered with Class-A continuous organic surfaces and produced directly with FDM additive manufacturing.',
          tags: ['Rhino 3D', 'Grasshopper', 'Class-A Surfacing', 'FDM 3D Printing', 'Lighting Design'],
          highlights: [
            { title: 'Parametric Surface', text: 'Organic geometry built with G2 continuity for smooth light gradients.' },
            { title: 'In-House Manufacturing', text: 'Direct digital fabrication without expensive injection tooling.' }
          ]
        },
        {
          id: 'naval',
          zone: 'physical',
          title: 'Naval Electromechanical Systems',
          meta: 'MASS PRODUCTION · +60 VESSELS · UNDER NDA',
          summary: 'Interior electromechanical systems, marine 5083 sheet metal, supplier management and series production for 60+ vessels. Representative visuals (originals protected under NDA).',
          cover: 'assets/images/design/naval-vessel-nda.jpg',
          coverPosition: '60% center',
          hoverCover: 'assets/images/design/naval-battery-bay-nda.jpg',
          hoverPosition: 'center center',
          gallery: [
            'assets/images/design/naval-vessel-nda.jpg',
            'assets/images/design/naval-bridge-nda.jpg',
            'assets/images/design/naval-electronics-rack-nda.jpg',
            'assets/images/design/naval-battery-bay-nda.jpg'
          ],
          description: 'Complete lifecycle leadership for interior electromechanical systems, consoles, electronics racks and marine 5083 sheet-metal assemblies — from 3D CAD and engineering change requests to supplier negotiation (CNC machining, laser cutting, TIG welding) and shop-floor quality control across 60+ high-speed vessels and 600+ components. Note: Representative visuals — original vessel photographs and CAD drawings are protected under NDA.',
          tags: ['SolidWorks', 'Siemens NX', '5083 Sheet Metal', 'CNC & Laser', 'Mass Production', 'Under NDA'],
          highlights: [
            { title: 'Series Scale', text: 'Interior electromechanical systems engineered and produced for 60+ vessels and 600+ components.' },
            { title: 'Supply Chain', text: 'Direct negotiation and quality control with external CNC, laser cutting and marine sheet-metal fabricators.' },
            { title: 'Confidentiality (NDA)', text: 'Representative visuals recreated to illustrate scope — original hardware, CAD files and client identity are protected under NDA.' }
          ]
        },
        {
          id: 'smart-heater',
          zone: 'physical',
          title: 'Smart Water Heater',
          meta: 'CAD · FEA / CFD · UX',
          summary: 'Thermal optimization, exploded mechanical CAD architecture and user-centered control unit.',
          cover: 'assets/images/design/heater-exploded.png',
          coverPosition: 'center center',
          hoverCover: 'assets/images/design/heater-control.png',
          hoverPosition: 'center center',
          gallery: [
            'assets/images/design/heater-exploded.png',
            'assets/images/design/heater-control.png',
            'assets/images/design/heater-fea.png',
            'assets/images/design/heater-cfd.png'
          ],
          description: 'Intelligent water heating system combining mechanical assembly engineering, FEA/CFD thermal and structural analysis, and clean control unit industrial design.',
          tags: ['SolidWorks CAD', 'FEA / CFD', 'DFM', 'Thermal Design', 'Control UX'],
          highlights: [
            { title: 'Mechanical Architecture', text: 'Modular internal assembly designed for serviceability and manufacturing.' },
            { title: 'Simulation', text: 'Helical flow CFD and rotor FEA validation prior to prototyping.' }
          ]
        }
      ],
      softwareProjects: [
        {
          id: 'prometeos',
          zone: 'digital',
          title: 'prometeOS',
          meta: 'APPLIED AI · OPERATIONS OS',
          summary: 'AI operating system that organizes multi-department work, keeps every project under control, and runs light on your machine.',
          cover: 'assets/images/software/prometeos-organigrama.png',
          coverFit: 'contain',
          coverBg: '#09090d',
          hoverCover: 'assets/images/software/prometeos-cadena.png',
          hoverFit: 'contain',
          hoverBg: '#09090d',
          galleryLayout: 'landscape',
          gallery: [
            'assets/images/software/prometeos-organigrama.png',
            'assets/images/software/prometeos-cadena.png',
            'assets/images/software/prometeos-panel.png'
          ],
          description: 'Turns scattered AI chats into a structured studio workflow. Every project keeps a single source of truth, clear permissions and specialized roles so complex work moves faster without losing control.',
          tags: ['Applied AI', 'Workflow Automation', 'Project Governance', 'Multi-Department', 'Desktop Control'],
          highlights: [
            { title: 'Zero Chaos', text: 'Separates strategy, live project state and specialist execution so nothing gets lost.' },
            { title: 'Fast and Lightweight', text: 'Built to keep sessions focused and avoid bloated context or heavy local resource use.' }
          ]
        },
        {
          id: 'medixi',
          zone: 'digital',
          title: 'mediXI',
          meta: 'PRIVATE BETA · BARCELONA',
          summary: 'An invite-only urban map for discovering inspiring workspaces and meeting the right people in the real world.',
          cover: 'assets/images/software/medixi-shot-01.png',
          coverFit: 'cover',
          coverPosition: 'center 29%',
          coverBg: '#090a0e',
          galleryLayout: 'portrait',
          gallery: [
            'assets/images/software/medixi-shot-01.png'
          ],
          description: 'Currently in closed beta in Barcelona. Designed to turn everyday solo work into meaningful in-person encounters across curated spaces — without noise, feeds or public exposure.',
          tags: ['Private Beta', 'Barcelona', 'Curated Spaces', 'Real-World Community'],
          highlights: [
            { title: 'Quiet by Design', text: 'Curated places and intentional offline connections, away from noisy social networks.' },
            { title: 'Closed Access', text: 'Rolling out privately in Barcelona before opening to the public.' }
          ]
        },
        {
          id: 'matinium',
          zone: 'digital',
          title: 'Matinium',
          meta: 'DAILY RITUAL · WELLNESS',
          summary: 'Start your morning with clarity and close your night in silence — a calm daily ritual app free of streaks and noise.',
          cover: 'assets/images/software/matinium-cover.png',
          coverFit: 'contain',
          coverBg: '#090a0e',
          hoverCover: 'assets/images/software/matinium-slide-02.png',
          hoverFit: 'contain',
          hoverBg: '#FAF9F5',
          galleryLayout: 'landscape',
          gallery: [
            'assets/images/software/matinium-hero.png',
            'assets/images/software/matinium-slide-01.png',
            'assets/images/software/matinium-slide-02.png',
            'assets/images/software/matinium-slide-03.png'
          ],
          description: 'Built around circadian rhythm and a 12-week guided creative practice. Matinium pairs screen-free morning writing with three daily priorities and a pure dark evening wind-down so your phone serves your life instead of consuming it.',
          tags: ['Daily Ritual', '12-Week Guided Journey', 'Circadian Design', '100% Private Offline', 'Zero Notifications'],
          highlights: [
            { title: 'Morning to Night Flow', text: 'Warm dawn interface to lock your 3 daily priorities, fading into pure black at night so you rest.' },
            { title: 'Zero Dopamine Traps', text: 'No guilt-inducing streaks, no manipulative alerts, and all reflections stay privately on your device.' }
          ]
        },
        {
          id: 'menir',
          zone: 'digital',
          title: 'Menir',
          meta: 'FOCUS · APP BLOCKER',
          summary: 'Break mindless scrolling in seconds — solve three quick mental math challenges before opening distracting apps.',
          cover: 'assets/images/software/menir-01-dashboard.png',
          coverFit: 'cover',
          coverPosition: 'center 24%',
          coverBg: '#08090b',
          hoverCover: 'assets/images/software/menir-02-reto.png',
          hoverFit: 'cover',
          hoverPosition: 'center 26%',
          hoverBg: '#08090b',
          galleryLayout: 'portrait',
          gallery: [
            'assets/images/software/menir-01-dashboard.png',
            'assets/images/software/menir-02-reto.png',
            'assets/images/software/menir-03-dificultad.png',
            'assets/images/software/menir-04-apps.png'
          ],
          description: 'Reclaim your attention without rigid lockouts. Whenever you reach for Instagram, TikTok or YouTube on autopilot, Menir inserts a calm, customizable mental pause so you only enter when you truly choose to.',
          tags: ['App Blocker', 'Attention Control', 'Mental Pause', 'Customizable Difficulty', '100% Private'],
          highlights: [
            { title: 'Stops Autopilot', text: 'Interrupts impulsive app opens at the exact moment of habit and repeats on timed intervals.' },
            { title: 'Tailored to You', text: 'Pick the apps to guard, operation types, difficulty level and time passes with full daily stats.' }
          ]
        },
        {
          id: 'producty',
          zone: 'digital',
          title: 'Producty',
          meta: 'DEEP FOCUS · EXECUTION',
          summary: 'Turn overwhelming goals into a 6-step action roadmap, lock into zero-distraction focus blocks and track every real minute.',
          cover: 'assets/images/software/producty-01-bunker.png',
          coverFit: 'cover',
          coverPosition: 'center 76%',
          coverBg: '#050706',
          hoverCover: 'assets/images/software/producty-03-compromiso.png',
          hoverFit: 'cover',
          hoverPosition: 'center 72%',
          hoverBg: '#050706',
          galleryLayout: 'portrait',
          gallery: [
            'assets/images/software/producty-01-bunker.png',
            'assets/images/software/producty-02-desglose.png',
            'assets/images/software/producty-03-compromiso.png',
            'assets/images/software/producty-04-tiempo.png',
            'assets/images/software/producty-05-marcaje.png'
          ],
          description: 'Built to end planning paralysis. Producty breaks big goals into six concrete executable phases, puts you inside an unbreakable distraction-free focus session and measures the real hours invested in every project.',
          tags: ['6-Phase Roadmap', 'Hyper-Focus Mode', 'Time Telemetry', 'Goal Execution', 'Zero Distractions'],
          highlights: [
            { title: 'Clear 6-Step Action Plan', text: 'Breaks any ambitious goal into sequential, bite-sized phases with time estimates.' },
            { title: 'Real Time Visibility', text: 'Tracks actual hours invested per project so you know exactly where your focus goes.' }
          ]
        }
      ]
    },

    es: {
      nav: {
        work: 'Físico',
        lab: 'Software e IA',
        services: 'Capacidades',
        process: 'Proceso',
        cta: 'Iniciar Proyecto'
      },
      hero: {
        eyebrow: 'ESTUDIO DE PRODUCTO FÍSICO Y DIGITAL · BARCELONA',
        title: 'Traes la idea.<br>La hacemos realidad.',
        subtitle: 'Ingeniería de producto de principio a fin: del diseño CAD 3D y la producción en masa con proveedores hasta apps móviles e IA aplicada.',
        ctaPrimary: 'Iniciar Proyecto',
        ctaSecondary: 'Ver Proyectos'
      },
      kineticItems: [
        'DISEÑO INDUSTRIAL Y CAD 3D',
        'I+D EN BIOMATERIALES',
        'PRODUCCIÓN EN MASA Y PROVEEDORES',
        'DFM · CNC · CHAPA METÁLICA · MOLDES',
        'APPS MÓVILES Y UX / UI',
        'SISTEMAS DE IA APLICADA',
        'SOLIDWORKS · RHINO 3D · SIEMENS NX',
        'BARCELONA · ESTUDIO END-TO-END'
      ],
      work: {
        eyebrow: '01 / PRODUCTOS FÍSICOS',
        title: 'Diseño Industrial, I+D y Producción en Masa.',
        desc: 'Innovación en biomateriales, iluminación paramétrica, ensamblajes mecánicos y fabricación en serie dirigida con talleres.',
        featuredBadge: 'I+D DESTACADO · BIOMATERIALES',
        featuredCta: 'Explorar Bolet Lamp',
        viewProject: 'Ver proyecto'
      },
      lab: {
        eyebrow: '02 / SOFTWARE, APPS E IA APLICADA',
        title: 'Productos Digitales y Sistemas de IA.',
        desc: 'Aplicaciones móviles propias y herramientas de IA diseñadas para resolver problemas reales con claridad y criterio.',
        viewProject: 'Ver proyecto'
      },
      services: {
        eyebrow: '03 / CAPACIDADES',
        title: 'Un solo estudio del concepto a fábrica y lanzamiento.',
        desc: 'La mayoría de estudios se quedan en renders. Aquí diseñamos, hacemos ingeniería, lideramos proveedores para producir en serie y desarrollamos el software de tu producto.',
        cta: 'Cuéntanos tu Idea',
        note: 'Diseño de Producto · Producción en Masa · Software e IA',
        pillars: [
          {
            id: 'design',
            num: '01',
            title: 'Diseño Industrial e Ingeniería Mecánica CAD',
            desc: 'Desde superficies orgánicas Clase A hasta ensamblajes electromecánicos complejos listos para fabricar. Modelos 3D, planos de despiece y soldadura, tolerancias y BOM.',
            chips: ['SolidWorks', 'Rhino 3D y Grasshopper', 'Siemens NX', 'AutoCAD', 'Superficies Clase A', 'FEA / CFD', 'Planos y BOM']
          },
          {
            id: 'production',
            num: '02',
            title: 'Liderazgo de Producción en Serie y Proveedores',
            desc: '¿Necesitas fabricar a escala? Nos encargamos del DFM, búsqueda y negociación directa con proveedores (CNC, corte láser, chapa metálica, moldes, impresión 3D), control de calidad y entrega en serie.',
            chips: ['Optimización DFM', 'Trato con Proveedores', 'CNC y Corte Láser', 'Chapa Metálica', 'Moldes a Medida', 'Impresión 3D', 'Control de Calidad']
          },
          {
            id: 'software',
            num: '03',
            title: 'Apps Móviles, Producto Digital e IA Aplicada',
            desc: 'Diseñamos y programamos aplicaciones móviles de alto rendimiento, plataformas web, automatización en Python y sistemas de agentes de IA orientados a operaciones reales.',
            chips: ['Flutter y Dart', 'iOS y Android', 'Supabase y SQL', 'UX / UI Figma', 'Automatización Python', 'Agentes de IA']
          }
        ]
      },
      process: {
        eyebrow: '04 / CÓMO TRABAJAMOS',
        title: 'Un estudio. Cuatro fases claras.',
        steps: [
          { num: '01', title: 'Definición y Requisitos', desc: 'Convertimos tu idea en especificaciones técnicas claras, estimación de costes, viabilidad y hoja de ruta.' },
          { num: '02', title: 'Diseño e Ingeniería', desc: 'Modelado CAD 3D, superficies Clase A, validación FEA/CFD o diseño UX/UI y arquitectura de software.' },
          { num: '03', title: 'Prototipado y Proveedores', desc: 'Impresión 3D rápida, prototipos funcionales, búsqueda de proveedores, presupuestos y ajustes DFM.' },
          { num: '04', title: 'Producción y Lanzamiento', desc: 'Dirección técnica en serie y control de calidad con talleres, o publicación en tiendas y nube.' }
        ]
      },
      mystery: {
        eyebrow: 'NUEVO PROYECTO',
        title: '¿Tu Próximo Producto?',
        desc: 'Producto físico, producción en masa o una app — trae la idea.',
        cta: 'Iniciar Proyecto'
      },
      footer: {
        eyebrow: 'EMPIEZA ALGO REAL',
        headline: '¿Tienes un producto, una fabricación o una app en mente?',
        cta: 'Iniciar Proyecto',
        contactLabel: 'DIRECTO',
        socialLabel: 'CANALES',
        legalLabel: 'LEGAL',
        entityLabel: 'ENTIDAD',
        legalNotice: 'Aviso Legal',
        privacy: 'Privacidad',
        cookies: 'Cookies'
      },
      modal: {
        buildSimilar: 'Crear algo similar',
        specsLabel: 'AZDISSENY · ESTUDIO DE PRODUCTO',
        contactTitle: 'Cuéntanos tu proyecto.',
        contactSub: 'Tanto si es un producto físico, una tirada de producción en masa o una app, cuéntanos la base y te respondemos en breve.',
        name: 'Nombre o Empresa',
        namePh: 'Tu nombre o empresa',
        email: 'Correo Electrónico',
        emailPh: 'tu@empresa.com',
        area: 'Área del Proyecto',
        areas: [
          'Diseño de Producto y CAD 3D',
          'Producción en Masa y Proveedores',
          'Software, App Móvil e IA Aplicada',
          'Proyecto Integral (Físico + Digital)'
        ],
        message: 'Detalles del Proyecto',
        messagePh: 'Describe tu idea, objetivos técnicos, plazo estimado o necesidades de fabricación...',
        privacyPrefix: 'He leído y acepto la',
        privacyLink: 'Política de Privacidad',
        rgpdNote: 'Responsable: A-Z DISSENY, SL (NIF B60369329). Finalidad: atender tu solicitud de contacto o presupuesto. Envío mediante FormSubmit.co y correo electrónico. Derechos en azdisseny.sl@gmail.com.',
        submit: 'Enviar Propuesta',
        sending: 'Enviando...',
        success: 'Propuesta enviada. Te responderemos en breve a tu correo.',
        error: 'Error al enviar. Puedes escribir directamente a azdisseny.sl@gmail.com.'
      },
      hardwareProjects: [
        {
          id: 'bolet-lamp',
          zone: 'physical',
          featured: true,
          title: 'Bolet Lamp',
          meta: 'I+D BIOMATERIALES · PAÍSES BAJOS',
          summary: 'Lámpara circular de micelio cultivada en moldes impresos en 3D a medida, con sensor táctil sin contacto por proximidad y encastres snap-fit con desacoplo térmico.',
          featuredTags: ['Biomaterial de Micelio', 'Sensor sin Contacto', 'I+D Circular'],
          cover: 'assets/images/design/bolet-lamp.jpg',
          coverPosition: 'center 72%',
          gallery: [
            'assets/images/design/bolet-lamp.jpg'
          ],
          description: 'Lámpara arquitectónica 100% biodegradable desarrollada en un proyecto internacional de I+D en Países Bajos. Cultivada en micelio orgánico dentro de moldes diseñados e impresos en 3D a medida para regular densidad y difusión lumínica, con sensor de proximidad sin contacto, encastres snap-fit y desacoplo térmico LED.',
          tags: ['Biomaterial de Micelio', 'Sensor sin Contacto', 'Moldes 3D', 'I+D Circular', 'Snap-Fit DFM'],
          highlights: [
            { title: 'Cultivo en Micelio y Utillaje', text: 'Moldes impresos en 3D a medida para controlar la densidad orgánica del micelio y la calidez lumínica.' },
            { title: 'Interacción sin Contacto', text: 'Sensor superior de proximidad integrado que permite encender y regular la luz pasando la mano sin tocar el material.' },
            { title: 'I+D Completo', text: 'Prototipo circular funcional entregado en 6 meses liderando un equipo multidisciplinar en Países Bajos.' }
          ]
        },
        {
          id: 'firestone-lamp',
          zone: 'physical',
          title: 'Firestone Lamp',
          meta: 'ILUMINACIÓN PARAMÉTRICA · 3D',
          summary: 'Superficies orgánicas paramétricas Clase A (continuidad G2) fabricadas mediante impresión 3D digital.',
          cover: 'assets/images/slides/design-lamp.webp',
          coverPosition: 'center 58%',
          gallery: [
            'assets/images/slides/design-lamp.webp',
            'assets/images/design/firestone.png'
          ],
          description: 'Lámpara decorativa paramétrica propia de A-Z DISSENY, SL. Geometría orgánica con continuidad de superficies Clase A fabricada directamente mediante manufactura aditiva FDM.',
          tags: ['Rhino 3D', 'Grasshopper', 'Superficies Clase A', 'Impresión 3D FDM', 'Iluminación'],
          highlights: [
            { title: 'Superficie Paramétrica', text: 'Geometría orgánica G2 diseñada para una difusión de luz continua.' },
            { title: 'Fabricación Propia', text: 'Producción digital directa sin necesidad de moldes de inyección costosos.' }
          ]
        },
        {
          id: 'naval',
          zone: 'physical',
          title: 'Sistemas Electromecánicos Navales',
          meta: 'PRODUCCIÓN EN SERIE · +60 BARCOS · BAJO NDA',
          summary: 'Sistemas electromecánicos interiores, chapistería marina 5083, gestión de proveedores y producción en serie para +60 barcos. Imágenes representativas (reales protegidas por NDA).',
          cover: 'assets/images/design/naval-vessel-nda.jpg',
          coverPosition: '60% center',
          hoverCover: 'assets/images/design/naval-battery-bay-nda.jpg',
          hoverPosition: 'center center',
          gallery: [
            'assets/images/design/naval-vessel-nda.jpg',
            'assets/images/design/naval-bridge-nda.jpg',
            'assets/images/design/naval-electronics-rack-nda.jpg',
            'assets/images/design/naval-battery-bay-nda.jpg'
          ],
          description: 'Dirección del ciclo de vida completo de sistemas electromecánicos interiores, consolas, bastidores de electrónica y conjuntos en chapa marina 5083 — desde el modelado CAD 3D y cambios de ingeniería hasta la negociación con proveedores (mecanizado CNC, corte láser, soldadura TIG) y control de calidad en taller para más de 60 embarcaciones y más de 600 componentes. Nota: Imágenes representativas — las fotografías y planos reales están protegidos bajo contrato de confidencialidad (NDA).',
          tags: ['SolidWorks', 'Siemens NX', 'Chapa Marina 5083', 'CNC y Láser', 'Producción en Serie', 'Bajo NDA'],
          highlights: [
            { title: 'Escala en Serie', text: 'Sistemas electromecánicos interiores diseñados y producidos para más de 60 barcos y más de 600 componentes.' },
            { title: 'Cadena de Suministro', text: 'Negociación directa y control de calidad con talleres externos de CNC, corte láser y chapistería marina.' },
            { title: 'Confidencialidad (NDA)', text: 'Imágenes representativas recreadas para ilustrar el alcance: las fotografías reales, planos CAD e identidad del cliente están protegidos por NDA.' }
          ]
        },
        {
          id: 'smart-heater',
          zone: 'physical',
          title: 'Smart Water Heater',
          meta: 'CAD · FEA / CFD · UX',
          summary: 'Optimización térmica, arquitectura mecánica explosionada en CAD y unidad de control centrada en el usuario.',
          cover: 'assets/images/design/heater-exploded.png',
          coverPosition: 'center center',
          hoverCover: 'assets/images/design/heater-control.png',
          hoverPosition: 'center center',
          gallery: [
            'assets/images/design/heater-exploded.png',
            'assets/images/design/heater-control.png',
            'assets/images/design/heater-fea.png',
            'assets/images/design/heater-cfd.png'
          ],
          description: 'Sistema inteligente de calentamiento de agua que combina ingeniería de ensamblaje mecánico, validación térmica y estructural FEA/CFD y diseño industrial de unidad de control.',
          tags: ['SolidWorks CAD', 'FEA / CFD', 'DFM', 'Diseño Térmico', 'UX Control'],
          highlights: [
            { title: 'Arquitectura Mecánica', text: 'Ensamblaje interno modular pensado para mantenimiento y fabricabilidad.' },
            { title: 'Simulación', text: 'Validación CFD de flujo helicoidal y FEA del rotor antes de prototipar.' }
          ]
        }
      ],
      softwareProjects: [
        {
          id: 'prometeos',
          zone: 'digital',
          title: 'prometeOS',
          meta: 'IA APLICADA · SISTEMA OPERATIVO',
          summary: 'Sistema operativo de IA que ordena el trabajo entre departamentos, mantiene cada proyecto bajo control y funciona ligero en local.',
          cover: 'assets/images/software/prometeos-organigrama.png',
          coverFit: 'contain',
          coverBg: '#09090d',
          hoverCover: 'assets/images/software/prometeos-cadena.png',
          hoverFit: 'contain',
          hoverBg: '#09090d',
          galleryLayout: 'landscape',
          gallery: [
            'assets/images/software/prometeos-organigrama.png',
            'assets/images/software/prometeos-cadena.png',
            'assets/images/software/prometeos-panel.png'
          ],
          description: 'Convierte chats dispersos de IA en una operativa estructurada de estudio. Cada proyecto mantiene una única fuente de verdad, permisos claros y roles especializados para avanzar más rápido sin perder control.',
          tags: ['IA Aplicada', 'Automatización', 'Control de Proyectos', 'Multi-Departamento', 'Operativa Real'],
          highlights: [
            { title: 'Cero Caos', text: 'Separa estrategia, estado real del proyecto y ejecución especializada para que nada se pierda.' },
            { title: 'Rápido y Ligero', text: 'Diseñado para sesiones enfocadas sin saturar el contexto ni sobrecargar el equipo.' }
          ]
        },
        {
          id: 'medixi',
          zone: 'digital',
          title: 'mediXI',
          meta: 'BETA PRIVADA · BARCELONA',
          summary: 'Mapa urbano privado para descubrir espacios con criterio y conectar con personas afines en el mundo real.',
          cover: 'assets/images/software/medixi-shot-01.png',
          coverFit: 'cover',
          coverPosition: 'center 29%',
          coverBg: '#090a0e',
          galleryLayout: 'portrait',
          gallery: [
            'assets/images/software/medixi-shot-01.png'
          ],
          description: 'Actualmente en fase privada en Barcelona. Pensada para transformar el trabajo en solitario en encuentros presenciales auténticos en espacios seleccionados — sin ruido, sin algoritmos ni exposición pública.',
          tags: ['Beta Privada', 'Barcelona', 'Espacios Seleccionados', 'Comunidad Real'],
          highlights: [
            { title: 'Discreta por Diseño', text: 'Lugares seleccionados y conexiones presenciales con intención, lejos del ruido de las redes.' },
            { title: 'Acceso Cerrado', text: 'Despliegue privado en Barcelona antes de su apertura pública.' }
          ]
        },
        {
          id: 'matinium',
          zone: 'digital',
          title: 'Matinium',
          meta: 'RITUAL DIARIO · BIENESTAR',
          summary: 'Empieza el día con claridad y ciérralo en silencio — una app serena de hábitos diarios sin rachas ni ruido.',
          cover: 'assets/images/software/matinium-cover.png',
          coverFit: 'contain',
          coverBg: '#090a0e',
          hoverCover: 'assets/images/software/matinium-slide-02.png',
          hoverFit: 'contain',
          hoverBg: '#FAF9F5',
          galleryLayout: 'landscape',
          gallery: [
            'assets/images/software/matinium-hero.png',
            'assets/images/software/matinium-slide-01.png',
            'assets/images/software/matinium-slide-02.png',
            'assets/images/software/matinium-slide-03.png'
          ],
          description: 'Diseñada al ritmo circadiano junto a un recorrido guiado de 12 semanas. Matinium combina escritura matutina sin pantalla, tres prioridades claras al día y un cierre nocturno en negro puro para que el móvil sirva a tu vida y no la consuma.',
          tags: ['Ritual Diario', 'Guía de 12 Semanas', 'Diseño Circadiano', '100% Privada Offline', 'Sin Notificaciones'],
          highlights: [
            { title: 'Del Amanecer al Descanso', text: 'Interfaz cálida al despertar para fijar tus 3 prioridades y negro puro por la noche para desconectar.' },
            { title: 'Sin Trampas de Dopamina', text: 'Sin rachas que generen ansiedad ni alertas invasivas; tus reflexiones nunca salen de tu móvil.' }
          ]
        },
        {
          id: 'menir',
          zone: 'digital',
          title: 'Menir',
          meta: 'ENFOQUE · BLOQUEADOR DE APPS',
          summary: 'Frena el scroll automático al instante — resuelve tres micro-retos mentales antes de abrir tus apps más adictivas.',
          cover: 'assets/images/software/menir-01-dashboard.png',
          coverFit: 'cover',
          coverPosition: 'center 24%',
          coverBg: '#08090b',
          hoverCover: 'assets/images/software/menir-02-reto.png',
          hoverFit: 'cover',
          hoverPosition: 'center 26%',
          hoverBg: '#08090b',
          galleryLayout: 'portrait',
          gallery: [
            'assets/images/software/menir-01-dashboard.png',
            'assets/images/software/menir-02-reto.png',
            'assets/images/software/menir-03-dificultad.png',
            'assets/images/software/menir-04-apps.png'
          ],
          description: 'Recupera el control de tu atención sin bloqueos extremos. Cada vez que abres Instagram, TikTok o YouTube por inercia, Menir introduce una pausa consciente y configurable para que entres solo cuando de verdad lo decides.',
          tags: ['Bloqueador de Apps', 'Control de Atención', 'Pausa Consciente', 'Dificultad a Medida', '100% Privada'],
          highlights: [
            { title: 'Corta el Piloto Automático', text: 'Detiene el impulso en el instante exacto y vuelve a activarse por intervalos si sigues dentro.' },
            { title: 'A tu Medida', text: 'Elige qué apps proteger, el tipo de cálculo, la dificultad y los tiempos de pase con métricas diarias.' }
          ]
        },
        {
          id: 'producty',
          zone: 'digital',
          title: 'Producty',
          meta: 'ENFOQUE PROFUNDO · EJECUCIÓN',
          summary: 'Convierte grandes objetivos en 6 fases ejecutables, bloquea distracciones en modo enfoque y mide cada minuto real.',
          cover: 'assets/images/software/producty-01-bunker.png',
          coverFit: 'cover',
          coverPosition: 'center 76%',
          coverBg: '#050706',
          hoverCover: 'assets/images/software/producty-03-compromiso.png',
          hoverFit: 'cover',
          hoverPosition: 'center 72%',
          hoverBg: '#050706',
          galleryLayout: 'portrait',
          gallery: [
            'assets/images/software/producty-01-bunker.png',
            'assets/images/software/producty-02-desglose.png',
            'assets/images/software/producty-03-compromiso.png',
            'assets/images/software/producty-04-tiempo.png',
            'assets/images/software/producty-05-marcaje.png'
          ],
          description: 'Creada para acabar con la parálisis por análisis. Producty divide cualquier proyecto en seis fases claras con estimación de tiempo, te sumerge en sesiones de compromiso sin ruido y registra las horas reales invertidas en tus metas.',
          tags: ['Plan en 6 Fases', 'Modo Búnker', 'Medición de Tiempo', 'Ejecución de Metas', 'Cero Distracciones'],
          highlights: [
            { title: 'Desglose Ejecutable', text: 'Divide objetivos complejos en 6 pasos secuenciales con predicción de tiempo para pasar a la acción.' },
            { title: 'Control Real del Tiempo', text: 'Telemetría clara de cuántas horas inviertes en cada proyecto para decidir con datos.' }
          ]
        }
      ]
    }
  },

  legal: {
    aviso: {
      label: 'Aviso Legal / Legal Notice',
      html: `<h3>Titularidad del Sitio Web</h3>
        <p><strong>A-Z DISSENY, SL</strong> · NIF: <strong>B60369329</strong><br>
        Domicilio fiscal: Mas Beulovi s/n, 08589 Sobremunt (Barcelona), España.<br>
        Correo electrónico de contacto: <a href="mailto:azdisseny.sl@gmail.com">azdisseny.sl@gmail.com</a></p>
        <h3>Propiedad Intelectual</h3>
        <p>Todos los diseños, renders, modelos 3D, fotografías, código y textos mostrados en este sitio son titularidad de A-Z DISSENY, SL o se muestran con fines estrictamente demostrativos de proyectos realizados.</p>`
    },
    privacidad: {
      label: 'Privacidad / Privacy (RGPD)',
      html: `<h3>Protección de Datos Personales</h3>
        <p><strong>Responsable:</strong> A-Z DISSENY, SL (NIF B60369329).<br>
        <strong>Finalidad:</strong> Gestionar solicitudes de contacto, presupuestos y comunicaciones profesionales.<br>
        <strong>Legitimación:</strong> Consentimiento expreso del interesado (Art. 6.1.a RGPD) y medidas precontractuales (Art. 6.1.b RGPD).<br>
        <strong>Encargados técnicos:</strong> FormSubmit.co (envío de formularios) y proveedor de alojamiento web.<br>
        <strong>Derechos:</strong> Puede ejercer sus derechos de acceso, rectificación, supresión y oposición escribiendo a <a href="mailto:azdisseny.sl@gmail.com">azdisseny.sl@gmail.com</a>.</p>`
    },
    cookies: {
      label: 'Cookies',
      html: `<h3>Política de Cookies</h3>
        <p>Este sitio web utiliza únicamente almacenamiento local técnico mínimo (por ejemplo, recordar la preferencia de idioma EN/ES). No utiliza cookies publicitarias ni rastreadores invasivos de terceros.</p>`
    }
  }
};
