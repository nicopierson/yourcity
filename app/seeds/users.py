from app.models import db, User
from faker import Faker


fake = Faker()

def seed_users():
    nico = User(
        username='Nico', 
        email='nicopierson@gmail.com', 
        password='password',
        profile_img='https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/pudds_profile.jpg',
        bio='Amateur student. Wanna know my story? Press that follow button',
        location=fake.city(),
        site='https://www.neeks.com/',
    )
    thayse = User(
        username='Thayse', 
        email='thayse@gmail.com', 
        password='password',
        profile_img='https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/female1022242636810.jpeg',
        bio='Alcohol fan. Travel advocate. Certified entrepreneur. Lifelong internet scholar. Be the reason someone believes in the goodness of people',
        location=fake.city(),
        site='https://www.thayse.com/',)
    andru = User(
        username='Andru', 
        email='andruwatkins@gmail.com', 
        password='password',
        profile_img='https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/male20161086696963562.jpeg',
        bio='Do something today that your future self will thank you for',
        location=fake.city(),
        site='https://www.drudna.com/',)
    kira = User(
        username='Kira', 
        email='kira@gmail.com', 
        password='password',
        profile_img='https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/female1021588970977.jpeg',
        bio='Pop culture buff. Passionate explorer. Troublemaker. Entrepreneur. Wannabe internet trailblazer. Falls down a lot. Zombie nerd. Typical alcohol advocate.',
        location=fake.city(),
        site='https://www.hanslovesu.com/',)
    lema = User(
        username='Lema', 
        email='lemael@gmail.com', 
        password='password',
        profile_img='https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/female20151024316520233.jpeg',
        bio='Organizer. Problem solver. Internet trailblazer. Pop culture practitioner. Avid thinker. Lifelong food maven.',
        location=fake.city(),
        site='https://www.looma.com/',)
    henry = User(
        username='Henry', 
        email='henry@gmail.com', 
        password='password',
        profile_img='https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/male20161086601798553.jpeg',
        bio='Subtly charming beer fanatic. Infuriatingly humble alcohol expert. Tv practitioner. Twitter buff. Born to express, not impress. Typical pop culture fan.',
        location=fake.city(),
        site='https://www.henny.com/',)
    meagan = User(
        username='Meagan', 
        email='meagans@gmail.com', 
        password='password',
        profile_img='https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/female1023094745392.jpeg',
        bio='',
        location=fake.city(),
        site='https://www.meg.com/',)
    pierre = User(
        username='Pierre', 
        email='pierre@gmail.com', 
        password='password',
        profile_img='https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/male20161086426371704.jpeg',
        bio='Travel buff. Communicator. Explorer. Writer. Creator. Love yourself as much as you want to be loved',
        location=fake.city(),
        site='https://www.pierro.com/',)
    simon = User(
        username='Simon', 
        email='simon@gmail.com', 
        password='password',
        profile_img='https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/male20151083598842529.jpeg',
        bio='Gym fanatic. Social media nerd. Food trailblazer. Avid zombie expert',
        location=fake.city(),
        site='https://www.seven.com/',)
    monte = User(
        username='Monte', 
        email='monte@gmail.com', 
        password='password',
        profile_img='https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/male1085459632904.jpeg',
        bio='Internet lover. Student. Web fan. Zombie aficionado. Infuriatingly humble problem solver.',
        location=fake.city(),
        site='https://www.flaggship.com/',)
    michelle = User(
        username='Michelle', 
        email='michelle@gmail.com', 
        password='password',
        profile_img='https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/female20151024346695831.jpeg',
        bio='Travel junkie. Zombie geek. Food specialist. Music buff. Game enthusiast. Social media advocate.',
        location=fake.city(),
        site='https://www.michelle.com/',)
    john = User(
        username='Wanis', 
        email='johnw@yahoo.com', 
        password='password',
        profile_img='https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/male20151083639424103.jpeg',
        bio='Daydreamer, night thinker',
        location=fake.city(),
        site='https://www.wanis.com/',)
    manna = User(
        username='Manna', 
        email='manna@gmail.com', 
        password='password',
        profile_img='https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/female20161025356465057.jpeg',
        bio='I smile because I have no idea what is going on anymore',
        location=fake.city(),
        site='https://www.manna.com/',)
    ayla = User(
        username='Ayla', 
        email='ayla@gmail.com', 
        password='password',
        profile_img='https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/female1022770880279.jpeg',
        bio='Catch flights not feelings.',
        location=fake.city(),
        site='https://www.ayla.com/',)
    jubin = User(
        username='Jubin', 
        email='jubin@gmail.com', 
        password='password',
        profile_img='https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/male1085573599884.jpeg',
        bio='Conquer from within',
        location=fake.city(),
        site='https://www.jubin.com/',)
    torrell = User(
        username='Torrell', 
        email='torrell@gmail.com', 
        password='password',
        profile_img='https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/female102233552369.jpeg',
        bio='Fill your life with experiences so you always have a great story to tell',
        location=fake.city(),
        site='https://www.torrell.com/',)
    kagen = User(
        username='Kagen', 
        email='kagen@gmail.com', 
        password='password',
        profile_img='https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/male1085760317505.jpeg',
        bio='I feel sorry for people who don‘t know me',
        location=fake.city(),
        site='https://www.kagen.com/',)
    javier = User(
        username='Javier', 
        email='javier@gmail.com', 
        password='password',
        profile_img='https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/javier_profile.png',
        bio='Sand in my toes and saltwater in my curls',
        location=fake.city(),
        site='https://www.javier.com/',)
    zach = User(
        username='Zach', 
        email='zach@gmail.com', 
        password='password',
        profile_img='https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/male20161086468632141.jpeg',
        bio='The bad news is time flies. The good news is you’re the pilot',
        location=fake.city(),
        site='https://www.zach.com/',)
    jd = User(
        username='JD', 
        email='jd@gmail.com', 
        password='password',
        profile_img='https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/male20141083547721802.jpeg',
        bio='Doing all things with kindness',
        location=fake.city(),
        site='https://www.jd.com/',)
    chris = User(
        username='Chrisoney', 
        email='chriso@gmail.com', 
        password='password',
        profile_img='https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/male20171084053327576.jpeg',
        bio='Born to shine',
        location=fake.city(),
        site='https://www.chrisone.com/',)
    peter = User(
        username='Peter', 
        email='peter@gmail.com', 
        password='password',
        profile_img='https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/male20151086224549957.jpeg',
        bio='',
        location=fake.city(),
        site='https://www.peter.com/',)
    justice = User(
        username='Justice',
        email='justice@gmail.com', 
        password='password',
        profile_img='https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/male1085351639129.jpeg',
        bio='Take care of your body; it’s the only place you have to live',
        location=fake.city(),
        site='https://www.justice.com/',)
    mary = User(
        username='Mary_Von_Duke', 
        email='maryvonduke@gmail.com', 
        password='password',
        profile_img='https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/female20131023643451691.jpeg',
        bio='I don’t know where I’m going but I can hear my way around',
        location=fake.city(),
        site='https://www.mary.com/',)
    demo = User(
        username='Demo',
        email='demo@gmail.com',
        password='password',
        profile_img='https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/female1021729204651.jpeg',
        bio='Keep the dream alive: Hit the snooze button',
        location=fake.city(),
        site='https://www.demo.com/',
    )
    diana = User(
        username='Diana',
        email='diana@gmail.com',
        password='password',
        profile_img='https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/female20161025063746887.jpeg',
        bio='Be a good person. But don’t waste time proving it',
        location=fake.city(),
        site='https://www.diana.com/',
    )
    

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
    db.session.add(justice)
    db.session.add(mary)
    db.session.add(demo)
    db.session.add(diana)
    
    
    photo_array = [
        'https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/female1021642565277.jpeg',
        'https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/female20151024262893707.jpeg',
        'https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/male20161086605365814.jpeg',
        'https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/photo-by-face-generator_6131741ab7f72d000cf3985c.jpeg',
        'https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/photo-by-face-generator_613175e301f8d2000dbc0ca7.jpeg',
        'https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/photo-by-face-generator_613175f1b7f72d000cf3988b.jpeg',
        'https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/photo-by-face-generator_613175fe01f8d2000dbc0cad.jpeg',
        'https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/photo-by-face-generator_61317628b7f72d000cf39892.jpeg',
        'https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/photo-by-face-generator_6131763a01f8d2000dbc0cb4.jpeg',
        'https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/photo-by-face-generator_6131765201f8d2000dbc0cb8.jpeg',
        'https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/photo-by-face-generator_61317664b7f72d000cf3989b.jpeg',
        'https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/photo-by-face-generator_6131767fb7f72d000cf398a0.jpeg',
        'https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/photo-by-face-generator_6131768c01f8d2000dbc0cbb.jpeg',
        'https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/photo-by-face-generator_61317697b7f72d000cf398a2.jpeg',
        'https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/photo-by-face-generator_613176a801f8d2000dbc0cbd.jpeg',
        'https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/photo-by-face-generator_613176b701f8d2000dbc0cbe.jpeg',
        'https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/female20141023698395508.jpeg',
        'https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/male1084202825988.jpeg',
    ]

    db.session.commit()


def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
