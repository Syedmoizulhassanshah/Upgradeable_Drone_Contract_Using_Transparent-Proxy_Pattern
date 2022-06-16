# Upgradeable_Drone_Contract_Using_Transparent-Proxy_Pattern

## Steps:

1. npx hardhat run --network rinkeby scripts/deploy.js 

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

# Upgradeable_Drone_Contract_Using_Transparent-Proxy_Pattern

##steps

1. npx hardhat run --network rinkeby scripts/deploy.js 

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

### Deployed Contract addresses

1. https://rinkeby.etherscan.io/address/0x11da856b22e340baa14e1e7b2bda4f36d2ab4b62#code **(Drone Contract v1)**
2. https://rinkeby.etherscan.io/address/0xcc507858d574bcf766fdf9a26aad247422327038#code **(Proxy Admin)**
3. https://rinkeby.etherscan.io/address/0x916843a8707002a022604b47b02f8eb7c95490ed#readProxyContract **(Proxy-TransparentUpgradeableProxy)**
4. https://rinkeby.etherscan.io/address/0xb8e05798ae0e66a6c4f0d30c2d4c7ef3737b1029#code **(Drone Contract v2)**




