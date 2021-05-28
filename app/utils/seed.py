from usps import USPSApi, Address
from faker import Faker

fake = Faker()
Faker.seed(0)
address = fake.address()
location = {
    "name": "test",
    "address_1": address.split("\n")[0],
    "address_2": "",
    "city": address.split("\n")[1].split(', ')[0],
    "state": address.split(', ')[1].split()[0],
    "zipcode": address.split(', ')[1].split()[1]
    }
location1 = Address(
    name="Test",
    address_1=location['address_1'],
    address_2=location['address_2'],
    city=location['city'],
    state=location['state'],
    zipcode=location['zipcode']
)
usps = USPSApi('083APPAC4213', test=True)
validation = usps.validate_address(location1)
print(location)
print(validation.result)
