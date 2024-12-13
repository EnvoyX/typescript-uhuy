// Interface
// Also study case for custom type data
interface Processor {
  brand: string;
  baseModel: string;
  modelName: string;
  clockSpeed: number;
}

// Interface can be rewritten to create new property such like this:
interface Processor {
  turboBoost: boolean;
}

function create(processor: Processor): void {
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
    Turbo Boost Compatbile: ${processor.turboBoost}
    `);
}

const intelCoreI7 = {
  brand: 'intel Core i7 ',
  baseModel: 'Core i7',
  modelName: 'i7-13300K',
  clockSpeed: 4,
  turboBoost: true,
};

// Argument pada fungsi harus bertipe data yang sama dengan parameter (createProcessor)
create(intelCoreI7);
