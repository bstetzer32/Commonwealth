from ..models import db, Donation, Project
import random


def seed_donations():
    # donation1 = Donation(
    #     user_id=1,
    #     project_id=1,
    #     tier=2,
    #     amount=500,
    # )
    # donation2 = Donation(
    #     user_id=2,
    #     project_id=1,
    #     tier=3,
    #     amount=1000,
    # )
    # donation3 = Donation(
    #     user_id=3,
    #     project_id=1,
    #     tier=4,
    #     amount=5000,
    # )
    # donation4 = Donation(
    #     user_id=4,
    #     project_id=1,
    #     tier=1,
    #     amount=200,
    # )

    i = 28

    while i > 0:
        j = random.randint(1, 10)
        while j > 0:
            amount = random.randint(1, 10000)
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

            project = Project.query.get(i)
            project_dict = project.to_dict()
            newAmount = int(project_dict['amount_raised']) + amount
            project.amount_raised = newAmount
            db.session.add(project)

            donation = Donation(
                user_id=random.randint(1, 30),
                project_id=i,
                amount=amount,
                tier=tier
            )
            db.session.add(donation)
            j -= 1

        i -= 1

    # db.session.add(donation1)
    # db.session.add(donation2)
    # db.session.add(donation3)
    # db.session.add(donation4)
    db.session.commit()


def undo_donations():
    db.session.execute('TRUNCATE donations RESTART IDENTITY CASCADE;')
    db.session.commit()
