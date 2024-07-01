
interface TransactionDetailsProps {
  transactionDetails: any;
}

const TransactionDetails = (props: TransactionDetailsProps) => {
  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg items-center pb-5">
      <div className="flex justify-center items-center bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4">
        <img
          src={require("../../assets/transactionComplete.webp")}
          alt="check-circle"
          className="w-11 h-11 mr-2"
        />
        <h2 className="text-3xl font-bold mb-4 mt-4">Transaction Complete!</h2>
      </div>
      <h2 className="text-2xl font-bold mb-4">Transaction Details:</h2>

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">From Chain:</h3>
        <p>
          Source Chain ID: {props.transactionDetails.srcChainId}
          <br />
          Source Token: {props.transactionDetails.srcQuoteToken.symbol}
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">To Chain:</h3>
        <p>
          Destination Chain ID: {props.transactionDetails.dstChainId}
          <br />
          Destination Token: {props.transactionDetails.dstQuoteToken.symbol}
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Amounts:</h3>
        <p>
          Source Token Amount: {props.transactionDetails.srcQuoteTokenAmount}
          <br />
          Destination Token Amount:{" "}
          {props.transactionDetails.dstQuoteTokenAmount}
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Additional Information:</h3>
        <p>
          Estimated Gas: {props.transactionDetails.estimatedGas}
          <br />
          Estimated Transfer Time:{" "}
          {props.transactionDetails.estimatedTransferTime}
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">
          Transaction Contract Address:
        </h3>
        <p className="break-all">
          Contract Address: {props.transactionDetails.contractAddress}
        </p>
      </div>
    </div>
  );
};

export default TransactionDetails;
