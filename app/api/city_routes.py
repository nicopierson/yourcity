from flask import Blueprint, request
from flask_login import login_required
from app.models import City, db
# from app.forms import CityForm
from app.api.utils import throw_authorization_error, user_is_owner, throw_not_found_error

city_routes = Blueprint('cities', __name__)


@city_routes.route('/')
@login_required
def get_all_cities():
    cities = City.query.all()
    return {'cities': [city.to_dict() for city in cities]}


@city_routes.route('/<int:id>')
@login_required
def get_one_city(id):
    city = City.query.get(id)
    return city.to_dict()