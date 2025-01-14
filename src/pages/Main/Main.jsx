import './Main.css';
import { HOME_CARD } from '@/constants/ui';
import CardItem from './components/CardItem/CardItem';

const Main = () => {
  return (
    <div className="main-page">
      <div className="main-page__card-list">
        {HOME_CARD.map((card) => {
          return (
            <CardItem
              key={card.id}
              card={card}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Main;
