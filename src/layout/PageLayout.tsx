import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './style.less';
const PageLayout = () => {
    return (
        <div className='page-layout'>
            <div className='page-layout-header'>
                <Header />
            </div>
            <div className='page-layout-main'>
                <Outlet />
            </div>
            <div className='page-layout-footer'>
                <Footer />
            </div>
        </div>

    )
}
export default PageLayout;