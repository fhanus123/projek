function tocelcius(fahrenhait) {
    return (5 / 9) * (fahrenhait - 32)
}
let text = "temperatur sekarang berada di " + tocelcius(77) + " celcius"

document.getElementById("demo").innerHTML = text