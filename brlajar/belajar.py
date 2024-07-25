# x = 6
# if x > 5 :
#     print("x lebih kecil dari 5")
# else :
#     print("x lebih besar dari 5")


# print("hello world")

# for i in range(9):
#     print(i)

# count = 0
# while count < 100:
#     print(count)
#     count += 10


# def greet(name):
#     print (f"hello, {name}!")    

# greet ("waria")

# fruit = ["appel", "manga", "pisang"]
# print(fruit[2])

# person = {"nama":"julian","age":25}
# print(person["nama"])

# perojek pertama


# Meminta input angka pertama dari pengguna
num1 = float(input("Masukkan angka pertama: "))

# Meminta input angka kedua dari pengguna
num2 = float(input("Masukkan angka kedua: "))

# Meminta input angka ketiga dari pengguna
num3 = float(input("Masukkan angka ketiga: "))

# Meminta input operasi dari pengguna (misal "+ *" atau "* +")
operation = input("Masukkan operasi (+, -, *, /) dipisahkan dengan spasi: ")

# Menampilkan input yang diterima (opsional, untuk verifikasi)
print(f"Angka pertama: {num1}, Angka kedua: {num2}, Angka ketiga: {num3}, Operasi: {operation}")

# Memproses string operasi
operations = operation.split()  # Memecah operasi berdasarkan spasi
result = num1  # Mulai dengan angka pertama

# Mengaplikasikan operasi satu per satu
for op in operations:
    if op == "+":
        result += num2 if result == num1 else num3
    elif op == "-":
        result -= num2 if result == num1 else num3
    elif op == "*":
        result *= num2 if result == num1 else num3
    elif op == "/":
        if result == num1 and num2 != 0:
            result /= num2
        elif result != num1 and num3 != 0:
            result /= num3
        else:
            result = "Error: Pembagian dengan nol tidak diperbolehkan."
            break
    else:
        result = "Error: Operasi tidak valid."
        break

# Menampilkan hasil
print(f"Hasil: {result}")
