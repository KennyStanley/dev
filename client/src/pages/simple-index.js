import Head from 'next/head'

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">
                    welcome to{' '}
                    <a className="text-blue-600" href="#">
                        kennystanley.dev!
                    </a>
                </h1>

                <p className="mt-3 text-2xl">
                    <code className="p-3 font-mono text-2xl rounded-md">
                        explore
                    </code>
                </p>

                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    <a
                        href="https://nextjs.org/docs"
                        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="text-2xl font-bold">about &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Get to know me! <br />
                            <span className="ml-2">😊</span>
                        </p>
                    </a>

                    <a
                        href="https://nextjs.org/learn"
                        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="text-2xl font-bold">projects &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Check out what I've built! <br />
                            <span className="ml-2">💡</span>
                        </p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/master/examples"
                        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="text-2xl font-bold">tools &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Custom made automations for a range of different
                            tasks.
                        </p>
                    </a>

                    <a
                        href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="text-2xl font-bold">book &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Instantly check availabilities and book
                            appointments.
                        </p>
                    </a>
                </div>
            </main>

            <footer className="flex items-center justify-center w-full h-24 border-t">
                <a
                    className="flex items-center justify-center"
                    href="https://staging.techinect.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img
                        src="/techinect.svg"
                        alt="Techinect Logo"
                        className="h-4 ml-2"
                    />
                </a>
            </footer>
        </div>
    )
}
