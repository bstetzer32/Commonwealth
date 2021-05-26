from flask.cli import AppGroup
from .users import seed_users, undo_users
from .states import seed_states, undo_states
from .categories import seed_categories, undo_categories
from .projects import seed_projects, undo_projects
from .cities import seed_cities, undo_cities
# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_states()
    seed_cities()
    seed_users()
    seed_categories()
    seed_projects()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    # undo_states()
    undo_categories()
    undo_projects()
    undo_cities()
    # Add other undo functions here
