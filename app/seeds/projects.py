from ..models import db, Project


def seed_projects():
    testProject = Project(
        user_id=1,
        category_id=1,
        state_id=1,
        title="Test Project",
        description="Blah Blah Blah school of the Blind",
        goal=50000,
        amount_raised=0,
        status="Not completed",
        address_1="123 Sesame Street",
        city="Florence",
        state="Alabama",
        zipcode=123456
    )

    db.session.add(testProject)
    db.session.commit()


def undo_projects():
    db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
    db.session.commit()
