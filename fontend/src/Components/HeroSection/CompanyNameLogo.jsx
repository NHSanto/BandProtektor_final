
import GoogleLogo from "../../Assets/Frame 9.png";

function CompanyNameLogo() {
    return (
        <>
           <div className="mx-auto max-w-screen-xl px-4 lg:flex lg:items-center">
                <div className="mx-auto max-w-xl text-center">
                    <div className="flex flex-wrap justify-center mt-2 gap-3">
                        <p className="text-[42px] text-white">Company Name Google</p>
                        <img className="w-10 h-10 mt-5" src={GoogleLogo}/>
                    </div>
                </div>
            </div>
        </>


    );
}
export default CompanyNameLogo;