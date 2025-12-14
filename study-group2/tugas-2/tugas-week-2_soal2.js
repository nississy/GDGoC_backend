// 2. Fungsi Async Fetch
const getTodo = async () => {
    try {
        console.log("Mencoba mengambil data ...");

        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

        if (!response.ok) {
            throw new Error("Data Todo tidak ditemukan!");
        }

        const data = await response.json();
        const title = data.title;

        console.log("✅ Judul Todo:", title);
    } catch (error) {
        console.log("Terjadi Error:", error.message);
    } finally {
        console.log("--- Proses Selesai ---\n");
    }
};

getTodo();