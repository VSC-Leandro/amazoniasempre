import { CountItem, InterviewItem, NetworkData, DonorItem, PubItem, PctItem, SectorRow, CountryRow, ConsolidatedInstitution } from "../types";

export const ORG_COUNT: CountItem[] = [
  {
    "name": "BID",
    "count": 36
  },
  {
    "name": "Museu Goeldi",
    "count": 7
  },
  {
    "name": "Rede Bioamazonia",
    "count": 5
  },
  {
    "name": "Universidade de Sao Paulo (USP)",
    "count": 5
  },
  {
    "name": "Amazon Investor Coalition (AIC)",
    "count": 3
  },
  {
    "name": "Conservation International (CI)",
    "count": 3
  },
  {
    "name": "Swiss Agency for Development and Cooperation (SDC)",
    "count": 3
  },
  {
    "name": "Asociacion Interetnica de Desarrollo de la Selva Peruana (AIDESEP)",
    "count": 2
  },
  {
    "name": "Banco Mundial  (WBG)",
    "count": 2
  },
  {
    "name": "Conselho Nacional das Populacoes Extrativistas (CNS)",
    "count": 2
  },
  {
    "name": "Coordenacao das Organizacoes Indigenas da Amazonia Brasileira (COIAB)",
    "count": 2
  },
  {
    "name": "Coordenacao Nacional de Articulacao das Comunidades Negras Rurais Quilombolas (CONAQ)",
    "count": 2
  },
  {
    "name": "Derecho, Ambiente y Recursos Naturales (DAR)",
    "count": 2
  },
  {
    "name": "Fundacion para la Conservacion y el Desarrollo Sostenible (FCDS)",
    "count": 2
  },
  {
    "name": "Fundo Brasileiro para a Biodiversidade (FUNBIO)",
    "count": 2
  },
  {
    "name": "GT Infraestrutura e justica socioambiental (GTINFRA)",
    "count": 2
  },
  {
    "name": "Instituto Igarape",
    "count": 2
  },
  {
    "name": "Instituto Panamazonico",
    "count": 2
  },
  {
    "name": "Latimpacto",
    "count": 2
  },
  {
    "name": "Nature Finance",
    "count": 2
  },
  {
    "name": "Red de Redes Amazonicas",
    "count": 2
  },
  {
    "name": "Rede Amazonica de Informacao Socioambiental Georreferenciada (RAISG)",
    "count": 2
  },
  {
    "name": "Rede Pan-Amazonica pela Bioeconomia",
    "count": 2
  },
  {
    "name": "The Green Coalition",
    "count": 2
  },
  {
    "name": "Universidade Estadual Paulista (UNESP)",
    "count": 2
  }
];

export const INST_COUNT: CountItem[] = [
  {
    "name": "BID",
    "count": 39
  },
  {
    "name": "Museu Goeldi",
    "count": 14
  },
  {
    "name": "Universidade Federal do Para UFPA",
    "count": 11
  },
  {
    "name": "Instituto Sinchi",
    "count": 9
  },
  {
    "name": "American University",
    "count": 8
  },
  {
    "name": "Organizacao do Tratado de Cooperacao Amazonica OTCA",
    "count": 8
  },
  {
    "name": "Organizacao para a Cooperacao e Desenvolvimento Economico OCDE",
    "count": 8
  },
  {
    "name": "Universidade de Sao Paulo USP",
    "count": 8
  },
  {
    "name": "Coordinadora de las Organizaciones Indigenas de la Cuenca Amazonica COICA",
    "count": 6
  },
  {
    "name": "Instituto Nacional de Pesquisas da Amazonia INPA",
    "count": 6
  },
  {
    "name": "Ministerio do Meio Ambiente e MudanCas Climaticas Brasil MMA",
    "count": 6
  },
  {
    "name": "Impact Hub Manaus",
    "count": 5
  },
  {
    "name": "Instituto Igarape",
    "count": 5
  },
  {
    "name": "Universidade Estadual Paulista UNESP",
    "count": 5
  },
  {
    "name": "Wyss Academy for Nature University of Bern",
    "count": 5
  },
  {
    "name": "Alianca pela Restauracao na Amazonia",
    "count": 4
  },
  {
    "name": "Amazon Investor Coalition AIC",
    "count": 4
  },
  {
    "name": "Associacao Sociocultural Yanawana ASCY",
    "count": 4
  },
  {
    "name": "BNDES",
    "count": 4
  },
  {
    "name": "Central Ashaninka del Rio Ene CARE",
    "count": 4
  }
];

export const PART_COUNT: CountItem[] = [
  {
    "name": "Ellen Acioli (BID)",
    "count": 4
  },
  {
    "name": "Fany Kuiru Castro (COICA)",
    "count": 4
  },
  {
    "name": "Diego Inclan (INABIO Ecuador)",
    "count": 3
  },
  {
    "name": "Mariana Sarmiento (Terrasos)",
    "count": 3
  },
  {
    "name": "Marylaure Crettaz (Swiss Agency for Development and Cooperation SDC)",
    "count": 3
  },
  {
    "name": "Veronica Tejerina (BID)",
    "count": 3
  },
  {
    "name": "Alberto Akama (Museu Goeldi)",
    "count": 2
  },
  {
    "name": "Ana Carolina Vieira (AIC)",
    "count": 2
  },
  {
    "name": "Arnaldo Carneiro (Organizacao do Tratado de Cooperacao Amazonica OTCA)",
    "count": 2
  },
  {
    "name": "Beatriz Pires (Sitawi Financas do Bem)",
    "count": 2
  },
  {
    "name": "Camille Bemerguy (SEMAS-PA)",
    "count": 2
  },
  {
    "name": "Carina Pimenta (Secretaria Nacional de Bioeconomia)",
    "count": 2
  },
  {
    "name": "Carmen Rosa Garcia (Instituto de Pesquisa da Amazonia Peruana IIAP)",
    "count": 2
  },
  {
    "name": "Cecilia Guerra (Banco CAF)",
    "count": 2
  },
  {
    "name": "Colleen Scanlan Lyons (GCFtf)",
    "count": 2
  },
  {
    "name": "Constanza Montt (C-Minds)",
    "count": 2
  },
  {
    "name": "Eduardo Neves (USP)",
    "count": 2
  },
  {
    "name": "Gregory Watson (BID)",
    "count": 2
  },
  {
    "name": "Hanspeter Mock (Swiss Embassy)",
    "count": 2
  },
  {
    "name": "Joao Valsecchi (Instituto Mamiraua)",
    "count": 2
  }
];

export const INTERVIEWS: InterviewItem[] = [
  {
    "pillar": "Amazon cities and resilient infrastructure",
    "institution": "Rede Internacional de Cidades para a Vida na Amazonia (ORG)",
    "event": "Cidades para a Vida na Amazonia",
    "category": "Civil Society Organization / Non-profit",
    "country": "International; Latin America"
  },
  {
    "pillar": "Amazon cities and resilient infrastructure",
    "institution": "Ministerio de Integracao e Desenvolvimento Regional (MIDR)",
    "event": "Segurança hídrica e cooperação para resiliência climática na Amazônia",
    "category": "Government",
    "country": "Brazil"
  },
  {
    "pillar": "Amazon cities and resilient infrastructure",
    "institution": "Instituto Sinchi",
    "event": "Cidades na Amazônia: pessoas e natureza em harmonia",
    "category": "Science, Technology and Innovation",
    "country": "Colombia"
  },
  {
    "pillar": "Amazon cities and resilient infrastructure",
    "institution": "Fundacion para la Conservacion y el Desarrollo Sostenible FCDS",
    "event": "Um olhar 360 sobre a infraestrutura na Amazonia",
    "category": "Civil Society Organization / Non-profit",
    "country": "Colombia"
  },
  {
    "pillar": "Amazon cities and resilient infrastructure",
    "institution": "EcoCiencia Foundation",
    "event": "Um olhar 360 sobre a infraestrutura na Amazonia",
    "category": "Civil Society Organization / Non-profit",
    "country": "Ecuador"
  },
  {
    "pillar": "Amazon cities and resilient infrastructure",
    "institution": "Fundo Financeiro para Desenvolvimento da Bacia do Prata (FONPLATA)",
    "event": "Construindo cidades amazonicas resilientes - Parceria em acao",
    "category": "Multilateral",
    "country": "Bolivia"
  },
  {
    "pillar": "bioeconomy",
    "institution": "Associacao Sociocultural Yawanawa (ASCY) (ORG)",
    "event": "Fazendo com que os mercados de biodiversidade funcionem para os povos indigenas",
    "category": "Civil society Organization; non-profit",
    "country": "Brazil"
  },
  {
    "pillar": "bioeconomy",
    "institution": "Foundation for Forest Management and Production Control",
    "event": "Suriname 3.0  Roteiro estrategico para desenvolvimento territorial",
    "category": "Government",
    "country": "Suriname"
  },
  {
    "pillar": "bioeconomy",
    "institution": "Natura",
    "event": "Participação de jovens na cadeia da sociobiodiversidade",
    "category": "Private Sector",
    "country": "Brazil"
  },
  {
    "pillar": "bioeconomy",
    "institution": "Organizacao do Tratado de Cooperacao Amazonica OTCA",
    "event": "Territórios para a resiliência: conectando: conectando clima, florestas, riscos e economias na Amazônia",
    "category": "Multilateral",
    "country": "International"
  },
  {
    "pillar": "bioeconomy",
    "institution": "Instituto de Pesquisa da Amazonia Peruana IIAP",
    "event": "Bioeconomia amazônica potencializada pela ciência",
    "category": "Science, Technology and Innovation",
    "country": "Peru"
  },
  {
    "pillar": "bioeconomy",
    "institution": "Coordenacao Nacional de Articulacao das Comunidades Negras Rurais Quilombolas (CONAQ)",
    "event": "Bioeconomy em comunidades quilombolas e tradicionais",
    "category": "Civil Society Organization / Non-profit",
    "country": "Brazil"
  },
  {
    "pillar": "Financial innovation and inclusion",
    "institution": "Coordenacao das Organizacoes Indigenas da Amazonia Brasileira (COIAB) (ORG)",
    "event": "Fundos comunitários e o acesso ao financiamento direto",
    "category": "Civil Society Organization / Non-profit",
    "country": "Brazil"
  },
  {
    "pillar": "Financial innovation and inclusion",
    "institution": "Consejo Indigena del Pueblo Tacana CIPTA",
    "event": "Soluções sustentáveis a partir da Amazônia andina: bioeconomia e incentivos climáticos",
    "category": "Government",
    "country": "Bolivia"
  },
  {
    "pillar": "Financial innovation and inclusion",
    "institution": "Universidade Federal do Amazonas UFAM",
    "event": "Comunidades e diversidades amazônicas: universidade, projetos, financiamento e ação",
    "category": "Science, Technology and Innovation",
    "country": "Brazil"
  },
  {
    "pillar": "Financial innovation and inclusion",
    "institution": "Terrasos",
    "event": "Comunidade de práticas: créditos de biodiversidade que beneficiam as pessoas e o planeta",
    "category": "Private Sector",
    "country": "Colombia"
  },
  {
    "pillar": "Financial innovation and inclusion",
    "institution": "LACLIMA",
    "event": "Justica Climatica e Integridade na Amazonia engajamento do setor privado",
    "category": "Civil Society Organization / Non-profit",
    "country": "Regional; Latin America"
  },
  {
    "pillar": "Financial innovation and inclusion",
    "institution": "Nature Finance",
    "event": "Quais são os fatores de sucesso para instrumentos financeiros e bioeconomia",
    "category": "Civil Society Organization / Non-profit",
    "country": "Switzerland"
  },
  {
    "pillar": "Other emerging themes",
    "institution": "Fundacion Amigos de la Naturaleza (FAN) (ORG)",
    "event": "Um olhar novo para monitorar as ameaças na Amazônia",
    "category": "Civil Society Organization / Non-profit",
    "country": "Bolivia"
  },
  {
    "pillar": "Other emerging themes",
    "institution": "Inabio Ecuador",
    "event": "Caminhos para a ciência pan-amazônica",
    "category": "Science, Technology and innoativon",
    "country": "Ecuador"
  },
  {
    "pillar": "Other emerging themes",
    "institution": "Organizacao do Tratado de Cooperacao Amazonica OTCA",
    "event": "Ação coletiva para a prevenção de incêndios florestais",
    "category": "multilateral",
    "country": "International"
  },
  {
    "pillar": "Other emerging themes",
    "institution": "Organizacion Regional de Pueblos Indigenas del Oriente (ORPIO)",
    "event": "Iniciativas indigenas para monitoramento e vigilancia territorial",
    "category": "Civil Society Organization / Non-profit",
    "country": "Peru"
  },
  {
    "pillar": "Other emerging themes",
    "institution": "Ministry of Oil  Gas and the Environment Suriname MINOGE",
    "event": "Suriname 3.0: um roteiro estratégico para o desenvolvimento territorial e econômico",
    "category": "Government",
    "country": "Suriname"
  },
  {
    "pillar": "Other emerging themes",
    "institution": "Wildlife Works",
    "event": "Fazendo com que os mercados de biodiversidade funcionem para os povos indigenas",
    "category": "Private Sector",
    "country": "USA"
  }
];

export const NETWORKS: NetworkData = {
  "finance": [
    "The Network of Ministers of Finance and Planning",
    "The Green Coalition",
    "The Amazonia Finance Network"
  ],
  "policy": [
    "Network of ministries of Education",
    "Network of ministries of Environment",
    "The Forum of Ministers and High Authorities of Housing and Urban Development (MINURVI)",
    "Alliance for sustainable, resilient and integrated transport in Amazonia",
    "The BioAmazonia Research Network",
    "The Amazon Cities Forum",
    "PanAmazonia Network for Bioeconomy"
  ],
  "strategic": [
    "World Bank",
    "Coordenação das Organizações Indígenas da Bacia Amazônica COICA",
    "Organização do Tratado de Cooperação Amazônica ACTO"
  ]
};

export const DONORS: DonorItem[] = [
  {
    "program": "Amazon Bioeconomy and Forest Management Multidonor Fund (AMDTF)",
    "partners": "Germany; Netherlands; Switzerland; United Kingdom; Italy; Spanish Agency for International Development Cooperation (AECID)"
  },
  {
    "program": "GCF Fund on Bioeconomy",
    "partners": "Banco do Brasil; Brazilian Forest Service (SFB); National Bank for Economic and Social Development (BNDES)"
  },
  {
    "program": "Clean Energy Accelerator",
    "partners": "Climate Investment Fund (CIF); Global Energy for People and Planet Partnership (GEAPP)"
  },
  {
    "program": "Resilient Landscapes, Conservation and Bioeconomy",
    "partners": "Swedish International Development Cooperation Agency (Sida); Impact Fund Denmark; Norwegian Agency for Development Cooperation (Norad)"
  },
  {
    "program": "Cross-cutting / Institutional Support",
    "partners": "Italian Ministry of Environment and Energy Security (MASE); \nSpanish Agency for International Development Cooperation (AECID); \nSwiss State Secretariat for Economic Affairs (SECO); Belgium; Japan; \nGlobal Environment Facility (GEF); UK PACT; Green Coalition; \nAgence Wallonne à l’Exportation et aux Investissements Étrangers (AWEX); \nIsraeli Ministry of Finance; \nSpain’s Ministry of Economic Affairs and Digital Transformation (MINECO); \nFrench Development Agency (AFD); \nFinland’s Ministry for Development Cooperation and Foreign Trade; \nGerman Ministry of Economic Cooperation and Development (BMZ); \nGerman Ministry of Economy and Climate Action (BMWK); \nKreditanstalt für Wiederaufbau (KfW); \nAustria’s Ministry of Finance (BMF); \nNetherlands’ Ministry of Foreign Affairs; \nJapan International Cooperation Agency (JICA); \nKorea’s Ministry of Economy and Finance (MOEF); \nNEC"
  },
  {
    "program": "Private Sector and Foundations",
    "partners": "Banco Santander; \nBBVA; Fundación Mapfre; \nONCE;\nSacyr; \nBNP Paribas; \nGirindus Investments; \nBlue Like an Orange; \nFrankfurt Airport; \nTelefónica; \nWayra; \nICEX España Exportación e Inversiones (ICEX);\nMouvement des Entreprises de France (MEDEF)"
  },
  {
    "program": "Academic Partners",
    "partners": "Seoul National University; \nSophia University; \nWaseda University; \nLondon School of Economics and Political Science; \nIE University"
  }
];

export const PUBS: PubItem[] = [
  {
    "title": "Lancamento da Publicacao Emblematica do BID - Amazonia",
    "org": "BID",
    "link": ""
  },
  {
    "title": "Lancamento do Guia de Boas Praticas para a Sociobioeconomia",
    "org": "BID",
    "link": ""
  },
  {
    "title": "Vozes que EcoAm Lancamento do Mapeamento da Bioeconomia",
    "org": "Impact Hub Manaus",
    "link": ""
  },
  {
    "title": "Lancamento do White Paper Um Roteiro do Setor Privado para uma Amazonia Sustentavel",
    "org": "BID, Instituto Igarape",
    "link": "https://www.idbinvest.org/pt/publications/private-sector-roadmap-sustainable-amazonia"
  }
];

export const PART_CAT: Record<string, number> = {
  "Civil Society Organization / Non-profit": 42.5,
  "Science, Technology and Innovation": 21.7,
  "Government": 16.6,
  "Multilateral": 12.0,
  "Private Sector": 7.2
};

export const PART_CTY: Record<string, number> = {
  "Brazil": 50.7,
  "International; USA": 8.8,
  "Colombia": 5.7,
  "Peru": 5.1,
  "International": 4.2,
  "USA": 3.8,
  "Regional; Pan-Amazon": 3.2,
  "Switzerland": 2.7,
  "United Kingdom": 1.9,
  "Ecuador": 1.9,
  "Regional; Latin America": 1.3,
  "Bolivia": 1.3,
  "Guatemala": 1.1,
  "Netherlands": 0.8,
  "Suriname": 0.8,
  "International; Switzerland": 0.6,
  "France": 0.6,
  "Germany": 0.4,
  "Venezuela": 0.4,
  "Norway": 0.4,
  "Dominican Republic": 0.2,
  "Sweden": 0.2,
  "Regional; Venezuela": 0.2,
  "Brazil; Norway": 0.2,
  "Regional; Europe": 0.2,
  "International; South Korea": 0.2,
  "Honduras": 0.2,
  "Belgium": 0.2,
  "Canada": 0.2,
  "International (UN)": 0.2,
  "International; France": 0.2,
  "Senegal": 0.2,
  "Spain": 0.2,
  "Morocco": 0.2,
  "India": 0.2,
  "Cameroon": 0.2,
  "Zambia": 0.2,
  "Regional; Andian": 0.2,
  "International; United Kingdom": 0.2,
  "International; Peru": 0.2
};

export const ORG_CAT: Record<string, number> = {
  "Civil Society Organization / Non-profit": 50.5,
  "Multilaterals": 20.9,
  "Science, Technology and Innovation": 16.5,
  "Government": 7.8,
  "Private Sector": 4.4
};

export const ORG_CTY: Record<string, number> = {
  "Brazil": 35.9,
  "International; USA": 23.8,
  "Regional; Pan-Amazon": 9.7,
  "Switzerland": 5.3,
  "Colombia": 3.4,
  "Peru": 2.9,
  "International": 2.4,
  "USA": 2.4,
  "Regional; Andian": 1.5,
  "Regional; Latin America": 1.5,
  "United Kingdom": 1.5,
  "Germany": 1.0,
  "Netherlands": 1.0,
  "Sweden": 1.0,
  "Bolivia": 0.5,
  "Brazil; France": 0.5,
  "Brazil; Norway": 0.5,
  "Ecuador": 0.5,
  "France": 0.5,
  "International (UN)": 0.5,
  "International; France": 0.5,
  "International; Indonesia": 0.5,
  "International; Mexico": 0.5,
  "International; Switzerland": 0.5,
  "International; United Kingdom": 0.5,
  "Latin America; Panama": 0.5,
  "Peru; United Kingdom": 0.5,
  "Regional; Bolivia": 0.5
};

export const AF_PILLARS: PctItem[] = [
  {
    "name": "Bioeconomy",
    "pct": 35.98
  },
  {
    "name": "Amazon cities and resilient infrasctruture",
    "pct": 11.11
  },
  {
    "name": "Financial innovation and inclusion",
    "pct": 22.22
  },
  {
    "name": "Other emerging themes",
    "pct": 30.69
  }
];

export const AF_SUBS: PctItem[] = [
  {
    "name": "Sustainable low-carbon agricuture",
    "pct": 6.45
  },
  {
    "name": "Supporting people and communities",
    "pct": 37.9
  },
  {
    "name": "Bioeconomy and creative economy",
    "pct": 27.82
  },
  {
    "name": "Combating deforestation",
    "pct": 19.35
  },
  {
    "name": "Cities connectivity and sustainable infrasctruture",
    "pct": 8.47
  }
];

export const COP30_PIL: PctItem[] = [
  {
    "name": "Supporting people and community",
    "pct": 31.58
  },
  {
    "name": "Bioeconomy and creative economy",
    "pct": 37.5
  },
  {
    "name": "Combating deforestation",
    "pct": 30.92
  },
  {
    "name": "Cities connectivity and sustainable infrastructure",
    "pct": 1.0
  },
  {
    "name": "Sustainable low-carbon agriculture",
    "pct": 20.59
  },
  {
    "name": "Human settlements & adaptation",
    "pct": 15.78
  },
  {
    "name": "Energy, industry & transport",
    "pct": 4.13
  },
  {
    "name": "Nature, forests & biodiversity",
    "pct": 31.07
  },
  {
    "name": "Health & social protection",
    "pct": 11.65
  },
  {
    "name": "Food systems and agriculture",
    "pct": 16.02
  },
  {
    "name": "Cross-cutting finance & tech",
    "pct": 21.36
  }
];

// ── Consolidated Institutions (Host + Participants, deduplicated) ─────────────
// Fonte: aba "Dashboard consolidated INST." da planilha — análise feita pela Cíntia
export const INST_SUMMARY = {
  "total_unique": 414,
  "host_only": 106,
  "participants_only": 282,
  "both": 26
};

export const INST_BY_SECTOR: SectorRow[] = [
  {
    "sector": "Civil Society/ONG",
    "total": 205,
    "pct": 49.5,
    "host_only": 64,
    "part_only": 124,
    "both": 17
  },
  {
    "sector": "Science, technology and innovation",
    "total": 86,
    "pct": 20.8,
    "host_only": 19,
    "part_only": 66,
    "both": 1
  },
  {
    "sector": "Government",
    "total": 73,
    "pct": 17.6,
    "host_only": 14,
    "part_only": 58,
    "both": 1
  },
  {
    "sector": "Private Sector",
    "total": 27,
    "pct": 6.5,
    "host_only": 3,
    "part_only": 18,
    "both": 6
  },
  {
    "sector": "Multilateral",
    "total": 23,
    "pct": 5.6,
    "host_only": 6,
    "part_only": 16,
    "both": 1
  }
];

export const INST_BY_COUNTRY: CountryRow[] = [
  {
    "country": "Brazil",
    "total": 210,
    "pct": 50.72,
    "host_only": 45,
    "part_only": 154,
    "both": 11
  },
  {
    "country": "USA",
    "total": 28,
    "pct": 6.76,
    "host_only": 11,
    "part_only": 15,
    "both": 2
  },
  {
    "country": "Pan-Amazônia / América Latina",
    "total": 28,
    "pct": 6.76,
    "host_only": 13,
    "part_only": 12,
    "both": 3
  },
  {
    "country": "Peru",
    "total": 25,
    "pct": 6.04,
    "host_only": 5,
    "part_only": 20,
    "both": 0
  },
  {
    "country": "Colombia",
    "total": 23,
    "pct": 5.56,
    "host_only": 5,
    "part_only": 17,
    "both": 1
  },
  {
    "country": "Internacional / Regional",
    "total": 20,
    "pct": 4.83,
    "host_only": 5,
    "part_only": 15,
    "both": 0
  },
  {
    "country": "Switzerland",
    "total": 13,
    "pct": 3.14,
    "host_only": 7,
    "part_only": 4,
    "both": 2
  },
  {
    "country": "United Kingdom",
    "total": 11,
    "pct": 2.66,
    "host_only": 2,
    "part_only": 6,
    "both": 3
  },
  {
    "country": "Ecuador",
    "total": 8,
    "pct": 1.93,
    "host_only": 0,
    "part_only": 7,
    "both": 1
  },
  {
    "country": "Bolivia",
    "total": 7,
    "pct": 1.69,
    "host_only": 2,
    "part_only": 5,
    "both": 0
  },
  {
    "country": "France",
    "total": 7,
    "pct": 1.69,
    "host_only": 3,
    "part_only": 4,
    "both": 0
  },
  {
    "country": "Norway",
    "total": 4,
    "pct": 0.97,
    "host_only": 1,
    "part_only": 3,
    "both": 0
  },
  {
    "country": "Germany",
    "total": 4,
    "pct": 0.97,
    "host_only": 2,
    "part_only": 2,
    "both": 0
  },
  {
    "country": "Netherlands",
    "total": 3,
    "pct": 0.72,
    "host_only": 0,
    "part_only": 1,
    "both": 2
  },
  {
    "country": "Sweden",
    "total": 3,
    "pct": 0.72,
    "host_only": 2,
    "part_only": 1,
    "both": 0
  },
  {
    "country": "Venezuela",
    "total": 3,
    "pct": 0.72,
    "host_only": 0,
    "part_only": 3,
    "both": 0
  },
  {
    "country": "Suriname",
    "total": 3,
    "pct": 0.72,
    "host_only": 0,
    "part_only": 3,
    "both": 0
  },
  {
    "country": "International (UN)",
    "total": 2,
    "pct": 0.48,
    "host_only": 1,
    "part_only": 1,
    "both": 0
  },
  {
    "country": "Indonesia",
    "total": 1,
    "pct": 0.24,
    "host_only": 1,
    "part_only": 0,
    "both": 0
  },
  {
    "country": "Mexico",
    "total": 1,
    "pct": 0.24,
    "host_only": 1,
    "part_only": 0,
    "both": 0
  },
  {
    "country": "Panama",
    "total": 1,
    "pct": 0.24,
    "host_only": 0,
    "part_only": 0,
    "both": 1
  },
  {
    "country": "Dominican Republic",
    "total": 1,
    "pct": 0.24,
    "host_only": 0,
    "part_only": 1,
    "both": 0
  },
  {
    "country": "Europe",
    "total": 1,
    "pct": 0.24,
    "host_only": 0,
    "part_only": 1,
    "both": 0
  },
  {
    "country": "South Korea",
    "total": 1,
    "pct": 0.24,
    "host_only": 0,
    "part_only": 1,
    "both": 0
  },
  {
    "country": "Honduras",
    "total": 1,
    "pct": 0.24,
    "host_only": 0,
    "part_only": 1,
    "both": 0
  },
  {
    "country": "Belgium",
    "total": 1,
    "pct": 0.24,
    "host_only": 0,
    "part_only": 1,
    "both": 0
  },
  {
    "country": "Guatemala",
    "total": 1,
    "pct": 0.24,
    "host_only": 0,
    "part_only": 1,
    "both": 0
  },
  {
    "country": "Spain",
    "total": 1,
    "pct": 0.24,
    "host_only": 0,
    "part_only": 1,
    "both": 0
  },
  {
    "country": "Morocco",
    "total": 1,
    "pct": 0.24,
    "host_only": 0,
    "part_only": 1,
    "both": 0
  },
  {
    "country": "Zambia",
    "total": 1,
    "pct": 0.24,
    "host_only": 0,
    "part_only": 1,
    "both": 0
  }
];

export const CONSOLIDATED_INSTITUTIONS: ConsolidatedInstitution[] = [
  {
    "name": "ACT",
    "sector": "Sociedade Civil / ONG",
    "country": "USA",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Advogada indígena, especialista em ESG territorial",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Agencia de Defesa Agropecuaria do Estado do Para ADEPARA",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Agencia Espanhola de Cooperacao Internacional para o Desenvolvimento AECID",
    "sector": "Governo",
    "country": "Spain",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "AGROSMART S.A.",
    "sector": "Setor Privado",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Aguas de Para AEGEA",
    "sector": "Setor Privado",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Agência Nacional de Águas ANA",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Alianca pela Restauracao na Amazonia",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Alianca pela Restauracao na Amazonia; Alliance for Restoration in Amazon",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Amazon Conservation Team (ACT-Brasil)",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Amazon Investor Coalition",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Amazon Investor Coalition (AIC)",
    "sector": "Sociedade Civil / ONG",
    "country": "USA",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Amazon Investor Coalition AIC",
    "sector": "Sociedade Civil / ONG",
    "country": "USA",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Amazon Underworld",
    "sector": "Sociedade Civil / ONG",
    "country": "Pan-Amazônia / América Latina",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Amazonia de Pe",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Amazônia Colombiana",
    "sector": "Sociedade Civil / ONG",
    "country": "Colombia",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Amazônia+10",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Ambiente y Sociedad",
    "sector": "Sociedade Civil / ONG",
    "country": "Colombia",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Ambiente y Sociedad  Colombia",
    "sector": "Sociedade Civil / ONG",
    "country": "Colombia",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Ambition Loop",
    "sector": "Sociedade Civil / ONG",
    "country": "Netherlands",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "American University",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "USA",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Amigos da Terra - Amazonia Brasileira",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "analista, Ana Clima",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Andean Mountain Initiative",
    "sector": "Sociedade Civil / ONG",
    "country": "Pan-Amazônia / América Latina",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Articulacao dos Povos e Organizacoes Indigenas do Amapa e Norte do Para APOIANP",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Asociacion Ambiente y Sociedad (AAS)",
    "sector": "Sociedade Civil / ONG",
    "country": "Colombia",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Asociacion Interetnica de Desarrollo de la Selva Peruana (AIDESEP)",
    "sector": "Sociedade Civil / ONG",
    "country": "Peru",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Asociacion Interetnica de Desarrollo de la Selva Peruana AIDESEP",
    "sector": "Sociedade Civil / ONG",
    "country": "Peru",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "ASPROC — Associação dos Produtores Rurais de Carauari",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "ASPROC, Carauari/AM",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Associacao Automobilistica Brasileira (AAB)",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Associacao Brasileira das Empresas Estaduais de Saneamento AESBE",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Associacao Brasileira dos Membros do Ministerio Publico de Meio Ambiente ABRAMPA",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Associacao Chakra Amazonica",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Associacao de Criadores do Para ACRIPARA",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Associacao dos Produtores Rurais de Carauri ASPROC",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Associacao Indigena Tapayuna (AIT)",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Associacao Matareila",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Associacao Metareila",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Associacao Sociocultural Yanawana ASCY",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Associacao Sociocultural Yawanawa (ASCY)",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Associacação Sociocultural Yanawana ASCY",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Associação AutomobilIstica Brasileira AAB",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Atinchik / ICA / Art of Hosting — facilitadora independente",
    "sector": "Sociedade Civil / ONG",
    "country": "Peru",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Banco CAF",
    "sector": "Multilateral",
    "country": "Venezuela",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Banco da Amazonia",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Banco de Desenvolvimento do Peru COFIDE",
    "sector": "Governo",
    "country": "Peru",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Banco do Brasil",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Banco Mundial  (WBG)",
    "sector": "Multilateral",
    "country": "USA",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Bancoldex",
    "sector": "Governo",
    "country": "Colombia",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Bank Information Center (BIC)",
    "sector": "Sociedade Civil / ONG",
    "country": "USA",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Bank Information Center BIC",
    "sector": "Sociedade Civil / ONG",
    "country": "USA",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Belterra",
    "sector": "Setor Privado",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "BID",
    "sector": "Multilateral",
    "country": "USA",
    "host_only": "Sim",
    "participant_only": "Sim",
    "role": "Organizadora e Participante"
  },
  {
    "name": "Black Jaguar Foundation",
    "sector": "Sociedade Civil / ONG",
    "country": "Netherlands",
    "host_only": "Sim",
    "participant_only": "Sim",
    "role": "Organizadora e Participante"
  },
  {
    "name": "BNDES",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Brasil",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Brazilian Forest Service",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Brigada Guardioes Kumaruara  Brasil",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "BTG Pactual",
    "sector": "Setor Privado",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "C-Minds",
    "sector": "Sociedade Civil / ONG",
    "country": "Mexico",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "CAIXA",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Carbon Growth Partners CGP",
    "sector": "Setor Privado",
    "country": "USA",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Caxiri Restaurant",
    "sector": "Setor Privado",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Central Ashaninka del Rio Ene (CARE)",
    "sector": "Sociedade Civil / ONG",
    "country": "Peru",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Central Ashaninka del Rio Ene CARE",
    "sector": "Sociedade Civil / ONG",
    "country": "Peru",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Centro de Pesquisa Florestal Internacional (CIFOR-ICRAF)",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Indonesia",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Centro Franco-Brasileiro de Biodiversidade Amazonica (CFBBA)",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "France",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Centro Universitario do Estado do Para CESUPA",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Climate and Health Alliance for Municipalities CHAMP",
    "sector": "Sociedade Civil / ONG",
    "country": "Internacional / Regional",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Climate Ventures",
    "sector": "Setor Privado",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Coalicion para los Derechos Humanos en el Desarrollo",
    "sector": "Sociedade Civil / ONG",
    "country": "Internacional / Regional",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Coalizao Internacional de Territorios e Povos Afrodescendentes da America Latina e do Caribe CITAFRO",
    "sector": "Sociedade Civil / ONG",
    "country": "Pan-Amazônia / América Latina",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Coalizao para o Desenvolvimento Urbano Sustentavel da Amazonia (DUSA)",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Columbia University",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "USA",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Comissao Economica para a America Latina e o Caribe CEPAL",
    "sector": "Multilateral",
    "country": "Pan-Amazônia / América Latina",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Comissao Nacional de Desenvolvimento Sustentavel dos Povos e Comunidades Tradicionais CNPCT",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Comite Chico Mendes",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Companhia de Saneamento do Para COSANPA",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Companhia Docas do Para CPH",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Comunidade da Madeira",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Conectas Derechos Humanos",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Conexion ICCO",
    "sector": "Sociedade Civil / ONG",
    "country": "Pan-Amazônia / América Latina",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Conexsus",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Confederacao de Cooperativas da Agricultura Familiar e Economia Solidaria do Brasil UNICAFES",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Confederation of Indigenous Nationalities of the Ecuadorian Amazon (CONFENIAE)",
    "sector": "Sociedade Civil / ONG",
    "country": "Ecuador",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Consejo Indigena del Pueblo Tacana CIPTA",
    "sector": "Sociedade Civil / ONG",
    "country": "Bolivia",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Conselho Nacional das Fundacoes Estaduais de Amparo a Pesquisa (CONFAP)",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Conselho Nacional das Populacoes Extrativistas (CNS)",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Conselho Nacional de Povos e Comunidades Tradicionais (CNPCT)",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Conselho Nacional Extrativista Conselho Nacional das Populacoes Extrativistas CNS",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Conservacion Amazonica ACEAA",
    "sector": "Sociedade Civil / ONG",
    "country": "Bolivia",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Conservation International (CI)",
    "sector": "Sociedade Civil / ONG",
    "country": "USA",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Conservation International CI",
    "sector": "Sociedade Civil / ONG",
    "country": "Internacional / Regional",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Conservation International, supervisão Américas",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Conservation X Labs (CXL)",
    "sector": "Sociedade Civil / ONG",
    "country": "USA",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Conservation X Labs CLX",
    "sector": "Sociedade Civil / ONG",
    "country": "USA",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Conservação Internacional Brasil",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Consorcio de Pesquisa em Biodiversidade Brasil-Noruega (BRC)",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Norway",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Consorcio de Pesquisa em Biodiversidade Brasil-Noruega BRC",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Norway",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Consorcio para el Desarrollo Sostenible de la Ecorregion Andina (CONDESAN)",
    "sector": "Sociedade Civil / ONG",
    "country": "Pan-Amazônia / América Latina",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Cooperacion para el desarrollo de paises emergentes in Ecuador COSPE",
    "sector": "Sociedade Civil / ONG",
    "country": "Ecuador",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Cooperativa Cofruta",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Cooperativa DIrituia",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Cooperativa Turiarte",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Cooperação Suíça/SDC",
    "sector": "Multilateral",
    "country": "Switzerland",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "coord. Ecossistemas, Instituto Humboldt, Colômbia",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Colombia",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "coord. pesquisa, MPEG",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "coord. Territórios Sustentáveis, SEDAP/Pará",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "coord., INPE Amazônia",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Coordenacao das Organizacoes Indigenas da Amazonia Brasileira (COIAB)",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Coordenacao das Organizacoes Indigenas da Amazonia Brasileira COIAB",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Coordenacao das Organizacoes Indigenas da Bacia Amazonica (COICA)",
    "sector": "Sociedade Civil / ONG",
    "country": "Pan-Amazônia / América Latina",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Coordenacao das Organizacoes Indigenas da Bacia Amazonica COICA",
    "sector": "Sociedade Civil / ONG",
    "country": "Pan-Amazônia / América Latina",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Coordenacao Nacional de Articulacao das Comunidades Negras Rurais Quilombolas (CONAQ)",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Coordenacao Nacional de Articulacao das Comunidades Negras Rurais Quilombolas CONAQ",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "coordenador técnico, IDCEP",
    "sector": "Sociedade Civil / ONG",
    "country": "Peru",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "coordenador-geral, UNIVAJA, Brasil",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "coordenadora de linguística",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "COP30 staff",
    "sector": "Governo",
    "country": "Internacional / Regional",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Corredor Territorial Pano Arawak",
    "sector": "Sociedade Civil / ONG",
    "country": "Pan-Amazônia / América Latina",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Corredor Territorial Yavari Tapiche",
    "sector": "Sociedade Civil / ONG",
    "country": "Pan-Amazônia / América Latina",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "curadora de botânica/briófitas",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "curadora de herpetologia",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Derecho, Ambiente y Recursos Naturales (DAR)",
    "sector": "Sociedade Civil / ONG",
    "country": "Peru",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Derecho, Ambiente y Recursos Naturales DAR",
    "sector": "Sociedade Civil / ONG",
    "country": "Peru",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "dir. executiva, Fundação Amigos da Natureza, Bolívia",
    "sector": "Sociedade Civil / ONG",
    "country": "Bolivia",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "dir. executivo, INABIO, Equador",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Ecuador",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "dir. pesquisa, IRD, França",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "France",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "dir., Fundação Heinrich Böll Brasil",
    "sector": "Sociedade Civil / ONG",
    "country": "Germany",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "dir., Instituto Mamirauá",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "diretora adjunta, Laboratório da Cidade",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Distrito Sanitario Especial Indigena DSEI- MA",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "ECO Consultancy",
    "sector": "Setor Privado",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Embaixada Britanica em Lima; British Embassy in Lima",
    "sector": "Governo",
    "country": "United Kingdom",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Embaixada da Noruega",
    "sector": "Governo",
    "country": "Norway",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Embaixada da Suica",
    "sector": "Governo",
    "country": "Switzerland",
    "host_only": "Sim",
    "participant_only": "Sim",
    "role": "Organizadora e Participante"
  },
  {
    "name": "Empresa Brasileira de Pesquisa Agropecuaria Embrapa",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Environmental Impact Assessment EIA",
    "sector": "Governo",
    "country": "Suriname",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Equador",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Ecuador",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Escucha la Amazonia",
    "sector": "Sociedade Civil / ONG",
    "country": "Colombia",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "especialista, BID",
    "sector": "Multilateral",
    "country": "Venezuela",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "especialista, Instituto Clima e Sociedade",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "European Investment Bank EIB",
    "sector": "Multilateral",
    "country": "Europe",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Expertise France/AMABIO",
    "sector": "Governo",
    "country": "France",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Facultad Latinoamericana de Ciencias Sociales FLACSO",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Pan-Amazônia / América Latina",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Federacao das Organizacoes Indigenas do Rio Negro FOIRN",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Federacao dos Trabalhadores na Agricultura Familiar FETAGRI",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Federacion Nativa del Rio Madre de Dios y Afluentes FENAMAD",
    "sector": "Sociedade Civil / ONG",
    "country": "Peru",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Federation Internationale de lAutomobile FIA",
    "sector": "Sociedade Civil / ONG",
    "country": "Internacional / Regional",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Fondo Financiero para el Desarrollo de la Cuenca del Plata (FONPLATA)",
    "sector": "Multilateral",
    "country": "Bolivia",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "FONPLATA",
    "sector": "Multilateral",
    "country": "Bolivia",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Food and Agriculture Organization of the United Nations FAO",
    "sector": "Multilateral",
    "country": "Internacional / Regional",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Forest Trends",
    "sector": "Sociedade Civil / ONG",
    "country": "USA",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Forests & Climate Programme / Embaixada Britânica",
    "sector": "Governo",
    "country": "United Kingdom",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Foro Ciudades Amazonicas (Forum de Cidades Amazonicas)",
    "sector": "Sociedade Civil / ONG",
    "country": "Pan-Amazônia / América Latina",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Forum Social Pan-Amazonico (FOSPA)",
    "sector": "Sociedade Civil / ONG",
    "country": "Pan-Amazônia / América Latina",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Foundation for Forest Management and Forest Control",
    "sector": "Governo",
    "country": "Suriname",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "FUNATURA",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Sim",
    "role": "Organizadora e Participante"
  },
  {
    "name": "Fundacao Amazonia de Amparo a Estudos e Pesquisas FAPESPA",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Fundacao CERTI",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Fundacao Getuio Vargas (FGV)",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Fundacao Getulio Vargas FGV",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Fundacao Henrich Boll",
    "sector": "Sociedade Civil / ONG",
    "country": "Germany",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Fundacao Kambak",
    "sector": "Sociedade Civil / ONG",
    "country": "Ecuador",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Fundacao Nacional dos Povos Indigenas FUNAI",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Fundacao Paulo Martins",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Fundacion Amigos de la Naturaleza (FAN)",
    "sector": "Sociedade Civil / ONG",
    "country": "Bolivia",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Fundacion Avina",
    "sector": "Sociedade Civil / ONG",
    "country": "Panama",
    "host_only": "Sim",
    "participant_only": "Sim",
    "role": "Organizadora e Participante"
  },
  {
    "name": "Fundacion Barranquilla+20",
    "sector": "Sociedade Civil / ONG",
    "country": "Colombia",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Fundacion para la Conservacion y el Desarrollo Sostenible (FCDS)",
    "sector": "Sociedade Civil / ONG",
    "country": "Colombia",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Fundacion para la Conservacion y el Desarrollo Sostenible FCDS",
    "sector": "Sociedade Civil / ONG",
    "country": "Colombia",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "fundador, Forte Paraóleo, Pará",
    "sector": "Setor Privado",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Fundo Brasileiro para a Biodiversidade (FUNBIO)",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Fundo Indigena da Amazonia Brasileira (PODAALI)",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Fundo Indigena da Amazonia Brasileira PODAALI",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Geneva Science and Diplomacy Anticipator (GESDA)",
    "sector": "Governo",
    "country": "Switzerland",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "gerente de economia indígena, COIAB",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "gerente de engajamento, PPA — Plataforma de Parceria para a Amazônia",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "gerente de projetos, La Clima",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "gerente, Banco Pichincha, Equador",
    "sector": "Setor Privado",
    "country": "Ecuador",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Global Energy Alliance for People and Planet GEAPP",
    "sector": "Multilateral",
    "country": "Internacional / Regional",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Global Green Growth Institute GGGI",
    "sector": "Governo",
    "country": "South Korea",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Global Resilience Analysis and Action Hub GRAHA",
    "sector": "Sociedade Civil / ONG",
    "country": "USA",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Global Witness",
    "sector": "Sociedade Civil / ONG",
    "country": "United Kingdom",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Governador Caqueta  Colombia",
    "sector": "Governo",
    "country": "Colombia",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Governador Ucayali  Peru",
    "sector": "Governo",
    "country": "Peru",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Governo do Marrocos",
    "sector": "Governo",
    "country": "Morocco",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Governo do Para",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Governo Republica Dominicana",
    "sector": "Governo",
    "country": "Dominican Republic",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Governors Climate and Task Force (GCTF)",
    "sector": "Governo",
    "country": "Internacional / Regional",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Governors Climate and Task Force GCTF",
    "sector": "Governo",
    "country": "Internacional / Regional",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Grupo de Trabalho sobre Infraestrutura e Justiça Socioambiental GTINFRA",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "GT Infraestrutura e justica socioambiental (GTINFRA)",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Hero Amazonia & International Partnership",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "IAP, Peru",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Peru",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "IBAMA",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "ICLEI",
    "sector": "Multilateral",
    "country": "Internacional / Regional",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Imaflora",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Impact Bank",
    "sector": "Setor Privado",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Impact Hub Manaus",
    "sector": "Setor Privado",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Sim",
    "role": "Organizadora e Participante"
  },
  {
    "name": "INABIO, Equador",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Ecuador",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Iniciativa Amazonia+10",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Institut de Recherche pour le Developpement IRD",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "France",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Instituto Ambiental de Estocolmo (SEI); Stockholm Environment Institute (SEI)",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Sweden",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Instituto Ambiental de Estocolmo SEI",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Sweden",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Instituto BEI",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Sim",
    "role": "Organizadora e Participante"
  },
  {
    "name": "Instituto Clima e Sociedade ICS",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Instituto Conexoes Sustentaveis (Conexsus)",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Instituto de Ecologia, UMSA, Bolívia",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Bolivia",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Instituto de Pesquisa Ambiental da Amazonia (IPAM)",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Instituto de Pessquisa Ambiental da Amazonia IPAM",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Instituto Floresta Tropical",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Instituto Igarape",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Sim",
    "role": "Organizadora e Participante"
  },
  {
    "name": "Instituto Internacional de Educacao do Brasil (IEB)",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Instituto Internacional de Educacao do Brasil IEB",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Instituto Latinoamericano para uma Sociedade e um Direito Alternativo ISLA",
    "sector": "Sociedade Civil / ONG",
    "country": "Colombia",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Instituto Nacional de Cuidados Oncologicos e Humanização (Amar Mais)",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Instituto Nacional de Pesquisas da Amazonia INPA",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Instituto Nacional de Pesquisas Espaciais INPE",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Instituto Panamazonico",
    "sector": "Sociedade Civil / ONG",
    "country": "Pan-Amazônia / América Latina",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Instituto Peabiru",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Sim",
    "role": "Organizadora e Participante"
  },
  {
    "name": "Instituto Regenera",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Sim",
    "role": "Organizadora e Participante"
  },
  {
    "name": "Instituto Sinchi",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Colombia",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Instituto Socioambiental (ISA)",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Instituto Socioambiental ISA",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Instituto Tecnologico Vale (ITV)",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Instituto Tecnologico Vale ITV",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "International Advisory Panel on Biodiversity Credits IAPB",
    "sector": "Sociedade Civil / ONG",
    "country": "Internacional / Regional",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Kaa Harmony",
    "sector": "Sociedade Civil / ONG",
    "country": "Germany",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Kara Solar Foundation",
    "sector": "Sociedade Civil / ONG",
    "country": "Ecuador",
    "host_only": "Sim",
    "participant_only": "Sim",
    "role": "Organizadora e Participante"
  },
  {
    "name": "Latimpacto",
    "sector": "Sociedade Civil / ONG",
    "country": "Pan-Amazônia / América Latina",
    "host_only": "Sim",
    "participant_only": "Sim",
    "role": "Organizadora e Participante"
  },
  {
    "name": "Latin American Climate Lawyers Initiative For Mobilizing Action (LACLIMA)",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Latinoamerica Sustentable (LAS)",
    "sector": "Sociedade Civil / ONG",
    "country": "Pan-Amazônia / América Latina",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Liderança indígena Maya Q'eqchi'",
    "sector": "Sociedade Civil / ONG",
    "country": "Guatemala",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "liderança quilombola, Rede Bragantina/Pará",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "liderança, Povo Baré, Alto Rio Negro",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Liege University Gastronomy Lab",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Belgium",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "líder indígena, TIARG/Pará",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Ministerio Comercio e Turismo Colombia",
    "sector": "Governo",
    "country": "Colombia",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Ministerio da Agricultura e Pecuaria Brasil MAPA",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Ministerio da Fazenda Brasil MF",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Ministerio de Ambiente y Desarrollo Sostenible  Colombia",
    "sector": "Governo",
    "country": "Colombia",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Ministerio de Integracao e Desenvolvimento Regional Brasil (MIDR)",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Ministerio del Comercio, Industria y Turismo de Colombia",
    "sector": "Governo",
    "country": "Colombia",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Ministerio do Meio Ambiente e Mudanças Climaticas (MMA)",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Ministerio dos Transportes Brasil MT",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Ministry of Finance and National Planning  Zambia",
    "sector": "Governo",
    "country": "Zambia",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Ministry of Oil  Gas and the Environment Suriname MINOGE",
    "sector": "Governo",
    "country": "Suriname",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Ministério da Integração e do Desenvolvimento Regional Brasil MIDR",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Ministério do Meio Ambiente e Mudanças Climáticas MMA",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Minstério do Meio Ambiente e das Mudanças Climáticas Brasil MMA",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "MIT",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "USA",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "mod., Colômbia",
    "sector": "Sociedade Civil / ONG",
    "country": "Colombia",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "moderador",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Pan-Amazônia / América Latina",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "moderador, CIFOR-ICRAF, Brasil",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "moderador, Instituto Humboldt, Colômbia",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Colombia",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "moderadora, Brick Policy Center",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "moderadora, CITA — Centro de Investimento e Transformação Amazônica",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Motores Amazonas",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Movimento Interestadual das Quebradeiras de Coco Babacu (MIQCB)",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Movimento Interestadual das Quebradeiras de Coco Babaçu MIQCB",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "MPEG, Brasil",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Museu Goeldi",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Sim",
    "role": "Organizadora e Participante"
  },
  {
    "name": "National Geographic Society",
    "sector": "Sociedade Civil / ONG",
    "country": "USA",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "National Planning Department of Colombia",
    "sector": "Governo",
    "country": "Colombia",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Natura",
    "sector": "Setor Privado",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Sim",
    "role": "Organizadora e Participante"
  },
  {
    "name": "Natura Cosméticos",
    "sector": "Setor Privado",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Nature and People Foundation",
    "sector": "Sociedade Civil / ONG",
    "country": "United Kingdom",
    "host_only": "Sim",
    "participant_only": "Sim",
    "role": "Organizadora e Participante"
  },
  {
    "name": "Nature Finance",
    "sector": "Sociedade Civil / ONG",
    "country": "Switzerland",
    "host_only": "Sim",
    "participant_only": "Sim",
    "role": "Organizadora e Participante"
  },
  {
    "name": "NESsT",
    "sector": "Sociedade Civil / ONG",
    "country": "USA",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Nia Tero",
    "sector": "Sociedade Civil / ONG",
    "country": "USA",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Nonprofit Enterprise and Self-sustainability Team (NESsT)",
    "sector": "Sociedade Civil / ONG",
    "country": "USA",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Norwegian Agency for Development Cooperation NORAD",
    "sector": "Governo",
    "country": "Norway",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Office for Climate Education OCE",
    "sector": "Multilateral",
    "country": "Internacional / Regional",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Operacao Amazonia Nativa OPAN",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "org. do livro, @gestamazon",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Organizacao de Estados Ibero-Americanos para a Educacao  a Ciencia e a Cultura OEI",
    "sector": "Multilateral",
    "country": "Internacional / Regional",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Organizacao do Tratado de Cooperacao Amazonica OTCA",
    "sector": "Multilateral",
    "country": "Pan-Amazônia / América Latina",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Organizacao para a Cooperacao e Desenvolvimento Economico (OCDE)",
    "sector": "Multilateral",
    "country": "France",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Organizacao para a Cooperacao e Desenvolvimento Economico OCDE",
    "sector": "Multilateral",
    "country": "France",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Organizacion de Desarrollo Etnico Comunitario ODECO",
    "sector": "Sociedade Civil / ONG",
    "country": "Honduras",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Organizacion de Mujeres Indigenas Cuidadoras y Defensoras de la Selva  Cuenca e Bioma Amazonico MIDCA",
    "sector": "Sociedade Civil / ONG",
    "country": "Pan-Amazônia / América Latina",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Organizacion Regional AIDESEP Ucayali (ORAU)",
    "sector": "Sociedade Civil / ONG",
    "country": "Peru",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "OrganizaciOn Regional AIDESEP Ucayali ORAU",
    "sector": "Sociedade Civil / ONG",
    "country": "Peru",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Organizacion Regional de Pueblos Indigenas del Oriente (ORPIO)",
    "sector": "Sociedade Civil / ONG",
    "country": "Peru",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "ORPIO/SITO, Peru",
    "sector": "Sociedade Civil / ONG",
    "country": "Peru",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Painel Consultivo Internacional sobre Creditos de Biodiversidade (IAPB)",
    "sector": "Multilateral",
    "country": "Internacional / Regional",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Parque Cientifico e Tecnologico do Alto Solimoes (PaCTAS)",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Parque Cientifico e Tecnologico do Alto Solimoes PaCTAS",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Partnerships for Forests P4F",
    "sector": "Governo",
    "country": "United Kingdom",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Pará/COIAB",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "pesquisador, CNRS, França",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "France",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "pesquisador, Free University Berlin",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Germany",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "pesquisador, MPEG — Projeto Iara",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "pesquisadora, MPEG",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "pesquisadora, UFPA",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Plataforma Cipo",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Sim",
    "role": "Organizadora e Participante"
  },
  {
    "name": "Plataforma Parceiros pela Amazonia (PPA)",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "PNUD",
    "sector": "Multilateral",
    "country": "Internacional / Regional",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Porticus",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Peru",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Povo Ashaninka — Peru",
    "sector": "Sociedade Civil / ONG",
    "country": "Peru",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Povo indigena",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Povo indigena etnia Tikuna",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Practical Action",
    "sector": "Sociedade Civil / ONG",
    "country": "United Kingdom",
    "host_only": "Sim",
    "participant_only": "Sim",
    "role": "Organizadora e Participante"
  },
  {
    "name": "Prefeitura de Ananindeua",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Prefeitura de Barcarena",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "presidenta, IIAP, Peru",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Peru",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "presidente, FAPEAM",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "presidente, FAPESP",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "presidente, ORPIO, Peru",
    "sector": "Sociedade Civil / ONG",
    "country": "Peru",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Programa das Nacoes Unidas para o Desenvolvimento (PNUD)",
    "sector": "Multilateral",
    "country": "International (UN)",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Projeto CITinova II",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Projeto HAMY",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Provincia de Maynas",
    "sector": "Governo",
    "country": "Peru",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Quintessa",
    "sector": "Setor Privado",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Sim",
    "role": "Organizadora e Participante"
  },
  {
    "name": "re.green",
    "sector": "Setor Privado",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Red Amazónica de Información Socioambiental Georreferenciada; Red Amazónica de Información Socioambiental Georreferenciada (RAISG)",
    "sector": "Sociedade Civil / ONG",
    "country": "Pan-Amazônia / América Latina",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Red de Redes Amazonicas",
    "sector": "Sociedade Civil / ONG",
    "country": "Pan-Amazônia / América Latina",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Redario",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Rede Amazonica de Informacao Socioambiental Georreferenciada (RAISG)",
    "sector": "Sociedade Civil / ONG",
    "country": "Pan-Amazônia / América Latina",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Rede Amazonidas pelo Clima (RAC)",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Rede Amazônidas pelo Clima",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Rede Bioamazonia",
    "sector": "Sociedade Civil / ONG",
    "country": "Pan-Amazônia / América Latina",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Rede BioAmazônia/CTI, Peru",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Colombia",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Rede de Sementes do Araguaia RESSEMEAR",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Rede Financeira da Amazônia (Amazon Finance Network)",
    "sector": "Sociedade Civil / ONG",
    "country": "Pan-Amazônia / América Latina",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Rede global de governos locais para sustentabilidade (ICLEI)",
    "sector": "Multilateral",
    "country": "Internacional / Regional",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Rede Internacional de Cidades para a Vida na Amazonia",
    "sector": "Sociedade Civil / ONG",
    "country": "Pan-Amazônia / América Latina",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Rede Pan-Amazonica pela Bioeconomia",
    "sector": "Sociedade Civil / ONG",
    "country": "Pan-Amazônia / América Latina",
    "host_only": "Sim",
    "participant_only": "Sim",
    "role": "Organizadora e Participante"
  },
  {
    "name": "Rede Terra do Meio",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Rede Yaku Warmikuna",
    "sector": "Sociedade Civil / ONG",
    "country": "Pan-Amazônia / América Latina",
    "host_only": "Sim",
    "participant_only": "Sim",
    "role": "Organizadora e Participante"
  },
  {
    "name": "Religioes Pela Paz Brasil",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Rights and Resources Initiative (RRI)",
    "sector": "Sociedade Civil / ONG",
    "country": "Internacional / Regional",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Rights and Resources Initiative RRI",
    "sector": "Sociedade Civil / ONG",
    "country": "USA",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Santander",
    "sector": "Setor Privado",
    "country": "Internacional / Regional",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Secretaria Ambiental, Rondônia",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Secretaria de Educacao do Estado do Para (SEDUC-PA)",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Secretaria de Estado da Educacao do Rio Grande do Sul SEDUC-RS",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Secretaria de Estado de Educacao do Para SEDUC-PA",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Secretaria de Estado de Meio Ambiente e Sustentabilidade do Para (SEMAS-PA)",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Secretaria de Estado de Meio Ambiente e Sustentabilidade do Para SEMAS-PA",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Secretaria de Saude Indigena do Maranhao SESAI-MA",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Secretaria Desenvolvimento Regional de Rondonia",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Secretaria Nacional de Bioeconomia",
    "sector": "Governo",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Sementes do Paraiso",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Servicio Nacional de Areas Naturales Protegidas por el Estado SERNANP-PERU",
    "sector": "Governo",
    "country": "Peru",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "SFOR e Craft — organização de relatoria",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Sicredi",
    "sector": "Setor Privado",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Sistemiq",
    "sector": "Governo",
    "country": "United Kingdom",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Sitawi Financas do Bem",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Solidaridad in Peru",
    "sector": "Sociedade Civil / ONG",
    "country": "Peru",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Sustainable Development Solutions Network SDSN",
    "sector": "Multilateral",
    "country": "USA",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Swedish International Development Cooperation Agency (SIDA)",
    "sector": "Governo",
    "country": "Sweden",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Swiss Agency for Development and Cooperation (SDC)",
    "sector": "Governo",
    "country": "Switzerland",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Swiss Agency for Development and Cooperation SDC",
    "sector": "Governo",
    "country": "Switzerland",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Swiss Bank (UBS)",
    "sector": "Setor Privado",
    "country": "Switzerland",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Swissnex",
    "sector": "Governo",
    "country": "Switzerland",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Systemica",
    "sector": "Setor Privado",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Terrasos",
    "sector": "Setor Privado",
    "country": "Colombia",
    "host_only": "Sim",
    "participant_only": "Sim",
    "role": "Organizadora e Participante"
  },
  {
    "name": "The Green Coalition",
    "sector": "Sociedade Civil / ONG",
    "country": "Pan-Amazônia / América Latina",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "The Nature Conservancy (TNC)",
    "sector": "Sociedade Civil / ONG",
    "country": "USA",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "The Nature Conservancy TNC",
    "sector": "Sociedade Civil / ONG",
    "country": "Internacional / Regional",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "The Palladium Group",
    "sector": "Setor Privado",
    "country": "United Kingdom",
    "host_only": "Sim",
    "participant_only": "Sim",
    "role": "Organizadora e Participante"
  },
  {
    "name": "The Private Infrastructure Development Group PIDG",
    "sector": "Governo",
    "country": "United Kingdom",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "TNC — The Nature Conservancy",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Toro Gastronomia Sustentavel",
    "sector": "Setor Privado",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Trama Brasil Projetos",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Trias NGO",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Tropenbos International",
    "sector": "Sociedade Civil / ONG",
    "country": "Netherlands",
    "host_only": "Sim",
    "participant_only": "Sim",
    "role": "Organizadora e Participante"
  },
  {
    "name": "Túpac Amaru activist",
    "sector": "Sociedade Civil / ONG",
    "country": "Peru",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "UBS Investment Bank",
    "sector": "Setor Privado",
    "country": "Switzerland",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "UFAM",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "UFPA",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "UFPA, Fórum de Mudanças Climáticas",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "UFRRJ, Engenharia Florestal",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "UK Special Representative for Nature",
    "sector": "Governo",
    "country": "United Kingdom",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "ULG Gastronomy Hub partner",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Uma Concertacao pela Amazonia",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Sim",
    "role": "Organizadora e Participante"
  },
  {
    "name": "UNESCO",
    "sector": "Multilateral",
    "country": "International (UN)",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "United Nations Office for Disaster Risk Reduction UNDRR",
    "sector": "Sociedade Civil / ONG",
    "country": "Internacional / Regional",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "UNIVAJA, Brasil",
    "sector": "Sociedade Civil / ONG",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Universidad del Pacifico Sur",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Peru",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Universidad Simon Bolivar",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Venezuela",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Universidade de Oxford",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "United Kingdom",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Universidade de Sao Paulo (USP)",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Universidade de Sao Paulo USP",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Universidade do Estado do Ceara (UEC)",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Universidade do Rio de Janeiro (UFRJ)",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Universidade Estadual de Campinas UNICAMP",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Universidade Estadual do Amazonas  UEA",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Universidade Estadual do Amazonas UEA",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Universidade Estadual do Ceará UEC",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Universidade Estadual Paulista (UNESP)",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Universidade Estadual Paulista UNESP",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Universidade Federal do Amazonas (UFAM)",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Universidade Federal do Amazonas UFAM",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Universidade Federal do Para UFPA",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Universidade Federal do Rio de Janeiro (UFRJ)",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Universidade Federal do Rio de Janeiro UFRJ",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Universidade Federal Rural da Amazonia (UFRA)",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Brazil",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Universidade Internacional da Florida",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "USA",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Universidade Javeriana",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Colombia",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Vale SA",
    "sector": "Setor Privado",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Vida Impacto",
    "sector": "Sociedade Civil / ONG",
    "country": "Colombia",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Wildlife Works",
    "sector": "Setor Privado",
    "country": "USA",
    "host_only": "Sim",
    "participant_only": "Sim",
    "role": "Organizadora e Participante"
  },
  {
    "name": "World Resources Institute (WRI)",
    "sector": "Sociedade Civil / ONG",
    "country": "USA",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "World Resources Institute WRI",
    "sector": "Sociedade Civil / ONG",
    "country": "USA",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "World Wide Fund for Nature (WWF)",
    "sector": "Sociedade Civil / ONG",
    "country": "Switzerland",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "World Wide Fund for Nature WWF",
    "sector": "Sociedade Civil / ONG",
    "country": "Switzerland",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "World-Transforming Technologies (WTT)",
    "sector": "Sociedade Civil / ONG",
    "country": "USA",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Wyss Academy for Nature (University of Bern)",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Switzerland",
    "host_only": "Sim",
    "participant_only": "Não",
    "role": "Somente Organizadora"
  },
  {
    "name": "Wyss Academy for Nature University of Bern",
    "sector": "Ciência, Tecnologia e Inovação",
    "country": "Switzerland",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  },
  {
    "name": "Zeno Nativo",
    "sector": "Setor Privado",
    "country": "Brazil",
    "host_only": "Não",
    "participant_only": "Sim",
    "role": "Somente Participante"
  }
];

// ── Unique Participants (pessoas físicas, sem duplicar por múltiplas sessões) ─
// Fonte: planilha atualizada pela Cíntia — contagem por país não é possível
// para pessoas físicas (nacionalidade não disponível), apenas por setor.
export const UNIQUE_PARTICIPANTS = {
  "total_unique": 427,
  "in_1_session": 387,
  "in_2plus_sessions": 40,
  "by_sector": {
    "Sociedade Civil / ONG": 186,
    "Ciência, Tecnologia e Inovação": 85,
    "Governo": 72,
    "Multilateral": 47,
    "Setor Privado": 31,
    "Não classificado": 6
  },
  "by_sector_pct": {
    "Sociedade Civil / ONG": 43.6,
    "Ciência, Tecnologia e Inovação": 19.9,
    "Governo": 16.9,
    "Multilateral": 11.0,
    "Setor Privado": 7.3,
    "Não classificado": 1.4
  }
};
