import { Badge, Button, Card } from 'flowbite-react';
import data from './data.json';

// https://flowbite-react.com/
// https://github.com/themesberg/flowbite-react/blob/main/src/docs/pages/CardPage.tsx
function App() {
    // https://tailwindcss.com/docs/space#add-horizontal-space-between-children
    // https://flowbite.com/docs/customize/colors/
    return (
        <div>
            <h1>Consignar é o que está a dar!</h1>
            {/* <h1>Consignar é o que está a doar!</h1> */}

            <div className="max-w-2xl">
                <div className="flex flex-col gap-4">
                    {data.map((datum) => (
                        <Card key={datum.NIPC}>
                            <div className="flex flex-wrap gap-2">
                                <Badge color="gray">{datum.LOCALIDADE}</Badge>
                                <Badge color="gray">{datum.NIPC}</Badge>
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
            </div>
        </div>
    );
}

export default App;
