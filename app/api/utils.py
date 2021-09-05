from app.models import City, Insight
from flask_login import current_user


def throw_validation_error(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    # error_messages = []
    error_obj = {}
    for field in validation_errors:
        for error in validation_errors[field]:
            error_obj[field] = error
    # error_messages.append(error_obj)
    return {'errors': [ error_obj ]}, 401


def id_exists(id, model):
    """
    Simple function to check if id exists in the model
    """
    exists = model.query.get_or_404(id)
    if exists:
        return True
    return False


def throw_server_error(message="Server Error"):
    """
    Throw a server error 500
    """
    return {'errors': message}, 500


def throw_authorization_error(message="Unauthorized"):
    """
    Throw an unauthorized error 401
    """
    return {'errors': message}, 401


def throw_not_found_error(message="Not Found"):
    """
    Throw an not found error 404
    """
    return {'errors': message}, 404


def throw_input_error(message="Invalid Input"):
    """
    Throw an invalid input error 401
    """
    return {'errors': message}, 401


def user_is_owner(user_id):
    """
    Check if the user is the current owner of the id parameter
    """
    if current_user:
        return user_id == current_user.id
    return False


def city_belongs_to_user(city_id, current_user_id):
    """
    Check if the city_id belongs to the current user
    """
    city_check = City.query.get(city_id)
    return city_check and city_check.user_id == current_user_id


def insight_belongs_to_city(insight_id, users_city_id):
    """
    Check if the insight_id belongs to the current user
    """
    insight_check = Insight.query.get(insight_id)
    return insight_check and insight_check.city_id == users_city_id
