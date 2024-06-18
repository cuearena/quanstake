import React from 'react';
import MainLayout from '../../layout/MainLayout';
import useScreenSize from '../../hooks/useScreenSize';
import WalletConnectBtnBlack from '../WalletConnectBtn/WalletConnectBtnBlack'
import { useWeb3ModalAccount } from '@web3modal/ethers/react'

const Staking = () => {
    const { isConnected } = useWeb3ModalAccount();
    const screenSize = useScreenSize();
    const isSmallScreen = screenSize.width <= 640; // Assuming 640px is the breakpoint for small screens
    return (
        <MainLayout>
            <div className="relative flex items-center justify-center px-[0px] md:px-[60px] w-full  box-border rounded-[26px] pb-[20px]" style={{ flex: "25%" }}>
                <div className='flex w-full lg:h-full items-center justify-between text-center flex-col px-[10px] md:px-[40px] border-[1px] rounded-[16px] border-dashed md:py-0 py-4' style={{ borderColor: "white" }}>
                    <section className='flex flex-col text-white w-full md:w-[80%] gap-2 md:py-0 pt-4'>
                        <h1 className='lg:text-[28px] xl:text-[28px] text-[18px] IBM-Plex-Mono px-3'>STAKE & EARN, PLUS A CHANCE TO BE A QUANTUM CLOAK VALIDATOR</h1>
                        <p className='text-[14px] md:text-[16px]'>By staking your tokens, not only will you earn staking rewards, but you will also become eligible to become a validator on our testnet.</p>
                    </section>
                    {
                        isSmallScreen ?
                            (
                                <>
                                    <div className='w-full flex flex-col gap-4'>
                                        <section className="flex flex-col lg:gap-[20px] gap-2 w-full lg:px-0 px-2 bg-white rounded-[10px] stakeContainer py-2 justify-center items-center md:mt-0 mt-4">
                                            <div className="flex flex-row text-[16px] w-full text-left ">
                                                <h2 className='text-[14px] flex-[70%]'>Token Value Locked</h2>
                                                <h1 className='text-[14px] flex-[30%]'>$119,460.8</h1>
                                            </div >
                                            <div className="flex flex-row text-[16px] w-full text-left ">
                                                <h2 className='text-[14px] flex-[70%]'>Total Tokens Staked</h2>
                                                <h1 className='text-[14px] flex-[30%]'>519,460.8</h1>
                                            </div >
                                            <div className="flex flex-row text-[16px] w-full text-left ">
                                                <h2 className='text-[14px] flex-[70%]'>Total Token Claimed</h2>
                                                <h1 className='text-[14px] flex-[30%]'>$5500</h1>
                                            </div >
                                        </section>
                                        <section className="flex flex-col lg:gap-[20px] gap-2 w-full lg:px-0 px-2 bg-white rounded-[10px] stakeContainer py-2 justify-center items-center">
                                            <div className="flex flex-row text-[16px] w-full text-left ">
                                                <h2 className='text-[14px] flex-[70%]'>My Balance</h2>
                                                <h1 className='text-[14px] flex-[30%]'>$10100</h1>
                                            </div >
                                            <div className="flex flex-row text-[16px] w-full text-left ">
                                                <h2 className='text-[14px] flex-[70%]'>My Stake Balance</h2>
                                                <h1 className='text-[14px] flex-[30%]'>$520</h1>
                                            </div >
                                            <div className="flex flex-row text-[16px] w-full text-left ">
                                                <h2 className='text-[14px] flex-[70%]'>Total Token Claimed</h2>
                                                <h1 className='text-[14px] flex-[30%]'>$1500</h1>
                                            </div >
                                        </section>
                                        <section className={`stakeContainer flex flex-col flex-wrap ${!isConnected && 'gap-4'} rounded-[10px] px-3 py-2 lg:px-8 lg:my-0 w-full`} >
                                            <h2 className='text-[15px]  py-2'>Minimum lock period: 3 days</h2>
                                            <div className='flex flex-row relative'>
                                                <input type="text" className="rounded-[10px] border-[1px] px-2 py-[10px] w-[75%]  text-[18px] customInput focus:outline-none border-black" />
                                                <button className='absolute right-0 text-white px-7 py-[11px] rounded-[10px] lg:w-[45%] text-[15px] text-center bg-black h-full'>MAX</button>
                                            </div>
                                            <section className='grid grid-cols-4 gap-4 py-1'>
                                                <button className='border-[1px] rounded-[10px] px-3 py-2 bg-transparent text-[13px] border-black' >25%</button>
                                                <button className='border-[1px] rounded-[10px] px-3 py-2 bg-transparent text-[13px] border-black' >50%</button>
                                                <button className='border-[1px] rounded-[10px] px-3 py-2 bg-transparent text-[13px] border-black' >75%</button>
                                                <button className='border-[1px] rounded-[10px] px-3 py-2 bg-transparent text-[13px] border-black' >100%</button>
                                            </section>

                                            {isConnected ? (
                                                <>
                                                    <section className='grid grid-cols-2 gap-4 py-1'>
                                                        <button className='customBtn  text-[15px] text-white w-full border-[1px] rounded-[10px] px-3 py-2'>Stake</button>
                                                        <button className='customBtn  text-[15px] text-white w-full border-[1px] rounded-[10px] px-3 py-2'>Unstake</button>
                                                    </section>
                                                    <button className='customBtn  text-[15px] text-white w-full border-[1px] rounded-[10px] px-3 py-2'>Emergency Withdraw</button>
                                                    <section className='grid grid-cols-2 gap-2 py-1'>
                                                        <div className='text-left'>
                                                            <h2 className='text-[14px] py-2 font-bold'>Claimable Reward</h2>
                                                            <h2 className='text-[15px] '>0.0000 QTC</h2>
                                                        </div>
                                                        <button className='customBtn  text-[15px] text-white w-full border-[1px] rounded-[10px] px-3'>Claim QTC</button>
                                                    </section>
                                                </>
                                            ) : (
                                                <WalletConnectBtnBlack />
                                            )
                                            }
                                        </section>
                                        <section className="flex flex-col lg:gap-[20px] gap-2 w-full lg:px-0 px-2 py-2 bg-white rounded-[10px] stakeContainer justify-center items-center">
                                            <div className="flex flex-row text-[16px] w-full text-left ">
                                                <h2 className='text-[14px] flex-[70%]'>Early Unstake Fee</h2>
                                                <h1 className='text-[14px] flex-[30%]'>7%</h1>
                                            </div >
                                            <div className="flex flex-row text-[16px] w-full text-left ">
                                                <h2 className='text-[14px] flex-[70%]'>APY Rate</h2>
                                                <h1 className='text-[14px] flex-[30%]'>Dynamic</h1>
                                            </div >
                                            <div className="flex flex-row text-[16px] w-full text-left ">
                                                <h2 className='text-[14px] flex-[70%]'>Locked at</h2>
                                                <h1 className='text-[14px] flex-[30%]'>--</h1>
                                            </div >
                                        </section>
                                    </div >
                                </>
                            )
                            :
                            (
                                <div className='min-h-[400px] overflow-y-auto'>
                                    <section className="flex flex-col lg:flex-row lg:px-0 flex-wrap md:pb-4 items-center justify-between w-full gap-8 lg:gap-0 ">
                                        <div className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] py-2  w-full lg:w-[25%] rounded-[10px] items-center justify-center">
                                            <h2 className='text-[14px] '>Token Value Locked</h2>
                                            <h1 className='text-[20px] '>$119,460.8</h1>
                                        </div >
                                        <div className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-2 w-full lg:w-[25%] rounded-[10px]  items-center justify-center">
                                            <h2 className='text-[14px] '>Total Tokens Staked</h2>
                                            <h1 className='text-[20px] '>519,460.8</h1>
                                        </div >
                                        <div className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-2 w-full lg:w-[25%] rounded-[10px]  items-center justify-center">
                                            <h2 className='text-[14px] '>Total Token Claimed</h2>
                                            <h1 className='text-[20px] '>$5500</h1>
                                        </div >
                                    </section>
                                    <div className='grid grid-cols-12 gap-0 w-full'>
                                        <div className='col-span-3'>
                                            <section className="flex flex-col lg:gap-[20px] w-full gap-8 lg:px-0 pt-3">
                                                <div className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-2 w-full rounded-[10px]  items-center justify-center" >
                                                    <h2 className='text-[14px] '>My Balance</h2>
                                                    <h1 className='text-[20px] '>$10100</h1>
                                                </div >
                                                <div className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-2 w-full rounded-[10px]  items-center justify-center" >
                                                    <h2 className='text-[14px] '>My Stake Balance</h2>
                                                    <h1 className='text-[20px] '>$520</h1>
                                                </div >
                                                <div className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-2 w-full rounded-[10px]  items-center justify-center" >
                                                    <h2 className='text-[14px] '>Total QTC Claimed</h2>
                                                    <h1 className='text-[20px] '>$1500</h1>
                                                </div >
                                            </section>
                                        </div>
                                        <div className='col-span-1 grid-rows-3 grid mb-3'>
                                            <div className='row-span-1'>
                                                <hr className='relative top-[50%] tranlate-y-[50%] bg-white' />
                                            </div>
                                            <div className='row-span-1'>
                                                <hr className='relative top-[40%] tranlate-y-[50%] bg-white ' />
                                            </div>
                                            <div className='row-span-1'>
                                                <hr className='relative top-[30%] tranlate-y-[50%] bg-white' />
                                            </div>
                                        </div>
                                        <div className='col-span-4 flex items-center justify-center'>
                                            <section className={`stakeContainer flex flex-col flex-wrap ${!isConnected && 'gap-4'} rounded-[10px] px-3 lg:px-8 my-[30px] lg:my-0 py-2 w-full`} >
                                                <h2 className='text-[15px]  py-2'>Minimum lock period: 3 days</h2>
                                                <div className='flex flex-row relative'>
                                                    <input type="text" className="rounded-[10px] border-[1px] px-2 py-[10px] w-[75%]  text-[18px] customInput focus:outline-none border-black" />
                                                    <button className='absolute right-0 text-white px-7 py-[11px] rounded-[10px] lg:w-[45%] text-[15px] text-center bg-black h-full'>MAX</button>
                                                </div>
                                                <section className='grid grid-cols-4 gap-4 py-1'>
                                                    <button className='border-[1px] rounded-[10px] px-3 py-2 bg-transparent text-[13px] border-black' >25%</button>
                                                    <button className='border-[1px] rounded-[10px] px-3 py-2 bg-transparent text-[13px] border-black' >50%</button>
                                                    <button className='border-[1px] rounded-[10px] px-3 py-2 bg-transparent text-[13px] border-black' >75%</button>
                                                    <button className='border-[1px] rounded-[10px] px-3 py-2 bg-transparent text-[13px] border-black' >100%</button>
                                                </section>

                                                {isConnected ? (
                                                    <>
                                                        <section className='grid grid-cols-2 gap-4 py-1'>
                                                            <button className='customBtn  text-[15px] text-white w-full border-[1px] rounded-[10px] px-3 py-2'>Stake</button>
                                                            <button className='customBtn  text-[15px] text-white w-full border-[1px] rounded-[10px] px-3 py-2'>Unstake</button>
                                                        </section>
                                                        <button className='customBtn  text-[15px] text-white w-full border-[1px] rounded-[10px] px-3 py-2'>Emergency Withdraw</button>
                                                        <section className='grid grid-cols-2 gap-2 py-1'>
                                                            <div className='text-center'>
                                                                <h2 className='text-[15px] py-2'>Claimable Reward</h2>
                                                                <h2 className='text-[15px] '>0.0000 QTC</h2>
                                                            </div>
                                                            <button className='customBtn  text-[15px] text-white w-full border-[1px] rounded-[10px] px-3'>Claim QTC</button>
                                                        </section>
                                                    </>
                                                ) : (
                                                    <WalletConnectBtnBlack />
                                                )
                                                }
                                            </section>
                                        </div>
                                        <div className='col-span-1 grid-rows-3 grid mb-[30px]'>
                                            <div className='row-span-1'>
                                                <hr className='relative top-[50%] tranlate-y-[50%] bg-white' />
                                            </div>
                                            <div className='row-span-1'>
                                                <hr className='relative top-[40%] tranlate-y-[50%] bg-white' />
                                            </div>
                                            <div className='row-span-1'>
                                                <hr className='relative top-[30%] tranlate-y-[50%] bg-white' />
                                            </div>
                                        </div>
                                        <div className='col-span-3'>
                                            <section className="flex flex-col lg:gap-[20px] gap-8 w-full lg:px-0 pt-3">
                                                <div className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-2 w-full rounded-[10px]  items-center justify-center" >
                                                    <h2 className='text-[14px] '>Early Unstake Fee</h2>
                                                    <h1 className='text-[20px] '>7%</h1>
                                                </div >
                                                <div className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-2 w-full rounded-[10px]  items-center justify-center" >
                                                    <h2 className='text-[14px] '>APY Rate</h2>
                                                    <h1 className='text-[20px] '>Dynamic</h1>
                                                </div >
                                                <div className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-2 w-full rounded-[10px]  items-center justify-center" >
                                                    <h2 className='text-[14px] '>Locked at</h2>
                                                    <h1 className='text-[20px] '>--</h1>
                                                </div >
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            )
                    }


                </div >
            </div>
        </MainLayout>
    );
};

export default Staking;




