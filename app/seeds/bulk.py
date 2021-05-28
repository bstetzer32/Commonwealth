from ..models import db, Project, Category, City, State, User, Donation
from ..utils.adresses import addresses as read_addresses
import random

addresses = read_addresses()
users = [
    {
        "username": "username1",
        "email": "email1@email.com",
        "fullname": "Bob Barker",
        "password": "password1"},
    {
        "username": "username2",
        "email": "email2@email.com",
        "fullname": "Payton Manning",
        "password": "password2"},
    {
        "username": "username3",
        "email": "email3@email.com",
        "fullname": "Tim Tebow",
        "password": "password3"},
    {
        "username": "username4",
        "email": "email4@email.com",
        "fullname": "Kevin Durant",
        "password": "password4"},
    {
        "username": "username5",
        "email": "email5@email.com",
        "fullname": "Lionel Messi",
        "password": "password5"},
    {
        "username": "username6",
        "email": "email6@email.com",
        "fullname": "Kristen Stewart",
        "password": "password6"},
    {
        "username": "username7",
        "email": "email7@email.com",
        "fullname": "Kanye West",
        "password": "password7"},
    {
        "username": "username8",
        "email": "email8@email.com",
        "fullname": "Joey Diaz",
        "password": "password8"},
    {
        "username": "username9",
        "email": "email9@email.com",
        "fullname": "Adam West",
        "password": "password9"},
    {
        "username": "username10",
        "email": "email10@email.com",
        "fullname": "Brad Simpson",
        "password": "password10"},
]
projects = [
    {
        'image_url': 'https://i.imgur.com/sahOuiB.jpg',
        'title': 'Test Test Test',
        'tagline': 'Would not it be great if this worked?',
        'description': 'Would not it be great if this worked? Would not it be great if this worked? Would not it be great if this worked? Would not it be great if this worked?',
        'goal': 10000,
        'amount_raised': 1000,
    },
    {
        'image_url': 'https://i.imgur.com/sahOuiB.jpg',
        'title': 'Test Test Test',
        'tagline': 'Would not it be great if this worked?',
        'description': 'Would not it be great if this worked? Would not it be great if this worked? Would not it be great if this worked? Would not it be great if this worked?',
        'goal': 10000,
        'amount_raised': 1000,
    },
    {
        'image_url': 'https://i.imgur.com/sahOuiB.jpg',
        'title': 'Test Test Test',
        'tagline': 'Would not it be great if this worked?',
        'description': 'Would not it be great if this worked? Would not it be great if this worked? Would not it be great if this worked? Would not it be great if this worked?',
        'goal': 10000,
        'amount_raised': 1000,
    },
    {
        'image_url': 'https://i.imgur.com/sahOuiB.jpg',
        'title': 'Test Test Test',
        'tagline': 'Would not it be great if this worked?',
        'description': 'Would not it be great if this worked? Would not it be great if this worked? Would not it be great if this worked? Would not it be great if this worked?',
        'goal': 10000,
        'amount_raised': 1000,
    },
    {
        'image_url': 'https://i.imgur.com/sahOuiB.jpg',
        'title': 'Test Test Test',
        'tagline': 'Would not it be great if this worked?',
        'description': 'Would not it be great if this worked? Would not it be great if this worked? Would not it be great if this worked? Would not it be great if this worked?',
        'goal': 10000,
        'amount_raised': 1000,
    },
    {
        'image_url': 'https://i.imgur.com/sahOuiB.jpg',
        'title': 'Test Test Test',
        'tagline': 'Would not it be great if this worked?',
        'description': 'Would not it be great if this worked? Would not it be great if this worked? Would not it be great if this worked? Would not it be great if this worked?',
        'goal': 10000,
        'amount_raised': 1000,
    },
    {
        'image_url': 'https://i.imgur.com/sahOuiB.jpg',
        'title': 'Test Test Test',
        'tagline': 'Would not it be great if this worked?',
        'description': 'Would not it be great if this worked? Would not it be great if this worked? Would not it be great if this worked? Would not it be great if this worked?',
        'goal': 10000,
        'amount_raised': 1000,
    },
    {
        'image_url': 'https://i.imgur.com/sahOuiB.jpg',
        'title': 'Test Test Test',
        'tagline': 'Would not it be great if this worked?',
        'description': 'Would not it be great if this worked? Would not it be great if this worked? Would not it be great if this worked? Would not it be great if this worked?',
        'goal': 10000,
        'amount_raised': 1000,
    },
    {
        'image_url': 'https://i.imgur.com/sahOuiB.jpg',
        'title': 'Test Test Test',
        'tagline': 'Would not it be great if this worked?',
        'description': 'Would not it be great if this worked? Would not it be great if this worked? Would not it be great if this worked? Would not it be great if this worked?',
        'goal': 10000,
        'amount_raised': 1000,
    },
    {
        'image_url': 'https://i.imgur.com/sahOuiB.jpg',
        'title': 'Test Test Test',
        'tagline': 'Would not it be great if this worked?',
        'description': 'Would not it be great if this worked? Would not it be great if this worked? Would not it be great if this worked? Would not it be great if this worked?',
        'goal': 10000,
        'amount_raised': 1000,
    }]


def seed_bulk():
    states = State.query.all()
    states = {state.name: state.to_dict() for state in states}
    cities = []
    for city in addresses:
        if city['city'] not in cities:
            # state = states.
            cities.append(city['city'])
            city = City(
                name=city['city'],
                state_id=states[city['state']]['id'],
            )
            db.session.add(city)
    db.session.commit()
    cities = City.query.all()
    cities = {city.name: city.to_dict() for city in cities}
    for j in range(len(addresses)):
        for i in range(10):
            user = User(
                username=users[i]['username'] + str(j),
                email=str(j) + users[i]['email'],
                fullname=users[i]['fullname'],
                password=users[i]['password'],
                address_1=addresses[j]['address_1'],
                address_2=addresses[j]['address_2'],
                city=addresses[j]['city'],
                state=addresses[j]['state'],
                zipcode=addresses[j]['zipcode'],
                city_id=cities[addresses[j]['city']]['id'],
                state_id=states[addresses[j]['state']]['id'],
            )
            db.session.add(user)
            db.session.commit()
            user = User.query.filter_by(
                username=(users[i]['username'] + str(j))).first()
            project = Project(
                user_id=user.id,
                category_id=(i % 3) + 1,
                state_id=states[addresses[j]['state']]['id'],
                city_id=cities[addresses[j]['city']]['id'],
                image_url=projects[i]['image_url'],
                title=projects[i]['title'],
                tagline=projects[i]['tagline'],
                description=projects[i]['description'],
                goal=projects[i]['goal'],
                # goal=(j % 1000) * 1000,
                amount_raised=projects[i]['amount_raised'],
                # amount_raised=(j % 1000) * (10 * i),
                status="Not completed",
                address_1=addresses[j]['address_1'],
                address_2=addresses[j]['address_2'],
                city=addresses[j]['city'],
                state=addresses[j]['state'],
                zipcode=addresses[j]['zipcode'],
                # lat=address['lat'],
                # lng=address['lng'],
            )
            db.session.add(project)
            db.session.commit()

            userCount = User.query.count()
            project_id = Project.query.order_by(Project.id.desc()).first()

            i = 0
            while i < 3:

                amount = random.randint(1, 1000)
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

                donation = Donation(
                    user_id=random.randint(1, userCount),
                    project_id=project_id,
                    amount=amount,
                    tier=tier
                )
                db.session.add(donation)
                db.session.commit()

                i += 1


def undo_bulk():
    db.session.execute('TRUNCATE cities RESTART IDENTITY CASCADE;')
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
    db.session.commit()
