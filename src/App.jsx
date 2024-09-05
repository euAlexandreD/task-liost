import "./App.scss";
import Tasks from "./components/Task";

import SideBar from "./components/SideBar";

const App = () => {
    return (
        <>
            <div className="app-container">
                <SideBar />
                <Tasks/>
            </div>
        </>
    );
};

export default App;
