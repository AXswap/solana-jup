import React from 'react';
import Link from 'next/link';
import Wallet from '@/components/WalletConnect';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">Solana DEX</div>
                <div className="flex space-x-4">
                    <Link href="/" className="text-gray-300 hover:text-white">
                        首页
                    </Link>
                    <Link href="/swap" className="text-gray-300 hover:text-white">
                        交易
                    </Link>
                    <Link href="/liquidity" className="text-gray-300 hover:text-white">
                        流动性
                    </Link>
                    <Link href="/staking" className="text-gray-300 hover:text-white">
                        质押
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    <Wallet />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
