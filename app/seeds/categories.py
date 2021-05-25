from ..models import db, Category


def seed_categories():
    Education = Category(name="Education")
    Sports = Category(name="Sports")
    
    db.session.add(Education)
    db.session.add(Sports)
    db.session.commit()


def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
