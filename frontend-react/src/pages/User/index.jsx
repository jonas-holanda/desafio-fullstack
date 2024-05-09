import { Outlet } from "react-router-dom";


export default function User() {
    return (
        <>
        <div className="container-fluid mt-5 mb-5">
            <div className="row mb-5">
                <div className="col-md-10 offset-md-1">
                    <Outlet/>
                </div>
            </div>
            
        </div>
        </>
    );
}