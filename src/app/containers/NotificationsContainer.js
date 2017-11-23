import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { } from '../actions/notifications';
import Notifications from '../components/Notifications';

const mapStateToProps = state => {
    return {
        notifications: state.notifications
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        // ...
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
