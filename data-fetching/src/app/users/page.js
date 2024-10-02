import axios from 'axios'
import { resolve } from 'styled-jsx/css';
const UsersPage = async () => {
    await new Promise(resolve => setTimeout(resolve,2000))
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users123')
    console.log(data,"new Data")
  return (
    <div>
      {data.map(user => (
        <div>
            This is {user?.name} And This is his username:{user?.username}
        </div>
      ))}
    </div>
  )
};

export default UsersPage;
