import Output from '../components/Output';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        activity: state.activity
    }
}

export default connect(mapStateToProps)(Output);