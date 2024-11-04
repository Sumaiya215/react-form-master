
import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import RefForm from './components/RefForm/RefForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

// import HookForm from "./components/HookForm/HookForm"

function App() {
  
//   const handleSignUpSubmit = data => {
//    console.log('sign up data',data);
// }

// const handleUpdateProfile = data => {
//   console.log('update profile',data);
// }

  return (
    <>
     
      <h1> React Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm 
      formTitle={'Sign UP'} 
      handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up</p>
        </div>
      </ReusableForm>
      <ReusableForm 
      formTitle={'Profile Update'} 
      handleSubmit={handleUpdateProfile} 
      submitBtnText={'Update'}>
        <div>
            <h2>Update Profile</h2>
            <p>Always keep your profile updated</p>
        </div>
      </ReusableForm> */}
    </>
  )
}

export default App
