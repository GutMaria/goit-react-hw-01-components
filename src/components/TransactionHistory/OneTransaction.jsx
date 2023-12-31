import PropTypes from 'prop-types';

const OneTransaction = ({ type, amount, currency }) => {
  return <tr>
        <td>{type}</td>
      <td>{amount}</td>
        <td>{currency}</td>
    </tr>
}

export default OneTransaction;

OneTransaction.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string
}