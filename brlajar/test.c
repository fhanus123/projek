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


#include<stdio.h>
int main() {
    int x=5;
    int y=10;

    printf("hasil x<y : %d \n",x<y);
    printf("hasil x>y : %d \n",x>y);
    printf("hasil x<=y : %d \n",x<=y);
    printf("hasil x>=y : %d \n",x>=y);
    printf("hasil x==y : %d \n",x==y);
    printf("hasil x!=y : %d \n",x!=y);

    printf("hasil x==x : %d \n",x!=y);
    printf("hasil x!=x : %d \n",x!=x);
    return 0;
}