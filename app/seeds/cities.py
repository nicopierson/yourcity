from app.models import City, db


def seed_cities():
    sao_paulo = City(
        name='São Paulo',
        state='São Paulo',
        thumbnail_img='https://vejasp.abril.com.br/wp-content/uploads/2016/12/parque-1.jpg?quality=70&strip=all',
        description='Sao Paulo is the eclectic financial center of Brazil and the most populous city in the country. To say this city is a bustling metropolis would be a huge understatement. From grand cultural events like the world’s largest Gay Pride Parade to cutting-edge art galleries and stunning historic monuments, the city will have you coming back to explore more.',
        user_id=2,
    )
    san_francisco = City(
        name='San Francisco',
        state='California',
        thumbnail_img='https://wikitravel.org/upload/shared//6/64/San_Francisco_Banner_2.jpg',
        description='San Francisco is a major city in California, the centerpiece of the Bay Area, well-known for its liberal community, hilly terrain, Victorian architecture, scenic beauty, summer fog, and great ethnic and cultural diversity. These are only a few of the aspects of the city that make San Francisco one of the most visited cities in the world.',
        user_id=6,
    )
    los_angeles = City(
        name='Los Angeles',
        state='California',
        thumbnail_img='https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/54/7d.jpg',
        description='The city of Los Angeles [69] (also known simply as L.A., and nicknamed the "City of Angels") is the most populous city in California. Located on a broad basin in Southern California, the city is surrounded by vast mountain ranges, valleys, forests, beautiful beaches along the Pacific Ocean, and nearby desert.',
        user_id=1,
    )
    austin = City(
        name='Austin',
        state='Texas',
        thumbnail_img='https://wikitravel.org/upload/shared//8/8c/Austin_Banner.jpg',
        description="Austin is a city of over 981,000 in the Hill Country of central Texas. It is the state capital and home to a major university as well as an influential center for politics, technology, music, film and (increasingly) a food scene. Austin\'s embrace of alternative cultures is commonly emblazoned about town on T-Shirts and bumper stickers that read: \"Keep Austin Weird.\" Austin is also marketed as the \"Live Music Capital of the World\" due to the large number of venues and \"Silicon Hills\" reflecting the many technology companies.",
        user_id=3,
    )
    newark = City(
        name='Newark',
        state='New Jersey',
        thumbnail_img='https://visitnj.org/sites/default/files/styles/article_slideshow_full/public/CherryBlossomBranchBrook.jpg?itok=DVXq78O9',
        description='',
        user_id=5,
    )
    nashville = City(
        name='Nashville',
        state='Tennessee',
        thumbnail_img='https://wikitravel.org/upload/shared//8/8a/Nashville_banner.jpg',
        description="Nashville is a city in Davidson County and the capital of the American state of Tennessee, as well as being the state's largest city as of 2017. It is usually called the \"Country Music Capital of the World\" or more often \"Music City, USA\"; however, in recent years, Nashville has done much to escape its country music image and become a regional center of culture and commerce. In fact, Dell, Nissan, GM Motors, Amazon, AllianceBernstein, Bridgestone, UBS Financial Services, HCA, Community Health Services, Lyft, Google, and Microsoft have all moved some operations to or near the city. The music is various; major rap artists and rock bands (Young Buck, Haystak, Kings of Leon, Paramore, and Ben Folds) claim Nashville as their hometown. Nashville is also the epicenter of the contemporary Christian music industry. Nashville is also notable for line dancing as well.",
        user_id=7,
    )
    new_york_city = City(
        name='New York City',
        state='New York',
        thumbnail_img='https://wikitravel.org/upload/shared//d/d0/New_York_Banner.jpg',
        description='New York City (also referred to as "New York", "NYC", "The Big Apple", or just "The City" by locals), is the most populous city in the United States. It lies at the mouth of the Hudson River in the southernmost part of the state, which is part of the Mid-Atlantic region of the U.S. The city spans a land area of 305 square miles (790km²). New York City is a center for media, culture, food, fashion, art, research, finance, and trade. It has one of the largest and most famous skylines on earth, dominated by the iconic Empire State Building.',
        user_id=9,
    )
    boston = City(
        name='Boston',
        state='Massachussetts',
        thumbnail_img='https://wikitravel.org/upload/shared//4/4d/Boston_Banner.jpg',
        description='Boston is the largest city in New England, the capital of the state of Massachusetts, and one of the most historic, wealthy and influential cities in the United States of America. Its plethora of museums, historical sights, educational institutions, restaurants and wealth of live performances, all explain why the city gets 16.3 million visitors a year, making it one of the ten most popular tourist locations in the country.',
        user_id=11,
    )
    milwaukee = City(
        name='Milwaukee',
        state='Minnesota',
        thumbnail_img='https://wikitravel.org/upload/shared//b/b4/Milwaukee_Banner.jpg',
        description='Milwaukee is the largest city in the state of Wisconsin, United States. The city\'s population is 594,833 with an estimated total of 1,572,245 in the Milwaukee metropolitan area (2010). It is the 31st largest city in the U.S. and is in the southeastern portion of the state on the western shore of Lake Michigan.',
        user_id=13,
    )
    miami = City(
        name='Miami',
        state='Florida',
        thumbnail_img='https://images.miamiandbeaches.com/crm/simpleview/image/upload/c_fit,w_1440,h_900/crm/miamifl/Miami_Beach_Marina_1440x9000-71d78d2a5056a36_71d78edb-5056-a36a-0b88eb67bb3d6f33.jpg',
        description='Miami is a major city in the south-eastern United States and part of the largest metropolitan area in Florida. Part of the South Florida region, it\'s 20 miles from Fort Lauderdale, 68 miles from West Palm Beach, 106 miles from Naples (Florida) and 156 miles from Key West. It is famous for its gay pride event White Party Miami which is annual.',
        user_id=16,
    )
    louisville = City(
        name='Louisville',
        state='Kentucky',
        thumbnail_img='https://www.visiteosusa.com.br/sites/default/files/styles/hero_xl_1600x700/public/images/hero_media_image/2019-05/8b51d96e43bae90ec54f4d1b79c856a3.jpeg?h=8d751e12&itok=IbIvK3Ku',
        description='Louisville is the largest city in Kentucky, with about one and a quarter million people living in the metro area. Louisville is also the namesake of the Official Bat of Major League Baseball - the Louisville Slugger. Louisville\'s biggest draw are the horse races at Churchill Downs. The architecture in Old Louisville and the Highlands is one-of-a-kind, and the people are very friendly.',
        user_id=17,
    )
    san_diego = City(
        name='San Diego',
        state='California',
        thumbnail_img='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F02%2F05%2Fsan-diego-california-SDTG0221.jpg&w=1100&h=737&c=sc&poi=face&q=85',
        description='San Diego is a large and pleasant coastal city right on the Pacific Ocean in Southern California. It\'s home to 1.3 million citizens and the second-largest city in the state with many universities and good swimming beaches. It\'s also known for its ideal climate, bio and communications technologies, long history, nightlife, outdoor culture and ethnic diversity.',
        user_id=18,
    )
    salt_lake_city = City(
        name='Salt Lake City',
        state='Utah',
        thumbnail_img='https://cdn2.tropicalsky.co.uk/images/1362x454/salt-lake-city-sunrise-utah.jpg',
        description='Salt Lake City is the capital and largest city of Utah, with a population of approximately 190,000. It is one of the largest cities in the Southwest region of the United States, although its climate is more similar to the Rocky Mountain region. It lies in the Salt Lake Valley along the Wasatch Front urban corridor. Salt Lake City is well-known as the center of The Church of Jesus Christ of Latter-day Saints (also known as the Mormon church), although fewer than half of the city\'s residents are members. The city is also known as a base for outdoor recreation, including the many nearby ski resorts just east of the city.',
        user_id=19,
    )
    portland = City(
        name='Portland',
        state='Oregon',
        thumbnail_img='https://wikitravel.org/upload/shared//4/49/Portland_Oregon_Banner.jpg',
        description='Portland, "the City of Roses", is the largest city in Oregon and the second largest city in the Pacific Northwest after Seattle. The city is noted for its scenic beauty, great outdoors environment, a large number of microbreweries, and its eco-friendly urban planning policies.',
        user_id=21,
    )
    houston = City(
        name='The Colony',
        state='Texas',
        thumbnail_img='https://wikitravel.org/upload/shared//f/ff/Houston_banner.jpg',
        description='Houston is the largest city in Texas and the fourth largest in the United States. Apart from its population, it is also huge in terms of square miles. Houston is multicultural and diverse, home to some of the nation\'s largest Latino, African American and Asian American populations. It boasts an eclectic museum and arts scene, vibrant shopping, and has become a burgeoning destination for food lovers.',
        user_id=22,
    )
    paris = City(
        name='Paris',
        state='France',
        thumbnail_img='https://wikitravel.org/upload/shared//6/6f/Paris_Banner.jpg',
        description='Paris, the cosmopolitan capital of France, is one of Europe\'s largest cities. Dubbed the City of Light (la Ville Lumière) and Capital of Fashion, it is home to the world\'s finest and most luxurious fashion designers and cosmetics, such as Louis Vuitton, Chanel, and Dior. contains numerous iconic landmarks, such as the world\'s most visited tourist site the Eiffel Tower, the Arc de Triomphe, the Notre-Dame Cathedral, the Louvre Museum, and Moulin Rouge.',
        user_id=2,
    )
    porto = City(
        name='Porto',
        state='Portugal',
        thumbnail_img='https://wikitravel.org/upload/shared//1/12/Porto_banner.jpg',
        description='Porto is a fascinating and vibrant city. There is the warren of narrow streets that make up the ancient Ribeira district, the grand plazas of Tinidade, and the beach views of Foz. Porto is famed for the production of Port wine, holding up to 14 Port cellars ripe for tasting.',
        user_id=1,
    )
    montreal = City(
        name='Montreal',
        state='Canada',
        thumbnail_img='https://wikitravel.org/upload/shared//0/0a/Montreal_banner.jpg',
        description='Montreal (French: Montréal) is the metropolis of the province of Quebec. Quebec City is the political capital but Montreal is the cultural and economic capital of Quebec and the main entry point to the province. The second largest city in Canada, it is a city rich in culture and history and a well-deserved reputation as one of the liveliest cities in North America.',
        user_id=8,
    )
    cairo = City(
        name='Cairo',
        state='Cairo',
        thumbnail_img='https://i0.wp.com/www.descobriregipto.com/wp-content/uploads/2017/08/308-582.jpg?ssl=1',
        description='Cairo is the capital of Egypt and the largest city in Africa, with a name that means "the victorious city." It is located on both banks of the River Nile near the head of the river\'s delta in northern Egypt and has been settled for more than 6,000 years, serving as the capital of numerous Egyptian kingdoms. The city is marked by the traditions and influences of the East and the West, both the ancient and the modern.',
        user_id=5,
    )
    bangkok = City(
        name='Bangkok',
        state='Bangkok',
        thumbnail_img='https://wikitravel.org/upload/shared//2/29/Bangkok_Banner.jpg',
        description='Bangkok is the capital of Thailand and, with a population of over eleven million inhabitants. It is one of Asia\'s most cosmopolitan cities with magnificent temples and palaces, authentic canals, busy markets and a vibrant nightlife that has something for everyone. Bangkok is a huge and modern city humming with nightlife and great aromas.',
        user_id=1,
    )
    
    db.session.add(sao_paulo)
    db.session.add(san_francisco)
    db.session.add(los_angeles)
    db.session.add(austin)
    db.session.add(newark)
    db.session.add(nashville)
    db.session.add(new_york_city)
    db.session.add(boston)
    db.session.add(milwaukee)
    db.session.add(miami)
    db.session.add(louisville)
    db.session.add(san_diego)
    db.session.add(salt_lake_city)
    db.session.add(portland)
    db.session.add(houston)
    db.session.add(paris)
    db.session.add(porto)
    db.session.add(montreal)
    db.session.add(cairo)
    db.session.add(bangkok)
    
    db.session.commit()
    
    
def undo_cities():
    db.session.execute('TRUNCATE cities RESTART IDENTITY CASCADE;')
    db.session.commit()