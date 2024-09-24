import "/src/App.css";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/Transactionhistory";
import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

function App() {
  return (
    <>
      <div>
        <h2>Task 1 - Profile</h2>
        <Profile
          key={userData.tag}
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          stats={userData.stats}
        />
      </div>

      <div>
        <h2>Task 2 - Friend List</h2>
        <FriendList friends={friends} />
      </div>

      <div>
        <h2>Task 3 - Transaction History</h2>
        <>
          <TransactionHistory transactions={transactions} />
        </>
      </div>
    </>
  );
}

export default App;
