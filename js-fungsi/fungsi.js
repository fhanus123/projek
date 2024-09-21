let databarang = [
    "bukutulis",
    "pensil",
    "spidol"
]

function showBarang() {
    let listbarang = document.getElementById("list-barang")
    listbarang.innerHTML = ""

    for (let i = 0; i < databarang.length; i++) {
        var btnEdit = "<a href='#' onclick='editbarang(" + i + ")'>edit</a>"
        var btnHapus = "<a href='#' onclick='deletebarang(" + i + ")'>hapus</a>"

        listbarang.innerHTML += "<li>" + databarang[i] + "[" + btnEdit + " | " + btnHapus + "] </li>"
    }
}

function addBarang() {
    var input = document.querySelector("input[name=barang]")
    databarang.push(input.valeu)
    showBarang()
}

function editBarang(id) {
    var newBarang = prompt("nama baru", databarang[i])
    databarang[i] = newBarang
    showBarang()
}

function deletebarang(id) {
    databarang.splice(id, 1)
    showBarang()
}

showBarang()

