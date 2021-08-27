from app.models import City, Insight
from flask_login import current_user


def throw_validation_error(validation_errors):
    error_messages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            error_messages.append(f'{field} : {error}')
    return error_messages


def id_exists(id, model):
    exists = model.query.get_or_404(id)
    if exists:
        return True
    return False


def throw_server_error(message="Server Error"):
    return {'errors': message}, 500


def throw_authorization_error(message="Unauthorized User"):
    return {'errors': message}, 401


def throw_not_found_error(message="Not Found"):
    return {'errors': message}, 404


def throw_input_error(message="Invalid Input"):
    return {'errors': message}, 401


def user_is_owner(user_id):
    print('CURRENT USER **************************** : ', current_user.id, user_id)
    if current_user:
        # TODO Check current user when implementing front-end
        return user_id == current_user.id
    print("Invalid User")
    return False


def city_belongs_to_user(city_id, current_user_id):
    city_check = City.query.get(city_id)
    return city_check and city_check.user_id == current_user_id


def insight_belongs_to_city(insight_id, users_city_id):
    insight_check = Insight.query.get(insight_id)
    return insight_check and insight_check.city_id == users_city_id
