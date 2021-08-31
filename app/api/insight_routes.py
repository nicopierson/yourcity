from flask import Blueprint, request
from flask_login import login_required
from app.models import Insight, db
from app.forms import InsightPostForm, InsightUpdateForm
from app.api.utils import (
    throw_authorization_error, throw_validation_error, user_is_owner, throw_not_found_error,
    throw_server_error
)

insight_routes = Blueprint('insights', __name__)


@insight_routes.route('/')
@login_required
def get_all_insights():
    insights = Insight.query.all()
    return {'insights': [insight.to_dict() for insight in insights]}


@insight_routes.route('/<int:id>')
def get_one_insight(id):
    insight = Insight.query.get_or_404(id)
    return insight.to_dict()


@insight_routes.route('/users/<int:id>')
def get_insights_by_user(id):
    insights = Insight.query.filter(Insight.user_id == id).all()
    return {'insights': [insight.to_dict() for insight in insights]}


@insight_routes.route('/cities/<int:id>')
def get_insights_by_city(id):
    insights = Insight.query.filter(Insight.city_id == id).all()
    return {'insights': [insight.to_dict() for insight in insights]}


# use trailing slash in api route for POSTs
@insight_routes.route('/', methods=['POST'])
@login_required
def insight_post():
        form = InsightPostForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            insight = Insight()
            form.populate_obj(insight)
            try:
                db.session.add(insight)
                db.session.commit()
                return insight.to_dict()
            except:
                return throw_server_error()
        return throw_validation_error(form.errors)


@insight_routes.route('/<int:id>', methods=['PUT'])
@login_required
def insight_update(id):
        form = InsightUpdateForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            insight = Insight.query.get_or_404(id)
            if user_is_owner(insight.user_id):
                form.populate_obj(insight)
                # check of server errors
                try:
                    db.session.add(insight)
                    db.session.commit()
                    return insight.to_dict()
                except:
                    return throw_server_error()
            return throw_authorization_error()
        return throw_validation_error(form.errors)
    
    
@insight_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def insight_delete(id):
    insight = Insight.query.get_or_404(id)
    if user_is_owner(insight.user_id):
        try:
            db.session.delete(insight)
            db.session.commit()
            return insight.to_dict()
        except:
            return throw_server_error()
    return throw_authorization_error()