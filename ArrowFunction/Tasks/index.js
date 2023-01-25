// Завершите функцию getYear, чтобы она возвращала параметр searchYear, если он найден в массиве. В противном случае она должна вернуть undefined.

/**
 * @param {number[]} years
 * @param {number} searchYear
 */
const getYear = (years, searchYear) => {
	if (years.includes(searchYear)){
        return searchYear
    };
}


getYear([2019, 2020, 2021], 2020); // 2020
getYear([2019, 2020, 2021], 1990); // undefined



/* Завершите функцию `getUnit`, чтобы она возвращала единицу измерения температуры.
- возвращает `"Celsius"`, когда `°C` найден в строке
- возвращает `"Fahrenheit"`, когда `°F` найден в строке
- возвращает `"N/A"` во всех остальных случаях */

/**
 * @param {string} text
 */
const getUnit = text => {
	if (text.includes("°F")){
        return "Farenheit"
    };
    if (text.includes("°C")){
        return "Celsius"
    };
    return "N/A";
}


getUnit("It was 90°F yesterday"); // Fahrenheit
getUnit("Why is it 20°C"); // Celsius
getUnit("It is expected to be cold."); // N/A