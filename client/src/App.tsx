import './App.css'
import PostsComponent from './components/posts/posts.component'
import FormComponent from './components/form/form.component'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <FormComponent />
      <PostsComponent />
    </QueryClientProvider>
  )
}

export default App
