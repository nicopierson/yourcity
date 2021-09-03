from app.models.insight import Insight
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import InputRequired, Length, ValidationError
from app.models import Insight


def insight_id_exists(form, field):
    """Checking if insight id exists

    Args:
        form (FlaskForm): wtf flask form
        field (Integer): id field

    Raises:
        ValidationError: Insight provided not found
    """
    id = field.data
    insight = Insight.query.filter(Insight.id == id).first()
    if not insight:
        raise ValidationError('Insight provided not found.')


class InsightPostForm(FlaskForm):
    insight = StringField('insight', 
        validators=[
            InputRequired(), 
            Length(min=1, max=2500)
        ])
    user_id = IntegerField('user_id', 
        validators=[
            InputRequired()
        ])
    city_id = IntegerField('city_id', 
        validators=[
            InputRequired()
        ])
    
    
class InsightUpdateForm(FlaskForm):
    id = IntegerField('id', 
        validators=[
            InputRequired(), 
            insight_id_exists
        ])
    insight = StringField('insight', 
        validators=[
            InputRequired(), 
            Length(min=1, max=2500)
        ])
    user_id = IntegerField('user_id', 
        validators=[
            InputRequired()
        ])
    city_id = IntegerField('city_id', 
        validators=[
            InputRequired()
        ])