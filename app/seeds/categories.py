from ..models import db, Category


def seed_categories():
    Education = Category(name="Education")
    Sports = Category(name="Sports")
    Transportation = Category(name="Transportation")
    Music = Category(name="Music")
    Housing = Category(name="Housing")
    Volunteer = Category(name="Volunteer")
    Events = Category(name="Events")
    Clean_Up_Initiatives = Category(name="Clean Up Initiatives")
    Elderly_Care = Category(name="Elderly Care")

    db.session.add(Education)
    db.session.add(Sports)
    db.session.add(Transportation)
    db.session.add(Music)
    db.session.add(Housing)
    db.session.add(Volunteer)
    db.session.add(Events)
    db.session.add(Clean_Up_Initiatives)
    db.session.add(Elderly_Care)

    db.session.commit()


def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
