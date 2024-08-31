import Logo from "../assets/images/1111.png";
import "./SideBar.scss";
import CustomButton from "./CustomButton";

const SideBar = () => {
    <>
        <div className="sidebar-container">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
        </div>
        <div className="sing-out">
            <CustomButton>Sair</CustomButton>
        </div>
    </>;
};

export default SideBar;
