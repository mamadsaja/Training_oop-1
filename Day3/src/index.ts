type Core = 2 | 4 | 8 | 12 | "dual core" | "quad core" | "multi core";

interface Iprocessor {
    brand: string;
    basemodel: string;
    clockSize: number;
    coreTotal: Core;
    modelname: string;
}

interface Intel extends Iprocessor{
    turboBoost: boolean; 
}

interface AMD extends Iprocessor{
    precisionBoost: boolean;
}

function createIntel(porsesor: Intel): void {
    console.log(`
            terimakasih ${porsesor.brand}, anda telah berhasil membuat prosesor dengan detil berikut:

            nama base model: ${porsesor.basemodel}
            nama model: ${porsesor.modelname}
            kecepatan Clock: ${porsesor.clockSize}
            kecepatan Core : ${porsesor.coreTotal}
            turboBoost: ${porsesor.turboBoost}
        `
    );
}

function createAMD(prosesor: AMD): void{
        console.log(`
            terimakasih ${prosesor.brand}, anda telah berhasil membuat prosesor dengan detil berikut:

            nama base model: ${prosesor.basemodel}
            nama model: ${prosesor.modelname}
            kecepatan Clock: ${prosesor.clockSize}
            kecepatan Core : ${prosesor.coreTotal}
            turboBoost: ${prosesor.precisionBoost}
        `
    );
}

const intelCoreI9 = {
    brand: "intel",
    basemodel: "core I5",
    clockSize:  12,
    modelname: "I9-137594HK",
    turboBoost: true,
}

const Ryzen9 = {
    brand: "AMD",
    basemodel: "Ryzen 9",
    clockSize:  12,
    modelname: "9700XT",
    Core : "multi core",
    precisionBoost: true,
}

createAMD(Ryzen9);
createIntel(intelCoreI9);








































