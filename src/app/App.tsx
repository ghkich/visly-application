import './App.css'

import React, { useState } from 'react'

import Select from './components/Select'
import TabNav from './components/TabNav'
import LoginApi from './tabs/login/Api'
import LoginAssets from './tabs/login/Assets'
import LoginEffects from './tabs/login/Effects'
import LoginTypes from './tabs/login/types'
import LoginUi from './tabs/login/Ui'
import RegisterApi from './tabs/register/Api'
import RegisterAssets from './tabs/register/Assets'
import RegisterEffects from './tabs/register/Effects'
import RegisterTypes from './tabs/register/Types'
import RegisterUi from './tabs/register/Ui'

type TabId = 'assets' | 'ui' | 'effects' | 'types' | 'api'

interface Tab {
  id: TabId
  label: string
}

const App = () => {
  const [selectedScreen, setSelectedScreen] = useState('login')
  const [activeTab, setActiveTab] = useState<TabId>('ui')

  const tabs: Tab[] = [
    {id: 'assets', label: 'Assets'},
    {id: 'ui', label: 'UI'},
    {id: 'effects', label: 'Effects'},
    {id: 'types', label: 'Types'},
    {id: 'api', label: 'API'},
  ]

  return (
    <div className="text-gray-700">
      <div className="bg-white border-t border-gray-200 py-4 sm:py-3 px-8 sm:px-20">
        <div className="sm:flex sm:justify-between">
          <Select
            value={selectedScreen}
            onChange={(e) => setSelectedScreen(e.target.value)}
            className="w-full sm:w-32 sm:mr-2"
          >
            <option value="login">Login</option>
            <option value="register">Register</option>
            <option value="" disabled>
              Add new route
            </option>
          </Select>
          <hr className="my-3 sm:hidden" />
          <TabNav
            tabs={tabs}
            activeTab={activeTab}
            onActiveTabChange={(tab: TabId) => setActiveTab(tab)}
          />
        </div>
      </div>
      <div
        className={`bg-gray-200 border-b border-t border-gray-300 ${
          activeTab === 'ui' ? '' : 'py-8 px-8 sm:px-20'
        }`}
      >
        {selectedScreen === 'login' && (
          <>
            {activeTab === 'assets' && <LoginAssets />}
            {activeTab === 'ui' && <LoginUi />}
            {activeTab === 'effects' && <LoginEffects />}
            {activeTab === 'types' && <LoginTypes />}
            {activeTab === 'api' && <LoginApi />}
          </>
        )}
        {selectedScreen === 'register' && (
          <>
            {activeTab === 'assets' && <RegisterAssets />}
            {activeTab === 'ui' && <RegisterUi />}
            {activeTab === 'effects' && <RegisterEffects />}
            {activeTab === 'types' && <RegisterTypes />}
            {activeTab === 'api' && <RegisterApi />}
          </>
        )}
      </div>
    </div>
  )
}

export default App
