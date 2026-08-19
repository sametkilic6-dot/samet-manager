/* ============================================================
   ⚽ SAMET MANAGER
   PROFESSIONAL PLAYER DATABASE ENGINE
   ============================================================

   Amaç:
   - 17.000+ oyuncu desteklemek
   - FC/Career Mode tarzı oyuncu verisi
   - Gerçek kulüp bağlantıları
   - Transfer sistemi
   - Oyuncu profili
   - Potansiyel
   - Maaş
   - Piyasa değeri
   - Oyuncu DNA
   - Kişilik
   - Sözleşme
   - Fotoğraf sistemi
   - Gelecekte veri paketleri ekleyebilme

   index.html ile uyumludur.

   Gerekli fonksiyonlar:
   getPlayer(id)
   getPlayersByClub(club)
   ============================================================ */


/* ============================================================
   DATABASE VERSION
   ============================================================ */

const PLAYER_DATABASE_VERSION = "1.0.0";

const PLAYER_DATABASE_SIZE = 17000;


/* ============================================================
   OYUNCU VERİ TABANI
   ============================================================

   Şimdilik örnek veri yapısı kullanılıyor.

   Gerçek 17.000+ oyuncu veri paketi daha sonra bu yapıya
   aktarılabilir.
   ============================================================ */

const players = [

{
    id: 1,

    name: "Oyuncu Örneği",

    firstName: "Oyuncu",
    lastName: "Örneği",

    nationality: "Türkiye",
    country: "Türkiye",

    club: "Galatasaray",

    league: "Süper Lig",

    position: "CM",

    age: 22,

    birthDate: "2004-01-01",

    rating: 75,

    potential: 82,

    value: 5000000,

    wage: 75000,

    contractEnd: "2028-06-30",

    transferListed: false,

    loanListed: false,

    freeAgent: false,

    /* -------------------------
       OYUNCU DNA
       ------------------------- */

    technical: 78,

    physical: 74,

    mental: 76,

    pace: 72,

    shooting: 70,

    passing: 82,

    dribbling: 75,

    defending: 58,

    physicality: 74,

    stamina: 80,

    strength: 68,

    agility: 79,

    balance: 81,

    reactions: 77,

    composure: 75,

    vision: 84,

    positioning: 72,

    interceptions: 55,

    tackling: 52,

    crossing: 73,

    finishing: 65,

    longShots: 68,

    freeKick: 60,

    penalties: 55,

    heading: 50,

    jumping: 58,

    acceleration: 74,

    sprintSpeed: 71,

    /* -------------------------
       KİŞİLİK
       ------------------------- */

    personality: "Profesyonel",

    ambition: 82,

    professionalism: 85,

    loyalty: 70,

    leadership: 65,

    temperament: 74,

    workRate: "Yüksek",

    weakFoot: 4,

    skillMoves: 4,

    preferredFoot: "Sağ",

    /* -------------------------
       KARİYER
       ------------------------- */

    careerGoal: "Avrupa'nın üst düzey kulüplerinde oynamak",

    role: "İlk 11",

    squadStatus: "Ana Kadro",

    /* -------------------------
       TRANSFER
       ------------------------- */

    transferInterest: 70,

    wageDemand: 90000,

    askingPrice: 5500000,

    releaseClause: 15000000,

    /* -------------------------
       FOTOĞRAF
       ------------------------- */

    photo: "images/players/1.webp"

}

];


/* ============================================================
   OYUNCU INDEXLERİ
   ============================================================

   17.000+ oyuncuda sürekli .find() kullanmak yerine Map
   kullanıyoruz.

   Böylece:

   getPlayer(15000)

   gibi sorgular çok daha hızlı çalışır.
   ============================================================ */

const playerById = new Map();

const playersByClub = new Map();

const playersByCountry = new Map();

const playersByPosition = new Map();


/* ============================================================
   INDEX OLUŞTUR
   ============================================================ */

function buildPlayerIndexes(){

    playerById.clear();

    playersByClub.clear();

    playersByCountry.clear();

    playersByPosition.clear();


    players.forEach(player => {

        /* -------------------------
           ID INDEX
           ------------------------- */

        playerById.set(
            Number(player.id),
            player
        );


        /* -------------------------
           KULÜP INDEX
           ------------------------- */

        const club =
            player.club ||
            "Serbest Oyuncu";


        if(!playersByClub.has(club)){

            playersByClub.set(
                club,
                []
            );

        }


        playersByClub
            .get(club)
            .push(player);


        /* -------------------------
           ÜLKE INDEX
           ------------------------- */

        const country =
            player.country ||
            player.nationality ||
            "Belirsiz";


        if(!playersByCountry.has(country)){

            playersByCountry.set(
                country,
                []
            );

        }


        playersByCountry
            .get(country)
            .push(player);


        /* -------------------------
           MEVKİ INDEX
           ------------------------- */

        const position =
            player.position ||
            "UNKNOWN";


        if(!playersByPosition.has(position)){

            playersByPosition.set(
                position,
                []
            );

        }


        playersByPosition
            .get(position)
            .push(player);

    });

}


/* ============================================================
   OYUNCU GETİR
   ============================================================ */

function getPlayer(id){

    return playerById.get(
        Number(id)
    ) || null;

}


/* ============================================================
   KULÜBE GÖRE OYUNCULAR
   ============================================================ */

function getPlayersByClub(club){

    if(!club){

        return [];

    }

    return (
        playersByClub.get(club)
        || []
    );

}


/* ============================================================
   ÜLKEYE GÖRE OYUNCULAR
   ============================================================ */

function getPlayersByCountry(country){

    if(!country){

        return [];

    }

    return (
        playersByCountry.get(country)
        || []
    );

}


/* ============================================================
   MEVKİYE GÖRE OYUNCULAR
   ============================================================ */

function getPlayersByPosition(position){

    if(!position){

        return [];

    }

    return (
        playersByPosition.get(position)
        || []
    );

}


/* ============================================================
   OYUNCU ARAMA
   ============================================================ */

function searchPlayers(query){

    if(!query){

        return players;

    }


    const search =
        String(query)
            .toLowerCase()
            .trim();


    return players.filter(
        player => {

            return (
                String(player.name || "")
                    .toLowerCase()
                    .includes(search)

                ||

                String(player.club || "")
                    .toLowerCase()
                    .includes(search)

                ||

                String(
                    player.nationality || ""
                )
                    .toLowerCase()
                    .includes(search)
            );

        }
    );

}


/* ============================================================
   GELİŞMİŞ OYUNCU FİLTRESİ
   ============================================================ */

function filterPlayers(options = {}){

    let result = players;


    if(options.club){

        result =
            result.filter(
                player =>
                    player.club === options.club
            );

    }


    if(options.country){

        result =
            result.filter(
                player =>
                    (
                        player.country ||
                        player.nationality
                    )
                    === options.country
            );

    }


    if(options.position){

        result =
            result.filter(
                player =>
                    player.position ===
                    options.position
            );

    }


    if(options.minAge !== undefined){

        result =
            result.filter(
                player =>
                    Number(player.age)
                    >= Number(options.minAge)
            );

    }


    if(options.maxAge !== undefined){

        result =
            result.filter(
                player =>
                    Number(player.age)
                    <= Number(options.maxAge)
            );

    }


    if(options.minRating !== undefined){

        result =
            result.filter(
                player =>
                    Number(player.rating)
                    >= Number(options.minRating)
            );

    }


    if(options.maxRating !== undefined){

        result =
            result.filter(
                player =>
                    Number(player.rating)
                    <= Number(options.maxRating)
            );

    }


    if(options.minPotential !== undefined){

        result =
            result.filter(
                player =>
                    Number(player.potential)
                    >= Number(options.minPotential)
            );

    }


    if(options.maxValue !== undefined){

        result =
            result.filter(
                player =>
                    Number(player.value)
                    <= Number(options.maxValue)
            );

    }


    if(options.transferListed){

        result =
            result.filter(
                player =>
                    player.transferListed === true
            );

    }


    if(options.loanListed){

        result =
            result.filter(
                player =>
                    player.loanListed === true
            );

    }


    if(options.freeAgent){

        result =
            result.filter(
                player =>
                    player.freeAgent === true
            );

    }


    return result;

}


/* ============================================================
   TRANSFER UYGUNLUK SKORU
   ============================================================ */

function getTransferInterest(player, club){

    if(!player || !club){

        return 50;

    }


    let score = 50;


    const clubRep =
        Number(
            club.reputation || 50
        );


    const rating =
        Number(
            player.rating || 0
        );


    const potential =
        Number(
            player.potential || rating
        );


    const age =
        Number(
            player.age || 25
        );


    /* KULÜP SEVİYESİ */

    if(clubRep >= rating + 15){

        score += 20;

    }
    else if(clubRep >= rating){

        score += 12;

    }
    else if(clubRep >= rating - 10){

        score += 3;

    }
    else{

        score -= 18;

    }


    /* GENÇ OYUNCU */

    if(
        age <= 23 &&
        potential >= 80
    ){

        score += 8;

    }


    /* TRANSFER LİSTESİ */

    if(player.transferListed){

        score += 10;

    }


    /* KİRALIK */

    if(player.loanListed){

        score += 6;

    }


    /* SERBEST */

    if(player.freeAgent){

        score += 15;

    }


    /* YILDIZ */

    if(
        rating >= 88 &&
        clubRep < 90
    ){

        score -= 20;

    }


    return Math.max(
        5,
        Math.min(
            95,
            Math.round(score)
        )
    );

}


/* ============================================================
   FOTOĞRAF SİSTEMİ
   ============================================================ */

function getPlayerPhoto(player){

    if(!player){

        return "images/players/default.webp";

    }


    if(player.photo){

        return player.photo;

    }


    return (
        "images/players/" +
        player.id +
        ".webp"
    );

}


/* ============================================================
   OYUNCU YAŞ HESAPLAMA
   ============================================================ */

function calculateAge(birthDate){

    if(!birthDate){

        return null;

    }


    const birth =
        new Date(birthDate);

    const now =
        new Date();


    let age =
        now.getFullYear() -
        birth.getFullYear();


    const month =
        now.getMonth() -
        birth.getMonth();


    if(
        month < 0 ||
        (
            month === 0 &&
            now.getDate() <
            birth.getDate()
        )
    ){

        age--;

    }


    return age;

}


/* ============================================================
   OYUNCU VERİSİ DOĞRULAMA
   ============================================================ */

function validatePlayer(player){

    if(!player){

        return false;

    }


    if(
        player.id === undefined ||
        !player.name
    ){

        return false;

    }


    return true;

}


/* ============================================================
   VERİ TABANI İSTATİSTİKLERİ
   ============================================================ */

function getPlayerDatabaseStats(){

    return {

        version:
            PLAYER_DATABASE_VERSION,

        expectedPlayers:
            PLAYER_DATABASE_SIZE,

        loadedPlayers:
            players.length,

        clubs:
            playersByClub.size,

        countries:
            playersByCountry.size,

        positions:
            playersByPosition.size

    };

}


/* ============================================================
   VERİ TABANI BAŞLAT
   ============================================================ */

buildPlayerIndexes();


/* ============================================================
   DEBUG
   ============================================================ */

console.log(
    "⚽ Samet Manager Player Database"
);

console.log(
    "📦 Database Version:",
    PLAYER_DATABASE_VERSION
);

console.log(
    "👥 Loaded Players:",
    players.length
);

console.log(
    "🏟️ Clubs:",
    playersByClub.size
);

console.log(
    "🌍 Countries:",
    playersByCountry.size
);

console.log(
    "📊 Positions:",
    playersByPosition.size
);
