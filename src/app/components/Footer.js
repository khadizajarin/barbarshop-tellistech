import { FaBehance, FaFacebookF, FaLinkedinIn, FaPinterestP, FaSnapchat, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-accent h-24'>
            <hr className='border-t-[1px] border-opacity-30 border-neutral'/>

            {/* Footer */}
            <footer className="footer lg:h-24 flex flex-col lg:flex-row items-center lg:justify-between justify-center lg:max-w-7xl lg:mx-auto gap-4 px-4 lg:px-0 py-4 lg:py-0">
                <aside className="lg:grid-flow-col flex flex-col lg:flex-row items-center text-neutral lg:text-lg text-center lg:text-left">
                    <p>Copyright © {new Date().getFullYear()} <span className='text-secondary'>ThemeOri</span> Website by Barbex</p>
                </aside>
                <nav className="grid grid-flow-col gap-5 place-self-center lg:justify-self-end lg:text-lg text-neutral justify-center">
                    <FaFacebookF />
                    <FaBehance />
                    <FaTwitter />
                    <FaLinkedinIn/>
                    <FaSnapchat />
                    <FaPinterestP />
                    <FaYoutube />
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
