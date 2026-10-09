
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Check Node') {
            steps {
                bat 'node --version'
                bat 'call npm --version'
            }
        }

        stage('Install Dependencies') {
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
    }
}
