import './App.css'
import Content from './Components/Content'
import SplineViewer from './Components/Background3D'

function TODO(){
  console.log("TODO list")
  
  return(
    <>
    <div className="App">
            <SplineViewer url="https://prod.spline.design/2o2qfPf2Rx9z1B4F/scene.splinecode" />
            <div className="content">
            <div className='Container'>
    <h1>TODO LIST</h1>
    <Content className="content"></Content>
    </div>
            </div>
        </div>
    </>
 )
}

export default TODO