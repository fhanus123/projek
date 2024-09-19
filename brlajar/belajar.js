// console.log("hello world !")
// alert("hati-hati pada orang berbaju hitm ")
// document.write("hello world! <br>")


// let arce = 100

// document.write(arce)

// function confirme() {
//     let yakin = confirm("apakah anda yakin untuk menuju ke sana ?")

//     if (yakin) {
//         window.location.href = "https://open.spotify.com/collection/tracks"
//     }
//     else {
//         alert("oke kita akan tetap di sini ")
//     }
// }

// function login() {
//     let gmail =prompt("silahkan masukan gmail anda ")
//     if (gmail) {
//         if(gmail.includes(".@gmail.com")) {
//             alert("terima kasih telah memasukan gmail anda " + gmail)
//             alert("hello" + gmail )
//         } else {
//             alert("harap masukan gmail anda dengan benar")
//         }
//     } else {
//         alert("anda tidak memasukan apa apa ")
//     }

// }

// let pertanyaan = confirm("apakah kamu manusia")
//         let hasil = pertanyaan ? "selamat datang manusia" : "pergi kamu robot"
//         alert(hasil)

// let uang = prompt("total uang yang anda punya", 0)
// let barang = prompt("berapa barang yang ingin anda beli", 0)
// let kembalian = uang - barang
// if (uang > barang) {
//     alert("pembelian anda sudah berhasil")
// } 
// if (kembalian >= 0) {
//     alert(`total kembalian :${kembalian}`)
// }
// else {
//     alert("pembelian anda di batalkan")
// }
// document.write("terima kasih sudah berbelanja di sini")

let jawab = prompt("selamat kamu sangat beruntung pilihlah kadonya dari no 1 sampe 5")
let hadiah = ""
switch (jawab) {
    case "1":
        hadiah = "tisu"
        break
    case "2":
        hadiah = "mobil"
        break
    case " 3":
        hadiah = "motor"
        break
    case "4":
        hadiah = "rumah"
        break
    case "5":
        hadiah = "uang Rp50.000"
        break
    default:
        document.write("sepertinya anda slaah memilih")
}

if (hadiah === "") {
    alert("kamu gagal mendapatkan hadiah")
} else {
    alert("Selamat kamu mendapatkan " + hadiah )
}


