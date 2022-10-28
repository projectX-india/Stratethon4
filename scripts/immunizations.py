import pandas as pd
import requests
import logging

logging.basicConfig(filename="logs/immunizations.log",format='%(asctime)s %(message)s',filemode='w')
logger = logging.getLogger()
logger.setLevel(logging.DEBUG)

URL = "http://localhost:8001/immunization/insert"
df = pd.read_csv('../Data Generator/output/csv/immunizations.csv')
df = df.fillna('')
count = int(0)
for index,row in df.iterrows():
    if count<91329:
        count+=1
        continue
    data={
        "date":row[0],
        "patientid":row[1],
        "encounterid":row[2],
        "code":row[3],
        "description":row[4],
        "baseCost":row[5]
    }
    r=requests.post(url = URL,json=data)
    logger.debug(str(r.json()))
