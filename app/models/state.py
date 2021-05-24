from .db import db

class State(db.Model):
  __tablename__ = "states"

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String)

  cities = db.relationship("City", back_populates="state")
  users = db.relationship("User", back_populates="state")
  projects = db.relationship("Project", back_populates="state_relationship")

  def to_dict(self):
    return {
      "id": self.id,
      "name":self.name,
      "cities": self.cities,
      "users": self.users,
      "projects": self.projects
    }
