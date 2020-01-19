/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//stworzenie funkcji "jeden"
function jeden() {

    //stworzenie zmiennej 'zmienna1' 
    var zmienna1 = 1;

    //stworzenie funkcji o nazwie 'dwa'
    function dwa() {

        //Wypisanie zawartości zmiennej 'zmienna1' w konsoli
        console.log(zmienna1);

        //stworzenie zmiennej 'zmienna2' z wartoscią 2
        var zmienna2 = 3;
    }

    //wywolanie funkcji 'dwa'
    dwa();

    //wypisanie wartości zmiennej 'zmienna2' w konsoli
    //funkcja 'jeden' probując wypisać wartość niewidocznej dla niej zmiennej zwraca błąd
    console.log(zmienna2)
}

//wywołanie funkcji 'jeden'
jeden()

