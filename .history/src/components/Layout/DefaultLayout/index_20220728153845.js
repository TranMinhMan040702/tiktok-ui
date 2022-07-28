import Header from './Header';
import Sidebar from './Sidebar';

function Default() {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content"></div>
            </div>
        </div>
    );
}

export default Default;
