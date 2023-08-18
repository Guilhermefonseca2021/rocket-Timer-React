import { Routes, Route } from 'react-router-dom'
import { History } from './pages/History'
import { Home } from './pages/Home'

export function Router() {
    return (
        <Routes>
            {/* prinicipal deixa so a / pq usuario interagiu com nd */}
            <Route path='/' element={<Home/>} />
            <Route path='/history' element={<History />} />
        </Routes>
    )
}