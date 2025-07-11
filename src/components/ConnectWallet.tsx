
import { useConnect } from '@starknet-react/core';

import { Connector } from "starknetkit";

export function ConnectWallet({ onConnect }: { onConnect?: () => void }) {
  const { connect, connectors } = useConnect();

  const handleConnect = (connector: Connector) => {
    connect({ connector });
    onConnect?.();
  };

  return (
    <div className="flex flex-col gap-4 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-center">Demo Mode - Wallet Connection Optional</h2>
      <p className="text-gray-600 text-center">You can browse the UI without connecting a wallet</p>
      
      <div className="flex flex-col gap-3">
        {connectors.map((connector) => (
          <button
            key={connector.id}
            onClick={() => connect({ connector })}
            className="bg-green-900/90 hover:bg-green-800 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Connect {connector.id}
          </button>
        ))}
      </div>

      <p className="text-sm text-gray-500 text-center">
        Note: Actual minting requires a connected wallet
      </p>
    </div>
  );
}