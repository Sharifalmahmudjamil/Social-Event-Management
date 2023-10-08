import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="font-poppins  mx-auto">
            <Outlet ></Outlet>
        </div>
    );
};

export default Root;