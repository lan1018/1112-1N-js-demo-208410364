// let height = Number(prompt("請輸入你的身高，以公分計算")) / 100;
// let weight = Number(prompt("請輸入你的體重，以公斤計算"));
// const bmi_data_64 = [];

function bmiCalc_64(height, weight) {
    return  weight / (height * height);
}

function bmiCalcResult_64(height, weight) {
    let bmi = bmiCalc_64(height, weight).toFixed(2);
    console.log(`For (h/w) = (${height}/${weight}), the BMI = ${bmi}`);
}

// bmiCalcResult_64(1.75, 55);
// bmiCalcResult_64(1.75, 70);
// bmiCalcResult_64(1.75, 85);

function bmi_normal_low(height) {
    return 18.5 * height * height;
}

function bmi_normal_high(height) {
    return 24 * height * height;
}

function bmiCalcSuggest_64(height, weight) {
    let bmi = bmiCalc_64(height, weight).toFixed(2);
    if (bmi < 18.5) {
        let normal_low = bmi_normal_low(height);
        console.log(`For (h/w) = (${height}/${weight}), the BMI = ${bmi} which is ${(normal_low - weight).toFixed(2)} kg lower than normal.`);
    } else if (bmi <= 24) {
        console.log(`For (h/w) = (${height}/${weight}), the BMI = ${bmi} which is normal.`);
    } else {
        let normal_high = bmi_normal_high(height);
        console.log(`For (h/w) = (${height}/${weight}), the BMI = ${bmi} which is ${(normal_high - weight).toFixed(2)} kg higher than normal.`)
    }
}

// bmiCalcSuggest_64(1.75, 55);
// bmiCalcSuggest_64(1.75, 70);
// bmiCalcSuggest_64(1.75, 85);

const bmi_data_64 = [
    {height: 1.75, weight: 55},
    {height: 1.75, weight: 70},
    {height: 1.75, weight: 85}
];

bmi_data_64.forEach((item) => {
    bmiCalcSuggest_64(item.height, item.weight);
});

let lowCount = 0;
let normalCount = 0;
let higherCount = 0;

const bmi_data2_64 = [
    {height: 1.75, weight: 55},
    {height: 1.75, weight: 70},
    {height: 1.75, weight: 85},
    {height: 1.75, weight: 50},
    {height: 1.75, weight: 75},
    {height: 1.75, weight: 90},
    {height: 1.75, weight: 80},
    {height: 1.75, weight: 65},
    {height: 1.75, weight: 73},
    {height: 1.75, weight: 72}
];

bmi_data2_64.forEach((item) => {
    const bmi = bmiCalc_64(item.height, item.weight);
    if( bmi < 18.5) {
        lowCount++;
    } else if( bmi <= 24) {
        normalCount++;
    }else {
        higherCount++;
    }
});

console.log(`
bmi summary:
    lower: ${lowCount}
    normal: ${normalCount}
    higher: ${higherCount}
`)