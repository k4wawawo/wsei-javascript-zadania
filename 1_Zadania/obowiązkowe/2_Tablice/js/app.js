//ZAD0
var paramArray = [1, 2, 3, 4, 5, 6, 7],
sum = 0, 
avg = 0, 
  outputArray = []; 

function distFromAvarage(array) {
 for (var i = 0; i < array.length; i++) {
   sum += array[i];
 } 
 
 avg = sum / array.length; 
 console.log('Średnia z tablicy to: ', avg);
 
 for (var j = 0; j < array.length; j++) {
   outputArray.push(Math.abs(avg - array[j])); 
 }
 
 console.log('Tablica wyników to:', outputArray); 

} 

distFromAvarage(paramArray);



// ZAD1
var fruits = ['Winogrono', 'Truskawka', 'Kiwi', 'Banan'];

console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// ZAD2
function createArray(number) {
    if (number <= 0) {
      return new Array();
    }

    var newArray = new Array();

    for (var counter = 0; counter < number; counter++) {
        newArray.push(counter);
    }

    return newArray;
}

console.log("tablica z liczbami do 6 = " + createArray(6));
console.log("tablica z liczbami do 1 = " + createArray(1));
console.log("Test dla liczby ujemnej (powinna być pusta tablica) " + createArray(-6));
console.log("Test dla zera (powinna być pusta tablica) " + createArray(0));

// ZAD3
function printTable(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

printTable(['Winogrono', 'Truskawka', 'Kiwi', 'Banan']);

// ZAD4
function multiply(array)
{
    var temp = 1;
    for(let i = 0; i< array.length ;i++)
    {
            temp *= array[i];
    }

    console.log(temp);
}

multiply([1,2,3,4,5,6,7]);// => 5040
multiply([1,1,1,1]);// => 1
multiply([2,8,3,7]);// => 336

// ZAD5
function getEvenAvarage(array)
{
    var temp = 0;
    var counter = 0;
    array.forEach(element => {
        if(element % 2 == 0)
        {
            temp += element;
            counter++;
        }
    });

    if(temp == 0) 
    {
        console.log(null);
    } else {
        console.log(temp / counter);
    }
}

getEvenAvarage([1,2,3,4,5,6,7]);// => 4
getEvenAvarage([1,1,1,1]);// => null
getEvenAvarage([2,8,3,7,4]);// => 4.666


// ZAD6
function sortArray(array)
{
    console.log(array.sort((a, b) => a - b));
}

sortArray([145,11,3,64,4,6,10])// => [3,4,6,10,11,64,145]


// ZAD7
function addArrays(array1,array2)
{
    var tempArray = [];
    var count = array1.length >= array2.length ? array1.length : array2.length;

    for(let i = 0 ; i < count; i ++)
    {
        if(array1[i] == undefined && array2[i] == undefined)
        {
            break;
        } else {
            if(array1[i] == undefined)
            {
                array1[i] = 0;
            }

            if(array2[i] == undefined)
            {
                array2[i] = 0;
            }

            tempArray.push(array1[i]+array2[i]);
        }
    }

    console.log(tempArray);
}

addArrays([4,0,1,3,4], [1,9,6,7,8,17]);// => [5,9,7,10,12,17]
addArrays([8,3,22], [1,3,2]);// => [9,6,24]