// Shared game constants and creature data
export const CREATURES = [
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

export const GAME_CONFIG = {
  REFRESH_INTERVAL: 15, // seconds
  DEFAULT_MAX_BRAINROTS: 5,
  STARTING_CURRENCY: 25,
  RARITY_COLORS: {
    'Common': '#9ca3af',
    'Rare': '#3b82f6',
    'Epic': '#8b5cf6',
    'Legendary': '#f59e0b',
    'Mythic': '#ef4444',
    'Brainrot God': '#ec4899',
    'Secret': '#10b981',
    'OG': '#f97316'
  }
};

export const RARITY_RANK = {
  'OG': 9,
  'Secret': 8,
  'Brainrot God': 7,
  'Mythic': 6,
  'Legendary': 5,
  'Epic': 4,
  'Rare': 3,
  'Uncommon': 2,
  'Common': 1
};

export const MESSAGE_TYPES = {
  // Client to Server
  JOIN_GAME: 'join_game',
  PURCHASE_CREATURE: 'purchase_creature',
  SELL_CREATURE: 'sell_creature',
  BUY_UPGRADE: 'buy_upgrade',
  TRADE_REQUEST: 'trade_request',
  TRADE_RESPONSE: 'trade_response',
  CHAT_MESSAGE: 'chat_message',
  
  // Server to Client
  GAME_STATE: 'game_state',
  PLAYER_UPDATE: 'player_update',
  CREATURE_SPAWNED: 'creature_spawned',
  PLAYER_JOINED: 'player_joined',
  PLAYER_LEFT: 'player_left',
  TRADE_OFFER: 'trade_offer',
  TRADE_COMPLETED: 'trade_completed',
  CHAT_BROADCAST: 'chat_broadcast',
  LEADERBOARD_UPDATE: 'leaderboard_update',
  ERROR: 'error'
};

export function rarityRank(rarity) {
  return RARITY_RANK[(rarity || '').toLowerCase()] || 0;
}

export function getCreatureByName(name) {
  return CREATURES.find(c => c.name === name);
}

export function calculatePlayerIncome(ownedCounts, incomeMultiplier = 1) {
  let totalIncome = 0;
  for (const [creatureName, count] of Object.entries(ownedCounts)) {
    const creature = getCreatureByName(creatureName);
    if (creature) {
      totalIncome += creature.income * count;
    }
  }
  return totalIncome * incomeMultiplier;
}

export function selectRandomCreature(luck = 0) {
  const adjustedCreatures = CREATURES.map(creature => ({
    ...creature,
    adjustedWeight: creature.weight * (1 + luck * 0.01) // luck increases rare creature chances
  }));
  
  const totalWeight = adjustedCreatures.reduce((sum, creature) => sum + creature.adjustedWeight, 0);
  let random = Math.random() * totalWeight;
  
  for (const creature of adjustedCreatures) {
    random -= creature.adjustedWeight;
    if (random <= 0) {
      return creature;
    }
  }
  
  return adjustedCreatures[0]; // Fallback
}