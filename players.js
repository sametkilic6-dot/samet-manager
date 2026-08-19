/*
========================================================
SAMET MANAGER - PLAYER ENGINE
========================================================

Görevleri:
- players-data.json yükleme
- Oyuncu arama
- Oyuncu ID sistemi
- Kulübe göre kadro
- Oyuncu profili
- Transfer merkezi
- 17.000+ oyuncuya uygun yapı
- Fotoğraf URL altyapısı
- Eski oyuncu veri formatlarıyla uyumluluk

INDEX.HTML DEĞİŞTİRİLMEZ.
========================================================
*/

let players = [];
let playersLoaded = false;
let playersLoading = false;

const PLAYER_DATA_URL = "./players-data.json";

/* ======================================================
   VERİ YÜKLEME
====================================================== */

async function loadPlayers(){

    if(playersLoaded){
        return players;
    }

    if(playersLoading){
        return players;
    }

    playersLoading = true;

    try{

        const response = await fetch(
            PLAYER_DATA_URL + "?v=" + Date.now()
        );

        if(!response.ok){
            throw new Error(
                "players-data.json yüklenemedi."
            );
        }

        const data = await response.json();

        if(Array.isArray(data)){
            players = data;
        }
        else if(
            data &&
            Array.isArray(data.players)
        ){
            players = data.players;
        }
        else{
            players = [];
        }

        players = players.map(
            normalizePlayer
        );

        playersLoaded = true;

        console.log(
            "Samet Manager:",
            players.length,
            "oyuncu yüklendi."
        );

        return players;

    }
    catch(error){

        console.error(
            "Oyuncu verileri yüklenemedi:",
            error
        );

        players = [];

        return [];

    }
    finally{

        playersLoading = false;

    }

}


/* ======================================================
   OYUNCU NORMALİZASYONU
====================================================== */

function normalizePlayer(player,index){

    const rating =
        Number(
            player.rating ??
            player.OVR ??
            player.overall ??
            0
        );

    const potential =
        Number(
            player.potential ??
            player.POT ??
            rating
        );

    const age =
        Number(
            player.age ??
            player.Age ??
            0
        );

    const value =
        Number(
            player.value ??
            player.marketValue ??
            0
        );

    const wage =
        Number(
            player.wage ??
            player.salary ??
            0
        );

    const country =
        player.country ??
        player.nationality ??
        player.Nation ??
        "Belirsiz";

    const club =
        player.club ??
        player.team ??
        player.Team ??
        "";

    const position =
        normalizePosition(
            player.position ??
            player.Position ??
            ""
        );

    const id =
        player.id ??
        player.ID ??
        player.playerId ??
        index + 1;

    return {

        id: id,

        name:
            player.name ??
            player.Name ??
            "Bilinmeyen Oyuncu",

        nationality:
            country,

        country:
            country,

        club:
            club,

        league:
            player.league ??
            player.League ??
            "",

        position:
            position,

        age:
            age,

        rating:
            rating,

        potential:
            potential,

        value:
            value,

        wage:
            wage,

        contractEnd:
            player.contractEnd ??
            player.contract_end ??
            "Bilinmiyor",

        technical:
            Number(
                player.technical ??
                calculateTechnical(player)
            ),

        physical:
            Number(
                player.physical ??
                calculatePhysical(player)
            ),

        mental:
            Number(
                player.mental ??
                calculateMental(player)
            ),

        pace:
            Number(
                player.pace ??
                player.PAC ??
                0
            ),

        shooting:
            Number(
                player.shooting ??
                player.SHO ??
                0
            ),

        passing:
            Number(
                player.passing ??
                player.PAS ??
                0
            ),

        dribbling:
            Number(
                player.dribbling ??
                player.DRI ??
                0
            ),

        defending:
            Number(
                player.defending ??
                player.DEF ??
                0
            ),

        physicality:
            Number(
                player.physicality ??
                player.PHY ??
                0
            ),

        preferredFoot:
            player.preferredFoot ??
            player["Preferred foot"] ??
            "Bilinmiyor",

        weakFoot:
            Number(
                player.weakFoot ??
                player["Weak foot"] ??
                0
            ),

        skillMoves:
            Number(
                player.skillMoves ??
                player["Skill moves"] ??
                0
            ),

        personality:
            player.personality ??
            generatePersonality(player),

        ambition:
            Number(
                player.ambition ??
                generateAmbition(player)
            ),

        professionalism:
            Number(
                player.professionalism ??
                generateProfessionalism(player)
            ),

        careerGoal:
            player.careerGoal ??
            generateCareerGoal(player),

        transferListed:
            Boolean(
                player.transferListed ??
                player.transfer_listed ??
                false
            ),

        loanListed:
            Boolean(
                player.loanListed ??
                player.loan_listed ??
                false
            ),

        freeAgent:
            Boolean(
                player.freeAgent ??
                player.free_agent ??
                !club
            ),

        photo:
            player.photo ??
            player.image ??
            player.url ??
            null

    };

}


/* ======================================================
   MEVKİ NORMALİZASYONU
====================================================== */

function normalizePosition(position){

    if(!position){
        return "";
    }

    const p =
        String(position)
        .toUpperCase()
        .trim();

    const map = {

        "GK":"GK",
        "GOALKEEPER":"GK",

        "CB":"CB",
        "DEFENDER":"CB",

        "LB":"LB",
        "LWB":"LB",

        "RB":"RB",
        "RWB":"RB",

        "CDM":"CDM",
        "DM":"CDM",

        "CM":"CM",

        "CAM":"CAM",
        "AM":"CAM",

        "LM":"LM",

        "RM":"RM",

        "LW":"LW",

        "RW":"RW",

        "ST":"ST",
        "CF":"ST",
        "FORWARD":"ST"

    };

    return map[p] || p;

}


/* ======================================================
   TEKNİK / FİZİK / ZİHİNSEL
====================================================== */

function calculateTechnical(player){

    const values = [

        Number(player.PAS) || 0,
        Number(player.DRI) || 0,
        Number(player.shooting) || 0,
        Number(player.SHO) || 0

    ];

    const valid =
        values.filter(v => v > 0);

    if(!valid.length){
        return Number(
            player.OVR ??
            player.rating ??
            0
        );
    }

    return Math.round(
        valid.reduce(
            (a,b) => a+b,
            0
        ) / valid.length
    );

}


function calculatePhysical(player){

    const values = [

        Number(player.PHY) || 0,
        Number(player.physicality) || 0,
        Number(player["Sprint Speed"]) || 0,
        Number(player.Strength) || 0

    ];

    const valid =
        values.filter(v => v > 0);

    if(!valid.length){
        return Number(
            player.OVR ??
            player.rating ??
            0
        );
    }

    return Math.round(
        valid.reduce(
            (a,b) => a+b,
            0
        ) / valid.length
    );

}


function calculateMental(player){

    const values = [

        Number(player.Reactions) || 0,
        Number(player.Composure) || 0,
        Number(player.Vision) || 0,
        Number(player.Positioning) || 0

    ];

    const valid =
        values.filter(v => v > 0);

    if(!valid.length){
        return Number(
            player.OVR ??
            player.rating ??
            0
        );
    }

    return Math.round(
        valid.reduce(
            (a,b) => a+b,
            0
        ) / valid.length
    );

}


/* ======================================================
   KİŞİLİK
====================================================== */

function generatePersonality(player){

    const rating =
        Number(player.rating ?? player.OVR) || 0;

    const potential =
        Number(player.potential ?? player.POT) || rating;

    if(potential - rating >= 15){
        return "Gelişime Açık";
    }

    if(rating >= 88){
        return "Yıldız";
    }

    if(rating >= 80){
        return "Profesyonel";
    }

    return "Dengeli";

}


function generateAmbition(player){

    const rating =
        Number(player.rating ?? player.OVR) || 0;

    const potential =
        Number(player.potential ?? player.POT) || rating;

    return Math.max(
        50,
        Math.min(
            99,
            Math.round(
                55 +
                (potential - rating) * 2 +
                rating * 0.2
            )
        )
    );

}


function generateProfessionalism(player){

    const rating =
        Number(player.rating ?? player.OVR) || 0;

    return Math.max(
        50,
        Math.min(
            99,
            Math.round(
                55 + rating * 0.35
            )
        )
    );

}


function generateCareerGoal(player){

    const rating =
        Number(player.rating ?? player.OVR) || 0;

    if(rating >= 88){
        return "Şampiyonlar Ligi ve büyük kupalar";
    }

    if(rating >= 80){
        return "Avrupa kupalarında mücadele etmek";
    }

    return "Kariyerinde gelişmek";
}


/* ======================================================
   OYUNCU BUL
====================================================== */

function getPlayer(id){

    return players.find(
        player =>
            String(player.id) === String(id)
    );

}


/* ======================================================
   KULÜBE GÖRE OYUNCULAR
====================================================== */

function getPlayersByClub(clubName){

    if(!clubName){
        return [];
    }

    const target =
        normalizeText(clubName);

    return players.filter(player => {

        return normalizeText(
            player.club
        ) === target;

    });

}


/* ======================================================
   METİN NORMALİZASYONU
====================================================== */

function normalizeText(value){

    return String(
        value ?? ""
    )
    .toLocaleLowerCase("tr-TR")
    .trim();

}


/* ======================================================
   OYUNCU ARAMA
====================================================== */

function searchPlayers(query){

    const q =
        normalizeText(query);

    if(!q){
        return players;
    }

    return players.filter(
        player =>
            normalizeText(
                player.name
            ).includes(q)
    );

}


/* ======================================================
   OYUNCU İSTATİSTİKLERİ
====================================================== */

function getPlayerStats(player){

    return {

        rating: player.rating,

        potential: player.potential,

        pace: player.pace,

        shooting: player.shooting,

        passing: player.passing,

        dribbling: player.dribbling,

        defending: player.defending,

        physicality: player.physicality

    };

}


/* ======================================================
   TRANSFER İHTİMALİ
====================================================== */

function playerTransferChance(
    player,
    club
){

    if(!player || !club){
        return 50;
    }

    let score = 50;

    const reputation =
        Number(
            club.reputation
        ) || 0;

    const rating =
        Number(
            player.rating
        ) || 0;

    const potential =
        Number(
            player.potential
        ) || rating;

    const age =
        Number(
            player.age
        ) || 25;


    if(
        reputation >= rating + 15
    ){

        score += 25;

    }
    else if(
        reputation >= rating
    ){

        score += 15;

    }
    else if(
        reputation >= rating - 10
    ){

        score += 5;

    }
    else{

        score -= 20;

    }


    if(
        age <= 21 &&
        potential >= rating + 10 &&
        reputation >= 75
    ){

        score += 8;

    }


    if(
        player.transferListed
    ){

        score += 10;

    }


    if(
        player.loanListed
    ){

        score += 5;

    }


    if(
        player.freeAgent
    ){

        score += 15;

    }


    if(
        rating >= 90 &&
        reputation < 90
    ){

        score -= 15;

    }


    return Math.max(
        5,
        Math.min(
            95,
            Math.round(score)
        )
    );

}


/* ======================================================
   FOTOĞRAF
====================================================== */

function getPlayerPhoto(player){

    if(
        player &&
        player.photo
    ){

        return player.photo;

    }

    if(
        player &&
        player.id
    ){

        return (
            "images/players/" +
            player.id +
            ".webp"
        );

    }

    return "";

}


/* ======================================================
   VERİTABANI DURUMU
====================================================== */

function getPlayerDatabaseStatus(){

    return {

        loaded:
            playersLoaded,

        loading:
            playersLoading,

        count:
            players.length

    };

}


/* ======================================================
   BAŞLAT
====================================================== */

loadPlayers();


/*
========================================================
GLOBAL API
========================================================

Index.html bu fonksiyonları kullanır.
========================================================
*/

window.players = players;

window.getPlayer = getPlayer;

window.getPlayersByClub =
    getPlayersByClub;

window.searchPlayers =
    searchPlayers;

window.getPlayerStats =
    getPlayerStats;

window.playerTransferChance =
    playerTransferChance;

window.getPlayerPhoto =
    getPlayerPhoto;

window.getPlayerDatabaseStatus =
    getPlayerDatabaseStatus;
