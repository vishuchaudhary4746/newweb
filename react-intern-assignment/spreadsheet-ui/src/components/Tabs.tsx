interface TabsProps {
  activeTab: string;
  onChange: (tab: string) => void;
}

export default function Tabs({ activeTab, onChange }: TabsProps) {
  const tabs = ['Sheet 1', 'Sheet 2', 'Sheet 3'];

  return (
    <nav className="flex bg-gray-100 border-b border-gray-200 text-sm font-medium">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => {
            onChange(tab);
            console.log(`Switched to ${tab}`);
          }}
          className={\`px-4 py-2 -mb-px border-b-2 transition-colors \${activeTab === tab
            ? 'border-indigo-500 text-indigo-600 bg-white'
            : 'border-transparent text-gray-600 hover:text-indigo-500'}\`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
