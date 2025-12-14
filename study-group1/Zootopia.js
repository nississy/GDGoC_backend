console.log ("=== LATIHAN PENJAGA ZOOTOPIA ===")
console.log ("")
let penjaga = [{nama: "Judy Hopps", lari: 3}, {nama: "Nick Wilde", lari: 2}];

for (let i = 0; i < penjaga.length; i++){
    let namaPenjaga = penjaga [i].nama;
    let lari = penjaga [i].lari;
    console.log (namaPenjaga, ": ", lari, "km");
}

// Menentukan jarak lari
let jarakJudyHopps = 3;
let jarakNickWilde = 2;

let namaPenjaga1 = penjaga[0].nama;
let namaPenjaga2 = penjaga[1].nama;

// Looping
for (let i = 1; i <= 5; i++){
console.log ("");
    console.log ("Hari ", i, ":");
    console.log ("- ", namaPenjaga1, "lari ", jarakJudyHopps, " km");
    console.log ("- ", namaPenjaga2, "lari ", jarakNickWilde, " km");
}

for (let i = 1; i < 5; i++){
    jarakJudyHopps = jarakJudyHopps + 3;
    jarakNickWilde = jarakNickWilde + 2;
}

console.log ("");
console.log ("=== TOTAL JARAK SELAMA 5 HARI ===");
console.log (namaPenjaga1, ": ", jarakJudyHopps, " km");
console.log (namaPenjaga2, ": ", jarakNickWilde, " km");