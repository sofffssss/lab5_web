// ============================================================
// Завдання 2.2. Варіант 9.
// Дана пуста таблиця. При натисканні на кнопку заповнити її
// наступним чином: парні рядки — від'ємні числа,
// непарні — додатні, головна діагональ — 0.
// ============================================================

// Генератор випадкового цілого числа в діапазоні [min, max]
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Головна функція заповнення таблиці
function fillTable() {
  let table = document.getElementById("matrixTable");
  let rows = table.rows;          // HTMLCollection рядків
  let n = rows.length;            // кількість рядків (5)

  for (let i = 0; i < n; i++) {
      let cells = rows[i].cells;  // комірки поточного рядка

      for (let j = 0; j < cells.length; j++) {
          let value;

          if (i === j) {
              // Головна діагональ — 0
              value = 0;
          } else if (i % 2 === 0) {
              // Парні рядки (0, 2, 4) — від'ємні числа
              value = randomInt(-99, -1);
          } else {
              // Непарні рядки (1, 3) — додатні числа
              value = randomInt(1, 99);
          }

          cells[j].textContent = value;

          // Скидаємо стилі (якщо таблиця заповнювалась повторно)
          cells[j].style.backgroundColor = "";
          cells[j].style.color = "#CAD4D6";
          cells[j].style.fontWeight = "";

          // Виділяємо головну діагональ
          if (i === j) {
              cells[j].style.backgroundColor = "#37B5A5";
              cells[j].style.color = "#fff";
              cells[j].style.fontWeight = "bold";
          }
      }
  }
}