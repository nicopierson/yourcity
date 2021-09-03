from flask import Blueprint
from flask_login import login_required
from app.models import User, db
from app.api.utils import (
    user_is_owner, throw_not_found_error, throw_server_error
)

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
def user(id):
    user = User.query.get_or_404(id)
    return user.to_dict()
    
    
@user_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def user_delete(id):
    if user_is_owner(id):
        user = User.query.get_or_404(id)
        try:
            db.session.delete(user)
            db.session.commit()
            return user.to_dict()
        except:
            return throw_server_error()
    return throw_not_found_error()
