import Kitchen from '../Kitchen/Kitchen.jsx'
import LivingRoom from '../LivingRoom/LivingRoom.jsx';
import Bedroom1 from '../Bedroom/Bedroom1.jsx';
import Bedroom2 from '../Bedroom/Bedroom2.jsx';
import Bedroom3 from '../Bedroom/Bedroom3.jsx';
import FullBath from '../Bath/FullBath.jsx';
import HalfBath from '../Bath/HalfBath.jsx';


const FloorPlan = () => {
    return (
        <>
        <div>
            <Bedroom1 />
            <Kitchen />
            <FullBath />
            <Bedroom2 />
            <LivingRoom />
            <HalfBath />
            <Bedroom3 />
        </div>
        </>
    );
};

export default FloorPlan;