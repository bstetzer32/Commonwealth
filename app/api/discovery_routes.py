from flask import Blueprint, jsonify
from app.models import db, State, City

discovery_routes = Blueprint('discovery', __name__)

@discovery_routes.route('/')
def discovery():
    states = State.query.all()
    state_info = [state.to_dict() for state in states]
    print(state_info)
    list = [{'id': info['id'], 'name': info['name'], 'cities':[{'id': city['id'], 'name': city['name']} for city in info['cities']]} for info in state_info]
    return jsonify(list)