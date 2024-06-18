import { useWeb3Modal, useWeb3ModalAccount, useWalletInfo, useSwitchNetwork, useDisconnect } from '@web3modal/ethers/react'

export default function WalletConnectBtnBlack() {
    // 4. Use modal hook
    const { open } = useWeb3Modal();
    const { isConnected, address, chainId } = useWeb3ModalAccount();

    return (
        <>
            {
                !isConnected ? (
                    <button className='customBtn text-[15px] w-full border-[1px] rounded-[10px] px-3 py-3' onClick={() => open()}>
                        Connect Wallet
                    </button>
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
