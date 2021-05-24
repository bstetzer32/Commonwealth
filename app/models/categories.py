from .db import db

class Categories(db.Model):
  __tablename__ = "categories"

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String)
