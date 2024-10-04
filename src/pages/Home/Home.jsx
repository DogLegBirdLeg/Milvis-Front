import 'styles/main-page/main-page.css';
import { SLIDE_INFO } from 'constants/Constant';
import CardItem from './components/CardList/main';

const Home = () => {
  const { DETAILS } = SLIDE_INFO;

  return (
    <div className="main-page">
      <ul className="main-page__slide-list">
        {DETAILS.map((e, i) => {
          return (
            <CardItem
              key={i}
              type={e.type}
              link={e.link}
              content={e.content}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
