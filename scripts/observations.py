import pandas as pd
import requests
import logging

logging.basicConfig(filename="logs/observations.log",format='%(asctime)s %(message)s',filemode='w')
logger = logging.getLogger()
logger.setLevel(logging.DEBUG)

URL = "http://localhost:8001/observation/insert"
df = pd.read_csv('../Data Generator/output/csv/observations.csv')
df = df.fillna('')
count = 0
for index,row in df.iterrows():
    if count < 2479420:
        count+=1
        continue
    data={
        "date":row[0],
        "patientid":row[1],
        "encounterid":row[2],
        "category":row[3],
        "code":row[4],
        "description":row[5],
        "value":row[6],
        "units":row[7],
        "type":row[8]
    }
    r=requests.post(url = URL,json=data)
    logger.debug(str(r.json()))


