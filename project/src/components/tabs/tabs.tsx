import {Link} from 'react-router-dom';
import {FilmType} from '../../types/film';
import TabDetails from '../tab-details/tab-details';
import TabOverview from '../tab-overview/tab-overview';
import TabReviews from '../tab-reviews/tab-reviews';
import {useState} from 'react';

type TabsProps = {
  film: FilmType;
}

function Tabs({film}: TabsProps): JSX.Element {
  const [activeTab, changeActiveTab] = useState('#overview');

  const getTab = () => {
    switch (activeTab) {
      case '#overview':
        return <TabOverview film={film}/>;
      case '#details':
        return <TabDetails film={film}/>;
      case '#reviews':
        return <TabReviews/>;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${activeTab === '#overview' ? 'film-nav__item--active' : ''}`}>
            <Link to={'#overview'} className="ilm-nav__link" onClick={()=>changeActiveTab('#overview')}>Overview</Link>
          </li>
          <li className={`film-nav__item ${activeTab === '#details' ? 'film-nav__item--active' : ''}`}>
            <Link to={'#details'} className="film-nav__link" onClick={()=>changeActiveTab('#details')}>Details</Link>
          </li>
          <li className={`film-nav__item ${activeTab === '#reviews' ? 'film-nav__item--active' : ''}`}>
            <Link to={'#reviews'} className="film-nav__link" onClick={()=>changeActiveTab('#reviews')}>Reviews</Link>
          </li>
        </ul>
      </nav>
      {getTab()}
    </div>
  );
}

export default Tabs;
