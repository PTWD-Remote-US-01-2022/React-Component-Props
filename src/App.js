import './App.css';
import Navbar from './components/Navbar';
import Greetings from './components/Greetings';
import Greetings2 from './components/Greetings2';

//Function Component - *Preferred
const App = () => {
  return (
    <div className={'App'}>
      <Navbar />
      {/* Add url props */}
      <Greetings name={'React'} color={'#61dafb'} />
      <Greetings name={'JavaScript'} color={'Yellow'} />
      <Greetings name={'MongoDB'} color={'green'} />
      <Greetings2
        greetingInfo={{
          name: 'Python',
          color: 'blue',
          url: 'https://www.python.org/',
        }}
      />
    </div>
  );
};

export default App;

//Class Component - Old way
// import React from 'react';

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2> App - class component </h2>
//       </div>
//     );
//   }
// }

// export default App;
