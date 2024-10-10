import './Main.css';
import { HOME_CARD } from '@/constants/ui';
import CardItem from './components/CardList/main';

const Main = () => {
  return (
    <div className="main-page">
      <ul className="main-page__card-list">
        {HOME_CARD.map(({ id, link, content }) => {
          return (
            <CardItem
              key={id}
              type={id}
              link={link}
              content={content}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Main;
