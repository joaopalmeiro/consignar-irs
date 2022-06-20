import { Badge, Button, Card } from 'flowbite-react';
import data from './data.json';
import Header from './Header';
import { chunkify } from './utils';

// https://flowbite-react.com/
// https://github.com/themesberg/flowbite-react/blob/main/src/docs/pages/CardPage.tsx
function App() {
    // https://tailwindcss.com/docs/space#add-horizontal-space-between-children
    // https://flowbite.com/docs/customize/colors/
    // https://blog.azagatti.dev/layout/
    return (
        // Container
        <div className="max-w-2xl">
            <Header />

            <main>
                <div className="flex flex-col gap-4">
                    {data.map((datum) => (
                        <Card key={datum.NIPC}>
                            <div className="flex flex-wrap gap-2">
                                <Badge color="gray">{datum.LOCALIDADE}</Badge>
                                <Badge color="gray">{chunkify(datum.NIPC.toString(), 3)}</Badge>
                            </div>

                            <p className="mb-4 text-lg font-normal text-gray-900 dark:text-white">
                                {datum.NOME}
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <Button
                                    size="sm"
                                    color="light"
                                    href={`https://www.google.pt/search?q=${datum.NOME}`}
                                    target="_blank"
                                >
                                    Pesquisar no Google
                                </Button>
                                <Button size="sm" gradientDuoTone="cyanToBlue">
                                    Copiar NIF
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default App;
