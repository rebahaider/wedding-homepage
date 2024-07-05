import planningImg from "../../../assets/images/footer/planning-bg.png";

const Planning = () => {
    return (
        <div>
            <div className=" text-white text-center bg-no-repeat bg-cover h-[370px] flex items-center justify-center" style={{ backgroundImage: `url(${planningImg})` }}>
                <div className="space-y-4">
                    <h1 className="text-2xl font-bold">Start Planning Your Dream Event Today!</h1>
                    <p> Whether it's a wedding, corporate gala, or special celebration, we're here to help you with our AI every step of the way.</p>
                    <button className="text-[#B32134] bg-white px-10 py-4 font-bold  rounded-lg">Signup for free</button> 
                </div>
            </div>
        </div>
    );
};

export default Planning;