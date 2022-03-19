
import React, {useState} from "react";
import "./App.css"
import Axios from "axios"; //allows you to make request to any endpoint

const AxiosReactTutorial = () => {

    const [dogPic, setDogPic] = useState("https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_878.jpg");

    const getDogPic = () => {
        Axios.get("https://dog.ceo/api/breeds/image/random")
        .then((res)=>{
            //console.log(res)
            setDogPic(res.data.message)
        })
    }

    return (
        <div>
            <button onClick={getDogPic}>Get Dog Image</button>
            <p><img src={dogPic} width={500} height={400}/></p>
        </div>
    )
}

function App() {
  return (
    <div className="App">
      <AxiosReactTutorial/> 
    </div>
  );
}

export default App;