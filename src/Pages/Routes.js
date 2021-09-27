import { Route, Switch , Redirect} from "react-router";
import Header from "../Components/Header";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import Gallery from "./Gallery/Gallery";
import Main from "./Main/Main";


const Routes = () =>{
    return(
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/about" component={About}/>
                <Route path="/gallery" component={Gallery}/>
                <Route path="/contacts" component={Contacts}/>
                <Redirect to="/" />
            </Switch>
        </>
    )
}

export default Routes;