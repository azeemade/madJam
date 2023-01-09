from flask_mail import Mail, Message
from apscheduler.schedulers.background import BlockingScheduler

mail = Mail()
scheduler = BlockingScheduler()
