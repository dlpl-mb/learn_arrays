let alter = ""
let name = ""
let namens_liste = ["Maria", "Georg", "Sophie"]
let Alters_liste = ["12", "11", "12"]
basic.forever(function () {
    for (let Index = 0; Index <= 2; Index++) {
        name = namens_liste[Index]
        alter = Alters_liste[Index]
        basic.showString("" + name + " ist " + alter + "Jahre alt")
        basic.pause(5000)
    }
})
