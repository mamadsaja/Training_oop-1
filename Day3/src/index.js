function createIntel(porsesor) {
    console.log("\n            terimakasih ".concat(porsesor.brand, ", anda telah berhasil membuat prosesor dengan detil berikut:\n\n            nama base model: ").concat(porsesor.basemodel, "\n            nama model: ").concat(porsesor.modelname, "\n            kecepatan Clock: ").concat(porsesor.clockSize, "\n            turboBoost: ").concat(porsesor.turboBoost, "\n        "));
}
function createAMD(prosesor) {
    console.log("\n            terimakasih ".concat(prosesor.brand, ", anda telah berhasil membuat prosesor dengan detil berikut:\n\n            nama base model: ").concat(prosesor.basemodel, "\n            nama model: ").concat(prosesor.modelname, "\n            kecepatan Clock: ").concat(prosesor.clockSize, "\n            turboBoost: ").concat(prosesor.precisionBoost, "\n        "));
}
var intelCoreI9 = {
    brand: "intel",
    basemodel: "core I5",
    clockSize: 12,
    modelname: "I9-137594HK",
    turboBoost: true,
};
var Ryzen9 = {
    brand: "AMD",
    basemodel: "Ryzen 9",
    clockSize: 12,
    modelname: "9700XT",
    precisionBoost: true,
};
createAMD(Ryzen9);
