import { Oval } from 'react-loader-spinner';
import './Loading.css';

function Loading() {
  return (
    <div className="loading-deembackground">
      <div className="loading-spinner">
        <Oval
          height={60}
          width={60}
          color="#aaaaaa"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#cccccc"
          strokeWidth={4}
          strokeWidthSecondary={4}
        />
      </div>
    </div>
  );
}

export default Loading;
