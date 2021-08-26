from flask import Blueprint, request
from flask_login import login_required
from app.models import User, db
from app.forms import ProfileForm
from wtforms.validators import ValidationError
from app.api.utils import throw_authorization_error, user_is_owner, throw_not_found_error

user_routes = Blueprint('users', __name__)


@user_routes.route('/', methods=['GET'])
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get_or_404(id)
    return user.to_dict()


@user_routes.route('/<int:id>', methods=['PUT'])
@login_required
def user_update(id):
        form = ProfileForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            if user_is_owner(id):
                user = User.query_or_404.get(id)
                form.populate_obj(user)
                db.session.add(user)
                db.session.commit()
                return user.to_dict()
            return throw_authorization_error()
        return throw_not_found_error()
    
    
@user_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def user_delete(id):
    if user_is_owner(id):
        user = User.query.get_or_404(id)

        db.session.delete(user)
        db.session.commit()
        return user.to_dict()
    return throw_not_found_error()
