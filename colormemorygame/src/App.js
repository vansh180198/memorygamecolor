import './App.css';
import Colorgame from './Colorgame';
const data = [
  { color: "#FADADD",status:false,id:1 }, // Baby Pink
  { color: "#B8E0D2",status:false,id:5  }, // Mint Green
  { color: "#E6E6FA",status:false,id:2  }, // Lavender
  { color: "#FFDAB9",status:false,id:3  }, // Peach Puff
  { color: "#B0E0E6",status:false,id:4  }, // Sky Blue
  { color: "#FFFACD",status:false,id:6  },  // Soft Yellow
  { color: "#FADADD",status:false,id:7  }, // Baby Pink
  { color: "#B8E0D2",status:false,id:8  }, // Mint Green
  { color: "#E6E6FA",status:false,id:9  }, // Lavender
  { color: "#FFDAB9",status:false,id:10  }, // Peach Puff
  { color: "#B0E0E6",status:false,id:11  }, // Sky Blue
  { color: "#FFFACD",status:false ,id:12 }  // Soft Yellow
  
];

function App() {
  return (
    <div className="App">
    <Colorgame colors={data}/>
    </div>
  );
}

export default App;
