module.exports = {
  networks: {
    development: {
      host: "192.168.56.1",
      port: 8545,
      network_id: "admin", 
    },
  
  solc: {
      version: "0.8.0",  
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
      evmVersion: "istanbul"
     }
    }
  }
};
