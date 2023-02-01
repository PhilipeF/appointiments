import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model
  },


  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transactions')
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
