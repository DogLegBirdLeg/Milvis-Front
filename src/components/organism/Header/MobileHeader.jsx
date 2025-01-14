import { useState } from 'react';
import { List as SidebarIcon } from 'react-bootstrap-icons';
import HeaderLogo from '@/components/molucule/HeaderLogo/HeaderLogo';
import MobileSidebar from './MobileSidebar';

function MobileHeader() {
  const [sidebarOpenStatus, setSidebarOpenStatus] = useState(false);

  return (
    <div className="mobile-header-container">
      <div className="mobile-logo-container">
        <HeaderLogo />
      </div>
      {sidebarOpenStatus ? (
        <MobileSidebar
          close={() => {
            setSidebarOpenStatus(false);
          }}
        />
      ) : (
        <div
          className="sidebar-icon"
          onClick={() => {
            setSidebarOpenStatus(true);
          }}
        >
          <SidebarIcon size="30px" />
        </div>
      )}
    </div>
  );
}

export default MobileHeader;
