import {connect} from "react-redux";
import {getName} from "../store/user-info/Reducer";
import {updateName} from "../store/user-info/Actions";
import HomePage from "./HomePage";
import {IState} from "../store/IState";
import {IDispatch} from "../store/ThunkInterfaces";

function mapStateToProps(state: IState){
    return {
        name: getName(state)
    }
}

function mapDispatchToProps(dispatch: IDispatch){
    return {
        updateName: (newName: string) => dispatch(updateName(newName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);