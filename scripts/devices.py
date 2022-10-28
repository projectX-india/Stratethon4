import pandas as pd
import requests
import logging

logging.basicConfig(filename="logs/devices.log",format='%(asctime)s %(message)s',filemode='w')
logger = logging.getLogger()
logger.setLevel(logging.DEBUG)

URL = "http://localhost:8001/device/insert"
df = pd.read_csv('../Data Generator/output/csv/devices.csv')
df = df.fillna('')

for index,row in df.iterrows():
    data={
        "start":row[0],
        "stop":row[1],
        "patientid":row[2],
        "encounterid":row[3],
        "code":row[4],
        "description":row[5],
        "udi":row[6]
    }
    r=requests.post(url = URL,json=data)
    logger.debug(str(r.json()))


