import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="relative">
            <footer className="footer p-10 bg-base-300 text-base-content">
                <div className="mr-10 mb-5">
                    <h2 className="text-4xl">GoromKalerAdventure</h2>
                    <label htmlFor="">
                        <span>Email</span>
                    </label>
                    <input type="text" placeholder="Your email" className="input input-bordered w-full md:max-w-xs" />
                    <label htmlFor="">
                        <span>Message</span>
                    </label>
                    <textarea placeholder="Enter your message" className="textarea textarea-bordered textarea-md w-full md:max-w-xs h-32" ></textarea>
                </div>
                <div className="grid grid-cols-2 gap-32">
                    <div className="">
                        <div>
                            <h6 className="footer-title">Services</h6>
                        </div>
                        <div>
                            <a className="link link-hover">Branding</a>
                        </div>
                        <div>
                            <a className="link link-hover">Design</a>
                        </div>
                        <div>
                            <a className="link link-hover">Marketing</a>
                        </div>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div className="">
                        <div>
                            <h6 className="footer-title">Company</h6>
                        </div>
                        <div>
                            <a className="link link-hover">About us</a>
                        </div>
                        <div>
                            <a className="link link-hover">Contact</a>
                        </div>
                        <div>
                            <a className="link link-hover">Jobs</a>
                        </div>
                        <a className="link link-hover">Press kit</a>
                    </div>
                </div>
                <div className="mr-20 lg:mr-0 md:mt-[200px] lg:mt-16">
                    <nav>
                        <h6 className="footer-title">Social</h6>
                        <div className="grid grid-flow-col gap-4 mb-2">
                            <a><FaTwitter className="text-2xl"></FaTwitter></a>
                            <a><FaYoutube className="text-2xl"></FaYoutube></a>
                            <a><FaFacebook className="text-2xl"></FaFacebook></a>
                            <a><FaGithub className="text-2xl"></FaGithub></a>
                        </div>
                    </nav>
                </div>

            </footer>
            <div className="absolute left-6 md:left-40 lg:left-[600px] bottom-2 lg:bottom-20 pt-5">
                <hr />
                <p className="opacity-55">Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                <hr />
            </div>
        </div>
    );
};

export default Footer;