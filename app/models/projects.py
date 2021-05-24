from .db import db

class Projects(db.Model):
  __tablename__ = "projects"

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
  category_id = db.Column(db.Integer, db.ForeignKey("categories.id"))
  region_id  = db.Column(db.Integer, db.ForeignKey("regions.id"))
  title = db.Column(db.String(100), nullable=False)
  description = db.Column(db.String(2000), nullable=False)
  goal = db.Column(db.Integer, nullable=False)
  amount_raised = db.Column(db.Integer, default=0)
  status = db.Column(db.String(100), default="Not Fully Funded")
  address_1 = db.Column(db.String(100), nullable=False)
  address_2 = db.Column(db.String(100))
  city = db.Column(db.String(100), nullable=False)
  state = db.Column(db.String(50), nullable=False)
  zipcode = db.Column(db.Integer)
