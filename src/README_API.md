FLIGHT API READ ME
key = bz9rCiH0vSVV9cX5hblp4Chc2LLFANH2

=== === IGNORE THIS ~~~ PROBABLY USING DIFFERENT API === ===

tutorial = https://github.com/flightaware/firestarter

You must set the following variables (in your environment or a .env file) before you can start using Firestarter.

FH_USERNAME - Your FlightAware Firehose account username
FH_APIKEY - The key to your FlightAware Firehose account
INIT_CMD_ARGS - Firehose initiation command; more information about this is available at https://flightaware.com/commercial/firehose/documentation/commands and in the env section of docker-compose.yml. Its value will vary based on your account configuration, but a very basic example that should work for most users is events "flifo departure arrival cancellation position".

docker-compose pull && docker-compose up

docker-compose pull pulls prebuilt images from the Github Container Registry, and docker-compose up creates containers from those images and launches them. If you'd like to build the images yourself, you can instead run docker-compose up --build.

After running the above command, you should be greeted with log output from each container. The services will log periodically as Firehose messages are received, while the sample webapps will produce some initial log output and then only log as requests are made to them.

You can test out the FIDS sample application by visiting http://localhost:8080 in your web browser (if not running Docker locally, use the Docker host's address). The map sample application can be accessed at http://localhost:5001.

If you are running on Mac OS Monterrey or later, disable "AirPlay Receiver" in System Preferences > Sharing > AirPlay Receiver. It runs on port 5000, which is the same port as the FIDS backend application.
