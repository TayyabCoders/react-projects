import React,{useContext,useState} from 'react'
import UserContext from './context/UserContext'

const Login = () => {
    const [username, setUsername]:any = useState('')
    const [password, setPassword]:any = useState('')
    const {setUser}:any = useContext(UserContext)

    const handleSubmit = (e:any) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <>
    <h1>Login</h1>
    <input type="text" 
    placeholder='username'
    value={username}
    onChange={(e)=>{setUsername(e.target.value)}}
    />
    <input type="text" 
    placeholder='password'
    value={password}
    onChange={(e)=>(setPassword(e.target.value))}
    />
    <button onClick={handleSubmit}>Submit</button>

    </>
    
  )
}

export default Login