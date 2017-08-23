import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import formGroup from '../../FormComonent/FormComponent';
import { sponsorsFormValidator, submitAddSponsorsForm } from '../../../actions/sponsorActions';
import CubeLoader from '../../Decorative/CubeLoader/CubeLoader';

const styles = require('../../FormComonent/forms.scss');

let SponsorsTeamsForm = ({ handleSubmit, pristine, submittingForm, invalid, addSponsorError, submitText, submitTextSubmitting }) => ( // eslint-disable-line
  <form className={styles['authentication-form']} onSubmit={handleSubmit}>
    <Field
      name="name"
      component={formGroup}
      placeholder="Ime sponzora"
      type="text"
      wrapperClassName="form-item-wrapper"
      inputClassName="form-item"
      errorClassName="form-item-error"
    />

    <Field
      name="amount"
      component={formGroup}
      placeholder="Iznos u ETH"
      type="text"
      wrapperClassName="form-item-wrapper"
      inputClassName="form-item"
      errorClassName="form-item-error"
    />

    <Field
      name="websiteUrl"
      component={formGroup}
      placeholder="URL sajta"
      type="text"
      wrapperClassName="form-item-wrapper"
      inputClassName="form-item"
      errorClassName="form-item-error"
    />

    <Field
      name="logoUrl"
      component={formGroup}
      placeholder="Logo URL"
      type="text"
      wrapperClassName="form-item-wrapper"
      inputClassName="form-item"
      errorClassName="form-item-error"
    />

    { addSponsorError && <div className="submit-error">Error: {addSponsorError}</div> }

    <button
      className="submit-button"
      type="submit"
      disabled={pristine || submittingForm || invalid}
    >
      { submittingForm && <CubeLoader /> }
      { submittingForm ? submitTextSubmitting : submitText }
    </button>
  </form>
);

SponsorsTeamsForm.defaultProps = {
  submitTextSubmitting: 'Dodaje se',
  submitText: 'Dodaj',
};

const mapStateToProps = (state) => ({
  submittingForm: state.sponsors.submitting,
  addSponsorError: state.sponsors.addSponsorError
});

const validate = sponsorsFormValidator;

SponsorsTeamsForm = reduxForm({ form: 'sponsorsForm', validate })(SponsorsTeamsForm);

export default connect(mapStateToProps, { onSubmit: submitAddSponsorsForm })(SponsorsTeamsForm);