from flask import Blueprint, request
from flask_login import login_required
from app.models import City, db
from app.forms import CityPostForm, CityUpdateForm
from app.api.utils import throw_authorization_error, user_is_owner, throw_not_found_error

city_routes = Blueprint('cities', __name__)


@city_routes.route('/')
@login_required
def get_all_cities():
    cities = City.query.all()
    return {'cities': [city.to_dict() for city in cities]}


@city_routes.route('/<int:id>')
# @login_required
def get_one_city(id):
    city = City.query.get_or_404(id)
    return city.to_dict()


# use trailing slash in api route for POSTs
@city_routes.route('/', methods=['POST'])
@login_required
def city_post():
        form = CityPostForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            city = City()
            form.populate_obj(city)
            db.session.add(city)
            db.session.commit()
            return city.to_dict()
        return throw_not_found_error()


@city_routes.route('/<int:id>', methods=['PUT'])
@login_required
def city_update(id):
        user_id = City.query.get_or_404(id).user_id
        form = CityUpdateForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            if user_is_owner(user_id):
                city = City.query.get_or_404(id)
                form.populate_obj(city)
                db.session.add(city)
                db.session.commit()
                return city.to_dict()
            return throw_authorization_error()
        return throw_not_found_error()
    
    
@city_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def city_delete(id):
    if user_is_owner(id):
        city = City.query.get_or_404(id)

        db.session.delete(city)
        db.session.commit()
        return city.to_dict()
    return throw_not_found_error()
