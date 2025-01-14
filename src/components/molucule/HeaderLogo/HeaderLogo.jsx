import Button from '@/components/atom/Button/Button';
import { Link } from 'react-router-dom';
import './HeaderLogo.css';

const HeaderLogo = () => {
  return (
    <Button styleType="default">
      <div className="header-logo">
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: 'white',
          }}
        >
          <span>Milvis</span>
        </Link>
      </div>
    </Button>
  );
};

export default HeaderLogo;
