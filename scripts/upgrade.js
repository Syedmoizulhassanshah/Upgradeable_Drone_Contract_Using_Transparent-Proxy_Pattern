// scripts/prepare_upgrade.js
async function main() {
    const proxyAddress = '0x628A98Ec398867b111D02717A78355e3A6B0E56e';
   
    const DroneContractV2 = await ethers.getContractFactory("DroneContractV2");
    console.log("Preparing upgrade...");
    const DroneContractV2Proxy = await upgrades.upgradeProxy(proxyAddress, DroneContractV2);
    console.log("DroneContractV2Proxy deployed to:", DroneContractV2Proxy.address);
  }
   
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });