import json

with open('pokelist.json') as json_data:
    d = json.load(json_data)

res = open('prettyList.json','w')
res.write(json.dumps(d, indent=4, sort_keys=True))
res.close()

