

import { useState } from 'react';
import { useAccount } from '@starknet-react/core';
import toast from 'react-hot-toast';




export function PhotoGallery() {
  const { address } = useAccount();
  const [selectedPhotos, setSelectedPhotos] = useState<File[]>([]);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length !== 9) {
      toast.error('Please select exactly 9 photos for your grid');
      return;
    }
    setSelectedPhotos(files);
  };

  const handleSubmit = async () => {
    toast('In demo mode - NFT minting is disabled. Your grid looks great though! 🎨', {
      icon: 'ℹ️',
    });
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-[800px] mx-auto p-4">
      <h2 className="text-2xl font-bold text-center">Create Your Photo Grid NFT</h2>
      
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handlePhotoUpload}
        className="hidden"
        id="photo-upload"
      />
      
      <label
        htmlFor="photo-upload"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer text-center transition-colors"
      >
        Select 9 Photos
      </label>

      {selectedPhotos.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {selectedPhotos.map((photo, index) => (
            <div key={index} className="relative">
              <img
                src={URL.createObjectURL(photo)}
                alt={`Grid photo ${index + 1}`}
                className="object-cover w-full h-48 rounded-md"
              />
            </div>
          ))}
        </div>
      )}

      {selectedPhotos.length === 9 && (
        <button
          onClick={handleSubmit}
          disabled={!address}
          className={`px-4 py-2 rounded-lg text-white ${
            address 
              ? 'bg-green-500 hover:bg-green-600' 
              : 'bg-gray-400 cursor-not-allowed'
          } transition-colors`}
        >
          Submit Grid & Mint NFT (Demo Mode)
        </button>
      )}
    </div>
  );
}