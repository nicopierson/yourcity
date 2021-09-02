from app.models import db, User


def seed_users():
    nico = User(
        username='nico', email='nicopierson@gmail.com', password='password')
    thayse = User(
        username='thayse', email='thayse@gmail.com', password='password')
    andru = User(
        username='andru', email='andruwatkins@gmail.com', password='password')
    kira = User(
        username='kira', email='kira@gmail.com', password='password')
    lema = User(
        username='lema', email='lemael@gmail.com', password='password')
    henry = User(
        username='henry', email='henry@gmail.com', password='password')
    meagan = User(
        username='meagan', email='meagans@gmail.com', password='password')
    pierre = User(
        username='pierre', email='pierre@gmail.com', password='password')
    simon = User(
        username='simon', email='simon@gmail.com', password='password')
    monte = User(
        username='monte', email='monte@gmail.com', password='password')
    michelle = User(
        username='michelle', email='michelle@gmail.com', password='password')
    john = User(
        username='wanis', email='johnw@yahoo.com', password='password')
    manna = User(
        username='manna', email='manna@gmail.com', password='password')
    ayla = User(
        username='ayla', email='ayla@gmail.com', password='password')
    jubin = User(
        username='jubin', email='jubin@gmail.com', password='password')
    torrell = User(
        username='torrell', email='torrell@gmail.com', password='password')
    kagen = User(
        username='kagen', email='kagen@gmail.com', password='password')
    javier = User(
        username='javier', email='javier@gmail.com', password='password')
    zach = User(
        username='zach', email='zach@gmail.com', password='password')
    jd = User(
        username='jd', email='jd@gmail.com', password='password')
    chris = User(
        username='chrisoney', email='chriso@gmail.com', password='password')
    peter = User(
        username='peter', email='peter@gmail.com', password='password')
    jm = User(
        username='jm', email='jm@gmail.com', password='password')
    mary = User(
        username='Mary_Von_Duke', email='maryvonduke@gmail.com', password='password')
    

    db.session.add(nico)
    db.session.add(thayse)
    db.session.add(andru)
    db.session.add(kira)
    db.session.add(lema)
    db.session.add(henry)
    db.session.add(meagan)
    db.session.add(pierre)
    db.session.add(simon)
    db.session.add(monte)
    db.session.add(michelle)
    db.session.add(john)
    db.session.add(manna)
    db.session.add(ayla)
    db.session.add(jubin)
    db.session.add(torrell)
    db.session.add(kagen)
    db.session.add(javier)
    db.session.add(zach)
    db.session.add(jd)
    db.session.add(chris)
    db.session.add(peter)
    db.session.add(jm)
    db.session.add(mary)

    db.session.commit()


def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
