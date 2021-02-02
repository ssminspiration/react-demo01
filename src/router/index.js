import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '@/views/Home'
import Detail from '@/views/Detail';
const router = () => (
    <Router>
        <Switch>
            <Route path="/detail" component={Detail}></Route>
            <Route path="/" component={Home}></Route>
        </Switch>
    </Router>
)

export default router;