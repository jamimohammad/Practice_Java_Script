// // *6.14 (Estimate p) p can be computed using the following series:
// // m(i) = 4¢1- 1
// // 3 + 1
// // 5- 1
// // 7 + 1
// // 9- 1
// // 11 + g + (-1)i+1
// // 2i- 1 ≤
// // Write a method that returns m(i) for a given i and write a test program that dis
// // plays the following table:
// // i       m(i)
// // 1      4.0000
// // 101    3.1515
// // 201    3.1466
// // 301    3.1449
// // 401    3.1441
// // 501    3.1436
// // 601    3.1433
// // 701    3.1430
// // 801    3.1428
// // 901    3.1427

function estimatePi(max, add) {
    console.log("i\t    m(i)");
    console.log("-------------");

    for (let n = 1; n <= max; n += add) {
        let sum = 0;

        for (let i = 1; i <= n; i++) {
            sum += Math.pow(-1, i + 1) * (1 / (2 * i - 1));
        }

        let estimate = 4 * sum;
        console.log(n + "\t\t" + estimate.toFixed(4));
    }
}
estimatePi(901, 100)