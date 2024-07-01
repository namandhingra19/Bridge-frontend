import ApiHelper from "../utils/ApiHelper";

export function getAllTokens(chainId: string) {
  return new Promise((resolve, reject) => {
    ApiHelper.get(`/api/v1/tokens?chainId=${chainId}`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}
export function getAllBlockChains() {
  return new Promise((resolve, reject) => {
    ApiHelper.get(`/api/v1/blockChains`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}
export function sendQouteData(data: {
  srcChainId: string;
  fromTokenAddress: string;
  amount: string;
  destChainId: string;
  toTokenAddress: string;
}) {
  return new Promise((resolve, reject) => {
    ApiHelper.post(`/api/v1/quotes`, {
      srcChainId: data.srcChainId,
      fromTokenAddress: data.fromTokenAddress,
      amount: data.amount,
      destChainId: data.destChainId,
      toTokenAddress: data.toTokenAddress,
    })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}
export function createTransaction(data: {
  qoute:any
}) {
  return new Promise((resolve, reject) => {
    ApiHelper.post(`/api/v1/params`, {
      qoute: data.qoute
    })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}
