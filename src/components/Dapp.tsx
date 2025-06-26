
import { useState, useEffect } from 'react';
import { ConnectWallet } from '@/components/ConnectWallet';
import { PhotoGallery } from '@/components/PhotoGallery';
import { UserDashboard } from '@/components/UserDashboard';
import { useAccount } from '@starknet-react/core';
import { motion, AnimatePresence } from 'framer-motion';

export default function Dapp() {
  const { isConnected, address } = useAccount();
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-green-950">
      {/* Enhanced Header */}
      <header className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-green-900/90 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-emerald-100 bg-clip-text text-transparent"
          >
            NFT Gallery
          </motion.h1>
          
          {!isConnected ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowConnectModal(true)}
              className="relative overflow-hidden group bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-emerald-500/20 transition-all"
            >
              <span className="relative z-10">Connect Wallet</span>
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>
          ) : (
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-sm font-medium text-emerald-100">
                Connected: {`${address?.slice(0, 6)}...${address?.slice(-4)}`}
              </span>
            </div>
          )}
        </div>
      </header>

      {/* Main Content with Animation */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <AnimatePresence>
          {showConnectModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="relative bg-gradient-to-b from-green-800 to-green-900 rounded-xl max-w-md w-full p-6 border border-emerald-400/30 shadow-2xl shadow-emerald-900/50"
              >
                <button
                  onClick={() => setShowConnectModal(false)}
                  className="absolute top-4 right-4 text-emerald-200 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <ConnectWallet onConnect={() => setShowConnectModal(false)} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-12">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-green-800/30 rounded-xl p-6 backdrop-blur-sm border border-emerald-400/20"
          >
            <UserDashboard />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-green-800/30 rounded-xl p-6 backdrop-blur-sm border border-emerald-400/20"
          >
            <PhotoGallery />
          </motion.section>
        </div>
      </main>

      {/* Subtle Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-emerald-400/10 blur-xl"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}