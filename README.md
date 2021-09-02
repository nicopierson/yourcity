<p align='center'>
  <img src='./readme-assets/images/your-city-logo-black.png' height='200px'>
</p>

# YourCity
YourCity is a city matching App that matches users to their ideal city. It is a fullstack React App made with a Redux state manager and a backend using Python, Flask, SQL-Alchemy, and PostgresSQL. 

* View the <a href='https://yourcity-app.herokuapp.com/'>YourCity</a> App Live

* Reference to the YourCity <a href='https://www.github.com/nicopierson/yourcity/wiki'>Wiki Docs</a>

| Table of Contents |
| ----------------- |
| 1. [Features](#features) |
| 2. [Installation](#installation) |
| 3. [Technical Implementation Details](#technical-implementation-details) |
| 4. [Future Features](#future-features) |
| 5. [Contact](#contact) |
| 6. [Special Thanks](#special-thanks) |


## Technologies
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/-JavaScript-F7DF1E?logo=JavaScript&logoColor=333333" /></a>
* <a href="https://www.postgresql.org/"><img src="https://img.shields.io/badge/-PostgreSQL-336791?logo=PostgreSQL&logoColor=white" /></a>
* <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white"></a>
* <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB"></a>
* <a href="https://redux.js.org/"><img src="https://img.shields.io/badge/redux-%23593d88.svg?style=flat&logo=redux&logoColor=white"></a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/-CSS3-1572B6?logo=CSS3" /></a>
* <a href="https://www.python.org/"><img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=yellow" /></a>
* <a href="https://flask.palletsprojects.com/"><img src="https://img.shields.io/badge/Flask-000000?style=flat&logo=flask&logoColor=white" /></a>
* <a href="https://www.heroku.com/home"><img src="https://img.shields.io/badge/Heroku-430098?style=flat&logo=heroku&logoColor=white" /></a>


## Features

### Sign Up and Login Pages
![Sign Up](./readme-assets/images/sign-up.jpg)
![Login](./readme-assets/images/login.jpg)

### Splash Page
Discover and search for new cities
![Feed Page](./readme-assets/images/splash.jpg)

Features
![Splash Features](./readme-assets/images/splash-features.jpg)

## Profile
Profile card about user and view cities
![Profile](./readme-assets/images/profile.jpg)

## Feed Tab
YourCity feed displays all cities
![Feed Page](./readme-assets/images/feed.jpg)

### View, Add, Edit, and Delete Cities
Single city of name, photos, insights
![City Page](./readme-assets/images/city.jpg)

#### Add a City
<p align='center'>
<img alt="follow" src="./readme-assets/images/city-add.png" height=300/>
</p>

#### Cancel adding city
<p align='center'>
<img alt="follow" src="./readme-assets/images/city-cancel-confirmation.png" height=300/>
</p>

#### Edit a city
![Edit City](./readme-assets/images/city-edit.png)

### Create, Read, Update, Delete City Insights

#### View Insights
<p align='center'>
<img alt="follow" src="./readme-assets/images/insight-view.png" height=400/>
</p>

#### Add Insights
<p align='center'>
<img alt="follow" src="./readme-assets/images/insight-add.png" height=200/>
</p>

#### Edit Insights
<p align='center'>
<img alt="follow" src="./readme-assets/images/insight-edit.png" height=200/>
</p>


## Installation
To build/run project locally, please follow these steps:

1. Clone this repository

```shell
git clone https://github.com/{github-handle}/{app-name}.git
```

2. Install Pipfile dependencies and create the virtual environment
```shell
pipenv install
```

2. Install npm dependencies for the `/react-app`

```shell
cd react-app
npm install
```

3. In the `/` root directory, create a `.env` based on the `.env.example` with proper settings

4. Setup your PostgreSQL user, password and database and ensure it matches your `.env` file

5. Before running any flask commands, confirm you are in the pipenv virtual env. If not, run the command:
```shell
pipenv shell
```

5. In the root folder, create the database by running in the terminal:
```shell
flask db create
```

6. In the root folder, migrate tables to the database by running in the terminal:
```shell
flask db migrate
```

7. In the root folder, seed the database by running in the terminal:
```shell
flask seed all
```

8. Start the flask backend in the `/` root directory
```shell
flask run
```

9. Start the frontend in the `/react-app` directory

```javascript
npm start
```


## Technical Implementation Details

### City Validators
This is the first project I used flask and SQLAlchemy, and I didn't have much experience using the wtform validators. After reading documentation, I created Forms to validate required fields with `DataRequired` and the length of fields with the `Length` class by providing a min and max.

Code snippet is shown here:

```python
class CityPostForm(FlaskForm):
    name = StringField('name', validators=[DataRequired(), city_exists, Length(min=1, max=80)])
    state = StringField('state', validators=[Length(min=0, max=50)])
    thumbnail_img = StringField('thumbnail_img', validators=[Length(min=0, max=800)])
    description = StringField('description', validators=[Length(min=0, max=1200)])
    user_id = IntegerField('user_id', validators=[DataRequired()])
```

The form is created from the POST route to create a city, and it is validated using the validators above. If any fields throw an error, then the `form.validate_on_submit()` will fail and return the errors from `form.errors`. The resulting errors are passed into a custom error handler that sends back each of the errors to the frontend to display to the user, e.g. 'Field is required' or 'Name field must be between 0 and 100 characters in length'.

```python
@city_routes.route('/', methods=['POST'])
@login_required
def city_post():
        form = CityPostForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            city = City()
            form.populate_obj(city)
            try:
                db.session.add(city)
                db.session.commit()
                return city.to_dict()
            except:
                return throw_server_error()
        return throw_validation_error(form.errors)
```


### Read More for Long Posts (Insights)
Posts for insights are can span an entire page, which is not ideal for user experience. In order to limit the length, I created a `Read More` and `Show Less` buttons to conditionally render the entire post and to hide the post. I was able to use the `scrollHeight` and `offsetHeight` of the textarea input to determine if the text was overfilling the container. If the scroll is greater than the offset, then the post is longer and a `Read More` button should appear.

The frontend uses the `isOverflow` state to initially determine if the post is overflowing. 

```javascript
const [showMore, setShowMore] = useState(false);
const [isOverflow, setIsOverflow] = useState(true);

  
useEffect(() => {
  const scrollHeight = document.getElementById(`insight__text_id-${insight.id}`)?.scrollHeight;
  const offsetHeight = document.getElementById(`insight__text_id-${insight.id}`)?.offsetHeight;

  if (scrollHeight && offsetHeight) {
    if (scrollHeight > offsetHeight) {
      setShowMore(false);
    } else {
      setShowMore(true);
      setIsOverflow(false);
    }
  }
}, [insight.id]);
```

The `showMore` state is used to conditionally render a short post and the entire post. If `showMore` is false the component will render a cut off post that has a `Read more` click event to toggle the state. When the `Read more` is clicked, `showMore` is set to true and the component now renders the entire post.

In addition the `isOverflow` is used to render `Show less` only if the post is overfilling the container.

```javascript
{!showMore &&
  <>
    <p>
      <span>
        { username }
      </span>
      { insight.insight }
    </p>
    <p className={styles.text_dots}>...</p>
    <span 
      onClick={() => setShowMore(true)}
    >
      Read more
    </span>
  </>
}
{showMore &&
  <>
    <p>
      <span>
        { username }
      </span>  
      { insight.insight }
    </p>
    {isOverflow &&
      <span 
        onClick={() => setShowMore(false)}
      >
        Show less
      </span>
    }
  </>
}
```

### City Reducer
One of my goals on this project was to create a simple reducer with slices of state for each table. Taking code from one of my previous projects, I refactored the code to create four actions. The `SET_CITY` action case is used for updating the store for the CRUD operations of CREATE, UPDATE, and READ.

The reducer for my City table is shown below:

```javascript
export default function reducer(state = {}, action) {
  let newState = { ...state };
  switch (action.type) {
    case SET_CITY:
      newState[action.city.id] = action.city;
      return newState;
    case SET_ALL_CITIES:
      action.cities.forEach(city => {
          newState[city.id] = city;
      });
      return newState;
    case DELETE_CITY:
      delete newState[action.cityId];
      return newState;
    case UNLOAD_CITIES:
      newState = {}
      return newState;
    default:
      return state;
  }
}
```


## Future Features

1. __Matches__ - match people with cities based on their question responses

2. __Search__ - search cities

3. __Edit Profile__ - users edit profile info and add banner


## Contact

### Nico Pierson
<a href="https://www.linkedin.com/in/nico-pierson/"><img src="./readme-assets/logos/linkedin-logo.png" height="28" align="middle" /></a>
<a href="https://angel.co/u/nico-gerard-pierson"><img src="./readme-assets/logos/angellist-logo.png" height="28" align="middle" /></a>
<a href="https://github.com/nicopierson"><img src="./readme-assets/logos/github-logo.png" height="38" align="middle" /></a>

nicogpt@gmail.com


## Special Thanks
* Fellow peers who have given me support and community: [Andrew and Kira](https://github.com/andru17urdna), [Henry](https://github.com/hnrywltn), [Pierre](https://github.com/TheGuilbotine), [Lema](https://github.com/lemlooma), [Meagan](https://github.com/meagan13), [Simon](https://github.com/Simonvargas), [Michelle](https://github.com/michellekontoff), [John](https://github.com/Jomix-13), [Justice](https://github.com/jujmart), [Jubin](https://github.com/Jubintgh), and [Torrell](https://github.com/tkenned2020)
* Mentors who have given me their time and effort: [Zach](https://github.com/zdwatts), [Olivia](https://github.com/OByrnes), [Ed](https://github.com/edherm), and [Javier](https://github.com/javiermortiz) 
* My partner: [Thayse](https://www.linkedin.com/in/thayse-alencar-946703196/)
