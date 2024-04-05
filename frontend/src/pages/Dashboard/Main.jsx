import { useUser } from '../../context/UserContext';

const Main = () => {
    const { User } = useUser();
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            {User ? (
                <span className='text-white text-lg'>Hoşgeldin {User.username}</span>
            ) : (
                <span className='text-white text-lg'>Yükleniyor...</span>
            )}
        </div>
    );
};

export default Main;