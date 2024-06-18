import { NavLink } from 'react-router-dom';

const contacts = [
    {
        name: "telegram",
        img: "/telegram.svg",
        link: "https://t.me/Quantum_Cloak"
    },
    {
        name: "twitter",
        img: "/x.svg",
        link: "https://x.com/QTCloak"
    },
    {
        name: "github",
        img: "/github.svg",
        link: "https://github.com/Quantum-Cloak"
    },
    {
        name: "telegram",
        img: "/instergram.svg",
        link: ""
    },
]

const Footer = () => {
    return (
        <div className='flex flex-col gap-1 items-center border-t-[1px] border-t-white'>
            <NavLink to="/">
                <img src="/logo-wide.svg" className='h-[40px] w-[160px] md:h-[40px] md:w-[200px]' alt="Logo" />
            </NavLink>
            <div className='flex flex-row gap-3'>
                {
                    contacts.map((contact, index) => (
                        <a key={index} href={contact.link} target='blank'>
                            <img key={index} src={contact.img} alt="icon" className='cursor-pointer hover:opacity-60 transition-all duration-500' />
                        </a>
                    )
                    )
                }
            </div>
        </div>
    );
};
export default Footer;
