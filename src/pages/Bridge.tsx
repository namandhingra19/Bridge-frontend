import { useEffect, useState } from "react";
import { getAllBlockChains } from "../services/api";
import BlockChainCard from "../components/Bridge/BlockChainCard";
import { LoaderOverlay } from "../components/common/LoaderOverlay";

export function Bridge() {
  const [blockChains, setBlockChains] = useState<
    {
      name: string;
      chainId: string;
    }[]
  >([]);

  const [loading, setLoading] = useState<boolean>(false);
  function fetchAllBlockChains() {
    setLoading(true);
    getAllBlockChains()
      .then((response: any) => {
        setLoading(false);
        setBlockChains(response);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }
  useEffect(() => {
    fetchAllBlockChains();
  }, []);
  return (
    <>
      {loading && <LoaderOverlay />}
      <div
        className="
        px-4
      "
      >
        <div className="text-3xl font-bold mt-10">
          Select a blockchain to bridge
        </div>
        <div className="flex flex-wrap justify-center">
          {blockChains.map((blockChain: { name: string; chainId: string }) => (
            <BlockChainCard
              name={blockChain.name}
              chainId={blockChain.chainId}
            />
          ))}
        </div>
      </div>
    </>
  );
}
