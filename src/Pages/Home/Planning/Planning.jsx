import planningImg from "../../../assets/images/footer/planning-bg.png";

const Planning = () => {
    return (
        <div>
            <div className="relative text-white text-center">
                <img src={planningImg} alt="" />
                <div className="absolute top-1/2 left-1/2 transf -translate-x-1/2 -translate-y-1/2 space-y-4">
                    <h1 className="text-2xl font-bold">Start Planning Your Dream Event Today!</h1>
                    <p> Whether it's a wedding, corporate gala, or special celebration, we're here to help you with our AI every step of the way.</p>
                    <button className="text-[#B32134] bg-white px-10 py-4 font-bold  rounded-lg">Signup for free</button> 
                </div>
            </div>
        </div>
    );
};

export default Planning;