# Upgradeable_Drone_Contract_Using_Transparent-Proxy_Pattern

##steps

1.npx hardhat run --network rinkeby scripts/deploy.js 

2. npx hardhat run --network rinkeby scripts/upgrade.js

### commands to check and read drone-contract v1

1. const DroneContract = await ethers.getContractFactory("DroneContract")
2. const DroneContractProxy = await DroneContract.attach("0x628A98Ec398867b111D02717A78355e3A6B0E56e")
3. (await DroneContractProxy.retrieve()).toString()

### commands to check,read and increment drone-contract v1 to drone-contract v2

1.  const DroneContractV2 = await ethers.getContractFactory("DroneContractV2")
2.  const DroneContractV2Proxy = await DroneContractV2.attach("0x628A98Ec398867b111D02717A78355e3A6B0E56e")
3.  (await DroneContractV2Proxy.retrieve()).toString()
4.  await DroneContractV2Proxy.increment()
5.  (await DroneContractV2Proxy.retrieve()).toString()




