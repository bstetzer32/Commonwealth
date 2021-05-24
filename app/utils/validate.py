from usps import USPSApi, Address


def validate_location(location):

    address = Address(
        name=location['name'],
        address_1=location['address_1'],
        address_2=location['address_2'],
        city=location['city'],
        state=location['state'],
        zipcode=location['zipcode']
    )
    usps = USPSApi('083APPAC4213', test=True)
    validation = usps.validate_address(address)
    print(validation.result)
    if 'Error' in validation.result['AddressValidateResponse']['Address']:
        return validation.result['AddressValidateResponse']['Address']['Error']['Description']
    else:
        return validation.result['AddressValidateResponse']['Address']


test = {
    'name': 'Name Name',
    'address_1': '102 Atkinson dr',
    'address_2': '',
    'city': 'Apex',
    'state': 'North carolina',
    'zipcode': '27502'
}

print(validate_location(test))
