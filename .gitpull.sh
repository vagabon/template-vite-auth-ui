cd ~/project/react-boilerplate/react-boilerplate-md
git pull --rebase
npm i

cd ~/project/react-boilerplate/react-boilerplate-app
git pull --rebase
npm i

cd ~/project/reward-your-community
git pull --rebase
npm i


cd ~/project/vagabon-qarkus-api/vagabond-quarkus-common-api
git pull --rebase
mvn clean install -DskipTests

cd ~/project/vagabon-qarkus-api/vagabond-quarkus-ryc-api
git pull --rebase
mvn clean install -DskipTests
