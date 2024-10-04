import './Header.css';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

const Header = () => {
  return (
    <header className="header">
      <div className="header--mobile">
        <MobileHeader />
      </div>
      <div className="header--desktop">
        <DesktopHeader />
      </div>
    </header>
  );
};
export default Header;
