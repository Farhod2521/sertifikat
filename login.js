// Misol foydalanuvchi ma'lumotlari
const users = [
    { id: 1, name: "Yusuf", password: "1234" },
    { id: 2, name: "Sardor", password: "1234" },
    { id: 3, name: "Yusu12f", password: "1234" }
];

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Formani yuborishni to'xtatamiz

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Foydalanuvchini tekshirish
    const user = users.find(u => u.name === username && u.password === password);

    if (user) {
        // Agar foydalanuvchi topilgan bo'lsa, xotiraga saqlaymiz
        localStorage.setItem('userId', user.id);
        localStorage.setItem('username', user.name);

        alert("Tizimga kirish muvaffaqiyatli!");
        window.location.href = "index.html"; // Yangi sahifaga yo'naltirish
    } else {
        // Agar foydalanuvchi topilmasa
        document.getElementById("errorMessage").textContent = "Username yoki password noto'g'ri.";
    }
});
