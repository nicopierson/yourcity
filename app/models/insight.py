from app.models import db
from sqlalchemy.sql import func


class Insight(db.Model):
    __tablename__ = 'insights'
    
    id = db.Column(db.Integer, primary_key=True)
    insight = db.Column(db.String(1500), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    city_id = db.Column(db.Integer, db.ForeignKey('cities.id'), nullable=False)
    
    user_relation = db.relationship('User', back_populates='insight_relation')
    city_relation = db.relationship('City', back_populates='city_relation')
    
    def to_dict(self):
        return {
            'id': self.id,
            'insight': self.insight,
            'user_id': self.user_id,
            'city_id': self.city_id,
        }
