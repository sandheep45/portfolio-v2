pipeline {
    agent any

    environment {
        IMAGE_NAME = 'portfolio-v2'
        IMAGE_TAG = 'latest'
        CONTAINER_NAME = 'portfolio-v2'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Application') {
            steps {
                script {
                    sh 'npm install -g pnpm'
                    sh 'pnpm install --frozen-lockfile'
                    sh 'pnpm run build'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Stop and remove any existing container with the same name
                    sh '''
                    if [ $(docker ps -aq -f name=${CONTAINER_NAME}) ]; then
                        docker stop ${CONTAINER_NAME} && docker rm ${CONTAINER_NAME}
                    fi
                    '''

                    // Run the new container
                    sh "docker run -d --name ${CONTAINER_NAME} -p 3000:3000 ${IMAGE_NAME}:${IMAGE_TAG}"
                }
            }
        }
    }

    post {
        success {
            echo 'Docker image built and container running locally!'
        }
        failure {
            echo 'Something went wrong with the build or run process.'
        }
        always {
            script {
                echo 'Cleaning up unused Docker resources...'
                sh 'docker system prune -f'
            }
        }
    }
}
