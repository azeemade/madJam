from flask import Flask
from ..extensions import mail, scheduler


def create_app():
    app = Flask(__name__)

    app.config.from_pyfile('config.py')

    with app.app_context():
        mail.init_app(app)

        from .service.mail import mailer as mailer_blueprint
        app.register_blueprint(mailer_blueprint)

        @app.route("/")
        def index():
            return "Hello world"

    return app
