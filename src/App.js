import React from 'react';

const App = () => { //関数コンポーネント
  const profiles = [
    {name: "Taro",age: 10},
    {name: "Hanako",age: 5},
    {name: "NoName"}
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )

//  return (
//    <div>
//      <User name={"Taro"} age={10}/>
//      <User name={"Hanako"} age={5}/>
//    </div>
//  )
}

const User = (props) => { //関数コンポーネント
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

User.defaultProps = {
  age: 1
}
export default App;
