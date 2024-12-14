"use strict";
// Interface
// Also study case for custom type data
function createIntel(processor) {
    // output : [object Object]
    //   console.log(`Sucessfully create processor: ${processor}`);
    console.log(`Sucessfully create processor: ${processor.brand} dengan model ${processor.modelName}`);
    console.log(`
    ------------------------------
    Thank you, ${processor.brand} 🙏
    -----------------------------
    You have been sucessfully manufactured new processor dengan
    detail: 👇

    Base Model: ${processor.baseModel}
    Name Model : ${processor.modelName}
    Clock Speed : ${processor.clockSpeed}
    Core Total : ${processor.coreTotal}
    Turbo Boost Compatbile: ${processor.turboBoost}
    `);
}
function createAMD(processor) {
    // output : [object Object]
    //   console.log(`Sucessfully create processor: ${processor}`);
    console.log(`Sucessfully create processor: ${processor.brand} dengan model ${processor.modelName}`);
    console.log(`
    ------------------------------
    Thank you, ${processor.brand} 🙏
    -----------------------------
    You have been sucessfully manufactured new processor dengan
    detail: 👇

    Base Model: ${processor.baseModel}
    Name Model : ${processor.modelName}
    Clock Speed : ${processor.clockSpeed}
    Core Total : ${processor.coreTotal}
    Precision Boost Compatbile: ${processor.precisionBoost ? processor.precisionBoost : false}
    x3D Model : ${processor.x3D ? processor.x3D : false}
    `);
}
const intelCoreI7 = {
    brand: "intel Core i7 ",
    baseModel: "Core i7",
    modelName: "i7-13300K",
    clockSpeed: 4,
    coreTotal: 6,
    turboBoost: true,
};
const amdRyzen5700XD = {
    brand: "AMD Ryzen",
    baseModel: "AMD Ryzen 5",
    modelName: "5700XD",
    clockSpeed: 6,
    coreTotal: 8,
    precisionBoost: true,
    x3D: true,
};
const amdRyzen3500 = {
    brand: "AMD Ryzen",
    baseModel: "AMD Ryzen 5",
    modelName: "3500",
    clockSpeed: 4,
    coreTotal: 4,
    precisionBoost: true,
};
// Argument pada fungsi harus bertipe data yang sama dengan parameter (createProcessor)
createIntel(intelCoreI7);
createAMD(amdRyzen5700XD);
createAMD(amdRyzen3500);
