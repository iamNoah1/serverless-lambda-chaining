# serverless-lambda-chaining
This is an example for chaining AWS Lambda Functions with the Servlerless Framework. I also added a trivial integration test  just to show how the response of the second Lambda Function, which is called by the first Lambda Function, can be mocked.


## Prerequisites

* You have made you AWS access and secret key available through a provided method, like storing them in the ~/.aws/credentials file or export them into environment variables
* You need to install Node.js  with a minimum version of 6.5.0 
* Then you need to install the serverless CLI with `sudo npm install -g serverless`


## Deploy

* `serverless deploy -v`


## Invoke

Now you could invoke the Lambda with `serverless invoke -f hello -l` if everything went fine


## Test

* `AWS_REGION=eu-west-1 npm test`


## Undeploy

* `serverless remove`