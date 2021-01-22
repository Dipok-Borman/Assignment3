//https://github.com/Dipok-Borman/Assignment3

//Kilometer to meter converter:
function kilometerToMeter(kilometer){
    var kilo = 1000;
    var meter = kilo * kilometer;
    var meterUnit = meter + " Meter.";
    return meterUnit;
};
var result1 = kilometerToMeter(2);
console.log(result1);

//budgetCalculator:
function budgetCalculator(watch,phone,laptop){
    var watch1 = 50;
    var phone1 = 100;
    var laptop1 = 500;
    var watchPrice = watch1 * watch;
    var phonePrice = phone1 * phone;
    var laptopPrice = laptop1 * laptop;
    const totalPrice = watchPrice + phonePrice + laptopPrice + " taka.";
    return totalPrice;
};
var payment = budgetCalculator(2,1,2);
console.log(payment);

//hotelCost function:
function hotelCost(day){
    var hotelFee = 100;
    var hotelFeeCom = 80;
    var hotelFeeHalf = 50;
    if (0 < day && day < 11) {
        return hotelFee * day + " taka.";
    }else if (10 < day && day < 21) {
        var day10Bill = hotelFee * 10;
        var overDay10 = day - 10;
        var overTotal = day10Bill + overDay10 * hotelFeeCom;
        return overTotal + " taka.";
    }else if(day>20){
        var day10Bill = hotelFee * 10;
        var day20Bill = day10Bill + 80 * 10;
        var overerDay = day - 20;
        var over20Total = day20Bill + overerDay * hotelFeeHalf;
        return over20Total + " taka.";
    }else{
        return "Sorry, We are unable";
    }
};
var totalFee = hotelCost(200);
console.log(totalFee);

// var list = ["Sopon","Ainul","Hridoy","Shohag","Shamim","Jewel","Jamal","Laden","DipokBorman"];