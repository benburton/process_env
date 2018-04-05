const myConfigValue = process.env.foo;

const printConfigValue = () => {
    console.log(myConfigValue);
}

module.exports.printConfigValue = printConfigValue;