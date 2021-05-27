from .db import db


class Donation(db.Model):
    __tablename__ = "donations"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"))
    amount = db.Column(db.Integer)
    tier = db.Column(db.Integer)

    user = db.relationship("User", back_populates="donations")
    project = db.relationship("Project", back_populates="donations")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "project_id": self.project_id,
            "amount": self.amount,
            "tier": self.tier,
            "user": self.user,
            "project": self.project
        }

    def to_simple_dict(self):
        return{
            "id": self.id,
            "user_id": self.user_id,
            "project_id": self.project_id,
            "amount": self.amount,
            "tier": self.tier,
        }
