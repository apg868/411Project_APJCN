import React from 'react';
import Link from 'next/link';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const Navbar = () => {
    return(
        <div>
            {/* Icons */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center"> 
                    <Link href = "/">
                        <AccountBalanceIcon className="w-8 h-8 text-white"/>
                    </Link>
                </div>
                
                <div className="flex items-center space-x-4">
                    <SearchIcon className="w-8 h-8 text-white"/>
                    <MenuIcon className="w-8 h-8 text-white"/>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex flex-col space-y-12 flex-grow font-bold text-white">
                <Link href="/" className="text-center">
                    Dashboard
                </Link>
                <Link href="../aboutUs" className="text-center">
                    About Us
                </Link>
                <Link href="../dashboard/view-transaction" className="text-center">
                    View Transaction History
                </Link>
                <Link href="../viewSetBudget" className="text-center">
                    View Budget
                </Link>
                <Link href="../help" className="text-center">
                    Help and Support
                </Link>
                <Link href="../dashboard2/homePage" className="text-center">
                    Dashboard - Charles
                </Link>
            </div>

            {/* Login */}
            <div className="flex items-center justify-left mb-4" style={{ position: 'fixed', bottom: '10px' }}>
                <div className="flex items-left ml-4"> 
                    <div className="w-12 h-12 rounded-full" style = {{backgroundColor: '#00b1d2'}}>
                        <LockOpenIcon className="w-10 h-10 ml-1 mt-1"/>
                    </div> 
                </div>
                <div className="flex text-center items-center text-white font-bold ml-2">
                    <Link href="../account">
                        Account
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;