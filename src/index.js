const myConfigValue = process.env.foo;

const aFunctionToDelete = () => {
    console.log(`tear me down! I'm pointless!`);
}

const printConfigValue = () => {
    console.log(myConfigValue);
}

module.exports.printConfigValue = printConfigValue;