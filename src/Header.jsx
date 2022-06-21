function Header() {
    // https://imm.medicina.ulisboa.pt/pt-pt/apoiar-a-ciencia/consignacao-irs/#intro
    // Consignar é o que está a doar!
    return (
        <header className="py-16 text-center sm:py-24">
            <p className="text-base font-semibold tracking-wide text-blue-600 uppercase">
                IRS 2021
            </p>

            <h1 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Consignar é o que está a dar!
            </h1>

            <p className="max-w-3xl mx-auto mt-5 text-xl text-gray-500">
                Encontra uma entidade e "doa" 0,5% do teu IRS. Fonte:{' '}
                <a
                    href="https://www.portaldasfinancas.gov.pt/"
                    target="_blank"
                    // https://tailwind-elements.com/docs/standard/components/link/#underline_on_hover
                    className="underline transition duration-300 decoration-transparent hover:decoration-inherit"
                >
                    Portal das Finanças
                </a>
                .
            </p>
        </header>
    );
}

export default Header;
