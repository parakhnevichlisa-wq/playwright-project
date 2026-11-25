
pipeline {
    agent any

    parameters {
        choice(
            name: 'BROWSER',
            choices: ['chromium', 'firefox', 'webkit'],
            description: 'Select browser'
        )

        booleanParam(
            name: 'HEADLESS',
            defaultValue: true,
            description: 'Run tests in headless mode'
        )
    }

    environment {
        CI = 'true'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                bat "npx playwright test --project=${params.BROWSER}"
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished'

            archiveArtifacts(
                artifacts: 'allure-results/**',
                allowEmptyArchive: true
            )

            allure([
                includeProperties: false,
                results: [[path: 'allure-results']]
            ])
        }

        success {
            echo 'Tests passed!'
        }

        failure {
            echo 'Tests failed!'
        }
    }
}
