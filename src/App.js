import ProjectRouter from './router';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

const projectId = '57c3ed3f7633af987eda789d503edfee'
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}
const metadata = {
  name: 'My Website',
  description: 'My Website description'
}
const ethersConfig = defaultConfig({
  metadata
})
createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId,
  enableAnalytics: true
})

function App() {
  return (
    <ProjectRouter />
  );
}

export default App;



