from app.models import City, Insight
# from wtforms.validators import ValidationError


def validation_errors_to_message(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


def authorization_errors_to_message(message="Unauthorized User"):
    return {'errors': message}, 401


def input_errors_to_message(message="Invalid Input"):
    return {'errors': message}, 401


def user_is_logged_in(user_sent_id, current_user):
    if current_user:
        return user_sent_id == current_user.id
    print("Invalid User")
    return False


def city_belongs_to_user(city_id, current_user_id):
    city_check = City.query.get(city_id)
    return city_check and city_check.user_id == current_user_id


def insight_belongs_to_city(insight_id, users_city_id):
    insight_check = Insight.query.get(insight_id)
    return insight_check and insight_check.city_id == users_city_id
