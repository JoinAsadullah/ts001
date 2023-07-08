
const Loader: React.FC = () => {
    return(
        <div className='fixed top-0 left-0 w-screen h-screen bg-[#000] flex justify-center items-center z-50'>
                <img alt="loader animation" className="w-[200px] h-[200px]" src="/assets/loader.svg"/>
        </div>
    )
}


export default Loader;