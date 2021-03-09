import Activity from '../components/Activity';
import { connect } from 'react-redux';



const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch(Activity())
        }
    }
}


export default connect(null, mapDispatchToProps)(Activity);