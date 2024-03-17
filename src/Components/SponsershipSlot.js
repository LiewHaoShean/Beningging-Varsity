import hilti_logo from '../images/hilti_logo.jpeg';
import intel_logo from '../images/intel_logo.jpeg';

function SponserShip() {
    return (
        <div className="bg-red-100 h-72">
            <div className="flex flex-col flex-wrap content-center px-10 py-16 justify-center ">
                <div className="w-full text-center h-20 pt-4 font-bold italic text-4xl">Our Collaborators</div>
                <div className="w-full text-center h-20 flex flex-row justify-between content-center px-20">
                    <img src={hilti_logo}></img>
                    <img src="https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg" alt="Samsung logo" width="101" loading="lazy"></img>
                    <img src={intel_logo}></img>
                    <img src="https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg" alt="Volkswagen logo" width="70" height="70" loading="lazy"></img>
                    <img src="https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg" alt="Cisco logo" width="87" height="70" loading="lazy"></img>
                </div>
            </div>
        </div>
    )
}

export default SponserShip;