import {
  FiPlus,
  FiUpload,
  FiDownload,
  FiMoreHorizontal,
} from 'react-icons/fi';

export default function Header() {
  const btn = (
    label: string,
    Icon: React.ElementType,
    onClick: () => void,
  ) => (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-white shadow-sm hover:bg-gray-100 active:scale-95 transition">
      <Icon className="text-gray-600" />
      {label}
    </button>
  );

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-2 flex items-center gap-2 shadow-sm">
      {btn('New', FiPlus, () => console.log('New clicked'))}
      {btn('Import', FiUpload, () => console.log('Import clicked'))}
      {btn('Export', FiDownload, () => console.log('Export clicked'))}
      <div className="ml-auto" />
      {btn('More', FiMoreHorizontal, () => console.log('More clicked'))}
    </header>
  );
}
