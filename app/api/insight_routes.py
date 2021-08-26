from flask import Blueprint, request
from flask_login import login_required
from app.models import Insight, db
# from app.forms import InsightPostForm, InsightUpdateForm
from app.api.utils import throw_authorization_error, user_is_owner, throw_not_found_error

insight_routes = Blueprint('insights', __name__)


@insight_routes.route('/')
# @login_required
def get_all_insights():
    insights = Insight.query.all()
    return {'insights': [insight.to_dict() for insight in insights]}


@insight_routes.route('/<int:id>')
# @login_required
def get_one_insight(id):
    insight = Insight.query.get_or_404(id)
    return insight.to_dict()


# use trailing slash in api route for POSTs
@insight_routes.route('/', methods=['POST'])
@login_required
def insight_post():
        form = InsightPostForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            insight = Insight()
            form.populate_obj(insight)
            db.session.add(insight)
            db.session.commit()
            return insight.to_dict()
        return throw_not_found_error()


@insight_routes.route('/<int:id>', methods=['PUT'])
@login_required
def insight_update(id):
        user_id = Insight.query.get_or_404(id).user_id
        form = InsightUpdateForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            if user_is_owner(user_id):
                insight = Insight.query.get_or_404(id)
                form.populate_obj(insight)
                db.session.add(insight)
                db.session.commit()
                return insight.to_dict()
            return throw_authorization_error()
        return throw_not_found_error()
    
    
@insight_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def insight_delete(id):
    if user_is_owner(id):
        insight = Insight.query.get_or_404(id)

        db.session.delete(insight)
        db.session.commit()
        return insight.to_dict()
    return throw_not_found_error()