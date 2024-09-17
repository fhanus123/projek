// #include<stdio.h>
// int main() {
//     int true = 1;
//     int false = 0;
//     printf(" ini adalah nilai true dan true : %d \n", true && true);
//     printf(" ini adalah nilai tre dan false : %d \n", true || false);
//     printf(" ini adalah nilai false dan true : %d \n", false && true);
//     printf(" ini adalah nilai false dan false : %d \n", false || false);
//     printf(" ini adalah nilai not true : %d \n", !true);
//     printf(" ini adalah nilai not false : %d \n", !false);
//     printf("-----------\n");
//     printf("OR T F \n");
//     printf("T %d %d \n", true || true, true || false);
//     printf("T %d %d \n",false || true, false || false);
//     printf("-----------\n");

//     printf("-----------\n");
//     printf("AND %d %d \n",true && true,false || false);
//     printf("%d %d %d \n",true || false,true || false,false && false);
//     printf("%d %d %d \n",false || false, false && true,false && true);
//     printf("-----------\n");

// }   


// #include<stdio.h>
// int main() {
//     int x=5;
//     int y=10;

//     printf("hasil x<y : %d \n",x<y);
//     printf("hasil x>y : %d \n",x>y);
//     printf("hasil x<=y : %d \n",x<=y);
//     printf("hasil x>=y : %d \n",x>=y);
//     printf("hasil x==y : %d \n",x==y);
//     printf("hasil x!=y : %d \n",x!=y);

//     printf("hasil x==x : %d \n",x==x);
//     printf("hasil x!=x : %d \n",x!=x);
//     return 0;
// }

// #include<stdio.h>
// int main() {
//     int uang = 6000;
//     int hujan = 0 ;
//     printf("uang>5000 dan tidak hujan : %d \n",(uang>5000) && (!hujan));

//     uang = 6000;
//     hujan = 1 ;
//     printf("uang>5000 dan tidak hujan : %d \n",(uang>5000) && (!hujan));

//     uang = 500;
//     int barang = 7000;
//     printf("saya ingin membeli barang : %d \n ",(uang>barang) && (barang<uang));

//     int polusi = 200 ;
//     hujan = 1 ;
//     printf("bila polusi sudah terlalu tinggi maka keinginan turunya hujan : %d \n",(polusi<hujan) && (!hujan));
//     return 0 ;
// }

// #include<stdio.h>
// int main () {
//     int i;
//     i =3 ;
//     printf(" Nilai i : %d %d \n", i++);
//     i = 3 ;
//     printf("%d\n", ++i);
    
//     return 0 ;
// }

#include<stdio.h>
    int main() {
    int a ;
    printf("contoh if di suatu kasus \n");
    printf("ketikan nilai integer : ");
    scanf("%d",&a);
    if (a > 10)
    {
        printf("nilai a positif %d \n",a);
    }
    else
    {
        printf("Nilai a negatif %d \n",a);
    }
    }