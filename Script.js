document.addEventListener("DOMContentLoaded", function () {
    console.log("Скрипт загружен!");


    document.querySelectorAll(".fade-up").forEach(el => {
        el.style.opacity = "1";
    });


    if (typeof bulmaCarousel !== 'undefined') {
        try {
            bulmaCarousel.attach("#slider", {
                slidesToScroll: 1,
                slidesToShow: 1,
                infinite: true,
                autoplay: true,
            });
            console.log("Слайдер успешно инициализирован!");
        } catch (error) {
            console.error("Ошибка при инициализации слайдера:", error);
        }
    } else {
        console.error("bulmaCarousel не найден!");
    }


    const form = document.querySelector("#target-section");
    if (!form) {
        console.error("Форма не найдена!");
        return;
    }

    const submitButton = form.querySelector(".button_main");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = form.querySelector("input[type='text']").value.trim();
        const email = form.querySelector("input[type='email']").value.trim();
        const phone = form.querySelector("input[type='tel']").value.trim();

        if (!name || !email || !phone) {
            alert("Пожалуйста, заполните все поля!");
            return;
        }


        const TOKEN = "7693218483:AAE5qAPOe7-X0TS4mOm3uMkjYm89IRpBdPY";
        const CHAT_ID = 4600222027;
        const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;


        const message = `
        📩 *Новая заявка с сайта*
        🔹 *Имя:* ${name}
        📧 *Email:* ${email}
        📱 *Телефон:* ${phone}
        `;

        try {
            submitButton.textContent = "Отправка...";
            submitButton.disabled = true;

            const response = await fetch(URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message,
                    parse_mode: "Markdown"
                })
            });

            if (response.ok) {
                alert("✅ Заявка успешно отправлена!");
                form.reset();
            } else {
                alert("❌ Ошибка при отправке. Попробуйте позже.");
            }
        } catch (error) {
            alert("❌ Ошибка соединения. Проверьте подключение к интернету.");
            console.error("Ошибка отправки в Telegram:", error);
        } finally {
            submitButton.textContent = "Отправить";
            submitButton.disabled = false;
        }
    });
});

function fadeInOnScroll() {
    const elements = document.querySelectorAll(".fade-in");

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.85) {
            el.classList.add("visible");
        }
    });
}
document.addEventListener("DOMContentLoaded", fadeInOnScroll);
window.addEventListener("scroll", fadeInOnScroll);