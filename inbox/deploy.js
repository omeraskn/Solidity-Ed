// deploy code will go here
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } =  require('./compile');

const provider = new HDWalletProvider(
    'eternal purity judge cube behind cluster decorate misery fat achieve square ribbon',       // Metamask mneumonic for testing
    'https://goerli.infura.io/v3/5f9321a802c54e3485271b028ab11421',
    
);
const web3 = new Web3(provider);

const deploy = async() => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);
   
   const result =  await new web3.eth.Contract(JSON.parse(interface))
    .deploy( { data: bytecode , arguments:['Hi there!']})
    .send({ gas : '1000000' , from:accounts[0]});

    console.log('Contract deployed to', result.options.adress);
    provider.engine.stop();
};
deploy();