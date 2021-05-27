from ..models import db, Donation

def seed_donations():
  donation1 = Donation(
    user_id=1,
    project_id=1,
    tier=2,
    amount=500,
  )
  donation2 = Donation(
  user_id=2,
  project_id=1,
  tier=3,
  amount=1000,
)
  donation3 = Donation(
  user_id=3,
  project_id=1,
  tier=4,
  amount=5000,
)
  donation4 = Donation(
  user_id=4,
  project_id=1,
  tier=1,
  amount=200,
)

  db.session.add(donation1)
  db.session.add(donation2)
  db.session.add(donation3)
  db.session.add(donation4)
  db.session.commit()


def undo_donations():
    db.session.execute('TRUNCATE donations RESTART IDENTITY CASCADE;')
    db.session.commit()
