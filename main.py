import pandas as pd
from urllib.parse import urlparse
import json

import requests as req

list_api = json.load(open('api.json'))


url = list_api["LOKAL"]["TERDAFTAR"].replace(
    "page[limit]=10", "page[limit]=100")

resp = req.get(url)
resp = resp.json()


data = pd.DataFrame(resp["data"])

data
