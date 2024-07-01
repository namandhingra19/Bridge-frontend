import { useNavigate } from "react-router-dom";

interface CardProps {
  name: string;
  chainId: string;
}
const BlockChainCard = (props: CardProps) => {
  const navigate = useNavigate();
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("");
  };

  return (
    <div
      className="w-full md:w-1/4 p-4 md:p-2 cursor-pointer"
      onClick={() => {
        navigate(`/bridge/${props.chainId}`);
      }}
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 ">
        <div className="px-4 py-3 bg-gray-200">
          <div className="text-xl font-bold">{props.name}</div>
          <div className="text-gray-600">Chain ID: {props.chainId}</div>
        </div>
        <div className="px-4 py-3 text-center">
          <div className="text-4xl text-blue-500">
            {getInitials(props.name)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockChainCard;
