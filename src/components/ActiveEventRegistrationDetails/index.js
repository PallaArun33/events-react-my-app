// Write your code here
import './index.css'

const registrationStatus = {
  initialView: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const activeRegistrationInitialView = () => (
    <p className="initial-para">
      Click on an event, to view its registration details
    </p>
  )

  const activeRegistrationToRegisterView = () => (
    <div className="register-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-img"
      />
      <p className="yet-to-register-para">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-btn">
        Register Here
      </button>
    </div>
  )

  const activeEventRegisteredView = () => (
    <div className="registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="registered-para">
        You have already registered for the event
      </h1>
    </div>
  )

  const activeEventRegistrationsClosedView = () => (
    <div className="registration-closed-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registration-closed-img"
      />
      <h1 className="closed-para">Registrations Are Closed Now!</h1>
      <p className="reopen-para">
        Stay tuned: We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderActiveRegistrationEventDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return activeRegistrationToRegisterView()
      case registrationStatus.registered:
        return activeEventRegisteredView()
      case registrationStatus.registrationClosed:
        return activeEventRegistrationsClosedView()
      default:
        return activeRegistrationInitialView()
    }
  }

  return (
    <div className="active-registration-details-container">
      {renderActiveRegistrationEventDetails()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
