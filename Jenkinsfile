
pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                bat 'call npm ci'
            }
        }

        stage('Test') {
            steps {
                bat 'call npm test'
            }
        }

        stage('Build') {
            steps {
                bat 'call npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build -t jenkins-node-demo:%BUILD_NUMBER% .'
            }
        }
    }
}
