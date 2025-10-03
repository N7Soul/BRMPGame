const CREATURES = [
  // Common
  {name:'Noobini Pizzanini',rarity:'Common',weight:100,price:25,income:1},
  {name:'Lirili Larila',rarity:'Common',weight:95,price:250,income:3},
  {name:'Tim Cheese',rarity:'Common',weight:90,price:500,income:5},
  {name:'Fluri Flura',rarity:'Common',weight:85,price:750,income:7},
  {name:'Talpa Di Fero',rarity:'Common',weight:80,price:1000,income:9},
  {name:'Svinina Bombardino',rarity:'Common',weight:75,price:1200,income:10},
  {name:'Pipi Kiwi',rarity:'Common',weight:70,price:1500,income:13},
  {name:'Racooni Jandelini',rarity:'Common',weight:65,price:1300,income:12},
  {name:'Pipi Corni',rarity:'Common',weight:60,price:1700,income:14},
  // Rare
  {name:'Trippi Troppi',rarity:'Rare',weight:40,price:2000,income:15},
  {name:'Gangster Footera',rarity:'Rare',weight:35,price:4000,income:30},
  {name:'Bandito Bobritto',rarity:'Rare',weight:32,price:4500,income:35},
  {name:'Boneca Ambalabu',rarity:'Rare',weight:30,price:5000,income:40},
  {name:'Cacto Hipopotamo',rarity:'Rare',weight:28,price:6500,income:50},
  {name:'Ta Ta Ta Ta Sahur',rarity:'Rare',weight:25,price:7500,income:55},
  {name:'Tric Trac Baraboom',rarity:'Rare',weight:22,price:9000,income:65},
  {name:'Pipi Avocado',rarity:'Rare',weight:20,price:9500,income:70},
  // Epic
  {name:'Cappuccino Assassino',rarity:'Epic',weight:12,price:10000,income:75},
  {name:'Brr Brr Patapim',rarity:'Epic',weight:10,price:15000,income:100},
  {name:'Trulimero Trulicina',rarity:'Epic',weight:9,price:20000,income:125},
  {name:'Bambini Crostini',rarity:'Epic',weight:8,price:22500,income:130},
  {name:'Bananita Dolphinita',rarity:'Epic',weight:7,price:25000,income:150},
  {name:'Perochello Lemonchello',rarity:'Epic',weight:6.5,price:27500,income:160},
  {name:'Brri Brri Bicus Dicus Bombicus',rarity:'Epic',weight:6,price:30000,income:175},
  {name:'Ti Ti Ti Sahur',rarity:'Epic',weight:5.5,price:37500,income:225},
  {name:'Avocadini Guffo',rarity:'Epic',weight:5,price:35000,income:225},
  {name:'Salamino Penguino',rarity:'Epic',weight:4.5,price:40000,income:250},
  {name:'Penguino Cocosino',rarity:'Epic',weight:4,price:42500,income:275},
  // Legendary
  {name:'Burbaloni Loliloli',rarity:'Legendary',weight:2.5,price:45000,income:300},
  {name:'Chimpazini Bananini',rarity:'Legendary',weight:2.2,price:50000,income:400},
  {name:'Ballerina Cappuccina',rarity:'Legendary',weight:2,price:100000,income:500},
  {name:'Chef Crabracadabra',rarity:'Legendary',weight:1.8,price:150000,income:600},
  {name:'Lionel Cactuseli',rarity:'Legendary',weight:1.6,price:175000,income:650},
  {name:'Glorbo Fruttodrillo',rarity:'Legendary',weight:1.4,price:200000,income:750},
  {name:'Blueberrini Octopusini',rarity:'Legendary',weight:1.2,price:250000,income:1000},
  {name:'Strawberelli Flamingelli',rarity:'Legendary',weight:1,price:275000,income:1100},
  {name:'Pandaccini Bananini',rarity:'Legendary',weight:0.9,price:300000,income:1200},
  {name:'Cocosini Mama',rarity:'Legendary',weight:0.8,price:285000,income:1200},
  {name:'Sigma Boy',rarity:'Legendary',weight:0.7,price:325000,income:1300},
  {name:'Pi Pi Watermelon',rarity:'Legendary',weight:0.6,price:135000,income:1300},
  // Mythic
  {name:'Frigo Camelo',rarity:'Mythic',weight:0.115,price:300000,income:1400},
  {name:'Orangutini Ananassini',rarity:'Mythic',weight:0.1125,price:400000,income:1700},
  {name:'Rhino Toasterino',rarity:'Mythic',weight:0.11,price:450000,income:2100},
  {name:'Bombardiro Crocodilo',rarity:'Mythic',weight:0.1075,price:500000,income:2500},
  {name:'Bombombini Gusini',rarity:'Mythic',weight:0.105,price:1000000,income:5000},
  {name:'Avocadorilla',rarity:'Mythic',weight:0.1025,price:2000000,income:7500},
  {name:'Cavallo Virtuso',rarity:'Mythic',weight:0.1,price:2500000,income:7500},
  {name:'Gorillo Watermelondrillo',rarity:'Mythic',weight:0.0975,price:3000000,income:8000},
  {name:'Tob Tobi Tobi',rarity:'Mythic',weight:0.095,price:3500000,income:8500},
  {name:'Ganganzelli Trulala',rarity:'Mythic',weight:0.0925,price:4000000,income:9000},
  {name:'Te Te Te Sahur',rarity:'Mythic',weight:0.09,price:2500000,income:9500},
  {name:'Lerulerulerule',rarity:'Mythic',weight:0.0875,price:3500000,income:8700},
  {name:'Tracoducotulu Delapeladustuz',rarity:'Mythic',weight:0.085,price:3000000,income:10000},
  // Brainrot God
  {name:'Coco Elefanto',rarity:'Brainrot God',weight:0.0825,price:5000000,income:15000},
  {name:'Girafa Celestre',rarity:'Brainrot God',weight:0.08,price:7500000,income:20000},
  {name:'Gattatino Nyanino',rarity:'Brainrot God',weight:0.0775,price:7500000,income:35000},
  {name:'Chihuanini Taconini',rarity:'Brainrot God',weight:0.075,price:8500000,income:45000},
  {name:'Matteo',rarity:'Brainrot God',weight:0.0725,price:10000000,income:50000},
  {name:'Tralalero Tralala',rarity:'Brainrot God',weight:0.07,price:10000000,income:50000},
  {name:'Los Crocodillitos',rarity:'Brainrot God',weight:0.0675,price:12500000,income:55000},
  {name:'Odin Din Din Dun',rarity:'Brainrot God',weight:0.065,price:15000000,income:75000},
  {name:'Statutino Libertino',rarity:'Brainrot God',weight:0.0625,price:20000000,income:75000},
  {name:'Tukanno Bananno',rarity:'Brainrot God',weight:0.06,price:22500000,income:100000},
  {name:'Tipi Topi Taco',rarity:'Brainrot God',weight:0.0575,price:20000000,income:75000},
  {name:'Extinct Ballerina',rarity:'Brainrot God',weight:0.055,price:23500000,income:125000},
  {name:'Tralalita Tralala',rarity:'Brainrot God',weight:0.0525,price:20000000,income:100000},
  {name:'Espresso Signora',rarity:'Brainrot God',weight:0.05,price:25000000,income:70000},
  {name:'Trenostruzzo Turbo 3000',rarity:'Brainrot God',weight:0.0475,price:25000000,income:150000},
  {name:'Urubini Flamenguini',rarity:'Brainrot God',weight:0.045,price:30000000,income:150000},
  {name:'Trippi Troppi Troppa Trippa',rarity:'Brainrot God',weight:0.0425,price:30000000,income:175000},
  {name:'Gattito Tacoto',rarity:'Brainrot God',weight:0.04,price:32500000,income:160000},
  {name:'Ballerino Lololo',rarity:'Brainrot God',weight:0.0375,price:35000000,income:200000},
  {name:'Pakrahmatmamat',rarity:'Brainrot God',weight:0.035,price:37500000,income:215000},
  {name:'Los Tungtungtungcitos',rarity:'Brainrot God',weight:0.0325,price:37500000,income:210000},
  {name:'Piccione Macchina',rarity:'Brainrot God',weight:0.03,price:40000000,income:225000},
  {name:'Tractoro Dinosauro',rarity:'Brainrot God',weight:0.0275,price:42500000,income:230000},
  {name:'Los Bombinitos',rarity:'Brainrot God',weight:0.025,price:42500000,income:220000},
  {name:'Los Orcalitos',rarity:'Brainrot God',weight:0.0225,price:45000000,income:235000},
  {name:'Los Tipi Tacos',rarity:'Brainrot God',weight:0.02,price:46000000,income:260000},
  {name:'Bombardini Tortinii',rarity:'Brainrot God',weight:0.0175,price:50000000,income:225000},
  // Secret
  {name:'Las Sis',rarity:'Secret',weight:0.01,price:25000000,income:17500},
  {name:'La Vacca Staturno Saturnita',rarity:'Secret',weight:0.00975,price:30000000,income:25000},
  {name:'Blackhole Goat',rarity:'Secret',weight:0.0095,price:45000000,income:40000},
  {name:'Agarrini la Palini',rarity:'Secret',weight:0.00925,price:60000000,income:42500},
  {name:'Los Matteos',rarity:'Secret',weight:0.009,price:75000000,income:30000},
  {name:'Chimpanzini Spiderini',rarity:'Secret',weight:0.00875,price:100000000,income:32500},
  {name:'Sammyini Spyderini',rarity:'Secret',weight:0.0085,price:125000000,income:32500},
  {name:'Extinct Tralalero',rarity:'Secret',weight:0.00825,price:150000000,income:45000},
  {name:'Extinct Matteo',rarity:'Secret',weight:0.008,price:175000000,income:62500},
  {name:'Dul Dul Dul',rarity:'Secret',weight:0.00775,price:200000000,income:37500},
  {name:'Los Tralaleritos',rarity:'Secret',weight:0.0075,price:225000000,income:50000},
  {name:'Las Tralaleritas',rarity:'Secret',weight:0.00725,price:250000000,income:65000},
  {name:'Las Vaquitas Saturnitas',rarity:'Secret',weight:0.007,price:275000000,income:75000},
  {name:'La Karkerkar Combinasion',rarity:'Secret',weight:0.00675,price:300000000,income:70000},
  {name:'Job Job Job Sahur',rarity:'Secret',weight:0.0065,price:325000000,income:70000},
  {name:'Los Spyderrinis',rarity:'Secret',weight:0.00625,price:350000000,income:45000},
  {name:'Graipuss Medussi',rarity:'Secret',weight:0.006,price:375000000,income:100000},
  {name:'Los Hotspotsitos',rarity:'Secret',weight:0.00575,price:400000000,income:2000000},
  {name:'Nooo My Hotspot',rarity:'Secret',weight:0.0055,price:425000000,income:150000},
  {name:'La Sahur Combinasion',rarity:'Secret',weight:0.00525,price:450000000,income:200000},
  {name:'Quesadilla Crocodila',rarity:'Secret',weight:0.005,price:475000000,income:300000},
  {name:'Chicleteira Bicicleteira',rarity:'Secret',weight:0.00475,price:500000000,income:350000},
  {name:'Spaghetti Tualetti',rarity:'Secret',weight:0.0045,price:525000000,income:6000000},
  {name:'La Grande Combinasion',rarity:'Secret',weight:0.00425,price:550000000,income:1000000},
  {name:'Los Noo My Hotspotsitos',rarity:'Secret',weight:0.004,price:575000000,income:500000},
  {name:'67',rarity:'Secret',weight:0.00375,price:600000000,income:750000},
  {name:'Los Combinasionas',rarity:'Secret',weight:0.0035,price:625000000,income:6370000},
  {name:'Karkerkar Kurkur',rarity:'Secret',weight:0.00325,price:650000000,income:240000},
  {name:'Nuclearo Dinossauro',rarity:'Secret',weight:0.003,price:675000000,income:1500000},
  {name:'Celularcini Viciosini',rarity:'Secret',weight:0.00275,price:700000000,income:2250000},
  {name:'Tralaledon',rarity:'Secret',weight:0.0025,price:725000000,income:2750000},
  {name:'La Extinct Grande',rarity:'Secret',weight:0.00225,price:750000000,income:2350000},
  {name:'Ketupat Kepat',rarity:'Secret',weight:0.002,price:775000000,income:3500000},
  {name:'La Supreme Combinasion',rarity:'Secret',weight:0.00175,price:800000000,income:4000000},
  {name:'Ketchuru and Musturu',rarity:'Secret',weight:0.0015,price:825000000,income:4250000},
  {name:'Garama and Madundung',rarity:'Secret',weight:0.00125,price:850000000,income:5000000},
  {name:'Dragon Cannelloni',rarity:'Secret',weight:0.001,price:1000000000,income:10000000},
  // OG
  {name:'Derktism Trainino',rarity:'OG',weight:0.00001,price:2500000000,income:25000000},
  {name:'Davidinni Prereleasito',rarity:'OG',weight:0.00001,price:2500000000,income:2500000},
  {name:'Tynino Swolgrande',rarity:'OG',weight:0.00001,price:2500000000,income:2500000},
  {name:'Dandutto Sleepini',rarity:'OG',weight:0.00001,price:2500000000,income:2500000},
  {name:'Bree No Bicus Dicus',rarity:'OG',weight:0.00001,price:2500000000,income:2500000},
  {name:'Roborni Cheatorni',rarity:'OG',weight:0.00001,price:2500000000,income:2500000},
  {name:'Jordonia Verizonia',rarity:'OG',weight:0.00001,price:2500000000,income:2500000},
  {name:'Nikkito Parverino',rarity:'OG',weight:0.00001,price:2500000000,income:2500000},
  {name:'Tifforny Pooterus',rarity:'OG',weight:0.00001,price:2500000000,income:2500000},
];

let state = {currency:25,vault:[],conveyor:[],multiplier:1,discovered:[],ownedCounts:{},usedCodes:[],maxBrainrots:5,incomeMultiplier:1,luck:0,stats:{totalMoneyMade:0,totalBrainrotsPurchased:0,totalBrainrotsSold:0,totalUpgradesPurchased:0}};

// Rarity ranking helper (higher = rarer)
const RARITY_RANK = {og:9, secret:8, 'Brainrot God':7, mythic:6, legendary:5, epic:4, rare:3, uncommon:2, common:1};
function rarityRank(r){ return RARITY_RANK[(r||'').toLowerCase()] || 0 }

function saveState(){
  localStorage.setItem('collector', JSON.stringify({
    ...state,
    lastSaveTime: Date.now()
  }));
  // Also save countdown timer
  localStorage.setItem('countdownTimer', JSON.stringify({
    refreshRemaining: refreshRemaining,
    lastSaved: Date.now()
  }));
}
function loadState(){
  const saved = localStorage.getItem('collector');
  if(saved) state = JSON.parse(saved);
  // backfill discovered if missing (older saves)
  if(!state.discovered) state.discovered = [];
  // backfill usedCodes if missing (older saves)
  if(!state.usedCodes) state.usedCodes = [];
  
  if(!state.maxBrainrots) state.maxBrainrots = 5;
  if(!state.incomeMultiplier) state.incomeMultiplier = 1;
  if(!state.luck) state.luck = 0;
  // backfill stats if missing (older saves)
  if(!state.stats) state.stats = {totalMoneyMade:0,totalBrainrotsPurchased:0,totalBrainrotsSold:0,totalUpgradesPurchased:0};
  // ensure ownedCounts exists and backfill from current vault if missing
  if(!state.ownedCounts) {
    state.ownedCounts = {};
    if(Array.isArray(state.vault)){
      state.vault.forEach(v=>{ state.ownedCounts[v.name] = (state.ownedCounts[v.name]||0)+1 });
    }
  }
  
  // Calculate offline progression
  if(state.lastSaveTime) {
    const offlineProgress = calculateOfflineProgress();
    if(offlineProgress && offlineProgress.income > 0) {
      showOfflineModal(offlineProgress);
    }
  }
  
  // Load countdown timer
  const savedTimer = localStorage.getItem('countdownTimer');
  if(savedTimer) {
    try {
      const timerData = JSON.parse(savedTimer);
      const timePassed = Math.floor((Date.now() - timerData.lastSaved) / 1000);
      refreshRemaining = Math.max(0, timerData.refreshRemaining - timePassed);
      
      // If timer expired while away, refresh immediately
      if(refreshRemaining <= 0) {
        spawnRandom();
        refreshRemaining = REFRESH_INTERVAL;
      }
    } catch(e) {
      // If there's an error parsing, just use default
      refreshRemaining = REFRESH_INTERVAL;
    }
  }
  
  // If no conveyor exists or is empty, spawn new creatures
  if(!state.conveyor || state.conveyor.length === 0) {
    spawnRandom();
  }
}

function fmt(n){return Math.floor(n).toLocaleString()}

// Offline progression calculation
function calculateOfflineProgress() {
  if (!state.lastSaveTime) return null;
  
  const now = Date.now();
  const timeDiffSeconds = (now - state.lastSaveTime) / 1000;
  
  // Only show offline progress if away for more than 2 minutes
  if (timeDiffSeconds < 120) return null;
  
  const incomePerSecond = state.vault.reduce((s,c) => s + c.income, 0) * state.multiplier * state.incomeMultiplier;
  
  // Cap at 8 hours and apply 50% offline efficiency
  const maxOfflineSeconds = 8 * 60 * 60; // 8 hours
  const effectiveTime = Math.min(timeDiffSeconds, maxOfflineSeconds);
  const offlineIncome = Math.floor(incomePerSecond * effectiveTime * 0.5); // 50% efficiency
  
  return {
    timeAway: timeDiffSeconds,
    effectiveTime: effectiveTime,
    income: offlineIncome,
    wasCapped: timeDiffSeconds > maxOfflineSeconds
  };
}

// Format time duration for display
function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else if (minutes > 0) {
    return `${minutes}m ${secs}s`;
  } else {
    return `${secs}s`;
  }
}

// Show offline progress modal
function showOfflineModal(progress) {
  const timeAwayText = formatTime(progress.timeAway);
  const effectiveTimeText = formatTime(progress.effectiveTime);
  const cappedText = progress.wasCapped ? ' (capped at 8 hours)' : '';
  
  const offlineModalHtml = `
    <div id="offlineModal" class="modal-overlay">
      <div class="modal-box">
        <div style="font-weight:700;margin-bottom:16px;text-align:center;color:#ffffff">Welcome Back!</div>
        <div style="color:var(--muted);margin-bottom:16px;text-align:center">
          <p>You were away for <strong>${timeAwayText}</strong>${cappedText}</p>
          <p>Your Brainrots earned <strong style="color:#ffffff">$${fmt(progress.income)}</strong>!</p>
          <p style="font-size:12px;color:var(--muted)">Offline efficiency: 50% • Max offline time: 8 hours</p>
        </div>
        <div class="modal-actions" style="justify-content:center">
          <button id="claimOfflineReward" style="background:var(--accent);color:white;padding:12px 12px">Claim Rewards!</button>
        </div>
      </div>
    </div>`;
  
  document.body.insertAdjacentHTML('beforeend', offlineModalHtml);
  
  // Add event listener for claim button
  document.getElementById('claimOfflineReward').onclick = () => {
    state.currency += progress.income;
    // Track offline income in total money made
    state.stats.totalMoneyMade += progress.income;
    const modal = document.getElementById('offlineModal');
    if (modal) modal.remove();
    renderAll();
    saveState();
  };
}
function pickWeighted(list){
  // Apply luck modifiers to weights
  const modifiedList = list.map(creature => {
    const luckEffect = getLuckEffect(creature.rarity, state.luck);
    return {
      ...creature,
      weight: Math.max(0.001, creature.weight * luckEffect) // Ensure minimum weight
    };
  });
  
  const total = modifiedList.reduce((s,c)=>s+c.weight,0);
  let r=Math.random()*total;
  for(const c of modifiedList){r-=c.weight;if(r<=0) return {...c}};
  return {...modifiedList[modifiedList.length-1]};
}

// Luck effect configuration - easily adjustable
function getLuckEffect(rarity, luckLevel) {
  if (luckLevel === 0) return 1; // No luck = no change
  
  // Base multiplier per luck level (easily adjustable)
  const luckMultiplier = 0.02; // 2% change per luck level
  
  // Rarity multipliers (easily adjustable)
  const rarityMultipliers = {
    'Common': -1,           // Decreases common spawns
    'Rare': 0.2,           // Slight increase
    'Epic': 0.5,           // Moderate increase  
    'Legendary': 1,        // Good increase
    'Mythic': 1.5,         // Better increase
    'Brainrot God': 2,     // Great increase
    'Secret': 2.5,         // Best increase
    'OG': 3               // Ultimate increase
  };
  
  const rarityMult = rarityMultipliers[rarity] || 0;
  const effect = 1 + (luckLevel * luckMultiplier * rarityMult);
  
  return Math.max(0.1, effect); // Prevent weights from going too low
}

// Function to spawn a random creature of a specific rarity
function pickByRarity(targetRarity) {
  // Filter creatures by the target rarity
  const creaturesOfRarity = CREATURES.filter(creature => 
    creature.rarity.toLowerCase() === targetRarity.toLowerCase()
  );
  
  if (creaturesOfRarity.length === 0) {
    console.warn(`No creatures found for rarity: ${targetRarity}`);
    return null;
  }
  
  // Pick a random creature from the filtered list
  const randomIndex = Math.floor(Math.random() * creaturesOfRarity.length);
  return {...creaturesOfRarity[randomIndex]};
}

// Function to spawn a random creature of specific rarity with weighted selection within that rarity
function pickByRarityWeighted(targetRarity) {
  // Filter creatures by the target rarity
  const creaturesOfRarity = CREATURES.filter(creature => 
    creature.rarity.toLowerCase() === targetRarity.toLowerCase()
  );
  
  if (creaturesOfRarity.length === 0) {
    console.warn(`No creatures found for rarity: ${targetRarity}`);
    return null;
  }
  
  // Apply luck effects to the filtered list
  const modifiedList = creaturesOfRarity.map(creature => {
    const luckEffect = getLuckEffect(creature.rarity, state.luck);
    return {
      ...creature,
      weight: Math.max(0.001, creature.weight * luckEffect)
    };
  });
  
  // Use weighted selection within the rarity
  const total = modifiedList.reduce((s,c) => s + c.weight, 0);
  let r = Math.random() * total;
  for(const c of modifiedList) {
    r -= c.weight;
    if(r <= 0) return {...c};
  }
  return {...modifiedList[modifiedList.length-1]};
}

const currencyEl=document.getElementById('currency');
const spawnListEl=document.getElementById('spawnList');
const ownedEl=document.getElementById('owned');
const incomeBtn = document.getElementById('incomeBtn');

function renderSpawner(){
  spawnListEl.innerHTML='';
  state.conveyor.slice().forEach((c,i)=>{
  const canAfford = state.currency >= c.price;
  const div=document.createElement('div');div.className='item rarity-'+c.rarity.replace(/ /g, '-');
  const buttonClass = canAfford ? '' : ' disabled';
  div.innerHTML=`<div><div class='creature-name'>${c.name}</div><div class='rarity-text muted'>${c.rarity} - Monini: ${fmt(c.income)} per Sec</div></div><div style='text-align:center;display:flex;align-items:center;justify-content:center'><button class='${buttonClass}'>Buy for $${fmt(c.price)}</button></div>`;
    spawnListEl.appendChild(div);
    div.querySelector('button').onclick=()=>{
      if(state.currency<c.price) return;
      if(state.vault.length >= state.maxBrainrots) {
        showSellModal(
          `You can currently only own ${state.maxBrainrots} Brainrots! Upgrade your Max Brainrots to own more.`,
          'Max Brainrots Reached',
          false
        );
        return;
      }
      state.currency-=c.price;
      state.vault.push(c);
      // Track brainrot purchase in stats
      state.stats.totalBrainrotsPurchased += 1;
      // mark as discovered persistently
      if(!state.discovered.includes(c.name)) state.discovered.push(c.name);
      // increment historical owned count
      state.ownedCounts[c.name] = (state.ownedCounts[c.name]||0) + 1;
      const index = state.conveyor.indexOf(c);
      if(index > -1) state.conveyor.splice(index,1);
      renderAll();
      saveState();
    };
  });
}

function renderOwned(){
  ownedEl.innerHTML='';
  
  // Update the owned header with capacity counter
  const ownedHeader = document.querySelector('.card:last-child .muted[style*="font-weight:600"]');
  if(ownedHeader) {
    ownedHeader.innerHTML = `Brainrots Owned <span style="color:#10b981; font-weight:normal; font-size:14px;">${state.vault.length}/${state.maxBrainrots}</span>`;
  }
  
  // Sort by rarity (rarer first) then by income desc
  const sorted = [...state.vault].sort((a,b)=>{
    const r = rarityRank(b.rarity) - rarityRank(a.rarity);
    if(r!==0) return r;
    return b.income - a.income;
  });
  sorted.forEach((c)=>{
    const sell=Math.floor(c.price*0.4);
  const div=document.createElement('div');div.className='item rarity-'+c.rarity.replace(/ /g, '-');
  div.innerHTML=`<div><div class='creature-name'>${c.name}</div><div class='rarity-text muted'>${c.rarity} • income ${fmt(c.income)} per Sec</div></div><div style='text-align:center;display:flex;align-items:center;justify-content:center'><button>Sell for $${fmt(sell)}</button></div>`;
    ownedEl.appendChild(div);
    div.querySelector('button').onclick=()=>{
      // find the actual index of this item in state.vault (handles duplicates correctly)
      const idx = state.vault.findIndex(v=>v===c || (v.name===c.name && v.price===c.price && v.income===c.income));
      if(idx > -1) state.vault.splice(idx,1);
      state.currency+=sell;
      // Track brainrot sale in stats
      state.stats.totalBrainrotsSold += 1;
      // Track money made from sale
      state.stats.totalMoneyMade += sell;
      renderAll();
      saveState();
    };
  });
}

function renderStats(){
  const totalMoneyMadeEl = document.getElementById('totalMoneyMade');
  const totalBrainrotsPurchasedEl = document.getElementById('totalBrainrotsPurchased');
  const totalBrainrotsSoldEl = document.getElementById('totalBrainrotsSold');
  const totalUpgradesPurchasedEl = document.getElementById('totalUpgradesPurchased');
  
  if(totalMoneyMadeEl) totalMoneyMadeEl.textContent = `$${fmt(state.stats.totalMoneyMade)}`;
  if(totalBrainrotsPurchasedEl) totalBrainrotsPurchasedEl.textContent = fmt(state.stats.totalBrainrotsPurchased);
  if(totalBrainrotsSoldEl) totalBrainrotsSoldEl.textContent = fmt(state.stats.totalBrainrotsSold);
  if(totalUpgradesPurchasedEl) totalUpgradesPurchasedEl.textContent = fmt(state.stats.totalUpgradesPurchased);
}

function renderAll(){
  currencyEl.textContent=`$${fmt(state.currency)}`;
  // compute income per second from owned items, multiplier, and income multiplier
  const incomePerSec = state.vault.reduce((s,c)=>s+c.income,0) * state.multiplier * state.incomeMultiplier;
  if (incomeBtn) incomeBtn.textContent = `Income: $${fmt(incomePerSec)} per Sec`;
  renderSpawner();
  renderOwned();
  renderUpgrades();
  renderStats();
}

function spawnRandom(){state.conveyor=[];for(let i=0;i<10;i++){state.conveyor.push(pickWeighted(CREATURES));}renderAll();}

// Auto-refresh creatures every 15 seconds and update countdown display
const REFRESH_INTERVAL = 15; // seconds
let refreshRemaining = REFRESH_INTERVAL;
let countdownInterval = null;

function tickCountdown(){
  refreshRemaining -= 1;
  console.log('Countdown tick:', refreshRemaining);
  if(refreshRemaining <= 0){
    console.log('Spawning new creatures');
    spawnRandom();
    refreshRemaining = REFRESH_INTERVAL;
  }
  const countdownEl = document.getElementById('countdown');
  if(countdownEl) countdownEl.textContent = String(refreshRemaining);
  
  // Save countdown state periodically
  saveCountdownOnly();
}

// Save only countdown data (more efficient than full state save)
function saveCountdownOnly() {
  localStorage.setItem('countdownTimer', JSON.stringify({
    refreshRemaining: refreshRemaining,
    lastSaved: Date.now()
  }));
}

// Ensure we only have one countdown interval running
function startCountdown() {
  if(countdownInterval) clearInterval(countdownInterval);
  countdownInterval = setInterval(tickCountdown, 1000);
}

// start ticking every second
startCountdown();

// Passive income interval
setInterval(()=>{
  const income = state.vault.reduce((s,c)=>s+c.income,0)*state.multiplier*state.incomeMultiplier/2;
  state.currency += income;
  // Track total money made in stats
  state.stats.totalMoneyMade += income;
  
  // Only update currency display and stats, don't recreate all DOM elements
  currencyEl.textContent=`$${fmt(state.currency)}`;
  renderStats();
  saveState();
},500);

loadState();
renderAll();

// Initialize countdown display
const countdownEl = document.getElementById('countdown');
if(countdownEl) countdownEl.textContent = String(refreshRemaining);

// Setup upgrade button event listeners
const maxBrainrotsBtn = document.querySelector('.upgrade-item:first-child button');
if(maxBrainrotsBtn) {
  maxBrainrotsBtn.onclick = upgradeMaxBrainrots;
}

const luckBtn = document.querySelector('.upgrade-item:nth-child(2) button');
if(luckBtn) {
  luckBtn.onclick = upgradeLuck;
}

const incomeMultiplierBtn = document.querySelector('.upgrade-item:last-child button');
if(incomeMultiplierBtn) {
  incomeMultiplierBtn.onclick = upgradeIncomeMultiplier;
}

// Modal markup insertion (created here so elements exist)
const modalHtml = `
<div id="aboutModal" class="modal-overlay hidden">
  <div class="modal-box-about" style="max-height:80vh;overflow-y:auto;position:relative">
    <!-- Hidden button in top right of modal -->
    <div id="aboutSecretBtn" style="position:absolute;top:10px;right:10px;width:20px;height:20px;cursor:pointer;opacity:0;"></div>
    <div style="font-weight:700;margin-bottom:8px">About Brainrotini Gamini</div>
    <div style="font-weight:700;margin-bottom:8px;color: #16bfc5ff">(email dcrider2003@gmail.com with title "BRGame Bug" for support)</div>
    <div style="color:var(--muted);margin-bottom:16px">
      <p>Welcome to Brainrotini Gamini! Collect brainrots and make the most money!</p>
      <p>Each brainrot generates Monini over time. Discover rare creatures and build your collection!</p>
      <p><em>**This game is very WIP and under development by me (with little coding experience) and AI, so I'm doing my best!**</em></p>
      <div style="font-weight:700;margin-bottom:8px;color: #ffffffff">Features:</div>
      <ul style="margin-left:20px">
        <li>100+ unique Brainrot characters</li>
        <li>9 rarity tiers from Common to OG</li>
        <li>Become the greatest Brainrot collector on the planet!</li>
      </ul>
      <div style="font-weight:700;margin-bottom:8px;color: #ffffffff">Version History:</div>
        <ul style="margin-left:20px">
        <li>Version: 0.3.1</li>
        <ul style="margin-left:20px">
          <li>Added counter so you know how many Luck/Income upgrades you've purchased</li>
          <li>Added new secret codes</li>
          <li>Minor god price adjustments</li>
          <li>Luck upgrade price/progression tweaked</li>
          <li>Fixed issue where sometimes you had to click multiple times to buy/sell</li>
          <li>Fixed secret codes so now Enter key will redeem as well</li>
          </ul>
        <li>Version: 0.3 (The Getting Somewhere Update)</li>
        <ul style="margin-left:20px">
          <li>Added "Stats" that will track a variety of things for your game</li>
          <li>Music player! Volume starts at 5%, click the name to change the song! (Currently 3 songs; credits below)</li>
          <li>Added a background to make the game  look less "bland"</li>
          <li>Even more UI polish</li>
          </ul>
        <li>Version: 0.2.4</li>
        <ul style="margin-left:20px">
          <li>Collection will now sort ascending by income for Brainrots</li>
          <li>Offline progression will only show if away for more than 2 minutes</li>
          <li>Slightly adjusted income of various Brainrots</li>
          <li>Even more UI polish</li>
          </ul>
        <li>Version: 0.2.3</li>
        <ul style="margin-left:20px">
          <li>Added offline progression (50% efficiency, max 8 hours)</li>
          <li>Changed location of codes button (so now they are SECRET codes)</li>
          <li>Added commas so that way income is easier to read</li>
          <li>Fancy new title font!</li>
          <li>More UI polish</li>
          </ul>
        <li>Version: 0.2.2</li>
        <ul style="margin-left:20px">
          <li>Balanced the odds of rarities Mythic and up</li>
          <li>Repaired luck upgrade so that it *actually* upgrades luck now</li>
          <li>Fixed the countdown and spawns refreshing with the web page (sorry exploiters!)</li>
          <li>Adjusted upgrade prices</li>
          <li>More UI updates for better compatibility (hopefully)</li>
          </ul>
        <li>Version: 0.2.1</li>
        <ul style="margin-left:20px">
          <li>Updated UI for better user experience on different resolutions</li>
          </ul>
        <li>Version: 0.2 (The Upgrade-date)</li>
        <ul style="margin-left:20px">
          <li>Implemented upgrade system that will allow you to upgrade your capacity, luck, and income!</li>
          <li>Major UI changes</li>
          <li>Corrected the "Brainrot God" rarity not displaying color</li>
        </ul>
        <li>Version: 0.1.5</li>
        <ul style="margin-left:20px">
          <li>Codes can now only be redeemed once</li>
          <li>Adjusted the "About" section to scroll</li>
          <li>Next update will have HUGE changes, stay tuned!</li>
        </ul>
        <li>Version: 0.1.4</li>
        <ul style="margin-left:20px">
          <li>Added rewards codes (You'll have to find where they go!)</li>
          <li>Large overhaul on secret and OG prices and income</li>
        </ul>
        <li>Version: 0.1.3</li>
        <ul style="margin-left:20px">
          <li>Added "About" button</li>
          <li>Moved "Reset Save" button into an about section</li>
          <li>Added credits</li>
        </ul>
        <li>Version: 0.1.2</li>
        <ul style="margin-left:20px">
          <li>"Cash" has been changed to "Monini" to reflect the brainrots on rotation
          <li>currency changed from "Cash/Sec" to "per Sec"</li>
          <li>Changed color of "OG" rarity to bright green</li>
          <li>Added a version number to keep track of what version we're on</li>
        </ul>
        <li>Version: 0.1.1</li>
        <ul style="margin-left:20px">
          <li>Buy button is now unclickable if player doesn't have the money</li>
          <li>New OG brainrots as easter eggs for my friends</li>
          <li>Small stylistic changes</li>
        </ul>
        <li>Initial Release: 0.1.0</li>
      </ul>
      <div style="font-weight:700;margin-bottom:8px;color: #ffffffff">Credits:</div>
      <ul style="margin-left:20px">
        <li>Developer: N7Soul, ChatGPT, Claude Sonnet 4</li>
        <br>
        <li>Design: N7Soul, ChatGPT, Claude Sonnet 4</li>
        <br>
        <li>Font: Urban Shadow Sans Serif by Blankids</li>
        <br>
        <li>Music:</li>
        <ul style="margin-left:20px">
          <li>A Day in My Life - Dark Cat</li>
          <li><a href="https://uppbeat.io/t/dark-cat/a-day-in-my-life" target="_blank" style="color:#16bfc5ff; text-decoration:underline;">https://uppbeat.io/t/dark-cat/a-day-in-my-life</a></li>
          <li>License code: OCEUTV2FDNJSUCNG</li>
          <br>
          <li>Imaginatarium - Ian Aisling</li>
          <li><a href="https://uppbeat.io/t/ian-aisling/imaginatarium" target="_blank" style="color:#16bfc5ff; text-decoration:underline;">https://uppbeat.io/t/ian-aisling/imaginatarium</a></li>
          <li>License code: 5MJR674VYFOXMJZQ</li>
          <br>
          <li>The Cleaner - Night Drift</li>
          <li><a href="https://uppbeat.io/t/night-drift/the-cleaner" target="_blank" style="color:#16bfc5ff; text-decoration:underline;">https://uppbeat.io/t/night-drift/the-cleaner</a></li>
          <li>License code: 8F897RJMSBLPBMW9</li>
          <br>
        </ul>
        <li>Special Thanks: CoderSyntax - critiquing my code and making it better!</li>
        <br>
        <li>Special Thanks: Friends doing beta testing and providing feedback for me <3</li>
      </ul>
    </div>
    <div class="modal-actions">
      <button id="closeAbout" class="small">Close</button>
      <button id="resetBtn" class="btn-danger">Reset Save</button>
    </div>
  </div>
</div>
<div id="codeModal" class="modal-overlay hidden">
  <div class="modal-box">
    <div style="font-weight:700;margin-bottom:8px">You found the secret code button!</div>
    <div style="color:var(--muted);margin-bottom:16px">Enter a code to receive rewards:</div>
    <input type="text" id="codeInput" placeholder="Enter code here..." style="width:100%;box-sizing:border-box;padding:8px 12px;border-radius:8px;border:1px solid rgba(255,255,255,0.1);background:var(--card);color:#e6eef8;margin-bottom:16px;font-family:inherit">
    <div id="codeMessage" style="margin-bottom:16px;font-size:14px"></div>
    <div class="modal-actions">
      <button id="closeCode" class="small">Close</button>
      <button id="redeemCode" style="background:var(--accent);border:0;padding:8px 12px;border-radius:8px;color:white;cursor:pointer">Redeem</button>
    </div>
  </div>
</div>
<div id="resetModal" class="modal-overlay hidden">
  <div class="modal-box">
    <div style="font-weight:700;margin-bottom:8px">Are you sure you want to reset your save?</div>
    <div style="color:var(--muted)">This will remove ALL DATA and start as a new game.</div>
    <div class="modal-actions">
      <button id="cancelReset" class="small">No</button>
      <button id="confirmReset" class="btn-danger">Yes</button>
    </div>
  </div>
</div>`;
document.body.insertAdjacentHTML('beforeend', modalHtml);
// Collection modal (list of all brainrots, show name only if owned, else ???)
const collectionHtml = `
<div id="collectionModal" class="modal-overlay hidden">
  <div class="modal-box-collection">
    <div style="font-weight:700;margin-bottom:8px">Collection</div>
    <div style="color:var(--muted);margin-bottom:8px">Your discovered Brainrots</div>
    <div id="collectionGrid" style="max-height:360px;overflow:auto;display:grid;grid-template-columns:6px 1fr 110px 90px 64px;row-gap:8px;padding-right:6px">
      <!-- header cells will be rendered by renderCollection -->
    </div>
    <div class="modal-actions">
      <button id="closeCollection" class="small">Close</button>
    </div>
  </div>
</div>`;

const sellModalHtml = `
<div id="sellModal" class="modal-overlay hidden">
  <div class="modal-box-sell">
    <div id="sellModalTitle" style="font-weight:700;margin-bottom:8px"></div>
    <div id="sellModalMessage" style="color:var(--muted);margin-bottom:16px"></div>
    <div class="modal-actions">
      <button id="sellModalCancel" class="small" style="display:none">Cancel</button>
      <button id="sellModalConfirm" style="background:var(--accent);color:white;padding:8px 12px">OK</button>
    </div>
  </div>
</div>`;

document.body.insertAdjacentHTML('beforeend', collectionHtml);
document.body.insertAdjacentHTML('beforeend', sellModalHtml);

// Build the collection list: show '???' for unowned, reveal name once owned.
function renderCollection(){
  const el = document.getElementById('collectionGrid');
  if(!el) return;
  // sort by rarity (OG->secret->brainrot god->mythic->legendary->epic->rare->uncommon->common) then income asc
  const rarityOrder = {OG:1, Secret:2, 'Brainrot God':3, Mythic:4, Legendary:5, Epic:6, Rare:7, Uncommon:8, Common:9};
  const all = [...CREATURES].sort((a,b)=>{
    const r = (rarityOrder[b.rarity]||0) - (rarityOrder[a.rarity]||0);
    if(r!==0) return r;
    return a.income - b.income;
  });
  // Build header (five cells)
  el.innerHTML = '';
  const hdrCells = [ '', 'Name', 'Rarity', 'Income', 'Owned' ];
  hdrCells.forEach((t,i)=>{
    const d = document.createElement('div');
    d.className = 'collection-header';
    d.style.padding = '8px 6px';
    if(i>0) d.style.fontWeight = '700';
    if(i===4) d.style.textAlign = 'right';
    d.textContent = t;
    el.appendChild(d);
  });

  // Now rows: each creature contributes 5 cells (bar, name, rarity, income, count)
  all.forEach(c=>{
    const discovered = state.discovered.includes(c.name);
  const count = state.ownedCounts[c.name] || 0;
    // bar cell
    const barCell = document.createElement('div');
    barCell.className = 'collection-bar';
    let color = '#6b7280';
    if(c.rarity==('Common')) color = '#6b7280';
    else if(c.rarity==('Uncommon')) color = '#10b981';
    else if(c.rarity==('Rare')) color = '#3b82f6';
    else if(c.rarity==('Epic')) color = '#7c3aed';
    else if(c.rarity==('Legendary')) color = '#f97316';
    else if(c.rarity==('Mythic')) color = '#ef4444';
    else if(c.rarity==('Brainrot God')) color = '#fbbf24';
    else if (c.rarity==('Secret')) color = '#050505ff';
    else if (c.rarity==('OG')) color = '#0ef306ff';
    barCell.style.background = color;
    el.appendChild(barCell);

    const nameCell = document.createElement('div'); nameCell.className='name'; nameCell.textContent = discovered ? c.name : '???'; el.appendChild(nameCell);
    const rarityCell = document.createElement('div'); rarityCell.className='muted'; rarityCell.textContent = c.rarity; el.appendChild(rarityCell);
  const incomeCell = document.createElement('div'); incomeCell.className='muted'; incomeCell.textContent = discovered ? `${fmt(c.income)} per Sec` : ''; el.appendChild(incomeCell);
    const countCell = document.createElement('div'); countCell.className='count muted'; countCell.style.textAlign='right'; countCell.textContent = String(count); el.appendChild(countCell);
  });
}

// Ensure collection updates when owned changes
const originalRenderOwned = renderOwned;
renderOwned = function(){
  originalRenderOwned();
  renderCollection();
};

// Use event delegation so handlers still work if elements change dynamically
document.addEventListener('click', (e) => {
  const target = e.target;
  // Open code modal when secret buttons are clicked
  if (target.closest && (target.closest('#secretCodeBtn') || target.closest('#aboutSecretBtn'))) {
    // If clicked from about modal, close it first
    if (target.closest('#aboutSecretBtn')) {
      const aboutModal = document.getElementById('aboutModal'); 
      if (aboutModal) aboutModal.classList.add('hidden');
    }
    const m = document.getElementById('codeModal'); if (m) m.classList.remove('hidden');
    const codeInputField = document.getElementById('codeInput');
    if (codeInputField) {
      codeInputField.focus();
      // Remove any existing Enter key listeners to prevent duplicates
      codeInputField.removeEventListener('keypress', handleCodeInputEnter);
      // Add Enter key listener for code redemption
      codeInputField.addEventListener('keypress', handleCodeInputEnter);
    }
    return;
  }
  // Open about modal
  if (target.closest && target.closest('#aboutBtn')) {
    const m = document.getElementById('aboutModal'); if (m) m.classList.remove('hidden');
    return;
  }
  // Open reset modal from about modal
  if (target.closest && target.closest('#resetBtn')) {
    const aboutModal = document.getElementById('aboutModal'); if (aboutModal) aboutModal.classList.add('hidden');
    const resetModal = document.getElementById('resetModal'); if (resetModal) resetModal.classList.remove('hidden');
    return;
  }
  // Open collection modal
  if (target.closest && target.closest('#collectionBtn')) {
    const m = document.getElementById('collectionModal'); if (m) { renderCollection(); m.classList.remove('hidden'); }
    return;
  }
  // Close about modal
  if (target.closest && target.closest('#closeAbout')) {
    const m = document.getElementById('aboutModal'); if (m) m.classList.add('hidden');
    return;
  }
  // Cancel / close reset modal
  if (target.closest && target.closest('#cancelReset')) {
    const m = document.getElementById('resetModal'); if (m) m.classList.add('hidden');
    return;
  }
  // Close collection modal
  if (target.closest && target.closest('#closeCollection')) {
    const m = document.getElementById('collectionModal'); if (m) m.classList.add('hidden');
    return;
  }
  // Close code modal
  if (target.closest && target.closest('#closeCode')) {
    const m = document.getElementById('codeModal'); if (m) m.classList.add('hidden');
    document.getElementById('codeInput').value = '';
    document.getElementById('codeMessage').textContent = '';
    return;
  }
  // Redeem code
  if (target.closest && target.closest('#redeemCode')) {
    redeemCode();
    return;
  }
  // Confirm reset
  if (target.closest && target.closest('#confirmReset')) {
    // clear save and reset in-memory state
    localStorage.removeItem('collector');
    state = {currency:25,vault:[],conveyor:[],multiplier:1,discovered:[],ownedCounts:{},usedCodes:[],maxBrainrots:5,incomeMultiplier:1,luck:0,stats:{totalMoneyMade:0,totalBrainrotsPurchased:0,totalBrainrotsSold:0,totalUpgradesPurchased:0}};
    saveState();
    spawnRandom();
    refreshRemaining = REFRESH_INTERVAL; // Reset the refresh timer
    startCountdown(); // Restart the countdown interval
    renderAll();
    const m = document.getElementById('resetModal'); if (m) m.classList.add('hidden');
    return;
  }
  // Clicking on overlay (outside modal-box) should close
  if (target.id === 'aboutModal') { target.classList.add('hidden'); return; }
  if (target.id === 'resetModal') { target.classList.add('hidden'); return; }
  if (target.id === 'collectionModal') { target.classList.add('hidden'); return; }
  if (target.id === 'sellModal') { target.classList.add('hidden'); return; }
  if (target.id === 'codeModal') { 
    target.classList.add('hidden'); 
    document.getElementById('codeInput').value = '';
    document.getElementById('codeMessage').textContent = '';
    return; 
  }
});

// SELL DROPDOWN: toggle and actions
const sellToggle = document.getElementById('sellDropdownToggle');
const sellMenuWrapper = document.getElementById('sellDropdown');
const sellMenu = document.getElementById('sellDropdownMenu');
if(sellToggle && sellMenuWrapper && sellMenu){
  sellToggle.addEventListener('click', (ev)=>{
    ev.stopPropagation();
    const visible = sellMenu.style.display === 'block';
    sellMenu.style.display = visible ? 'none' : 'block';
    try{ sellToggle.setAttribute('data-open', String(!visible)); }catch(e){}
  });
  // delegate clicks inside menu
  sellMenu.addEventListener('click', (ev)=>{
    const opt = ev.target.closest && ev.target.closest('.sell-option');
    if(!opt) return;
    const rarity = opt.dataset.rarity;
    
    // Show confirmation for all sell options
    let message, title;
    if(rarity === 'all'){
      const totalCount = state.vault.length;
      if(totalCount === 1) {
        message = 'Sell 1 owned brainrot? This cannot be undone.';
        title = 'Sell Brainrot';
      } else {
        message = `Sell ${totalCount} owned brainrots? This cannot be undone.`;
        title = 'Sell All Brainrots';
      }
    } else {
      const count = state.vault.filter(v=>String(v.rarity||'').replace(/ /g, '-').toLowerCase() === String(rarity||'').toLowerCase()).length;
      if(count === 0) {
        sellMenu.style.display='none';
        return;
      }
      const displayRarity = rarity.replace(/-/g, ' '); // Convert back for display
      const brainrotText = count === 1 ? 'brainrot' : 'brainrots';
      message = `Are you sure you want to sell ${count === 1 ? 'the' : 'all'} ${count} ${displayRarity} ${brainrotText}? This cannot be undone.`;
      title = `Sell ${displayRarity} ${brainrotText}`;
    }
    
    sellMenu.style.display='none'; // Close menu first
    
    showSellModal(message, title, true).then((confirmed) => {
      if(confirmed) {
        sellByRarity(rarity);
      }
    });
  });
  // close when clicking outside
  document.addEventListener('click', (ev)=>{
    if(ev.target===sellToggle) return;
    if(!sellMenuWrapper.contains(ev.target) && ev.target!==sellToggle){
      sellMenu.style.display='none';
      try{ sellToggle.setAttribute('data-open','false'); }catch(e){}
    }
  });
}

function sellByRarity(rarity){
  if(!state.vault || state.vault.length===0) return;
  let toSell;
  if(rarity==='all') toSell = [...state.vault];
  else toSell = state.vault.filter(v=>String(v.rarity||'').toLowerCase() === String(rarity||'').toLowerCase());
  if(toSell.length===0) return;
  // compute total sell value and remove items
  let total = 0;
  toSell.forEach(item=>{
    const sell = Math.floor(item.price*0.4);
    total += sell;
    // remove one instance from vault
    const idx = state.vault.findIndex(v=>v===item || (v.name===item.name && v.price===item.price && v.income===item.income));
    if(idx>-1) state.vault.splice(idx,1);
  });
  state.currency += total;
  renderAll();
  saveState();
  
  // Show success message
  if(rarity === 'all') {
    showSellModal(`Sold ${toSell.length} Brainrots for $${fmt(total)}!`, 'Success', false);
  } else {
    showSellModal(`Sold ${toSell.length} ${rarity} Brainrots for $${fmt(total)}!`, 'Success', false);
  }
}

function showSellModal(message, title = 'Confirm', showCancel = true) {
  const modal = document.getElementById('sellModal');
  const titleEl = document.getElementById('sellModalTitle');
  const messageEl = document.getElementById('sellModalMessage');
  const cancelBtn = document.getElementById('sellModalCancel');
  const confirmBtn = document.getElementById('sellModalConfirm');
  
  titleEl.textContent = title;
  messageEl.textContent = message;
  cancelBtn.style.display = showCancel ? 'block' : 'none';
  confirmBtn.textContent = showCancel ? 'Confirm' : 'OK';
  
  modal.classList.remove('hidden');
  
  // Add countdown timer for sell confirmations
  if (showCancel && (title.includes('Sell') && !title.includes('Max'))) {
    let countdown = 3;
    confirmBtn.disabled = true;
    confirmBtn.style.opacity = '0.5';
    confirmBtn.textContent = `Confirm (${countdown})`;
    
    const countdownInterval = setInterval(() => {
      countdown--;
      if (countdown > 0) {
        confirmBtn.textContent = `Confirm (${countdown})`;
      } else {
        clearInterval(countdownInterval);
        confirmBtn.disabled = false;
        confirmBtn.style.opacity = '1';
        confirmBtn.textContent = 'Confirm';
      }
    }, 1000);
    
    // Clean up interval if modal is closed early
    const cleanup = () => {
      clearInterval(countdownInterval);
      confirmBtn.disabled = false;
      confirmBtn.style.opacity = '1';
    };
    
    // Store cleanup function for later use
    confirmBtn._countdownCleanup = cleanup;
  }
  
  return new Promise((resolve) => {
    const handleConfirm = () => {
      if (confirmBtn.disabled) return; // Prevent clicking during countdown
      modal.classList.add('hidden');
      cleanup();
      resolve(true);
    };
    
    const handleCancel = () => {
      modal.classList.add('hidden');
      cleanup();
      resolve(false);
    };
    
    const cleanup = () => {
      confirmBtn.removeEventListener('click', handleConfirm);
      cancelBtn.removeEventListener('click', handleCancel);
      // Clean up countdown if it exists
      if (confirmBtn._countdownCleanup) {
        confirmBtn._countdownCleanup();
        confirmBtn._countdownCleanup = null;
      }
    };
    
    confirmBtn.addEventListener('click', handleConfirm);
    cancelBtn.addEventListener('click', handleCancel);
  });
}

// Upgrade system
function getMaxBrainrotsPrice() {
  // Start at $1000, increase exponentially: 1000 * 1.5^level
  const level = state.maxBrainrots - 5; // Start from level 0 when maxBrainrots = 5
  return Math.floor(1000 * Math.pow(1.5, level));
}

function upgradeMaxBrainrots() {
  const price = getMaxBrainrotsPrice();
  if(state.currency >= price) {
    state.currency -= price;
    state.maxBrainrots += 1; // Increase by 1 each upgrade
    // Track upgrade purchase in stats
    state.stats.totalUpgradesPurchased += 1;
    renderUpgrades();
    renderAll();
    saveState();
  }
}

function getLuckPrice() {
  // Start at $750,000, increase by 3x each level
  return Math.floor(750000 * Math.pow(3, state.luck));
}

function upgradeLuck() {
  const price = getLuckPrice();
  if(state.currency >= price) {
    state.currency -= price;
    state.luck += 1;
    // Track upgrade purchase in stats
    state.stats.totalUpgradesPurchased += 1;
    renderUpgrades();
    renderAll();
    saveState();
  }
}

function getIncomeMultiplierPrice() {
  // Start at $10000, increase by 2.5x each level
  const level = Math.round((state.incomeMultiplier - 1) / 0.1); // Each 0.1 increase is one level
  return Math.floor(100000 * Math.pow(2.5, level));
}

function upgradeIncomeMultiplier() {
  const price = getIncomeMultiplierPrice();
  if(state.currency >= price) {
    state.currency -= price;
    state.incomeMultiplier += 0.1; // Increase by 10%
    state.incomeMultiplier = Math.round(state.incomeMultiplier * 10) / 10; // Fix floating point precision
    // Track upgrade purchase in stats
    state.stats.totalUpgradesPurchased += 1;
    renderUpgrades();
    renderAll();
    saveState();
  }
}

function renderUpgrades() {
  const maxBrainrotsBtn = document.querySelector('.upgrade-item:first-child button');
  const luckBtn = document.querySelector('.upgrade-item:nth-child(2) button');
  const incomeMultiplierBtn = document.querySelector('.upgrade-item:last-child button');
  
  if (!maxBrainrotsBtn) return; // Exit if elements don't exist
  
  // Max Brainrots upgrade
  const maxBrainrotsPrice = getMaxBrainrotsPrice();
  const canAffordMax = state.currency >= maxBrainrotsPrice;
  
  maxBrainrotsBtn.textContent = `$${fmt(maxBrainrotsPrice)}`;
  maxBrainrotsBtn.style.opacity = canAffordMax ? '1' : '0.5';
  maxBrainrotsBtn.style.cursor = canAffordMax ? 'pointer' : 'not-allowed';
  
  // Luck upgrade
  if (luckBtn) {
    const luckPrice = getLuckPrice();
    const canAffordLuck = state.currency >= luckPrice;
    
    luckBtn.textContent = `$${fmt(luckPrice)}`;
    luckBtn.style.opacity = canAffordLuck ? '1' : '0.5';
    luckBtn.style.cursor = canAffordLuck ? 'pointer' : 'not-allowed';
    
    // Update luck counter
    const luckCounter = document.getElementById('luckCounter');
    if (luckCounter) luckCounter.textContent = state.luck;
  }
  
  // Income Multiplier upgrade
  if (incomeMultiplierBtn) {
    const incomePrice = getIncomeMultiplierPrice();
    const canAffordIncome = state.currency >= incomePrice;
    
    incomeMultiplierBtn.textContent = `$${fmt(incomePrice)}`;
    incomeMultiplierBtn.style.opacity = canAffordIncome ? '1' : '0.5';
    incomeMultiplierBtn.style.cursor = canAffordIncome ? 'pointer' : 'not-allowed';
    
    // Update income multiplier counter
    const incomeMultiplierCounter = document.getElementById('incomeMultiplierCounter');
    if (incomeMultiplierCounter) {
      const level = Math.round((state.incomeMultiplier - 1) / 0.1);
      incomeMultiplierCounter.textContent = level;
    }
  }
}

// Enter key handler for code input
function handleCodeInputEnter(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    redeemCode();
  }
}

// Code redemption system
function redeemCode() {
  const codeInput = document.getElementById('codeInput');
  const messageEl = document.getElementById('codeMessage');
  const code = codeInput.value.trim().toUpperCase();
  
  if (!code) {
    messageEl.textContent = 'Please enter a code.';
    messageEl.style.color = '#ef4444';
    return;
  }
  
  // Check if code has already been used
  if (state.usedCodes.includes(code)) {
    messageEl.textContent = 'This code has already been redeemed.';
    messageEl.style.color = '#ef4444';
    return;
  }
  
  // Define available codes
  const codes = {
    'WELCOME': { type: 'money', amount: 10000, description: 'Welcome bonus' },
    'HUNNIT': { type: 'money', amount: 100000, description: 'Hunnit Bands!' },
    'LILWAYNE': { type: 'money', amount: 1000000, description: 'A MILLI!' },
    'ZUCCHINIONTHEHEAD': { type: 'creature', creature: 'Derktism Trainino', description: 'OG Brainrot!' },
    'DICKDEEPINTRAINS': { type: 'creature', creature: 'Davidinni Prereleasito', description: 'OG Brainrot!' },
    'HOWMUCHBREADDOYOUNEED': { type: 'creature', creature: 'Tynino Swolgrande', description: 'OG Brainrot!' },
    'GOLDENRETRIEVERASS': { type: 'creature', creature: 'Dandutto Sleepini', description: 'OG Brainrot!' },
    'SOUTHERNTWANG': { type: 'creature', creature: 'Bree No Bicus Dicus', description: 'OG Brainrot!' },
    'ROBISACHEATER': { type: 'creature', creature: 'Roborni Cheatorni', description: 'OG Brainrot!' },
    'JORDONIA': { type: 'creature', creature: 'Jordonia Verizonia', description: 'OG Brainrot!' },
    'SNACKS': { type: 'creature', creature: 'Nikkito Parverino', description: 'OG Brainrot!' },
    'HOWHEKEEPGETTINGSTANK': { type: 'creature', creature: 'Tifforny Pooterus', description: 'OG Brainrot!' },
    'RNDMBRAINROT': { type: 'creature', creature: pickByRarity('Brainrot God')?.name || 'Odin Din Din Dun', description: 'Random Brainrot God!' },
    'RNDMSECRET': { type: 'creature', creature: pickByRarity('Secret')?.name || 'Las Sis', description: 'Random Secret!' }

    // Add more codes as needed
    
  };
  
  if (codes[code]) {
    const reward = codes[code];
    
    if (reward.type === 'money') {
      state.currency += reward.amount;
      messageEl.textContent = `Valid! You received $${fmt(reward.amount)} - ${reward.description}`;
      messageEl.style.color = '#10b981';
    } else if (reward.type === 'creature') {
      const creature = CREATURES.find(c => c.name === reward.creature);
      if (creature) {
        state.vault.push({...creature});
        if (!state.discovered.includes(creature.name)) state.discovered.push(creature.name);
        state.ownedCounts[creature.name] = (state.ownedCounts[creature.name] || 0) + 1;
        messageEl.textContent = `Valid! You received ${creature.name} - ${reward.description}`;
        messageEl.style.color = '#10b981';
      }
    }
    
    // Mark code as used
    state.usedCodes.push(code);
    
    // Clear the code after successful redemption
    codeInput.value = '';
    saveState();
    renderAll();
  } else {
    messageEl.textContent = 'Invalid code. Please try again.';
    messageEl.style.color = '#ef4444';
  }
}

// Music Player Functionality
let currentAudio = null;
let isPlaying = false;
let currentSongIndex = 0;
let playlist = [
  'music/a-day-in-my-life-dark-cat.mp3',
  'music/imaginatarium-ian-aisling.mp3',
  'music/the-cleaner-night-drift.mp3'
];

// Custom song titles (cleaner display names)
let songTitles = [
  'A Day in My Life - Dark Cat',
  'Imaginatarium - Ian Aisling', 
  'The Cleaner - Night Drift'
];

function initMusicPlayer() {
  console.log('Initializing music player...');
  
  const progressBar = document.getElementById('progressBar');
  const volumeSlider = document.getElementById('volumeSlider');
  const currentTimeEl = document.getElementById('currentTime');
  const totalTimeEl = document.getElementById('totalTime');
  const nowPlayingEl = document.getElementById('nowPlaying');

  // Check if all required elements exist
  if (!progressBar || !volumeSlider || !currentTimeEl || !totalTimeEl || !nowPlayingEl) {
    console.error('Music player elements not found!', {
      progressBar: !!progressBar,
      volumeSlider: !!volumeSlider,
      currentTimeEl: !!currentTimeEl,
      totalTimeEl: !!totalTimeEl,
      nowPlayingEl: !!nowPlayingEl
    });
    return;
  }

  console.log('All music player elements found, loading first song...');
  
  // Load first song automatically and start playing
  loadMusicFromPath(playlist[currentSongIndex]);
  
  // Auto-play after a short delay to ensure audio is loaded
  setTimeout(() => {
    console.log('Attempting auto-play...', { currentAudio: !!currentAudio });
    if (currentAudio) {
      playMusic();
    }
  }, 1000); // Increased delay to 1 second

  // Create hidden file input for music selection (keep existing functionality)
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'audio/*';
  fileInput.style.display = 'none';
  document.body.appendChild(fileInput);

  // Click music title to select new music or cycle through playlist
  nowPlayingEl.addEventListener('click', () => {
    const wasPlaying = isPlaying; // Remember if music was playing
    // Cycle to next song in playlist
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadMusicFromPath(playlist[currentSongIndex]);
    
    // If music was playing, continue playing the new song
    if (wasPlaying) {
      // Add a small delay to ensure the new song is loaded
      setTimeout(() => {
        playMusic();
      }, 100);
    }
  });
  nowPlayingEl.style.cursor = 'pointer';
  nowPlayingEl.title = 'Click to cycle through songs';

  // Handle file selection (keep existing functionality)
  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      loadMusic(file);
    }
  });

  // Progress bar
  progressBar.addEventListener('input', () => {
    if (currentAudio) {
      const time = (progressBar.value / 100) * currentAudio.duration;
      currentAudio.currentTime = time;
    }
  });

  // Volume slider
  volumeSlider.addEventListener('input', () => {
    if (currentAudio) {
      currentAudio.volume = volumeSlider.value / 100;
    }
  });
}

function loadMusic(file) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }

  currentAudio = new Audio(URL.createObjectURL(file));
  currentAudio.volume = 0.05; // Start at 5% volume
  
  document.getElementById('nowPlaying').textContent = file.name.replace(/\.[^/.]+$/, ""); // Remove file extension
  
  currentAudio.addEventListener('loadedmetadata', () => {
    document.getElementById('totalTime').textContent = formatTime(currentAudio.duration);
  });

  currentAudio.addEventListener('timeupdate', () => {
    const progress = (currentAudio.currentTime / currentAudio.duration) * 100;
    document.getElementById('progressBar').value = progress || 0;
    document.getElementById('currentTime').textContent = formatTime(currentAudio.currentTime);
  });

  currentAudio.addEventListener('ended', () => {
    // Auto-advance to next song in playlist
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadMusicFromPath(playlist[currentSongIndex]);
    if (isPlaying) {
      playMusic(); // Continue playing if music was playing
    }
  });
}

// New function to load music from file path
function loadMusicFromPath(musicPath) {
  console.log('Loading music from path:', musicPath);
  
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }

  currentAudio = new Audio(musicPath);
  
  // Set volume from slider value
  const volumeSlider = document.getElementById('volumeSlider');
  if (volumeSlider) {
    currentAudio.volume = volumeSlider.value / 100;
  } else {
    currentAudio.volume = 0.05; // Default to 5% if slider not found
  }
  
  // Use custom song title instead of extracting from filename
  const songName = songTitles[currentSongIndex] || musicPath.split('/').pop().replace(/\.[^/.]+$/, "").replace(/-/g, ' ');
  console.log('Setting song name:', songName);
  
  const nowPlayingEl = document.getElementById('nowPlaying');
  if (nowPlayingEl) {
    nowPlayingEl.textContent = songName;
  } else {
    console.error('nowPlaying element not found!');
  }
  
  currentAudio.addEventListener('loadedmetadata', () => {
    console.log('Audio metadata loaded, duration:', currentAudio.duration);
    const totalTimeEl = document.getElementById('totalTime');
    if (totalTimeEl) {
      totalTimeEl.textContent = formatTime(currentAudio.duration);
    }
  });

  currentAudio.addEventListener('timeupdate', () => {
    const progress = (currentAudio.currentTime / currentAudio.duration) * 100;
    const progressBar = document.getElementById('progressBar');
    const currentTimeEl = document.getElementById('currentTime');
    
    if (progressBar) progressBar.value = progress || 0;
    if (currentTimeEl) currentTimeEl.textContent = formatTime(currentAudio.currentTime);
  });

  currentAudio.addEventListener('ended', () => {
    console.log('Song ended, advancing to next song');
    // Auto-advance to next song in playlist
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadMusicFromPath(playlist[currentSongIndex]);
    if (isPlaying) {
      playMusic(); // Continue playing if music was playing
    }
  });

  currentAudio.addEventListener('error', (e) => {
    console.error('Error loading audio:', musicPath, e);
    const nowPlayingEl = document.getElementById('nowPlaying');
    if (nowPlayingEl) {
      nowPlayingEl.textContent = 'Error loading song';
    }
  });

  currentAudio.addEventListener('canplaythrough', () => {
    console.log('Audio can play through');
  });
}

function playMusic() {
  console.log('playMusic called', { currentAudio: !!currentAudio, isPlaying });
  if (currentAudio) {
    currentAudio.play().then(() => {
      console.log('Music started playing successfully');
      isPlaying = true;
    }).catch(error => {
      console.log('Auto-play prevented:', error);
      // If auto-play fails, we'll try again on first user interaction
    });
  } else {
    console.log('No currentAudio available');
  }
}

function pauseMusic() {
  if (currentAudio) {
    currentAudio.pause();
    isPlaying = false;
  }
}

// Auto-play handler for browser policies
let autoPlayAttempted = false;
function enableAutoPlay() {
  console.log('enableAutoPlay called', { autoPlayAttempted, currentAudio: !!currentAudio, isPlaying });
  if (!autoPlayAttempted && currentAudio && !isPlaying) {
    autoPlayAttempted = true;
    console.log('Attempting to enable auto-play after user interaction');
    playMusic();
    // Remove the event listener after first successful play
    document.removeEventListener('click', enableAutoPlay);
    document.removeEventListener('keydown', enableAutoPlay);
  }
}

function formatTime(seconds) {
  if (isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Initialize music player when page loads
document.addEventListener('DOMContentLoaded', () => {
  initMusicPlayer();
  
  // Add event listeners for first user interaction to enable auto-play
  document.addEventListener('click', enableAutoPlay);
  document.addEventListener('keydown', enableAutoPlay);
});
