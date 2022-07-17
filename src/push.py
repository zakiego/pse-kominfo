import json
import pandas as pd
import sys
import base64
import gspread


# Get Data
data = pd.read_csv("data/master.csv")
data.fillna("", inplace=True)

# Auth

credentials = json.loads(base64.b64decode(sys.argv[1]))
gc = gspread.service_account_from_dict(credentials)


spreadsheet = gc.open_by_key("1BvCZOFRFe2CBpxG_UF3Q6_ylW_qNU3nk6tE349xJNLo")
sheet = spreadsheet.get_worksheet_by_id(0)

# Clear
sheet.batch_clear(['A2:Q'])

# Add Data
sheet.append_rows(data.values.tolist(), table_range="A2")
