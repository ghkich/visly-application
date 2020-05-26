import React from 'react'

interface Tab {
  id: string
  label: string
}

interface TabNavProps {
  tabs: Tab[]
  activeTab: string
  onActiveTabChange: (tabId: string) => void
}

const TabNav: React.FC<TabNavProps> = ({
  tabs,
  activeTab,
  onActiveTabChange,
}) => {
  return (
    <ul className="flex">
      {tabs.map((tab, index) => (
        <li className={`flex-1 ${tabs.length - 1 > index ? 'mr-2' : ''}`}>
          <button
            key={tab.id}
            type="button"
            className={`tab-nav w-full ${tab.id === activeTab ? 'active' : ''}`}
            onClick={() => onActiveTabChange(tab.id)}
            onMouseDown={(e) => e.preventDefault()}
          >
            {tab.label}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TabNav
