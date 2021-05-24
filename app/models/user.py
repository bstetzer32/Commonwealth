from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    fullname = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    address_1 = db.Column(db.String(100), nullable=False)
    address_2 = db.Column(db.String(100))
    city = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    zipcode = db.Column(db.Integer)
    state_id = db.Column(db.Integer, db.ForeignKey("states.id"))
    city_id = db.Column(db.Integer, db.ForeignKey("cities.id"))
    hashed_password = db.Column(db.String(255), nullable=False)

    donations = db.relationship("Donation", back_populates="user")
    state_relationship = db.relationship("State", back_populates="users")
    city_relationship = db.relationship("City", back_populates="users")
    projects = db.relationship("Project", back_populates="user")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "fullname": self.fullname,
            "address_1": self.address_1,
            "address_2": self.address_2,
            "city": self.city,
            "state": self.state,
            "zipcode": self.zipcode,
            "donations": self.donations,
            "state_relationship": self.state_relationship,
            "city_relationship": self.city_relationship,
            "projects": self.projects
        }
