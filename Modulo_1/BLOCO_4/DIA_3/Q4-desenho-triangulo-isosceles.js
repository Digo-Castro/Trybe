let item = "*", vazio = " ", k, i, n = 10;
k = n;
if (n % 2 != 0) {
    for (i = 1; i <= n; i += 2) {
        console.log(vazio.repeat(k - (k / 2)) + item.repeat(i));
        k -= 2;
    }
}
else {
    for (i = 2; i <= n; i += 2) {
        console.log(vazio.repeat(k - (k / 2) - 1) + item.repeat(i));
        k -= 2;
    }
}