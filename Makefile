install:
	cd ./resources/myresource && yarn install
	cd ./resources/myresource/client/src/views && yarn install

build:
	cd ./resources/myresource && yarn install && yarn build

views:
	cd ./resources/myresource/client/src/views && yarn install && yarn start

start:
	cd ./resources/myresource && yarn install && yarn start