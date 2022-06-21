import { Transition } from '@headlessui/react';
import { Button } from 'flowbite-react';
import { ArrowUp } from 'lucide-react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// Source: https://dev.to/prnvbirajdar/react-hooks-component-to-smooth-scroll-to-the-top-35fd by Pranav Birajdar
// https://mantine.dev/core/affix/
// https://github.com/joaopalmeiro/dvs-soti-2021/blob/main/src/App.jsx
function ScrollToTop({ yOffset }) {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > yOffset) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // https://help.shopify.com/pt-BR/manual/online-store/themes/themes-by-shopify/vintage-themes/customizing-vintage-themes/add-back-to-top
    // https://flowbite-react.com/buttons
    // https://headlessui.dev/
    // https://headlessui.dev/react/transition#basic-example
    // https://headlessui.dev/react/transition#animating-transitions
    // https://tailwindcss.com/docs/transition-duration
    // https://github.com/mantinedev/mantine/blob/master/src/mantine-core/src/components/Transition/transitions.ts#L100
    return (
        <div className="fixed bottom-5 right-5">
            <Transition
                show={isVisible}
                enter="transition origin-bottom duration-300"
                enterFrom="opacity-0 translate-y-full"
                enterTo="opacity-100 translate-y-0"
                leave="transition origin-bottom duration-300"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-full"
            >
                <Button onClick={scrollToTop} gradientDuoTone="purpleToBlue" outline={true}>
                    <ArrowUp className="mr-2" size={20} />
                    Voltar ao topo
                </Button>
            </Transition>
        </div>
    );
}

ScrollToTop.propTypes = {
    yOffset: PropTypes.number
};

ScrollToTop.defaultProps = {
    yOffset: 500
};

export default ScrollToTop;
