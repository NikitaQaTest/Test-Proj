/* 4. Написати функцію, яка рекурсивно виводить в консоль аргумент та збільшує його на 2 якщо аргумент не
перевищує за значенням число 10 */
function recursiveAddition(value) {
    // ваш код
    console.log(value);
    const newValue = value +2;
    if (newValue < 10){
        recursiveAddition(newValue);
    }

}
    
    // Приклад роботи функції:
    recursiveAddition(5); // виведе в консоль по черзі 5, 7, 9
    recursiveAddition(2); // виведе в консоль по черзі 2, 4, 6, 8, 10
    recursiveAddition(11); // не виведе нічого.
    