from flask import Blueprint, request
from flask_login import login_required
from app.models import User, db
from app.forms import ProfileForm
from app.api.utils import authorization_errors_to_message, user_is_logged_in

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>', methods=['PUT'])
def profile_update(id):
        form = ProfileForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            if user_is_logged_in(form.user_id.data):
                user = User.query.get(id)
                form.populate_obj(user)
                db.session.add(user)
                db.session.commit()
                return user.to_dict()
            return authorization_errors_to_message()