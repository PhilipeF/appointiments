import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Desenvolvimento de Web Sites',
          amout: 'R$ 1.200,00',
          type: 'deposit',
          category: 'Sales',
          createdAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
