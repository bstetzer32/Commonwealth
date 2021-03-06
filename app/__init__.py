import os
from flask import Flask, render_template, request, session, redirect
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager

from .models import db, User, Category
from .api.user_routes import user_routes
from .api.auth_routes import auth_routes
from .api.category_routes import category_routes
from .api.state_routes import state_routes
from .api.city_routes import city_routes
from .api.feed_routes import feed_routes
from .api.project_routes import project_routes
from .api.discovery_routes import discovery_routes
from .seeds import seed_commands
from .api.search_route import search_route
from .api.donation_routes import donation_routes
from .config import Config

app = Flask(__name__)

# Setup login manager
login = LoginManager(app)
login.login_view = 'auth.unauthorized'


@login.user_loader
def load_user(id):
    return User.query.get(int(id))


# Tell flask about our seed commands
app.cli.add_command(seed_commands)

app.config.from_object(Config)
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(category_routes, url_prefix='/api/category')
app.register_blueprint(state_routes, url_prefix='/api/state')
app.register_blueprint(city_routes, url_prefix='/api/city')
app.register_blueprint(feed_routes, url_prefix='/api/feed')
app.register_blueprint(project_routes, url_prefix='/api/project')
app.register_blueprint(search_route, url_prefix='/api/search')
app.register_blueprint(discovery_routes, url_prefix='/api/discovery')
app.register_blueprint(donation_routes, url_prefix='/api/donation')
db.init_app(app)
Migrate(app, db)

# Application Security
CORS(app)

# Since we are deploying with Docker and Flask,
# we won't be using a buildpack when we deploy to Heroku.
# Therefore, we need to make sure that in production any
# request made over http is redirected to https.
# Well.........


@app.before_request
def https_redirect():
    if os.environ.get('FLASK_ENV') == 'production':
        if request.headers.get('X-Forwarded-Proto') == 'http':
            url = request.url.replace('http://', 'https://', 1)
            code = 301
            return redirect(url, code=code)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie('csrf_token',
                        generate_csrf(),
                        secure=True if os.environ.get(
                            'FLASK_ENV') == 'production' else False,
                        samesite='Strict' if os.environ.get(
                            'FLASK_ENV') == 'production' else None,
                        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    # print("path", path)
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')
