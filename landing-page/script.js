// Tipuri de date simple - number, string, boolean, undefined, null
// Tipuri de date structarate/complexe - objects, arrays (tablouri, matrice)
// const animals = ['cat','dog' ,'lion','chicken']; // 0 - cat, 1 - dog, 2 - lion, 3 - chicken
// const animal = 'cat';

// const names = ['Avie', 'Ben', 'Tom'];
// console.log(names[0], names[1], names[2]);
// const firstEmployer = 'Avie';
// const secondEmployer = 'Ben';

// for loop 
// for (initializare; conditie; regula de incrementare) {
//     // codul care vrem sa-l executam la fiecare iteratie
// }

// i++ analog pentru i = i + 1;
// console.log(animals.length); // incepe numerotarea de la 1 
// iteratia 1 pentru i = 0
// iteratia 2 pentru i = 1
// iteratia 3 pentru i = 2
// iteratia 4 pentru i = 3 A
// iteratia 5 se verifica 4 < 4 F
// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i]);
// }

// for (let i = 1; i <= animals.length; i++) {
//     console.log(animals[i]);
// }

// Metoda - functie asociata cu un obiect, string, arrays, number

// addElements() // chemarea functiei
// const text = "exemplu de text";
// const makeUppercase = (text) => {
//     return text;
// }

// makeUppercase(text); // functie
// text.toUpperCase(); // metoda

// console.log('---------------------------------------')
// push() - adaugarea elementelor noi la final de array
// console.log(animals.push('bear'));
// pop() - elimina elementul de la final de array
// console.log(animals.pop());
// unshift() - adaugarea elementelor noi la inceput de array
// console.log(animals.unshift('panther'));
// shift() - elimina elementul de la inceput de array
// console.log(animals.shift());

// indexOf() - returneaza indexul elementului specificat
// const index = animals.indexOf('panther'); // -1 
// console.log(index);

// includes() - pentru a verifica daca elementul este prezent in array
// console.log(animals.includes('panther')); // false

// const numbers = [10, 20, 30, 40, 50];
// 10, 30, 50
// i += 2 analog i = i + 2;
// for (let i = 0; i < numbers.length; i += 2) {
//     console.log('.............')
//     console.log(i, numbers[i]);
// }

// numbers.length // 5
// i = 4, i = 3, i = 2, i = 1, i = 0
// i = 5, i = 4, i = 3, i = 2, i = 1
// for (let i = numbers.length; i > 0; i--) {
//     console.log('/////////////')
//     console.log(i, numbers[i]);
// }

// Declarați un array numit `numbers` cu următoarele elemente: 1, 2, 3, 4, 5.
//    - Utilizați o buclă `for` pentru a calcula suma tuturor elementelor din array.
//    - Afișați suma în consolă.

// const numbers2 = [1, 2, 3, 4, 5];
// 1 + 2 + 3 + 4 + 5 = 15
// suma = 0;
// Iteratia 1: suma = suma + 1; 1
// iteratia 2: suma = suma + 2;
// ...
// iteratia 5: suma = suma + 5;
// let suma = 0;

// for (let i = 0; i < numbers2.length; i++) {
//     suma += numbers2[i];
    // console.log(`Suma pentru iteratia ${i} este ${suma}`);
// }

// console.log('Suma elementelor este: '+ suma);

// Declarați un array numit `names` cu următoarele elemente: "John", "Jane", "Mike", "Anna".
//    - Utilizați o buclă `for` pentru a crea un nou array care conține lungimea fiecărui nume din array-ul `names`.
//    - Afișați noul array rezultat în consolă.
// const names2 = ["John", "Janee", "Mikkkkke", "Annnnnna"];
// const lengths = [4, 5, 8, 8];
// const lengths = []; // array gol

// for (let i = 0; i < names2.length; i++) {
//     lengths.push(names2[i].length);
//     console.log(lengths);
// }

// console.log('...........')
// console.log(lengths);

// LECTIA 5 JS
// Initializam 20 de elemente, si le punem cu valoarea 0 
const years = new Array(20).fill(0);
console.log(years.fill(5, 3));

const person = {
    'first name': 'John',
    age: 40, 
    location: 'New York',
    children: ['Ana', 'Tom']
}
console.log(Object.keys(person)); // ['first name', 'age', 'location', 'children']
console.log(person.location);
console.log('Children: ', person['location']);

const person2 = new Object();
person2.name = 'John';
person2.age = 40;
console.log(person2);

const results = [
        {
            "category": "E",
            "qid": 1,
            "number": 1,
            "ticket": 1,
            "subject": "1.1",
            "question": "Под термином «состав транспортных средств» понимается:",
            "answers": "[\n    \"Состав, сформированный из грузового автомобиля и неисправного легкового автомобиля, который движется по общественной дороге как одно целое.\",\n    \"Состав, сформированный из механического транспортного средства, являющегося тягачом и прицепа или полуприцепа, который движется по общественной дороге как одно целое.\",\n    \"Состав, сформированный из механического транспортного средства, являющегося тягачом и буксируемого механического транспортного средства, который движется по общественной дороге как одно целое.\"\n]",
            "shuffle": 2,
            "hint": "Состав транспортных средств - состав, сформированный из механического транспортного средства, являющегося тягачом и прицепа или полуприцепа, который движется по общественной дороге как одно целое. П. 7, абзац 5.",
            "has_img": false,
            "md5sum": "6512bd41d9caa6e02c990b0a82652dca"
        },
        {
            "category": "E",
            "qid": 2,
            "number": 2,
            "ticket": 1,
            "subject": "1.1",
            "question": "Под термином «прицеп» понимается:",
            "answers": "[\n    \"Несамоходная механическая система, предназначенная для перевозки людей и/или грузов.\",\n    \"Несамоходная механическая система, оснащённая механизмами, которые могут производить определённые работы.\",\n    \"Транспортное средство, предназначенное для его буксировки механическим транспортным средством.\"\n]",
            "shuffle": 2,
            "hint": "Прицеп - транспортное средство, предназначенное для его буксировки механическим транспортным средством. П. 7, абзац 41.",
            "has_img": false,
            "md5sum": "b6d767d2f2ed5d21a44b0e5886680cb9"
        },
        {
            "category": "E",
            "qid": 3,
            "number": 3,
            "ticket": 1,
            "subject": "1.1",
            "question": "Под термином «полуприцеп» понимается:",
            "answers": "[\n    \"Прицеп, разрешённая максимальная масса которого не превышает 750 кг.\",\n    \"Прицеп, часть массы которого приходится на механическое транспортное средство, являющееся тягачом.\",\n    \"Одноосный прицеп, который соединяется с механическим транспортным средством, являющимся тягачом, посредством буксирного устройства.\"\n]",
            "shuffle": 2,
            "hint": "Полуприцеп - прицеп, часть массы которого приходится на механическое транспортное средство, являющееся тягачом и которое соединяется с ним посредством опорно-сцепного устройства. П. 7, абзац 43.",
            "has_img": false,
            "md5sum": "c16a5320fa415530d9583c34fd356ef5"
        },
        {
            "category": "E",
            "qid": 4,
            "number": 4,
            "ticket": 1,
            "subject": "2.1-2.2 A",
            "question": "Этот дорожный знак запрещает движение:",
            "answers": "[\n    \"Только составов транспортных средств, длина которых превышает 20 м.\",\n    \"Только составов транспортных средств, длина которых превышает 24 м.\",\n    \"Грузовых автомобилей и самоходных машин с прицепами любого типа, а также буксировку механических транспортных средств.\",\n    \"Всех транспортных средств с прицепами любого типа, а также буксировку неисправных механических транспортных средств посредством жёсткой сцепки.\"\n]",
            "shuffle": 3,
            "hint": "Знак 3.7 «Движение составов транспортных средств запрещено» запрещает движение грузовых автомобилей и самоходных машин с прицепами любого типа, а также буксировку механических транспортных средств. Пояснительная записка к приложению № 3 (III. ЗАПРЕЩАЮЩИЕ И ОГРАНИЧИВАЮЩИЕ ЗНАКИ, 3.7).",
            "has_img": true,
            "md5sum": "a1d0c6e83f027227d8461063f4ac58a6"
        },
        {
            "category": "E",
            "qid": 5,
            "number": 5,
            "ticket": 1,
            "subject": "2.1-2.2 A",
            "question": "Изображённый на рисунке знак определяет разрешённые направления движения для грузовых автомобилей и составов транспортных средств:",
            "answers": "[\n    \"Только принадлежащих авторизованным экономическим операторам (АЕО).\",\n    \"Только перевозящих грузы, сопровождаемые предварительной декларацией в электронном виде (TIR-EPD).\",\n    \"Только перевозящих грузы, сопровождаемые книжкой МДП или у которых она отсутствует.\",\n    \"Перечисленных в предыдущих пунктах.\"\n]",
            "shuffle": 2,
            "hint": "Знак «Направления движения по полосам» определяет разрешённые направления движения для грузовых автомобилей и составов транспортных средств, которые принадлежат авторизованным экономическим операторам (АЕО) или перевозят грузы, сопровождаемые предварительной декларацией в электронном виде (TIR-EPD), соответственно грузы, сопровождаемые книжкой МДП или у которых она отсутствует. Пояснительная записка к приложению № 3 (V. ИНФОРМАЦИОННО-УКАЗАТЕЛЬНЫЕ ЗНАКИ, a) Информационные, 5.37.4).",
            "has_img": true,
            "md5sum": "d82c8d1619ad8173d665453cfb2e55f0"
        },
        {
            "category": "E",
            "qid": 6,
            "number": 6,
            "ticket": 1,
            "subject": "2.1-2.2 A",
            "question": "По каким причинам водителю состава транспортных средств, габаритная длина которого (с грузом или без груза) больше обозначенной на знаке, указывается направление движения по маршруту, обозначенному на схеме объезда?",
            "answers": ["Так как в прямом направлении дорога проходит по мосту, несущая способность которого не позволяет проехать транспортным средствам длиной более 10 м.","Так как в прямом направлении дорога проходит под мостом, где из-за сужения проез-жей части невозможен встречный разъезд транспортных средств длиной более 10 м.", "Так как в прямом направлении есть участок дороги с узкой проезжей частью и крутыми поворотами, где движение и/или встречный разъезд транспортных средств длиной более 10 м затруднены."],
            "shuffle": 2,
            "hint": "Чтобы не создавать помех при движении в прямом направлении, что может привести к заторам на дороге, перед участками с узкой проезжей частью, крутыми поворотами, тесной застройкой и т. п., устанавливается знак 5.59.1 «Схема объезда» с изображённым на его фоне знаком 3.18 «Ограничение длины». Водителям транспортных средств (составов транспортных средств), длина которых (с грузом или без груза) больше обозначенной на знаке 3.18, указано направление объезда по маршруту, изображённому на схеме. Пояснительная записка к приложению № 3 (III. ЗАПРЕЩАЮЩИЕ И ОГРАНИЧИВАЮЩИЕ ЗНАКИ, 3.18, V. ИНФОРМАЦИОННО-УКАЗАТЕЛЬНЫЕ ЗНАКИ, b) Указательные, 5.59.1).",
            "has_img": true,
            "md5sum": "44f683a84163b35232fe57c2e008bc8c"
        }
    ]

    console.log(Object.keys(results[5]).length + 10); // 21
    console.log("Answer 2", results[5].answers[1]);

//   4. Problema: Numărarea caracterelor
//    Se dă un șir de caractere și un caracter specificat. 
// Să se numere câte apariții ale caracterului se găsesc în șir.
// Hint: incercati console.log(text[index]), in care text = “Hello” si index e orice numar de la 0 la 5. 
// Se va afisa elementul in pozitia index din stringul text

//    Exemplu:
//    - Intrare: `'Hello World'`, caracter căutat: `'o'`
//    - Ieșire: `2`

const paragraph = 'Hello World'; // ['H', 'e', llo World']
console.log(paragraph.length); //11

const numaraAparitii = (text, character) => {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === character){
            count++;
        }
    }

    return count;
}

const resultForO = numaraAparitii(paragraph, 'o'); // 2
const resultForL = numaraAparitii(paragraph, 'l'); 
console.log(resultForO, resultForL);
// While loop
// while (conditia) {
//     // codul care va fi executat
//     //conditia de incrementare
// }

const numaraAparitii2 = (text, character) => {
    let count = 0;
    let i = 0;
    while (i < text.length) {
        if (text[i] === character){
            count++;
        }
        i++;
    }

    return count;
}

const number = [1, 2, 3, 4, 5];

const sliceArray = (startIndex, endIndex) => {
    // const startIndex = 1;
    // const endIndex = number.length;
    const slicedArray = [];

    for (let i = startIndex; i < endIndex; i++) {
        slicedArray.push(number[i]);
    }

    return slicedArray;
}

console.log(sliceArray(2, 4));
console.log(number.slice(2, 4));