import './App.css'
import MessagesComponent from './components/messages/messages.component'
import FormComponent from './components/form/form.component'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <FormComponent />
      <MessagesComponent />
    </QueryClientProvider>
  )
}

export default App
