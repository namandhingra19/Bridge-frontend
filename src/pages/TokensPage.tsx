import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TokenBridgeModal from "../components/Bridge/TokenBridgeModal";
import TokenTable from "../components/Bridge/TokenTable";
import TransactionDetails from "../components/Bridge/TransactionComplete";
import { LoaderOverlay } from "../components/common/LoaderOverlay";
import { Toast1 } from "../components/common/Toast";
import { getAllTokens } from "../services/api";

export function TokensPage() {
  const params = useParams();
  const [tokens, setTokens] = useState<Token[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
  const [transactionResult, setTransactionResult] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<string | null>(null);
  const chainId = params.chainId ?? "";
  useEffect(() => {
    setLoading(true);
    getAllTokens(chainId)
      .then((x: any) => {
        setTokens(x);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        setShowToast(e.response.data.message);
      });
  }, [chainId]);
  return (
    <>
      <div>
        {!transactionResult && (
          <>
            {loading && <LoaderOverlay />}
            <TokenTable
              tokens={tokens}
              onGetQuoteClicked={(token) => {
                setSelectedToken(token);
                setIsOpen(true);
              }}
            />
            {isOpen && (
              <TokenBridgeModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                tokens={tokens}
                selectedToken={selectedToken}
                onTransactionResult={(result) => {
                  setTransactionResult(result);
                }}
              />
            )}
          </>
        )}
        {transactionResult && (
          <TransactionDetails transactionDetails={transactionResult} />
        )}
      </div>
      {showToast !== null && (
        <Toast1 value={showToast} onClose={() => setShowToast(null)} />
      )}
    </>
  );
}
