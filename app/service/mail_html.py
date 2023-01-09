from .monitor import monitor

tracks = monitor()

html = """
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <div style="margin: 0.75rem; padding: 1rem; background-color: white;">
        <div style="background-color: white; padding:2.5rem 1.5rem; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
            <p style="font-size: 2.5rem; margin-bottom: 1.5rem; font-weight: 700;">madJam</p>
            <p style="color: #DCDADE; margin-bottom: 1.5rem;">Here are the top ten songs of the week from the monthly playlist</p>
            """
if tracks:
    for item in tracks:
        html = html + """<div>
                            <p style="margin-bottom: 0px;">""" + item['title'] + """</p>
                            <p style="color: #DCDADE; font-size: 0.875rem; line-height: 1.25rem;”>""" + item['artist'] + """</p>
                        </div>"""
html = html + """
            <p style="color: #DCDADE; font-size: 0.875rem; margin-top: 2.5rem; text-align: center;">sent with ❤️ from madJam</p>
        </div>
    </div>
</body>
</html>
"""
