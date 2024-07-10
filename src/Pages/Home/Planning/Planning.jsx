import planningImg from "../../../assets/images/footer/planning-bg.png";

const Planning = () => {
    return (
        
            <div className=" text-white text-center bg-no-repeat bg-cover h-[330px] flex items-center justify-center px-2" style={{ backgroundImage: `url(${planningImg})` }}>
                <div className="">
                    <h1 className="text-2xl font-bold pb-4">Start Planning Your Dream Event Today!</h1>
                    <p className="lg:px-96 mx-3 md:mx-6"> Whether it's a wedding, corporate gala, or special celebration, we're here to help you with our AI every step of the way.</p>
                    <button className="text-[#B32134] bg-white mt-8 px-12 py-4 font-bold  rounded-lg">Signup for free</button> 
                </div>
            </div>
        
    );
};

export default Planning;