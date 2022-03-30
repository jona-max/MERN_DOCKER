### MERN_DOCKER

##### SERVER PART
###### build: 
	run the line of code below to build backend server
	docker build -t api-server .

###### run:
	to start the backend only run the line of code below
	docker run -d -p 5000:5000 api-server

##### REACT APP
###### build: 
	run the line of code below to build the frontend
	docker build -t react-app .

###### run: 
	to start the react frontend only run the line of code below
	docker run -i -d -p 3000:3000 react-app

##### DOCKER RUN
###### run: 
	run the line of code below to start both the backend and frontend on docker
	docker-compose up

###### stop: 
	run the below code to stop the docker
	docker-compose down
