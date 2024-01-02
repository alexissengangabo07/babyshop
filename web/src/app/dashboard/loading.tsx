const Loading = () => {
    return <>
        <div className="h-[100vh] relative opacity-90">
            <div className="absolute top-[10%] left-[50%] border-gray-300 h-10 w-10 animate-spin rounded-full border-4 border-t-blue-500"></div>
        </div>
    </>
}

export default Loading;