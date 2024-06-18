import { NavLink } from 'react-router-dom';
import WalletConnectBtn from "../WalletConnectBtn"
const Header = () => {
    return (
        <header className="md:sticky top-0 flex w-full bg-black items-center justify-between px-[10px] md:px-[30px] py-4">
            <NavLink to="/">
                <img src="/logo-wide.svg" className='h-[40px] w-[200px]' alt="Logo" />
            </NavLink>
            <WalletConnectBtn />
        </header>
    );
};

export default Header;
