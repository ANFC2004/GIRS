const LOCAL_STORAGE_KEY = 'girs_user_profile_data';

// Diccionario de IDs de personajes de Genshin Impact
const CHARACTER_NAMES = {
  // Viajeros
  10000005: 'Viajero (Aether)', 10000007: 'Viajera (Lumine)',

  // Mondstadt
  10000003: 'Jean', 10000006: 'Lisa', 10000014: 'Barbara', 10000015: 'Kaeya',
  10000016: 'Diluc', 10000020: 'Razor', 10000021: 'Amber', 10000022: 'Venti',
  10000027: 'Klee', 10000030: 'Fischl', 10000032: 'Bennett', 10000034: 'Noelle',
  10000038: 'Albedo', 10000039: 'Diona', 10000041: 'Mona', 10000043: 'Sucrose',
  10000045: 'Rosaria', 10000051: 'Eula', 10000062: 'Aloy', 10000079: 'Mika',

  // Liyue
  10000023: 'Xiangling', 10000024: 'Xingqiu', 10000025: 'Xiao', 10000026: 'Ningguang',
  10000029: 'Zhongli', 10000031: 'Beidou', 10000035: 'Qiqi', 10000036: 'Chongyun',
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
  10000074: 'Layla', 10000075: 'Faruzan', 10000076: 'Trotamundos', 10000078: 'Alhacén',
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
  10000112: 'Vodyanitsa',
  10000113: 'Vesna',
  10000114: 'Odette',
  10000115: 'Aliosha',
  10000116: 'Sandrone',
  10000117: 'Lohen',
  10000118: 'Nicole',
  10000119: 'Prune',
  10000120: 'Linnéa',
  10000121: 'Varka',
  10000122: 'Zibai',
  10000123: 'Illuga',
  10000124: 'Colombina',
  10000125: 'Durin',
  10000126: 'Jahoda',
  10000127: 'Néfer',
  10000128: 'Manekín (Femenino)',
  10000129: 'Manekín (Masculino)',
  10000130: 'Flins',
  10000131: 'Lauma',
  10000132: 'Aino',
  10000133: 'Ineffa',
  10000134: 'Skirk',
  10000135: 'Dahlia',
  10000136: 'Escoffier',
  10000137: 'Ifá'
};

document.addEventListener('DOMContentLoaded', () => {
  const isIndexPage = !!document.getElementById('submitUidBtn');
  const isSimPage = !!document.getElementById('calcRotationBtn');

  if (isIndexPage) initIndexPage();
  if (isSimPage) initSimPage();
});

/* ============================================================
 * 1. PÁGINA INDEX: Consulta a Render (CtA Proxy -> Enka.network)
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

// Consulta a Enka.network a través del servidor proxy CtA en Render
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

  // Mapear los datos recibidos
  const characters = responseData.avatarInfoList.map(avatar => {
    const stats = avatar.fightPropMap || {};
    const critRate = (stats[20] || 0) * 100;
    const critDmg = (stats[22] || 0) * 100;
    const cv = (critRate * 2) + critDmg;

    const name = CHARACTER_NAMES[avatar.avatarId] || `Personaje (${avatar.avatarId})`;
    const constellation = `C${avatar.talentIdList ? avatar.talentIdList.length : 0}`;

    return {
      id: avatar.avatarId,
      name: name,
      constellation: constellation,
      weapon: {
        name: 'Arma Equipada',
        refinement: `R${Object.keys(avatar.weapon?.weaponExtra || {}).length || 1}`
      },
      sets: 'Artefactos Equipados',
      critRatio: `${critRate.toFixed(1)} : ${critDmg.toFixed(1)}`,
      cv: `${cv.toFixed(1)} cv`,
      stats: {
        hp: Math.round(stats[2000] || stats[1] || 0),
        atk: Math.round(stats[2001] || stats[4] || 0),
        def: Math.round(stats[2002] || stats[7] || 0),
        em: Math.round(stats[28] || 0),
        er: `${((stats[23] || 1) * 100).toFixed(1)}%`
      }
    };
  });

  characters.sort((a, b) => a.name.localeCompare(b.name));

  return { characters };
}

/* ============================================================
 * 2. PÁGINA SIMULADOR: Visualización en Slots y Rotaciones
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
}

window.selectCharacterForSlot = function(slotIndex, charIdx) {
  const slotCard = document.querySelector(`.slot-card[data-slot="${slotIndex}"] .slot-content`);
  if (!slotCard) return;

  if (charIdx === '') {
    currentTeamSlots[slotIndex] = null;
    slotCard.innerHTML = '';
    return;
  }

  const char = globalProfileData.characters[charIdx];
  currentTeamSlots[slotIndex] = char;

  slotCard.innerHTML = `
    <div class="char-header">${char.name} <span class="badge">${char.constellation}</span></div>
    
    <div class="section-title">Arma</div>
    <div style="font-weight:bold;">${char.weapon.name} (${char.weapon.refinement})</div>

    <div class="section-title">Sets & Crit Ratio</div>
    <ul class="stats-list">
      <li><span>Artefactos:</span> <strong>${char.sets}</strong></li>
      <li><span>CR / CD:</span> <strong>${char.critRatio}</strong></li>
      <li><span>Crit Value:</span> <strong>${char.cv}</strong></li>
    </ul>

    <div class="section-title">Estadísticas</div>
    <ul class="stats-list">
      <li><span>Vida (HP):</span> <strong>${char.stats.hp}</strong></li>
      <li><span>Ataque (ATK):</span> <strong>${char.stats.atk}</strong></li>
      <li><span>Defensa (DEF):</span> <strong>${char.stats.def}</strong></li>
      <li><span>Maestría (EM):</span> <strong>${char.stats.em}</strong></li>
      <li><span>Recarga (ER):</span> <strong>${char.stats.er}</strong></li>
    </ul>
  `;
};

/* ============================================================
 * 3. MOTOR DE OPTIMIZACIÓN DE ROTACIÓN
 * ============================================================ */
function calculateOptimalRotation() {
  const consoleElem = document.getElementById('outputConsole');
  if (!consoleElem) return;

  const activeTeam = currentTeamSlots.filter(c => c !== null);

  if (activeTeam.length === 0) {
    consoleElem.textContent = 'Selecciona al menos 1 personaje en algún slot para simular.';
    return;
  }

  let log = `=== ROTACIÓN Y CÁLCULO DE DAÑO MÁXIMO ÓPTIMO ===\n`;
  log += `Equipo (${activeTeam.length}): ${activeTeam.map(c => `${c.name} [${c.constellation}]`).join(', ')}\n\n`;

  let totalDmg = 0;
  
  activeTeam.forEach((char, index) => {
    const crCdParts = char.critRatio.split(':').map(v => parseFloat(v) || 50);
    const cr = (crCdParts[0] || 50) / 100;
    const cd = (crCdParts[1] || 100) / 100;
    
    const baseAtk = char.stats.atk || 1500;
    const expectedCritMult = 1 + (cr * cd);

    const skillDmg = Math.round(baseAtk * 2.2 * expectedCritMult);
    const burstDmg = Math.round(baseAtk * 4.5 * expectedCritMult);
    const charTotal = skillDmg + burstDmg;

    totalDmg += charTotal;

    log += `Paso ${index + 1}: ${char.name} (${char.constellation} | ${char.weapon.refinement})\n`;
    log += `  -> Habilidad Elemental (E): ${skillDmg.toLocaleString()} pts de daño promedio\n`;
    log += `  -> Habilidad Definitiva (Q): ${burstDmg.toLocaleString()} pts de daño promedio\n`;
  });

  log += `\n======================================================\n`;
  log += `DAÑO TOTAL ACUMULADO EN ROTACIÓN: ${totalDmg.toLocaleString()} pts\n`;
  log += `======================================================\n`;

  consoleElem.textContent = log;
}