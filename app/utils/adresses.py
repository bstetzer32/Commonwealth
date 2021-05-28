# from usps import USPSApi, Address
import json

us_state_abbrev = {
    'AL': 'Alabama',
    'AK': 'Alaska',
    'AZ': 'Arizona',
    'AR': 'Arkansas',
    'CA': 'California',
    'CO': 'Colorado',
    'CT': 'Connecticut',
    'DE': 'Delaware',
    'DC': 'District of Columbia',
    'FL': 'Florida',
    'GA': 'Georgia',
    'HI': 'Hawaii',
    'ID': 'Idaho',
    'IL': 'Illinois',
    'IN': 'Indiana',
    'IA': 'Iowa',
    'KS': 'Kansas',
    'KY': 'Kentucky',
    'LA': 'Louisiana',
    'ME': 'Maine',
    'MD': 'Maryland',
    'MA': 'Massachusetts',
    'MI': 'Michigan',
    'MN': 'Minnesota',
    'MS': 'Mississippi',
    'MO': 'Missouri',
    'MT': 'Montana',
    'NE': 'Nebraska',
    'NV': 'Nevada',
    'NH': 'New Hampshire',
    'NJ': 'New Jersey',
    'NM': 'New Mexico',
    'NY': 'New York',
    'NC': 'North Carolina',
    'ND': 'North Dakota',
    'OH': 'Ohio',
    'OK': 'Oklahoma',
    'OR': 'Oregon',
    'PA': 'Pennsylvania',
    'RI': 'Rhode Island',
    'SC': 'South Carolina',
    'SD': 'South Dakota',
    'TN': 'Tennessee',
    'TX': 'Texas',
    'UT': 'Utah',
    'VT': 'Vermont',
    'VA': 'Virginia',
    'WA': 'Washington',
    'WV': 'West Virginia',
    'WI': 'Wisconsin',
    'WY': 'Wyoming',
}


def addresses():
    f = open("/Users/Josh/Desktop/App_Academy/Module-6/group-project-commonwealth/Commonwealth/app/utils/addresses.json", "r")
    data = json.load(f)
    locations = []
    # for location in data["addresses"][1:XXX]:
    for location in data["addresses"]:
        if "city" in location.keys():
            if location['state'] != 'DC':
                x = {
                    "address_1": location['address1'],
                    "address_2": location['address2'],
                    "city": location['city'],
                    "state": us_state_abbrev[location['state']],
                    "zipcode": location['postalCode'],
                    "lat": location['coordinates']['lat'],
                    "lng": location['coordinates']['lng']
                }
                if x not in locations:
                    locations.append(x)
    return locations


print(addresses())

# locations = [{
#     "address_1":location['address1'],
#     "address_2":location['address2'],
#     "city":location['city'],
#     "state":location['state'],
#     "zipcode":location['postalCode']
# } if "city" in location.keys() for location in data["addresses"]]

# location1 = Address(
#     name="Test",
#     address_1=location['address_1'],
#     address_2=location['address_2'],
#     city=location['city'],
#     state=location['state'],
#     zipcode=location['zipcode']
# )
# usps = USPSApi('083APPAC4213', test=True)
# validation = usps.validate_address(location1)
# print(location)
# print(validation.result)
