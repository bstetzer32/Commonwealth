from usps import USPSApi, Address
from app.models import db, City, State
from flask import session


def validate_location(location):
    state = State.query.filter_by(name=location['state']).first()

    address = Address(
        name="Test",
        address_1=location['address_1'],
        address_2=location['address_2'],
        city=location['city'],
        state=location['state'],
        zipcode=str(location['zipcode'])
    )
    # print(location)
    usps = USPSApi('083APPAC4213', test=True)
    validation = usps.validate_address(address)
    # print(validation.result)
    city = City.query.filter_by(
        name=validation.result['AddressValidateResponse']['Address']['City']).first()
    if not city:
        city = City(
            state_id=state.id,
            name=location['city']
        )
        db.session.add(city)
        db.session.commit()

    if 'Error' in validation.result['AddressValidateResponse']['Address']:
        return validation.result['AddressValidateResponse']['Address']
    else:
        return validation.result['AddressValidateResponse']['Address']


# test = {
#     'name': 'Name Name',
#     'address_1': '102 Atkinson dr',
#     'address_2': '',
#     'city': 'Apex',
#     'state': 'North carolina',
#     'zipcode': '27502'
# }

# print(validate_location(test))
