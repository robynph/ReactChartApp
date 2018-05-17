/* eslint-disable */
export const USER_REPOSITORY_ABI = [
  {"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isInstantiation","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},
  {"constant":false,"inputs":[{"name":"_owners","type":"address[]"},{"name":"_required","type":"uint256"}],"name":"createWallet","outputs":[{"name":"wallet","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},
  {"constant":true,"inputs":[],"name":"getNumModels","outputs":[{"name":"length","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_userID","type":"uint256"}],"name":"getWallet","outputs":[{"name":"walletAddress","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},
  {"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"instantiations","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNumUsers","outputs":[{"name":"length","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
  {"constant":true,"inputs":[{"name":"_modelID","type":"uint256"}],"name":"getModel","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNumSubscriptions","outputs":[{"name":"length","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
  {"constant":true,"inputs":[{"name":"creator","type":"address"}],"name":"getInstantiationCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
  {"constant":false,"inputs":[{"name":"_walletAddress","type":"address"},{"name":"_modelAddress","type":"address"}],"name":"addModel","outputs":[{"name":"modelID","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},
  {"constant":true,"inputs":[{"name":"_userID","type":"uint256"}],"name":"getUser","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},
  {"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"registered","outputs":[{"name":"isRegistered","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},
  {"constant":false,"inputs":[{"name":"_owner","type":"address[]"}],"name":"addUser","outputs":[{"name":"userId","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},
  {"constant":false,"inputs":[{"name":"_walletAddress","type":"address"},{"name":"_modelAddress","type":"address"},{"name":"_SLA","type":"uint256"},{"name":"_Rate","type":"uint256"}],"name":"addSubscription","outputs":[{"name":"subscriptionID","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},
  {"constant":true,"inputs":[{"name":"_subID","type":"uint256"}],"name":"getSubscription","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},
  {"constant":true,"inputs":[{"name":"","type":"address"}],"name":"regModels","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
  {"constant":false,"inputs":[{"name":"_wallet","type":"address"},{"name":"_model","type":"address"},{"name":"_userID","type":"uint256"},{"name":"_modelID","type":"uint256"},{"name":"_contractSLA","type":"uint256"},{"name":"_contractRate","type":"uint256"}],"name":"subscribed","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"instantiation","type":"address"}],"name":"ContractInstantiation","type":"event"}
];