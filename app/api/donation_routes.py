from flask import Blueprint, jsonify, request, session
from app.models import db, Donation
from app.forms import DonationForm

donation_routes = Blueprint('donation', __name__)


def validation_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@donation_routes.route('', methods=['POST'])
def add_donation():
    form = DonationForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    amount = int(form.data['amount'])

    tier = 1

    if amount > 10 and amount < 20:
        tier = 2
    elif amount > 20 and amount < 50:
        tier = 3
    elif amount > 50 and amount < 100:
        tier = 4
    elif amount > 100 and amount < 500:
        tier = 5
    elif amount > 500:
        tier = 6

    if form.validate_on_submit():

        donation = Donation(
            amount=amount,
            user_id=int(form.data['user_id']),
            project_id=int(form.data['project_id']),
            tier=tier
        )
        db.session.add(donation)
        db.session.commit()
        return donation.to_simple_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}
