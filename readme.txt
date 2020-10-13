Hello, Good day!

Clone the project from here via bash/command prompt using command: $ git clone https://github.com/

Open the backend-(django project) from main Directory-ShopBridge in pycharm or any IDE you prefer. 

Activate the pipenv and Install the requirements for the backend in powershell or terminal using command: $pip install -r requirements.txt

Run the following commands @backend: 
	1.python manage.py makemigrations
	2.python manage.py migrate
	3.python manage.py createsuperuser
		please create a credential following for admin purpose.
	4.python manage.py runserver

Here the backend will be running.
Access the link to navigate to API: http://localhost:8000/api/inventory

If you are able to access the API, then please proceed to check fontend.


Open the frontend-(react project) from main Directory-ShopBridge in visual studio code or any, which you prefer.
Install the following dependencies: {create-react-app, yarn, bootstrap, reactstrap, axios, react-router-dom}

Run the command: yarn start

The frontend will start and will be runnning.

you can fill the fields and click on the items to see the details. 

you can delete the item as well.
