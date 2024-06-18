import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Staking from "../component/Staking/Staking"

function ProjectRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Staking />} />
            </Routes>
        </Router>
    )
}

export default ProjectRouter