import Web3 from 'web3';
import Web3Utils from 'web3-utils';
import { USER_REPOSITORY_ABI } from './abi/userRepository';
import { CLASSIFICATION_ABI } from './abi/classification';

const WEB3_PROVIDER_URL = __WEB3_PROVIDER_URL__;
const USER_CONTRACT_ADDRESS = __USER_CONTRACT_ADDRESS__;
const CLASS_CONTRACT_ADDRESS = __CLASS_CONTRACT_ADDRESS__;
let web3Context;
let userRepo;
let classify;
console.log(Web3Utils);

function initWeb3() {
  if (typeof web3 !== 'undefined') {
    web3Context = new Web3(web3.currentProvider);
  } else {
    web3Context = new Web3(new Web3.providers.HttpProvider(WEB3_PROVIDER_URL));
  }
  web3Context.eth.defaultAccount = web3Context.eth.accounts[0];

  const userRepoContract = web3Context.eth.contract(USER_REPOSITORY_ABI);
  userRepo = userRepoContract.at(USER_CONTRACT_ADDRESS);
  const classifyContract = web3Context.eth.contract(CLASSIFICATION_ABI);
  classify = classifyContract.at(CLASS_CONTRACT_ADDRESS);
}

export function postSignup(username, email, password) {
  if (!userRepo || !classify) {
    initWeb3();
  }
  return new Promise((resolve, reject) => {
    userRepo.registered(web3Context.eth.defaultAccount, (error, token) => {
      if (!error) {
        userRepo.addUser([web3Context.eth.defaultAccount], Web3Utils.asciiToHex(username),Web3Utils.asciiToHex(email), (error, walletId) => {
          if (!error) {
            resolve({ token, walletId });
          } else {
            reject(error);
          }
        });
      } else {
        reject(error);
      }
    });
  });
}

export function postLogin(username, password) {
  if (!userRepo || !classify) {
    initWeb3();
  }
  return new Promise((resolve, reject) => {
    // TODO: Smart contract function needed to get user id, then get Wallet
    // Currently, walletId is always 0 on login
    userRepo.getWallet(web3Context.eth.defaultAccount, (error, walletId) => {
      if (!error) {
        resolve({ token: web3Context.eth.defaultAccount, walletId });
      } else {
        reject(error);
      }
    });
  });
}

export function purchaseClassification(fileName) {
  if (!userRepo || !classify) {
    initWeb3();
  }
  return new Promise((resolve, reject) => {
    classify.Predict(fileName, (error, result) => {
      if (!error) {
        resolve(result);
        // TODO: Purchase confirm event doesn't seem to work, integrate later
      } else {
        reject(error);
      }
    });
  });
}

export function confirmClassification() {
  // TODO: call smart contract function to confirm classification
  return Promise.resolve(null);
}

export function getModelsz() {
  if (!userRepo || !classify) {
    initWeb3();
  }
  return Promise.resolve([
    { name: 'Model 1' },
    { name: 'Model 2' },
    { name: 'Model 3' },
    { name: 'Model 4' }
  ]);
}

export function getModels() {
  if (!userRepo || !classify) {
    initWeb3();
  }
  return new Promise((resolve, reject) => {
    // TODO: Smart contract function needed to get user id, then get Wallet
    // Currently, walletId is always 0 on login
    userRepo.getModels(web3Context.eth.defaultAccount, (error, modelId) => {
      if (!error) {
        resolve([{ name:  modelId }]);
      } else {
        reject(error);
      }
    });
  });
}
