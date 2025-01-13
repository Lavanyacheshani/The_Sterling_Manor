import Image from "next/image";
import { facebook, instagram, youtube } from "@/../public/assets";
import { ApplicationRoute } from "@/utils/routes";
import {useRouter} from "next/navigation";

const Footer = () => {
    const router = useRouter();
    // Define footer links for the footer sections
    const footerLinks = [
        {
            href: ApplicationRoute.HOME,
            label: "HOME",
        },
        {
            href: ApplicationRoute.DINING,
            label: "DINING",
        },
        {
            href: ApplicationRoute.BANQUET,
            label: "BANQUET",
        },
        {
            href: ApplicationRoute.ABOUT_US,
            label: "ABOUT US",
        },
        {
            href: ApplicationRoute.ACCOMMODATION,
            label: "ACCOMMODATION",
        },
        {
            href: ApplicationRoute.TERMS_N_CONDITION,
            label: <>
                TERMS <span className="font-sans font-[100]">&</span> CONDITIONS
            </>,
        },
        {
            href: ApplicationRoute.GALLERY,
            label: "GALLERY",
        },
        {
            href: ApplicationRoute.EVENTS,
            label: "EVENTS",
        },
        {
            href: ApplicationRoute.PRIVACY_POLICY,
            label: "PRIVACY POLICY",
        },
        {
            href: ApplicationRoute.CONTACT_US,
            label: "CONTACT US",
        },
    ];

    // Social media icons with PNGs
    const socialMediaLinks = [
        { href: "https://facebook.com", src: facebook, alt: "Facebook" },
        { href: "https://instagram.com", src: instagram, alt: "Instagram" },
        { href: "https://youtube.com", src: youtube, alt: "YouTube" },
    ];

    return (
        <footer className="bg-primary text-white px-5 xl:px-20 pt-8">
            <div className="container mx-auto flex flex-col space-y-8">
                {/* Top Section */}
                <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start px-5 xl:px-10 py-8 max-w-[1920px]">
                    {/* Footer Links */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-14 md:gap-x-8 text-center md:text-left flex-1">
                        {footerLinks.map((link, index) => (
                            <a
                                key={index}
                                onClick={()=>{router.push(link.href)}}
                                className="body-text font-cerapro_light text-start hover:cursor-pointer text-gray-300 hover:text-white transition"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex flex-row md:flex-col justify-center items-center mt-14 md:mt-0 space-x-4 md:space-x-0 md:space-y-4 md:ml-8">
                        {socialMediaLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                aria-label={social.alt}
                                className="hover:opacity-80 transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image src={social.src} alt={social.alt} width={25} height={25} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white py-8 text-center tracking-wider text-gray-300 body-text font-cerapro_light">
                    GRAND MINARO
                </div>
            </div>
        </footer>
    );
};

export default Footer;
