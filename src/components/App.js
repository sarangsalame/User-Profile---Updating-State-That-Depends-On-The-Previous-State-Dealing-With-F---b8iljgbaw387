import React from 'react'
import '../styles/App.css';
import { UserProfile } from './UserProfile';

const UserContext = React.createContext();
const App = () => {

  return (
    <div id="main">
      <data.provider value={name:"Newton", age:3}>
        <UserProfile />
      </data.provider>
    </div>
  )
}


export default App;
export {UserContext}
