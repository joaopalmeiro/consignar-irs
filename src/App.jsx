import { Badge, Button, Card, TextInput } from 'flowbite-react';
import Fuse from 'fuse.js';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { useCopyClipboard } from 'react-recipes';
import { SEARCH_BOX_ID, SEARCH_LABEL } from './constants';
import data from './data.json';
import Header from './Header';
import ScrollToTop from './ScrollToTop';
import { chunkify, getNumberResults } from './utils';

// https://flowbite-react.com/
// https://github.com/themesberg/flowbite-react/blob/main/src/docs/pages/CardPage.tsx
function App() {
    const [searchResults, setSearchResults] = useState(null);

    // https://github.com/craig1123/react-recipes/blob/master/docs/useCopyClipboard.md
    // https://github.com/craig1123/react-recipes/blob/master/src/useCopyClipboard.js
    const [copiedValue, setCopiedValue] = useState(null);
    const [isCopied, setIsCopied] = useCopyClipboard();

    // https://fusejs.io/api/options.html
    const fuse = new Fuse(data, {
        keys: ['NOME', 'LOCALIDADE'],
        threshold: 0.3 // Default: 0.6
    });

    // https://tailwindcss.com/docs/space#add-horizontal-space-between-children
    // https://flowbite.com/docs/customize/colors/
    // https://blog.azagatti.dev/layout/
    // https://devdojo.com/tails/v1/app
    return (
        <>
            {/* Container */}
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <Header />

                <main>
                    {/* https://blog.logrocket.com/fuse-js-dynamic-search-react-app/ */}
                    {/* https://github.com/dguo/react-with-fuse-demo */}
                    {/* https://github.com/colbyfayock/my-futurama-characters/blob/master/src/App.js */}

                    {/* https://flowbite.com/docs/forms/search-input/ (Simple search input) */}
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();

                            const query = event.target.elements[SEARCH_BOX_ID].value;

                            setSearchResults(fuse.search(query));
                        }}
                        // https://tailwindcss.com/docs/screens
                        className="flex flex-col items-center max-w-xl gap-2 mx-auto sm:flex-row"
                    >
                        <label htmlFor={SEARCH_BOX_ID} className="sr-only">
                            {SEARCH_LABEL}
                        </label>

                        {/* https://github.com/themesberg/flowbite-react/blob/main/src/lib/components/FormControls/TextInput.tsx */}
                        <div className="w-full">
                            <TextInput
                                // type="search"
                                type="text"
                                placeholder="Nome ou localidade"
                                required
                                id={SEARCH_BOX_ID}
                                icon={Search}
                            />
                        </div>

                        <Button type="submit" gradientMonochrome="info">
                            {SEARCH_LABEL}
                        </Button>
                    </form>

                    {searchResults && (
                        <p className="mt-10 text-base text-center text-gray-500 sm:mt-12">
                            {getNumberResults(searchResults.length)}
                        </p>
                    )}

                    {searchResults && (
                        // <div className="flex flex-col gap-4 mt-4">
                        <div className="grid grid-cols-1 gap-4 mt-2 md:grid-cols-2">
                            {searchResults.map((datum) => (
                                <Card key={datum.item.NIPC}>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge color="gray">{datum.item.LOCALIDADE}</Badge>
                                        <Badge
                                            color={
                                                datum.item.NIPC === copiedValue ? 'success' : 'gray'
                                            }
                                        >
                                            {chunkify(datum.item.NIPC.toString(), 3)}
                                        </Badge>
                                    </div>

                                    <p className="mb-4 text-lg font-normal text-gray-900">
                                        {datum.item.NOME}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        <Button
                                            size="sm"
                                            color="light"
                                            href={`https://www.google.pt/search?q=${datum.item.NOME}`}
                                            target="_blank"
                                        >
                                            Pesquisar no Google
                                        </Button>
                                        <Button
                                            size="sm"
                                            gradientDuoTone="cyanToBlue"
                                            onClick={() => {
                                                setCopiedValue(datum.item.NIPC);
                                                setIsCopied(datum.item.NIPC);
                                            }}
                                        >
                                            {isCopied && copiedValue === datum.item.NIPC
                                                ? 'Copiado'
                                                : ' Copiar NIF'}
                                        </Button>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    )}
                </main>
            </div>

            <ScrollToTop />
        </>
    );
}

export default App;
