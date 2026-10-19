// ============================================================
// Завдання 2.1. Варіант 2.
// У поле вводу вводиться країна і натискається Enter.
// При натисканні Enter введені країни записуються в абзац
// під поле вводу через кому (кожне нове введення додається).
// ============================================================

(function () {
  // Отримуємо елементи сторінки
  let input = document.getElementById("countryInput");
  let result = document.getElementById("countryResult");

  // Масив для зберігання введених країн
  let countries = [];

  // Обробник події keydown на полі вводу
  input.addEventListener("keydown", function (event) {
      // Перевіряємо, чи натиснуто саме Enter
      if (event.key === "Enter") {
          // Зчитуємо та обрізаємо пробіли
          let value = input.value.trim();

          // Якщо поле не порожнє — додаємо країну
          if (value !== "") {
              countries.push(value);

              // Формуємо рядок через кому
              result.textContent = countries.join(", ");

              // Очищаємо поле вводу
              input.value = "";
          }
      }
  });
})();