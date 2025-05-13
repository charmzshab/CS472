
import './App.css'
import { useState } from 'react';
import Son from './Components/Son'

function App() {
  // const [state, setState] = useState({ count: 0 });

  // const handleClick = () => {
  //   // setState({ count: state.count + 1 });
  //   // setState({ count: state.count + 1 });
  //   // setState({ count: state.count + 1 }); // the last one wins

  //   // setState(prev => ({ count: prev.count + 1 }));
  //   // setState(prev => ({ count: prev.count + 1 }));
  //   // setState(prev => ({ count: prev.count + 1 }));
  // };

  const name = "Anna";

  return (
    <div>
      <Son name={name} age={20} isTrue={false} list={['React', 'Angular']}
        obj={{ name: 'Jack' }} cb={() => console.log(123)}
        child={<span>this is a span child</span>} >

        <div>It is from Parent</div>
        <div>Another div from parent</div>

      </Son>

      {/* {state.count}
      {/*  // after first click, you will see 1 */}
      {/* <button onClick={handleClick}>Change State</button> */}
      {/* <Counter /> */}



    </div >
  );
}









export default App
