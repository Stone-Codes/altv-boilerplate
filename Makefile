install:
	cd ./resources/myresource && yarn install

build:
	cd ./resources/myresource && yarn install && yarn build

views:
	cd ./resources/myresource/client/src/views && yarn install && yarn start