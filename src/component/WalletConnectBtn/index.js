import { useWeb3Modal, useWeb3ModalAccount, useDisconnect } from '@web3modal/ethers/react'

export default function ConnectButton() {
    // 4. Use modal hook
    const { open } = useWeb3Modal();
    const { isConnected, address, chainId } = useWeb3ModalAccount();
    const { disconnect } = useDisconnect();

    return (
        <>
            {
                !isConnected ? (
                    <div onClick={() => open()} className='flex flex-row md:gap-2 px-2 lg:w-[300px] stakeContainer h-[40px] rounded-[10px] md:text-[2xl] text-[14px] justify-center items-center cursor-pointer hover:opacity-80 transition-all duration-500'>
                        <img src="/wallet.svg" alt="wallet-icon" />
                        <h2 className='text-center'>
                            Connect Wallet
                        </h2>
                    </div>
                ) : (
                    <>
                        <button className='w-0 opacity-0 md:opacity-100 md:w-[180px] h-[40px] px-2 stakeContainer flex justify-center items-center focus:outline-none rounded-[10px] hover:opacity-80 transition-all duration-500'
                            onClick={() => open({ view: 'Account' })}
                            style={{ display: 'flex', alignItems: 'center' }}
                            type="button"
                        >
                            {address.substring(0, 4)}...{address.substring(address.length - 4)}
                        </button>
                    </>
                )
            }
        </>
    )
}
