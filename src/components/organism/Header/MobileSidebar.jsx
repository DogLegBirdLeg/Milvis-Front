import { XLg } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const MobileSidebar = ({ close }) => {
  const pages = [
    { name: '열차 환승 시간표', path: '/train' },
    { name: '기존 시간표', path: '/bus' },
  ];

  return (
    <div className="sidebar">
      <XLg
        onClick={() => close()}
        className="sidebar-list"
        size="20px"
        cursor="pointer"
      />
      {pages.map(({ name, path }) => (
        <div
          key={name}
          className="sidebar-list"
        >
          <Link
            onClick={close}
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
  );
};

export default MobileSidebar;
