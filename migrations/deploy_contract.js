const TestToken = artifacts.require('TestToken');

module.exports = function (deployer) {
    const initialSupply = 1000;
    deployer.deploy(TestToken, initialSupply);
};

