from .db import db


class Donations(db.Model):
  __tablename__ = "donations"

  id = db.Column(db.Integer, primary_key = True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
  project_id = db.Column(db.Integer, db.ForeignKey("projects.id"))
  amount = db.Column(db.Integer)
  tier = db.Column(db.Integer)
