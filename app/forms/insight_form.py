from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class InsightPostForm(FlaskForm):
    insight = StringField('insight', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
    city_id = IntegerField('city_id', validators=[DataRequired()])
    
    
class InsightUpdateForm(FlaskForm):
    id = IntegerField('id', validators=[DataRequired()])
    insight = StringField('insight', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
    city_id = IntegerField('city_id', validators=[DataRequired()])