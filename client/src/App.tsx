import axios from 'axios'
import Button from './components/ui/Button'

function App() {

    const testRequests = async () => {
        const response = await axios.post('/api/v1/auth/register', {
            name: 'aldo',
        })
        console.log(response)
    }
    return (
        <>
            <Button onClick={testRequests} />
        </>
    )
}

export default App
