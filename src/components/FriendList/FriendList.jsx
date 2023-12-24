import PropTypes from 'prop-types';
import css from './friendList.module.css';
import FriendListItem from './FriendListItem'

const FriendList = ({ friends }) => {
  const friendsCards = friends.map(friend => { return < FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/> })

  return <ul className={css.friendList}>
    {friendsCards}
</ul>
}

export default FriendList 

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape)
}