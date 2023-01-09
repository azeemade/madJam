# from flask import Blueprint
from ...extensions import mail, Message

from .mail_html import html
from . import mailer


@mailer.route("/send", methods=['GET'])
def send_mail():
    msg = Message('Hello from the other side!', sender='madjamng@gmail.com',
                  recipients=['adenugaazeem80@gmail.com'])
    msg.html = html
    mail.send(msg)
    return "Message sent!"
