import './home.css';
import View_all_parking_video from "./view_all_parking_video";
import Parking_capacity from "./parking_capacity";
import View_all_parking from "./view_all_parking";
import Unusual_stops from "./unusual_stops";

const Home = () => {
    return (
        <div>
            <div className="row mb-4">
                {/* view all parking image */}
                <View_all_parking/>
                {/* Unusual_stops car or man */}
                <Unusual_stops/>
            </div>
            <div className="row mb-4">
                {/* parking capacity chart */}
                <Parking_capacity/>
                {/* view all parking video car */}
                <View_all_parking_video/>
            </div>
        </div>
    )
}

export default Home