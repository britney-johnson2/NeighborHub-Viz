import csv, json
file_name = 'neighbor_hub_data.csv'

# JSON keys that correspond to the headers in the csv file
headerToKey = {
	'Started At': 'startTime',
	'Completed At': 'endTime',
	'Completion Status': 'completionStatus',
	'Which town or city do they live in?': 'cityDetail',
	'City - Categorical': 'city',
	'What works in your town / city?': 'whatWorksDetail',
	'What works - Categorical': 'whatWorks',
	'What does not work in your town / city?': 'notWorkDetail',
	'What doesn\'t work - Categorical': 'notWork',
	'What question would you ask your mayor?': 'mayorDetail',
	'Mayor Question - Categorical': 'mayor',
	'What gives you hope?': 'hopeDetail',
	'Hope - Categorical': 'hope',
	'Are you going to vote in the coming local election?': 'vote'
}

# Read data from file
with open(file_name, 'rb') as csvfile:
	id_reader = csv.DictReader(csvfile)
	data = {}
	for i, row in enumerate(id_reader):
		for j, header in enumerate(row.keys()):
			key = headerToKey[header]
			if i == 0:
				print key
				data[key] = []
			data[key].append(row[header])

# Write json object to file
with open('hub_data.json', 'w') as output:
	output.write(json.dumps(data)) 