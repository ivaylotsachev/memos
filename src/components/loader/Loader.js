import { useSelector } from "react-redux";
// styles
import "./Loader.scss";

const Loader = () => {
    const loader = useSelector((state) => state.app.loader);

    return (
        <div
            className={`loader-container flex flex-center ${
                loader.isActive ? "" : "hidden"
            }`}
        >
            <div className='loader flex flex-center flex-column'>
                <div className='lds-roller'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h1 className='mt-3'>Loading</h1>
            </div>
        </div>
    );
};

export default Loader;
