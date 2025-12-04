function openTab(tab) {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.getElementById(tab).classList.add("active");
    document.querySelectorAll(".sidebar li").forEach(el => el.classList.remove("active"));
}

function showPopup(type) {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup-title").innerText =
        type === "send" ? "Отправить" : "Получить";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}

// Chart.js — график
new Chart(document.getElementById('chart'), {
    type: 'line',
    data: {
        labels: ["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],
        datasets: [{
            label: "Баланс",
            data: [6500,6700,6800,6900,7050,7000,7000],
            borderColor: "#00ff95",
            borderWidth: 3,
            fill: false,
        }]
    }
});