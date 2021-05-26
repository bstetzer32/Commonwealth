from ..models import db, Donation

def seed_donations():
  donation1 = Donation(
    user_id=1,
    project_id=1,
    tier="silver",
    amount=500,
  )
