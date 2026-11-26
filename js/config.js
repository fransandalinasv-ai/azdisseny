/* =========================================================
   AZDISSENY — Bilingual Studio Content (EN / ES)
   Verified real data only · Entity: A-Z DISSENY, SL
   ========================================================= */

'use strict';

window.AZ_CONFIG = {
  email: 'azdisseny.sl@gmail.com',
  formEndpoint: 'https://formsubmit.co/ajax/azdisseny.sl@gmail.com',

  heroSlides: [
    { src: 'assets/images/slides/design-lamp.webp', alt: 'AZdisseny Parametric Lighting Design' },
    { src: 'assets/images/design/naval-vessel-nda.jpg', alt: 'High-Speed Naval Electromechanical Architecture (Representative Visual · Under NDA)' },
    { src: 'assets/images/design/heater-exploded.png', alt: 'Smart Heater Exploded CAD Assembly' },
    { src: 'assets/images/software/prometeos-organigrama.png', alt: 'prometeOS Multi-Agent AI Architecture' }
  ],

  marqueeItems: [
    'INDUSTRIAL DESIGN',
    'SOLIDWORKS & RHINO 3D',
    'MASS PRODUCTION LEADERSHIP',
    'SUPPLIER & SUPPLY CHAIN MANAGEMENT',
    'DFM · SHEET METAL · CNC · 3D PRINTING',
    'MOBILE APPS (FLUTTER & SUPABASE)',
    'PYTHON AUTOMATION',
    'APPLIED AI SYSTEMS'
  ],

  i18n: {
    en: {
      nav: {
        services: 'Services',
        work: 'Work',
        lab: 'Software & AI',
        process: 'Process',
        contact: 'Contact'
      },
      hero: {
        eyebrow: 'PHYSICAL & DIGITAL PRODUCT STUDIO · BARCELONA',
        title: 'You bring the idea.<br>We make it real.',
        subtitle: 'End-to-end product engineering — from 3D CAD, prototyping and mass production with suppliers to mobile apps and applied AI.',
        ctaPrimary: 'Start a Project',
        ctaSecondary: 'Explore Work'
      },
      services: {
        eyebrow: '01 / CAPABILITIES',
        title: 'From raw concept to factory floor & app launch.',
        desc: 'Most studios stop at renders. We design, engineer, manage suppliers for mass production, and build the software around your product.',
        cta: 'Discuss Your Idea',
        note: 'Product Design · Mass Production · Software & AI',
        pillars: [
          {
            id: 'design',
            tabLabel: '01 · Product Design & CAD 3D',
            index: 'CAPABILITY 01 / 03',
            title: 'Industrial Design & Precision Mechanical CAD',
            desc: 'From organic Class-A surfacing to complex electromechanical assemblies ready for fabrication. Complete 3D models, weldment & part drawings, tolerances and BOM.',
            glow: 'radial-gradient(circle at 70% 35%, rgba(217, 119, 6, 0.42), rgba(15, 15, 18, 0.9) 70%)',
            chips: ['SolidWorks', 'Rhino 3D & Grasshopper', 'Siemens NX', 'AutoCAD', 'Class-A Surfacing', 'FEA / CFD', 'BOM & Drawings']
          },
          {
            id: 'production',
            tabLabel: '02 · Mass Production & Suppliers',
            index: 'CAPABILITY 02 / 03',
            title: 'Mass Production Leadership & Supply Chain',
            desc: 'Need to manufacture at scale? We handle DFM optimization, supplier sourcing and negotiation (CNC, laser cutting, sheet metal, molds, 3D printing), quality control and series delivery.',
            glow: 'radial-gradient(circle at 65% 40%, rgba(220, 38, 38, 0.36), rgba(15, 15, 18, 0.92) 70%)',
            chips: ['DFM Optimization', 'Supplier Negotiation', 'CNC & Laser Cut', 'Sheet Metal', 'Custom Molds', '3D Printing (FDM/SLA)', 'QC & Series Production']
          },
          {
            id: 'software',
            tabLabel: '03 · Software, Apps & Applied AI',
            index: 'CAPABILITY 03 / 03',
            title: 'Mobile Apps, Digital Products & Applied AI',
            desc: 'We design and build clean, high-performance mobile apps, web platforms, Python engineering automation and AI agent workflows tailored to real operations.',
            glow: 'radial-gradient(circle at 68% 35%, rgba(37, 99, 235, 0.42), rgba(15, 15, 18, 0.92) 70%)',
            chips: ['Flutter & Dart', 'iOS & Android', 'Supabase & SQL', 'UX / UI Figma', 'Python Automation', 'Applied AI Agents']
          }
        ]
      },
      work: {
        eyebrow: '02 / HARDWARE & MASS PRODUCTION',
        title: 'Physical Products & Production Engineering.',
        desc: 'Selected mechanical engineering, mass production leadership, biomaterial R&D and parametric lighting.'
      },
      lab: {
        eyebrow: '03 / SOFTWARE, APPS AND APPLIED AI',
        title: 'Digital Products and AI Systems.',
        desc: 'In-house mobile apps and AI tools designed to solve real everyday problems with clarity and craft.'
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
        title: 'Your Next Product?',
        desc: 'Hardware, mass production or a digital app — bring the idea.',
        cta: 'Start a Project'
      },
      footer: {
        eyebrow: 'START SOMETHING REAL',
        headline: 'Have a product, production run or app in mind?',
        cta: 'Start a Project',
        contactLabel: 'DIRECT',
        socialLabel: 'STUDIO',
        legalLabel: 'LEGAL',
        legalNotice: 'Legal Notice',
        privacy: 'Privacy',
        cookies: 'Cookies'
      },
      floating: {
        cta: 'Start a Project'
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
          id: 'naval',
          title: 'Naval Electromechanical Systems',
          meta: 'MASS PRODUCTION · +60 VESSELS · UNDER NDA',
          summary: 'Interior electromechanical systems, marine 5083 sheet metal, supplier management and series production for 60+ vessels. Representative visuals (originals protected under NDA).',
          cover: 'assets/images/design/naval-vessel-nda.jpg',
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
          title: 'Smart Water Heater',
          meta: 'CAD · FEA / CFD · UX',
          summary: 'Thermal optimization, exploded mechanical CAD architecture and user-centered control unit.',
          cover: 'assets/images/design/heater-exploded.png',
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
        },
        {
          id: 'bolet-lamp',
          title: 'Bolet Lamp',
          meta: 'BIOMATERIAL R&D · NETHERLANDS',
          summary: 'Circular organic mycelium lamp with custom 3D-printed molds and snap-fit thermal decoupling.',
          cover: 'assets/images/design/bolet-lamp.jpg',
          gallery: [
            'assets/images/design/bolet-lamp.jpg'
          ],
          description: 'Functional biodegradable architectural lamp developed during an international R&D project in the Netherlands. Custom 3D-printed molds control mycelium density and light diffusion, paired with snap-fit mechanical joints and LED thermal decoupling.',
          tags: ['Biomaterials', '3D-Printed Molds', 'R&D Leadership', 'Snap-Fit DFM', 'Lighting'],
          highlights: [
            { title: 'Custom Tooling', text: '3D-printed molds engineered to shape organic growth density and light output.' },
            { title: 'End-to-End R&D', text: 'Functional prototype delivered in 6 months leading a multidisciplinary team.' }
          ]
        },
        {
          id: 'firestone-lamp',
          title: 'Firestone Lamp',
          meta: 'PARAMETRIC LIGHTING · 3D PRINT',
          summary: 'Class-A G2 continuous organic surfacing produced in-house via digital additive manufacturing.',
          cover: 'assets/images/design/firestone.png',
          gallery: [
            'assets/images/design/firestone.png',
            'assets/images/slides/design-lamp.webp'
          ],
          description: 'In-house parametric decorative lighting piece by A-Z DISSENY, SL. Engineered with Class-A continuous organic surfaces and produced directly with FDM additive manufacturing.',
          tags: ['Rhino 3D', 'Grasshopper', 'Class-A Surfacing', 'FDM 3D Printing', 'Lighting Design'],
          highlights: [
            { title: 'Parametric Surface', text: 'Organic geometry built with G2 continuity for smooth light gradients.' },
            { title: 'In-House Manufacturing', text: 'Direct digital fabrication without expensive injection tooling.' }
          ]
        }
      ],
      softwareProjects: [
        {
          id: 'prometeos',
          title: 'prometeOS',
          meta: 'APPLIED AI · OPERATIONS OS',
          summary: 'AI operating system that organizes multi-department work, keeps every project under control, and runs light on your machine.',
          cover: 'assets/images/software/prometeos-organigrama.png',
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
          title: 'mediXI',
          meta: 'PRIVATE BETA · BARCELONA',
          summary: 'An invite-only urban map for discovering inspiring workspaces and meeting the right people in the real world.',
          cover: 'assets/images/software/medixi-shot-01.png',
          coverPosition: 'center 72%',
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
          title: 'Matinium',
          meta: 'DAILY RITUAL · WELLNESS',
          summary: 'Start your morning with clarity and close your night in silence — a calm daily ritual app free of streaks and noise.',
          cover: 'assets/images/software/matinium-cover.png',
          coverPosition: 'center center',
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
          title: 'Menir',
          meta: 'FOCUS · APP BLOCKER',
          summary: 'Break mindless scrolling in seconds — solve three quick mental math challenges before opening distracting apps.',
          cover: 'assets/images/software/menir-01-dashboard.png',
          coverPosition: 'center 58%',
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
          title: 'Producty',
          meta: 'DEEP FOCUS · EXECUTION',
          summary: 'Turn overwhelming goals into a 6-step action roadmap, lock into zero-distraction focus blocks and track every real minute.',
          cover: 'assets/images/software/producty-01-bunker.png',
          coverPosition: 'center 88%',
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
        services: 'Servicios',
        work: 'Proyectos',
        lab: 'Software e IA',
        process: 'Proceso',
        contact: 'Contacto'
      },
      hero: {
        eyebrow: 'ESTUDIO DE PRODUCTO FÍSICO Y DIGITAL · BARCELONA',
        title: 'Traes la idea.<br>La hacemos realidad.',
        subtitle: 'Ingeniería de producto de principio a fin: del diseño CAD 3D y la producción en masa con proveedores hasta apps móviles e IA aplicada.',
        ctaPrimary: 'Iniciar Proyecto',
        ctaSecondary: 'Ver Proyectos'
      },
      services: {
        eyebrow: '01 / CAPACIDADES',
        title: 'Un solo estudio del concepto a fábrica y lanzamiento.',
        desc: 'La mayoría de estudios se quedan en renders. Aquí diseñamos, hacemos ingeniería, lideramos proveedores para producir en serie y desarrollamos el software de tu producto.',
        cta: 'Cuéntanos tu Idea',
        note: 'Diseño de Producto · Producción en Masa · Software e IA',
        pillars: [
          {
            id: 'design',
            tabLabel: '01 · Diseño de Producto y CAD 3D',
            index: 'CAPACIDAD 01 / 03',
            title: 'Diseño Industrial e Ingeniería Mecánica CAD',
            desc: 'Desde superficies orgánicas Clase A hasta ensamblajes electromecánicos complejos listos para fabricar. Modelos 3D, planos de despiece y soldadura, tolerancias y BOM.',
            glow: 'radial-gradient(circle at 70% 35%, rgba(217, 119, 6, 0.42), rgba(15, 15, 18, 0.9) 70%)',
            chips: ['SolidWorks', 'Rhino 3D y Grasshopper', 'Siemens NX', 'AutoCAD', 'Superficies Clase A', 'FEA / CFD', 'Planos y BOM']
          },
          {
            id: 'production',
            tabLabel: '02 · Producción en Masa y Proveedores',
            index: 'CAPACIDAD 02 / 03',
            title: 'Liderazgo de Producción en Serie y Proveedores',
            desc: '¿Necesitas fabricar a escala? Nos encargamos del DFM, búsqueda y negociación directa con proveedores (CNC, corte láser, chapa metálica, moldes, impresión 3D), control de calidad y entrega en serie.',
            glow: 'radial-gradient(circle at 65% 40%, rgba(220, 38, 38, 0.36), rgba(15, 15, 18, 0.92) 70%)',
            chips: ['Optimización DFM', 'Trato con Proveedores', 'CNC y Corte Láser', 'Chapa Metálica', 'Moldes a Medida', 'Impresión 3D', 'Control de Calidad']
          },
          {
            id: 'software',
            tabLabel: '03 · Software, Apps e IA Aplicada',
            index: 'CAPACIDAD 03 / 03',
            title: 'Apps Móviles, Producto Digital e IA Aplicada',
            desc: 'Diseñamos y programamos aplicaciones móviles de alto rendimiento, plataformas web, automatización en Python y sistemas de agentes de IA orientados a operaciones reales.',
            glow: 'radial-gradient(circle at 68% 35%, rgba(37, 99, 235, 0.42), rgba(15, 15, 18, 0.92) 70%)',
            chips: ['Flutter y Dart', 'iOS y Android', 'Supabase y SQL', 'UX / UI Figma', 'Automatización Python', 'Agentes de IA']
          }
        ]
      },
      work: {
        eyebrow: '02 / HARDWARE Y PRODUCCIÓN EN MASA',
        title: 'Producto Físico e Ingeniería de Producción.',
        desc: 'Ensamblajes mecánicos listos para fábrica, liderazgo de producción en serie, I+D en biomateriales e iluminación paramétrica.'
      },
      lab: {
        eyebrow: '03 / SOFTWARE, APPS E IA APLICADA',
        title: 'Productos Digitales y Sistemas de IA.',
        desc: 'Aplicaciones móviles propias y herramientas de IA diseñadas para resolver problemas reales con claridad y criterio.'
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
        title: '¿Tu Próximo Producto?',
        desc: 'Producto físico, producción en masa o una app — trae la idea.',
        cta: 'Iniciar Proyecto'
      },
      footer: {
        eyebrow: 'EMPIEZA ALGO REAL',
        headline: '¿Tienes un producto, una fabricación o una app en mente?',
        cta: 'Iniciar Proyecto',
        contactLabel: 'DIRECTO',
        socialLabel: 'ESTUDIO',
        legalLabel: 'LEGAL',
        legalNotice: 'Aviso Legal',
        privacy: 'Privacidad',
        cookies: 'Cookies'
      },
      floating: {
        cta: 'Iniciar Proyecto'
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
          id: 'naval',
          title: 'Sistemas Electromecánicos Navales',
          meta: 'PRODUCCIÓN EN SERIE · +60 BARCOS · BAJO NDA',
          summary: 'Sistemas electromecánicos interiores, chapistería marina 5083, gestión de proveedores y producción en serie para +60 barcos. Imágenes representativas (reales protegidas por NDA).',
          cover: 'assets/images/design/naval-vessel-nda.jpg',
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
          title: 'Smart Water Heater',
          meta: 'CAD · FEA / CFD · UX',
          summary: 'Optimización térmica, arquitectura mecánica explosionada en CAD y unidad de control centrada en el usuario.',
          cover: 'assets/images/design/heater-exploded.png',
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
        },
        {
          id: 'bolet-lamp',
          title: 'Bolet Lamp',
          meta: 'I+D BIOMATERIALES · PAÍSES BAJOS',
          summary: 'Lámpara circular de micelio orgánico con moldes impresos en 3D y encastres snap-fit con desacoplo térmico.',
          cover: 'assets/images/design/bolet-lamp.jpg',
          gallery: [
            'assets/images/design/bolet-lamp.jpg'
          ],
          description: 'Lámpara funcional 100% biodegradable desarrollada en un proyecto internacional de I+D en Países Bajos. Moldes diseñados e impresos en 3D a medida para controlar la densidad del micelio y la difusión lumínica.',
          tags: ['Biomateriales', 'Moldes 3D', 'Liderazgo I+D', 'Snap-Fit DFM', 'Iluminación'],
          highlights: [
            { title: 'Utillaje Propio', text: 'Moldes impresos en 3D diseñados para regular crecimiento orgánico y luz.' },
            { title: 'I+D Completo', text: 'Prototipo funcional entregado en 6 meses coordinando un equipo multidisciplinar.' }
          ]
        },
        {
          id: 'firestone-lamp',
          title: 'Firestone Lamp',
          meta: 'ILUMINACIÓN PARAMÉTRICA · 3D',
          summary: 'Superficies orgánicas paramétricas Clase A (continuidad G2) fabricadas mediante impresión 3D digital.',
          cover: 'assets/images/design/firestone.png',
          gallery: [
            'assets/images/design/firestone.png',
            'assets/images/slides/design-lamp.webp'
          ],
          description: 'Lámpara decorativa paramétrica propia de A-Z DISSENY, SL. Geometría orgánica con continuidad de superficies Clase A fabricada directamente mediante manufactura aditiva FDM.',
          tags: ['Rhino 3D', 'Grasshopper', 'Superficies Clase A', 'Impresión 3D FDM', 'Iluminación'],
          highlights: [
            { title: 'Superficie Paramétrica', text: 'Geometría orgánica G2 diseñada para una difusión de luz continua.' },
            { title: 'Fabricación Propia', text: 'Producción digital directa sin necesidad de moldes de inyección costosos.' }
          ]
        }
      ],
      softwareProjects: [
        {
          id: 'prometeos',
          title: 'prometeOS',
          meta: 'IA APLICADA · SISTEMA OPERATIVO',
          summary: 'Sistema operativo de IA que ordena el trabajo entre departamentos, mantiene cada proyecto bajo control y funciona ligero en local.',
          cover: 'assets/images/software/prometeos-organigrama.png',
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
          title: 'mediXI',
          meta: 'BETA PRIVADA · BARCELONA',
          summary: 'Mapa urbano privado para descubrir espacios con criterio y conectar con personas afines en el mundo real.',
          cover: 'assets/images/software/medixi-shot-01.png',
          coverPosition: 'center 72%',
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
          title: 'Matinium',
          meta: 'RITUAL DIARIO · BIENESTAR',
          summary: 'Empieza el día con claridad y ciérralo en silencio — una app serena de hábitos diarios sin rachas ni ruido.',
          cover: 'assets/images/software/matinium-cover.png',
          coverPosition: 'center center',
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
          title: 'Menir',
          meta: 'ENFOQUE · BLOQUEADOR DE APPS',
          summary: 'Frena el scroll automático al instante — resuelve tres micro-retos mentales antes de abrir tus apps más adictivas.',
          cover: 'assets/images/software/menir-01-dashboard.png',
          coverPosition: 'center 58%',
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
          title: 'Producty',
          meta: 'ENFOQUE PROFUNDO · EJECUCIÓN',
          summary: 'Convierte grandes objetivos en 6 fases ejecutables, bloquea distracciones en modo enfoque y mide cada minuto real.',
          cover: 'assets/images/software/producty-01-bunker.png',
          coverPosition: 'center 88%',
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
