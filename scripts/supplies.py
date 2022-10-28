import pandas as pd
import requests
import logging

logging.basicConfig(filename="logs/supplies.log",format='%(asctime)s %(message)s',filemode='w')
logger = logging.getLogger()
logger.setLevel(logging.DEBUG)

URL = "http://localhost:8001/supply/insert"
df = pd.read_csv('../Data Generator/output/csv/supplies.csv')
df = df.fillna('')
for index,row in df.iterrows():
    data={
        "date":row[0],
        "patientid":row[1],
        "encounterid":row[2],
        "code":row[3],
        "description":row[4],
        "quantity":row[5]
    }
    r=requests.post(url = URL,json=data)
    logger.debug(str(r.json()))


