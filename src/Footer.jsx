import { Github, Linkedin, Twitter } from 'lucide-react';

const ICON_CLASSES = 'flex items-center justify-center w-10 h-10 text-gray-400 hover:text-gray-500';

function Footer() {
    return (
        <footer className="flex flex-col gap-3 px-2 py-6 sm:py-8">
            {/* <p className="text-sm text-gray-500">João Palmeiro</p> */}
            <span className="flex flex-row justify-start gap-2">
                <a
                    href="https://twitter.com/joaompalmeiro"
                    target="_blank"
                    className={ICON_CLASSES}
                >
                    <Twitter />
                </a>

                <a
                    href="https://github.com/joaopalmeiro/consignar-irs"
                    target="_blank"
                    className={ICON_CLASSES}
                >
                    <Github />
                </a>

                <a
                    href="https://www.linkedin.com/in/joaopalmeiro/"
                    target="_blank"
                    className={ICON_CLASSES}
                >
                    <Linkedin />
                </a>
            </span>
        </footer>
    );
}

export default Footer;
