let distinctiveAmounts = BigInt(0); 

function fact(n) { 
    let res = BigInt(1); 
    
    if (n === 0 || n === 1)
        return BigInt(1); // 0! ve 1! her ikisi de 1'dir
    
    for (let i = 2; i <= n; i++) {
        res *= BigInt(i); // BigInt ile çarpma işlemi
    }
    return res; 
}

const climbStairs = function(n) {
    for (let i = 0; i <= parseInt(n / 2); i++) {
        if (i === 0) {
            distinctiveAmounts = BigInt(0); // İlk başta 0 olarak ayarlanıyor
        }

        // BigInt hesaplamalar
        const num1 = BigInt(parseInt(n / 2) - i) + BigInt(n - (parseInt(n / 2) - i) * 2);
        const num2 = fact(num1);
        const denom1 = BigInt(parseInt(n / 2) - i);
        const denom2 = BigInt(n - (parseInt(n / 2) - i) * 2);
        
        // Faktöriyel bölme işlemi
        const factDenom = fact(denom1) * fact(denom2);
        
        // BigInt hesaplama işlemi
        const combination = num2 / factDenom;

        // Kombinasyonları ekleme
        distinctiveAmounts += combination;
    }

    return parseInt(distinctiveAmounts.toString()); // BigInt sonuçlarını doğru formatta döndürme
};

