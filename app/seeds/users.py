# from werkzeug.security import generate_password_hash
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
    Wai = User(
        fullname= 'Wai Boerner',
        email= 'waiboerner@test.com',
        password= 'testpassword49',
        username= 'Wai',
        address_1= '5402 Wandering Drive',
        state= 'Rhode',
        city='Alameda',
        state_id= 39,
        zipcode= 265943
    )
    Deloise = User(
        fullname= 'Deloise Witts',
        email= 'deloisewitts@test.com',
        password= 'testpassword29',
        username= 'Deloise',
        address_1= '  8343 Riverview Terrace',
        state= 'Kansas',
        city='Talladega',
        state_id= 16,
        zipcode= 73518
    )
    Danica = User(
        fullname= 'Danica Perlman',
        email= 'danica,perlman@test.com',
        password= 'testpassword73',
        username= 'Danica',
        address_1= '8128 Paul Hatt Rd.',
        state= 'Vermont',
        city='Downey',
        state_id= 45,
        zipcode= 40330
    )
    Britany = User(
        fullname= 'Britany Broderson',
        email= 'britany,broderson@test.com',
        password= 'testpassword77',
        username= 'Britany',
        address_1= '  9142 Roosevelt Trl.',
        state= 'Wisconsin',
        city='Sacramento',
        state_id= 49,
        zipcode= 467719
    )
    Precious = User(
        fullname= 'Precious Reece',
        email= 'precious,reece@test.com',
        password= 'testpassword56',
        username= 'Precious',
        address_1= '  6212 Clisham St.',
        state= 'Alaska',
        city='Ozark',
        state_id= 2,
        zipcode= 614900
    )
    Gidget = User(
        fullname= 'Gidget Munguia',
        email= 'gidget,munguia@test.com',
        password= 'testpassword13',
        username= 'Gidget',
        address_1= '  1175 Balsam Ave',
        state= 'Alabama',
        city='Oceanside',
        state_id= 1,
        zipcode= 403382
    )
    Reena = User(
        fullname= 'Reena Helbing',
        email= 'reena,helbing@test.com',
        password= 'testpassword28',
        username= 'Reena',
        address_1= '  3607 Garfield Ln.',
        state= 'Georgia',
        city='La Habra',
        state_id= 10,
        zipcode= 177046
    )
    Katelyn = User(
        fullname= 'Katelyn Shortt',
        email= 'katelyn,shortt@test.com',
        password= 'testpassword68',
        username= 'Katelyn',
        address_1= '  1473 Camden Blvd.',
        state= 'Colorado',
        city= 'Redlands',
        state_id= 6,
        zipcode= 946869
    )
    Marcel = User(
        fullname= 'Marcel Chamorro',
        email= 'marcel,chamorro@test.com',
        password= 'testpassword26',
        username= 'Marcel',
        address_1= '  2231 Washington Blvd.',
        state= 'Minnesota',
        city= 'Glendale',
        state_id= 23,
        zipcode= 117340
    )
    Domenic = User(
        fullname='Domenic Beumer',
        email= 'domenic,beumer@test.com',
        password= 'testpassword14',
        username= 'Domenic',
        address_1= '  8343 Riverview Terrace',
        state= 'Mississippi',
        city= 'El Monte',
        state_id= 24,
        zipcode= 167400
    )
    Winifred = User(
         fullname= 'Winifred Luciani',
        email= 'winifred,luciani@test.com',
        password= 'testpassword48',
        username= 'Winifred',
        address_1= '  1715 Aspen Cir',
        state= 'Hawaii',
        city= 'Antioch',
        state_id= 11,
        zipcode= 178065
    )
    Chasity = User(
        fullname= 'Chastity Merck',
        email= 'chastity,merck@test.com',
        password= 'testpassword57',
        username= 'Chastity',
        address_1= '  7280 Genie Drive',
        state= 'Mississippi',
        city= 'El Dorado',
        state_id= 24,
        zipcode= 114389
    )
    Ammie = User(
        fullname= 'Ammie Her',
        email= 'ammie,her@test.com',
        password= 'testpassword73',
        username= 'Ammie',
        address_1= '  2231 Washington Blvd.',
        state= 'Michigan',
        city= 'Redwood City',
        state_id= 22,
        zipcode= 264173
    )
    Liliana = User(
         fullname= 'Liliana Burruss',
        email= 'liliana,burruss@test.com',
        password= 'testpassword24',
        username= 'Liliana',
        address_1= '  6605 Harris Ave',
        state= 'Mississippi',
        city= 'Belmont',
        state_id= 24,
        zipcode= 984606
    )
    Aura = User(
         fullname= 'Aura Ashbrook',
        email= 'aura,ashbrook@test.com',
        password= 'testpassword64',
        username= 'Aura',
        address_1= '  3494 Bangor Drive',
        state= 'Maryland',
        city= 'Riverside',
        state_id= 20,
        zipcode= 607230
    )
    Lachelle = User(

        fullname= 'Lachelle Perryman',
        email= 'lachelle,perryman@test.com',
        password= 'testpassword41',
        username= 'Lachelle',
        address_1= '  2885 Acacia Ave',
        state= 'New Mexico',
        city= 'Opelika',
        state_id= 30,
        zipcode= 135412
    )
    Marine = User(
        fullname= 'Marine Ziegler',
        email= 'marine,ziegler@test.com',
        password= 'testpassword86',
        username= 'Marine',
        address_1= '  4680 Lorraine Rd.',
        state= 'Arizona',
        city= 'Haines',
        state_id= 3,
        zipcode= 530976
    )
    Iva = User(
          fullname= 'Iva Bose',
        email= 'iva,bose@test.com',
        password= 'testpassword83',
        username= 'Iva',
        address_1= '  1238 Rudman Ave.',
        state= 'Oklahoma',
        city= 'Rogers',
        state_id= 36,
        zipcode= 193987
    )
    Palmira = User(
        fullname= 'Palmira Curto',
        email= 'palmira,curto@test.com',
        password= 'testpassword70',
        username= 'Palmira',
        address_1= '  3494 Bangor Drive',
        state= 'Michigan',
        city= 'Brea',
        state_id= 22,
        zipcode= 940282
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
    db.session.add(Rachel)
    db.session.add(Wai)
    db.session.add(Deloise)
    db.session.add(Britany)
    db.session.add(Danica)
    db.session.add(Reena)
    db.session.add(Gidget)
    db.session.add(Precious)
    db.session.add(Katelyn)
    db.session.add(Domenic)
    db.session.add(Marcel)
    db.session.add(Winifred)
    db.session.add(Liliana)
    db.session.add(Ammie)
    db.session.add(Chasity)
    db.session.add(Aura)
    db.session.add(Lachelle)
    db.session.add(Marine)
    db.session.add(Iva)
    db.session.add(Palmira)
    db.session.commit()



# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
