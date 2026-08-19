/*
====================================================
SAMET MANAGER
PLAYER DATABASE V0.4
====================================================

FC 26 başlangıç veri yapısı:
- Overall / GEN
- Pace
- Shooting
- Passing
- Dribbling
- Defending
- Physical

Samet Manager özel verileri:
- Potential
- Value
- Wage
- Contract
- Personality
- Ambition
- Professionalism
- Career Goal
- Transfer status
- Loan status
- Free agent status
- Transfer preference

Not:
Bu veri tabanı geliştirme/test için başlangıç oyuncu
setidir. Gerçek oyunda daha geniş veri seti
eklendiğinde aynı yapı kullanılacaktır.
====================================================
*/


const players = [

/* ==================================================
   GALATASARAY
================================================== */

{
id:1001,
name:"Victor Osimhen",
club:"Galatasaray",
country:"Nijerya",
nationality:"Nijerya",

age:27,
position:"ST",

rating:89,
potential:89,

pace:91,
shooting:88,
passing:65,
dribbling:83,
defending:43,
physical:86,

value:75000000,
wage:8000000,

contractEnd:2029,

personality:"Hırslı",
ambition:96,
professionalism:91,

careerGoal:"Dünyanın en üst seviyesinde golcü olmak",

transferListed:false,
loanListed:false,
freeAgent:false,

preferredRole:"Ana Santrfor",
playingTime:"Temel Oyuncu"

},

{
id:1002,
name:"Mauro Icardi",
club:"Galatasaray",
country:"Arjantin",
nationality:"Arjantin",

age:33,
position:"ST",

rating:82,
potential:82,

pace:67,
shooting:88,
passing:73,
dribbling:80,
defending:36,
physical:72,

value:12000000,
wage:6000000,

contractEnd:2028,

personality:"Lider",
ambition:82,
professionalism:78,

careerGoal:"Kariyerini üst seviyede tamamlamak",

transferListed:false,
loanListed:false,
freeAgent:false,

preferredRole:"Ana Santrfor",
playingTime:"Temel Oyuncu"

},

{
id:1003,
name:"Barış Alper Yılmaz",
club:"Galatasaray",
country:"Türkiye",
nationality:"Türkiye",

age:25,
position:"RW",

rating:79,
potential:84,

pace:92,
shooting:73,
passing:69,
dribbling:78,
defending:48,
physical:90,

value:25000000,
wage:2500000,

contractEnd:2029,

personality:"Çalışkan",
ambition:90,
professionalism:87,

careerGoal:"Avrupa'nın üst düzey liginde oynamak",

transferListed:false,
loanListed:false,
freeAgent:false,

preferredRole:"İlk 11",
playingTime:"Temel Oyuncu"

},

/* ==================================================
   FENERBAHÇE
================================================== */

{
id:1101,
name:"Edin Džeko",
club:"Fenerbahçe",
country:"Bosna Hersek",
nationality:"Bosna Hersek",

age:40,
position:"ST",

rating:80,
potential:80,

pace:58,
shooting:86,
passing:76,
dribbling:75,
defending:45,
physical:75,

value:3000000,
wage:4500000,

contractEnd:2027,

personality:"Lider",
ambition:76,
professionalism:94,

careerGoal:"Kariyerini kupalarla tamamlamak",

transferListed:false,
loanListed:false,
freeAgent:false,

preferredRole:"Ana Santrfor",
playingTime:"Temel Oyuncu"

},

{
id:1102,
name:"İrfan Can Kahveci",
club:"Fenerbahçe",
country:"Türkiye",
nationality:"Türkiye",

age:31,
position:"RW",

rating:78,
potential:78,

pace:72,
shooting:79,
passing:82,
dribbling:76,
defending:42,
physical:62,

value:9000000,
wage:2500000,

contractEnd:2028,

personality:"Profesyonel",
ambition:79,
professionalism:86,

careerGoal:"Kulübünde önemli bir rol sürdürmek",

transferListed:false,
loanListed:false,
freeAgent:false,

preferredRole:"Rotasyon",
playingTime:"Rotasyon"

},

/* ==================================================
   BEŞİKTAŞ
================================================== */

{
id:1201,
name:"Rafa Silva",
club:"Beşiktaş",
country:"Portekiz",
nationality:"Portekiz",

age:33,
position:"CAM",

rating:83,
potential:83,

pace:84,
shooting:80,
passing:82,
dribbling:91,
defending:35,
physical:58,

value:15000000,
wage:4500000,

contractEnd:2028,

personality:"Yaratıcı",
ambition:84,
professionalism:88,

careerGoal:"Avrupa'da üst düzey futbol oynamak",

transferListed:false,
loanListed:false,
freeAgent:false,

preferredRole:"10 Numara",
playingTime:"Temel Oyuncu"

},

{
id:1202,
name:"Semih Kılıçsoy",
club:"Beşiktaş",
country:"Türkiye",
nationality:"Türkiye",

age:20,
position:"ST",

rating:74,
potential:86,

pace:86,
shooting:72,
passing:61,
dribbling:81,
defending:32,
physical:67,

value:18000000,
wage:1200000,

contractEnd:2029,

personality:"Hırslı",
ambition:94,
professionalism:82,

careerGoal:"Avrupa'nın elit kulüplerinden birine transfer olmak",

transferListed:false,
loanListed:false,
freeAgent:false,

preferredRole:"İlk 11",
playingTime:"Gelişim Oyuncusu"

},

/* ==================================================
   EYÜPSPOR
================================================== */

{
id:1301,
name:"Caner Erkin",
club:"Eyüpspor",
country:"Türkiye",
nationality:"Türkiye",

age:37,
position:"LB",

rating:72,
potential:72,

pace:59,
shooting:62,
passing:82,
dribbling:65,
defending:52,
physical:61,

value:700000,
wage:700000,

contractEnd:2027,

personality:"Lider",
ambition:70,
professionalism:90,

careerGoal:"Tecrübesini genç oyunculara aktarmak",

transferListed:false,
loanListed:false,
freeAgent:false,

preferredRole:"Lider",
playingTime:"Tecrübeli Oyuncu"

},

{
id:1302,
name:"Genç Yetenek",
club:"Eyüpspor",
country:"Türkiye",
nationality:"Türkiye",

age:18,
position:"CAM",

rating:61,
potential:84,

pace:78,
shooting:58,
passing:68,
dribbling:75,
defending:28,
physical:48,

value:1200000,
wage:250000,

contractEnd:2030,

personality:"Gelişime Açık",
ambition:95,
professionalism:80,

careerGoal:"Önce Süper Lig'de kendini kanıtlamak",

transferListed:false,
loanListed:false,
freeAgent:false,

preferredRole:"Yedek",
playingTime:"Genç Yetenek"

},

/* ==================================================
   REAL MADRID
================================================== */

{
id:1401,
name:"Kylian Mbappé",
club:"Real Madrid",
country:"Fransa",
nationality:"Fransa",

age:27,
position:"ST",

rating:91,
potential:93,

pace:97,
shooting:90,
passing:81,
dribbling:92,
defending:37,
physical:76,

value:180000000,
wage:25000000,

contractEnd:2031,

personality:"Süperstar",
ambition:99,
professionalism:94,

careerGoal:"Şampiyonlar Ligi ve Ballon d'Or",

transferListed:false,
loanListed:false,
freeAgent:false,

preferredRole:"Süperstar",
playingTime:"Temel Oyuncu"

},

{
id:1402,
name:"Jude Bellingham",
club:"Real Madrid",
country:"İngiltere",
nationality:"İngiltere",

age:23,
position:"CM",

rating:90,
potential:94,

pace:80,
shooting:87,
passing:89,
dribbling:90,
defending:78,
physical:82,

value:150000000,
wage:18000000,

contractEnd:2030,

personality:"Lider",
ambition:98,
professionalism:96,

careerGoal:"Dünyanın en iyi orta saha oyuncusu olmak",

transferListed:false,
loanListed:false,
freeAgent:false,

preferredRole:"8 Numara",
playingTime:"Temel Oyuncu"

},

/* ==================================================
   MANCHESTER CITY
================================================== */

{
id:1501,
name:"Erling Haaland",
club:"Manchester City",
country:"Norveç",
nationality:"Norveç",

age:26,
position:"ST",

rating:90,
potential:94,

pace:88,
shooting:91,
passing:64,
dribbling:80,
defending:45,
physical:91,

value:190000000,
wage:22000000,

contractEnd:2034,

personality:"Profesyonel",
ambition:99,
professionalism:96,

careerGoal:"Gol rekorları ve Şampiyonlar Ligi",

transferListed:false,
loanListed:false,
freeAgent:false,

preferredRole:"Ana Santrfor",
playingTime:"Temel Oyuncu"

},

{
id:1502,
name:"Rodri",
club:"Manchester City",
country:"İspanya",
nationality:"İspanya",

age:30,
position:"CDM",

rating:90,
potential:90,

pace:65,
shooting:80,
passing:86,
dribbling:84,
defending:86,
physical:85,

value:90000000,
wage:16000000,

contractEnd:2029,

personality:"Profesyonel",
ambition:94,
professionalism:99,

careerGoal:"Takımın oyun lideri olmak",

transferListed:false,
loanListed:false,
freeAgent:false,

preferredRole:"Ön Libero",
playingTime:"Temel Oyuncu"

}

];


/* ==================================================
   OYUNCU ARAMA
================================================== */

function getPlayer(id){

return players.find(
player => player.id === id
);

}


/* ==================================================
   KULÜBE GÖRE OYUNCULAR
================================================== */

function getPlayersByClub(clubName){

return players.filter(
player => player.club === clubName
);

}


/* ==================================================
   İSİM ARAMA
================================================== */

function searchPlayers(name){

const query =
name.toLowerCase().trim();

return players.filter(
player =>
player.name
.toLowerCase()
.includes(query)
);

}


/* ==================================================
   MEVKİ FİLTRESİ
================================================== */

function filterPlayersByPosition(position){

return players.filter(
player =>
player.position === position
);

}


/* ==================================================
   GEN FİLTRESİ
================================================== */

function filterPlayersByRating(minRating,maxRating){

return players.filter(
player =>
player.rating >= minRating &&
player.rating <= maxRating
);

}


/* ==================================================
   YAŞ FİLTRESİ
================================================== */

function filterPlayersByAge(minAge,maxAge){

return players.filter(
player =>
player.age >= minAge &&
player.age <= maxAge
);

}


/* ==================================================
   FİYAT FİLTRESİ
================================================== */

function filterPlayersByValue(minValue,maxValue){

return players.filter(
player =>
player.value >= minValue &&
player.value <= maxValue
);

}


/* ==================================================
   TRANSFER LİSTESİ
================================================== */

function getTransferListedPlayers(){

return players.filter(
player =>
player.transferListed === true
);

}


/* ==================================================
   KİRALIK OYUNCULAR
================================================== */

function getLoanListedPlayers(){

return players.filter(
player =>
player.loanListed === true
);

}


/* ==================================================
   BONSERVİSSİZ OYUNCULAR
================================================== */

function getFreeAgents(){

return players.filter(
player =>
player.freeAgent === true
);

}


/* ==================================================
   TRANSFER UYGUNLUĞU
================================================== */

function calculateTransferInterest(
player,
club
){

let score = 50;


/* Kulüp itibarı */

if(club.reputation){

score +=
(club.reputation - player.rating) * 0.35;

}


/* Kariyer seviyesi */

if(player.rating >= 85){

if(club.reputation >= 90){

score += 20;

}else if(club.reputation >= 80){

score += 5;

}else{

score -= 25;

}

}


/* Genç oyuncular */

if(player.age <= 21){

if(club.reputation >= 75){

score += 10;

}

}


/* Yaşlı oyuncular */

if(player.age >= 32){

score += 5;

}


/* Sonuç */

return Math.max(
5,
Math.min(
95,
Math.round(score)
)
);

}


/* ==================================================
   GLOBAL ERİŞİM
================================================== */

window.players = players;

window.getPlayer = getPlayer;

window.getPlayersByClub =
getPlayersByClub;

window.searchPlayers =
searchPlayers;

window.filterPlayersByPosition =
filterPlayersByPosition;

window.filterPlayersByRating =
filterPlayersByRating;

window.filterPlayersByAge =
filterPlayersByAge;

window.filterPlayersByValue =
filterPlayersByValue;

window.getTransferListedPlayers =
getTransferListedPlayers;

window.getLoanListedPlayers =
getLoanListedPlayers;

window.getFreeAgents =
getFreeAgents;

window.calculateTransferInterest =
calculateTransferInterest;
