import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Layout() {
    return (
        <>
            <Navbar /> {/* Always visible at top */}
            <Outlet /> {/* Child page renders HERE */}
            {/* <Footer /> would go here too */}
        </>
    );
}
export default Layout;