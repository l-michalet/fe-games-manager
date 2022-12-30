import { BrowserRouter, Route } from 'react-router-dom'
import FormStep1 from '../FormStep1'
import FormStep2 from '../FormStep2'
import FormStep3 from '../FormStep3'
import FormStep4 from '../FormStep4'

function TournamentForm() {
    return (
        <BrowserRouter>
            <Route path='/form/' exact component={FormStep1} />
            <Route path='/form/step2' component={FormStep2} />
            <Route path='/form/step3' component={FormStep3} />
            <Route path='/form/step4' component={FormStep4} />
        </BrowserRouter>
    )
}

export default TournamentForm
