import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({ 
      transactions: [
        {
          id: 1,
          title: 'Freelancer website',
          type: 'deposit',
          amount: 6000,
          category: 'Dev',
          createdAt: new Date('2023-02-12 09:00:00')
        },

        {
          id: 2,
          title: 'Aluguel',
          type: 'withdrawn',
          category:'Moradia',
          amount: 1200,
          createdAt: new Date('2023-02-17 11:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)

    })
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
