import React from "react"
import { Navigate } from "react-router-dom"

const Register = () => {
    const [id,setId]=useState("")
    const [password, setPassword]=useState("")
    const [name,setName]=useState("")
    const [response, setResponse]=useState("")
    const navigate=Navigate()
}

const onClick=async(e)=>{
    e.preventDefalut(
        try{
            const res=await axios.post}
        }
    )
)
//cors 공부합시다^^
  return (
    <div>
      <h1>회원가입</h1>
      <form>
        <label>
          이름
          <input />
        </label>
        <label>
          아이디
          <input />
        </label>
        <label>
          비밀번호
          <input />
        </label>
        <button>등록</button>
      </form>
      {/* {response && <p>{response.data.message}</p>}
      {response && response.status === 200 && (
        <button onClick={onClick}>로그인 페이지로 이동</button>
      )} */}
    </div>

  )
}

export default Register;

