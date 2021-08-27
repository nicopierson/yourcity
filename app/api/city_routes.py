from flask import Blueprint, request
from flask_login import login_required
from app.models import City, db
from app.forms import CityPostForm, CityUpdateForm
from app.api.utils import (
    throw_authorization_error, user_is_owner, throw_not_found_error, throw_server_error
)

city_routes = Blueprint('cities', __name__)


@city_routes.route('/')
def get_all_cities():
    cities = City.query.all()
    return {'cities': [city.to_dict() for city in cities]}


@city_routes.route('/<int:id>')
def get_one_city(id):
    city = City.query.get_or_404(id)
    return city.to_dict()


@city_routes.route('/users/<int:id>')
def get_city_by_user(id):
    cities = City.query.filter(City.user_id == id).all()
    return {'cities': [city.to_dict() for city in cities]}


# use trailing slash in api route for POSTs
@city_routes.route('/', methods=['POST'])
@login_required
def city_post():
        form = CityPostForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            city = City()
            form.populate_obj(city)
            try:
                db.session.add(city)
                db.session.commit()
                return city.to_dict()
            except:
                return throw_server_error()
        return throw_not_found_error()


@city_routes.route('/<int:id>', methods=['PUT'])
@login_required
def city_update(id):
        form = CityUpdateForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            city = City.query.get_or_404(id)
            if user_is_owner(city.user_id):
                form.populate_obj(city)
                try:
                    db.session.add(city)
                    db.session.commit()
                    return city.to_dict()
                except:
                    return throw_server_error()
            return throw_authorization_error()
        return throw_not_found_error()
    
    
@city_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def city_delete(id):
    city = City.query.get_or_404(id)
    if user_is_owner(city.user_id):
        try:
            db.session.delete(city)
            db.session.commit()
            return city.to_dict()
        except:
            return throw_server_error()
    return throw_not_found_error()
