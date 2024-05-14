import loading from '/loading.gif';

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-40'>
            <img src={loading} alt='Loading' className='w-12 h-12' />
        </div>
    );
};

export default Loading;
