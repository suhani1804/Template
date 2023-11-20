# Project Boilerplate

This project is a boilerplate for building blockchain applications using Next.js, ethers, and Hardhat.

## Getting Started

To get started with this project, follow these steps:

1. Create a new Next.js app using the following command:
    ```
    npm create-next-app boilerplate
    ```

2. Change into the project directory:
    ```
    cd boilerplate
    ```

3. Install the required dependencies:
    ```
    npm install ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers
    ```

4. Run the Hardhat development environment:
    ```
    npx hardhat
    ```
    For future use you can run the development environment using the following command:
    ```
    npx hardhat
    ```

5. Run a local node 
    ```
    npx hardhat node
    ```
6. Deploy the contract to the local node
    ```
    npx hardhat run scripts/deploy.js --network localhost
    ```
## Usage

Once the development environment is running, you can start building your blockchain application using the provided tools and libraries.

