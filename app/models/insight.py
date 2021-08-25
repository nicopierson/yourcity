from app.models import db
from sqlalchemy.sql import func


class Insight(db.Model):
    __tablename__ = 'insights'
    
    id = db.Column(db.Integer, primary_key=True)
    insight = db.Column(db.String(2500), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    city_id = db.Column(db.Integer, db.ForeignKey('cities.id'), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), nullable=False, 
                           server_default=func.now(), onupdate=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), nullable=False, 
                           server_default=func.now(), onupdate=func.now())
    
    user_relation = db.relationship('User', back_populates='insight_relation')
    city_relation = db.relationship('City', back_populates='insight_relation')
    
    def to_dict(self):
        return {
            'id': self.id,
            'insight': self.insight,
            'user_id': self.user_id,
            'city_id': self.city_id,
        }
