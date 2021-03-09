import NamePet from '../components/NamePet';
import { connect } from 'react-redux';
import { actionSetName } from '../redux/actions';


const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (NamePet) => {
            dispatch(actionSetName(NamePet));
        },
    };
};
export default connect(null, mapDispatchToProps)(NamePet);