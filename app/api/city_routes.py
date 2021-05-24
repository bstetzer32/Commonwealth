from flask import Blueprint, jsonify
from app.models import db, City

city_routes = Blueprint('cities', __name__)


@city_routes.route('/<int:state_id>')
def all_cities_for_state():
    cities = City.query.filter(City.state_id == state_id).all()
    return {'cities': [city.to_dict() for city in cities]}


@city_routes.route('/<int:state_id>/<int:id>')
def one_city():
    city = City.query.get(id)
    return city.to_dict()
