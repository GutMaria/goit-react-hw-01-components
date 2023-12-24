import OneTransaction from './OneTransaction';
import css from './transactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items=[] }) => {
const tablelRows = items.map(item => { return <OneTransaction key={item.id} type={item.type} amount={item.amount} currency={item.currency} /> })


  return (<table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    <tbody>
      {tablelRows}
    </tbody>
</table>)
}

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape)
}