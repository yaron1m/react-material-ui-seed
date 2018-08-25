import {connect} from "react-redux";
import {getName} from "../../store/user-info/Reducer";
import {updateName} from "../../store/user-info/Actions";
import HomePage from "./HomePage";

function mapStateToProps(state){
    return {
        name: getName(state)
    }
}

function mapDispatchToProps(dispatch){
    return {
        updateName: (newName) => dispatch(updateName(newName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);