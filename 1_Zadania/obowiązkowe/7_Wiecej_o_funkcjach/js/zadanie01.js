
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//stworzenie funkcji 'sortArray'
function sortArray() {

    //Deklaracja tablicy
    var points = [41, 3, 6, 1, 114, 54, 64];

    //wywołanie funkcji sort
    points.sort(function (a, b) {
        //zwracamy posortowane wartosci tablicy zamieniając 
        //odpowiednio kolejnoscią by tablica 'points' była posortowana
        return a - b;
    });

    //zwraca oisortowana tablice
    return points;
}

//wywołanie funkcji 'sortArray'
sortArray();