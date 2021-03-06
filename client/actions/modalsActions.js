import { reset } from 'redux-form';
import { TOGGLE_MODAL } from './types';
import JudgeModal from '../components/Modals/JudgeModal';
import teamModal from '../components/Modals/TeamModal';
import sponsorModal from '../components/Modals/SponsorModal';

export default (routePath, state) => (
  (dispatch) => {
    switch (routePath) {
      case '#/admin/teams':
        if (state === false) dispatch(reset('teamsForm'));
        dispatch({ type: TOGGLE_MODAL, payload: { state, modalComponent: teamModal } });
        return true;
      case '#/admin/sponsors':
        if (state === false) dispatch(reset('sponsorsForm'));
        dispatch({ type: TOGGLE_MODAL, payload: { state, modalComponent: sponsorModal } });
        return true;
      case '#/admin/judges':
        if (state === false) dispatch(reset('judgesForm'));
        dispatch({ type: TOGGLE_MODAL, payload: { state, modalComponent: JudgeModal } });
        return true;
      default:
        return false;
    }
  }
);
