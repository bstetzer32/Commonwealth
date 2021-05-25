from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(
        username='Demo',
        email='demo@aa.io',
        fullname="Demo User",
        password='password',
        address_1="123 Elmo Street",
        city="Braila",
        state="Wisconsin",
        zipcode=12345,
        state_id=49,
        )

    Sally = User(
        username='Sally',
        email="sallysmith@test.com",
        fullname="Sally Smith",
        password="testpassword",
        address_1="234 Sesame Street",
        city="Boone",
        state="North Carolina",
        zipcode=44455,
        state_id=33
    )
    Steve = User(
        username="Steve",
        email='stevesmith@test.com',
        fullname='Steve Smith',
        password='testpassword1',
        address_1='234 Sesame Street',
        address_2="Apt. B",
        city="Boone",
        state="North Carolina",
        zipcode=44455,
        state_id=33
    )
    Greg = User(
        username="Greg",
        email='GregRoberts@test.com',
        fullname='Greg Roberts',
        password='testpassword2',
        address_1='234 Elm Street',
        address_2="Apt. C",
        city="Jonesboro",
        state="Arkansas",
        zipcode=43455,
        state_id=3
    )
    Ben = User(
        username="Ben",
        email='benRobinson@test.com',
        fullname='Ben Robinson',
        password='testpassword3',
        address_1='234 Smith Street',
        city="Pittsburgh",
        state="Pennsylvania",
        zipcode=44455,
        state_id=38
    )
    Ricky = User(
        username="Ricky",
        email='rickyrubio@test.com',
        fullname='Ricky Rubio',
        password='testpassword4',
        address_1='234 Smith Street',
        city="Dune City",
        state="New Mexico",
        zipcode=55455,
        state_id=31
    )
    Dalton = User(
        username="Dalton",
        email='daltonhester@test.com',
        fullname='Dalton Hester',
        password='testpassword5',
        address_1='122 Nave drive',
        city="New York City",
        state="New York",
        zipcode=55566,
        state_id=32
    )
    Rachel = User(
        username="Rachel",
        email='rachelworther@test.com',
        fullname='Rachel Worther',
        password='testpassword6',
        address_1='1 Upstate court',
        city="Las Vegas",
        state="Nevada",
        zipcode=55567,
        state_id=28
    )
    Caroline = User(
        username="Caroline",
        email='carolinemoye@test.com',
        fullname='Caroline Moye',
        password='testpassword7',
        address_1='100 Justifer Avenue',
        city="Seattle",
        state="Washington",
        zipcode=68423,
        state_id=47
    )
    Samantha = User(
        username="Samantha",
        email='samantharu@test.com',
        fullname='Samantha Ru',
        password='testpassword8',
        address_1='123 University Drive',
        city="Richmond",
        state="Virginia",
        zipcode=11573,
        state_id=46
    )
    Ian = User(
        username="Ian",
        email='ianmore@test.com',
        fullname='Ian More',
        password='testpassword9',
        address_1='777 Street Street',
        city="Union",
        state="South Dakota",
        zipcode=55566,
        state_id=41
    )
    Ryan = User(
        username="Ryan",
        email='ryanreynolds@test.com',
        fullname='Ryan Reynolds',
        password='testpassword10',
        address_1='555 Nut Drive',
        city="Austin",
        state="Texas",
        zipcode=88831,
        state_id=43
    )
    db.session.add(demo)
    db.session.add(Steve)
    db.session.add(Sally)
    db.session.add(Ben)
    db.session.add(Greg)
    db.session.add(Ryan)
    db.session.add(Samantha)
    db.session.add(Ian)
    db.session.add(Caroline)
    db.session.add(Dalton)
    db.session.add(Ricky)
   


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
