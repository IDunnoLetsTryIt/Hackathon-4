import MainContent from "./MainContent";
import Navigation from "./Navigation";

export default function Homepage() {

    return (
        <div className="Homepage">

            <h1>Welcome</h1>

            <Navigation/>

            <MainContent/>

            <Footer/>

        </div>
    )
}