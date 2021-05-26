from ..models import db, City


def seed_cities():
    Braila = City(
        name="Braila",
        state_id=49
    )
    Boone = City(
        name="Boone",
        state_id=33
    )
    Pittsburgh = City(
        name="Pittsburgh",
        state_id=38
    )
    Jonesboro = City(
        name="Jonesboro",
        state_id=3
    )
    Austin = City(
        name="Austin",
        state_id=43
    )
    Richmond = City(
        name="Richmond",
        state_id=41
    )
    Union = City(
        name="Union",
        state_id=41
    )

    Seattle = City(
        name="Seattle",
        state_id=47
    )
    NewYorkCity = City(
        name="New York City",
        state_id=32
    )
    DuneCity = City(
        name="Dune City",
        state_id=31
    )
    Alameda = City(
        name="Alameda",
        state_id=39
    )
    Talladega = City(
        name="Talladega",
        state_id=16
    )
    Sacramento = City(
        name="Sacramento",
        state_id=49
    )
    Downey = City(
        name="Downey",
        state_id=49
    )
    LaHabra = City(
        name="La Habra",
        state_id=10
    )
    Oceanside = City(
        name="Oceanside",
        state_id=1
    )
    Ozark = City(
        name="Ozark",
        state_id=2
    )
    Redlands = City(
        name="Redlands",
        state_id=6
    )
    ElMonte = City(
        name="El Monte",
        state_id=24
    )
    Glendale = City(
        name="Glendale",
        state_id=23
    )
    Antioch = City(
        name="Antioch",
        state_id=11
    )
    Belmont = City(
        name="Belmont",
        state_id=24
    )
    RedwoodCity = City(
        name="Redwood City",
        state_id=22
    )
    ElDorado = City(
        name="El Dorado",
        state_id=24
    )
    Riverside = City(
        name="Riverside",
        state_id=20
    )
    Opelika = City(
        name="Opelika",
        state_id=30
    )
    Haines = City(
        name="Haines",
        state_id=3
    )
    Rogers = City(
        name="Rogers",
        state_id=36
    )
    Brea = City(
        name="Brea",
        state_id=22
    )
    LasVegas = City(
        name="Las Vegas",
        state_id=28
    )
    Jasper = City(
        name="Jasper",
        state_id=1
    )
    Skagway = City(
        name="Skagway",
        state_id=21
    )
    Ojai = City(
        name="Ojai",
        state_id=41
    )
    Rancho = City(
        name="Ranch Cucamonga",
        state_id=4
    )
    BuenaPark = City(
        name="Buena Park",
        state_id=2
    )
    FortPayne = City(
        name="Fort Payne",
        state_id=16
    )
    MtnView = City(
        name="Mountain View",
        state_id=6
    )
    ElDorado2 = City(
        name="El Dorado",
        state_id=26
    )
    Anaheim = City(
        name="Anaheim",
        state_id=36
    )
    Scottsboro = City(
        name="Scottsboro",
        state_id=16
    )
    Batesville = City(
        name="Batesville",
        state_id=12
    )
    Concord = City(
        name="Concord",
        state_id=50
    )
    Hayward = City(
        name="Hayward",
        state_id=43
    )
    PortH = City(
        name='Port Hueneme',
        state_id=7
    )
    Kodiak = City(
        name="Kodiak",
        state_id=22
    )
    Florence = City(
        name="Florence",
        state_id=1
    )
    Seattle = City(
        name="Seattle",
        state_id=47
    )
    FairBanks = City(name="Fair Banks", state_id=46)

    db.session.add(Brea)
    db.session.add(Rogers)
    db.session.add(RedwoodCity)
    db.session.add(Redlands)
    db.session.add(Riverside)
    db.session.add(Haines)
    db.session.add(Opelika)
    db.session.add(ElDorado)
    db.session.add(ElMonte)
    db.session.add(Belmont)
    db.session.add(Belmont)
    db.session.add(Antioch)
    db.session.add(Ozark)
    db.session.add(Oceanside)
    db.session.add(LaHabra)
    db.session.add(Downey)
    db.session.add(Sacramento)
    db.session.add(Braila)
    db.session.add(Boone)
    db.session.add(Pittsburgh)
    db.session.add(Jonesboro)
    db.session.add(Austin)
    db.session.add(Richmond)
    db.session.add(Union)
    db.session.add(Seattle)
    db.session.add(NewYorkCity)
    db.session.add(DuneCity)
    db.session.add(NewYorkCity)
    db.session.add(Alameda)
    db.session.add(Talladega)
    db.session.add(LasVegas)
    db.session.add(Jasper)
    db.session.add(Skagway)
    db.session.add(Ojai)
    db.session.add(Rancho)
    db.session.add(BuenaPark)
    db.session.add(FortPayne)
    db.session.add(MtnView)
    db.session.add(ElDorado2)
    db.session.add(Anaheim)
    db.session.add(Scottsboro)
    db.session.add(Batesville)
    db.session.add(Concord)
    db.session.add(Hayward)
    db.session.add(PortH)
    db.session.add(Kodiak)
    db.session.add(FairBanks)
    db.session.add(Florence)
    db.session.add(Seattle)
    db.session.add(Glendale)

    db.session.commit()


def undo_cities():
    db.session.execute('TRUNCATE cities RESTART IDENTITY CASCADE;')
    db.session.commit()
