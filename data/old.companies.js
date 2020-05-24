const companies = [
  {
    hubspot: {
      companyId: "793135668",
    },
    cif: "B84407188",
    name: "Farmacias Trebol",

    vertical: "Pharma",

    websiteUrl: "farmaciastrebol.com",
    domain: "farmaciastrebol.com",
    origin: "Old",
    phone: "0034 917319914",
    linkedin: "https://www.linkedin.com/company/farmacias-trebol",
  },
  {
    hubspot: {
      companyId: "791104817",
    },
    cif: "B99511966",
    name: "neoferr.com",

    vertical: "Crafts",

    websiteUrl: "neoferr.com",
    domain: "neoferr.com",
    origin: "Old",
    phone: "0034 622266916",
    linkedin:
      "https://www.linkedin.com/company/neoferr---ferreteria-on-line-y-suministros-industriales",
    carriers: "Nacex,Correos,UPS",
  },
  {
    hubspot: {
      companyId: "780903850",
    },
    cif: "A08691867",
    name: "Furest",
    region: "Barcelona",
    vertical: "Fashion and footwear",

    websiteUrl: "furest.com",
    domain: "furest.com",
    origin: "Old",
    phone: "0034 933012000",
    linkedin: "https://www.linkedin.com/company/e.-furest-sa",
    carriers: "MRW",
  },
  {
    hubspot: {
      companyId: "1799561946",
    },
    cif: "B25848490",
    name: "Teresa's Juicery",
    region: "Lleida",
    vertical: "Alimentation and drinks",

    websiteUrl: "teresacarles.com",
    domain: "teresacarles.com",
    origin: "Old",
    phone: "0034 933175664",
    linkedin: "https://www.linkedin.com/company/teresa-carles-healthy-foods",
    carriers: "Seur",
  },
  {
    hubspot: {
      companyId: "791271650",
    },
    cif: "A08224958",
    name: "YERSE",

    vertical: "Costumes",

    websiteUrl: "yerse.com",
    domain: "yerse.com",
    origin: "Old",
    phone: "0034 937451700",
    linkedin: "https://www.linkedin.com/company/yerse",
  },
  {
    hubspot: {
      companyId: "791487888",
    },
    cif: "B50152461",
    name: "JOCCA",
    region: "Zaragoza",
    vertical: "Furniture",

    websiteUrl: "jocca.es",
    domain: "jocca.es",
    origin: "Old",
    phone: "0034 976470648",
    linkedin: "https://www.linkedin.com/company/qualimax-international-jocca",
    carriers: "GLS",
  },
  {
    hubspot: {
      companyId: "791486547",
    },
    cif: "B18835694",
    name: "Osuna Sport (masmusculo.com)",

    vertical: "Sport",

    websiteUrl: "osunasport.com",
    domain: "osunasport.com",
    origin: "Old",
    phone: "0034 910609655",
    linkedin: "https://www.linkedin.com/company/masmusculo/",
    carriers: "Nacex,Correos,MRW",
  },
  {
    hubspot: {
      companyId: "2047626274",
    },
    cif: "B96352455",
    name: "Covaldroper Grupo",
    region: "Valencia",
    vertical: "Cleaning products",

    websiteUrl: "www.covaldropergrupo.com",
    domain: "covaldropergrupo.com",
    origin: "Old",
    phone: "0034 963134080",
    linkedin: "https://www.linkedin.com/company/covaldroper-grupo",
  },
  {
    hubspot: {
      companyId: "847656755",
    },
    cif: "B87265328",
    name: "Boston",
    region: "Madrid",
    vertical: "Fashion and footwear",

    websiteUrl: "bostonwear.com",
    domain: "bostonwear.com",
    origin: "Old",
    phone: "0034 961579219",
    linkedin: "https://www.linkedin.com/company/boston",
    carriers: "ASM",
  },
  {
    hubspot: {
      companyId: "791487970",
    },
    cif: "B61334009",
    name: "Bosanova Oficial",
    region: "Barcelona",
    vertical: "Fashion and footwear",

    websiteUrl: "bosanova.es",
    domain: "bosanova.es",
    origin: "Old",
    phone: "0034 934335217",
    linkedin: "https://www.linkedin.com/company/bosanova-barcelona",
    carriers: "Nacex,GLS",
  },
  {
    hubspot: {
      companyId: "761925483",
    },
    cif: "A15002637",
    name: "Estrella Galicia",
    region: "A Coruña",
    vertical: "Alimentation and drinks",

    websiteUrl: "estrellagalicia.es",
    domain: "estrellagalicia.es",
    origin: "Old",
    phone: "0034 952388911",
    linkedin:
      "http://linkedin.com/company/hijos-de-rivera-inversiones-corporativas-s.l.",
  },
  {
    hubspot: {
      companyId: "845522035",
    },
    cif: "A46953410",
    name: "Textils Mora",
    region: "Valencia",
    vertical: "Furniture",

    websiteUrl: "textilsmora.com",
    domain: "textilsmora.com",
    origin: "Old",
    phone: "0034 962385431",
    linkedin: "https://www.linkedin.com/company/textils-mora-s-a-l-",
  },
  {
    hubspot: {
      companyId: "809326130",
    },
    cif: "A46048799",
    name: "Ulanka Spain",
    region: "Valencia",
    vertical: "Fashion and footwear",

    websiteUrl: "ulanka.com",
    domain: "ulanka.com",
    origin: "Old",
    phone: "0034 954221579",
    linkedin: "https://www.linkedin.com/company/ulanka",
    carriers: "Correos",
  },
  {
    hubspot: {
      companyId: "793135757",
    },
    cif: "A08023780",
    name: "Servei Estacio",
    region: "Barcelona",
    vertical: "Crafts",

    websiteUrl: "serveiestacio.com",
    domain: "serveiestacio.com",
    origin: "Old",
    phone: "0034 658547900",
    linkedin: "https://www.linkedin.com/company/servicio-estaci-n-s.a.",
  },
  {
    hubspot: {
      companyId: "2084607225",
    },

    name: "Oatly Inc",

    vertical: "Alimentation and drinks",

    stats: {
      turnover: "200000000",
    },
    websiteUrl: "oatly.com",
    domain: "oatly.com",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/oatly-ab",
  },
  {
    hubspot: {
      companyId: "847656730",
    },
    cif: "B08615353",
    name: "Cerabella",
    region: "Barcelona",
    vertical: "Furniture",

    websiteUrl: "cerabella.com",
    domain: "cerabella.com",
    origin: "Old",
    phone: "0034 934410907",
    linkedin: "https://www.linkedin.com/company/cerabella-sl",
  },
  {
    hubspot: {
      companyId: "791487872",
    },
    cif: "B96527825",
    name: "Grupo BCF",
    region: "Valencia",
    vertical: "Furniture",

    websiteUrl: "grupobcf.com",
    domain: "grupobcf.com",
    origin: "Old",
    phone: "0034 962907637",
    linkedin: "https://www.linkedin.com/company/b&c-fabrics-s.l.",
  },
  {
    hubspot: {
      companyId: "791121623",
    },
    cif: "A59435594",
    name: "Polti Usa",
    region: "Barcelona",
    vertical: "Cleaning products",

    websiteUrl: "polti.com",
    domain: "polti.com",
    origin: "Old",
    phone: "0034 900535328",
    linkedin: "https://www.linkedin.com/company/polti-group",
    carriers: "Correos",
  },
  {
    hubspot: {
      companyId: "791486539",
    },
    cif: "B85991941",
    name: "Bq",
    region: "Madrid",
    vertical: "Consumer electronics",

    websiteUrl: "bq.com",
    domain: "bq.com",
    origin: "Old",
    phone: "0034 917875868",
    linkedin: "http://www.linkedin.com/company/5288822",
  },
  {
    hubspot: {
      companyId: "791270601",
    },
    cif: "B99307324",
    name: "Equivalenza",
    region: "Barcelona",
    vertical: "Cosmetics",

    websiteUrl: "equivalenza.com",
    domain: "equivalenza.com",
    origin: "Old",
    phone: "0034 932635733",
    linkedin: "https://www.linkedin.com/company/equivalenza",
  },
  {
    hubspot: {
      companyId: "2047089387",
    },
    cif: "A08092512",
    name: "Beter",
    region: "Barcelona",
    vertical: "Cosmetics",

    websiteUrl: "beter.es",
    domain: "beter.es",
    origin: "Old",
    phone: "0034 914618430",
    linkedin: "https://www.linkedin.com/company/industrias-beter",
    carriers: "TNT Express",
  },
  {
    hubspot: {
      companyId: "809326139",
    },
    cif: "B90383464",
    name: "Piel de Toro",
    region: "Sevilla",
    vertical: "Fashion and footwear",

    websiteUrl: "pieldetoro.com",
    domain: "pieldetoro.com",
    origin: "Old",
    phone: "0034 954122140",
    linkedin: "https://www.linkedin.com/company/piel-de-toro",
  },
  {
    hubspot: {
      companyId: "793135677",
    },
    cif: "A01043652",
    name: "Fotoprix",
    region: "Àlava",
    vertical: "Consumer electronics",

    websiteUrl: "fotoprix.com",
    domain: "fotoprix.com",
    origin: "Old",
    phone: "0034 656125137",
    linkedin: "https://www.linkedin.com/company/fotoprix",
  },
  {
    hubspot: {
      companyId: "791487962",
    },

    name: "Custo Barcelona",
    region: "Rimini",
    vertical: "Fashion and footwear",

    websiteUrl: "custo.com",
    domain: "custo.com",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/custo-barcelona_2",
  },
  {
    hubspot: {
      companyId: "791123314",
    },
    cif: "B43100403",
    name: "Mistral Bonsai",
    region: "Tarragona",
    vertical: "Gardening",

    websiteUrl: "mistralbonsai.com",
    domain: "mistralbonsai.com",
    origin: "Old",
    phone: "0034 977471019",
    linkedin: "https://www.linkedin.com/company/mistral-bonsai-sl",
    carriers: "ASM,DHL",
  },
  {
    hubspot: {
      companyId: "791123285",
    },
    cif: "A28848836",
    name: "Douglas",
    region: "Madrid",
    vertical: "Cosmetics",

    websiteUrl: "douglas.es",
    domain: "douglas.es",
    origin: "Old",
    phone: "0034 900866634",

    carriers: "MRW",
  },
  {
    hubspot: {
      companyId: "773504723",
    },
    cif: "A25039199",
    name: "TOUS",
    region: "Barcelona",
    vertical: "Costume jewelery and jewelery",

    websiteUrl: "tous.com",
    domain: "tous.com",
    origin: "Old",
    phone: "0034 938784444",
    linkedin: "https://www.linkedin.com/company/tous",
  },
  {
    hubspot: {
      companyId: "2465437357",
    },
    cif: "B86811627",
    name: "Mulaya",
    region: "Madrid",
    vertical: "Fashion and footwear",

    websiteUrl: "mulaya.com",
    domain: "mulaya.com",
    origin: "Old",
    phone: "0034 913090460",
    linkedin: "https://www.linkedin.com/company/mulaya",
    carriers: "MRW",
  },
  {
    hubspot: {
      companyId: "2428756321",
    },
    cif: "B95352936",
    name: "Joyería Suárez",
    region: "Bilbao",
    vertical: "Costume jewelery and jewelery",

    websiteUrl: "joyeriasuarez.com",
    domain: "joyeriasuarez.com",
    origin: "Old",
    phone: "0034 932725270",
    linkedin: "https://www.linkedin.com/company/joyeriasuarez/",
    carriers: "Fedex",
  },
  {
    hubspot: {
      companyId: "2087783211",
    },
    cif: "B63523609",
    name: "Pronovias",
    region: "Barcelona",
    vertical: "Fashion and footwear",

    websiteUrl: "pronovias.com",
    domain: "pronovias.com",
    origin: "Old",
    phone: "0034 900100075",
    linkedin: "https://www.linkedin.com/company/pronovias",
  },
  {
    hubspot: {
      companyId: "2084604929",
    },
    cif: "B66689571",
    name: "SUNNO BY BENE CAPE",
    region: "Barcelona",
    vertical: "Fashion and footwear",

    websiteUrl: "sunnobybenecape.com",
    domain: "sunnobybenecape.com",
    origin: "Old",

    carriers: "DHL",
  },
  {
    hubspot: {
      companyId: "1302348073",
    },
    cif: "A03003324",
    name: "INJUSA",
    region: "Alicante",
    vertical: "Toy store",

    websiteUrl: "injusa.com",
    domain: "injusa.com",
    origin: "Old",
    phone: "0034 965550862",
    linkedin:
      "https://www.linkedin.com/company/industrial-juguetera-s.a.-injusa",
  },
  {
    hubspot: {
      companyId: "1253665584",
    },
    cif: "B83640706",
    name: "Lush",
    region: "Madrid",
    vertical: "Fashion and footwear",

    websiteUrl: "lush.es",
    domain: "lush.es",
    origin: "Old",
    phone: "0034 934102584",
    linkedin: "https://www.linkedin.com/company/lush-fresh-handmade-cosmetics",
  },
  {
    hubspot: {
      companyId: "1109620454",
    },

    name: "Ben & Frank",
    region: "Mexico",
    vertical: "Fashion and footwear",

    stats: {
      turnover: "6710000",
    },
    websiteUrl: "benandfrank.com",
    domain: "benandfrank.com",
    origin: "Old",
    phone: "0052 5512051050",
    linkedin: "https://www.linkedin.com/company/ben-&-frank",
  },
  {
    hubspot: {
      companyId: "847656733",
    },
    cif: "B59131235",
    name: "Atlantis Internacional",
    region: "Barcelona",
    vertical: "Consumer electronics",

    websiteUrl: "atlantistelecom.com",
    domain: "atlantistelecom.com",
    origin: "Old",
    phone: "0034 933369797",
    linkedin: "https://www.linkedin.com/company/atlantis-internacional-s-l-",
  },
  {
    hubspot: {
      companyId: "845413862",
    },
    cif: "A08053167",
    name: "UNION SUIZA",
    region: "Barcelona",
    vertical: "Costume jewelery and jewelery",

    websiteUrl: "unionsuiza.com",
    domain: "unionsuiza.com",
    origin: "Old",
    phone: "0034 932184542",
    linkedin: "https://www.linkedin.com/company/union-suiza-s-a-",
  },
  {
    hubspot: {
      companyId: "801936790",
    },
    cif: "A08626939",
    name: "CASAS",
    region: "Barcelona",
    vertical: "Fashion and footwear",

    websiteUrl: "casasclub.com",
    domain: "casasclub.com",
    origin: "Old",
    phone: "0034 902423324",
    linkedin: "https://www.linkedin.com/company/casasclub",
  },
  {
    hubspot: {
      companyId: "791123394",
    },

    name: "Vilebrequin",
    region: "Suiza",
    vertical: "Fashion and footwear",

    stats: {
      turnover: "50000000",
    },
    websiteUrl: "vilebrequin.com",
    domain: "vilebrequin.com",
    origin: "Old",
    phone: "0044 1332408004",
    linkedin: "https://www.linkedin.com/company/vilebrequin",
  },
  {
    hubspot: {
      companyId: "791123304",
    },
    cif: "B62505524",
    name: "Onedirect",
    region: "Barcelona",
    vertical: "Consumer electronics",

    websiteUrl: "onedirect.es",
    domain: "onedirect.es",
    origin: "Old",
    phone: "0034 900802626",
    linkedin: "https://www.linkedin.com/company/onedirect",
  },
  {
    hubspot: {
      companyId: "791272700",
    },

    name: "Volcom",
    region: "Francia",
    vertical: "Fashion and footwear",

    stats: {
      turnover: "380000000",
    },
    websiteUrl: "volcom.com",
    domain: "volcom.com",
    origin: "Old",
    phone: "001 9496462175",
    linkedin: "https://www.linkedin.com/company/volcom",
  },
  {
    hubspot: {
      companyId: "791121463",
    },
    cif: "B94059367",
    name: "Opirata.com",
    region: "Pontevedra",
    vertical: "Consumer electronics",

    websiteUrl: "opirata.com",
    domain: "opirata.com",
    origin: "Old",
    phone: "0034 902008171",
    linkedin: "https://www.linkedin.com/company/opirata.com",
  },
  {
    hubspot: {
      companyId: "791104865",
    },
    cif: "B26284364",
    name: "TUC TUC",
    region: "La Rioja",
    vertical: "Fashion and footwear",

    websiteUrl: "tuctuc.com",
    domain: "tuctuc.com",
    origin: "Old",
    phone: "0034 941252278",
    linkedin: "https://www.linkedin.com/company/tuc-tuc",
  },
  {
    hubspot: {
      companyId: "2527620083",
    },
    cif: "B63799092",
    name: "Smash",
    region: "Barcelona",
    vertical: "Fashion and footwear",

    websiteUrl: "smash-wear.com",
    domain: "smash-wear.com",
    origin: "Old",
    phone: "0034 934655729",
    linkedin: "https://www.linkedin.com/company/smash-barcelona",
  },
  {
    hubspot: {
      companyId: "2084604912",
    },
    cif: "A28100717",
    name: "MIRTO",
    region: "Madrid",
    vertical: "Fashion and footwear",

    websiteUrl: "mirto.com",
    domain: "mirto.com",
    origin: "Old",
    phone: "0034 914402956",
    linkedin: "https://www.linkedin.com/company/mirto",
  },
  {
    hubspot: {
      companyId: "2047103720",
    },
    cif: "B81733503",
    name: "Benefit Cosmetics LLC",
    region: "Madrid",
    vertical: "Cosmetics",

    websiteUrl: "benefitcosmetics.com",
    domain: "benefitcosmetics.com",
    origin: "Old",
    phone: "0034 913582773",
    linkedin: "https://www.linkedin.com/company/benefit-cosmetics",
  },
  {
    hubspot: {
      companyId: "1646550022",
    },
    cif: "B60035912",
    name: "Natura",
    region: "Barcelona",
    vertical: "Fashion and footwear",

    websiteUrl: "naturaselection.com",
    domain: "naturaselection.com",
    origin: "Old",
    phone: "0034 934941460",
    linkedin: "https://www.linkedin.com/company/natura-selection",
  },
  {
    hubspot: {
      companyId: "792768131",
    },

    name: "Nomination Srl",
    region: "Florencia",
    vertical: "Costume jewelery and jewelery",

    stats: {
      turnover: "29000000",
    },
    websiteUrl: "nomination.com",
    domain: "nomination.com",
    origin: "Old",
    phone: "0039 055 425471",
    linkedin: "https://www.linkedin.com/company/nomination-italy",
  },
  {
    hubspot: {
      companyId: "791485521",
    },
    cif: "A28371912",
    name: "Vinoselección S.A.",
    region: "Madrid",
    vertical: "Alimentation and drinks",

    stats: {
      monthlyShipments: "15315",
    },
    websiteUrl: "vinoseleccion.com",
    domain: "vinoseleccion.com",
    origin: "Old",
    phone: "0034 902253525",
    linkedin: "https://www.linkedin.com/company/vinoseleccion",
  },
  {
    hubspot: {
      companyId: "802215458",
    },
    cif: "A92016344",
    name: "Neck & neck",
    region: "Madrid",
    vertical: "Childcare",

    websiteUrl: "www.neckandneck.com",
    domain: "neckandneck.com",
    origin: "Old",
    phone: "0034 916781830",
    linkedin: "https://www.linkedin.com/company/neck-&-neck/about/",
  },
  {
    hubspot: {
      companyId: "792768123",
    },
    cif: "A08876674",
    name: "Munich",
    region: "Barcelona",
    vertical: "Sport",

    websiteUrl: "munichsport.com",
    domain: "munichsport.com",
    origin: "Old",
    phone: "0034 935953265",
    linkedin: "https://www.linkedin.com/company/berneda-sa---munich",
  },
  {
    hubspot: {
      companyId: "791486529",
    },
    cif: "A08008583",
    name: "Macson",
    region: "Barcelona",
    vertical: "Fashion and footwear",

    websiteUrl: "macson.es",
    domain: "macson.es",
    origin: "Old",
  },
  {
    hubspot: {
      companyId: "1116539215",
    },
    cif: "A08189359",
    name: "Epidor",
    region: "Barcelona",
    vertical: "Crafts",

    websiteUrl: "epidor.com",
    domain: "epidor.com",
    origin: "Old",
  },
  {
    hubspot: {
      companyId: "858425405",
    },
    cif: "A33029976",
    name: "Norvil",
    region: "Gijón",
    vertical: "Fashion and footwear",

    websiteUrl: "norvilsa.com",
    domain: "norvilsa.com",
    origin: "Old",
  },
  {
    hubspot: {
      companyId: "847656725",
    },
    cif: "A08220428",
    name: "Naulover",
    region: "Barcelona",
    vertical: "Fashion and footwear",

    websiteUrl: "naulover.com",
    domain: "naulover.com",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/naulover-sa/",
  },
  {
    hubspot: {
      companyId: "846531930",
    },
    cif: "B64266851",
    name: "Sportlast",
    region: "Barcelona",
    vertical: "Sport",

    websiteUrl: "sportlast.es",
    domain: "sportlast.es",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/snowfactory/",
  },
  {
    hubspot: {
      companyId: "846721446",
    },
    cif: "B46016408",
    name: "Rapife",
    region: "Valencia",
    vertical: "Fashion and footwear",

    websiteUrl: "rapife.com",
    domain: "rapife.com",
    origin: "Old",
    phone: "0034 962909011",
  },
  {
    hubspot: {
      companyId: "842968287",
    },
    cif: "A58666330",
    name: "Etxart & Panno",
    region: "Barcelona",
    vertical: "Fashion and footwear",

    websiteUrl: "www.etxartpanno.com",
    domain: "etxartpanno.com",
    origin: "Old",
    phone: "0034 933006222",
    linkedin: "https://www.linkedin.com/company/etxart-&-panno-u.s./",
  },
  {
    hubspot: {
      companyId: "842968270",
    },
    cif: "A59060491",
    name: "Punto blanco",
    region: "Barcelona",
    vertical: "Fashion and footwear",

    websiteUrl: "puntoblanco.com",
    domain: "puntoblanco.com",
    origin: "Old",
    phone: "0034 900189189",
    linkedin: "https://www.linkedin.com/company/industrias-valls-1-s.a./",
  },
  {
    hubspot: {
      companyId: "842670768",
    },
    cif: "A58085267",
    name: "Anna Mora & Brunella",
    region: "Barcelona",
    vertical: "Fashion and footwear",

    websiteUrl: "www.annamora.es",
    domain: "annamora.es",
    origin: "Old",
    phone: "0034 937883162",
    linkedin: "https://www.linkedin.com/company/anna-mora-brunella/",
  },
  {
    hubspot: {
      companyId: "801932141",
    },
    cif: "A29238599",
    name: "Pinturas Andalucía",
    region: "Malaga",
    vertical: "Crafts",

    websiteUrl: "www.pinturas-andalucia.com",
    domain: "pinturas-andalucia.com",
    origin: "Old",
    phone: "0034 952478508",
    linkedin: "https://www.linkedin.com/company/pinturas-andalucia/",
  },
  {
    hubspot: {
      companyId: "791488007",
    },
    cif: "B99268047",
    name: "Farmacia Vázquez",
    region: "Zaragoza",
    vertical: "Pharma",

    websiteUrl: "www.farma-vazquez.com",
    domain: "farma-vazquez.com",
    origin: "Old",
    phone: "0034 976487038",
    linkedin:
      "https://www.linkedin.com/company/farmavazquez-tu-tienda-online-24h/",
  },
  {
    hubspot: {
      companyId: "791487947",
    },
    cif: "B65894008",
    name: "Degustabox",
    region: "Barcelona",
    vertical: "Alimentation and drinks",

    websiteUrl: "degustabox.com",
    domain: "degustabox.com",
    origin: "Old",
    phone: "0034 931807051",
    linkedin: "https://www.linkedin.com/company/degustabox/",
  },
  {
    hubspot: {
      companyId: "791123383",
    },
    cif: "A78119773",
    name: "Norauto",
    region: "Valencia",
    vertical: "Automotive",

    websiteUrl: "www.norauto.es",
    domain: "norauto.es",
    origin: "Old",
    phone: "0034 978031101",
    linkedin: "https://www.linkedin.com/company/norauto-espa%C3%B1a/",
  },
  {
    hubspot: {
      companyId: "791487890",
    },
    cif: "B88294418",
    name: "USA Fitness",
    region: "Madrid",
    vertical: "Sport",

    websiteUrl: "usafitness.es",
    domain: "usafitness.es",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/usafitness/",
  },
  {
    hubspot: {
      companyId: "791272788",
    },
    cif: "B73961971",
    name: "Xti",
    region: "Murcia",
    vertical: "Fashion and footwear",

    websiteUrl: "xti.es",
    domain: "xti.es",
    origin: "Old",
    phone: "0034 968791857",
    linkedin: "https://www.linkedin.com/company/xti-footwear/",
  },
  {
    hubspot: {
      companyId: "791123258",
    },
    cif: "A53165858",
    name: "Paco Martinez",
    region: "Valencia",
    vertical: "Fashion and footwear",

    websiteUrl: "www.pacomartinez.com",
    domain: "pacomartinez.com",
    origin: "Old",
    phone: "0034 902102410",
    linkedin: "https://www.linkedin.com/company/paco-martinez/",
  },
  {
    hubspot: {
      companyId: "791123239",
    },
    cif: "B66305988",
    name: "Basi Group",
    region: "Girona",
    vertical: "Fashion and footwear",

    websiteUrl: "www.basi-group.com",
    domain: "basi-group.com",
    origin: "Old",
    phone: "0034 931162520",
    linkedin: "https://www.linkedin.com/company/basi-s-a/",
  },
  {
    hubspot: {
      companyId: "791121578",
    },
    cif: "B67433128",
    name: "Mequedouno",
    region: "Barcelona",
    vertical: "Consumer electronics",

    websiteUrl: "www.mequedouno.com",
    domain: "mequedouno.com",
    origin: "Old",
    phone: "0034  931855284",
    linkedin: "https://www.linkedin.com/company/mequedouno/",
  },
  {
    hubspot: {
      companyId: "791486518",
    },
    cif: "B46930541",
    name: "Paco Perfumerías",
    region: "Valencia",
    vertical: "Cosmetics",

    websiteUrl: "www.pacoperfumerias.com",
    domain: "pacoperfumerias.com",
    origin: "Old",
    phone: "0034 961560862",
    linkedin: "https://www.linkedin.com/company/paco-perfumer-as/",
  },
  {
    hubspot: {
      companyId: "791271632",
    },
    cif: "B93087138",
    name: "Tiendanimal",
    region: "Málaga",
    vertical: "Pets",

    websiteUrl: "www.tiendanimal.es",
    domain: "tiendanimal.es",
    origin: "Old",
    phone: "0034 900844062",
    linkedin: "https://www.linkedin.com/company/tiendanimal/",
  },
  {
    hubspot: {
      companyId: "791471593",
    },
    cif: "B54754718",
    name: "Hawkers",
    region: "Alicante",
    vertical: "Fashion and footwear",

    websiteUrl: "www.hawkersco.com",
    domain: "hawkersco.com",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/play-hawkers-sl/",
  },
  {
    hubspot: {
      companyId: "791471380",
    },
    cif: "B63286249",
    name: "Nekane",
    region: "Barcelona",
    vertical: "Fashion and footwear",

    websiteUrl: "www.nkn.es",
    domain: "nkn.es",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/nkn-nekane/",
  },
  {
    hubspot: {
      companyId: "847656716",
    },
    cif: "B28256873",
    name: "Stor",
    region: "Madrid",
    vertical: "Toy store",

    websiteUrl: "www.storline.com",
    domain: "storline.com",
    origin: "Old",
    phone: "0034 911213450",
    linkedin: "https://www.linkedin.com/company/storsl/",
  },
  {
    hubspot: {
      companyId: "847656675",
    },
    cif: "A08667370",
    name: "IMC Toys",
    region: "Barcelona",
    vertical: "Toy store",

    websiteUrl: "imctoys.com",
    domain: "imctoys.com",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/imc-toys/",
  },
  {
    hubspot: {
      companyId: "846531941",
    },
    cif: "F20033817",
    name: "Columbus",
    region: "Gipuzkoa",
    vertical: "Sport",

    websiteUrl: "www.columbus-outdoor.com",
    domain: "columbus-outdoor.com",
    origin: "Old",
    phone: "0034 663307809",
  },
  {
    hubspot: {
      companyId: "845522051",
    },
    cif: "A08677049",
    name: "Zwilling",
    region: "Barcelona",
    vertical: "Furniture",

    websiteUrl: "zwilling.es",
    domain: "zwilling.es",
    origin: "Old",
    phone: "0034 934800130",
    linkedin: "https://www.linkedin.com/company/zwilling-j-a--henckels-llc/",
  },
  {
    hubspot: {
      companyId: "791123290",
    },
    cif: "B61242269",
    name: "Solmania",
    region: "Barcelona",
    vertical: "Pharma",

    websiteUrl: "www.solmania.com",
    domain: "solmania.com",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/solmania/",
  },
  {
    hubspot: {
      companyId: "791121484",
    },
    cif: "A78792900",
    name: "Ehosa",
    region: "Madrid",
    vertical: "Alimentation and drinks",

    websiteUrl: "www.ehosa.es/",
    domain: "ehosa.es",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/ehosa/",
  },
  {
    hubspot: {
      companyId: "2502633518",
    },
    cif: "B59794479",
    name: "Agatha Paris",
    region: "Barcelona",
    vertical: "Costume jewelery and jewelery",

    websiteUrl: "www.agatha.es",
    domain: "agatha.es",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/agathaparis/",
  },
  {
    hubspot: {
      companyId: "863751306",
    },
    cif: "B82871013",
    name: "Tino González",
    region: "Madrid",
    vertical: "Fashion and footwear",

    websiteUrl: "www.tinogonzalez.com",
    domain: "tinogonzalez.com",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/grupo-tg-factory-s.l./",
  },
  {
    hubspot: {
      companyId: "842968105",
    },
    cif: "B50108430",
    name: "Losan",
    region: "Zaragoza",
    vertical: "Childcare",

    websiteUrl: "www.losan.com",
    domain: "losan.com",
    origin: "Old",
    phone: "0034 976639000",
    linkedin: "https://www.linkedin.com/company/comercial-losan-s.l.u./",
  },
  {
    hubspot: {
      companyId: "842000289",
    },
    cif: "B17372475",
    name: "Naf Naf",
    region: "Girona",
    vertical: "Fashion and footwear",

    websiteUrl: "www.nafnaf.es",
    domain: "nafnaf.es",
    origin: "Old",
    phone: "0034 972596800",
    linkedin: "https://www.linkedin.com/company/nafnafespa%C3%B1a/",
  },
  {
    hubspot: {
      companyId: "809192971",
    },
    cif: "B36283372",
    name: "Krack",
    region: "Pontevedra",
    vertical: "Fashion and footwear",

    websiteUrl: "www.krackonline.com",
    domain: "krackonline.com",
    origin: "Old",
    phone: "0034 900402005",
    linkedin: "https://www.linkedin.com/company/krack-zapaterias/",
  },
  {
    hubspot: {
      companyId: "802215459",
    },
    cif: "B65579369",
    name: "Cal Fruitós",
    region: "Barcelona",
    vertical: "Alimentation and drinks",

    websiteUrl: "www.calfruitos.com",
    domain: "calfruitos.com",
    origin: "Old",
    phone: "0034 932608800",
  },
  {
    hubspot: {
      companyId: "802215432",
    },
    cif: "B73676413",
    name: "New padel",
    region: "Murcia",
    vertical: "Sport",

    websiteUrl: "www.newpadel.net",
    domain: "newpadel.net",
    origin: "Old",
    phone: "0034 968976391",
    linkedin: "https://www.linkedin.com/company/sport-club-padel-nuestro-s-l/",
  },
  {
    hubspot: {
      companyId: "791487974",
    },

    name: "Vireco",
    region: "Sevilla",
    vertical: "Furniture",

    websiteUrl: "vireco.es",
    domain: "vireco.es",
    origin: "Old",
    phone: "0034 954165761",
  },
  {
    hubspot: {
      companyId: "791271585",
    },
    cif: "A28318871",
    name: "Osborne",
    region: "Madrid",
    vertical: "Alimentation and drinks",

    websiteUrl: "www.osborne.es",
    domain: "osborne.es",
    origin: "Old",
    phone: "0034  900525814",
    linkedin: "https://www.linkedin.com/company/grupo-osborne/",
  },
  {
    hubspot: {
      companyId: "791471428",
    },

    name: "Corbetos boots",
    region: "Barcelona",
    vertical: "Fashion and footwear",

    websiteUrl: "www.corbetosboots.com",
    domain: "corbetosboots.com",
    origin: "Old",
    phone: "0034  933020642",
    linkedin: "https://www.linkedin.com/company/corbeto%E2%80%99s-boots/",
  },
  {
    hubspot: {
      companyId: "2084611545",
    },
    cif: "B62889464",
    name: "Gedo",

    vertical: "Sport",

    websiteUrl: "www.gedo.es",
    domain: "gedo.es",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/gedo-distridep-s.l./",
  },
  {
    hubspot: {
      companyId: "2084604934",
    },
    cif: "B98822661",
    name: "Kamasana",
    region: "Valencia",
    vertical: "Furniture",

    websiteUrl: "www.kamasana.com",
    domain: "kamasana.com",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/kamasana-relax-sl/",
  },
  {
    hubspot: {
      companyId: "2084606133",
    },
    cif: "B24236119",
    name: "Bodegas Godelia",
    region: "León",
    vertical: "Wine",

    websiteUrl: "www.godelia.es/",
    domain: "godelia.es",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/bodegas-godelia-s.l./",
  },
  {
    hubspot: {
      companyId: "1815050979",
    },
    cif: "B53663076",
    name: "Hispanitas",
    region: "Alicante",
    vertical: "Fashion and footwear",

    websiteUrl: "www.hispanitas.com",
    domain: "hispanitas.com",
    origin: "Old",
  },
  {
    hubspot: {
      companyId: "1076394055",
    },
    cif: "B65189599",
    name: "Bodas.net",
    region: "Barcelona",
    vertical: "Fashion and footwear",

    websiteUrl: "www.bodas.net",
    domain: "bodas.net",
    origin: "Old",
    phone: "0034 935519583",
    linkedin: "https://www.linkedin.com/company/www-bodas-net/",
  },
  {
    hubspot: {
      companyId: "847656681",
    },
    cif: "B86787934",
    name: "Bigben",
    region: "Madrid",
    vertical: "Consumer electronics",

    websiteUrl: "www.bigbenespana.es",
    domain: "bigbenespana.es",
    origin: "Old",
    phone: "0034 917371816",
    linkedin:
      "https://www.linkedin.com/company/bigben-interactive-espa%C3%B1a/",
  },
  {
    hubspot: {
      companyId: "846531948",
    },
    cif: "B54365036",
    name: "Farrutx",
    region: "Alicante",
    vertical: "Fashion and footwear",

    websiteUrl: "www.farrutx.com",
    domain: "farrutx.com",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/ff-farrutx/",
  },
  {
    hubspot: {
      companyId: "846721458",
    },
    cif: "B50027929",
    name: "Relax",
    region: "Zaragoza",
    vertical: "Furniture",

    websiteUrl: "www.relax.es/",
    domain: "relax.es",
    origin: "Old",
    phone: "0034 976145400",
  },
  {
    hubspot: {
      companyId: "846531943",
    },
    cif: "B87545158",
    name: "Kling",
    region: "Madrid",
    vertical: "Fashion and footwear",

    websiteUrl: "www.kling.es",
    domain: "kling.es",
    origin: "Old",
    phone: "0034 915398491",
    linkedin: "https://www.linkedin.com/company/wearekling-sl/",
  },
  {
    hubspot: {
      companyId: "845413858",
    },
    cif: "B70070958",
    name: "Nanos",
    region: "A Coruña",
    vertical: "Childcare",

    websiteUrl: "www.nanos.es",
    domain: "nanos.es",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/karpi-confeccion-sl/",
  },
  {
    hubspot: {
      companyId: "842968286",
    },
    cif: "A46023446",
    name: "Manterol Casa",
    region: "Valencia",
    vertical: "Furniture",

    websiteUrl: "www.manterolcasa.com",
    domain: "manterolcasa.com",
    origin: "Old",
    phone: "0034 962916345",
    linkedin: "https://www.linkedin.com/company/manterol-grupo/",
  },
  {
    hubspot: {
      companyId: "767782341",
    },
    cif: "A58815531",
    name: "Grup Gamma",
    region: "Barcelona",
    vertical: "Furniture",

    websiteUrl: "www.gamma.es",
    domain: "gamma.es",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/grup-gamma-s-a-/",
  },
  {
    hubspot: {
      companyId: "845522046",
    },
    cif: "A01050475",
    name: "Proged",
    region: "Alava",
    vertical: "Fashion and footwear",

    websiteUrl: "www.proged.com/",
    domain: "proged.com",
    origin: "Old",
    phone: "0034 945291515",
    linkedin: "https://www.linkedin.com/company/proged-group/",
  },
  {
    hubspot: {
      companyId: "842002136",
    },
    cif: "B62603725",
    name: "Deer Foot Sport",
    region: "Barcelona",
    vertical: "Sport",

    websiteUrl: "shop.deerfootsport.com",
    domain: "shop.deerfootsport.com",
    origin: "Old",
    phone: "0034 934802467",
  },
  {
    hubspot: {
      companyId: "801933252",
    },
    cif: "A58327859",
    name: "Conservas Dani",
    region: "Barcelona",
    vertical: "Alimentation and drinks",

    websiteUrl: "www.conservasdanionline.es/",
    domain: "conservasdanionline.es",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/conservas-dani-sau/",
  },
  {
    hubspot: {
      companyId: "791487976",
    },
    cif: "A82528548",
    name: "Yoigo",
    region: "Madrid",
    vertical: "Consumer electronics",

    websiteUrl: "https://www.yoigo.com/",
    domain: "yoigo.com",
    origin: "Old",
  },
  {
    hubspot: {
      companyId: "791487933",
    },
    cif: "B27013713",
    name: "Cafés Candelas",
    region: "Lugo",
    vertical: "Alimentation and drinks",

    websiteUrl: "www.cafescandelas.com/tienda",
    domain: "cafescandelas.com",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/cafescandelas/",
  },
  {
    hubspot: {
      companyId: "842002375",
    },
    cif: "B36610525",
    name: "Selmark",
    region: "Pontevedra",
    vertical: "Fashion and footwear",

    websiteUrl: "selmarklingerie.com",
    domain: "selmarklingerie.com",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/selmark-slu/",
  },
  {
    hubspot: {
      companyId: "842002420",
    },
    cif: "B36695138",
    name: "Pili Carrera",
    region: "Pontevedra",
    vertical: "Fashion and footwear",

    websiteUrl: "www.pilicarrera.com/",
    domain: "pilicarrera.com",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/pili-carrera/",
  },
  {
    hubspot: {
      companyId: "846721462",
    },
    cif: "A08937435",
    name: "Educa Borras",
    region: "Barcelona",
    vertical: "Toy store",

    websiteUrl: "www.educaborras.com",
    domain: "educaborras.com",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/educa-borras-group/",
  },
  {
    hubspot: {
      companyId: "800192995",
    },
    cif: "A17014713",
    name: "Charcutería Noel",
    region: "Girona",
    vertical: "Alimentation and drinks",

    websiteUrl: "www.noel.es",
    domain: "noel.es",
    origin: "Old",
    phone: "0034 972290700",
    linkedin: "https://www.linkedin.com/company/noel-alimentaria-s-a-u-/",
  },
  {
    hubspot: {
      companyId: "791123531",
    },
    cif: "B76086925",
    name: "Sabina",
    region: "Las Palmas",
    vertical: "Cosmetics",

    websiteUrl: "www.sabinastore.com",
    domain: "sabinastore.com",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/wearesabina/",
  },
  {
    hubspot: {
      companyId: "791487973",
    },
    cif: "B54135918",
    name: "Pedro Garcia",
    region: "Alicante",
    vertical: "Fashion and footwear",

    websiteUrl: "www.pedrogarcia.com",
    domain: "pedrogarcia.com",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/pedro-garcia/",
  },
  {
    hubspot: {
      companyId: "791272828",
    },
    cif: "A32005746",
    name: "Roberto Verino",
    region: "Ourense",
    vertical: "Fashion and footwear",

    websiteUrl: "www.robertoverino.com",
    domain: "robertoverino.com",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/roberto-verino/",
  },
  {
    hubspot: {
      companyId: "791272841",
    },
    cif: "B88162284",
    name: "Motu Fashion",
    region: "Alicante",
    vertical: "Fashion and footwear",

    websiteUrl: "www.motufashion.com",
    domain: "motufashion.com",
    origin: "Old",
    phone: "0034 633428134",
  },
  {
    hubspot: {
      companyId: "791123294",
    },
    cif: "A08375545",
    name: "Editorial Vicens Vives",
    region: "Barcelona",
    vertical: "Miscelania",

    websiteUrl: "shop.vicensvives.com",
    domain: "shop.vicensvives.com",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/editorial-vicens-vives/",
  },
  {
    hubspot: {
      companyId: "791486711",
    },
    cif: "B58442500",
    name: "Optica Universitaria",
    region: "Barcelona",
    vertical: "Fashion and footwear",

    websiteUrl: "www.opticauniversitaria.es",
    domain: "opticauniversitaria.es",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/optica-universitaria/",
  },
  {
    hubspot: {
      companyId: "791104866",
    },
    cif: "A20020277",
    name: "Unceta",
    region: "Gipuzkoa",
    vertical: "Crafts",

    websiteUrl: "ecommerce.unceta.es/",
    domain: "ecommerce.unceta.es",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/grupo-unceta-s.a./",
  },
  {
    hubspot: {
      companyId: "791471595",
    },
    cif: "B84577642",
    name: "Salvador Bachiller",
    region: "Madrid",
    vertical: "Fashion and footwear",

    websiteUrl: "www.salvadorbachiller.es",
    domain: "salvadorbachiller.es",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/salvador-bachiller/",
  },
  {
    hubspot: {
      companyId: "791104797",
    },
    cif: "B62135652",
    name: "Lupo Barcelona",
    region: "Barcelona",
    vertical: "Fashion and footwear",

    websiteUrl: "www.lupobarcelona.com",
    domain: "lupobarcelona.com",
    origin: "Old",
    phone: "0034 934555940",
    linkedin: "https://www.linkedin.com/company/lupo-barcelona/",
  },
  {
    hubspot: {
      companyId: "791471473",
    },
    cif: "A08267403",
    name: "Garcia Carrion",
    region: "Murcia",
    vertical: "Alimentation and drinks",

    websiteUrl: "garciacarrion.com/",
    domain: "garciacarrion.com",
    origin: "Old",

    linkedin: "https://www.linkedin.com/company/garcia-carrion/",
  },
];

module.exports = companies;
