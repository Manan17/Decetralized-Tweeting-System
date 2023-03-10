const main = async () => {
  const FileSharing = await hre.ethers.getContractFactory("FileSharing");
  const filesharing = await FileSharing.deploy();
  await filesharing.deployed();
  console.log("File Sharing deployed to: ", filesharing.address);
  const ChatApp = await hre.ethers.getContractFactory("ChatApp");
  const chatapp = await ChatApp.deploy();
  await chatapp.deployed();
  console.log("Chat App deployed to: ", chatapp.address);
  const TwitterApp = await hre.ethers.getContractFactory("Twitter");
  const twitterapp = await TwitterApp.deploy();
  await twitterapp.deployed();
  console.log("Twitter App deployed to: ", twitterapp.address);
  const DweetNftApp = await hre.ethers.getContractFactory("DweetNft");
  const dweetnftapp = await DweetNftApp.deploy();
  await dweetnftapp.deployed();
  console.log("Nft app deployed to: ", dweetnftapp.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

runMain();
