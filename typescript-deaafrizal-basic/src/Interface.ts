// Interface
// Also study case for custom type data

// type Core = 2 | 4 | 6 | 8 | 12 | 16;
type CoreNumber = 2 | 4 | 6 | 8 | 10 | 12;
type CoreName = "Dual Core" | "Quad Core" | "Octa Core" | "16 Core";

// type Core can be consist as CoreNumber OR CoreName
type Core = CoreNumber | CoreName;

// type AlternativeCore must be consist as CoreNumber AND CoreName
type AlternativeCore = CoreNumber & CoreName;
interface Processor {
  brand: string;
  baseModel: string;
  modelName: string;
  clockSpeed: number;
  // coreTotal: 2 | 4 | 6 | 8 | 12 | 16;

  // use custom type data as value of property
  coreTotal: Core;
}

// Interface can be rewritten to create new property such like this:
// interface Processor {
//   turboBoost: boolean;
// }

// Or

interface Intel extends Processor {
  turboBoost: boolean;
}

interface AMD extends Processor {
  precisionBoost: boolean;
  // The question mark means that this property is optional to have
  x3D?: boolean;
}

function createIntel(processor: Intel): void {
  // output : [object Object]
  //   console.log(`Sucessfully create processor: ${processor}`);
  console.log(
    `Sucessfully create processor: ${processor.brand} dengan model ${processor.modelName}`
  );
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
function createAMD(processor: AMD): void {
  // output : [object Object]
  //   console.log(`Sucessfully create processor: ${processor}`);
  console.log(
    `Sucessfully create processor: ${processor.brand} dengan model ${processor.modelName}`
  );
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
    Precision Boost Compatbile: ${
      processor.precisionBoost ? processor.precisionBoost : false
    }
    x3D Model : ${processor.x3D ? processor.x3D : false}
    `);
}

const intelCoreI7: Intel = {
  brand: "intel Core i7 ",
  baseModel: "Core i7",
  modelName: "i7-13300K",
  clockSpeed: 4,
  coreTotal: 6,
  turboBoost: true,
};

const amdRyzen5700XD: AMD = {
  brand: "AMD Ryzen",
  baseModel: "AMD Ryzen 5",
  modelName: "5700XD",
  clockSpeed: 6,
  coreTotal: 8,
  precisionBoost: true,
  x3D: true,
};
const amdRyzen3500: AMD = {
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
