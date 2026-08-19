const players = [

  {
    id: 1,
    name: "Mert Yılmaz",
    age: 24,
    nationality: "🇹🇷 Türkiye",
    position: "ST",
    rating: 78,
    potential: 82,
    value: 12000000,
    wage: 18000,
    club: "Galatasaray",

    technical: 79,
    physical: 76,
    mental: 74,

    personality: "Profesyonel",
    ambition: 82,
    professionalism: 86,

    careerGoal: "Şampiyonluk yaşamak",
    preferredLevel: 82,

    contractEnd: 2028
  },

  {
    id: 2,
    name: "Kerem Demir",
    age: 20,
    nationality: "🇹🇷 Türkiye",
    position: "OOS",
    rating: 72,
    potential: 88,
    value: 9000000,
    wage: 12000,
    club: "Galatasaray",

    technical: 84,
    physical: 65,
    mental: 72,

    personality: "Hırslı",
    ambition: 94,
    professionalism: 79,

    careerGoal: "Avrupa'ya transfer olmak",
    preferredLevel: 84,

    contractEnd: 2029
  },

  {
    id: 3,
    name: "Ahmet Kaya",
    age: 28,
    nationality: "🇹🇷 Türkiye",
    position: "STP",
    rating: 80,
    potential: 80,
    value: 11000000,
    wage: 22000,
    club: "Galatasaray",

    technical: 70,
    physical: 84,
    mental: 87,

    personality: "Lider",
    ambition: 78,
    professionalism: 91,

    careerGoal: "Takımın lideri olmak",
    preferredLevel: 78,

    contractEnd: 2027
  },

  {
    id: 4,
    name: "Emir Arslan",
    age: 18,
    nationality: "🇹🇷 Türkiye",
    position: "SLK",
    rating: 66,
    potential: 91,
    value: 4500000,
    wage: 5000,
    club: "Eyüpspor",

    technical: 76,
    physical: 61,
    mental: 67,

    personality: "Gelişime Açık",
    ambition: 91,
    professionalism: 82,

    careerGoal: "Büyük kulüpte oynamak",
    preferredLevel: 86,

    contractEnd: 2030
  },

  {
    id: 5,
    name: "Can Özkan",
    age: 22,
    nationality: "🇹🇷 Türkiye",
    position: "MDO",
    rating: 74,
    potential: 84,
    value: 7000000,
    wage: 10000,
    club: "Eyüpspor",

    technical: 73,
    physical: 78,
    mental: 81,

    personality: "Çalışkan",
    ambition: 83,
    professionalism: 94,

    careerGoal: "Kariyerini istikrarlı geliştirmek",
    preferredLevel: 75,

    contractEnd: 2028
  }

];


function getPlayersByClub(clubName) {

  return players.filter(
    player => player.club === clubName
  );

}


function getPlayer(id) {

  return players.find(
    player => player.id === id
  );

}


function calculateDevelopment(player) {

  if (player.age >= 30) {
    return 0.1;
  }

  if (player.age >= 27) {
    return 0.3;
  }

  if (player.age >= 23) {
    return 0.6;
  }

  return 1.0;
}


function calculateTransferInterest(player, club) {

  let score = 0;

  score += club.reputation * 0.4;

  score += player.ambition * 0.2;

  score += player.professionalism * 0.1;

  if (club.reputation >= player.preferredLevel) {
    score += 30;
  }

  return Math.min(
    Math.round(score),
    100
  );

}
