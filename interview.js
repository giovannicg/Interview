//numbres 1-100 if number is divisible by 3 print fizz else if visible by 5 print buzz else if divisible by 3 and 5 print fizzbuzz else print number

//list numbers
list = [];
for (var i = 1; i <= 100; i++) {
    list.push(i);
}
if(list.length > 0){
    for (var i = 0; i < list.length; i++) {
        if(list[i] % 3 == 0 && list[i] % 5 == 0){
            console.log("fizzbuzz");
        }
        else if(list[i] % 3 == 0){
            console.log("fizz");
        }
        else if(list[i] % 5 == 0){
            console.log("buzz");
        }
        else{
            console.log(list[i]);
        }
    }
}

