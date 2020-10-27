let item = "*", vazio = " ", i, k = 1, n = 5;
for (i = n; i > 0; i -= 1) {
    console.log (vazio.repeat(i) + item.repeat(k));
    k++;
}