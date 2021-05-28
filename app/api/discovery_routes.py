from flask import Blueprint, jsonify
from app.models import db, State, City

discovery_routes = Blueprint('discovery', __name__)


@discovery_routes.route('/')
def discovery():
    states = State.query.all()
    state_info = [state.to_dict() for state in states]
    city = City.query.all()

    list = [{'id': info['id'], 'name': info['name'], 'cities':[
        city.to_simple_dict() for city in info['cities']]}
        for info in state_info]
    # print('-----------------', list)
    # print('discovery list ----------------------', list)
    return jsonify(list)
