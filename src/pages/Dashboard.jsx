import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/Authcontext"
import Navbar from '../component/Navbar'

function Dashboard() {

    const {
        user,
        logout,
        getProfile,
        profiledata,
        getHoldings,
        holdingsdata,
        getPositions,
        positionsdata,
        getFunds,
        fundsdata
    } = useContext(AuthContext);

    useEffect(() => {
        const fetchProfile = async () => {
            await getProfile();
        };
        fetchProfile();
    }, []);


    useEffect(() => {
        const fetchHoldings = async () => {
            await getHoldings();
        };
        fetchHoldings();
    }, []);


    useEffect(() => {
        const fetchPositions = async () => {
            await getPositions();
        };
        fetchPositions();
    }, []);


    useEffect(() => {
        const fetchFunds = async () => {
            await getFunds();
        };
        fetchFunds();
    }, []);

    return (
        <>
            <div className="bg-black text-white ">
                <Navbar
                    profile={"profile"}
                    logout={true}
                    profiledata={profiledata ? profiledata.user_id : null}
                />
                {profiledata ? (
                    <div className="flex flex-col pl-5 pt-5">
                        <div className="text-2xl text-white border-b-2 border-gray-800 p-3">
                            Hi , {profiledata.user_shortname}
                        </div>

                        <div className="p-5">
                            <h2 className="text-xl font-semibold mb-3 border-b border-gray-800 pb-2">
                                Your Holdings
                            </h2>
                            {/* holdings */}
                            {holdingsdata && holdingsdata.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {holdingsdata.map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-[#1f1f1f] rounded-2xl p-4 shadow-md border border-gray-800 hover:scale-[1.02] transition-all"
                                        >
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-lg font-semibold">{item.tradingsymbol}</span>
                                                <span className="text-sm text-gray-400">{item.exchange}</span>
                                            </div>

                                            <div className="text-gray-400 text-sm">
                                                Qty: <span className="text-white">{item.quantity}</span>
                                            </div>

                                            <div className="text-gray-400 text-sm">
                                                Avg Price: <span className="text-white">₹{item.average_price.toFixed(2)}</span>
                                            </div>

                                            <div className="text-gray-400 text-sm">
                                                Last Price: <span className="text-white">₹{item.last_price.toFixed(2)}</span>
                                            </div>

                                            <div
                                                className={`mt-2 font-semibold ${item.pnl >= 0 ? "text-green-400" : "text-red-400"
                                                    }`}
                                            >
                                                P&L: ₹{item.pnl.toFixed(2)}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-500">No holdings found.</p>
                            )}

                            {/* Positions Section */}
                            <div className="p-5">
                                <h2 className="text-xl font-semibold mb-3 border-b border-gray-800 pb-2">
                                    Your Positions
                                </h2>

                                {positionsdata && positionsdata.net ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {positionsdata.net.length > 0 ? (
                                            positionsdata.net.map((pos, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-[#1f1f1f] rounded-2xl p-4 shadow-md border border-gray-800 hover:scale-[1.02] transition-all"
                                                >
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="text-lg font-semibold">
                                                            {pos.tradingsymbol || "—"}
                                                        </span>
                                                        <span className="text-sm text-gray-400">
                                                            {pos.exchange || "—"}
                                                        </span>
                                                    </div>

                                                    <div className="text-gray-400 text-sm">
                                                        Qty: <span className="text-white">{pos.quantity ?? 0}</span>
                                                    </div>

                                                    <div className="text-gray-400 text-sm">
                                                        Avg Price:{" "}
                                                        <span className="text-white">
                                                            ₹{pos.average_price ? pos.average_price.toFixed(2) : 0}
                                                        </span>
                                                    </div>

                                                    <div className="text-gray-400 text-sm">
                                                        Last Price:{" "}
                                                        <span className="text-white">
                                                            ₹{pos.last_price ? pos.last_price.toFixed(2) : 0}
                                                        </span>
                                                    </div>

                                                    <div
                                                        className={`mt-2 font-semibold ${pos.pnl >= 0 ? "text-green-400" : "text-red-400"
                                                            }`}
                                                    >
                                                        P&L: ₹{pos.pnl ? pos.pnl.toFixed(2) : 0}
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="bg-[#1f1f1f] rounded-2xl p-4 shadow-md border border-gray-800">
                                                <p className="text-gray-400 text-center">No active positions</p>
                                                <p className="text-sm text-gray-500 text-center mt-1">
                                                    Qty: 0 | Avg Price: ₹0 | P&L: ₹0
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <p className="text-gray-500">Loading positions...</p>
                                )}
                            </div>

                            {/* Funds Section */}
                            <div className="p-5">
                                <h2 className="text-xl font-semibold mb-3 border-b border-gray-800 pb-2">
                                    Your Funds
                                </h2>

                                {fundsdata ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Available Funds */}
                                        <div className="bg-[#1f1f1f] rounded-2xl p-4 shadow-md border border-gray-800">
                                            <h3 className="text-lg font-semibold mb-3 text-[#60f7d4]">
                                                Available
                                            </h3>
                                            {Object.entries(fundsdata.available).map(([key, value]) => (
                                                <div key={key} className="flex justify-between text-sm mb-1 text-gray-300">
                                                    <span className="capitalize">{key.replace(/_/g, " ")}</span>
                                                    <span className="text-white">₹{value ?? 0}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Utilised Funds */}
                                        <div className="bg-[#1f1f1f] rounded-2xl p-4 shadow-md border border-gray-800">
                                            <h3 className="text-lg font-semibold mb-3 text-[#f76c6c]">
                                                Utilised
                                            </h3>
                                            {Object.entries(fundsdata.utilised).map(([key, value]) => (
                                                <div key={key} className="flex justify-between text-sm mb-1 text-gray-300">
                                                    <span className="capitalize">{key.replace(/_/g, " ")}</span>
                                                    <span className="text-white">₹{value ?? 0}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <p className="text-gray-500">Loading funds data...</p>
                                )}
                            </div>


                        </div>
                    </div>
                ) : (
                    <p className="text-gray-500">Click “Get Profile” to load user data</p>
                )}



            </div>
        </>
    )
}

export default Dashboard