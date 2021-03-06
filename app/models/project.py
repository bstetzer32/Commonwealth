from .db import db


class Project(db.Model):
    __tablename__ = "projects"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    category_id = db.Column(db.Integer, db.ForeignKey("categories.id"))
    state_id = db.Column(db.Integer, db.ForeignKey("states.id"))
    city_id = db.Column(db.Integer, db.ForeignKey("cities.id"))
    image_url = db.Column(db.String)
    title = db.Column(db.String(100), nullable=False)
    tagline = db.Column(db.String)
    description = db.Column(db.String(2000), nullable=False)
    goal = db.Column(db.Integer, nullable=False)
    amount_raised = db.Column(db.Integer, default=0)
    status = db.Column(db.String(100), default="Not Fully Funded")
    address_1 = db.Column(db.String(100), nullable=False)
    address_2 = db.Column(db.String(100))
    city = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    zipcode = db.Column(db.Integer)
    # lat = db.Column(db.Integer)
    # lng = db.Column(db.Integer)
    created_at = db.Column(db.DateTime())
    expiration_date = db.Column(db.DateTime())
    donations = db.relationship("Donation", back_populates="project")
    user = db.relationship("User", back_populates="projects")
    state_relationship = db.relationship("State", back_populates="projects")
    city_relationship = db.relationship("City", back_populates="projects")
    category = db.relationship("Category", back_populates="projects")

    def to_dict(self):

        return {
            "id": self.id,
            "user_id": self.user_id,
            "category_id": self.category_id,
            "state_id": self.state_id,
            "city_id": self.city_id,
            "title": self.title,
            "tagline": self.tagline,
            "description": self.description,
            "goal": self.goal,
            "amount_raised": self.amount_raised,
            "status": self.status,
            "address_1": self.address_1,
            "address_2": self.address_2,
            "city": self.city,
            "state": self.state,
            "zipcode": self.zipcode,
            "created_at": str(self.created_at),
            "expiration_date": str(self.expiration_date),
            # "lat":self.lat,
            # "lng":self.lng,
            "donations": [
                donation.to_simple_dict() for donation in self.donations],
            "user": self.user.to_simple_dictionary(),
            'image_url': self.image_url
            # "state_relationship": self.state_relationship.to_dict(),
            # "city_relationship": self.city_relationship.to_dict(),
            # "category": self.category.to_dict()
        }

    def to_simple_dict(self):
        return{
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "goal": self.goal,
            "address_1": self.address_1,
            "city": self.city,
            "state": self.state,
            "amount_raised": self.amount_raised,
            "created_at": self.created_at,
            "expiration_at": self.expiration_date
        }
