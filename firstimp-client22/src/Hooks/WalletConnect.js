import { useAccount, useConnect, useEnsName } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

import './Walletcon.css'

const WalletConnect = () => {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
// {(ensName ?? address).substring(0, 4)}
  return (
    <div>
      {isConnected ? (
        <div className="walletbutton" style={{marginTop:"4px",height:"40px"}} >🦊 Connected to {(ensName ?? address).substring(0, 4) } ✅</div>
      ) : (
        <button onClick={() => connect()} className="walletbutton" >🦊 Connect Wallet</button>
        
      )}
    </div>
  );
};
export default WalletConnect;
