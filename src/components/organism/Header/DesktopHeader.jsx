import HeaderLogo from '@/components/molucule/HeaderLogo/HeaderLogo';
import { Link } from 'react-router-dom';

function DesktopHeader() {
  const pages = [
    { name: '열차 환승 시간표', path: '/train' },
    { name: '기존 시간표', path: '/bus' },
  ];

  return (
    <div className="desktop-header-container">
      <div className="desktop-logo-container">
        <HeaderLogo />
      </div>
      <div className="desktop-navbar">
        {pages.map(({ name, path }) => (
          <div
            key={name}
            className="desktop-navbar__item"
          >
            <Link
              to={path}
              style={{
                textDecoration: 'none',
                color: 'white',
              }}
            >
              <span>{name}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesktopHeader;
