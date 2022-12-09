import React from 'react';
import logo from './logo.svg';
import './App.css';
import DynamicTable from './components/DynamicTable';

function App() {
  const data: DynamicTableDataEntry[] = [
    {
      name: 'dave',
      age: 24,
    },{
      name: 'andy',
      age: 25,
    },{
      name: 'charlie',
      age: 23,
    },{
      name: 'boris',
      age: 22,
    }
  ];
  return (
    <div className="App">
      <DynamicTable data={data} />
    </div>
  );
}

export default App;
