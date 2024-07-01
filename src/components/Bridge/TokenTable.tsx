
interface TokenProps {
  tokens: Token[];
  onGetQuoteClicked: (token: Token) => void;
}
const TokenTable = (props: TokenProps) => {
  return (
    <div className="container mx-auto px-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Logo</th>
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left hidden md:table-cell">
                Symbol
              </th>
              <th className="py-2 px-4 border-b text-left hidden md:table-cell">
                Address
              </th>
              <th className="py-2 px-4 border-b text-left hidden md:table-cell">
                Chain ID
              </th>
              <th className="py-2 px-4 border-b text-left">Decimals</th>
              <th className="py-2 px-4 border-b text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {props.tokens.map((token, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">
                  <img
                    src={token.logoURI}
                    alt={`${token.name} logo`}
                    className="w-8 h-8"
                  />
                </td>
                <td className="py-2 px-4 border-b">{token.name}</td>
                <td className="py-2 px-4 border-b hidden md:table-cell">
                  {token.symbol}
                </td>
                <td className="py-2 px-4 border-b hidden md:table-cell">
                  {token.address}
                </td>
                <td className="py-2 px-4 border-b hidden md:table-cell">
                  {token.chainId}
                </td>
                <td className="py-2 px-4 border-b">{token.decimals}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700 md:px-4 md:py-2 "
                    onClick={() => {
                      props.onGetQuoteClicked(token);
                    }}
                  >
                    Get Quote <span className="hidden md:inline"> Now!</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TokenTable;
