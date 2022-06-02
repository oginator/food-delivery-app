import { useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";
import Logout from "../images/logout.png";

export default function Header(props) {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    }

    return (
        <div className="header">
            <div className="logo">
                <img src={Logo} width={30} />
                <span>
                    {
                        props.title
                            ?
                                props.title
                            :
                                "Food Delivery"
                    }
                </span>
            </div>
            <div className="logout">
                <span className="cursor-pointer" onClick={logout}>
                    <img width={30} src={Logout} alt="Logout" />
                </span>
            </div>
        </div>
    );
}