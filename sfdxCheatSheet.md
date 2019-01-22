
Convert Source data to Metadata in a folder named "deploy":

`sfdx force:source:convert -d deploy/`


Deploy from your "deploy" folder to a previously authenticated org:

`sfdx force:mdapi:deploy -d deploy -u username@domain.com`
