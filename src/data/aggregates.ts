import { CountItem, InterviewItem, NetworkData, DonorItem, PubItem, PctItem } from "../types";

export const ORG_COUNT: CountItem[] = [
  {"name": "BID", "count": 36},
  {"name": "Museu Goeldi", "count": 7},
  {"name": "Rede Bioamazonia", "count": 5},
  {"name": "Universidade de Sao Paulo (USP)", "count": 5},
  {"name": "Amazon Investor Coalition (AIC)", "count": 3},
  {"name": "Conservation International (CI)", "count": 3},
  {"name": "Swiss Agency for Development and Cooperation (SDC)", "count": 3},
  {"name": "Asociacion Interetnica de Desarrollo de la Selva Peruana (AIDESEP)", "count": 2},
  {"name": "Banco Mundial  (WBG)", "count": 2},
  {"name": "Conselho Nacional das Populacoes Extrativistas (CNS)", "count": 2},
  {"name": "Coordenacao das Organizacoes Indigenas da Amazonia Brasileira (COIAB)", "count": 2},
  {"name": "Coordenacao Nacional de Articulacao das Comunidades Negras Rurais Quilombolas (CONAQ)", "count": 2},
  {"name": "Derecho, Ambiente y Recursos Naturales (DAR)", "count": 2},
  {"name": "Fundacion para la Conservacion y el Desarrollo Sostenible (FCDS)", "count": 2},
  {"name": "Fundo Brasileiro para a Biodiversidade (FUNBIO)", "count": 2},
  {"name": "GT Infraestrutura e justica socioambiental (GTINFRA)", "count": 2},
  {"name": "Instituto Igarape", "count": 2},
  {"name": "Instituto Panamazonico", "count": 2},
  {"name": "Latimpacto", "count": 2},
  {"name": "Nature Finance", "count": 2},
  {"name": "Red de Redes Amazonicas", "count": 2},
  {"name": "Rede Amazonica de Informacao Socioambiental Georreferenciada (RAISG)", "count": 2},
  {"name": "Rede Pan-Amazonica pela Bioeconomia", "count": 2},
  {"name": "The Green Coalition", "count": 2},
  {"name": "Universidade Estadual Paulista (UNESP)", "count": 2}
];

export const INST_COUNT: CountItem[] = [
  {"name": "BID", "count": 39},
  {"name": "Museu Goeldi", "count": 14},
  {"name": "Universidade Federal do Para UFPA", "count": 11},
  {"name": "Instituto Sinchi", "count": 9},
  {"name": "American University", "count": 8},
  {"name": "Organizacao do Tratado de Cooperacao Amazonica OTCA", "count": 8},
  {"name": "Organizacao para a Cooperacao e Desenvolvimento Economico OCDE", "count": 8},
  {"name": "Universidade de Sao Paulo USP", "count": 8},
  {"name": "Coordinadora de las Organizacoes Indigenas de la Cuenca Amazonica COICA", "count": 6},
  {"name": "Instituto Nacional de Pesquisas da Amazonia INPA", "count": 6},
  {"name": "Ministerio do Meio Ambiente e MudanCas Climaticas Brasil MMA", "count": 6},
  {"name": "Impact Hub Manaus", "count": 5},
  {"name": "Instituto Igarape", "count": 5},
  {"name": "Universidade Estadual Paulista UNESP", "count": 5},
  {"name": "Wyss Academy for Nature University of Bern", "count": 5},
  {"name": "Alianca pela Restauracao na Amazonia", "count": 4},
  {"name": "Amazon Investor Coalition AIC", "count": 4},
  {"name": "Associacao Sociocultural Yanawana ASCY", "count": 4},
  {"name": "BNDES", "count": 4},
  {"name": "Central Ashaninka del Rio Ene CARE", "count": 4}
];

export const PART_COUNT: CountItem[] = [
  {"name": "Ellen Acioli (BID)", "count": 4},
  {"name": "Fany Kuiru Castro (COICA)", "count": 4},
  {"name": "Diego Inclan (INABIO Ecuador)", "count": 3},
  {"name": "Mariana Sarmiento (Terrasos)", "count": 3},
  {"name": "Marylaure Crettaz (Swiss Agency for Development and Cooperation SDC)", "count": 3},
  {"name": "Veronica Tejerina (BID)", "count": 3},
  {"name": "Alberto Akama (Museu Goeldi)", "count": 2},
  {"name": "Ana Carolina Vieira (AIC)", "count": 2},
  {"name": "Arnaldo Carneiro (Organizacao do Tratado de Cooperacao Amazonica OTCA)", "count": 2},
  {"name": "Beatriz Pires (Sitawi Financas do Bem)", "count": 2},
  {"name": "Camille Bemerguy (SEMAS-PA)", "count": 2},
  {"name": "Carina Pimenta (Secretaria Nacional de Bioeconomia)", "count": 2},
  {"name": "Carmen Rosa Garcia (Instituto de Pesquisa da Amazonia Peruana IIAP)", "count": 2},
  {"name": "Cecilia Guerra (Banco CAF)", "count": 2},
  {"name": "Colleen Scanlan Lyons (GCFtf)", "count": 2},
  {"name": "Constanza Montt (C-Minds)", "count": 2},
  {"name": "Eduardo Neves (USP)", "count": 2},
  {"name": "Gregory Watson (BID)", "count": 2},
  {"name": "Hanspeter Mock (Swiss Embassy)", "count": 2},
  {"name": "Joao Valsecchi (Instituto Mamiraua)", "count": 2}
];

export const INTERVIEWS: InterviewItem[] = [
  {"pillar": "Amazon cities and resilient infrastructure", "institution": "Rede Internacional de Cidades para a Vida na Amazonia (ORG)", "event": "Cidades para a Vida na Amazonia", "category": "Civil Society Organization / Non-profit", "country": "International; Latin America"},
  {"pillar": "Amazon cities and resilient infrastructure", "institution": "Ministerio de Integracao e Desenvolvimento Regional (MIDR)", "event": "Segurança hídrica e cooperação para resiliência climática na Amazônia", "category": "Government", "country": "Brazil"},
  {"pillar": "Amazon cities and resilient infrastructure", "institution": "Instituto Sinchi", "event": "Cidades na Amazônia: pessoas e natureza em harmonia", "category": "Science, Technology and Innovation", "country": "Colombia"},
  {"pillar": "Amazon cities and resilient infrastructure", "institution": "Fundacion para la Conservacion y el Desenvolvimento Sostenible FCDS", "event": "Um olhar 360 sobre a infraestrutura na Amazonia", "category": "Civil Society Organization / Non-profit", "country": "Colombia"},
  {"pillar": "Amazon cities and resilient infrastructure", "institution": "EcoCiencia Foundation", "event": "Um olhar 360 sobre a infraestrutura na Amazonia", "category": "Civil Society Organization / Non-profit", "country": "Ecuador"},
  {"pillar": "Amazon cities and resilient infrastructure", "institution": "Fundo Financeiro para Desenvolvimento da Bacia do Prata (FONPLATA)", "event": "Construindo cidades amazonicas resilientes - Parceria em acao", "category": "Multilateral", "country": "Bolivia"},
  {"pillar": "bioeconomy", "institution": "Associacao Sociocultural Yawanawa (ASCY) (ORG)", "event": "Fazendo com que os mercados de biodiversidade funcionem para os povos indigenas", "category": "Civil Society Organization / Non-profit", "country": "Brazil"},
  {"pillar": "bioeconomy", "institution": "Foundation for Forest Management and Production Control", "event": "Suriname 3.0  Roteiro estrategico para desenvolvimento territorial", "category": "Government", "country": "Suriname"},
  {"pillar": "bioeconomy", "institution": "Natura", "event": "Participação de jovens na cadeia da sociobiodiversidade", "category": "Private Sector", "country": "Brazil"},
  {"pillar": "bioeconomy", "institution": "Organizacao do Tratado de Cooperacao Amazonica OTCA", "event": "Territórios para a resiliência: conectando: conectando clima, florestas, riscos e economias na Amazônia", "category": "Multilateral", "country": "International"},
  {"pillar": "bioeconomy", "institution": "Instituto de Pesquisa da Amazonia Peruana IIAP", "event": "Bioeconomia amazônica potencializada pela ciência", "category": "Science, Technology and Innovation", "country": "Peru"},
  {"pillar": "bioeconomy", "institution": "Coordenacao Nacional de Articulacao das Comunidades Negras Rurais Quilombolas (CONAQ)", "event": "Bioeconomy em comunidades quilombolas e tradicionais", "category": "Civil Society Organization / Non-profit", "country": "Brazil"},
  {"pillar": "Financial innovation and inclusion", "institution": "Coordenacao das Organizacoes Indigenas da Amazonia Brasileira (COIAB) (ORG)", "event": "Fundos comunitários e o acesso ao financiamento direto", "category": "Civil Society Organization / Non-profit", "country": "Brazil"},
  {"pillar": "Financial innovation and inclusion", "institution": "Consejo Indigena del Pueblo Tacana CIPTA", "event": "Soluções sustentáveis a partir da Amazônia andina: bioeconomia e incentivos climáticos", "category": "Government", "country": "Bolivia"},
  {"pillar": "Financial innovation and inclusion", "institution": "Universidade Federal do Amazonas UFAM", "event": "Comunidades e diversidades amazônicas: universidade, projetos, financiamento e ação", "category": "Science, Technology and Innovation", "country": "Brazil"},
  {"pillar": "Financial innovation and inclusion", "institution": "Terrasos", "event": "Comunidade de práticas: créditos de biodiversidade que beneficiam as pessoas e o planeta", "category": "Private Sector", "country": "Colombia"},
  {"pillar": "Financial innovation and inclusion", "institution": "LACLIMA", "event": "Justica Climatica e Integridade na Amazonia engajamento do sector privado", "category": "Civil Society Organization / Non-profit", "country": "Regional; Latin America"},
  {"pillar": "Financial innovation and inclusion", "institution": "Nature Finance", "event": "Quais são os fatores de sucesso para instrumentos financeiros e bioeconomia", "category": "Civil Society Organization / Non-profit", "country": "Switzerland"},
  {"pillar": "Other emerging themes", "institution": "Fundacion Amigos de la Naturaleza (FAN) (ORG)", "event": "Um olhar novo para monitorar as ameaças na Amazônia", "category": "Civil Society Organization / Non-profit", "country": "Bolivia"},
  {"pillar": "Other emerging themes", "institution": "Inabio Ecuador", "event": "Caminhos para a ciência pan-amazônica", "category": "Science, Technology and Innovation", "country": "Ecuador"},
  {"pillar": "Other emerging themes", "institution": "Organizacao do Tratado de Cooperacao Amazonica OTCA", "event": "Ação coletiva para a prevenção de incêndios florestais", "category": "Multilateral", "country": "International"},
  {"pillar": "Other emerging themes", "institution": "Organizacion Regional de Pueblos Indigenas del Oriente (ORPIO)", "event": "Iniciativas indigenas para monitoramento e vigilancia territorial", "category": "Civil Society Organization / Non-profit", "country": "Peru"},
  {"pillar": "Other emerging themes", "institution": "Ministry of Oil  Gas and the Environment Suriname MINOGE", "event": "Suriname 3.0: um roteiro estratégico para o desenvolvimento territorial e econômico", "category": "Government", "country": "Suriname"},
  {"pillar": "Other emerging themes", "institution": "Wildlife Works", "event": "Fazendo com que os mercados de biodiversidade funcionem para os povos indigenas", "category": "Private Sector", "country": "USA"}
];

export const NETWORKS: NetworkData = {
  "finance": ["The Network of Ministers of Finance and Planning", "The Green Coalition", "The Amazonia Finance Network"],
  "policy": ["Network of ministries of Education", "Network of ministries of Environment", "The Forum of Ministers and High Authorities of Housing and Urban Development (MINURVI)", "Alliance for sustainable, resilient and integrated transport in Amazonia", "The BioAmazonia Research Network", "The Amazon Cities Forum", "PanAmazonia Network for Bioeconomy"],
  "strategic": ["World Bank", "Coordenação das Organizações Indígenas da Bacia Amazônica COICA", "Organização do Tratado de Cooperação Amazônica ACTO"]
};

export const DONORS: DonorItem[] = [
  {"program": "Amazon Bioeconomy and Forest Management Multidonor Fund (AMDTF)", "partners": "Germany; Netherlands; Switzerland; United Kingdom; Italy; Spanish Agency for International Development Cooperation (AECID)"},
  {"program": "GCF Fund on Bioeconomy", "partners": "Banco do Brasil; Brazilian Forest Service (SFB); National Bank for Economic and Social Development (BNDES)"},
  {"program": "Clean Energy Accelerator", "partners": "Climate Investment Fund (CIF); Global Energy for People and Planet Partnership (GEAPP)"},
  {"program": "Resilient Landscapes, Conservation and Bioeconomy", "partners": "Swedish International Development Cooperation Agency (Sida); Impact Fund Denmark; Norwegian Agency for Development Cooperation (Norad)"},
  {"program": "Cross-cutting / Institutional Support", "partners": "Italian Ministry of Environment and Energy Security (MASE); Spanish Agency for International Development Cooperation (AECID); Swiss State Secretariat for Economic Affairs (SECO); Belgium; Japan; Global Environment Facility (GEF); UK PACT; Green Coalition; Agence Wallonne à l’Exportation et aux Investissements Étrangers (AWEX); Israeli Ministry of Finance; Spain’s Ministry of Economic Affairs and Digital Transformation (MINECO); French Development Agency (AFD); Finland’s Ministry for Development Cooperation and Foreign Trade; German Ministry of Economic Cooperation and Development (BMZ); German Ministry of Economy and Climate Action (BMWK); Kreditanstalt für Wiederaufbau (KfW); Austria’s Ministry of Finance (BMF); Netherlands’ Ministry of Foreign Affairs; Japan International Cooperation Agency (JICA); Korea’s Ministry of Economy and Finance (MOEF); NEC"},
  {"program": "Private Sector and Foundations", "partners": "Banco Santander; BBVA; Fundación Mapfre; ONCE; Sacyr; BNP Paribas; Girindus Investments; Blue Like an Orange; Frankfurt Airport; Telefónica; Wayra; ICEX España Exportación e Inversiones (ICEX); Mouvement des Entreprises de France (MEDEF)"},
  {"program": "Academic Partners", "partners": "Seoul National University; Sophia University; Waseda University; London School of Economics and Political Science; IE University"}
];

export const PUBS: PubItem[] = [
  {"title": "Lancamento da Publicacao Emblematica do BID - Amazonia", "org": "BID", "link": ""},
  {"title": "Lancamento do Guia de Boas Praticas para a Sociobioeconomia", "org": "BID", "link": ""},
  {"title": "Vozes que EcoAm Lancamento do Mapeamento da Bioeconomia", "org": "Impact Hub Manaus", "link": ""},
  {"title": "Lancamento do White Paper Um Roteiro do Setor Privado para uma Amazonia Sustentavel", "org": "BID, Instituto Igarape", "link": "https://www.idbinvest.org/pt/publications/private-sector-roadmap-sustainable-amazonia"}
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
  "Bolivia": 1.3
};

export const ORG_CAT: Record<string, number> = {
  "Civil Society Organization / Non-profit": 50.5,
  "Government": 7.8,
  "Multilaterals": 20.9,
  "Private Sector": 4.4,
  "Science, Technology and Innovation": 16.5
};

export const ORG_CTY: Record<string, number> = {
  "Brazil": 35.9,
  "International; USA": 23.8,
  "Regional; Pan-Amazon": 9.7,
  "Switzerland": 5.3,
  "Colombia": 3.4,
  "Peru": 2.9,
  "USA": 2.4,
  "International": 2.4,
  "Regional; Andian": 1.5,
  "Regional; Latin America": 1.5,
  "United Kingdom": 1.5,
  "Netherlands": 1.0
};

export const AF_PILLARS: PctItem[] = [
  {"name": "Bioeconomy", "pct": 35.98},
  {"name": "Amazon cities and resilient infrasctruture", "pct": 11.11},
  {"name": "Financial innovation and inclusion", "pct": 22.22},
  {"name": "Other emerging themes", "pct": 30.69}
];

export const AF_SUBS: PctItem[] = [
  {"name": "Sustainable low-carbon agricuture", "pct": 6.45},
  {"name": "Supporting people and communities", "pct": 37.9},
  {"name": "Bioeconomy and creative economy", "pct": 27.82},
  {"name": "Combating deforestation", "pct": 19.35},
  {"name": "Cities connectivity and sustainable infrasctruture", "pct": 8.47}
];

export const COP30_PIL: PctItem[] = [
  {"name": "Supporting people and community", "pct": 31.58},
  {"name": "Bioeconomy and creative economy", "pct": 37.5},
  {"name": "Combating deforestation", "pct": 30.92},
  {"name": "Cities connectivity and sustainable infrastructure", "pct": 1.0},
  {"name": "Sustainable low-carbon agriculture", "pct": 20.59},
  {"name": "Human settlements & adaptation", "pct": 15.78},
  {"name": "Energy, industry & transport", "pct": 4.13},
  {"name": "Nature, forests & biodiversity", "pct": 31.07},
  {"name": "Health & social protection", "pct": 11.65},
  {"name": "Food systems and agriculture", "pct": 16.02},
  {"name": "Cross-cutting finance & tech", "pct": 21.36}
];
