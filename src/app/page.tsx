"use client"

import Link from 'next/link';
import Image from 'next/image';

const demoEvents = [
	{
		title: 'Art Expo 2025',
		img: '/file.svg',
		description: 'A vibrant showcase of digital art and creativity.'
	},
	{
		title: 'Music Fest',
		img: '/globe.svg',
		description: 'Share your favorite moments from the biggest music festival.'
	},
	{
		title: 'Tech Conference',
		img: '/next.svg',
		description: 'Capture innovation and networking at the annual tech conference.'
	},
];

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-green-900 to-green-950">
			{/* Header matching Dapp theme */}
			<header className="bg-green-900/90 backdrop-blur-sm shadow-lg border-b border-green-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-emerald-100 bg-clip-text text-transparent">
						NFT Gallery
					</h1>
				</div>
			</header>

			{/* Main Content */}
			<main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] p-6">
				<h1 className="text-4xl font-bold mb-4 text-center text-white">
					Welcome to the Photo Gallery NFT Demo
				</h1>
				<p className="text-lg text-center max-w-xl mb-6 text-emerald-100">
					Share your favorite event moments, create a stunning photo grids, and mint your unique NFT! Easily post your grid to social media and showcase your memories.
				</p>
				<Link 
					href="/gallery" 
					className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-emerald-500/20 transition-all mb-8"
				>
					Go to Photo Gallery
				</Link>
				<div className="w-full max-w-4xl">
					<h2 className="text-2xl font-semibold mb-6 text-center text-emerald-100">
						Demo Events
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{demoEvents.map((event, index) => (
							<div 
								key={index} 
								className="bg-green-800/50 backdrop-blur-sm rounded-lg shadow-lg p-6 flex flex-col items-center border border-green-700 hover:bg-green-800/60 transition-all"
							>
								<Image 
									src={event.img} 
									alt={event.title} 
									width={120} 
									height={120} 
									className="mb-4 filter brightness-0 invert opacity-80" 
								/>
								<h3 className="text-xl font-bold mb-2 text-white">
									{event.title}
								</h3>
								<p className="text-emerald-200 text-center">
									{event.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</main>
		</div>
	);
}
