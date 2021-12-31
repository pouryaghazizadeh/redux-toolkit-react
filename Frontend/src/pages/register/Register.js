import React ,{useState}from 'react'

function Register() {
    const[userName,setUserName]=useState('')
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");
    // new user
const newUser = {
  userName,
  email,
  password,
  checkPassword,
};

    return (
      <main>
        <form>
          <input type="text" placeholder="userName" onChange={(e) => {setUserName(e.target.value)}} />
          <input type="text" placeholder="email" onChange={(e) => {setEmail(e.target.value)}} />
          <input type="password" placeholder="password" onChange={(e) => {setPassword(e.target.value)}} />
          <input type="password" placeholder="passwordCheck" onChange={(e) => {setCheckPassword(e.target.value)}} />
          <button>register</button>
        </form>
      </main>
    );
}

export default Register
