function digits(number) {
    var result = {}, propName = ['единицы', 'десятки', 'сотни'], i = 0;
    if(number < 0 || number > 999) {
        console.log("Число должно быть от 0 до 999");
        return result;
    }
    while(number) {
        result[propName[i++]] = number % 10;
        number = Math.floor(number / 10);
    }
    return result;
}
