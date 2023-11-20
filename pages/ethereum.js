import { ethers } from "ethers";

const local = new ethers.providers.JsonRpcProvider("http://localhost:8545");

export const getprovider = () =>
{
    return local;
}

export const getsigner = async (index = 0) =>
{
    const provider = getprovider();
    const signer = provider.getSigner(index);
    return signer;
}

export const getcontract  = async (abi,address,signerindex) =>
{
    const signer = await getsigner(signerindex);
    const contract = new ethers.Contract(address,abi,signer);
    return contract;
}