from flask import Blueprint, jsonify, session, request
from app.models import User, db, City, State
from app.forms import LoginForm
from app.forms import SignUpForm
from app.utils.validate import validate_location
from flask_login import current_user, login_user, logout_user, login_required

auth_routes = Blueprint('auth', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@auth_routes.route('/')
def authenticate():
    """
    Authenticates a user.
    """
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors': ['Unauthorized']}


@auth_routes.route('/login', methods=['POST'])
def login():
    """
    Logs a user in
    """
    form = LoginForm()
    print(request.get_json())
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        user = User.query.filter(User.email == form.data['email']).first()
        login_user(user)
        return user.to_simple_dictionary()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/logout')
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'User logged out'}


@auth_routes.route('/sign-up', methods=['POST'])
def sign_up():
    """
    Creates a new user and logs them in
    """
    form = SignUpForm()
    print(form.data)
    form['csrf_token'].data = request.cookies['csrf_token']
    location = {
        'address_1': form.data['address_1'],
        'address_2': form.data['address_2'],
        'city': form.data['city'],
        'state': form.data['st'],
        'zipcode': form.data['zipcode']
    }
    validate_address = validate_location(location)
    if 'Error' in validate_address:
        return validate_address
    else:
        print("Setting Address ----------------", validate_address)
        form.data['address_1'] = validate_address['Address1']
        form.data['address_2'] = validate_address['Address2']
        form.data['city'] = validate_address['City']

        form.data['zipcode'] = validate_address['Zip5']
    state = State.query.filter_by(name=form.data['st']).first()
    city = City.query.filter_by(name=form.data['city']).first()
    if form.validate_on_submit():
        user = User(
            username=form.data['username'],
            fullname = form.data['fullname'],
            email=form.data['email'],
            address_1=form.data['address_1'],
            address_2=form.data['address_2'],
            city=form.data['city'],
            state=form.data['st'],
            zipcode=int(form.data['zipcode']),
            state_id=state.id,
            city_id=city.id,
            password=form.data['password']
        )
        db.session.add(user)
        db.session.commit()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401
