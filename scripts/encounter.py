import pandas as pd
import requests
import logging

logging.basicConfig(filename="logs/encounter.log",format='%(asctime)s %(message)s',filemode='w')
logger = logging.getLogger()
logger.setLevel(logging.DEBUG)

URL = "http://localhost:8001/encounter/insert"
df = pd.read_csv('../Data Generator/output/csv/encounters.csv')
df = df.fillna('')

for index,row in df.iterrows():
    data={
        "id":row[0],
        "start":row[1],
        "stop":row[2],
        "patientid":row[3],
        "organizationid":row[4],
        "providerid":row[5],
        "payerid":row[6],
        "encounterClass":row[7],
        "code":row[8],
        "description":row[9],
        "baseEncounterCost":row[10],
        "totalClaimCost":row[11],
        "payerCoverage":row[12],
        "reasonCode":row[13],
        "reasonDescription":row[14]
    }
    r=requests.post(url = URL,json=data)
    logger.debug(str(r.json()))
