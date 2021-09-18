input.onButtonPressed(Button.A, function () {
    anzahl_elemente = namens_liste.length
    for (let index = 0; index <= anzahl_elemente - 1; index++) {
        name = namens_liste[index]
        alter = alters_liste[index]
        basic.showString("" + name + " ist " + alter + "Jahre alt")
        basic.pause(5000)
    }
})
let alter = ""
let name = ""
let anzahl_elemente = 0
let alters_liste: string[] = []
let namens_liste: string[] = []
namens_liste = ["Maria", "Georg", "Sophie"]
alters_liste = ["12", "11", "12"]
