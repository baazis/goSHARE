const goSHARE = artifacts.require("./src/contracts/goSHARE");

module.exports = function(deployer) {
  deployer.deploy(goSHARE);
};
