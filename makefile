THIS_FILE := $(lastword $(MAKEFILE_LIST))
.PHONY: help start stop restart

BUILD_FILES := docker-compose.yaml -f dashboard/docker-compose.yaml -f api/docker-compose.yaml -f postgres/docker-compose.yaml

help:	## Show this help.
	@sed -ne '/@sed/!s/## //p' $(MAKEFILE_LIST)

start:	## Brings the stack up
	docker-compose -f ${BUILD_FILES} up -d $(c)

stop:	## Brings the stack down
	docker-compose -f ${BUILD_FILES} down $(c)
