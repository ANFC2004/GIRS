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
  10000140: 'Vodyanitsa',
  10000113: 'Vesna',
  10000150: 'Odette',
  10000148: 'Aliosha',
  10000116: 'Sandrone',
  10000117: 'Lohen',
  10000118: 'Nicole',
  10000131: 'Prune',
  10000120: 'Linnéa',
  10000121: 'Varka',
  10000122: 'Néfer',
  10000123: 'Illuga',
  10000125: 'Colombina',
  10000124: 'Durin',
  10000126: 'Jahoda',
  10000127: 'Zibai',
  10000128: 'Manekín (Femenino)',
  10000129: 'Manekín (Masculino)',
  10000130: 'Flins',
  10000119: 'Lauma',
  10000132: 'Aino',
  10000133: 'Ineffa',
  10000114: 'Skirk',
  10000135: 'Dahlia',
  10000112: 'Escoffier',
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

// Consulta a Enka.network procesando equipamiento y talentos
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

    // --- Procesar Arma y Artefactos desde equipList ---
    let weaponName = 'Arma Desconocida';
    let weaponRefinement = 'R1';
    const setCounts = {};

    if (avatar.equipList && Array.isArray(avatar.equipList)) {
      avatar.equipList.forEach(equip => {
        const flat = equip.flat;
        if (!flat) return;

        // Extraer Arma
        if (flat.itemType === 'ITEM_WEAPON') {
          weaponName = flat.nameTextMapHash || equip.weapon?.name || flat.setNameTextMapHash || 'Arma Equipada';
          const affixMap = equip.weapon?.affixMap;
          if (affixMap) {
            const refVal = Object.values(affixMap)[0];
            weaponRefinement = `R${(refVal !== undefined ? refVal + 1 : 1)}`;
          }
        }

        // Extraer Sets de Artefactos
        if (flat.itemType === 'ITEM_RELIQUARY') {
          const setName = flat.setNameTextMapHash || 'Artefacto';
          setCounts[setName] = (setCounts[setName] || 0) + 1;
        }
      });
    }

    // Formatear bonificaciones de conjuntos
    const activeSets = [];
    for (const [setName, count] of Object.entries(setCounts)) {
      if (count >= 4) {
        activeSets.push(`4x ${setName}`);
      } else if (count >= 2) {
        activeSets.push(`2x ${setName}`);
      }
    }
    const setsFormatted = activeSets.length > 0 ? activeSets.join(' + ') : 'Sin conjunto activo';

    // Extraer niveles iniciales de talentos (si existen en Enka)
    const skillMap = avatar.skillLevelMap || {};
    const skillKeys = Object.keys(skillMap);
    const talentLevels = {
      normal: skillMap[skillKeys[0]] || 10,
      skill: skillMap[skillKeys[1]] || 10,
      burst: skillMap[skillKeys[2]] || 10
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
 * 2. PÁGINA SIMULADOR: Visualización en Slots y Rotaciones
 * ============================================================ */
let globalProfileData = null;
let currentTeamSlots = [null, null, null, null]; // Guarda los índices de personajes seleccionados por slot

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

// Deshabilita en los demás slots los personajes que ya hayan sido seleccionados
function updateSelectOptionsDisabledState() {
  const selects = document.querySelectorAll('.char-select');
  selects.forEach((select, currentSlotIndex) => {
    const options = select.querySelectorAll('option');
    options.forEach(opt => {
      if (opt.value === '') return;
      const charIdxVal = parseInt(opt.value, 10);

      // Verificar si está seleccionado en un slot DISTINTO
      const isSelectedElsewhere = currentTeamSlots.some((slotCharIdx, slotIdx) => {
        return slotIdx !== currentSlotIndex && slotCharIdx === charIdxVal;
      });

      opt.disabled = isSelectedElsewhere;
    });
  });
}

// Genera opciones del 1 al 15 para los selectores de talentos
function generateTalentOptions(selectedLevel) {
  let optionsHtml = '';
  for (let i = 1; i <= 15; i++) {
    const isSelected = i === selectedLevel ? 'selected' : '';
    optionsHtml += `<option value="${i}" ${isSelected}>Nivel ${i}</option>`;
  }
  return optionsHtml;
}

// Actualiza el nivel del talento en el estado local cuando cambia la opción
window.updateTalentLevel = function(slotIndex, talentType, levelValue) {
  const charIdx = currentTeamSlots[slotIndex];
  if (charIdx !== null && globalProfileData.characters[charIdx]) {
    globalProfileData.characters[charIdx].talents[talentType] = parseInt(levelValue, 10);
  }
};

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

    <div class="section-title">Nivel de Talentos (1 - 15)</div>
    <div class="talents-group" style="display: flex; flex-direction: column; gap: 6px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;">
      <label style="display:flex; justify-size: space-between; justify-content: space-between; font-size: 0.82rem; align-items:center;">
        <span>Ataque Normal:</span>
        <select onchange="window.updateTalentLevel(${slotIndex}, 'normal', this.value)" style="padding: 2px 4px; border-radius: 4px; background: #2d3748; color: #fff; border: 1px solid #4a5568;">
          ${generateTalentOptions(char.talents.normal)}
        </select>
      </label>
      <label style="display:flex; justify-content: space-between; font-size: 0.82rem; align-items:center;">
        <span>Elemental (E):</span>
        <select onchange="window.updateTalentLevel(${slotIndex}, 'skill', this.value)" style="padding: 2px 4px; border-radius: 4px; background: #2d3748; color: #fff; border: 1px solid #4a5568;">
          ${generateTalentOptions(char.talents.skill)}
        </select>
      </label>
      <label style="display:flex; justify-content: space-between; font-size: 0.82rem; align-items:center;">
        <span>Definitiva (Q):</span>
        <select onchange="window.updateTalentLevel(${slotIndex}, 'burst', this.value)" style="padding: 2px 4px; border-radius: 4px; background: #2d3748; color: #fff; border: 1px solid #4a5568;">
          ${generateTalentOptions(char.talents.burst)}
        </select>
      </label>
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
 * 3. MOTOR DE OPTIMIZACIÓN DE ROTACIÓN
 * ============================================================ */
function calculateOptimalRotation() {
  const consoleElem = document.getElementById('outputConsole');
  if (!consoleElem) return;

  const activeTeamSlots = currentTeamSlots.filter(s => s !== null);

  if (activeTeamSlots.length === 0) {
    consoleElem.textContent = 'Selecciona al menos 1 personaje en algún slot para simular.';
    return;
  }

  let log = `=== ROTACIÓN Y CÁLCULO DE DAÑO MÁXIMO ÓPTIMO ===\n`;
  log += `Integrantes del equipo (${activeTeamSlots.length}):\n`;

  let totalDmg = 0;
  
  activeTeamSlots.forEach((charIdx, index) => {
    const char = globalProfileData.characters[charIdx];
    const crCdParts = char.critRatio.replace(/%/g, '').split(':').map(v => parseFloat(v) || 50);
    const cr = Math.min(1, Math.max(0, (crCdParts[0] || 50) / 100));
    const cd = (crCdParts[1] || 100) / 100;
    
    const baseAtk = char.stats.atk || 1500;
    const expectedCritMult = 1 + (cr * cd);

    // Multiplicadores por nivel de talento
    const skillTalentMult = 1 + ((char.talents.skill - 1) * 0.08);
    const burstTalentMult = 1 + ((char.talents.burst - 1) * 0.09);

    const skillDmg = Math.round(baseAtk * 2.2 * skillTalentMult * expectedCritMult);
    const burstDmg = Math.round(baseAtk * 4.5 * burstTalentMult * expectedCritMult);
    const charTotal = skillDmg + burstDmg;

    totalDmg += charTotal;

    log += `\n[ Slot ${index + 1} ] ${char.name} (${char.constellation})\n`;
    log += `  - Arma: ${char.weapon.name} (${char.weapon.refinement})\n`;
    log += `  - Sets: ${char.sets}\n`;
    log += `  - Talentos: NA Lv.${char.talents.normal} | E Lv.${char.talents.skill} | Q Lv.${char.talents.burst}\n`;
    log += `  -> Habilidad Elemental (E): ${skillDmg.toLocaleString()} pts de daño medio\n`;
    log += `  -> Habilidad Definitiva (Q): ${burstDmg.toLocaleString()} pts de daño medio\n`;
  });

  log += `\n======================================================\n`;
  log += `DAÑO TOTAL ACUMULADO EN ROTACIÓN: ${totalDmg.toLocaleString()} pts\n`;
  log += `======================================================\n`;

  consoleElem.textContent = log;
}