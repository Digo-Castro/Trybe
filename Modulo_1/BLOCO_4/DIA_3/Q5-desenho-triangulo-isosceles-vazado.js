let item = "*", vazio = " ", k, i, n = 11;
k = n;
console.log(vazio.repeat(k - (k / 2)) + item);
for (i = 1; i < (n - 2); i += 2) {
    console.log(vazio.repeat(k - (k / 2) -1) + item + vazio.repeat(i) + item);
    k -= 2;
}
console.log(item.repeat(n));