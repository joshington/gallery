

import { useAccount } from '@starknet-react/core';
import { mockNFTs, mockUserData } from '../utils/mockData';

export function UserDashboard() {
  const { address } = useAccount();
  
  return (
    <div className="flex flex-col space-y-6 w-full max-w-[1200px] mx-auto p-4">
      <h2 className="text-2xl font-bold">Your Gallery Dashboard</h2>
      
      <div className="w-full p-4 shadow-sm shadow-green-300 rounded-lg">
        <h3 className="text-xl font-semibold">Your Wallet</h3>
        <p className="text-white break-all">
          {address ? address : 'Not connected (Demo Mode)'}
        </p>
      </div>

      <div className="w-full p-4 shadow-sm shadow-green-300 rounded-lg">
        <h3 className="text-xl font-semibold">Your NFTs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {mockNFTs.map((nft) => (
            <div key={nft.id} className="p-4 shadow-sm shadow-green-300 rounded-lg">
              <img 
                src={nft.imageUrl} 
                alt={nft.name}
                className="rounded-md mb-2 w-full h-auto"
              />
              <p className="font-bold">{nft.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full p-4 shadow-sm shadow-green-300 rounded-lg">
        <h3 className="text-xl font-semibold">STRK Rewards</h3>
        <p className="mt-2">Current NFTs: {mockUserData.nftCount} / 5</p>
        <p className="mt-2">STRK Balance: {mockUserData.strkBalance}</p>
        <button
          className={`mt-4 px-4 py-2 rounded-lg text-white ${mockUserData.canClaimReward 
            ? 'bg-green-500 hover:bg-green-600' 
            : 'bg-gray-400 cursor-not-allowed'}`}
          disabled={!mockUserData.canClaimReward}
        >
          {mockUserData.canClaimReward ? 'Claim 100 STRK' : 'Collect 5 NFTs to claim'}
        </button>
      </div>
    </div>
  );
}