import React from 'react';
import Link from "next/link";

const viewSetBudget = () => {
    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            {/* Navbar */}
            <nav style={{ background: 'linear-gradient(to top, #667eea 0%, #4c51bf 100%)', backgroundColor: 'rgba(31, 41, 55, 0.3)', width: '120px', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                {/* Icons */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div style={{ width: '48px', height: '48px', backgroundColor: '#cbd5e0', borderRadius: '9999px' }}></div>
                    <div style={{ width: '48px', height: '48px', backgroundColor: '#cbd5e0', borderRadius: '9999px' }}></div>
                </div>
                {/* Tabs */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', flexGrow: 1, fontWeight: 'bold', color: '#ffffff' }}>
                    <Link href="./" style={{ textAlign: 'center' }}>
                        Dashboard
                    </Link>
                    <Link href="./" style={{ textAlign: 'center' }}>
                        About Us
                    </Link>
                    <Link href="./" style={{ textAlign: 'center' }}>
                        View Transaction History
                    </Link>
                    <Link href="/viewSetBudget" style={{ textAlign: 'center' }}>
                        View Budget
                    </Link>
                    <Link href="./" style={{ textAlign: 'center' }}>
                        Help and Support
                    </Link>
                </div>
            </nav>
            {/* Main Content */}
            <main style={{ flex: 1, padding: '2rem' }}>
                <div style = {{textAlign:'center'}}>
                    hi
                </div>
            </main>
        </div>
    );
}

export default viewSetBudget;