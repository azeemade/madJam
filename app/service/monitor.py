from flask import current_app

from datetime import datetime
from apscheduler.schedulers.background import BlockingScheduler
import os
import json

from .recently_added import recently_added
from .scrap import scrap

# Declare var of our URL and HEADER
URL_TO_SCRAP = current_app.config['URL_TO_SCRAP']

# BlockingScheduler: use when the scheduler is the only thing running in your process
scheduler = BlockingScheduler()

# Create a json file if it does not exist
if not os.path.exists("previous_content.json"):
    with open("previous_content.json", 'w+') as f:
        json.dump('', f)

# Read the JSON content in the file
with open("previous_content.json", 'r') as openfile:
    previous_json = json.load(openfile)


# Define the function that is to be executed at a scheduled time
def monitor():

    # Define the updated string from scrap module
    updated_string = scrap(URL_TO_SCRAP)

    # If the content of the JSON file is equal to the updated_string variable from scrap module, do nothing
    if previous_json == updated_string:
        return False
        # Else write the content of the updated _string variable to the JSON file. Then return True
    else:
        with open("previous_content.json", "w") as outfile:
            json.dump(updated_string, outfile)
            weekly = recently_added(previous_json, updated_string)
        # return True
    return weekly

# Schedules the monitor function to be executed Monday through Friday at between 12-16 at specific times.
# scheduler.add_job(monitor, 'cron', day_of_week='mon-fri', hour='09-18', minute='5,10,15,18,24,25,27,30,35,40,45,53,55', start_date='2022-12-22 12:00:00', timezone='Africa/Lagos')

# Start the scheduler
# scheduler.start()
