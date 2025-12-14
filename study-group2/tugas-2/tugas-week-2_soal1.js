function buatTeh(input) {
    return new Promise((resolve, reject) => {
        console.log("⏳ Sedang merebus air ... (Tunggu 2 detik)");

        const prosesTeh = () => {
            if (input === "Gula Batu") {
                resolve("✅ Teh Gula Batu Siap dinikmati!");
            } else {
                reject("❌ Maaf, stok gula habis.");
            }
        };

        setTimeout(prosesTeh, 2000);
    });
};

async function main() {
    console.log("== KASUS SUKSES ==");
    try {
        const sukses = await buatTeh("Gula Batu");
        console.log(sukses);
    } catch (error) {
        console.log(error);
    }

    console.log("\n== KASUS GAGAL ==");
    try {
        const gagal = await buatTeh("Gula Pasir");
        console.log(gagal);
    } catch (error) {
        console.log(error);
    }
}

main();