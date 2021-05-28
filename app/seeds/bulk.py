from ..models import db, Project, Category, City, State, User
from ..utils.adresses import addresses as read_addresses
addresses = read_addresses()
projects = []
users = []

def seed_bulk():
    states = State.query.all()
    cities = []
    for city in addresses:
        if city['city'] not in cities:
            cities.append(city['city'])
            city = City(
                name=city['city'],
                state_id=states[city['state']].id,
            )
            db.session.add(city)
    db.session.commit
    cities = City.query.all()
    for address, j in addresses:
        for i in range(9):
            user = User(
                username=users[i]['username'] + j,
                email=users[i]['email'],
                fullname=users[i]['fullname'],
                password=users[i]['password'],
                address_1=address['address_1'],
                address_2=address['address_2'],
                city=address['city'],
                state=address['state'],
                zipcode=address['zipcode'],
                city_id=cities[address['city']].id,
                state_id=states[address['state']].id,
            )
            db.session.add(user)
            db.session.commit()
            user = User.query.filter_by(
                User.username == (users[i]['username'] + j))
            project = Project(
                user_id=user.id,
                category_id=i%3,
                state_id=states[address['state']].id,
                city_id=cities[address['city']].id,
                image_url=projects[i]['image_url'],
                title=projects[i]['title'],
                tagline=projects[i]['tagline'],
                description=projects[i]['description'],
                goal=projects[i]['goal'],
                # goal=(j % 1000) * 1000,
                amount_raised=projects[i]['amount_raised'],
                # amount_raised=(j % 1000) * (10 * i),
                status="Not completed",
                address_1=address['address_1'],
                address_2=address['address_2'],
                city=address['city'],
                state=address['state'],
                zipcode=address['zipcode'],
                # lat=address['lat'],
                # lng=address['lng'],
            )
            db.session.add(project)
    db.session.commit()


def undo_bulk():
    db.session.execute('TRUNCATE cities RESTART IDENTITY CASCADE;')
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
