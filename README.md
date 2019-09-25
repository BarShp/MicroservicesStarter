# MicroserviceStarter

Microservice Starter was made to quickly and automatically run selected microservices while coding, instead of manually running each microservice.
It only works for windows at the moment.
In order for it to recognize a microservice in a path, the specific microservice folder should contain a file named "microservice" (without a file extension), containing the start-command.

E.g: 

### YourPath/MicroservicesParentFolder/MyDotNetMicroservice/microservice
``` json
{
  "startCommand": "dotnet run"
}
```

### YourPath/MicroservicesParentFolder/MyNodeMicroservice/microservice
``` json
{
  "startCommand": "npm start:my-own-start-command"
}
```
