import React, { createContext, useContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const translations = {
  EN: {
    // Header & Nav
    nav_services: 'Services',
    nav_portfolio: 'Portfolio',
    nav_process: 'Process',
    nav_nexus_new: 'NEW',
    book_a_call: 'Book a Call',
    nexus_by: 'by Performa BI',
    nexus_context: 'Context',
    nexus_lens: 'The Lens',
    nexus_ai: 'AI Agent',
    nexus_answers: 'Answers',

    // Hero
    hero_pill: 'Executive Data Intelligence & Business Analytics',
    hero_title_1: 'Running a business is hard.',
    hero_title_2: 'Flying blind makes it dangerous.',
    hero_sub: 'Your company is generating revenue, but your truth is buried under scattered spreadsheets, delayed exports, and conflicting department numbers. We turn chaotic operations into a clear, unified compass for decisive leadership.',
    hero_cta: 'Book an Executive Discovery Call',
    hero_explore: 'Explore the 4-Tier Solutions',
    stat_truth_title: 'Unified Truth',
    stat_truth_desc: 'No more competing spreadsheets',
    stat_velocity_title: 'Instant Velocity',
    stat_velocity_desc: 'From 5 days of prep to live clarity',
    stat_margin_title: 'Protected Margin',
    stat_margin_desc: 'Unmask invisible operational leaks',

    // Pain Section
    pains_tag: 'The Diagnosis',
    pains_title: 'The hidden cost of gut-feel management.',
    pains_sub: 'Growing companies do not fail because they lack ambition. They stall because their operational vision gets blurred by disconnected systems.',
    pain1_tag: 'Blind Spot 01',
    pain1_title: 'Spreadsheet Paralysis',
    pain1_quote: '"Which version of the sales report are we looking at?"',
    pain1_body: 'Executive meetings degenerate into debates over who has the correct Excel tab. By the time numbers are manually consolidated, they are already outdated history.',
    pain1_cost: 'Lost leadership hours every week',
    pain2_tag: 'Blind Spot 02',
    pain2_title: 'The Cash vs Profit Trap',
    pain2_quote: '"We are making record sales on paper, but cash is tight."',
    pain2_body: 'A healthy top-line hides silent cash traps. Finished orders sitting in dispatch, uncollected receivables, and delayed billing quietly choke company liquidity.',
    pain2_cost: 'Unnecessary short-term credit & anxiety',
    pain3_tag: 'Blind Spot 03',
    pain3_title: 'Eroding Margin Disguises',
    pain3_quote: '"Our revenue increased by 20%, but our profits stayed flat."',
    pain3_body: 'Aggregated reports mask that high-volume wholesale discounts and specific unprofitable channels are cannibalizing the healthy margins of your premium clients.',
    pain3_cost: 'Unchecked profit erosion at scale',

    // Solutions Carousel
    solutions_tag: 'The Complete 4-Tier Solutions Spectrum',
    solutions_title: 'From diagnostic to autonomous clarity.',
    solutions_sub: 'Scroll down to navigate across our progressive maturity tiers. Each solution builds directly on the previous.',
    scroll_cue: 'Vertical mouse scroll slides the carousel horizontally',
    scroll_prog: 'Scroll Progress',

    // Tier 1
    t1_stage: 'Tier 01 · Diagnostic',
    t1_title: 'BI Health Check',
    t1_focus: 'Assess Vulnerabilities & Benchmark Maturity',
    t1_badge: '5-Minute Audit',
    t1_pain: 'Flying blind without knowing whether your reporting structure is holding back revenue or hiding cash-flow leakage.',
    t1_goal: 'Evaluate your data maturity across 4 core dimensions (Infrastructure, Analytics, Governance, Executive Adoption) and receive a personalized 1–100 benchmark score.',
    t1_d1: 'Instant executive PDF Diagnostic Report',
    t1_d2: 'Identification of hidden revenue & inventory leaks',
    t1_d3: 'Tailored 90-day actionable roadmap',
    t1_cta: 'Start Free BI Health Check',

    // Tier 2
    t2_stage: 'Tier 02 · Centralization',
    t2_title: 'The Growth Engine',
    t2_focus: 'Unified Automated Operations Hub',
    t2_badge: 'Flagship Core Hub',
    t2_pain: 'Wasting 15+ hours weekly consolidating scattered spreadsheets across CRM, Accounting, ERP, and logistics into disjointed PDFs.',
    t2_goal: 'Build an automated Power BI operations hub connecting your company’s disparate databases into a synchronized single source of truth.',
    t2_d1: 'Live pipeline & revenue pacing dashboards',
    t2_d2: 'Cash position & 90-day working capital forecast',
    t2_d3: 'Automatic data refreshes with zero manual exports',
    t2_cta: 'Build Your Growth Engine',

    // Tier 3
    t3_stage: 'Tier 03 · Executive Guidance',
    t3_title: 'The Strategic BI Partner',
    t3_focus: 'Continuous Decision Command Retainer',
    t3_badge: 'Strategic Advisory',
    t3_pain: 'Having dashboards built but lacking the internal data engineering bandwidth or strategic analysts to interpret signals and hold leads accountable.',
    t3_goal: 'Embed senior data intelligence advisors directly into your quarterly planning, monthly executive reviews, and departmental KPIs.',
    t3_d1: 'Monthly executive board briefs & margin defense audits',
    t3_d2: 'Proactive threshold anomaly alerts',
    t3_d3: 'Ongoing pipeline optimization & team leadership coaching',
    t3_cta: 'Partner With Us',

    // Tier 4
    t4_stage: 'Tier 04 · Autonomous AI',
    t4_title: 'NEXUS Autonomous Intelligence',
    t4_focus: 'On-Premise Air-Gapped Executive Co-Pilot',
    t4_badge: 'Proprietary AI Tier',
    t4_pain: 'Directors spending weekends reading raw reports; sensitive company numbers cannot be fed into public cloud LLMs due to secrecy risks.',
    t4_goal: 'Deploy an on-premise autonomous AI agent that reads your ERP read-only database, mathematically verifies anomalies, and drafts your Monday board narrative.',
    t4_d1: '100% on-premise execution (zero cloud data exposure)',
    t4_d2: 'Deterministic math validation (zero AI hallucination)',
    t4_d3: 'Named departmental ownership assigned to every variance',
    t4_cta: 'Explore Nexus Architecture',

    // Common Card labels
    lbl_friction: 'Friction Addressed',
    lbl_goal: 'Operational Goal',
    lbl_deliverables: 'Key Deliverables',

    // Portfolio
    port_tag: 'Proven Business Impact',
    port_title: 'We deliver business outcomes, not vanity dashboards.',
    port_sub: 'Here is what happens when business data transforms from a source of confusion into a strategic asset.',
    cs1_title: 'The Multi-Million Pipeline Visibility Gap',
    cs1_client: 'UK Engineering & Technical Consultancy',
    cs1_challenge: 'Operating across international branches with fragmented CRM exports, directors lacked confidence in annual revenue projections, leading to hesitations in hiring and capital investment.',
    cs1_solution: 'Engineered an automated Sales Pipeline Hub in Power BI consolidating global deals, probability weighting, consultant performance, and real-time revenue pacing.',
    cs1_result: 'Unlocked 100% forecasting visibility and eliminated financial stress in executive board reviews.',
    cs2_title: 'The Profitable Yet Cash-Starved Crisis',
    cs2_client: 'European Cross-Border Service Company',
    cs2_challenge: 'The business posted strong net profits on paper but repeatedly encountered severe cash flow crunches while juggling transactions across GBP and EUR currencies.',
    cs2_solution: 'Built a live Cash Position & Working Capital Dashboard uniting bank feeds, supplier payment schedules, and currency balances into an instant liquidity indicator.',
    cs2_result: 'Eliminated cash anxiety and created proactive 90-day liquidity buffer management.',
    lbl_friction_cs: 'The Friction',
    lbl_solution_cs: 'The Solution',
    lbl_outcome_cs: 'The Realized Outcome',

    // Process
    proc_tag: 'How We Work',
    proc_title: 'Our 3-step path to clarity.',
    proc_sub: 'No endless IT consultant cycles. A transparent, outcome-focused methodology built for fast return on investment.',
    step1_title: 'Discovery & Audit',
    step1_desc: 'A focused 15-minute diagnostic to map your current data sources, operational bottlenecks, and reporting goals.',
    step2_title: 'Strategy & Pipeline Build',
    step2_desc: 'We connect your systems, clean and model your operational data, and engineer automated, high-impact executive dashboards.',
    step3_title: 'Deploy & Empower',
    step3_desc: 'We roll out your single source of truth, train your team leads, and establish proactive decision-making routines.',

    // Contact
    cta_tag: 'Take the First Step',
    cta_title: 'Stop second-guessing your business numbers.',
    cta_sub: 'Book a 15-minute introductory call. We will review your current reporting bottleneck and show you how live data intelligence restores control over your growth.',
    cta_btn: 'Schedule Your Free Discovery Call',

    // Footer
    footer_rights: 'Performa BI. All Rights Reserved.',
    footer_tagline: 'Empowering Entrepreneurs with Executive Data Intelligence.',
  },

  ES: {
    // Header & Nav
    nav_services: 'Servicios',
    nav_portfolio: 'Portafolio',
    nav_process: 'Proceso',
    nav_nexus_new: 'NUEVO',
    book_a_call: 'Agendar Llamada',
    nexus_by: 'por Performa BI',
    nexus_context: 'Contexto',
    nexus_lens: 'La Lente',
    nexus_ai: 'Agente IA',
    nexus_answers: 'Respuestas',

    // Hero
    hero_pill: 'Inteligencia de Datos Ejecutiva y Analítica de Negocio',
    hero_title_1: 'Dirigir una empresa es difícil.',
    hero_title_2: 'Gestionar a ciegas lo hace peligroso.',
    hero_sub: 'Tu empresa genera ingresos, pero la verdad está enterrada bajo hojas de cálculo dispersas, reportes demorados y números departamentales contradictorios. Transformamos el caos operativo en una brújula clara para un liderazgo decisivo.',
    hero_cta: 'Agendar Llamada de Diagnóstico',
    hero_explore: 'Explorar Soluciones en 4 Niveles',
    stat_truth_title: 'Verdad Unificada',
    stat_truth_desc: 'Sin hojas de cálculo compitiendo',
    stat_velocity_title: 'Velocidad Inmediata',
    stat_velocity_desc: 'De 5 días de preparación a claridad en vivo',
    stat_margin_title: 'Margen Protegido',
    stat_margin_desc: 'Desenmascara fugas operativas invisibles',

    // Pain Section
    pains_tag: 'El Diagnóstico',
    pains_title: 'El costo oculto de gestionar por intuición.',
    pains_sub: 'Las empresas en crecimiento no fallan por falta de ambición. Se estancan porque su visión operativa se nubla por sistemas desconectados.',
    pain1_tag: 'Punto Ciego 01',
    pain1_title: 'Parálisis por Hojas de Cálculo',
    pain1_quote: '"¿Qué versión del informe de ventas estamos revisando?"',
    pain1_body: 'Las reuniones de directorio degeneran en debates sobre quién tiene la pestaña de Excel correcta. Cuando los números se consolidan manualmente, ya son historia pasada.',
    pain1_cost: 'Horas ejecutivas perdidas cada semana',
    pain2_tag: 'Punto Ciego 02',
    pain2_title: 'La Trampa de Caja vs Beneficio',
    pain2_quote: '"Tenemos ventas récord en papel, pero la liquidez escasea."',
    pain2_body: 'Una facturación saludable enmascara trampas silenciosas de liquidez. Pedidos terminados retenidos en expedición y cobros atrasados asfixian el flujo de caja.',
    pain2_cost: 'Crédito a corto plazo innecesario y ansiedad',
    pain3_tag: 'Punto Ciego 03',
    pain3_title: 'La Erosión Silenciosa del Margen',
    pain3_quote: '"La facturación subió un 20%, pero el beneficio neto sigue plano."',
    pain3_body: 'Los reportes agregados ocultan que los descuentos por volumen y ciertos canales no rentables canibalizan los márgenes de tus clientes prémium.',
    pain3_cost: 'Erosión de beneficios desapercibida',

    // Solutions Carousel
    solutions_tag: 'El Espectro Completo de 4 Niveles',
    solutions_title: 'Desde el diagnóstico hasta la claridad autónoma.',
    solutions_sub: 'Haz scroll hacia abajo para navegar por nuestros niveles progresivos de madurez analítica.',
    scroll_cue: 'El scroll vertical desplaza el carrusel horizontalmente',
    scroll_prog: 'Progreso de Scroll',

    // Tier 1
    t1_stage: 'Nivel 01 · Diagnóstico',
    t1_title: 'BI Health Check',
    t1_focus: 'Evalúa Vulnerabilidades y Mide tu Madurez',
    t1_badge: 'Auditoría en 5 Minutos',
    t1_pain: 'Operar a ciegas sin saber si tu estructura analítica está frenando ventas o escondiendo fugas de caja.',
    t1_goal: 'Evalúa tu madurez de datos en 4 dimensiones clave (Infraestructura, Analítica, Gobernanza, Adopción) con un puntaje de 1 a 100.',
    t1_d1: 'Informe diagnóstico ejecutivo instantáneo en PDF',
    t1_d2: 'Identificación de fugas en inventario y facturación',
    t1_d3: 'Plan de acción personalizado a 90 días',
    t1_cta: 'Comenzar BI Health Check Gratis',

    // Tier 2
    t2_stage: 'Nivel 02 · Centralización',
    t2_title: 'The Growth Engine',
    t2_focus: 'Hub Central Operativo Automatizado',
    t2_badge: 'Hub Insignia',
    t2_pain: 'Perder más de 15 horas a la semana uniendo datos dispersos de CRM, Contabilidad, ERP y logística en PDFs manuales.',
    t2_goal: 'Construimos un hub automatizado en Power BI que conecta todas las bases de datos de tu empresa en una única fuente de verdad sincronizada.',
    t2_d1: 'Dashboards en tiempo real de ventas y ritmo de ingresos',
    t2_d2: 'Posición de caja y proyección de capital de trabajo a 90 días',
    t2_d3: 'Actualizaciones automáticas sin exportaciones manuales',
    t2_cta: 'Construir tu Growth Engine',

    // Tier 3
    t3_stage: 'Nivel 03 · Acompañamiento Estratégico',
    t3_title: 'The Strategic BI Partner',
    t3_focus: 'Centro de Mando y Asesoría Continua',
    t3_badge: 'Asesoría Estratégica',
    t3_pain: 'Tener dashboards instalados pero carecer del equipo analítico interno para interpretar señales y exigir cuentas a los líderes de área.',
    t3_goal: 'Integramos consultores sénior de inteligencia de datos en tu planificación trimestral, revisiones de directorio y KPIs operativos.',
    t3_d1: 'Informes mensuales ejecutivos y auditoría de márgenes',
    t3_d2: 'Alertas proactivas de desvíos y anomalías operativas',
    t3_d3: 'Optimización de pipelines y formación continua de líderes',
    t3_cta: 'Asociarse con Nosotros',

    // Tier 4
    t4_stage: 'Nivel 04 · IA Autónoma',
    t4_title: 'NEXUS Inteligencia Autónoma',
    t4_focus: 'Copiloto Ejecutivo Local y Aislado',
    t4_badge: 'Nivel de IA Propietaria',
    t4_pain: 'Directores pasando fines de semana descifrando informes; datos confidenciales que no pueden subirse a IAs públicas en la nube.',
    t4_goal: 'Despliega un agente de IA on-premise que lee las bases de datos de tu ERP en solo lectura, audita anomalías matemáticas y redacta el informe semanal para el directorio.',
    t4_d1: '100% ejecución local (cero exposición de datos a la nube)',
    t4_d2: 'Validación matemática determinista (cero alucinación de IA)',
    t4_d3: 'Responsable departamental asignado para cada desvío',
    t4_cta: 'Explorar Arquitectura Nexus',

    // Common Card labels
    lbl_friction: 'Fricción Resuelta',
    lbl_goal: 'Objetivo Operativo',
    lbl_deliverables: 'Entregables Clave',

    // Portfolio
    port_tag: 'Impacto Comercial Probado',
    port_title: 'Entregamos resultados de negocio, no simples gráficos.',
    port_sub: 'Esto ocurre cuando los datos de la empresa pasan de ser motivo de confusión a convertirse en un activo estratégico.',
    cs1_title: 'La Brecha de Visibilidad en el Pipeline Multimillonario',
    cs1_client: 'Consultora de Ingeniería y Técnica (Reino Unido)',
    cs1_challenge: 'Con filiales internacionales y CRM fragmentado, los directores dudaban de sus proyecciones de ingresos anuales, frenando contrataciones e inversiones.',
    cs1_solution: 'Diseñamos un Hub de Ventas en Power BI consolidando negocios globales, probabilidades, desempeño de consultores y ritmo de facturación.',
    cs1_result: '100% de visibilidad en proyecciones y eliminación del estrés en reuniones de directorio.',
    cs2_title: 'La Crisis de la Empresa Rentable pero sin Liquidez',
    cs2_client: 'Empresa Europea de Servicios Transfronterizos',
    cs2_challenge: 'La compañía reportaba sólidos beneficios en balance, pero sufría continuas tensiones de caja al operar cobros y pagos simultáneos en GBP y EUR.',
    cs2_solution: 'Creamos un Panel de Posición de Caja integrando bancos, vencimientos a proveedores y saldos de divisas en un indicador de liquidez en tiempo real.',
    cs2_result: 'Eliminación de la ansiedad financiera y gestión proactiva de reservas a 90 días.',
    lbl_friction_cs: 'El Desafío',
    lbl_solution_cs: 'La Solución',
    lbl_outcome_cs: 'El Resultado Obtenido',

    // Process
    proc_tag: 'Cómo Trabajamos',
    proc_title: 'Nuestro camino de 3 pasos hacia la claridad.',
    proc_sub: 'Sin ciclos interminables de consultoría informática. Una metodología transparente enfocada en un retorno de inversión rápido.',
    step1_title: 'Diagnóstico y Auditoría',
    step1_desc: 'Una sesión focalizada de 15 minutos para mapear fuentes de datos, cuellos de botella y metas de reporting.',
    step2_title: 'Estrategia y Construcción de Pipelines',
    step2_desc: 'Conectamos tus sistemas, limpiamos y modelamos los datos operativos, y creamos dashboards ejecutivos automatizados.',
    step3_title: 'Despliegue y Empoderamiento',
    step3_desc: 'Implementamos tu única fuente de verdad, capacitamos a tus líderes de equipo y establecemos rutinas de decisión proactivas.',

    // Contact
    cta_tag: 'Da el Primer Paso',
    cta_title: 'Deja de dudar de los números de tu empresa.',
    cta_sub: 'Agenda una llamada de 15 minutos. Analizaremos tus cuellos de botella actuales y te mostraremos cómo la inteligencia de datos en vivo devuelve el control de tu crecimiento.',
    cta_btn: 'Agendar Llamada de Diagnóstico Gratuita',

    // Footer
    footer_rights: 'Performa BI. Todos los derechos reservados.',
    footer_tagline: 'Empoderando a líderes y empresarios con Inteligencia de Datos Ejecutiva.',
  },

  PT: {
    // Header & Nav
    nav_services: 'Serviços',
    nav_portfolio: 'Portfólio',
    nav_process: 'Processo',
    nav_nexus_new: 'NOVO',
    book_a_call: 'Agendar Reunião',
    nexus_by: 'por Performa BI',
    nexus_context: 'Contexto',
    nexus_lens: 'A Lente',
    nexus_ai: 'Agente IA',
    nexus_answers: 'Respostas',

    // Hero
    hero_pill: 'Inteligência de Dados Executiva & Business Analytics',
    hero_title_1: 'Gerir uma empresa é desafiador.',
    hero_title_2: 'Caminhar no escuro torna tudo perigoso.',
    hero_sub: 'Sua empresa gera receita, mas a verdade está soterrada sob planilhas dispersas, relatórios atrasados e números departamentais conflitantes. Transformamos o caos operacional em uma bússola nítida para tomadas de decisão ágeis.',
    hero_cta: 'Agendar Diagnóstico Executivo',
    hero_explore: 'Conhecer as Soluções em 4 Níveis',
    stat_truth_title: 'Verdade Unificada',
    stat_truth_desc: 'Fim do debate sobre qual planilha está certa',
    stat_velocity_title: 'Velocidade Imediata',
    stat_velocity_desc: 'De 5 dias de compilação a clareza em tempo real',
    stat_margin_title: 'Margem Protegida',
    stat_margin_desc: 'Desmascare perdas invisíveis na esteira',

    // Pain Section
    pains_tag: 'O Diagnóstico',
    pains_title: 'O custo oculto da gestão intuitiva.',
    pains_sub: 'Empresas em expansão não desaceleram por falta de ambição. Elas perdem tração porque a visão da diretoria fica embaçada por sistemas desconectados.',
    pain1_tag: 'Ponto Cego 01',
    pain1_title: 'Paralisia por Planilhas',
    pain1_quote: '"Qual versão do relatório de faturamento estamos analisando?"',
    pain1_body: 'Reuniões de liderança viram debates sobre quem tem o Excel atualizado. No momento em que os dados são compilados manualmente, já viraram passado.',
    pain1_cost: 'Horas preciosas de liderança desperdiçadas toda semana',
    pain2_tag: 'Ponto Cego 02',
    pain2_title: 'A Armadilha de Caixa vs Lucro',
    pain2_quote: '"Temos vendas recordes no papel, mas o caixa está apertado."',
    pain2_body: 'Um faturamento alto mascara gargalos silenciosos. Mercadorias retidas na expedição e faturamentos atrasados sufocam a liquidez da empresa.',
    pain2_cost: 'Crédito emergencial desnecessário e estresse financeiro',
    pain3_tag: 'Ponto Cego 03',
    pain3_title: 'Erosão Silenciosa de Margem',
    pain3_quote: '"A receita subiu 20%, mas a margem líquida continuou estagnada."',
    pain3_body: 'Relatórios agregados escondem que descontos pesados de atacado e canais de baixo retorno estão corroendo a margem dos clientes mais rentáveis.',
    pain3_cost: 'Erosão contínua da lucratividade da operação',

    // Solutions Carousel
    solutions_tag: 'O Espectro Completo de 4 Níveis',
    solutions_title: 'Do diagnóstico à clareza autônoma.',
    solutions_sub: 'Role para baixo para navegar pelos nossos níveis progressivos de maturidade analítica.',
    scroll_cue: 'O scroll vertical do mouse move o carrossel horizontalmente',
    scroll_prog: 'Progresso da Navegação',

    // Tier 1
    t1_stage: 'Nível 01 · Diagnóstico',
    t1_title: 'BI Health Check',
    t1_focus: 'Mapeie Vulnerabilidades e Meça sua Maturidade',
    t1_badge: 'Diagnóstico em 5 Minutos',
    t1_pain: 'Operar sem saber se sua estrutura de relatórios está segurando o faturamento ou ocultando perdas de fluxo de caixa.',
    t1_goal: 'Avalia a maturidade de dados da sua empresa em 4 dimensões (Infraestrutura, Análise, Governança, Adoção) gerando uma nota de 1 a 100.',
    t1_d1: 'Relatório Diagnóstico Executivo instantâneo em PDF',
    t1_d2: 'Identificação de gargalos em estoque e faturamento',
    t1_d3: 'Plano de ação estruturado para os próximos 90 dias',
    t1_cta: 'Fazer BI Health Check Gratuito',

    // Tier 2
    t2_stage: 'Nível 02 · Centralização',
    t2_title: 'The Growth Engine',
    t2_focus: 'Hub Operacional Automatizado',
    t2_badge: 'Hub Principal',
    t2_pain: 'Gastar mais de 15 horas por semana compilando dados dispersos de CRM, ERP, Financeiro e Logística em PDFs manuais.',
    t2_goal: 'Construímos um hub em Power BI que unifica todas as fontes de dados em uma única fonte da verdade sincronizada.',
    t2_d1: 'Dashboards em tempo real de vendas e ritmo de receita',
    t2_d2: 'Posição de caixa e projeção de capital de giro em 90 dias',
    t2_d3: 'Atualizações automáticas sem necessidade de extração manual',
    t2_cta: 'Construir seu Hub Operacional',

    // Tier 3
    t3_stage: 'Nível 03 · Parceria Estratégica',
    t3_title: 'The Strategic BI Partner',
    t3_focus: 'Centro de Comando e Aconselhamento Contínuo',
    t3_badge: 'Assessoria Estratégica',
    t3_pain: 'Ter relatórios construídos mas não dispor de inteligência interna para interpretar os desvios e cobrar os responsáveis operacionais.',
    t3_goal: 'Consultores seniores de BI integrados às decisões de diretoria, análises de margem e acompanhamento de metas departamentais.',
    t3_d1: 'Briefings mensais de diretoria e auditoria de margens',
    t3_d2: 'Alertas proativos sobre riscos de desvios operacionais',
    t3_d3: 'Otimização contínua de pipelines e capacitação de líderes',
    t3_cta: 'Tornar-se Parceiro',

    // Tier 4
    t4_stage: 'Nível 04 · IA Autônoma',
    t4_title: 'NEXUS Inteligência Autônoma',
    t4_focus: 'Copiloto Executivo On-Premise',
    t4_badge: 'Nível de IA Proprietária',
    t4_pain: 'Diretores perdendo finais de semana compilando dados; números confidenciais que não podem subir para IAs públicas na nuvem.',
    t4_goal: 'Implementa um agente de IA local que lê os bancos do seu ERP internamente, valida anomalias matemáticas e redige o resumo executivo da semana.',
    t4_d1: 'Execução 100% on-premise (segredo industrial preservado)',
    t4_d2: 'Auditoria algorítmica rigorosa (zero alucinações matemáticas)',
    t4_d3: 'Líder responsável atribuído para cada desvio operacional',
    t4_cta: 'Conhecer a Arquitetura Nexus',

    // Common Card labels
    lbl_friction: 'Fricção Solucionada',
    lbl_goal: 'Objetivo Operacional',
    lbl_deliverables: 'Entregáveis Principais',

    // Portfolio
    port_tag: 'Impacto Comercial Comprovado',
    port_title: 'Entregamos resultados de negócio, não dashboards estáticos.',
    port_sub: 'O que acontece quando os dados deixam de ser motivo de confusão e passam a orientar o crescimento da empresa.',
    cs1_title: 'A Falta de Visibilidade em Pipeline Multimilionário',
    cs1_client: 'Consultoria de Engenharia & Técnica (Reino Unido)',
    cs1_challenge: 'Com divisões internacionais e CRM disperso, diretores hesitavam nas metas anuais, travando contratações e investimentos.',
    cs1_solution: 'Criamos um Hub de Vendas em Power BI unificando negócios globais, probabilidade de fechamento, desempenho e ritmo de receita.',
    cs1_result: 'Previsibilidade de receita restaurada e eliminação do estresse em reuniões de conselho.',
    cs2_title: 'A Crise da Empresa Rentável mas Sem Caixa',
    cs2_client: 'Empresa Europeia de Serviços Corporativos',
    cs2_challenge: 'A empresa apresentava lucro contábil consistente, mas sofria com surpresas constantes no fluxo de caixa operando simultaneamente em GBP e EUR.',
    cs2_solution: 'Painel de Posição de Caixa integrando extratos bancários, previsão de despesas e saldos cambiais em um indicador em tempo real.',
    cs2_result: 'Eliminação da ansiedade financeira e controle ativo das reservas de liquidez a 90 dias.',
    lbl_friction_cs: 'O Gargalo',
    lbl_solution_cs: 'A Solução',
    lbl_outcome_cs: 'O Resultado Prático',

    // Process
    proc_tag: 'Como Trabalhamos',
    proc_title: 'Nosso método em 3 passos para a clareza.',
    proc_sub: 'Sem projetos lentos de TI. Uma metodologia ágil e transparente desenhada para retorno rápido sobre o investimento.',
    step1_title: 'Diagnóstico & Alinhamento',
    step1_desc: 'Uma chamada de 15 minutos para mapear sistemas atuais, gargalos de informação e prioridades estratégicas.',
    step2_title: 'Estratégia & Construção dos Pipelines',
    step2_desc: 'Conectamos suas fontes, tratamos os dados operacionais e construímos painéis executivos automatizados.',
    step3_title: 'Entrega & Adoção pela Liderança',
    step3_desc: 'Entregamos sua central de comando, treinamos seus gestores e estabelecemos rotinas de decisão baseadas em evidências.',

    // Contact
    cta_tag: 'Dê o Primeiro Passo',
    cta_title: 'Pare de ter dúvidas sobre os números da sua empresa.',
    cta_sub: 'Agende uma conversa de 15 minutos sem compromisso. Vamos avaliar seu principal gargalo e mostrar como a inteligência de dados restaura o controle do negócio.',
    cta_btn: 'Agendar Diagnóstico Gratuito',

    // Footer
    footer_rights: 'Performa BI. Todos os direitos reservados.',
    footer_tagline: 'Capacitando empresários e executivos com Inteligência de Dados.',
  },
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('performa_lang') || 'EN';
  });

  const changeLanguage = (newLang) => {
    if (['EN', 'ES', 'PT'].includes(newLang)) {
      setLang(newLang);
      localStorage.setItem('performa_lang', newLang);
    }
  };

  const t = (key) => {
    return translations[lang]?.[key] || translations['EN']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
