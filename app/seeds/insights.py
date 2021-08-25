from app.models import Insight, db
from random import randint


def seed_insights():
    insights = [
        [3, "My favorite city in the U.S. Fantastic cultural amenities. Fantastic food from around the world. Great shopping. Lots of interesting architecture and history. The best weather in the world. Endless Pacific Ocean at your feet. Great music city. Year around beautiful flowers and gardens. Multi-cultural. The absolute best city for year around outdoor activities. Fantastic hiking areas. I honestly can not imagine living anywhere else."],
        [3, "I can't wait to get out of this place. The exodus out of California in general and Los Angeles in particular has been in motion for a little while now, and I'm going to be on that train soon and I can't wait! It's crazy here - insanely expensive (try 9% sales tax on everything but food to start with!), so crowded, lots of people with bad attitudes (even when you try to be nice to them!) and so dirty! Yeah, the weather is great, but that doesn't make up for all the other stuff you have to put up with. Oh, and ....... buying property?? Hahahah! Forget that if you make anything less than $100,000 a year!"],
        [3, "L.A is a great place to live if you live for diverse food, nightlife, concerts, celebrities, shows, branded shops, and lots of \"friends\" who love the same things as you do. if you want to facebook about great restaurants, awesome concerts, which celebrities are doing what next door, you will be so happy . You will have endless things to facebook about 24/7, and if you don't, you will soon be forgotten. People are super nice, depends on your definition of nice. But if you want a place where you can nurture your soul (good friends, good conversations, honesty and kind hearts ), you will feel like a fish in a desert. I have travelled (backpacked) 20 countries solo, I have never been to a place where I didn't like the people, I even liked Indians (women only), LA is the 1st place I find myself lonely. I have no problem meeting new people, I can start a conversation with just about anyone. I have got some compliments saying that I'm a great conversationalist, yet I find myself lonely. I've lost any interests in engaging in conversations with people. They are dull, superficial, attention seeking, overly exaggerating pretty much about anything. Everything they do is \"super fun\", every restaurant is \"super good\", every person they have met is \"super nice\". Every place they have been is just so \"great!\". They are all about adjectives, but there is no place for your soul to rest, or for my soul to rest. If you like city life, leave your heart and soul at home, and come to this city, and have fun."],
        [3, "LA is a place where you go after you’ve established some sort of solid foundation whether it be obtaining a useful degree or moving jobs. As someone who moved there at 20, I found it very difficult to make a lot of money( I work in marketing not “acting” or modeling). People move to LA with the hopes of being discovered yet fail to realize that most celebrities that live there were discovered elsewhere and settled in LA. Rent is absurd, groceries are expensive, and the gas is through the roof.. especially having to constantly fill up from the stop and go of the 405/101. It is BEAUTIFUL if you can find the right spots that are not filled with tourists. The forest, Malibu, Santa Monica mountains... it truly is s gorgeous place to live if you can afford it and avoid 85% of the people that now live there."],
        [3, "Lived there for 27 years. I just left LA for Lancaster, Ca. I worked in downtown and commuted from Boyle Heights. It was a 10 min drive without traffic (hardly ever seen that) but of course with traffic it was 30 mins normally. The rents keep increasing, the utilities grew along with it. There's always traffic everywhere you go. The homeless population is growing and the mayor does nothing. Everyone wants to be in LA but you have no idea what it is til your there. I miss only family other than that, Lancaster is peaceful and growing."],
        [2, "I first moved the city in the late 70's. It was a great place then. Friendly, creative people, relatively peaceful, and of course beautiful. There was a great vibe going on. But now! I've been back to live there maybe a dozen times, and each time it just got more expensive while offering less, and the city I once knew is now totally destroyed by greed. People moan about the liberals, but it's about corruption and ineptitude really. The liberals that are still there, and there's not many, constantly fight among themselves. There is NO consensus between no one, especially on important things like the homeless, crime, traffic, all that. The police have been a disaster with their so called \"containment\" policy, and folks, they have been doing this for going on half a century! Their policy of cramming all the drug addicts and assorted criminals into the Tenderloin and allowing them to do what they want with impunity is insane. Besides, what sort of message does that send to the rest of society? It does not work. TNDC controls all of the low rent hotels, and they are a huge bureaucracy. Very, very corrupt and, again, incompetent. But they get away with it because the mayors are ineffective and the police do what they wish. Downtown weather is awful due to all the high rises. Cold winds whip through streets that get little light due to the huge buildings. MUNI is another total disaster. I only took BART. If I couldn't get somewhere except by MUNI, then I walked or called a cab. It is unsafe and unreliable. Now, let's talk about the people who now reside in S.F. Monied, selfish rubes from somewhere else. The magic is really gone."],
        [2, "So you have a HOT OPPORTUNITY in the BAY AREA? Here's what to expect so you go in eyes wide open: > You will only save money at big company jobs if you super commute or accept living in a small or shared living space (typically not friendly for families with kids). Jobs are easy come, easy go in early to mid stage startups. Companies expect to hire and fire easily as business strategies change. Employees can find jobs quickly in their specialty too, which is what makes the Bay Area so great. It all works out UNLESS you move for a job in SF and the next job is in the South Bay. North Bay, East Bay, SF, the Peninsula, and South Bay are four different job markets. > Public schools will not give your kids the education that you yourself needed to get your job. Public schools, especially in San Francisco, are below grade. Most middle class families send their kids to private schools, but it is hard to be top of the class where your kid is not the richest, and it's hard to get into top colleges when you're an average student graduating from a privileged SF private school. If you send your kids to public school, the San Francisco school lottery will scatter any financial planning you have. You will always be a few years from the next lottery. Getting a crappy school means either sending your kid to private school ($50k / year - see tradeoffs above) or selling that $1.5 MM apartment you just bought and moving to the suburbs. (Let's hope big companies stay and there's not another property crash.) > The high end foodie scene is AMAZING. There are diverse food choices from almost any country in the world. The farmer's markets are a wonderful part of every neighborhood. HOWEVER, casual dining and family owned restaurants are not the quality they are in other cities like Atlanta, Seattle, or Washington DC. Restaurant entrepreneurs have to take the rent out of their food quality. You will pay $25+ per plate to get the same food quality you get for $10-15 in any other major city. I miss the casual dining of my old hometown, and they had most of the international food I eat here."],
        [2, "I've lived in San Francisco for over 30 years. People exaggerate the problems that exist. It is true there is a homeless problem, as there is in all major cities across the nation. Since San Francisco is wonderfully generous to the downtrodden and has moderate weather, people prefer to be homeless here rather than places like Minneapolis. I wouldn't trade the weather and life style here for the midwest. I can golf all year long and people here have an independent and care free attitude. It is true that silicon valley high earning workers are helping to drive up prices of real estate and its expensive to live here for a variety of reasons. It's also true that not everybody wants to live here, because all cities have problems. But I believe there are many wonderful things to do here and the good outweighs the bad. Of course, it's too expensive. There are many things we need to make better. I don't know why people make their bitter claims about The City (by the bay). I know for instance the poop problem is not as crazy as it is claimed by many. I've never encountered it myself and I go to most neighborhoods. The mayor and others are addressing these problems, as they should. Maybe people make all the exaggerated claims because they're jealous or maybe it's our current politics. No matter all our faults, I still love San Francisco!"],
        [2, "There are no words for how amazing San Francisco is. It is a beautiful city indeed. The only problem I have had there is I didn't stay long enough! There are many places to visit and plenty of things to do. It is the heart and soul of california."],
        [8, "Raised in Greater Boston area and I love this city. I went to the oldest school established in 1635 called Boston Latin School. Harvard was founded one year later in 1636 for our school’s first graduating class being the oldest higher education institution in the US. Puritans landed in Plymouth, MA in 1620 and celebrated the first Thanksgiving in 1621. First battle of American Revolution was fought in Lexington and Concord, MA. I love MA for its history, culture, and top ranking universities and hospitals. Boston is currently ranked the best hospital city of the US and second best in the world after Tokyo due to the large number of Harvard affiliated hospitals. I have lived in Los Angeles for the past few years and Los Angeles is nowhere compared to Boston in so many aspects. Air pollution is the worst in CA. Earthquakes, wildfires and constant droughts in SoCal make Los Angeles undesirable to live in. Homelessness in Downtown LA is an terrible sight to see. CA has high taxation rates but spend its money on satanic liberal causes like abortion (Planned Parenthood) instead of building subsidized housing for the homeless. The longer I live in Los Angeles, the more I miss Boston, so I just moved back to Boston. I kiss the historical sites in MA. I miss Harvard and MIT and the college intellectual vibes here. MA currently ranks number two in education and healthcare, and ranks number one as the best state to raise a family. Homeless people have shelters and subsidized houses to live in because Boston boasts to be the most philanthropic city of the US. I feel bad for those homeless people in LA. I think they should come to MA for a try. Other than some occasional snow in the winter which would brighten up our Christmas and which we can play with, Boston is pretty much disaster free. Before I moved back from LA, I experienced a wildfire and an earthquake near where I lived, and the droughts which would force LA to plant palm trees and cactuses are terrible. Air pollution is so terrible that our cars would collect dusts all over after having been cleaned for a few days. So yeah, I would not leave the Athens of America to live anywhere else. Besides, MA is surrounded by other New England states where Ivy League universities abound. I love the scholastic vibe in these New England states. When fall comes, we can enjoy colorful New England Fall Foliage."],
        [8, "I was born and raised in Boston, the only good thing about this place is the money, if you have a great job. Other than that, the weather sucks, people are rude, people are racist, and it is not a pretty city. Schools are great, only if you can afford it. It’s a fairly clean city except maybe the more urban areas. I give Boston one star because after all these years, it hasn’t gotten better. If you’re not white it’s sort of difficult to move up professionally. At least for a minority, you have to constantly be in a defensive mode because racism is alive and active here."], 
        [8, "I grew up 25 miles outside of Boston and currently live about an hour north in New Hampshire. Boston definitely isn't for everyone its crowded and expensive, it can be difficult to navigate (though I find the non grid layout to be part of its charm) and people are generally in a rush. It has a reputation as an unfriendly city but in my travels, I've always found Southern US cities to be unfriendly, I think it has more to do with where your from. In the South I have had people try to pick fights with me over the Civil War....so there's that. The MBTA is fairly reliable as far as public transportation goes, though it shuts down too early. As far as cities goes its relatively safe. There is a ton of history to explore, if your a history buff you'll enjoy it. We have all the major sports (Patriots are outside of town), a good music and arts scene and plenty of Parks (the Emerald Necklace is 1100 acres of interconnected parks). We have top tier universities and hospitals. Boston is very compact, 48 square miles, compared to other cities (Jacksonville is 747, Nashville is 475, Indianapolis is 361) so I think that's why some people don't consider it a major city, which is foolish. It does snow which seems to bother outsiders but it's New England so it is what it is. All in all it's not perfect but I still find it more enjoyable than plenty of other large cities like Atlanta, Philadelphia or St. Louis."],
        [7, "I was born & raised in NYC. During the time I grew up there is was a GREAT place to live & grow up. However, over the years it changed. It is expensive to live, but so are a lot of other places with far less to offer. NYC has so much to do it is nearly impossible to be bored unless you are broke. There is seemingly nothing that you can't get there. Transportation is plentiful and affordable. If you don't think so, try living some place like NC or Baltimore. While Baltimore has a train & bus system it is not comprehensive at all. NYC is quite crowded, but for some that is the attraction. People draw energy from other people so this is what makes NYC so electric!! If you are not a people person or you have a phobia of crowds then I suppose NYC is not for you. The NYC public school system sucked out loud as I can recall which is why in 1997 my ex-husband and I decided to leave with our 3 kids. That was 23 years ago, so I am uncertain what it is like now, but I can't imagine that it is any better today. So I guess what I am saying is that like any place else NYC has its good and bad. From what I am to understand there is a lot of gentrification that is going on there now. So certain areas that weren't the best back when I still lived there are now better. While some areas that I remember being pretty good are now considered bad. I still rate NYC a 3 because all in all NYC still has a lot more going for it than a lot of other places (and I am solely basing this off the other 2 places that I have lived). On the other side, what contributes to giving NYC a 3 is the fact that I would not move back there today. One of the reasons is because while some of the changes I mentioned above can be considered good, I am older now and having to start over learning the City that I once knew very well would be considered a set-back for me. OH and yes the prices for where I would want to live today is probably out of my price range, although if you think Maryland doesn't have $8.5 gazillion dollar homes without the view or land etc you would be wrong. Other states can be just as pricey or pricier without any reason or cause."],
        [7, "Born and raised in queens. if you don’t know how to hustle and aren’t prepared to work multiple jobs/multiple incomes you won’t do well in NY. Unless you’re a doctor or something, This is a dog eat dog city. As awful as that sounds that’s what makes NYC so great. The natural average resident understands that. Frank Sinatra saying if you can make it here you can make it anywhere is absolutely fact. The food options are amazing as it’s one of the most diverse places on earth. I want to move as I’m done with it to be honest. I want a nice house, vegetables and other things that come with quality of life. Quality of life in NY is based on how smooth your commute time is and if you can avoid paying tolls. Too expensive for young people like me even on a good salary. I would have left years ago if it wasn’t for my family. It gets a 2 for food and family for me."],
        [7, "As our culture becomes more atomized, NYC - the singles capital of the world - is the showroom for the rest of the US of what's to come. It USED to be a great city... back when there was such a thing as culture in this country, true friendship existed, and romance was a real possibility. Now that social media has removed any possibility for a counterculture to exist and form new trends, the only culture phenomena that form are created by corporate committees with a profit motive. Friendships are useless in NYC unless they can be documented for social media. And, romantic entanglements are as meaningful as the swipe of one's thumb. Consequently, it's no surprise that NYC has become a cultural and spiritual wasteland - unless you think seeing the Broadway version of The Lion King is culture. Friendships are fleeting and dating is a total nightmare. I've lived in NYC for nearly 20 years. I'm rich. I moved here broke and made it in NYC. I have nothing to complain about. It's been good to me. But, it has ZERO to offer at this point. The restaurants suck, are overcrowded and overpriced even by NYC standards, the people hate each other, and there's nothing to do other than sit in your apartment and brag to your friends back in Springfield that you're in NYC. What's the point? If you're young and want to start your career, you can do that anywhere now and you don't have to give up your entire paycheck for a crappy apartment as the price of entry. Start your life elsewhere. I'm off to Miami - Feb 2021."],
        [4, "The idea of Austin is what you are getting reviews of most of the time. The idea of Austin is grand slam, rivaled by none, absolute awesome. But what it is and has become vastly differ in a lot of cases to what you read about and see in reviews. Austin absolutely does have a lot of really cool and attractive qualities to it. Make no mistake, the city can be a fun and friendly time for just about anyone. Living here is a different thing though and evolving rapidly. I have lived here about 8 years so I can’t speak to what it was prior, but I can see glimpses of it. Just from my time here, the city is a completely different place. There absolutely is a massive homeless, drug, and crime problem in the Austin proper area and it continues to get worse and worse as time goes on. The reason for this is politics, the influence of political media in regards to economics, and the cities understanding of growth and opportunity. Regardless of where you sit on these aspects, it just is what it is. This is the reason you find “the natives vs the libs” arguing most of the time. Obviously, if you were born and raised somewhere that had a distinct style and type of life that you desired, you would not want that to change. The absolute only way to know if this is the place for you, is to come here and spend a little time as it is developing and changing so rapidly it would be hard to get a full understanding any other way. The prices are rising, the “bad areas” are expanding, but it is doable in a relatively comfortable and easy way. If you are young and single, closer to Austin and more specifically south Austin, is the way to go. If you are older and have a family, north of Austin in Round Rock area is the way to go. If you are more Liberal or more Conservative, you will find many like minded people who share the same views. Same goes for the non political. Obviously, this is mostly my opinion, but for a gauge of who this is coming from, I am a Libertarian, musician, artist, working family man in my late 30’s with a household income a little over $100k. I have lived in Austin, Dallas, Los Angeles, Oklahoma City, Portland OR. Hope this helps!"],
        [4, "I've been to Austin many times and I don't see the negativity being claimed. I walked by City Hall and the long park along the river where I see people jogging everyday with lots of trees and greenery. Downtown has lots of restaurants and musical festivals for aspiring artists and bands. The South by South West festival every year is great. The restaurants and food are great. Now the Pandemic may have caused a lot of restaurants to go under, but not to say they can't reopen and come back. Between USAA HQ, Electronic Arts/Bioware HQ is there, Elon Musk moved Tesla HQ and SpaceX HQ there."],
        [4, "I've been to Austin and have friends who live there. I haven't seen anything negative like others claim. Cost of living was actually cheaper than where I live in Virginia and Austin is considered the next Silicon Valley with all the startups, musicians, and migration of Silicon Valley to Austin."],
        [4, "I've lived in Austin twice, and the quality of life here has taken a sharp nose-dive over the decades. There used to be a family-oriented, friendly neighbor vibe. Now, this is only a good place to live if you like non-stop construction, overpriced housing, feeling like a non-citizen in your own country, being required to be bilingual for a lot of jobs and awful traffic."],
        [4, "Austin has lost its charm and sure as hell lost its \"weirdness.\" It's turned in to a pretentious, money hungry town which has not aged well at all. It thinks its cooler than it actually is...and to be honest with you there's not a lot to do there besides go to bars. Plus, the summer heat is awful. Way overrated city."],
        [10, "Beautiful place, well into the late 20th Century ... clean, safe, fun, peaceful. Started seeing elements of crap, just a tiny bit, back around 1980. Now what changed since the turn of the century, I wonder ... yeah right. In the U.S.A. some things are forbidden to say publicly. Can't call it out, not permitted. Gotta dance around it like I'm trying to do in this post, which will probably get deleted or heavily edited. The window of opportunity in this country has shut to stop cultural decay. Many people know what changed in Miami over the past 20 -30 years, especially in the past decade or two, that has clearly turned Miami into a complete dump. Not allowed to say it or write it freely in America many things, of course, but what happened to Miami is the ugly truth nonetheless. Why write this now on this website? Another mass drive-by shooting, two within a day or so in Miami. All people need and deserve a place, a country; but every one of us also deserve to not have to live among people they do not want to live with in their community or country for any reason and in a democracy this should be protected as well."],
        [10, "Great sexy, cosmopolitan, year-round warm weather waterfront city. Moved here from San Diego and could not be happier with my choice...more exciting, sophisticated city with great restaurants, nightlife, shopping, walkable areas, best looking women in the country, convenient international hub airport for American Airlines and the world's largest cruise port nearby, nice weather, and no state income tax. I live in Brickell, which happens to be the financial center of the city but also an upscale residential and commercial area that attracts highly successful and clean cut professionals. Modern and new construction and extremely walkable with all the conveniences and stores you need outside of a Target and Office Depot (though we do have Brickell City CentreMall and numerous other shops). Beautiful walk paths along Biscayne Bay and within close proximity to other cool neighborhoods such as Coconut Grove, Key Biscayne, Coral Gables, Little Havana, Wynwood, Design District, and South Beach. Weather is an asset. Best weather in the country from November 1 - May 30 and the summers are tolerable, bordering on outright enjoyable, as we get breezes off the bay while tall buildings and trees provide shade.....far more bang for the buck in terms of real estate compared to other desirable coastal cities such as NYC, Los Angeles and San Francisco. World class cultural events such as Art Basel, Ultra, Art Deco Weekend, International Boat Shows. Top chefs (Thomas Keller, Jose Andres, Jean-Georges) and top restaurants, some Michelin starred, from NYC, DC, Philadelphia, Europe and South America have a presence here."],
        [10, "I've lived in Miami and off for 20 years. Love the weather. I'm ok with hot & humid. I lived up north and I'm over cold winters. Living in Miami depends on where you live. There are sections, bubbles really of concentrated ethnicities. Ex: Hialeah is predominantly Cuban, Little Haiti is mostly Haitian, Doral is mostly Venezuelan, Central Miami Beach has an area that's all Argentinean, Opa Locka & Liberty City are mostly African Americans and so on etc... It's a melting pot of many Caribbean, Central & South American, Northerners, Europeans, people from everywhere really."],
        [10, "From my perspective, here's the bad: 1. IT IS EXPENSIVE! Housing is ridiculous! You might find one bedroom in a shared house for $900 a month, but almost any apartment is over $1300 a month and that's in not so great areas. 2. You NEED a car! Some people I know Uber to work but that gets expensive. 3. Some areas are NOT safe and I would not go anywhere near them at night. Just talk to a local and they'll tell you where not to go, I guess it's like any big city in that respect. 4. There are no seasons. It's just hot all year round. It can get chilly in the winter like 50 degrees but it never lasts long. 5. The pay for average jobs is not great & doesn't allow for high cost of living. You'll more than likely need a roommate to survive. Almost EVERYONE here has two or more jobs just to make ends meet. Unless you have a high paying job. 6. The traffic is INSANE! People drive here like they did in their countries, no rules, just the first one to get in, gets in. Rude drivers, crazy drivers, STUPID drivers! And don't even think about giving them the finger or trying to argue, that's a sure way to start a fight. 7. It's a Rat Race. It's a GO GO GO city. People don't stop. There's never enough time to slow down and just chill. Most people I know have school and full time jobs. People here work HARD! If you're not into that, you probably won't succeed here."],
        [10, "Ok now The good: 1. There are many job opportunities. You just have to look for them. Mostly here it's who you know- gets you in to a good job. 2. Beach weather almost year round! If you just want to get away from it all, just head to the beach or the Keys which are an hour away. Melt your cares away! 3. Culturally RICH! Most of my vacations have been staycations. There is SO much to do here. You will NEVER get bored! Like ever! There is ART, Music of every genre, Night life, clubs, theater, Museums, Historical sites, amusement parks, zoo's, outdoor activities, literally EVERYTHING!!! 4. It's family friendly. Look for good schools though. Public schools are just ok. 5. Universities and Colleges are everywhere, SO many opportunities to better yourself! People of all ages go to Colleges here. Easy to get scholarships. 6. People are welcoming and friendly! You can strike up a conversation with anyone! And they won't look at you weird. 7. Food is AMAZING! You can get anything anywhere, high end, home made, mom pop shops, large chains, anything! Any price range. Overall it's good, just hate the traffic and how expressive it is to live here. Hope that helps!"],
    ]
    
    insights_to_db = []
    for insight in insights:
        insight_to_add = Insight(
            city_id=insight[0], insight=insight[1], user_id=randint(1, 23))
        insights_to_db.append(insight_to_add)
    db.session.add_all(insights_to_db)
    db.session.commit()


def undo_insights():
    db.session.execute('TRUNCATE insights RESTART IDENTITY CASCADE;')
    db.session.commit()