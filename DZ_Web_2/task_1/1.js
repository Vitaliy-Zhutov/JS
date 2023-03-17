const numCelsius = parseInt(prompt("Введите температуру в Цельсиях: "));
const numFahrenheit = (9 / 5) * numCelsius + 32;
console.log(`Цельсий: ${numCelsius}, Фаренгейт: ${numFahrenheit.toFixed(1)}`);