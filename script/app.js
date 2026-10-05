const LOCAL_STORAGE_KEY = 'girs_user_profile_data';

// ============================================================
// 1. ARREGLO DE ARMAS DE 5 ESTRELLAS (75 en total)
// ============================================================
const WEAPONS_5_STAR = [
  "Agitador del Relámpago", "Alas Celestiales", "Albores de la Historia", "Allende la Crisálida",
  "Aqua Simulacra", "Aquila Favonia", "Arco de Amos", "Athame Artis", "Axioma de la Kagura",
  "Báculo de Homa", "Báculo de las Arenas Escarlatas", "Candado Terrenal", "Cantar de Gesta del Lobo",
  "Centelleo Jadecaído", "Clorofilo Refulgente", "Colmillo del Rey de la Montaña", "Corazón de la Lluvia",
  "Cortador de Jade Primordial", "Cortatelones de Urakusai", "Desastre y Arrepentimiento",
  "El Primer Gran Número de Magia", "Elegía del Fin", "Elegía Lumidulce", "Emblema del Mar de Juncos",
  "Escrituras del Fluir Sempiterno", "Espada de la Desidia", "Espadón Cornirrojo", "Espejo Tejenoches",
  "Estrella Invernal", "Expiadora", "Fulgor Cerúleo", "Fulgor de las Aguas Calmas", "Halcón de Jade",
  "Halo Fracturado", "Heptadas de los Ángeles", "Hibernación Matutina de Año Nuevo", "Himno de las Cumbres",
  "Himno del Vórtice", "Hoja Afilada Celestial", "Hoja de Exáifanes", "Hora de Surfear",
  "Juramento por la Libertad", "Lanza Perforanubes", "Llave de la Coronación", "Llave de la Trascendencia",
  "Luna Inalterable", "Luna Ondulante de Futsu", "Luz del Segador", "Lápida del Lobo",
  "Mil Soles Abrasadores", "Nocturno tras el Velo", "Oda de los Pinos",
  "Oración Perdida a los Vientos Sagrados", "Orgullo Celestial", "Pacificadora del Desastre",
  "Pergamino Celestial", "Pluma Carmesí Buitreastral", "Pluma Invernal Lagoblanco", "Púa Celestial",
  "Rama del Juramento Escarchado", "Reflejo de las Tinieblas", "Reflexión Iridiscente",
  "Refulgencia de la Luna", "Relicario de la Verdad", "Reminiscencia de Tulaytulah",
  "Reverberación de la Grulla", "Rompemontañas", "Ruinas Ensangrentadas",
  "Semblante de la Luna Carmesí", "Senda de la Cazadora", "Sentenciadora", "Sinfonista de Aromas",
  "Sueños de las Mil Noches", "Supervisor Flujoáurico", "Vigía de las Estrellas"
];

// ============================================================
// 2. ARREGLO DE ARMAS DE 4 ESTRELLAS (142 en total)
// ============================================================
const WEAPONS_4_STAR = [
  "Alabarda del Viento Epistolar", "Alba de la Tejelunas", "Aleta Cortaolas", "Anillo de Hakushin",
  "Anillo del Yaxché", "Arco Compuesto", "Arco de Favonius", "Arco de la Cazadora Esmeralda",
  "Arco del Peñasco Oscuro", "Arco del Sacrificio", "Arco Real", "Argento Estelar de las Nieves",
  "Asesinato de Katsuragi", "Azada Excavatesoros", "Balada de la Custodia", "Balada de los Fiordos",
  "Báculo Rutilante de la Sacerdotisa", "Cadencia de la Soledad", "Calamidad de Eshu", "Carta Náutica",
  "Cazador del Callejón", "Charla en el Pabellón", "Choque de Reyes", "Cimentador de Nubes",
  "Colmillo Lupino", "Cruz de Kitain", "Cuentos de Dodoco", "Cuerno Veteazulado", "Códice de Favonius",
  "Depredador", "Descendientes del Sol Abrasador", "Deseo Ponzoñoso", "Destello en la Oscuridad",
  "Desvanecimiento del Crepúsculo", "Diluvio Florífero", "Discusión de los Sabios del Desierto",
  "Eco del Corazón", "Escarcha del Albor", "Espada Amenoma Gemela", "Espada Cruz de los Narcisos",
  "Espada de Favonius", "Espada de Madera", "Espada de Sacrificio", "Espada del Descenso",
  "Espada del Tiempo", "Espada Larga del Peñasco Oscuro", "Espada Lítica", "Espada Negra",
  "Espada Real del Bosque", "Espada Real Larga", "Espina de Hierro", "Estela Iridiscente",
  "Estrella Errabunda", "Estribillo del Viento", "Fierro Floriorlado", "Filo de la Caza de los Herejes",
  "Fin de las Aguas", "Flauta", "Flauta de Ezpitzal", "Fluencia Impoluta", "Fruto de la Culminación",
  "Frío Eterno", "Fuente de Ignición", "Gancho del Triunfo", "Gancho Trampero", "Garrote del Diálogo",
  "Gran Espada de Favonius", "Gran Espada de Sacrificio", "Gran Espada Real",
  "Gran Hoja del Peñasco Oscuro", "Grimorio Real", "Herrumbre", "Hueso Recio", "Huso de Cinabrio",
  "Hálito Glacial", "Jade Sacrificial", "Juramento de la Escarcha", "Kagotsurube Isshin", "La Captura",
  "Lanza de Caza Real", "Lanza de Espinadragón", "Lanza de Favonius", "Lanza del Duelo",
  "Lanza del Peñasco Oscuro", "Lanza Lítica", "Laúd de la Luz Celestial", "Llave Maestra",
  "Luna de Mouun", "Luz Lunar de Xifos", "Luz Plateada", "Lámpara Medulaoscura", "Masacrademonios",
  "Medidor Telemétrico", "Memorias de Sacrificios", "Motosierra Transportable", "Májaira Aguamarina",
  "Médula de la Serpiente Marina", "Nueva Rama", "Oda a las Flores de Viento", "Oda al Vasto Azul",
  "Ojo de la Perspicacia", "Ojo del Juramento", "Penacho Engalanado", "Perdición del Dragón",
  "Perforaibis", "Perforalunas", "Perla Solar", "Pica Luna Creciente",
  "Pluvioarco de la Serpiente Arcoíris", "Prototipo Arcaico", "Prototipo Estelar",
  "Prototipo Luz de Luna", "Prototipo Rencor", "Prototipo Ámbar", "Púa Sustentamontañas",
  "Retribución de la Justicia", "Rey de los Mares", "Rey del Mal", "Rompecadenas", "Rugido del León",
  "Réquiem Abisal", "Sabiduría Fraguada", "Sable de la Dársena", "Segadora de la Lluvia",
  "Serenata del Sosiego", "Silbido Melifluo", "Sinfonía de los Merodeadores", "Sombra Blanca",
  "Sombra de la Marea", "Sombra de la Melodía Dorada", "Superespada Mágica Suprema", "Tajo Redentor",
  "Taladradora de Prospección", "Terragitador", "Vado del Río Ceniciento", "Vals Nocturno",
  "Vasalla del Rey", "Vino y Poesía", "Visión de Jade", "Volver de las Olas",
  "Ágata del Peñasco Oscuro", "Último Acorde"
];

// ============================================================
// 3. MAPEO DE ID / ITEMID DE ARMAS (5★ y 4★)
// ============================================================
const WEAPON_ID_MAP = {
  11501: "Aquila Favonia", 11502: "Cortador de Jade Primordial", 11503: "Hoja Afilada Celestial",
  11504: "Juramento por la Libertad", 11505: "Reflejo de las Tinieblas", 11509: "Luna Ondulante de Futsu",
  11510: "Clorofilo Refulgente", 11511: "Llave de la Trascendencia", 11512: "Cortatelones de Urakusai",
  11513: "Fulgor de las Aguas Calmas", 11514: "Expiadora",
  11401: "Espada de Favonius", 11402: "Flauta", 11403: "Espada de Sacrificio", 11404: "Rugido del León",
  11405: "Prototipo Rencor", 11406: "Espina de Hierro", 11407: "Espada Larga del Peñasco Oscuro",
  11408: "Espada Real Larga", 11409: "Espada Negra", 11410: "Deseo Ponzoñoso", 11412: "Destello en la Oscuridad",
  11413: "Espada Amenoma Gemela", 11414: "Huso de Cinabrio", 11415: "Kagotsurube Isshin", 11416: "Espada de Madera",
  11417: "Luz Lunar de Xifos", 11418: "Vado del Río Ceniciento", 11419: "Sable de la Dársena",
  11420: "Espada Cruz de los Narcisos", 11422: "Diluvio Florífero" ,11431: "Flauta de Ezpitzal", 11424: "Calamidad de Eshu",
  12501: "Lápida del Lobo", 12502: "Orgullo Celestial", 12503: "Espada de la Desidia",
  12504: "Oda de los Pinos", 12505: "Espadón Cornirrojo", 12510: "Emblema del Mar de Juncos",
  12511: "Sentenciadora", 12512: "Colmillo del Rey de la Montaña",
  12401: "Gran Espada de Favonius", 12402: "Segadora de la Lluvia", 12403: "Gran Espada de Sacrificio",
  12404: "Sombra Blanca", 12405: "Prototipo Arcaico", 12406: "Gran Hoja del Peñasco Oscuro",
  12407: "Gran Espada Real", 12408: "Médula de la Serpiente Marina", 12409: "Espada del Tiempo",
  12410: "Argento Estelar de las Nieves", 12411: "Espada Lítica", 12412: "Asesinato de Katsuragi",
  12413: "Rey de los Mares", 12414: "Májaira Aguamarina", 12415: "Fierro Floriorlado", 12416: "Sombra de la Marea",
  12417: "Motosierra Transportable", 12418: "Superespada Mágica Suprema", 12420: "Garrote del Diálogo",
  12421: "Colmillo Lupino",
  13501: "Halcón de Jade", 13502: "Púa Celestial", 13504: "Lanza Perforanubes", 13505: "Báculo de Homa",
  13507: "Luz del Segador", 13509: "Pacificadora del Desastre", 13511: "Báculo de las Arenas Escarlatas",
  13512: "Semblante de la Luna Carmesí", 13513: "Cantar de Gesta del Lobo",
  13401: "Lanza de Favonius", 13402: "Perdición del Dragón", 13403: "Prototipo Estelar",
  13404: "Pica Luna Creciente", 13405: "Lanza del Peñasco Oscuro", 13406: "Lanza de Caza Real",
  13407: "Lanza del Duelo", 13408: "Lanza de Espinadragón", 13409: "Lanza Lítica", 13414: "Cruz de Kitain",
  13415: "La Captura", 13416: "Alabarda del Viento Epistolar", 13417: "Perforalunas",
  13419: "Balada de los Fiordos", 13424: "Aleta Cortaolas", 13425: "Retribución de la Justicia",
  13426: "Taladradora de Prospección", 13427: "Discusión de los Sabios del Desierto",
  14501: "Oración Perdida a los Vientos Sagrados", 14502: "Pergamino Celestial", 14503: "Candado Terrenal",
  14504: "Axioma de la Kagura", 14506: "Luna Inalterable", 14509: "Reminiscencia de Tulaytulah",
  14511: "Centelleo Jadecaído", 14512: "Escrituras del Fluir Sempiterno", 14513: "Supervisor Flujoáurico",
  14514: "Reverberación de la Grulla", 14515: "Axioma de la Estrella del Alma", 14516: "Estrella del Alba",
  14401: "Códice de Favonius", 14402: "Sinfonía de los Merodeadores", 14403: "Memorias de Sacrificios",
  14404: "Ojo de la Perspicacia", 14405: "Prototipo Ámbar", 14406: "Carta Náutica",
  14407: "Ágata del Peñasco Oscuro", 14408: "Grimorio Real", 14409: "Perla Solar", 14410: "Frío Eterno",
  14412: "Vino y Poesía", 14413: "Cuentos de Dodoco", 14414: "Anillo de Hakushin", 14415: "Ojo del Juramento",
  14416: "Fruto de la Culminación", 14417: "Estrella Errabunda", 14427: "Fluencia Impoluta",
  14425: "Sombra de la Melodía Dorada", 14426: "Oda al Vasto Azul", 14424: "Jade Sacrificial",
  15501: "Alas Celestiales", 15502: "Arco de Amos", 15503: "Elegía del Fin", 15507: "Agitador del Relámpago",
  15508: "Estrella Invernal", 15509: "Senda de la Cazadora", 15511: "Sueños de las Mil Noches",
  15512: "El Primer Gran Número de Magia", 15513: "Hora de Surfear", 15510: "Aqua Simulacra",
  15401: "Arco de Favonius", 15402: "Último Acorde", 15403: "Arco del Sacrificio", 15404: "Herrumbre",
  15405: "Arco Compuesto", 15406: "Prototipo Luz de Luna", 15407: "Arco del Peñasco Oscuro", 15408: "Arco Real",
  15409: "Arco de la Cazadora Esmeralda", 15410: "Cazador del Callejón", 15411: "Oda a las Flores de Viento",
  15412: "Vals Nocturno", 15413: "Masacrademonios", 15414: "Luna de Mouun",
  15415: "Desvanecimiento del Crepúsculo", 15416: "Vasalla del Rey", 15417: "Fin de las Aguas",
  15418: "Perforaibis", 15419: "Pluvioarco de la Serpiente Arcoíris", 15424: "Silbido Melifluo",
  15425: "Medidor Telemétrico", 15427: "Descendientes del Sol Abrasador"
};

// ============================================================
// 4. MAPEO COMPLETO Y CORREGIDO DE ARTEFACTOS
// ============================================================
const ARTIFACT_SET_MAP = {
  "15043": "Alborada de la Estrella del Alba y la Luna", "2150043": "Alborada de la Estrella del Alba y la Luna",
  "15041": "Noche de la Revelación del cielo", "2150041": "Noche de la Revelación del cielo",
  "15001": "Nómada del Invierno", "2150001": "Nómada del Invierno",
  "15002": "Sombra Verde Esmeralda", "2150002": "Sombra Verde Esmeralda",
  "15003": "Doncella Amada", "2150003": "Doncella Amada",
  "15004": "Final del Gladiador", "2150004": "Final del Gladiador",
  "15005": "Orquesta del Errante", "2150005": "Orquesta del Errante",
  "15006": "Domador de Truenos", "2150006": "Domador de Truenos",
  "15010": "Furia del Trueno", "2150010": "Furia del Trueno",
  "15008": "Virtuoso Corredor de Lava", "2150008": "Virtuoso Corredor de Lava",
  "15009": "Bruja Carmesí en Llamas", "2150009": "Bruja Carmesí en Llamas",
  "15007": "Ritual Antiguo de la Nobleza", "2150007": "Ritual Antiguo de la Nobleza",
  "15011": "Caballería Sanguinaria", "2150011": "Caballería Sanguinaria",
  "15012": "Petra Arcaica", "2150012": "Petra Arcaica",
  "15013": "Retroceso del Meteorito", "2150013": "Retroceso del Meteorito",
  "15014": "Corazón de las Profundidades", "2150014": "Corazón de las Profundidades",
  "15015": "Tenacidad de la Geoarmada", "2150015": "Tenacidad de la Geoarmada",
  "15016": "Llamas Albinas", "2150016": "Llamas Albinas",
  "15017": "Emblema del Destino", "2150017": "Emblema del Destino",
  "15018": "Reminiscencia de la Purificación", "2150018": "Reminiscencia de la Purificación",
  "15019": "Cáscara de Sueños Opulentos", "2150019": "Cáscara de Sueños Opulentos",
  "15020": "Perla Oceánica", "2150020": "Perla Oceánica",
  "15021": "Deceso del Cinabrio", "2150021": "Deceso del Cinabrio",
  "15022": "Eco del Sacrificio", "2150022": "Eco del Sacrificio",
  "15025": "Recuerdos del Bosque", "2150025": "Recuerdos del Bosque",
  "15026": "Sueños Áureos", "2150026": "Sueños Áureos",
  "15023": "Épica del Pabellón del Desierto", "2150023": "Épica del Pabellón del Desierto",
  "15028": "Flor Olvidada del Paraíso", "2150028": "Flor Olvidada del Paraíso",
  "15027": "Sueño de la Ninfa", "2150027": "Sueño de la Ninfa",
  "15024": "Fulgor de Vurukasha", "2150024": "Fulgor de Vurukasha",
  "15029": "Cazador Fantasmal", "2150029": "Cazador Fantasmal",
  "15030": "Compañía Dorada", "2150030": "Compañía Dorada",
  "15031": "Murmullo del Bosque Reverberante", "2150031": "Murmullo del Bosque Reverberante",
  "15032": "Son de Antaño", "2150032": "Son de Antaño",
  "15033": "Fragmento de la Armonía Fantasiosa", "2150033": "Fragmento de la Armonía Fantasiosa",
  "15034": "Ensoñación Inacabada", "2150034": "Ensoñación Inacabada",
  "15035": "Códice de Obsidiana", "2150035": "Códice de Obsidiana",
  "15036": "Pergamino del Héroe de la Ciudad de las Cenizas", "2150036": "Pergamino del Héroe de la Ciudad de las Cenizas",
  "10001": "Instructor", "14001": "Instructor", "2140001": "Instructor",
  "10002": "Exiliado", "14002": "Exiliado", "2140002": "Exiliado",
  "10003": "Berserker", "14003": "Berserker", "2140003": "Berserker"
};

// ============================================================
// 5. MAPEO ACTUALIZADO DE PERSONAJES DE GENSHIN IMPACT
// ============================================================
const CHARACTER_NAMES = {
  // Viajeros
  10000005: 'Viajero (Aether)', 10000007: 'Viajera (Lumine)',

  // Mondstadt
  10000003: 'Jean', 10000006: 'Lisa', 10000014: 'Barbara', 10000015: 'Kaeya',
  10000016: 'Diluc', 10000020: 'Razor', 10000021: 'Amber', 10000022: 'Venti',
  10000027: 'Klee', 10000029: 'Fischl', 10000032: 'Bennett', 10000034: 'Noelle',
  10000038: 'Albedo', 10000039: 'Diona', 10000041: 'Mona', 10000043: 'Sucrose',
  10000045: 'Rosaria', 10000051: 'Eula', 10000062: 'Aloy', 10000079: 'Mika',

  // Liyue
  10000023: 'Xiangling', 10000024: 'Xingqiu', 10000025: 'Xiao', 10000026: 'Ningguang',
  10000030: 'Zhongli', 10000031: 'Beidou', 10000035: 'Qiqi', 10000036: 'Chongyun',
  10000037: 'Ganyu', 10000042: 'Keqing', 10000044: 'Xinyan', 10000046: 'Hu Tao',
  10000048: 'Yanfei', 10000058: 'Yelan', 10000063: 'Shenhe', 10000064: 'Yun Jin',
  10000077: 'Yaoyao', 10000082: 'Baizhu', 10000092: 'Gaming', 10000093: 'Xianyun',
  10000108: 'Lanyan',

  // Inazuma
  10000002: 'Kamisato Ayaka', 10000047: 'Kaedehara Kazuha', 10000049: 'Yoimiya',
  10000050: 'Thoma', 10000052: 'Raiden Shogun', 10000053: 'Sayu', 10000054: 'Sangonomiya Kokomi',
  10000055: 'Gorou', 10000056: 'Kujou Sara', 10000057: 'Arataki Itto', 10000059: 'Shikanoin Heizou',
  10000060: 'Yae Miko', 10000061: 'Kirara', 10000065: 'Kuki Shinobu', 10000066: 'Kamisato Ayato',
  10000109: 'Yumemizuki Mizuki',

  // Sumeru
  10000067: 'Collei', 10000068: 'Dori', 10000069: 'Tighnari',
  10000070: 'Nilou', 10000071: 'Cyno', 10000072: 'Candace', 10000073: 'Nahida',
  10000074: 'Layla', 10000076: 'Faruzan', 10000075: 'Trotamundos', 10000078: 'Alhacén',
  10000080: 'Kaveh', 10000081: 'Dehya', 10000097: 'Sethos',

  // Fontaine
  10000083: 'Lynette', 10000084: 'Lyney', 10000085: 'Freminet',
  10000086: 'Wriothesley', 10000087: 'Neuvillette', 10000088: 'Charlotte', 10000089: 'Furina',
  10000090: 'Chevreuse', 10000091: 'Navia', 10000094: 'Chiori', 10000095: 'Sigewinne',
  10000098: 'Clorinde', 10000099: 'Emilie',

  // Natlan
  10000100: 'Kachina', 10000101: 'Kinich', 10000102: 'Mualani', 10000103: 'Xilonen',
  10000104: 'Chasca', 10000105: 'Ororon', 10000106: 'Mavuika', 10000107: 'Citlali',
  10000110: 'Iansan', 10000111: 'Varesa',

  // Snezhnaya / Fatui
  10000033: 'Tartaglia (Nobile)', 10000096: 'Arlecchino',

  // Nación por Confirmar / Nuevos Personajes
  10000140: 'Vodyanitsa', 10000113: 'Vesna', 10000150: 'Odette', 10000148: 'Aliosha',
  10000116: 'Sandrone', 10000129: 'Lohen', 10000118: 'Nicole', 10000131: 'Prune',
  10000130: 'Linnéa', 10000121: 'Varka', 10000122: 'Néfer', 10000123: 'Illuga',
  10000125: 'Colombina', 10000124: 'Durin', 10000126: 'Jahoda', 10000127: 'Zibai',
  10000128: 'Manekín (Femenino)', 10000117: 'Manekín (Masculino)', 10000120: 'Flins',
  10000119: 'Lauma', 10000132: 'Aino', 10000133: 'Ineffa', 10000114: 'Skirk',
  10000135: 'Dahlia', 10000112: 'Escoffier', 10000137: 'Ifá'
};

// ============================================================
// 6. MOTOR AMPLIADO DE PASIVAS DE ARMAS Y ARTEFACTOS
// ============================================================
const WEAPON_PASSIVES = {
  "Báculo de Homa": (stats, r) => {
    const bonusHpPct = 0.20 + (r - 1) * 0.05;
    const atkFromHpPct = 0.008 + (r - 1) * 0.002;
    stats.hp *= (1 + bonusHpPct);
    const bonusAtk = stats.hp * atkFromHpPct;
    stats.atk += bonusAtk;
    stats.appliedPassives.push(`Báculo de Homa (R${r}): +${Math.round(bonusHpPct * 100)}% Vida, +${Math.round(bonusAtk)} ATK extra por Vida`);
  },
  "Cortador de Jade Primordial": (stats, r) => {
    const bonusHpPct = 0.20 + (r - 1) * 0.05;
    const atkFromHpPct = 0.012 + (r - 1) * 0.003;
    stats.hp *= (1 + bonusHpPct);
    const bonusAtk = stats.hp * atkFromHpPct;
    stats.atk += bonusAtk;
    stats.appliedPassives.push(`Cortador de Jade (R${r}): +${Math.round(bonusHpPct * 100)}% Vida, +${Math.round(bonusAtk)} ATK por Vida`);
  },
  "Luz del Segador": (stats, r) => {
    const erOver100 = Math.max(0, stats.er - 100);
    const atkFactor = 0.28 + (r - 1) * 0.07;
    const maxAtkPct = 0.80 + (r - 1) * 0.10;
    const bonusAtkPct = Math.min(maxAtkPct, (erOver100 / 100) * atkFactor);
    stats.atk += stats.atk * bonusAtkPct;
    stats.appliedPassives.push(`Luz del Segador (R${r}): +${(bonusAtkPct * 100).toFixed(1)}% ATK por Recarga`);
  },
  "La Captura": (stats, r) => {
    const burstCr = 0.06 + (r - 1) * 0.015;
    const burstDmg = 0.16 + (r - 1) * 0.04;
    stats.burstCritRate += burstCr;
    stats.burstDmgBonus += burstDmg;
    stats.appliedPassives.push(`La Captura (R${r}): +${(burstCr * 100).toFixed(1)}% Prob. CR y +${(burstDmg * 100).toFixed(1)}% Daño Definitiva`);
  },
  "Sinfonía de los Merodeadores": (stats, r) => {
    const atkBonus = 0.60 + (r - 1) * 0.15;
    stats.atk += stats.atk * (atkBonus / 3);
    stats.appliedPassives.push(`Sinfonía de los Merodeadores (R${r}): Buff promedio sim. (+${Math.round((atkBonus / 3) * 100)}% ATK eq.)`);
  },
  "Elegía del Fin": (stats, r) => {
    const emBonus = 60 + (r - 1) * 20;
    const atkPct = 0.20 + (r - 1) * 0.05;
    stats.em += emBonus;
    stats.atk += stats.atk * atkPct;
    stats.appliedPassives.push(`Elegía del Fin (R${r}): +${emBonus} EM, +${Math.round(atkPct * 100)}% ATK`);
  },
  "Espadón Cornirrojo": (stats, r) => {
    const defPct = 0.28 + (r - 1) * 0.07;
    stats.def *= (1 + defPct);
    stats.appliedPassives.push(`Espadón Cornirrojo (R${r}): +${Math.round(defPct * 100)}% DEF`);
  },
  "Cazador del Callejón": (stats, r) => {
    const dmgBonus = 0.20 + (r - 1) * 0.05;
    stats.skillDmgBonus += dmgBonus;
    stats.burstDmgBonus += dmgBonus;
    stats.appliedPassives.push(`Cazador del Callejón (R${r}): +${Math.round(dmgBonus * 100)}% Daño total`);
  },
  "Aqua Simulacra": (stats, r) => {
    const hpPct = 0.16 + (r - 1) * 0.04;
    const dmgBonus = 0.20 + (r - 1) * 0.05;
    stats.hp *= (1 + hpPct);
    stats.elemDmgBonus += dmgBonus;
    stats.appliedPassives.push(`Aqua Simulacra (R${r}): +${Math.round(hpPct * 100)}% Vida y +${Math.round(dmgBonus * 100)}% Daño global`);
  },
  "Escrituras del Fluir Sempiterno": (stats, r) => {
    const hpPct = 0.16 + (r - 1) * 0.04;
    const caDmg = 0.42 + (r - 1) * 0.105;
    stats.hp *= (1 + hpPct);
    stats.appliedPassives.push(`Escrituras del Fluir Sempiterno (R${r}): +${Math.round(hpPct * 100)}% Vida y +${Math.round(caDmg * 100)}% Daño de Ataque Cargado`);
  },
  "Semblante de la Luna Carmesí": (stats, r) => {
    const dmgBonus = 0.12 + (r - 1) * 0.04;
    stats.elemDmgBonus += dmgBonus;
    stats.appliedPassives.push(`Semblante de la Luna Carmesí (R${r}): +${Math.round(dmgBonus * 100)}% Bono de Daño (Pacto de la Vida)`);
  },
  "Cortatelones de Urakusai": (stats, r) => {
    const skillDmg = 0.24 + (r - 1) * 0.06;
    const defPct = 0.20 + (r - 1) * 0.05;
    stats.skillDmgBonus += skillDmg;
    stats.def *= (1 + defPct);
    stats.appliedPassives.push(`Cortatelones de Urakusai (R${r}): +${Math.round(skillDmg * 100)}% Daño Elemental y +${Math.round(defPct * 100)}% DEF`);
  },
  "Clorofilo Refulgente": (stats, r) => {
    const cr = 0.04 + (r - 1) * 0.01;
    stats.critRate += cr;
    stats.appliedPassives.push(`Clorofilo Refulgente (R${r}): +${(cr * 100).toFixed(1)}% Prob. CR y escalado por EM`);
  },
  "Hora de Surfear": (stats, r) => {
    const hpPct = 0.20 + (r - 1) * 0.05;
    const naCaDmg = 0.48 + (r - 1) * 0.12;
    stats.hp *= (1 + hpPct);
    stats.appliedPassives.push(`Hora de Surfear (R${r}): +${Math.round(hpPct * 100)}% Vida y +${Math.round(naCaDmg * 100)}% Daño de Normales/Cargados`);
  },
  "Axioma de la Kagura": (stats, r) => {
    const skillBonus = 0.36 + (r - 1) * 0.09;
    const elemBonus = 0.12 + (r - 1) * 0.03;
    stats.skillDmgBonus += skillBonus;
    stats.elemDmgBonus += elemBonus;
    stats.appliedPassives.push(`Axioma de la Kagura (R${r}): +${Math.round(skillBonus * 100)}% Daño Habilidad y +${Math.round(elemBonus * 100)}% Daño Elemental`);
  },
  "El Primer Gran Número de Magia": (stats, r) => {
    const caDmg = 0.16 + (r - 1) * 0.04;
    const atkPct = 0.32 + (r - 1) * 0.08;
    stats.atk += stats.atk * atkPct;
    stats.appliedPassives.push(`El Primer Gran Número de Magia (R${r}): +${Math.round(caDmg * 100)}% Daño Cargado y +${Math.round(atkPct * 100)}% ATK`);
  }
};

const ARTIFACT_PASSIVES = {
  "Emblema del Destino": {
    "2x": (stats) => {
      stats.er += 20;
      stats.appliedPassives.push(`Emblema del Destino (2x): +20% Recarga de Energía`);
    },
    "4x": (stats) => {
      stats.er += 20;
      const burstBonus = Math.min(0.75, (stats.er / 100) * 0.25);
      stats.burstDmgBonus += burstBonus;
      stats.appliedPassives.push(`Emblema del Destino (4x): +20% ER, +${(burstBonus * 100).toFixed(1)}% Daño Definitiva (basado en ER)`);
    }
  },
  "Final del Gladiador": {
    "2x": (stats) => {
      stats.atk += stats.atk * 0.18;
      stats.appliedPassives.push(`Final del Gladiador (2x): +18% ATK`);
    },
    "4x": (stats) => {
      stats.atk += stats.atk * 0.18;
      stats.appliedPassives.push(`Final del Gladiador (4x): +18% ATK`);
    }
  },
  "Orquesta del Errante": {
    "2x": (stats) => {
      stats.em += 80;
      stats.appliedPassives.push(`Orquesta del Errante (2x): +80 Maestría Elemental`);
    },
    "4x": (stats) => {
      stats.em += 80;
      stats.appliedPassives.push(`Orquesta del Errante (4x): +80 Maestría Elemental`);
    }
  },
  "Cazador Fantasmal": {
    "2x": (stats) => {
      stats.appliedPassives.push(`Cazador Fantasmal (2x): +15% Daño de Ataques Normales/Cargados`);
    },
    "4x": (stats) => {
      stats.critRate += 0.36;
      stats.appliedPassives.push(`Cazador Fantasmal (4x): +36% Prob. CR (3 acumulaciones)`);
    }
  },
  "Compañía Dorada": {
    "2x": (stats) => {
      stats.skillDmgBonus += 0.20;
      stats.appliedPassives.push(`Compañía Dorada (2x): +20% Daño Habilidad Elemental`);
    },
    "4x": (stats) => {
      stats.skillDmgBonus += 0.70;
      stats.appliedPassives.push(`Compañía Dorada (4x): +70% Daño Habilidad Elemental`);
    }
  },
  "Ritual Antiguo de la Nobleza": {
    "2x": (stats) => {
      stats.burstDmgBonus += 0.20;
      stats.appliedPassives.push(`Ritual Antiguo de la Nobleza (2x): +20% Daño Definitiva`);
    },
    "4x": (stats) => {
      stats.burstDmgBonus += 0.20;
      stats.atk += stats.atk * 0.20;
      stats.appliedPassives.push(`Ritual Antiguo de la Nobleza (4x): +20% Daño Definitiva y +20% ATK para el equipo`);
    }
  },
  "Nómada del Invierno": {
    "2x": (stats) => {
      stats.elemDmgBonus += 0.15;
      stats.appliedPassives.push(`Nómada del Invierno (2x): +15% Bono Daño Cryo`);
    },
    "4x": (stats) => {
      stats.elemDmgBonus += 0.15;
      stats.critRate += 0.20;
      stats.appliedPassives.push(`Nómada del Invierno (4x): +15% Bono Cryo y +20% Prob. CR (vs objetivo congelado/afectado)`);
    }
  },
  "Sueños Áureos": {
    "2x": (stats) => {
      stats.em += 80;
      stats.appliedPassives.push(`Sueños Áureos (2x): +80 Maestría Elemental`);
    },
    "4x": (stats) => {
      stats.em += 180;
      stats.atk += stats.atk * 0.14;
      stats.appliedPassives.push(`Sueños Áureos (4x): +180 EM, +14% ATK`);
    }
  },
  "Códice de Obsidiana": {
    "2x": (stats) => {
      stats.elemDmgBonus += 0.15;
      stats.appliedPassives.push(`Códice de Obsidiana (2x): +15% Bono de Daño (Bendición Noctámbula)`);
    },
    "4x": (stats) => {
      stats.elemDmgBonus += 0.15;
      stats.critRate += 0.40;
      stats.appliedPassives.push(`Códice de Obsidiana (4x): +15% Bono de Daño y +40% Prob. CR`);
    }
  },
  "Pergamino del Héroe de la Ciudad de las Cenizas": {
    "2x": (stats) => {
      stats.er += 12;
      stats.appliedPassives.push(`Pergamino del Héroe (2x): +12% Recarga de Energía`);
    },
    "4x": (stats) => {
      stats.elemDmgBonus += 0.40;
      stats.appliedPassives.push(`Pergamino del Héroe (4x): +40% Bono de Daño Elemental para todo el equipo`);
    }
  },
  "Fragmento de la Armonía Fantasiosa": {
    "2x": (stats) => {
      stats.atk += stats.atk * 0.18;
      stats.appliedPassives.push(`Fragmento de Armonía (2x): +18% ATK`);
    },
    "4x": (stats) => {
      stats.atk += stats.atk * 0.18;
      stats.elemDmgBonus += 0.54;
      stats.appliedPassives.push(`Fragmento de Armonía (4x): +18% ATK y +54% Bono de Daño (Pacto de la Vida)`);
    }
  },
  "Ensoñación Inacabada": {
    "2x": (stats) => {
      stats.atk += stats.atk * 0.18;
      stats.appliedPassives.push(`Ensoñación Inacabada (2x): +18% ATK`);
    },
    "4x": (stats) => {
      stats.atk += stats.atk * 0.18;
      stats.elemDmgBonus += 0.50;
      stats.appliedPassives.push(`Ensoñación Inacabada (4x): +18% ATK y +50% Bono de Daño (Quemadura)`);
    }
  },
  "Sombra Verde Esmeralda": {
    "2x": (stats) => {
      stats.elemDmgBonus += 0.15;
      stats.appliedPassives.push(`Sombra Verde Esmeralda (2x): +15% Bono Daño Anemo`);
    },
    "4x": (stats) => {
      stats.resShred += 0.40;
      stats.appliedPassives.push(`Sombra Verde Esmeralda (4x): Torbellino +60% Daño, -40% RES Elemental enemiga`);
    }
  },
  "Recuerdos del Bosque": {
    "2x": (stats) => {
      stats.elemDmgBonus += 0.15;
      stats.appliedPassives.push(`Recuerdos del Bosque (2x): +15% Bono Daño Dendro`);
    },
    "4x": (stats) => {
      stats.resShred += 0.30;
      stats.appliedPassives.push(`Recuerdos del Bosque (4x): -30% RES Dendro enemiga`);
    }
  }
};

/**
 * Calcula las estadísticas efectivas del personaje aplicando pasivas de arma y conjunto de artefactos.
 */
function calculateEffectiveStats(char) {
  const crCdParts = char.critRatio.replace(/%/g, '').split(':').map(v => parseFloat(v) || 50);
  
  const stats = {
    hp: char.stats.hp || 15000,
    atk: char.stats.atk || 1500,
    def: char.stats.def || 800,
    em: char.stats.em || 0,
    er: parseFloat(char.stats.er) || 100,
    critRate: (crCdParts[0] || 50) / 100,
    critDmg: (crCdParts[1] || 100) / 100,
    burstCritRate: 0,
    skillDmgBonus: 0,
    burstDmgBonus: 0,
    elemDmgBonus: 0,
    resShred: 0,
    appliedPassives: []
  };

  // 1. Aplicar Pasiva de Arma
  const wName = char.weapon.name;
  const refNum = parseInt((char.weapon.refinement || "R1").replace("R", ""), 10) || 1;
  if (WEAPON_PASSIVES[wName]) {
    WEAPON_PASSIVES[wName](stats, refNum);
  }

  // 2. Aplicar Pasivas de Artefactos
  const setString = char.sets || '';
  for (const [setName, passiveObj] of Object.entries(ARTIFACT_PASSIVES)) {
    if (setString.includes(`4x ${setName}`)) {
      if (passiveObj["4x"]) passiveObj["4x"](stats);
      else if (passiveObj["2x"]) passiveObj["2x"](stats);
    } else if (setString.includes(`2x ${setName}`)) {
      if (passiveObj["2x"]) passiveObj["2x"](stats);
    }
  }

  return stats;
}

// ============================================================
// 7. FUNCIONES AUXILIARES DE NOMBRES
// ============================================================
function getWeaponNameFromId(itemId, hash) {
  if (itemId && WEAPON_ID_MAP[itemId]) return WEAPON_ID_MAP[itemId];
  if (hash && WEAPON_ID_MAP[hash]) return WEAPON_ID_MAP[hash];
  return 'Nombre no encontrado';
}

function getArtifactSetName(flat, equip) {
  if (!flat) return 'Nombre no encontrado';
  if (flat.relicSetId && ARTIFACT_SET_MAP[flat.relicSetId]) return ARTIFACT_SET_MAP[flat.relicSetId];

  if (flat.icon) {
    const iconMatch = flat.icon.match(/UI_RelicIcon_(\d+)_\d+/);
    if (iconMatch) {
      const iconSetId = iconMatch[1];
      if (ARTIFACT_SET_MAP[iconSetId]) return ARTIFACT_SET_MAP[iconSetId];
      if (ARTIFACT_SET_MAP["2" + iconSetId]) return ARTIFACT_SET_MAP["2" + iconSetId];
    }
  }

  const setHash = flat.setNameTextMapHash || flat.nameTextMapHash;
  if (setHash && ARTIFACT_SET_MAP[setHash]) return ARTIFACT_SET_MAP[setHash];
  if (equip && equip.itemId && ARTIFACT_SET_MAP[equip.itemId]) return ARTIFACT_SET_MAP[equip.itemId];

  return 'Nombre no encontrado';
}

document.addEventListener('DOMContentLoaded', async () => {
  const isIndexPage = !!document.getElementById('submitUidBtn');
  const isSimPage = !!document.getElementById('calcRotationBtn');

  if (isIndexPage) initIndexPage();
  if (isSimPage) initSimPage();
});

/* ============================================================
 * PÁGINA INDEX: Consulta a API Proxy
 * ============================================================ */
function initIndexPage() {
  const submitUidBtn = document.getElementById('submitUidBtn');
  const uidInput = document.getElementById('uidInput');
  const errorMessage = document.getElementById('errorMessage');
  const loadingOverlay = document.getElementById('loadingOverlay');

  if (!submitUidBtn || !uidInput) return;

  submitUidBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const uid = uidInput.value.trim();
    if (errorMessage) errorMessage.textContent = '';

    if (!uid || !/^\d{9,10}$/.test(uid)) {
      if (errorMessage) errorMessage.textContent = 'Ingresa un UID válido (9 o 10 dígitos).';
      return;
    }

    if (loadingOverlay) loadingOverlay.classList.remove('hidden');

    try {
      const enkaData = await fetchEnkaProfile(uid);
      
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({
        uid: uid,
        data: enkaData,
        savedAt: new Date().toISOString()
      }));

      window.location.href = 'sim.html';
    } catch (error) {
      console.error('Error fetching profile:', error);
      if (loadingOverlay) loadingOverlay.classList.add('hidden');
      if (errorMessage) errorMessage.textContent = `Error: ${error.message}`;
    }
  });
}

async function fetchEnkaProfile(uid) {
  const RENDER_PROXY_URL = `https://cta-wu7c.onrender.com/api/enka/${uid}`;
  const res = await fetch(RENDER_PROXY_URL);

  if (!res.ok) {
    if (res.status === 404) {
      throw new Error('El UID no existe o no tiene el detalle del perfil público en el juego.');
    }
    throw new Error(`Error en el servidor proxy (${res.status}). Reintenta en unos segundos.`);
  }

  const responseData = await res.json();

  if (responseData.message || responseData.status === 404) {
    throw new Error('El UID no existe o no tiene la vitrina pública activa.');
  }

  if (!responseData.avatarInfoList || responseData.avatarInfoList.length === 0) {
    throw new Error('El usuario no tiene personajes visibles en la vitrina pública del juego.');
  }

  const characters = responseData.avatarInfoList.map(avatar => {
    const stats = avatar.fightPropMap || {};
    const critRate = (stats[20] || 0) * 100;
    const critDmg = (stats[22] || 0) * 100;
    const cv = (critRate * 2) + critDmg;

    const name = CHARACTER_NAMES[avatar.avatarId] || `Personaje (${avatar.avatarId})`;
    const constellation = `C${avatar.talentIdList ? avatar.talentIdList.length : 0}`;

    let weaponName = 'Nombre no encontrado';
    let weaponRefinement = 'R1';
    const setCounts = {};

    if (avatar.equipList && Array.isArray(avatar.equipList)) {
      avatar.equipList.forEach(equip => {
        const flat = equip.flat;
        if (!flat) return;

        if (flat.itemType === 'ITEM_WEAPON') {
          const itemId = equip.itemId;
          const hash = flat.nameTextMapHash;
          weaponName = getWeaponNameFromId(itemId, hash);

          const affixMap = equip.weapon?.affixMap;
          if (affixMap) {
            const refVal = Object.values(affixMap)[0];
            weaponRefinement = `R${(refVal !== undefined ? refVal + 1 : 1)}`;
          }
        }

        if (flat.itemType === 'ITEM_RELIQUARY') {
          const setName = getArtifactSetName(flat, equip);
          if (setName && setName !== 'Nombre no encontrado') {
            setCounts[setName] = (setCounts[setName] || 0) + 1;
          }
        }
      });
    }

    const activeSets = [];
    for (const [setName, count] of Object.entries(setCounts)) {
      if (count >= 4) {
        activeSets.push(`4x ${setName}`);
      } else if (count >= 2) {
        activeSets.push(`2x ${setName}`);
      }
    }
    const setsFormatted = activeSets.length > 0 ? activeSets.join(' + ') : 'Nombre no encontrado';

    const skillMap = avatar.skillLevelMap || {};
    const proudBonus = avatar.proudSkillBonusMap || {};
    const skillKeys = Object.keys(skillMap);

    const getTalentLevel = (index) => {
      if (index >= skillKeys.length) return 1;
      const skillId = skillKeys[index];
      const baseLvl = skillMap[skillId] || 1;
      
      let bonus = 0;
      if (proudBonus) {
        const bonusValues = Object.values(proudBonus);
        if (bonusValues.length > index) {
          bonus = bonusValues[index] || 0;
        }
      }
      return baseLvl + bonus;
    };

    const talentLevels = {
      normal: skillMap[skillKeys[0]] || 1,
      skill: getTalentLevel(1),
      burst: getTalentLevel(2)
    };

    return {
      id: avatar.avatarId,
      name: name,
      constellation: constellation,
      weapon: {
        name: weaponName,
        refinement: weaponRefinement
      },
      sets: setsFormatted,
      critRatio: `${critRate.toFixed(1)}% : ${critDmg.toFixed(1)}%`,
      cv: `${cv.toFixed(1)} cv`,
      stats: {
        hp: Math.round(stats[2000] || stats[1] || 0),
        atk: Math.round(stats[2001] || stats[4] || 0),
        def: Math.round(stats[2002] || stats[7] || 0),
        em: Math.round(stats[28] || 0),
        er: `${((stats[23] || 1) * 100).toFixed(1)}%`
      },
      talents: talentLevels
    };
  });

  characters.sort((a, b) => a.name.localeCompare(b.name));

  return { characters };
}

/* ============================================================
 * PÁGINA SIMULADOR: Visualización en Slots y Rotaciones
 * ============================================================ */
let globalProfileData = null;
let currentTeamSlots = [null, null, null, null];

function initSimPage() {
  const savedItem = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!savedItem) {
    window.location.href = 'index.html';
    return;
  }

  const parsed = JSON.parse(savedItem);
  globalProfileData = parsed.data;

  const uidBadge = document.getElementById('userUidBadge');
  if (uidBadge) uidBadge.textContent = `UID: ${parsed.uid}`;

  const changeUidBtn = document.getElementById('changeUidBtn');
  if (changeUidBtn) {
    changeUidBtn.addEventListener('click', () => {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      window.location.href = 'index.html';
    });
  }

  populateCharacterSelects();

  const calcBtn = document.getElementById('calcRotationBtn');
  if (calcBtn) {
    calcBtn.addEventListener('click', calculateOptimalRotation);
  }
}

function populateCharacterSelects() {
  const selects = document.querySelectorAll('.char-select');
  selects.forEach(select => {
    select.innerHTML = '<option value="">-- Seleccionar Personaje --</option>';
    globalProfileData.characters.forEach((char, idx) => {
      const opt = document.createElement('option');
      opt.value = idx;
      opt.textContent = `${char.name} (${char.constellation})`;
      select.appendChild(opt);
    });
  });
  updateSelectOptionsDisabledState();
}

function updateSelectOptionsDisabledState() {
  const selects = document.querySelectorAll('.char-select');
  selects.forEach((select, currentSlotIndex) => {
    const options = select.querySelectorAll('option');
    options.forEach(opt => {
      if (opt.value === '') return;
      const charIdxVal = parseInt(opt.value, 10);

      const isSelectedElsewhere = currentTeamSlots.some((slotCharIdx, slotIdx) => {
        return slotIdx !== currentSlotIndex && slotCharIdx === charIdxVal;
      });

      opt.disabled = isSelectedElsewhere;
    });
  });
}

window.selectCharacterForSlot = function(slotIndex, charIdx) {
  const slotCard = document.querySelector(`.slot-card[data-slot="${slotIndex}"] .slot-content`);
  if (!slotCard) return;

  if (charIdx === '') {
    currentTeamSlots[slotIndex] = null;
    slotCard.innerHTML = '';
    updateSelectOptionsDisabledState();
    return;
  }

  const selectedIdx = parseInt(charIdx, 10);
  currentTeamSlots[slotIndex] = selectedIdx;
  updateSelectOptionsDisabledState();

  const char = globalProfileData.characters[selectedIdx];

  slotCard.innerHTML = `
    <div class="char-header">${char.name} <span class="badge">${char.constellation}</span></div>
    
    <div class="section-title">Arma & Refinamiento</div>
    <div style="font-weight:bold; font-size: 0.95rem; color: #e2e8f0;">
      ${char.weapon.name} <span class="badge" style="background:#2b6cb0;">${char.weapon.refinement}</span>
    </div>

    <div class="section-title">Conjuntos de Artefactos</div>
    <div style="font-weight:bold; color: #cbd5e0; font-size: 0.88rem;">${char.sets}</div>

    <div class="section-title">Nivel de Talentos</div>
    <div class="talents-group" style="display: flex; flex-direction: column; gap: 4px; background: rgba(0,0,0,0.25); padding: 8px; border-radius: 6px; font-size: 0.85rem;">
      <div style="display:flex; justify-content: space-between; align-items:center;">
        <span>Ataque Normal:</span>
        <strong style="color: #63b3ed;">Nivel ${char.talents.normal}</strong>
      </div>
      <div style="display:flex; justify-content: space-between; align-items:center;">
        <span>Elemental (E):</span>
        <strong style="color: #63b3ed;">Nivel ${char.talents.skill}</strong>
      </div>
      <div style="display:flex; justify-content: space-between; align-items:center;">
        <span>Definitiva (Q):</span>
        <strong style="color: #63b3ed;">Nivel ${char.talents.burst}</strong>
      </div>
    </div>

    <div class="section-title">Estadísticas Clave</div>
    <ul class="stats-list">
      <li><span>CR / CD:</span> <strong>${char.critRatio}</strong></li>
      <li><span>Crit Value:</span> <strong>${char.cv}</strong></li>
      <li><span>Vida (HP):</span> <strong>${char.stats.hp}</strong></li>
      <li><span>Ataque (ATK):</span> <strong>${char.stats.atk}</strong></li>
      <li><span>Defensa (DEF):</span> <strong>${char.stats.def}</strong></li>
      <li><span>Maestría (EM):</span> <strong>${char.stats.em}</strong></li>
      <li><span>Recarga (ER):</span> <strong>${char.stats.er}</strong></li>
    </ul>
  `;
};

/* ============================================================
 * MOTOR DE OPTIMIZACIÓN DE ROTACIÓN Y CÁLCULO DE DAÑO
 * ============================================================ */
function calculateOptimalRotation() {
  const consoleElem = document.getElementById('outputConsole');
  if (!consoleElem) return;

  const activeTeamSlots = currentTeamSlots.filter(s => s !== null);

  if (activeTeamSlots.length === 0) {
    consoleElem.textContent = 'Selecciona al menos 1 personaje en algún slot para simular.';
    return;
  }

  let log = `=== ROTACIÓN Y CÁLCULO DE DAÑO REALISTA CON PASIVAS ACTIVAS ===\n`;
  log += `Integrantes del equipo (${activeTeamSlots.length}):\n`;

  let totalDmg = 0;
  
  // Factor de Mitigación por Defensa enemiga (Nivel 90 Char vs Nivel 90 Enemigo = 0.50)
  const defMitigation = (90 + 100) / ((90 + 100) + (90 + 100));

  activeTeamSlots.forEach((charIdx, index) => {
    const char = globalProfileData.characters[charIdx];
    
    // Obtener estadísticas dinámicas ajustadas por pasivas
    const effStats = calculateEffectiveStats(char);

    // Resistencia enemiga efectiva (Base 10% - Reducción por debuffs)
    const netRes = 0.10 - effStats.resShred;
    let resMult = 1 - netRes;
    if (netRes < 0) resMult = 1 - (netRes / 2); // Resistencia negativa duplica efectividad

    const skillCritRate = Math.min(1, Math.max(0, effStats.critRate));
    const burstCritRate = Math.min(1, Math.max(0, effStats.critRate + effStats.burstCritRate));

    const skillCritMult = 1 + (skillCritRate * effStats.critDmg);
    const burstCritMult = 1 + (burstCritRate * effStats.critDmg);

    const skillTalentMult = 1 + ((char.talents.skill - 1) * 0.08);
    const burstTalentMult = 1 + ((char.talents.burst - 1) * 0.09);

    const totalSkillDmgBonus = 1 + effStats.skillDmgBonus + effStats.elemDmgBonus;
    const totalBurstDmgBonus = 1 + effStats.burstDmgBonus + effStats.elemDmgBonus;

    // Cálculo del daño medio efectivo considerando DEF y RES
    const skillDmg = Math.round(effStats.atk * 2.2 * skillTalentMult * totalSkillDmgBonus * skillCritMult * defMitigation * resMult);
    const burstDmg = Math.round(effStats.atk * 4.5 * burstTalentMult * totalBurstDmgBonus * burstCritMult * defMitigation * resMult);
    
    const charTotal = skillDmg + burstDmg;
    totalDmg += charTotal;

    log += `\n[ Slot ${index + 1} ] ${char.name} (${char.constellation})\n`;
    log += `  - Arma: ${char.weapon.name} (${char.weapon.refinement})\n`;
    log += `  - Sets: ${char.sets}\n`;
    log += `  - ATK Efectivo: ${Math.round(effStats.atk)} pts\n`;
    
    if (effStats.appliedPassives.length > 0) {
      log += `  - Pasivas Activas Aplicadas:\n`;
      effStats.appliedPassives.forEach(p => log += `     * ${p}\n`);
    } else {
      log += `  - Pasivas Activas: Ninguna / Sin bono condicional directo registrado\n`;
    }

    log += `  -> Habilidad Elemental (E): ${skillDmg.toLocaleString()} pts de daño medio\n`;
    log += `  -> Habilidad Definitiva (Q): ${burstDmg.toLocaleString()} pts de daño medio\n`;
  });

  log += `\n======================================================\n`;
  log += `DAÑO TOTAL ACUMULADO EN ROTACIÓN: ${totalDmg.toLocaleString()} pts\n`;
  log += `======================================================\n`;

  consoleElem.textContent = log;
}