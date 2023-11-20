import { useState, useEffect } from "react";
import { getcontract } from "./ethereum";
import Count from "../contracts/Count.sol";

export default function Home() {
  const [count, setCount] = useState(0);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    async function initContract() {
      const contract = getcontract("0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512", Count.abi, 0);
      setContract(contract);
      const initialCount = await contract.getCounter();
      setCount(initialCount.toNumber());
    }
    initContract();
  }, []);

  async function increment() {
    if (!contract) return;
    const tx = await contract.increase();
    await tx.wait();
    const updatedCount = await contract.getCounter();
    setCount(updatedCount.toNumber());
  }
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Counter: {count}</h1>
        <button onClick={increment}>Increment</button>
      </div>
    </>
  );
}
