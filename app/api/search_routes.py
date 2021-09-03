from flask import Blueprint, request
from app.models import City

search_routes = Blueprint('results', __name__)


@search_routes.route('/')
def get_results():
    if 'city' in request.args:
        search_string = request.args.get('city')
        results = City.query.filter(City.name.ilike('%'+search_string+'%'))
    return {'results': [city.to_dict() for city in results]}