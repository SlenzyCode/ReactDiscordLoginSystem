import { url } from "../config.json";

const Home = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <a href={url} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Giriş Yap
            </a>
        </div>
    );
};

export default Home;