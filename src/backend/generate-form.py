import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

# read data from the database
docs = db.collection('typeform-responses').stream()
doc = None
for temp in docs:
    # print(f'{temp.id} => {temp.to_dict()}')
    doc = temp.to_dict()
    break

print(doc) 
