import Link from "next/link";

export default function Home() {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(images/smct-building.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center">
                <div className="bg-white bg-opacity-75 p-8 rounded-lg text-center">
                    <h1 className="text-4xl font-bold mb-8 text-[rgb(0,79,127)]">Ticketing Portal</h1>
                    <div className="flex space-x-4">
                        <Link href="https://ticketing-sql.smctgroup.ph">
                        <button className="w-60 h-20 text-2xl font-bold bg-blue-500 text-white rounded hover:bg-blue-700">SQL</button>
                        </Link>
                        <Link href="https://ticketing-netsuite.smctgroup.ph">
                        <button className="w-60 h-20 text-2xl font-bold text-white rounded bg-[rgb(0,79,127)] hover:bg-sky-700">NetSuite</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
