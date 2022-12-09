import React from 'react';
import './App.css';
import DynamicTable from './components/DynamicTable';

function App() {
  const data: DynamicTableDataEntry[] = [
    {
      id: 1,
      name: 'dave',
      age: 24,
    },{
      id: 2,
      name: 'andy',
      age: 25,
    },{
      id: 3,
      name: 'charlie',
      age: 23,
    },{
      id: 4,
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
