import React from "react"
import '../App.css';
import Header from "../components/header";
import Footer from "../components/footer";
import TruckBoxes from "../components/truckBoxes";
import RecentlyAdded from "../components/recentlyAdded";

const Trucks = () => {
    return(
        <div className="Homepage">
            <Header />
            <div className="hp">
                <TruckBoxes />
                <RecentlyAdded />
            </div>
            <Footer />
        </div>
    )
} 



export default Trucks