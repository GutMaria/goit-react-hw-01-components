import getRandomHexColor from './randomColor';
import PropTypes from 'prop-types';
import css from './statistics.module.css';


const Statistics = ({ title, stats=[] }) => {
  const elements = stats.map(item => {
    return <li style={{ backgroundColor: getRandomHexColor() }}
      key={item.id} className={css.item} >
      <span className="label">{item.label} </span>
      <span className="percentage">{item.percentage}%</span>
    </li>
  });

  return (<section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
    
    <ul className={css.statList}>
      {elements}
  </ul>
</section>)
}


export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf( PropTypes.shape({
    id:PropTypes.string,
    label:PropTypes.string,
    percentage: PropTypes.number,
  })),
}

