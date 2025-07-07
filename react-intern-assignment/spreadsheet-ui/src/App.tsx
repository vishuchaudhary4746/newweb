import { useState } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import Spreadsheet from './components/Spreadsheet';
import 'tailwindcss/tailwind.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('Sheet 1');

  return (
    <div className="font-inter text-sm text-gray-800 h-screen flex flex-col bg-gray-50">
      <Header />
      <Tabs activeTab={activeTab} onChange={setActiveTab} />
      <div className="flex-1 overflow-hidden p-4">
        <Spreadsheet key={activeTab} />
      </div>
    </div>
  );
}
