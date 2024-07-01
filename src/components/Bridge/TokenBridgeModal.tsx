import React, { useState } from "react";
import CustomDropdown from "../common/CustomDropdown";
import { createTransaction, sendQouteData } from "../../services/api";
import { IconArrowRight, IconSwitchHorizontal } from "@tabler/icons-react";
import { Toast1 } from "../common/Toast";
import { Loader } from "../common/Loader";
import { LoaderOverlay } from "../common/LoaderOverlay";
interface TokenBridgeModalProps {
  isOpen: boolean;
  onClose: () => void;
  tokens: Token[];
  selectedToken: Token | null;
  onTransactionResult: (result: any) => void;
}
const TokenBridgeModal = (props: TokenBridgeModalProps) => {
  const [destinationToken, setDestinationToken] = useState<Token | null>(null);
  const [values, setValues] = useState<any | null>(null);
  const [showToast, setShowToast] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    setShowToast(null);
    if (!destinationToken || !amount) {
      setShowToast("Please select destination token and amount");
      return;
    } else {
      setLoading(true);
      sendQouteData({
        srcChainId: props.selectedToken?.chainId ?? "",
        fromTokenAddress: props.selectedToken?.address ?? "",
        amount,
        destChainId: destinationToken?.chainId ?? "",
        toTokenAddress: destinationToken?.address ?? "",
      })
        .then((x) => {
          setLoading(false);
          console.log(x);
          setValues(x);
        })
        .catch((e) => {
          setLoading(false);
          console.log(e);
          setShowToast(e.response.data.message);
        });
    }
  };

  const handleBridgeSubmit = () => {
    setLoading(true);
    createTransaction({
      qoute: values,
    })
      .then((x) => {
        setLoading(false);
        console.log(x);
        props.onTransactionResult(x);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
        setShowToast(e.response.data.message);
      });
  };

  if (!props.isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-30">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4">
          {loading && <LoaderOverlay />}
          <div className="flex justify-between items-center border-b pb-3">
            <h3 className="text-lg font-semibold">Bridge Tokens</h3>
            <button
              className="text-gray-600 hover:text-gray-900"
              onClick={props.onClose}
            >
              ×
            </button>
          </div>
          {values && (
            <div className="px-5">
              <div className="flex items-center justify-between">
                <div className="">
                  <div className="text-sm font-semibold mb-5">Source</div>
                  <div className="flex items-center ">
                    <img
                      src={props.selectedToken?.logoURI}
                      alt="Logo"
                      className="h-10 w-10 mr-2"
                    />
                    <p className="text-sm">{props.selectedToken?.name}</p>
                  </div>
                </div>
                <div className="items-center">
                  <IconArrowRight size={40} />
                </div>
                <div className="">
                  <div className="text-sm font-semibold mb-5">Destination</div>
                  <div className="flex items-center ">
                    <img
                      src={destinationToken?.logoURI}
                      alt="Logo"
                      className="h-10 w-10 mr-2"
                    />
                    <p className="text-sm">{destinationToken?.name}</p>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <div className="flex justify-between">
                  <p className="font-semibold ">Estimated Gas:</p>
                  <p className="mr-10">{values.estimatedGas}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">Estimated Transfer Time:</p>
                  <p className="mr-10">{values.estimatedTransferTime}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">Token Amount:</p>
                  <p className="mr-10">{values.srcQuoteTokenAmount}</p>
                </div>
              </div>
              <div className="flex justify-center mt-5 space-x-3">
                <button
                  className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 mt-5 mx-auto"
                  onClick={handleBridgeSubmit}
                >
                  Bridge
                </button>
              </div>
            </div>
          )}
          {!values && (
            <>
              <div className="mt-4 space-y-4">
                <div>
                  <label
                    htmlFor="source"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Source
                  </label>
                  <div className="flex items-center space-x-4 p-3 bg-white rounded-lg border border-gray-300">
                    {props.selectedToken && (
                      <img
                        src={props.selectedToken.logoURI}
                        alt="Logo"
                        className="h-10 w-10"
                      />
                    )}
                    <div className="w-full">
                      <div className="block text-sm font-medium text-gray-700">
                        {props.selectedToken
                          ? props.selectedToken.name
                          : "Select Destination"}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="destination"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Destination
                  </label>
                  <CustomDropdown
                    tokens={props.tokens}
                    selectedToken={destinationToken}
                    setSelectedToken={(token) => {
                      if (token) setDestinationToken(token);
                    }}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Token Amount
                  </label>
                  <input
                    type="number"
                    id="number-input"
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="90210"
                    required
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  className="bg-gray-300 text-gray-800 rounded-md px-4 py-2 hover:bg-gray-400"
                  onClick={props.onClose}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700"
                  onClick={handleSubmit}
                >
                  Get Quote
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      {showToast !== null && (
        <Toast1 value={showToast} onClose={() => setShowToast(null)} />
      )}
    </>
  );
};

export default TokenBridgeModal;
