import { useSelector } from "react-redux";

// styles
import "./Loader.scss";

const Loader = () => {
    const loader = useSelector(state => state.app.loader);

    return (
        <div className={'loader-container flex flex-center ' + `${loader.isActive ? 'active' : 'hidden'}`}>
            <div className="loader flex flex-center">
                <h1>{ loader.text || 'Loading...' }</h1>
            </div>
        </div>
    )
}

export default Loader;