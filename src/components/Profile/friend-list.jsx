export const FriendList = ({friends}) =>
{
    return (
        <ul class="friend-list">
            {friends.map(friend =>
            <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}/>)}
        </ul>
    )
}

const FriendListItem = ({avatar, name, isOnline}) =>{
return (
    <FriendListItem>
        <li class="item">
            <span class="status"></span>
            <img class="avatar"  src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </li>
    </FriendListItem>
)}