import { Link } from 'react-router-dom';
import transferImg from '@/assets/images/train_chien_woman.png';
import busTimeImg from '@/assets/images/smartphone_map_app_man.png';
import Button from '@/components/atom/Button/Button';
import './CardItem.css';

function CardItem({ card }) {
  const { content, subContent, buttonLabel, buttonLink } = card;

  return (
    <li className="card-item">
      <div className="card-img-container">
        <img
          src={buttonLink === '/bus' ? busTimeImg : transferImg}
          alt="밀비스 페이지 이동 설명 이미지"
        />
      </div>
      <div className="card-text-content-container">
        <div className="card-content-text">{content}</div>
        <div className="card-sub-content-text">{subContent}</div>
      </div>
      <div className="card-item-button-container">
        <Link to={buttonLink}>
          <Button styleType="primary">
            <div className="button-label">{buttonLabel}</div>
          </Button>
        </Link>
      </div>
    </li>
  );
}

export default CardItem;
