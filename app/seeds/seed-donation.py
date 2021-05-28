import random
from ..models import db, Donation


def seed_donations():

    i = 0

    donationList = []

    while i < 240000:

        donation = Donation(
            user_id=random.randint(1, 32000),
            project_id=random.randInt(1, 80000),
            tier=random.randInt(1, 6),
            amount=random.randInt(1, 1000),
        )
        donationList.append(donation)

        i += 1

    for donation in donationList:
        db.session.add(donation)

    db.session.commit()


def undo_donations():
    db.session.execute('TRUNCATE donations RESTART IDENTITY CASCADE;')
    db.session.commit()
