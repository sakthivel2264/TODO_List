import './App.css'
import Content from './Components/Content'

function TODO(){
  console.log("TODO list")
  
  return(
    <>
    <div className='Container'>
    <h1>TODO LIST</h1>
    <Content className="content"></Content>
    </div>
    </>
 )
}

export default TODO