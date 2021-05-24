from .db import db

class Regions(db.Model):
  __tablename__ = "regions"

  id = db.Column(db.Integer, primary_key=True)
  city_code = db.Column(db.Integer, nullable=False)
  city_state_code= db.Column(db.Integer, nullable=False)
