from .db import db

class City(db.Model):
  __tablename__= "cities"

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String)
  state_id = db.Column(db.Integer, db.ForeignKey("states.id"))

  state = db.relationship("State", back_populates="cities")
  users = db.relationship("User", back_populates="city_relationship")
  projects = db.relationship("Project", back_populates="city_relationship")

  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "state_id": self.state_id,
      "state": self.state,
      "users":self.users,
      "projects": self.projects
    }
