# Norai Staking Backend

This repository contains the backend for the Norai staking dApp. It provides APIs to interact with the Ethereum blockchain for staking, unstaking, and claiming rewards.

## Features

- Fetch user's staked balance
- Stake tokens
- Unstake tokens
- Claim rewards

## Folder Structure

```
Norai-staking-backend/
├── abi/                    # Contains the smart contract ABI
├── routes/                 # Defines API routes
├── utils/                  # Contains utility scripts
├── .gitignore              # Ignored files
├── .env.example            # Example environment variables
├── LICENSE                 # Licensing details
├── README.md               # Documentation
├── index.js                # Main server entry point
```

## Environment Variables

Create a `.env` file with the following structure:
```
BLOCKCHAIN_URL=https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID
STAKING_CONTRACT_ADDRESS=

## License

This project is licensed under the MIT License.