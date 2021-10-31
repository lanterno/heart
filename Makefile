build:
	docker build . -t gcr.io/beats-ptc/heart
up:
	docker run gcr.io/beats-ptc/heart